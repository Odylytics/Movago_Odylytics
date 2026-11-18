# Judge questions for the Movago Q&A

Questions the judges are likely to ask, for the team to rehearse before the Q&A. Each question says why judges ask it and what the answer should cover. Questions marked ⚠️ are the hardest and the most likely, because they repeat the criticism from our meeting with Ms. Dien, who has worked in freight forwarding since 2006 ([meeting notes](../tom-tat-hop-co-Dien-logistics.md), in Vietnamese).

How to answer:

- Keep each answer to 30–45 seconds: the conclusion first, then one number or example, then stop.
- Say which numbers are simulated. The survey tiles on the User Validation slide are labelled "Sample figures"; they are not results.
- Slide names below follow the titles in [AI4Biz_Odylytics_2026_Slide.pdf](../AI4Biz_Odylytics_2026_Slide.pdf).
- If you don't know, say so, and say how the pilot will measure it. Judges respect a team that knows what it doesn't know yet.

---

## 1. Problem and customer

**1.1. Who uses Movago every day, and who signs the cheque?**

- Why they ask: to see whether the team separates the user from the buyer.
- Answer: the person who checks supplier invoices uses it every day. The deck calls this the AP accountant, but our interviews showed that in many forwarders operations or customer service (CS) does the matching, because they know which services each job really used. Movago works for either: one person checks the lines, and the chief accountant or CFO approves payment and decides to buy.
- Watch out: the deck (Target Business & Users, How AI Helps, How It Works) says AP, while the demo now says operations. Until they match, answer as above so you don't contradict the slide on screen.

**1.2. ⚠️ How do you know this problem is real? How many people have you talked to?**

- Why they ask: this is the first question at every ideathon.
- Answer: name the interviews on the User Validation slide: Ms. Laura Tran, CEO of TB Logistics JSC, and teams at Headway, Bee Logistics and Evergreen. Add Ms. Dien, in freight forwarding since 2006, who confirmed that operations staff check supplier invoices against buy rates by hand and call the supplier when they don't match. Have one concrete quote ready from each.
- Don't say: "our survey shows…" while the survey figures are still a sample.

**1.3. What does this problem cost a forwarder today?**

- Answer: there is no published figure for Vietnamese forwarders, and that is what the pilot measures. International benchmarks: 3–6% of freight invoices carry billing errors in typical US audits, as the Business Problem slide says, and 1–5% of freight spend is recovered ([competitive analysis](phan_tich_canh_tranh.md)). In the demo case INV-095, one fee line is VND 800,000 ($31) over, before tax.
- Ms. Dien added two more costs: pay a supplier late and the shipping line charges a late fee; collect from the customer late and cash flow slips.

**1.4. Why can't they just check the invoice total?**

- Answer: INV-095 adds up correctly, but the documentation fee is VND 1,300,000 against VND 500,000 approved. A total check would pass it. Each line has to be checked against the right rate version and the conditions of that shipment.

---

## 2. Solution and AI

**2.1. ⚠️ If the shipment data is wrong upstream, isn't your check meaningless?**

- Why they ask: this was Ms. Dien's main criticism, and anyone from the industry will ask it.
- Answer: Movago assumes the job's services and buy rates are already in the forwarder's system, entered by pricing and operations. Movago checks supplier invoices against that record and does not fix it. A charge with no basis in the job is flagged and sent back to operations, never guessed. The start of the chain, entering rates and bookings, is on the roadmap, and the demo already builds a rate card from a carrier quotation.

**2.2. Where exactly is the AI? What's left if you remove it?**

- Answer: AI reads PDF invoices, photos, scans and carrier quotations, where every carrier uses its own format, and maps Vietnamese and English fee names to fee codes. The money check is clear rules, not AI, so every result has evidence you can open. Be honest about the demo: AI reading is simulated; shipment matching, rate selection, recalculation and the resend check run live.

**2.3. What happens when the AI misreads an amount?**

- Answer: every field keeps its position on the page and a confidence score. Low-confidence fields, and lines that match several rates, go to a person. Movago never approves payment; that stays with the chief accountant.

**2.4. ⚠️ CargoWise, ForwardX and MISA already exist. Why would anyone add Movago?**

- Answer: the forwarder's own system stores the buy rates, and MISA handles invoicing and tax. The gap between them is checking supplier invoices against those buy rates, which is still done by hand. Movago is a checking layer between the two systems and replaces neither. In the demo its output is a line-by-line report and a payment request as a CSV that accounting brings into MISA; a direct MISA link comes after the pilot.
- Don't say: "nobody does this". ForwardX, LogisForce, Viindoo and CargoWise all exist ([competitive analysis](phan_tich_canh_tranh.md)).

**2.5. How does Movago connect to MISA?**

- Answer: today it exports the payment request as a CSV. After the pilot, a connection through the MISA AMIS API. We have not checked MISA's import template yet, so don't promise a direct import.

---

## 3. Market and competition

**3.1. How big is the market?**

- Answer: about 4,000–4,500 freight forwarders in Vietnam (VLA). Global freight audit is about $0.9 billion (the TAM on the Market Size slide), growing fastest in Asia-Pacific. Bottom-up for Vietnam: about 400 target firms (10% qualify, an assumption) × $1,412 a year = a $565K SAM, and 30 customers by year 3 = a $42K SOM. Vietnam's import-export reached $1.01 trillion in the first ten months of 2026, up 32.3%.
- Don't say: that the whole $0.9 billion is Movago's market. Name the first segment: mid-sized forwarders in Ho Chi Minh City.

