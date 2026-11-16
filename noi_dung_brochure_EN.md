# Movago brochure copy · tri-fold A4 (English)

This copy fills a tri-fold A4 brochure, three panels on each side. The facts match `nghien_cuu_tung_slide/Movago_Pitch_Deck_EN.pptx` and the team facts in `ODYLYTICS_TEAM.md`. Colours and fonts follow `DEMO_DESIGN_RULES.md`.

Notes for whoever lays it out:

- Keep the "Simulated data" and "Illustrative" labels next to the numbers they belong to, or judges will read those numbers as results.
- The survey has no results yet, so leave user-validation numbers out until it does.
- Use screenshots from the live demo (movago-odylytics.vercel.app) for images. Stock photos of trucks or ports don't fit.

Fold order: closed, the reader sees panel 1 (front). Opening the cover shows panel 3 (the flap) next to panel 6. Opening the flap shows the inside spread, panels 4, 5 and 6. Panel 2 is the back.

## Outside

### Panel 1 · Front cover

**MOVAGO**

**Move smarter. Go safer.**

AI that checks every freight invoice against the shipment and the approved rate card before you pay it.

*[Image: the reconciliation workspace with one invoice line flagged.]*

Team Odylytics · KTC Ideathon 2026 · Operations & Productivity

### Panel 2 · Back cover

**Try it now**

**movago-odylytics.vercel.app**

*[QR code to the demo]*

Open case INV-095 and see Movago find a $31 overcharge in under a minute.

**Our ask**

We are looking for one freight forwarder in Ho Chi Minh City to run a pilot on 30 to 100 invoice sets with us, so we can measure the time saved and the errors caught.

odylytics@gmail.com · odylytics.com

**Check before you pay.**

### Panel 3 · Flap

**Each freight charge has to be checked in three places**

Before paying a carrier, accounts payable has to find:

**01 · The invoice.** A PDF or scan that arrives by email, Zalo or a carrier portal.

**02 · The shipment file.** Route, container and B/L number, kept in the TMS or in Excel.

**03 · The approved rate.** Held by the pricing team, often in several versions.

Today the accountant compares these by eye in Excel and messages operations and pricing when something is unclear. One carrier calls a fee "Documentation fee" and the next calls it "Phí chứng từ".

## Inside

### Band across panels 4, 5 and 6 · Where Movago fits

*[A thin strip across the top of the inside spread, showing five steps as a timeline. Step 5 is in the brand colour with the Movago mark under it.]*

**A forwarder collects from one customer and pays many suppliers for every shipment.**

1 Sell: quote the shipper and agree rates with carriers
2 Book: space on the vessel, trucks, depot
3 Move: pack, haul to port, clear customs, sail, deliver
4 Document: B/L, customs declaration, invoices
5 Pay: carriers, truckers, ports and agents send invoices, **Movago checks every fee line**, the chief accountant approves, and the payment goes out

Under the strip, three small labels show where Movago's data comes from: the approved rate card from pricing (step 1), the shipment file from the TMS or Excel (steps 2 and 3), and invoices and debit notes from suppliers (step 5).

*Movago does not book space, track ships, clear customs or send payments. It works alongside the TMS and accounting software the forwarder already uses.*

### Panel 4 · What it costs

**The right charge depends on the shipment**

| | |
| --- | --- |
| **$127** | Maersk DHC, 20' dry container |
| **$196** | Maersk DHC, 40' dry container |

Both lines use the same fee code, but the correct amount differs.

Money leaks in three ways. An invoice can use a price that is no longer approved. Invoices can wait on email and Zalo while approvers never see the proof. And a supplier can resend an invoice under a new file name so that it gets entered twice.

**How often it happens**

| | |
| --- | --- |
| **3–6%** | of freight invoices contain errors in a typical audit |
| **1–5%** | of total freight spend is recoverable |
| **$6** | median cost to process one AP invoice (5,846 organisations) |
| **16% of GDP** | Vietnam's logistics cost, against a 12–15% national target |
| **4,000+** | freight forwarders in Vietnam |

In Ho Chi Minh City, Flexport is hiring an auditor whose job is to check freight invoices against contracts, rates and shipment records.

*Sources: Transportation Insight (US freight audit provider); APQC; Vietnam Investment Review 2026 and Decision 2229/QĐ-TTg; VLA via Vietnam Logistics Report 2025; Flexport job posting 2026. Vietnam has no published freight-invoice error rate yet. Our pilot will measure it.*

### Panel 5 · How Movago works

**One screen that checks every fee line**

**1 · Build the rate card.** AI reads the carrier quotation and pricing approves each line.

**2 · Read the invoice.** AI pulls out every fee line, and a digital fingerprint blocks resent invoices.

**3 · Match.** Movago finds the shipment and the rate card in force on that date.

**4 · Check and confirm.** Each line is marked Matched, Discrepancy or Missing basis.

● Matched ◆ Discrepancy □ Missing basis

The accountant opens the evidence from both sides, confirms, and exports a report.

AI does the slow reading and maps fee names to one code. Fixed rules recalculate the amount, so the same invoice always gives the same result with a reason attached. When the AI is unsure, a person decides.

*[Image: evidence view, invoice page 1 next to RATE-V3 line 12.]*

### Panel 6 · Proof and value

**Case INV-095** *(simulated data)*

| Fee line | Invoice | Approved | Result |
| --- | --- | --- | --- |
| Ocean freight | $314 | $314 | Matched |
| Documentation fee | $51 | $20 | **+$31** |
| Resent copy, new file name | | | **Blocked** |

**What it could save** *(illustrative scenario)*

**1,000** invoices a month
**15 → 9** minutes per invoice
**100 hours** freed every month

At $118 a month, Movago pays for itself once it saves 3 minutes per invoice.

**Built for** mid-sized ocean freight forwarders in Ho Chi Minh City. It works from files they already have: a quotation PDF, an invoice PDF and a shipment CSV.

**Team Odylytics** is a student-founded AI team in Ho Chi Minh City. Our flood-response product AquaGuard won 1st prize at EPICS 8 (2026) and was used by communities during flood season.

*USD 1 = VND 25,500. Movago prepares the evidence, and payment approval stays with your team.*

## Short version (one-page flyer or A5 card)

**Movago · Move smarter. Go safer.**

Freight invoices arrive as PDFs and scans, the shipment details sit with operations, and the approved rate sits with pricing. Movago puts all three on one screen, recalculates every fee line, and shows the evidence before you pay.

- Reads Vietnamese and English invoices
- Checks each line against the approved rate
- Catches resent invoices
- Works from CSV, with no change to your systems

Try the demo: **movago-odylytics.vercel.app**
Pilot with us: **odylytics@gmail.com**
