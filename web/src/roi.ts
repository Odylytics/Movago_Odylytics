// ROI scenario from colio_ai_project_brief.md §4. Time value is capacity freed, not cash saved.
export interface RoiInput { invoices: number; minBefore: number; minAfter: number; hourly: number; fee: number }

export function roi({ invoices, minBefore, minAfter, hourly, fee }: RoiInput) {
  const minutesSaved = Math.max(0, minBefore - minAfter)
  const hours = (invoices * minutesSaved) / 60
  const timeValue = hours * hourly
  const perMinute = (invoices * hourly) / 60 // value of saving one minute on every invoice
  return {
    minutesSaved,
    hours,
    timeValue,
    net: timeValue - fee,
    breakEvenMin: perMinute > 0 ? fee / perMinute : null,
  }
}