**3.2. ⚠️ Forwarders buy end-to-end suites, not point tools. Who buys this?**

- Why they ask: this is exactly what Ms. Dien told us.
- Answer: Movago doesn't replace the forwarder's software; it sits next to it. The buyer is the chief accountant or CFO, for a concrete reason: stop paying wrong charges and stop paying suppliers late. If the pilot shows the value comes from real discrepancies, we can charge per confirmed adjustment.

**3.3. What stops CargoWise or ForwardX from adding this feature?**

- Answer: there is no big technical barrier, and say so plainly. Our edge is focus on mid-sized Vietnamese forwarders that don't run CargoWise: Vietnamese and English fee names, Vietnamese invoices, photos sent over Zalo, low setup cost, and a set of real exceptions collected during the pilot.

**3.4. Your comparison table ticks every box for Movago. Does the demo really read PDFs and scans?**

- Why they ask: the Competitive Advantage slide shows Movago with every capability, and a sharp judge will test it.
- Answer: the Movago column shows the product design. In today's demo, AI reading of PDFs and scans is simulated; shipment matching, rate checks, the duplicate check and the rate card from a quote run live. The pilot adds real OCR, as the Feasibility slide says.

---

## 4. Business model

**4.1. How do you make money, and what does it cost?**

- Answer: B2B SaaS priced per unique invoice processed, plus a setup fee when a customer needs its own configuration. The working assumption on the Market Size slide is VND 3 million a month (about $118), close to ShipCheck Basic at $110; ShipCheck's plans run $110–556 a month. The real price is set with the buyer during the pilot.

**4.2. ⚠️ Show me the ROI. Is it worth paying for?**

- Answer, using the illustrative scenario in the [brief](../colio_ai_project_brief.md): 1,000 invoices a month, from 15 to 9 minutes each, 100 hours freed a month, about $235 a month at VND 60,000 an hour. Movago breaks even at 3 minutes saved per invoice. All of these are assumptions, labelled "Illustrative" on the slide.
- Be ready for the follow-up, "$235 a month is small". The honest answer: time saved alone may not be enough. The bigger value is wrong charges stopped and late-payment fees avoided, and the pilot measures exactly those two.

---

## 5. Pilot and evidence

**5.1. What does the pilot measure, and what counts as success?**

- Answer: one forwarder in Ho Chi Minh City, 30–100 invoice sets, one lane, one or two suppliers, in Q1 2027. Success means:
  - median handling time per invoice down by at least 30%;
  - every money alert opens its evidence;
  - precision and recall published, including the errors missed.

**5.2. Do you have a pilot partner signed up?**

- Answer: state the real status. If none of TB Logistics, Headway, Bee Logistics, Evergreen or Ms. Dien has formally agreed, say "in discussion" and name the next step: asking for one anonymised set of job documents.

**5.3. Where do the survey numbers (72%, 12 min, 38%, 82%) come from?**

- Answer: they are sample figures, and the slide labels them "Sample figures". The real survey of about 50 people in logistics and finance is running. Don't present them as results. Better: replace them with real results before the event.

---

## 6. Team and execution

**6.1. ⚠️ None of you works in logistics. Why should we trust you on this?**

- Why they ask: Ms. Dien called this the team's biggest risk.
- Answer: admit it directly. The team makes up for it in three ways:
  - learning from people in the industry (Ms. Laura Tran, Ms. Dien);
  - bringing in an advisor with forwarding experience;
  - having operations staff confirm every result during the pilot.
- The team's strength is putting AI in front of real users, as on the Why Our Team slide: about 1,000+ people have tested our products, 1M+ views on social media, 10+ partner organisations, and one AI core shared by six products. Keep the four prizes (1st OISP, 1st EPICS 8, 2nd Bach Khoa Innovation, 1st Fessior DevCamp) as a backup answer; they are no longer on the slide.

**6.2. Will you keep going after this competition? Who does what?**

- Answer: each member names their own role from the Team slide. Agree on titles first: the slide says Business Analyst and Product Manager, while odylytics.com says CPO and CEO. Give concrete steps for the next 30 days, for example interviewing two or three more forwarders and asking for a sample set of job documents.

**6.3. How does AquaGuard relate to Movago?**

- Answer: same team, Odylytics, and the same AI core. The user numbers and prizes belong to AquaGuard, EnableCode and Includio, not Movago, as the footer of the Why Our Team slide says. Say this clearly so judges don't think the team is claiming credit it hasn't earned.

---

## 7. Data and risk

**7.1. Invoices and buy rates are sensitive. How do you protect them?**

- Answer: before the pilot, agree in writing on:
  - who may use and access the data;
  - how long it is kept and how it is deleted;
  - which fields may be sent to the AI provider.
- Comply with Personal Data Protection Law 91/2025/QH15 and Decree 356/2025/ND-CP. All data in the demo is simulated.

**7.2. How do you handle exceptions, like a change of destination after the cargo is on board?**

- Why they ask: Ms. Dien gave exactly this example.
- Answer: the first version doesn't resolve exceptions on its own. A line with no basis in the current job is flagged and sent to operations. The pilot collects the most common exceptions, and those shape the next step.

---

## Checklist before the event

- [ ] Do the deck, demo and video all say that operations/CS checks the invoices?
- [ ] Can every speaker answer 1.2, 2.1, 2.4 and 4.2 in 45 seconds?
- [ ] Have the sample survey figures on the User Validation slide been replaced with real ones? If not, do we say they are a sample?
- [ ] Have Ms. Laura Tran, Headway, Bee Logistics, Evergreen and Ms. Dien agreed to be named or shown during the pitch?
