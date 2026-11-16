# Movago pitch script · 10 minutes · 2 speakers (English)

Follows `nghien_cuu_tung_slide/Movago_Pitch_Deck_EN.pptx` in presentation order (15 slides). About 1,300 spoken words, paced for roughly 130 words per minute, with a short buffer for the live demo click.

- **A** — opens, owns the problem and the numbers (suggested: CEO).
- **B** — owns the product, the AI and the demo (suggested: CPO).

Lines in *[brackets]* are stage directions, not spoken. Anything still marked `[n]` or `[x]` must be filled from the real survey before rehearsal; do not say an invented number.

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
| 15 | Close | A + B | 0:25 | 10:00 |

---

## 1 · Title — A (0:30)

**A:** Good morning. We are team Odylytics, and this is Movago. Move smarter. Go safer.

Movago is AI that checks every freight invoice against the shipment file and the approved rate card, before accounts payable pays it. I'm [name], and with me is [name]. We're in the Operations and Productivity track.

*[Hand gesture to the slide, click.]*

## 2 · Business problem — A (0:45)

**A:** Picture the accounts payable team at a freight forwarder. Before they pay one freight charge, they need three things, and those three things live in three places.

First, the invoice or debit note, arriving as a PDF or a scan by email, Zalo or a carrier portal. Second, the shipment file — route, container type, bill of lading — in the TMS or in Excel. Third, the approved rate card, held by the pricing team, often in several versions.

So the accountant gathers all three, compares every fee line by hand, and chases operations and pricing when something doesn't add up.

## 3 · Target business and users — A (0:40)

**A:** Our first customer is a mid-sized ocean freight forwarder in Ho Chi Minh City — a company that buys freight from many carriers. Vietnam has four to four and a half thousand of them.

The person we build for is the payables accountant. Operations confirms the shipment, pricing confirms the rate. And the buyer is the chief accountant or CFO, who owns the budget and needs evidence before signing off a payment.

## 4 · Business insight — A (0:50)

**A:** Here's why this is hard. The correct charge depends on the shipment.

Take Maersk's destination handling charge. For a twenty-foot dry container it's about one hundred twenty-seven dollars. For a forty-foot, about one hundred ninety-six. Same fee code, different right answer.

Today that check is manual — eyes and Excel — and carriers name the same fee differently: "Documentation fee" on one invoice, "Phí chứng từ" on the next. It depends on people answering emails and Zalo messages. And it carries payment risk: wrong rate, wrong version, or the same invoice resent under a new file name and paid twice.

In markets with professional freight audit, three to six percent of freight invoices contain errors. Vietnam has no published figure yet — our pilot will measure it.

## 5 · Why now — A (0:35)

**A:** Why now? Since the first of July 2026, Decree 254 and Circular 91 govern e-invoicing in Vietnam. Last year the country issued about eight and a half billion e-invoices.

Invoices went digital. Checking them did not. The data now arrives in a machine-readable form, but matching it to shipments and approved rates is still done by hand. That's the gap.

[Name] will show you how Movago closes it.

*[Handover to B.]*

## 6 · Proposed solution — B (0:35)

**B:** Thank you. Instead of three windows, the accountant works on one screen.

Movago reads the invoice, finds the right shipment and the right rate version, then recalculates every fee line. Each line gets one of three results: Matched, Discrepancy, or Missing basis — with the source shown on both sides.

One important point: Movago doesn't pay anything. Accountants confirm on evidence, and payment approval stays with the people who hold that authority.

## 7 · How AI helps — B (0:45)

**B:** We use AI where it's genuinely better than people, and rules where finance needs certainty.

AI does the slow reading: it extracts lines from invoices and quotations, and it maps fee names — so "Phí chứng từ" and "Documentation fee" both become the code DOC.

Then deterministic rules check the money: they pick the rate by lane, container and effective date, and recalculate. Fifty-one dollars charged, minus twenty approved, equals thirty-one over.

Anything the AI is unsure about goes to a human reviewer. The AI never sets the amount. Every discrepancy has a calculation and a source.

## 8 · How it works — B (0:45)

**B:** The workflow is four steps.

One: build the rate card. AI reads the carrier quotation, pricing approves each line, and only then is the rate card exported. Two: receive and read invoices — and a SHA-256 fingerprint blocks any invoice that's been resent. Three: match by shipment or B/L plus supplier, and pick the rate card in force. Four: flag each line, and the accountant confirms and exports a CSV report.

