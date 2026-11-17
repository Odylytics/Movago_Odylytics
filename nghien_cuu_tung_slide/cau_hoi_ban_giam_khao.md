# Judge questions for the Movago Q&A

Questions the judges are likely to ask, for the team to rehearse before the Q&A. Each question says why judges ask it and what the answer should cover. Questions marked ⚠️ are the hardest and the most likely, because they repeat the criticism from our meeting with Ms. Dien, who has worked in freight forwarding since 2006 ([meeting notes](../tom-tat-hop-co-Dien-logistics.md), in Vietnamese).

How to answer:

- Keep each answer to 30–45 seconds: the conclusion first, then one number or example, then stop.
- Say which numbers are simulated. The survey figures on slide 10 are a sample, not pilot results.
- If you don't know, say so, and say how the pilot will measure it. Judges respect a team that knows what it doesn't know yet.

---

## 1. Problem and customer

**1.1. Who uses Movago every day, and who signs the cheque?**

- Why they ask: to see whether the team separates the user from the buyer.
- Answer: Operations and customer service (CS) use it daily. They know which services each job really used, and they are the ones who check supplier invoices. The chief accountant or CFO, together with the head of operations, approves payment and decides to buy.
- Watch out: deck V4 (slides 2, 4 and 10) still says accounts payable does the check, while the demo now says operations. Align them before the event, or a judge will notice.

**1.2. ⚠️ How do you know this problem is real? How many people have you talked to?**

- Why they ask: this is the first question at every ideathon.
- Answer: two conversations with people in the industry. One with Ms. Laura Tran, CEO of TB Logistics JSC. One with Ms. Dien, in freight forwarding since 2006. Ms. Dien confirmed that operations staff check supplier invoices against buy rates by hand, and call the supplier when they don't match.
- Don't say: "our survey shows…" while the survey figures are still a sample.

**1.3. What does this problem cost a forwarder today?**

- Answer: there is no published figure for Vietnamese forwarders, and that is what the pilot measures. International benchmarks: 3–6% of freight invoices contain errors in a typical audit, and 1–5% of freight spend is recovered ([competitive analysis](phan_tich_canh_tranh.md)). In the demo case INV-095, one fee line is VND 800,000 ($31) over, before tax.
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

- Answer: the forwarder's own system stores the buy rates, and MISA handles invoicing and tax. The gap between them is checking supplier invoices against those buy rates, which is still done by hand. Movago is a checking layer between the two systems and replaces neither. Its output is a payment request as a CSV that accounting brings into MISA; a direct MISA link comes after the pilot.
- Don't say: "nobody does this". ForwardX, LogisForce, Viindoo and CargoWise all exist ([competitive analysis](phan_tich_canh_tranh.md)).

**2.5. How does Movago connect to MISA?**

- Answer: today it exports the payment request as a CSV. After the pilot, a connection through the MISA AMIS API. We have not checked MISA's import template yet, so don't promise a direct import.

---

## 3. Market and competition

**3.1. How big is the market?**

- Answer: about 4,000–4,500 freight forwarders in Vietnam (VLA). Global freight audit and payment is about $1 billion in 2025, growing fastest in Asia-Pacific. Vietnam's import-export reached $1.01 trillion in the first ten months of 2026, up 32.3%.
- Don't say: that the whole $1 billion is Movago's market. Name the first segment: mid-sized forwarders in Ho Chi Minh City.

**3.2. ⚠️ Forwarders buy end-to-end suites, not point tools. Who buys this?**

- Why they ask: this is exactly what Ms. Dien told us.
- Answer: Movago doesn't replace the forwarder's software; it sits next to it. The buyer is the chief accountant or CFO, for a concrete reason: stop paying wrong charges and stop paying suppliers late. If the pilot shows the value comes from real discrepancies, we can charge per confirmed adjustment.

**3.3. What stops CargoWise or ForwardX from adding this feature?**

- Answer: there is no big technical barrier, and say so plainly. Our edge is being first in the mid-sized segment: Vietnamese and English fee names, Vietnamese invoices, photos sent over Zalo, low setup cost, and a set of real exceptions collected during the pilot.

---

## 4. Business model

**4.1. How do you make money, and what does it cost?**

- Answer: a subscription priced per invoice processed, plus a setup fee when a customer needs its own configuration. The price is not fixed yet; we will set it with the buyer during the pilot.

**4.2. ⚠️ Show me the ROI. Is it worth paying for?**

- Answer, using the illustrative scenario in the [brief](../colio_ai_project_brief.md): 1,000 invoices a month, from 15 to 9 minutes each, 100 hours freed a month, about $235 a month at VND 60,000 an hour. All of these are assumptions.
- Be ready for the follow-up, "$235 a month is small". The honest answer: time saved alone may not be enough. The bigger value is wrong charges stopped and late-payment fees avoided, and the pilot measures exactly those two.

---

## 5. Pilot and evidence

**5.1. What does the pilot measure, and what counts as success?**

- Answer: one forwarder in Ho Chi Minh City, 30–100 invoice sets, one lane, one or two suppliers, in Q1 2027. Success means:
  - median handling time per invoice down by at least 30%;
  - every money alert opens its evidence;
  - precision and recall published, including the errors missed.

**5.2. Do you have a pilot partner signed up?**

- Answer: state the real status. If TB Logistics or Ms. Dien has not formally agreed, say "in discussion" and name the next step: asking for one anonymised set of job documents.

**5.3. Where do the numbers on slide 10 come from?**

- Answer: they are sample figures, labelled "Sample pilot". Don't present them as results. Better: replace them with the real survey results before the event.

---

## 6. Team and execution

**6.1. ⚠️ None of you works in logistics. Why should we trust you on this?**

- Why they ask: Ms. Dien called this the team's biggest risk.
- Answer: admit it directly. The team makes up for it in three ways:
  - learning from people in the industry (Ms. Laura Tran, Ms. Dien);
  - bringing in an advisor with forwarding experience;
  - having operations staff confirm every result during the pilot.
- The team's strength is putting products in front of real users: AquaGuard has 600+ active users, four prizes in one year, and one shared AI core.

**6.2. Will you keep going after this competition? Who does what?**

- Answer: each member names their own role from the Team slide. Give concrete steps for the next 30 days, for example interviewing two or three more forwarders and asking for a sample set of job documents.

**6.3. How does AquaGuard relate to Movago?**

- Answer: same team, Odylytics, and the same AI core. The prizes and user numbers belong to AquaGuard, not Movago. Say this clearly so judges don't think the team is claiming credit it hasn't earned.

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
- [ ] Have the sample survey figures on slide 10 been replaced with real ones? If not, do we say they are a sample?
- [ ] Have Ms. Laura Tran and Ms. Dien agreed to be named during the pitch?
