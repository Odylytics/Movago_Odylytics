// Rate-card builder data: what "AI reads the quotation" returns for QUOTE-SA-2611.pdf.
// Simulated like the invoice step: fields are pre-extracted with their line on the page and a confidence score.

export interface QuoteLine {
  line: number
  asWritten: string
  feeCode: string
  container: string
  unit: 'CONTAINER' | 'BL'
  price: number
  confidence: number
  note?: { en: string; vi: string }
}

export const QUOTE = {
  file: 'QUOTE-SA-2611.pdf',
  quoteNo: 'Q-SA-2611',
  supplier: 'Supplier A',
  origin: 'Singapore',
  destination: 'Cat Lai',
  validFrom: '2026-11-01',
  validTo: '2026-11-30',
  rateCard: 'RATE-V3',
  lines: [
    { line: 1, asWritten: 'Ocean freight', feeCode: 'OCEAN', container: '20 DRY', unit: 'CONTAINER', price: 8_000_000, confidence: 0.98 },
    { line: 2, asWritten: 'Ocean freight', feeCode: 'OCEAN', container: '40 DRY', unit: 'CONTAINER', price: 12_000_000, confidence: 0.97 },
    { line: 3, asWritten: 'THC - terminal handling', feeCode: 'THC', container: '20 DRY', unit: 'CONTAINER', price: 900_000, confidence: 0.96 },
    { line: 4, asWritten: 'THC - terminal handling', feeCode: 'THC', container: '40 DRY', unit: 'CONTAINER', price: 1_100_000, confidence: 0.96 },
    { line: 5, asWritten: 'Phi chung tu / Documentation fee', feeCode: 'DOC', container: '20 DRY', unit: 'BL', price: 500_000, confidence: 0.95 },
    {
      line: 6, asWritten: 'Documentation fee', feeCode: 'DOC', container: '40 DRY', unit: 'BL', price: 700_000, confidence: 0.84,
      note: { en: 'Unit read as per B/L, but the row sits among per-container charges. Check the unit.', vi: 'Đơn vị đọc được là theo B/L nhưng dòng nằm giữa các phí theo container. Kiểm tra lại đơn vị.' },
    },
    { line: 7, asWritten: 'Seal fee', feeCode: 'SEAL', container: '20 DRY', unit: 'CONTAINER', price: 150_000, confidence: 0.94 },
    { line: 8, asWritten: 'AMS filing', feeCode: 'AMS', container: '20 DRY', unit: 'BL', price: 300_000, confidence: 0.93 },
    {
      line: 9, asWritten: 'Phu phi an ninh cang', feeCode: 'ISPS', container: '20 DRY', unit: 'CONTAINER', price: 250_000, confidence: 0.71,
      note: { en: 'Vietnamese name without diacritics. AI suggests ISPS (port security); confirm the fee code.', vi: 'Tên tiếng Việt không dấu. AI gợi ý mã ISPS (an ninh cảng); xác nhận mã phí.' },
    },
  ] as QuoteLine[],
}

/** Lines below this confidence must be opened and approved one by one. */
export const REVIEW_THRESHOLD = 0.9

export const RATE_HEADER = 'supplier,origin,destination,container_type,fee_code,unit,currency,unit_price,effective_from,effective_to,via_cai_mep,rate_card'

/** Approved quotation lines as rows in the rate-card CSV schema used by the reconciliation engine. */
export function toRateCsv(q: typeof QUOTE, approved: ReadonlySet<number>): string {
  const rows = q.lines
    .filter((l) => approved.has(l.line))
    .map((l) => [q.supplier, q.origin, q.destination, l.container, l.feeCode, l.unit, 'VND', l.price, q.validFrom, q.validTo, 'no', q.rateCard].join(','))
  return [RATE_HEADER, ...rows].join('\n') + '\n'
}
