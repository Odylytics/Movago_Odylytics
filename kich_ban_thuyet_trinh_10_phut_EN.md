# Movago pitch script · 10 minutes · 2 speakers (English)

This script follows `nghien_cuu_tung_slide/Movago_Pitch_Deck_EN.pptx` in presentation order (15 slides). It runs to about 1,150 spoken words, which fills ten minutes at a calm pace with pauses for the demo.

Speaker A opens and covers the problem and the numbers (suggested: CEO). Speaker B covers the product, the AI and the demo (suggested: CPO).

Lines in *[brackets]* are stage directions. Anything still marked `[n]` or `[x]` has to come from the real survey before rehearsal, so never say an invented number there.

| # | Slide | Speaker | Time | Clock |
| --- | --- | --- | --- | --- |
| 1 | Title | A | 0:30 | 0:30 |
| 2 | Business problem | A | 0:45 | 1:15 |
| 3 | Target business and users | A | 0:40 | 1:55 |
| 4 | Business insight | A | 0:50 | 2:45 |
| 5 | Why now | A | 0:35 | 3:20 |
| 6 | Proposed solution | B | 0:35 | 3:55 |
| 7 | How AI helps | B | 0:45 | 4:40 |
| 8 | How it works | B | 0:45 | 5:25 |
| 9 | Mockup and demo | B | 1:00 | 6:25 |
| 10 | User validation | A | 0:35 | 7:00 |
| 11 | Market size | A | 0:40 | 7:40 |
| 12 | Feasibility and business value | A | 0:45 | 8:25 |
| 13 | Competitive advantage | B | 0:35 | 9:00 |
| 14 | Team and roadmap | B | 0:35 | 9:35 |
| 15 | Close | A and B | 0:25 | 10:00 |

## 1 · Title (A, 0:30)

**A:** Good morning. We are team Odylytics, and this is Movago: Move smarter. Go safer.

Movago is AI that checks every freight invoice against the shipment file and the approved rate card before accounts payable pays it. I'm [name], and with me is [name]. We're in the Operations and Productivity track.

*[Gesture to the slide, click.]*

## 2 · Business problem (A, 0:45)

**A:** Picture the accounts payable team at a freight forwarder. Before they pay one freight charge, they need three documents, and each one is kept somewhere different.

The first is the invoice or debit note, which arrives as a PDF or a scan by email, Zalo or a carrier portal. The second is the shipment file, with the route, container type and bill of lading, kept in the TMS or in Excel. The third is the approved rate card, which the pricing team holds, often in several versions.

So the accountant collects all three, compares every fee line by hand, and messages operations and pricing whenever something doesn't match.

## 3 · Target business and users (A, 0:40)

**A:** Our first customer is a mid-sized ocean freight forwarder in Ho Chi Minh City that buys freight from many carriers. Vietnam has four to four and a half thousand forwarders.

We build for the payables accountant. Operations confirms the shipment and pricing confirms the rate. The buyer is the chief accountant or CFO, who owns the budget and wants evidence before signing off a payment.

## 4 · Business insight (A, 0:50)

**A:** The check is hard because the correct charge depends on the shipment.

Maersk's destination handling charge is about one hundred twenty-seven dollars for a twenty-foot dry container and about one hundred ninety-six for a forty-foot. The fee code is the same, and the right amount is different.

People still do this check by eye in Excel, and carriers name the same fee differently: "Documentation fee" on one invoice, "Phí chứng từ" on the next. The accountant waits for replies on email and Zalo. Meanwhile the company risks paying the wrong rate, using an old rate version, or paying an invoice twice after the supplier resends it under a new file name.

In markets with professional freight audit, three to six percent of freight invoices contain errors. Vietnam has no published figure yet, and our pilot will measure it.

## 5 · Why now (A, 0:35)

**A:** Since the first of July 2026, Decree 254 and Circular 91 govern e-invoicing in Vietnam. Last year the country issued about eight and a half billion e-invoices.

Invoices now arrive as data a machine can read, yet matching them to shipments and approved rates is still done by hand.

[Name] will show you how Movago handles that step.

*[Hand over to B.]*

## 6 · Proposed solution (B, 0:35)

**B:** Thank you. With Movago, the accountant works on one screen.

Movago reads the invoice, finds the right shipment and rate version, and recalculates every fee line. Each line gets one of three results, Matched, Discrepancy or Missing basis, with the source shown on both sides.

Movago never pays anything itself. Accountants confirm on the evidence, and payment approval stays with the people who already hold that authority.

## 7 · How AI helps (B, 0:45)

**B:** AI handles the reading, and fixed rules handle the money.

AI extracts lines from invoices and quotations, and it maps fee names to one code, so "Phí chứng từ" and "Documentation fee" both become DOC.

Rules then pick the rate by lane, container and effective date, and recalculate. In our example, fifty-one dollars charged minus twenty approved leaves thirty-one dollars over.

