import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseCsv } from './engine/reconcile'
import { QUOTE, REVIEW_THRESHOLD, toRateCsv } from './rateQuote'

const key = (r: Record<string, string>) => [r.supplier, r.origin, r.destination, r.container_type, r.fee_code, r.unit, r.unit_price, r.effective_from, r.effective_to].join('|')

describe('rate-card builder', () => {
  it('approving every quotation line reproduces the Supplier A rows of RATE-V3 used by the reconciliation', () => {
    const built = parseCsv(toRateCsv(QUOTE, new Set(QUOTE.lines.map((l) => l.line)))).map(key).sort()
    const rateV3 = parseCsv(readFileSync(new URL('../public/samples/RATE-V3.csv', import.meta.url), 'utf8'))
      .filter((r) => r.supplier === 'Supplier A' && r.origin === 'Singapore' && r.destination === 'Cat Lai' && r.rate_card === 'RATE-V3')
      .map(key).sort()
    expect(built).toEqual(rateV3)
  })

  it('leaves unapproved lines out of the exported rate card', () => {
    const rows = parseCsv(toRateCsv(QUOTE, new Set([1, 5])))
    expect(rows.map((r) => r.fee_code)).toEqual(['OCEAN', 'DOC'])
  })

  it('flags the low-confidence lines for one-by-one review', () => {
    expect(QUOTE.lines.filter((l) => l.confidence < REVIEW_THRESHOLD).map((l) => l.line)).toEqual([6, 9])
  })
})
