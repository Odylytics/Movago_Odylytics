import type { InvoiceHeader } from './engine/reconcile'

export interface DemoCase {
  id: string
  header: InvoiceHeader
  invoiceDate: string
  vatRate: number
  shipmentFile: string
  rateFile: string
  pdfFile: string | null
}

// All cases are simulated. INV-VN-020 uses ONE Vietnam's published 2026 surcharge advisory as the approved basis.
export const CASES: DemoCase[] = [
  {
    id: 'INV-095',
    header: { invoiceId: 'INV-095', supplier: 'Supplier A', shipmentId: 'SHP-001', blNumber: 'BL-SG-001', currency: 'VND', statedSubtotal: 9_300_000 },
    invoiceDate: '2026-11-06',
    vatRate: 0.1,
    shipmentFile: 'SHP-001.csv',
    rateFile: 'RATE-V3.csv',
    pdfFile: 'INV-095.pdf',
  },
  {
    id: 'INV-095-MATCH',
    header: { invoiceId: 'INV-095-MATCH', supplier: 'Supplier A', shipmentId: 'SHP-001', blNumber: 'BL-SG-001', currency: 'VND', statedSubtotal: 8_500_000 },
    invoiceDate: '2026-11-06',
    vatRate: 0.1,
    shipmentFile: 'SHP-001.csv',
    rateFile: 'RATE-V3.csv',
    pdfFile: null,
  },
  {
    id: 'INV-095-NORATE',
    header: { invoiceId: 'INV-095-NORATE', supplier: 'Supplier A', shipmentId: 'SHP-001', blNumber: 'BL-SG-001', currency: 'VND', statedSubtotal: 9_300_000 },
    invoiceDate: '2026-11-06',
    vatRate: 0.1,
    shipmentFile: 'SHP-001.csv',
    rateFile: 'RATE-V3-NODOC.csv',
    pdfFile: null,
  },
  {
    id: 'INV-VN-020',
    header: { invoiceId: 'INV-VN-020', supplier: 'ONE Vietnam', shipmentId: 'SHP-VN-020', blNumber: 'BL-MNL-020', currency: 'VND', statedSubtotal: 5_750_000 },
    invoiceDate: '2026-04-15',
    vatRate: 0.08,
    shipmentFile: 'SHP-VN-020.csv',
    rateFile: 'RATE-ONE-VN.csv',
    pdfFile: null,
  },
]

export const SAMPLE_FILES = [
  'INV-095.pdf', 'INV-095-resent.pdf', 'invoice-lines.csv', 'SHP-001.csv', 'RATE-V3.csv',
  'RATE-V3-NODOC.csv', 'SHP-VN-020.csv', 'RATE-ONE-VN.csv',
]