When the AI is unsure about a field, a person reviews it. The AI never sets the amount, and every discrepancy comes with its calculation and its source.

## 8 · How it works (B, 0:45)

**B:** The workflow has four steps.

First, Movago builds the rate card: AI reads the carrier quotation, pricing approves each line, and only then is the rate card exported. Second, it receives and reads invoices, and a SHA-256 fingerprint blocks any invoice that has been sent before. Third, it matches each invoice to a shipment by B/L and supplier and picks the rate card in force. Fourth, it flags each line, and the accountant confirms and exports a CSV report.

All it needs is a quotation PDF, an invoice PDF and a shipment CSV. Without any deep integration, a company can try it on the first day.

## 9 · Mockup and demo (B, 1:00)

**B:** Here is invoice INV-095 from our demo.

*[Point to the line-by-line result.]* Ocean freight is three hundred fourteen dollars and matches the rate card. The documentation fee is fifty-one dollars on the invoice, while rate card RATE-V3 says twenty, so it is thirty-one dollars over.

*[Point to the evidence panel.]* The accountant opens the evidence, with invoice page one on the left and rate card line twelve on the right. One click sends the line to pricing to verify, and the payment for that line is held.

*[Point to the resent invoice.]* When the supplier sends the same invoice again under a new file name, Movago recognises the fingerprint and stops it from being entered twice.

The data is simulated, and the demo is live now at movago-odylytics.vercel.app.

*[Hand over to A.]*

## 10 · User validation (A, 0:35)

> Fill every `[n]` and `[x]` before rehearsal. If the survey isn't finished, say "we are surveying" and give the count so far.

**A:** We tested the idea with people who do this job. We surveyed [n] payables accountants and ran [n] interviews.

[x] percent said they would try Movago, scoring it four or five out of five. Today, the median time to check one invoice is [x] minutes.

[One sentence on the strongest interview quote or partner confirmation.]

## 11 · Market size (A, 0:40)

**A:** Freight audit is roughly a one-billion-dollar market worldwide, growing thirteen to fourteen percent a year.

For Vietnam we count from the bottom up. There are four thousand forwarders, and we assume one in ten fits our first profile: ocean freight, Ho Chi Minh City, and its own AP team. At fourteen hundred dollars a year each, that gives an illustrative serviceable market of about five hundred sixty-five thousand dollars, and our target is thirty customers by year three.

ShipCheck, for comparison, sells line-level freight audit from one hundred eleven dollars a month. These figures are assumptions, and the pilot will replace them with measured ones.

## 12 · Feasibility and business value (A, 0:45)

**A:** Take a forwarder with a thousand invoices a month. If Movago cuts checking time from fifteen minutes to nine, the team gets back one hundred hours a month, worth about two hundred thirty-five dollars before costs at a conservative hourly rate.

At a subscription of one hundred eighteen dollars a month, Movago pays for itself once it saves three minutes per invoice.

We sell it as B2B SaaS, priced per unique invoice processed. The pilot covers one lane and one or two suppliers, uses CSV data, and aims to cut handling time by at least thirty percent.

*[Hand over to B.]*

## 13 · Competitive advantage (B, 0:35)

**B:** CargoWise can check invoices for companies that already run CargoWise. ShipCheck audits rate lines but doesn't handle Vietnamese documents. Local systems like G.O.L store freight data without checking it.

Each of these tools covers part of the job. Movago combines freight logic, Vietnamese documents and no change to existing systems, which suits mid-sized forwarders still working in G.O.L or Excel.

## 14 · Team and roadmap (B, 0:35)

**B:** Odylytics is a student-founded AI team in Ho Chi Minh City. Our flood-response product AquaGuard surveyed over six hundred people and reached more than three hundred pilot users, and the team has won four prizes, including first at EPICS 8.

This month we show the Ideathon demo. In the first quarter of 2027 we run a pilot with one forwarder. After that we add debit notes and XML e-invoices, and in the third quarter we build TMS and ERP connectors.

## 15 · Close (A and B, 0:25)

**A:** We are asking for one forwarder in Ho Chi Minh City to run thirty to one hundred invoice sets with us, so we can measure the time saved and the errors caught.

**B:** Check before you pay.

**A and B:** Move smarter. Go safer. Thank you.

## Rehearsal notes

- Fill slide 10 first. It is the only slide with placeholders, and judges will ask about it.
- If you run long, cut the ShipCheck sentence on slide 11 and the roadmap details on slide 14. That saves about 25 seconds.
- Say amounts in dollars, as on the slides, and keep the VND figures for questions ("about one point three million dong").
- Say the Vietnamese fee name on slides 4 and 7 clearly, once each. It shows the product handles local documents.
- The handovers come at slides 5 to 6, 9 to 10 and 12 to 13. Rehearse those three so the next speaker starts without a pause.
