import { mkdir, writeFile, copyFile } from 'node:fs/promises'

const esc = (s) => s.replace(/[()\\]/g, '\\$&')
const text = (x, y, size, value, font = 'F1') => `BT /${font} ${size} Tf ${x} ${y} Td (${esc(value)}) Tj ET\n`
const stream = [
  'q 0.90 0.95 1 rg 0 0 595 842 re f Q\n',
  'q 0.82 0.87 0.96 rg 50 675 495 95 re f Q\n',
  text(66, 731, 25, 'SUPPLIER A (FICTIONAL CARRIER)', 'F2'),
  text(66, 704, 11, 'Freight invoice  |  SIMULATED DOCUMENT'),
  text(66, 650, 12, 'Bill to: Demo Forwarder Co., HCMC'), text(66, 630, 11, 'Invoice no: INV-095'),
  text(315, 650, 12, 'Date: 06 Nov 2026'), text(315, 630, 11, 'Shipment: SHP-001'),
  text(66, 600, 11, 'B/L number: BL-SG-001'),
  '0.04 0.12 0.27 RG 0.8 w 65 570 m 530 570 l S\n',
  text(68, 550, 11, 'Description', 'F2'), text(355, 550, 11, 'Qty / unit', 'F2'), text(470, 550, 11, 'Amount (VND)', 'F2'),
  text(68, 520, 11, "Ocean freight - 20' DRY"), text(365, 520, 11, '1 x CONTAINER'), text(470, 520, 11, '8,000,000'),
  text(68, 490, 11, 'Documentation fee (DOC)'), text(365, 490, 11, '1 x B/L'), text(470, 490, 11, '1,300,000'),
  '0.04 0.12 0.27 RG 0.8 w 65 465 m 530 465 l S\n',
  text(360, 435, 11, 'Subtotal:'), text(470, 435, 11, '9,300,000'),
  text(360, 412, 11, 'VAT (10%):'), text(470, 412, 11, '930,000'),
  text(360, 380, 13, 'Total:', 'F2'), text(470, 380, 13, '10,230,000', 'F2'),
  text(66, 120, 10, 'All amounts are simulated for the Movago demo.'),
].join('')
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}endstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
]
let pdf = '%PDF-1.4\n'; const offsets = [0]
objects.forEach((obj, i) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${obj}\nendobj\n` })
const start = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((x) => `${String(x).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${start}\n%%EOF\n`
await mkdir(new URL('../public/samples/', import.meta.url), { recursive: true })
const invoice = new URL('../public/samples/INV-095.pdf', import.meta.url)
await writeFile(invoice, pdf, 'binary')
await copyFile(invoice, new URL('../public/samples/INV-095-resent.pdf', import.meta.url))