The input is just a quotation PDF, an invoice PDF and a shipment CSV. No deep integration, so a company can try it on day one.

## 9 · Mockup and demo — B (1:00)

**B:** Let's look at a real case from our demo: invoice INV-095.

*[Point to the line-by-line result.]* Ocean freight, three hundred fourteen dollars — Matched. But the documentation fee is fifty-one dollars on the invoice, while rate card RATE-V3 says twenty. That's thirty-one dollars over.

*[Point to the evidence panel.]* The accountant opens the evidence: invoice page one on the left, rate card line twelve on the right. One click sends it to pricing to verify, and the line is held.

*[Point to the resent invoice.]* Then the supplier sends the same invoice again under a new file name. Movago catches it by fingerprint, before it can be entered twice.

This is simulated data, and the demo is live now at movago-odylytics.vercel.app.

*[Handover to A.]*

## 10 · User validation — A (0:35)

> Fill every `[n]` and `[x]` before rehearsal. If the survey isn't finished, say "we are surveying" and give the count so far.

**A:** We tested this with the people who do the job. We surveyed [n] payables accountants and ran [n] interviews.

[x] percent said they would try Movago, scoring it four or five out of five. Today, the median time to check one invoice is [x] minutes.

[One sentence on the strongest interview quote or partner confirmation.]

## 11 · Market size — A (0:40)

**A:** Globally, freight audit is roughly a one-billion-dollar market, growing thirteen to fourteen percent a year.

In Vietnam we start bottom-up. Four thousand forwarders; we assume one in ten fits our first profile — ocean, Ho Chi Minh City, a real AP team. At fourteen hundred dollars a year, that's an illustrative serviceable market of about five hundred sixty-five thousand dollars, and a year-three target of thirty customers.

For a price reference, ShipCheck sells line-level freight audit from one hundred eleven dollars a month. These figures are assumptions; the pilot replaces them with real ones.

## 12 · Feasibility and business value — A (0:45)

**A:** Does it pay for itself? Take a scenario: a thousand invoices a month. If Movago cuts checking from fifteen minutes to nine, that frees one hundred hours of work a month — about two hundred thirty-five dollars, before costs, at a conservative hourly rate.

At a subscription of one hundred eighteen dollars a month, saving just three minutes per invoice breaks even.

The model is B2B SaaS, priced per unique invoice processed. The pilot is deliberately small: one lane, one or two suppliers, CSV data, and a target of at least thirty percent less handling time.

*[Handover to B.]*

## 13 · Competitive advantage — B (0:35)

**B:** Are there other tools? Yes. CargoWise can check invoices — if you run CargoWise. ShipCheck audits rate lines, but not Vietnamese documents. Local systems like G.O.L store the data but don't check it.

We don't claim one feature nobody else has. Our edge is the combination: freight logic, Vietnamese documents, and no system change. Our first customers are mid-sized forwarders still on G.O.L or Excel.

## 14 · Team and roadmap — B (0:35)

**B:** Odylytics is a student-founded AI team in Ho Chi Minh City, and we have taken AI from lab to field before. Our flood-response product AquaGuard surveyed over six hundred people and reached more than three hundred pilot users. The team has won four prizes, including first at EPICS 8.

Next: this month, the Ideathon demo. In the first quarter of 2027, a pilot with one forwarder. Then debit notes and XML e-invoices, and in the third quarter, TMS and ERP connectors.

## 15 · Close — A + B (0:25)

**A:** So here is our ask: one forwarder in Ho Chi Minh City, thirty to one hundred invoice sets, to measure time saved and errors caught.

**B:** Check before you pay.

**A + B:** Move smarter. Go safer. Thank you.

---

## Rehearsal notes

- Fill slide 10 first; it is the only slide with placeholders and the one judges will question.
- If you run long, cut the ShipCheck sentence on slide 11 and the roadmap detail on slide 14 (saves about 25 seconds).
- Say amounts in dollars as on the slides; keep VND for Q&A ("about one point three million dong").
- Vietnamese fee name on slides 4 and 7: say it once clearly, it is the moment that shows local fit.
- Handovers happen at slides 5→6, 9→10, 12→13. Rehearse those three cuts so they feel like a pass, not a pause.
