import { describe, expect, it } from 'vitest'
import { roi } from './roi'

describe('ROI scenario from the brief', () => {
  it('1,000 invoices, 15 → 9 min, 60,000 ₫/h: 100 h and 6,000,000 ₫ a month; 3,000,000 ₫ fee breaks even at 3 min', () => {
    const r = roi({ invoices: 1000, minBefore: 15, minAfter: 9, hourly: 60_000, fee: 3_000_000 })
    expect(r.hours).toBe(100)
    expect(r.timeValue).toBe(6_000_000)
    expect(r.net).toBe(3_000_000)
    expect(r.breakEvenMin).toBe(3)
  })
  it('3 and 9 minutes saved give 3 and 9 million ₫', () => {
    expect(roi({ invoices: 1000, minBefore: 15, minAfter: 12, hourly: 60_000, fee: 0 }).timeValue).toBe(3_000_000)
    expect(roi({ invoices: 1000, minBefore: 15, minAfter: 6, hourly: 60_000, fee: 0 }).timeValue).toBe(9_000_000)
  })
  it('never reports negative savings and handles zero volume', () => {
    expect(roi({ invoices: 1000, minBefore: 9, minAfter: 15, hourly: 60_000, fee: 0 }).hours).toBe(0)
    expect(roi({ invoices: 0, minBefore: 15, minAfter: 9, hourly: 60_000, fee: 3_000_000 }).breakEvenMin).toBeNull()
  })
})
