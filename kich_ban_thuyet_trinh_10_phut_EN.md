# Movago pitch script · 10 minutes · Quân and Nghĩa (English)

The talk follows one shipment from start to finish. A shipper hires a forwarder, the forwarder organises the shipping line, trucker, port, customs and overseas agent, and every one of those suppliers sends the forwarder a bill. Movago works at the point where the forwarder checks those bills before paying them. The rest of the talk shows how.

The script has 16 slides. Slides 2, 3 and 7 are new or changed compared with `nghien_cuu_tung_slide/Movago_Pitch_Deck_EN.pptx`, so the deck needs the same changes (see "Changes the deck needs" at the end). The spoken text is about 1,180 words, split evenly between the two speakers, which fills ten minutes at about 120 words a minute with time for the demo.

Quân (Nguyễn Minh Quân, CEO) and Nghĩa (Trần Tuấn Nghĩa, CPO) change speaker on every slide, and on some slides within it. Lines in *[brackets]* are stage directions. Anything marked `[n]` or `[x]` has to come from the real survey before rehearsal.

| # | Slide | Speaker | Time | Clock |
| --- | --- | --- | --- | --- |
| 1 | Title | Quân, Nghĩa | 0:20 | 0:20 |
| 2 | How a shipment moves (new) | Quân | 0:50 | 1:10 |
| 3 | Where the money goes (changed) | Nghĩa | 0:50 | 2:00 |
| 4 | Target business and users | Quân | 0:30 | 2:30 |
| 5 | Business insight | Nghĩa, Quân | 0:45 | 3:15 |
| 6 | Why now | Quân | 0:25 | 3:40 |
| 7 | Where Movago fits (changed) | Nghĩa, Quân | 0:45 | 4:25 |
| 8 | How AI helps | Quân | 0:35 | 5:00 |
| 9 | How it works | Nghĩa | 0:30 | 5:30 |
| 10 | Mockup and demo | Quân, Nghĩa | 1:00 | 6:30 |
| 11 | User validation | Nghĩa | 0:30 | 7:00 |
| 12 | Market size | Quân | 0:35 | 7:35 |
| 13 | Feasibility and business value | Nghĩa, Quân | 0:40 | 8:15 |
| 14 | Competitive advantage | Quân | 0:35 | 8:50 |
| 15 | Team and roadmap | Nghĩa, Quân | 0:45 | 9:35 |
| 16 | Close | Quân, Nghĩa | 0:25 | 10:00 |

## 1 · Title (Quân, Nghĩa · 0:20)

**Quân:** Good morning. We are team Odylytics, and this is Movago: Move smarter. Go safer. I'm Quân, the CEO.

**Nghĩa:** And I'm Nghĩa, the CPO. We're in the Operations and Productivity track.

*[Click.]*

## 2 · How a shipment moves (Quân · 0:50)

*[Slide shows the flow. Each arrow appears as Quân names that step.]*

```
Shipper ──► Forwarder ──► Shipping line ──► Trucker ──► Customs ──► Port ──► Overseas agent ──► Buyer
"move my     quotes,       space on          container    export       loads the   receives and
 goods"      organises     the vessel        to the port  declaration  vessel      delivers
```

**Quân:** Let's follow one shipment. A company in Vietnam needs to send goods abroad. This company, the shipper, rarely deals with shipping lines directly. It calls a freight forwarder and asks for a price.

The forwarder gets rates from shipping lines, quotes the shipper, and once the shipper agrees, books space on a vessel. It then arranges a truck to take the container to the port, handles the customs declaration and issues the bill of lading. At the destination, an overseas agent receives the goods and delivers them to the buyer.

So one shipment involves several suppliers, and the forwarder organises all of them.

## 3 · Where the money goes (Nghĩa · 0:50)

*[Slide shows the money flowing the opposite way.]*

```
Shipper ──pays──► Freight forwarder ──pays──► Shipping line · Trucker · Port · Overseas agent
                         ▲                                     │
                         └──────── invoices and debit notes ───┘
```

