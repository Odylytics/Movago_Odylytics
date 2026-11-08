// Movago reconciliation rules. Pure functions: no DOM, no fetch, so tests run in Node.

export type Row = Record<string, string>

/** Rows carry `_line`: the 1-based line number in the source file (header = line 1). */
export function parseCsv(text: string): Row[] {
  // shortcut: no quoted fields, sample files never contain commas inside values; use a real CSV parser for pilot files.
  const lines = text.replace(/\r/g, '').split('\n')
  const header = lines[0].split(',').map((h) => h.trim())
  const rows: Row[] = []
  lines.slice(1).forEach((line, i) => {
    if (!line.trim()) return
    const cells = line.split(',')
    const row: Row = { _line: String(i + 2) }
    header.forEach((h, j) => (row[h] = (cells[j] ?? '').trim()))
    rows.push(row)
  })
  return rows
}

export interface InvoiceHeader {
  invoiceId: string
  supplier: string
  shipmentId: string
  blNumber: string
  currency: string
  statedSubtotal: number
}

export type LineStatus = 'matched' | 'discrepancy' | 'missing_basis'
export type ReasonCode = 'ok' | 'diff' | 'no_shipment' | 'no_rate' | 'ambiguous'

export interface LineResult {
  feeCode: string
  description: string
  quantity: number
  unit: string
  invoiced: number
  expected: number | null
  unitPrice: number | null
  diff: number | null
  status: LineStatus
  reasonCode: ReasonCode
  reason: string
  invoiceSource: { page: number; lineLabel: string; csvLine: number }
  rateSource: { rateCard: string; line: number } | null
}

export interface ReconcileResult {
  shipment: Row | null
  shipmentIssue: string | null
  lines: LineResult[]
  invoicedTotal: number
  expectedTotal: number | null
  arithmeticOk: boolean
  overall: 'matched' | 'needs_review'
}

const num = (s: string) => Number(s)

export function matchShipment(header: InvoiceHeader, shipments: Row[]): { shipment: Row | null; issue: string | null } {
  const hits = shipments.filter(
    (s) => (s.shipment_id === header.shipmentId || s.bl_number === header.blNumber) && s.supplier === header.supplier,
  )
  if (hits.length === 1) return { shipment: hits[0], issue: null }
  if (hits.length === 0) return { shipment: null, issue: 'No shipment record matches the invoice reference and supplier.' }
  return { shipment: null, issue: 'Several shipment records match; the accountant must choose one.' }
}

/** Approved rate rows that apply to this shipment, fee code and unit on the rating date. */
export function candidateRates(shipment: Row, feeCode: string, unit: string, currency: string, rates: Row[]): Row[] {
  const d = shipment.rating_date
  return rates.filter(
    (r) =>
      r.supplier === shipment.supplier &&
      r.origin === shipment.origin &&
      r.destination === shipment.destination &&
      (r.container_type === shipment.container_type || r.container_type === 'ANY') &&
      (r.via_cai_mep === shipment.via_cai_mep || r.via_cai_mep === 'any') &&
      r.fee_code === feeCode &&
      r.unit === unit &&
      r.currency === currency &&
      r.effective_from <= d &&
      d <= r.effective_to,
  )
}

export function reconcile(header: InvoiceHeader, invoiceLines: Row[], shipments: Row[], rates: Row[]): ReconcileResult {
  const lines = invoiceLines.filter((l) => l.invoice_id === header.invoiceId)
  const { shipment, issue } = matchShipment(header, shipments)
  const invoicedTotal = lines.reduce((s, l) => s + num(l.amount), 0)

  const results: LineResult[] = lines.map((l) => {
    const base = {
      feeCode: l.fee_code,
      description: l.description,
      quantity: num(l.quantity),
      unit: l.unit,
      invoiced: num(l.amount),
      invoiceSource: { page: num(l.page), lineLabel: l.line_label, csvLine: num(l._line) },
    }
    const missing = (reasonCode: ReasonCode, reason: string): LineResult => ({
      ...base, expected: null, unitPrice: null, diff: null, status: 'missing_basis', reasonCode, reason, rateSource: null,
    })
    if (!shipment) return missing('no_shipment', issue ?? 'Shipment not matched.')
    const hits = candidateRates(shipment, l.fee_code, l.unit, header.currency, rates)
    if (hits.length === 0) return missing('no_rate', `No approved rate for ${l.fee_code} per ${l.unit} on ${shipment.rating_date}. Add the rate or an approval.`)
    if (hits.length > 1) return missing('ambiguous', `${hits.length} approved rates match ${l.fee_code} with no priority rule; pricing must confirm which applies.`)
    const r = hits[0]
    const expected = num(l.quantity) * num(r.unit_price)
    const diff = num(l.amount) - expected
    return {
      ...base,
      expected,
      unitPrice: num(r.unit_price),
      diff,
      status: diff === 0 ? 'matched' : 'discrepancy',
      reasonCode: diff === 0 ? 'ok' : 'diff',
      reason: diff === 0 ? 'Matches the approved rate.' : 'Invoiced amount differs from the approved rate; ask pricing whether an extra approval exists.',
      rateSource: { rateCard: r.rate_card, line: num(r._line) },
    }
  })

  const allPriced = results.every((r) => r.expected !== null)
  return {
    shipment,
    shipmentIssue: issue,
    lines: results,
    invoicedTotal,
    expectedTotal: allPriced ? results.reduce((s, r) => s + (r.expected ?? 0), 0) : null,
    arithmeticOk: invoicedTotal === header.statedSubtotal,
    overall: results.length > 0 && results.every((r) => r.status === 'matched') ? 'matched' : 'needs_review',
  }
}

export interface IntakeRecord { hash: string; fileName: string; invoiceId: string; receivedAt: string }

export function findDuplicate(hash: string, history: IntakeRecord[]): IntakeRecord | null {
  return history.find((h) => h.hash === hash) ?? null
}

export async function sha256Hex(bytes: ArrayBuffer): Promise<string> {
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}
