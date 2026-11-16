# Movago pitch script · 10 minutes · Quân and Nghĩa (English)

This script follows `nghien_cuu_tung_slide/Movago_Pitch_Deck_EN.pptx` in presentation order (15 slides). It runs to about 1,150 spoken words, which fills ten minutes at about 115 words a minute with time for the demo clicks.

Quân (Nguyễn Minh Quân, CEO) and Nghĩa (Trần Tuấn Nghĩa, CPO) take turns: every slide changes speaker, and on five slides Quân picks up the last paragraph. Nghĩa drives the demo on slide 9, and Quân asks the question that leads into it. Each of them speaks about 575 words, close to five minutes.

Lines in *[brackets]* are stage directions. Anything still marked `[n]` or `[x]` has to come from the real survey before rehearsal, so never say an invented number there.

| # | Slide | Speaker | Time | Clock |
| --- | --- | --- | --- | --- |
| 1 | Title | Quân, Nghĩa | 0:30 | 0:30 |
| 2 | Business problem | Nghĩa, Quân | 0:40 | 1:10 |
| 3 | Target business and users | Quân | 0:40 | 1:50 |
| 4 | Business insight | Nghĩa, Quân | 0:45 | 2:35 |
| 5 | Why now | Quân | 0:35 | 3:10 |
| 6 | Proposed solution | Nghĩa, Quân | 0:35 | 3:45 |
| 7 | How AI helps | Quân | 0:45 | 4:30 |
| 8 | How it works | Nghĩa | 0:40 | 5:10 |
| 9 | Mockup and demo | Quân, Nghĩa | 1:05 | 6:15 |
| 10 | User validation | Nghĩa | 0:35 | 6:50 |
| 11 | Market size | Quân | 0:40 | 7:30 |
| 12 | Feasibility and business value | Nghĩa, Quân | 0:45 | 8:15 |
| 13 | Competitive advantage | Quân | 0:40 | 8:55 |
| 14 | Team and roadmap | Nghĩa, Quân | 0:40 | 9:35 |
| 15 | Close | Quân, Nghĩa | 0:25 | 10:00 |

## 1 · Title (Quân, Nghĩa · 0:30)

**Quân:** Good morning. We are team Odylytics, and this is Movago: Move smarter. Go safer. I'm Quân, the CEO.

**Nghĩa:** And I'm Nghĩa, the CPO. Movago is AI that checks every freight invoice against the shipment file and the approved rate card before accounts payable pays it. We're in the Operations and Productivity track.

*[Click.]*

## 2 · Business problem (Nghĩa, Quân · 0:40)

**Nghĩa:** Picture the accounts payable team at a freight forwarder. Before they pay one freight charge, they need three documents, each kept somewhere different.

The invoice arrives as a PDF or a scan by email, Zalo or a carrier portal. The shipment file, with the route, container type and bill of lading, sits in the TMS or in Excel. The approved rate card belongs to the pricing team, often in several versions.

**Quân:** So the accountant collects all three, compares every fee line by hand, and messages operations and pricing whenever something doesn't match.

## 3 · Target business and users (Quân · 0:40)

**Quân:** Our first customer is a mid-sized ocean freight forwarder in Ho Chi Minh City that buys freight from many carriers. Vietnam has four to four and a half thousand forwarders.

We build for the payables accountant. Operations confirms the shipment and pricing confirms the rate. The buyer is the chief accountant or CFO, who owns the budget and wants evidence before signing off a payment.

## 4 · Business insight (Nghĩa, Quân · 0:45)

**Nghĩa:** The check is hard because the correct charge depends on the shipment. Maersk's destination handling charge is about one hundred twenty-seven dollars for a twenty-foot container and about one hundred ninety-six for a forty-foot, under the same fee code.

Carriers also name fees differently: "Documentation fee" on one invoice, "Phí chứng từ" on the next. So the company risks paying the wrong rate, using an old rate version, or paying an invoice twice after the supplier resends it under a new file name.

**Quân:** In markets with professional freight audit, three to six percent of freight invoices contain errors. Vietnam has no published figure yet, and our pilot will measure it.

## 5 · Why now (Quân · 0:35)

**Quân:** Since the first of July 2026, Decree 254 and Circular 91 govern e-invoicing in Vietnam. Last year the country issued about eight and a half billion e-invoices.

Invoices now arrive as data a machine can read, yet matching them to shipments and approved rates is still done by hand. Nghĩa will show you how Movago handles that step.


## 6 · Proposed solution (Nghĩa, Quân · 0:35)

**Nghĩa:** With Movago, the accountant works on one screen. Movago reads the invoice, finds the right shipment and rate version, and recalculates every fee line. Each line gets one of three results, Matched, Discrepancy or Missing basis, with the source shown on both sides.

**Quân:** Movago never pays anything itself. Accountants confirm on the evidence, and payment approval stays with the people who already hold that authority.

## 7 · How AI helps (Quân · 0:45)

**Quân:** AI handles the reading, and fixed rules handle the money.