**Nghĩa:** The money moves the other way. The shipper pays the forwarder, and the forwarder pays each supplier, who sends its own invoice or debit note. The forwarder keeps the difference between what the shipper pays and what the suppliers charge, so any overcharge it pays comes out of that difference.

Before paying, the accounts payable team checks each fee line against three documents: the supplier's invoice, the shipment file in the TMS or Excel, and the rate card approved by pricing. Each one sits with a different team, so the accountant compares them by hand and messages operations and pricing when something doesn't match.

## 4 · Target business and users (Quân · 0:30)

**Quân:** Our first customer is a mid-sized ocean freight forwarder in Ho Chi Minh City. Vietnam has four to four and a half thousand forwarders. We build for the payables accountant. Operations confirms the shipment, pricing confirms the rate, and the buyer is the chief accountant or CFO, who wants evidence before signing off a payment.

## 5 · Business insight (Nghĩa, Quân · 0:45)

**Nghĩa:** The check is hard because the correct charge depends on the shipment. Maersk's destination handling charge is about one hundred twenty-seven dollars for a twenty-foot container and about one hundred ninety-six for a forty-foot, under the same fee code.

Carriers also name fees differently: "Documentation fee" on one invoice, "Phí chứng từ" on the next. So the forwarder risks paying the wrong rate, using an old rate version, or paying an invoice twice after the supplier resends it under a new file name.

**Quân:** In markets with professional freight audit, three to six percent of freight invoices contain errors. Vietnam has no published figure yet, and our pilot will measure it.

## 6 · Why now (Quân · 0:25)

**Quân:** Since the first of July 2026, Decree 254 and Circular 91 govern e-invoicing in Vietnam, and last year the country issued about eight and a half billion e-invoices. More invoices now exist as data a computer can read, but forwarders still match them to shipments and approved rates by hand.

## 7 · Where Movago fits (Nghĩa, Quân · 0:45)

*[Slide shows the shipment flow from slide 2 shrunk to one line, with the payment step highlighted.]*

```
Quote ──► Book ──► Move ──► Document ──► Pay suppliers
                                               ▲
                     rate card from pricing ───┤
                     shipment file from ops ───┤
                     invoice from supplier ────┘
                                            MOVAGO
```

**Nghĩa:** Movago works in one layer of this flow: the moment the forwarder pays its suppliers. Booking, trucking and customs stay with the tools forwarders already use. Movago takes the rate card from pricing, the shipment file from operations and the invoice from the supplier, then recalculates every fee line. Each line is marked Matched, Discrepancy or Missing basis, with the source shown on both sides.

**Quân:** Movago never pays anything itself. The accountant confirms on the evidence, and payment approval stays with the chief accountant.

## 8 · How AI helps (Quân · 0:35)

**Quân:** AI handles the reading, and fixed rules handle the money. AI extracts lines from invoices and quotations and maps fee names to one code, so "Phí chứng từ" and "Documentation fee" both become DOC. Rules then pick the rate by lane, container and effective date, and recalculate. When the AI is unsure about a field, a person reviews it, and every discrepancy comes with its calculation and its source.

## 9 · How it works (Nghĩa · 0:30)

**Nghĩa:** There are four steps. AI reads the carrier quotation and pricing approves each line. Movago reads incoming invoices, and a SHA-256 fingerprint blocks any invoice sent before. It matches each invoice to a shipment and picks the rate card in force. Then the accountant confirms each line and exports a CSV report. All it needs is a quotation PDF, an invoice PDF and a shipment CSV.

## 10 · Mockup and demo (Quân, Nghĩa · 1:00)

**Quân:** Nghĩa, can you show them a real case?

**Nghĩa:** This is invoice INV-095 from our demo. *[Point to the line-by-line result.]* Ocean freight is three hundred fourteen dollars and matches the rate card. The documentation fee is fifty-one dollars on the invoice, while rate card RATE-V3 says twenty, so it is thirty-one dollars over.

*[Point to the evidence panel.]* The accountant opens the evidence, with invoice page one on the left and rate card line twelve on the right. One click sends the line to pricing, and the payment for that line is held.

