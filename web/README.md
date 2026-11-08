# Movago web demo

> Move smarter. Go safer. · Team Odylytics · KTC Ideathon 2026

A runnable MVP of Movago: it checks each line of a freight invoice against the shipment file and the approved rate card, shows the evidence behind every discrepancy, records who verifies it, flags resubmitted PDFs and exports a CSV report. All data is simulated.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # reconciliation acceptance cases
npm run build      # static site in dist/
```

Routes: `#/` landing · `#/demo` try the sample case · `#/demo?story=1` guided story. Hash routing, so `dist/` works on any static host. To deploy on Vercel, import the repo and set the root directory to `web`.

## What is real and what is simulated

| Part | In this demo |
| --- | --- |
| AI reading the PDF | Simulated. Fee lines are pre-extracted in `public/samples/invoice-lines.csv` with page and line position. |
| Shipment matching, rate selection, recalculation | Live, in `src/engine/reconcile.ts`. Selection uses supplier, route, container type, Cai Mep routing, fee code, unit, currency and the rating date. Two matching rates → missing basis. |
| Resubmission check | Live. SHA-256 of the file bytes, compared with the intake history in `localStorage`. |
| Verification and CSV export | Live in the browser. No backend; **Reset demo** restores the starting state. |

## Acceptance cases (`npm test`)

| Case | Expected |
| --- | --- |
| `INV-095` | Freight 8,000,000 matches. DOC 1,300,000 vs 500,000 → **+800,000 pre-tax**. Sources: INV-095 page 1 DOC line, RATE-V3 line 12. |
| `INV-095-MATCH` | Both lines match, total 8,500,000. |
| `INV-095-NORATE` | Freight matches. DOC **missing basis**, expected and difference empty. |
| `INV-095-resent.pdf` | Same bytes as `INV-095.pdf` under a new name → flagged as already received. |
| `INV-VN-020` | Manila → Cat Lai, 20ft. THD 4,800,000 (the 40ft rate) vs 3,000,000 → **+1,800,000**. DOF 950,000 matches. Rate basis: ONE Vietnam surcharge advisory effective 01/04/2026, used as the approved basis for this simulated case. |

`npm run make:sample-pdf` regenerates `INV-095.pdf` and its byte-identical copy.
