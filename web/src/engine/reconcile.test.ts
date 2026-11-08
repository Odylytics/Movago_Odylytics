import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CASES } from '../cases'
import { findDuplicate, parseCsv, reconcile, sha256Hex } from './reconcile'

const sample = (f: string) => readFileSync(new URL(`../../public/samples/${f}`, import.meta.url))
const csv = (f: string) => parseCsv(sample(f).toString('utf8'))
const run = (id: string, rates?: ReturnType<typeof csv>) => {
  const c = CASES.find((x) => x.id === id)!
  return reconcile(c.header, csv('invoice-lines.csv'), csv(c.shipmentFile), rates ?? csv(c.rateFile))
}
const line = (r: ReturnType<typeof run>, code: string) => r.lines.find((l) => l.feeCode === code)!

describe('acceptance cases', () => {
  it('INV-095: freight matches, DOC +800,000 pre-tax, sources page 1 and RATE-V3 line 12', () => {
    const r = run('INV-095')
    expect(r.shipment?.shipment_id).toBe('SHP-001')
    expect(line(r, 'OCEAN')).toMatchObject({ status: 'matched', expected: 8_000_000, diff: 0 })
    const doc = line(r, 'DOC')
    expect(doc).toMatchObject({ status: 'discrepancy', invoiced: 1_300_000, expected: 500_000, diff: 800_000 })
    expect(doc.invoiceSource.page).toBe(1)
    expect(doc.rateSource).toEqual({ rateCard: 'RATE-V3', line: 12 })
    expect(r.invoicedTotal).toBe(9_300_000)
    expect(r.expectedTotal).toBe(8_500_000)
    expect(r.arithmeticOk).toBe(true)
    expect(r.overall).toBe('needs_review')
  })

  it('match variant: both lines match, total 8,500,000', () => {
    const r = run('INV-095-MATCH')
    expect(r.lines.map((l) => l.status)).toEqual(['matched', 'matched'])
    expect(r.invoicedTotal).toBe(8_500_000)
    expect(r.overall).toBe('matched')
  })

  it('missing DOC rate: freight matches, DOC missing basis with empty expected and diff', () => {
    const r = run('INV-095-NORATE')
    expect(line(r, 'OCEAN').status).toBe('matched')
    expect(line(r, 'DOC')).toMatchObject({ status: 'missing_basis', expected: null, diff: null, rateSource: null })
    expect(r.expectedTotal).toBeNull()
  })

  it('INV-VN-020: THD +1,800,000 (40ft rate on a 20ft box), DOF 950,000 matches', () => {
    const r = run('INV-VN-020')
    expect(line(r, 'THD')).toMatchObject({ status: 'discrepancy', expected: 3_000_000, diff: 1_800_000 })
    expect(line(r, 'DOF')).toMatchObject({ status: 'matched', expected: 950_000 })
  })

  it('ambiguous rate (two rows match) becomes missing basis', () => {
    const rates = csv('RATE-V3.csv')
    const docRow = rates.find((x) => x._line === '12')!
    const r = run('INV-095', [...rates, { ...docRow, unit_price: '600000', _line: '99' }])
    expect(line(r, 'DOC')).toMatchObject({ status: 'missing_basis', diff: null })
  })

  it('expired rate version is not used', () => {
    const r = run('INV-095')
    expect(line(r, 'OCEAN').unitPrice).toBe(8_000_000)
  })
})

describe('resubmission', () => {
  it('a renamed identical PDF is detected as already received', async () => {
    const first = await sha256Hex(new Uint8Array(sample('INV-095.pdf')).buffer)
    const again = await sha256Hex(new Uint8Array(sample('INV-095-resent.pdf')).buffer)
    const history = [{ hash: first, fileName: 'INV-095.pdf', invoiceId: 'INV-095', receivedAt: '2026-11-06T09:00:00Z' }]
    expect(findDuplicate(again, history)?.invoiceId).toBe('INV-095')
    const other = await sha256Hex(new TextEncoder().encode('different file').buffer as ArrayBuffer)
    expect(findDuplicate(other, history)).toBeNull()
  })
})