*[Point to the resent invoice.]* When the supplier sends the same invoice again under a new file name, Movago recognises the fingerprint and stops it from being entered twice.

**Quân:** The data is simulated, and the demo is live at movago-odylytics.vercel.app.

## 11 · User validation (Nghĩa · 0:30)

> Fill every `[n]` and `[x]` before rehearsal. If the survey isn't finished, say "we are surveying" and give the count so far.

**Nghĩa:** We tested the idea with people who do this job. We surveyed [n] payables accountants and ran [n] interviews. [x] percent said they would try Movago, scoring it four or five out of five. Today, the median time to check one invoice is [x] minutes.

[One sentence on the strongest interview quote or partner confirmation.]

## 12 · Market size (Quân · 0:35)

**Quân:** Freight audit is roughly a one-billion-dollar market worldwide, growing thirteen to fourteen percent a year. In Vietnam, we assume one in ten of the four thousand forwarders fits our first profile. At fourteen hundred dollars a year each, that is an illustrative market of about five hundred sixty-five thousand dollars, and our target is thirty customers by year three. The pilot will replace these assumptions with measured figures.

## 13 · Feasibility and business value (Nghĩa, Quân · 0:40)

**Nghĩa:** Take a forwarder with a thousand invoices a month. If Movago cuts checking time from fifteen minutes to nine, the team gets back one hundred hours a month. At a subscription of one hundred eighteen dollars a month, Movago pays for itself once it saves three minutes per invoice.

**Quân:** We sell it as B2B SaaS, priced per unique invoice processed. The pilot covers one lane and one or two suppliers, uses CSV data, and aims to cut handling time by at least thirty percent.

## 14 · Competitive advantage (Quân · 0:35)

**Quân:** CargoWise can check invoices for companies that already run CargoWise. ShipCheck audits rate lines but doesn't handle Vietnamese documents. Local systems like G.O.L store freight data without checking it. Movago combines freight logic, Vietnamese documents and no change to existing systems, which suits mid-sized forwarders still working in G.O.L or Excel.

## 15 · Team and roadmap (Nghĩa, Quân · 0:45)

**Nghĩa:** Odylytics is a student-founded AI team in Ho Chi Minh City. Our flood-response product AquaGuard surveyed over six hundred people and reached more than three hundred pilot users, and the team has won four prizes, including first at EPICS 8.

**Quân:** After this demo, we plan a pilot with one forwarder in the first quarter of 2027, then debit notes, XML e-invoices and connectors to TMS and ERP systems.

## 16 · Close (Quân, Nghĩa · 0:25)

**Quân:** We are asking for one forwarder in Ho Chi Minh City to run thirty to one hundred invoice sets with us, so we can measure the time saved and the errors caught.

**Nghĩa:** Check before you pay.

**Quân and Nghĩa:** Move smarter. Go safer. Thank you.

## Changes the deck needs

- **New slide 2, "How a shipment moves":** the arrow flow from shipper to buyer, in the order the container moves. Build it so each arrow appears on a click.
- **Slide 3, "Where the money goes":** replaces the old "Business problem" slide. Keep the three documents (invoice, shipment file, rate card) and add the money arrows above them.
- **Slide 7, "Where Movago fits":** replaces the old "Proposed solution" slide. Show the five steps in one row, highlight "Pay suppliers", and draw the three inputs going into Movago. Keep the workspace screenshot below.
- The old "Target business and users" slide stays, but can drop the forwarder description because slide 2 now covers it.

## Rehearsal notes

- Fill slide 11 first. It is the only slide with placeholders, and judges will ask about it.
- On slide 2, Quân says each step as its arrow appears. Practise the clicks; this slide sets up the whole talk.
- Slide 3 and slide 7 point back to slide 2. Nghĩa can gesture at the same flow so the audience sees it is one picture.
- Whoever is not speaking clicks the slides, so each handover takes one breath.
- Say amounts in dollars, as on the slides, and keep the VND figures for questions ("about one point three million dong").
- If rehearsal runs long, cut the last sentence of slide 12 and shorten the roadmap on slide 15 to "Next, a pilot with one forwarder in early 2027."