AI extracts lines from invoices and quotations and maps fee names to one code, so "Phí chứng từ" and "Documentation fee" both become DOC. Rules then pick the rate by lane, container and effective date, and recalculate: fifty-one dollars charged minus twenty approved leaves thirty-one dollars over.

When the AI is unsure about a field, a person reviews it. The AI never sets the amount, and every discrepancy comes with its calculation and its source.

## 8 · How it works (Nghĩa · 0:40)

**Nghĩa:** The workflow has four steps. First, AI reads the carrier quotation and pricing approves each line before the rate card is exported. Second, Movago reads incoming invoices, and a SHA-256 fingerprint blocks any invoice sent before. Third, it matches each invoice to a shipment and picks the rate card in force. Fourth, it flags each line, and the accountant confirms and exports a CSV report.

All it needs is a quotation PDF, an invoice PDF and a shipment CSV, so a company can try it without any integration work.

## 9 · Mockup and demo (Quân, Nghĩa · 1:05)

**Quân:** Nghĩa, can you show them a real case?

**Nghĩa:** This is invoice INV-095 from our demo. *[Point to the line-by-line result.]* Ocean freight is three hundred fourteen dollars and matches the rate card. The documentation fee is fifty-one dollars on the invoice, while rate card RATE-V3 says twenty, so it is thirty-one dollars over.

*[Point to the evidence panel.]* The accountant opens the evidence, with invoice page one on the left and rate card line twelve on the right. One click sends the line to pricing, and the payment for that line is held.

*[Point to the resent invoice.]* When the supplier sends the same invoice again under a new file name, Movago recognises the fingerprint and stops it from being entered twice.

**Quân:** The data is simulated, and the demo is live at movago-odylytics.vercel.app.

## 10 · User validation (Nghĩa · 0:35)

> Fill every `[n]` and `[x]` before rehearsal. If the survey isn't finished, say "we are surveying" and give the count so far.

**Nghĩa:** We tested the idea with people who do this job. We surveyed [n] payables accountants and ran [n] interviews.

[x] percent said they would try Movago, scoring it four or five out of five. Today, the median time to check one invoice is [x] minutes.

[One sentence on the strongest interview quote or partner confirmation.]

## 11 · Market size (Quân · 0:40)

**Quân:** Freight audit is roughly a one-billion-dollar market worldwide, growing thirteen to fourteen percent a year.

For Vietnam we count from the bottom up. Of four thousand forwarders, we assume one in ten fits our first profile: ocean freight, Ho Chi Minh City, and its own AP team. At fourteen hundred dollars a year each, that is an illustrative market of about five hundred sixty-five thousand dollars, and our target is thirty customers by year three. The pilot will replace these assumptions with measured figures.

## 12 · Feasibility and business value (Nghĩa, Quân · 0:45)

**Nghĩa:** Take a forwarder with a thousand invoices a month. If Movago cuts checking time from fifteen minutes to nine, the team gets back one hundred hours a month, worth about two hundred thirty-five dollars before costs.

At a subscription of one hundred eighteen dollars a month, Movago pays for itself once it saves three minutes per invoice.

**Quân:** We sell it as B2B SaaS, priced per unique invoice processed. The pilot covers one lane and one or two suppliers, uses CSV data, and aims to cut handling time by at least thirty percent.


## 13 · Competitive advantage (Quân · 0:40)

**Quân:** CargoWise can check invoices for companies that already run CargoWise. ShipCheck audits rate lines but doesn't handle Vietnamese documents. Local systems like G.O.L store freight data without checking it.

Each of these tools covers part of the job. Movago combines freight logic, Vietnamese documents and no change to existing systems, which suits mid-sized forwarders still working in G.O.L or Excel.

## 14 · Team and roadmap (Nghĩa, Quân · 0:40)

**Nghĩa:** Odylytics is a student-founded AI team in Ho Chi Minh City. Our flood-response product AquaGuard surveyed over six hundred people and reached more than three hundred pilot users, and the team has won four prizes, including first at EPICS 8.

**Quân:** After this demo, we plan a pilot with one forwarder in the first quarter of 2027, then debit notes, XML e-invoices and connectors to TMS and ERP systems.

## 15 · Close (Quân, Nghĩa · 0:25)

**Quân:** We are asking for one forwarder in Ho Chi Minh City to run thirty to one hundred invoice sets with us, so we can measure the time saved and the errors caught.

**Nghĩa:** Check before you pay.

**Quân and Nghĩa:** Move smarter. Go safer. Thank you.

## Rehearsal notes

- Fill slide 10 first. It is the only slide with placeholders, and judges will ask about it.
- Whoever is not speaking clicks the slides, so each handover takes one breath.
- On slide 9, Nghĩa points at the screen while speaking. Quân's question before the demo and his line after it give Nghĩa time to switch windows.
- Say amounts in dollars, as on the slides, and keep the VND figures for questions ("about one point three million dong").
- Say the Vietnamese fee name clearly on slides 4 and 7. It shows the product handles local documents.
- If rehearsal still runs long, cut the last sentence of slide 11 and shorten the roadmap sentence on slide 14 to "Next, a pilot with one forwarder in early 2027."
