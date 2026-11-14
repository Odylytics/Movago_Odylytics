// Writes public/samples/QUOTE-SA-2611.pdf: the simulated carrier quotation the rate-card builder reads.
// Line numbers on the page match QUOTE.lines in src/rateQuote.ts.
import { mkdir, writeFile } from 'node:fs/promises'

const esc = (s) => s.replace(/[()\\]/g, '\\$&')
const text = (x, y, size, value, font = 'F1') => `BT /${font} ${size} Tf ${x} ${y} Td (${esc(value)}) Tj ET\n`
const rows = [
  ['Ocean freight', "20' DRY", 'per container', '8,000,000'],
  ['Ocean freight', "40' DRY", 'per container', '12,000,000'],
  ['THC - terminal handling', "20' DRY", 'per container', '900,000'],
  ['THC - terminal handling', "40' DRY", 'per container', '1,100,000'],
  ['Phi chung tu / Documentation fee', "20' DRY", 'per B/L', '500,000'],
  ['Documentation fee', "40' DRY", 'per B/L', '700,000'],
  ['Seal fee', "20' DRY", 'per container', '150,000'],
  ['AMS filing', "20' DRY", 'per B/L', '300,000'],
  ['Phu phi an ninh cang', "20' DRY", 'per container', '250,000'],
]
let stream = [
  'q 0.96 0.97 1 rg 0 0 595 842 re f Q\n',
  'q 0.82 0.87 0.96 rg 50 690 495 85 re f Q\n',
  text(66, 742, 22, 'SUPPLIER A (FICTIONAL CARRIER)', 'F2'),
  text(66, 716, 11, 'Rate quotation  |  SIMULATED DOCUMENT'),
  text(66, 660, 11, 'Quotation no: Q-SA-2611'), text(315, 660, 11, 'To: Demo Forwarder Co., HCMC'),
  text(66, 640, 11, 'Lane: Singapore -> Cat Lai (not via Cai Mep)'), text(315, 640, 11, 'Valid: 01 Nov 2026 - 30 Nov 2026'),
  text(66, 620, 11, 'Currency: VND, before VAT'),
  '0.04 0.12 0.27 RG 0.8 w 65 600 m 530 600 l S\n',
  text(68, 582, 10, '#', 'F2'), text(88, 582, 10, 'Charge', 'F2'), text(290, 582, 10, 'Equipment', 'F2'), text(370, 582, 10, 'Unit', 'F2'), text(460, 582, 10, 'Rate (VND)', 'F2'),
].join('')
rows.forEach(([charge, eq, unit, rate], i) => {
  const y = 556 - i * 24
  stream += text(68, y, 10, String(i + 1)) + text(88, y, 10, charge) + text(290, y, 10, eq) + text(370, y, 10, unit) + text(460, y, 10, rate)
})
stream += '0.04 0.12 0.27 RG 0.8 w 65 330 m 530 330 l S\n'
stream += text(66, 300, 10, 'Rates subject to the carrier tariff in force on the rating date. Surcharges not listed are quoted separately.')
stream += text(66, 120, 10, 'All amounts are simulated for the Movago demo.')

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
await writeFile(new URL('../public/samples/QUOTE-SA-2611.pdf', import.meta.url), pdf, 'binary')
