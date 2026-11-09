# Movago web demo

> Move smarter. Go safer. · Team Odylytics · KTC Ideathon 2026

**Live demo:** https://movago-odylytics.vercel.app

A runnable MVP of Movago: it checks each line of a freight invoice against the shipment file and the approved rate card, shows the evidence behind every discrepancy, records who verifies it, flags resubmitted PDFs and exports a CSV report. All data is simulated.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # 7 reconciliation acceptance cases + 3 ROI cases
npm run build      # static site in dist/
```

## Pages

| Route | What it shows |
| --- | --- |
| `#/` | Landing: hero, the three-sources problem, the fictional cast, the multi-channel data flow and tech stack, the three outcomes. An opening MOVAGO → MOVE · AI · GO intro plays once per tab; add `?intro` to the URL to replay it. |
| `#/business` | Cited market and rate statistics with count-up and drawn charts, economic problems, business model, ROI scenario with a calculator, Vietnam roadmap, numbered sources. |
| `#/demo` | Try it yourself: four cases, three sources, reconciliation, evidence, verification, CSV export, resend check. |
| `#/rates` | Build the approved rate card: receive a carrier quotation (`QUOTE-SA-2611.pdf`), see the rate lines extracted with confidence, approve each line, export the rate card. Low-confidence lines must be approved one by one. |
| `#/demo?story=1` | Guided story, 8 scenes in about 85 s: three-channel intake, phone scan, AI reading, reconciliation, evidence, resend, verification, decision. Autoplay with Web Audio cues, pause, jump to any step or character, keyboard ← → K M, and a behind-the-scenes picture-in-picture. The nav's **Open demo** starts it straight away. |

Hash routing, so `dist/` works on any static host. Production is the Vercel project `movago-odylytics`; redeploy from this folder with `npx vercel@latest deploy --prod`.

## What is real and what is simulated

| Part | In this demo |
| --- | --- |
| AI reading the PDF | Simulated. Fee lines are pre-extracted in `public/samples/invoice-lines.csv` with page and line position. |
| AI reading the quotation | Simulated. Rate lines and confidence are pre-extracted in `src/rateQuote.ts`; approval and CSV export are live. `npm test` checks that the exported rows equal the Supplier A rows of `RATE-V3.csv`. Regenerate the PDF with `npm run make:sample-quote`. |
| Shipment matching, rate selection, recalculation | Live, in `src/engine/reconcile.ts`. Selection uses supplier, route, container type, Cai Mep routing, fee code, unit, currency and the rating date. Two matching rates → missing basis. |
| Resubmission check | Live. SHA-256 of the file bytes, compared with the intake history in `localStorage`. |
| Verification and CSV export | Live in the browser. No backend; **Reset demo** restores the starting state. |
| Email / Messenger / phone intake, phone scan, AI reading scenes | Simulated story scenes; confidence figures are illustrative. |
| Cast | Fictional people and companies. Avatars: Notionists by Zoish (CC0), pre-rendered with DiceBear (`npm run make:avatars`). |

## Acceptance cases (`npm test`)

| Case | Expected |
| --- | --- |
| `INV-095` | Freight 8,000,000 matches. DOC 1,300,000 vs 500,000 → **+800,000 pre-tax**. Sources: INV-095 page 1 DOC line, RATE-V3 line 12. |
| `INV-095-MATCH` | Both lines match, total 8,500,000. |
| `INV-095-NORATE` | Freight matches. DOC **missing basis**, expected and difference empty. |
| `INV-095-resent.pdf` | Same bytes as `INV-095.pdf` under a new name → flagged as already received. |
| `INV-VN-020` | Manila → Cat Lai, 20ft. THD 4,800,000 (the 40ft rate) vs 3,000,000 → **+1,800,000**. DOF 950,000 matches. Rate basis: ONE Vietnam surcharge advisory effective 01/04/2026, used as the approved basis for this simulated case. |

`npm run make:sample-pdf` regenerates `INV-095.pdf` and its byte-identical copy.
