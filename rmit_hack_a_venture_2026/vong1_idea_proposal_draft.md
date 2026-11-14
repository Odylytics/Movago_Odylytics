# Movago: Verifying B2B Freight Payments Before the Money Moves

**Team:** Odylytics
**Primary pillar:** Pillar 5, Trust Architecture & Financial Integrity
**Secondary pillar:** Pillar 2, Financial Infrastructure & Ecosystem Interoperability
**Prototype:** https://movago.odylytics.com

## 1. The problem: business payments are approved on evidence nobody checks line by line

Vietnam's payment rails are becoming faster and safer. Cashless transactions passed 15 billion in the first half of 2026, up 34.3% year on year, and by the end of July 2026 the State Bank's SIMO system had helped about 1.6 million customers stop suspicious transfers worth around VND 5.5 trillion (VnEconomy, 2026; VietNamNet, 2026). SIMO, however, protects the transfer itself. In business-to-business payments, part of the risk enters earlier, in the invoice that justifies the transfer. Once an accountant approves an incorrect invoice, the bank executes a payment that is valid in form but wrong in substance.

Freight is where this gap is widest. Goods trade reached USD 1,010.55 billion in the first ten months of 2026, up 32.3% (National Statistics Office, 2026). Every shipment ends in invoices from carriers and agents, and logistics costs already equal about 16% of GDP against a national target of 12–15% by 2035 (Ministry of Industry and Trade, 2026; Decision No. 2229/QĐ-TTg, 2025). To approve one freight invoice, an accounts-payable accountant has to bring together three sources: the invoice, the shipment file, and the rate card that pricing approved. These sit in email, chat apps and spreadsheets, and are checked by hand, often only at the total.

A total that adds up proves nothing. In our test case, invoice INV-095 sums correctly to VND 9,300,000, yet its documentation fee is VND 1,300,000 against an approved VND 500,000, an overcharge of VND 800,000 that a sum check passes. That is one line on one invoice; the scale of the problem is better read as a share of freight spend. According to a US freight audit provider, 3–6% of freight invoices contain errors and 1–5% of freight spend is recoverable (Transportation Insight, n.d.). Vietnam has no published figure yet.

## 2. The solution: a verification layer before every payment

Movago checks each fee line of a supplier invoice against the evidence for it, before payment is approved. It works in four steps:

1. **Collect and fingerprint.** Invoices, debit notes and quotations arrive in one inbox. A SHA-256 fingerprint flags a file that has been sent before, even under a new name, so the same invoice is not paid twice.
2. **Read and match.** Each fee line is matched to its shipment by shipment ID or bill of lading and supplier, then priced from the approved rate card by route, container type, unit and validity date.
3. **Show the evidence.** Every line is labelled *Matched*, *Discrepancy* or *Missing basis*, with both sources side by side: "INV-095, page 1, DOC line: 1,300,000" next to "RATE-V3, line 12: 500,000".
4. **Route the decision.** One click sends a discrepancy to pricing with the evidence attached. The chief accountant approves the correct amount, and every check exports to CSV with the verifier, the reason and the time.

**Technology.** Document AI (OCR with layout analysis) reads fields and fee lines together with their position on the page. A language model maps Vietnamese and English fee names, such as "Phí chứng từ" or "Documentation fee", to standard fee codes and returns a confidence score; anything below the threshold goes to a person. A deterministic rules engine selects the price and does the arithmetic, so the money decision is explainable and testable rather than generated.

**Built in the MVP versus planned.** Rate-card building from a quotation, shipment matching, the rate rules, line-by-line reconciliation, duplicate fingerprinting and CSV export run live in the prototype, covered by 14 automated tests. Document AI reading and channel intake (email, Zalo, phone capture) are simulated in the demo and will be built for the pilot.

**Next controls for financial integrity.** We will compare the payee bank account on each invoice with the approved supplier record, to catch account-substitution fraud before a transfer is created, and accept structured e-invoices under Decree 254/2026/NĐ-CP so that verified results can travel with the payment instruction to the bank.

## 3. Innovation and competitiveness

Movago verifies against a different source of truth from existing tools. Transport management systems such as CargoWise's Invoice Processing Portal compare an invoice with the cost the system itself accrued for the job. If the accrual was entered from the wrong rate version, the invoice can still match. Movago checks against the rate card pricing approved, and shows where both numbers came from. General invoice-matching tools in Vietnam, such as Innomation AutoMatching, compare invoices with purchase orders and contracts but are not built for freight pricing conditions: container size, route, unit and validity dates.

Movago starts from files every forwarder already has (PDF invoices, TMS and ERP exports) instead of requiring a system change, and its value grows with a labelled dataset of Vietnamese fee names and errors that only a pilot can build. Following the open-innovation model, we plan to work with the VLA and HLA associations to reach pilot forwarders, with structured e-invoice data under the tax authority's rules, and with banks that receive payment instructions carrying the verification result.

## 4. Feasibility

The prototype is live and can be tested without login, through a guided story or a hands-on sample case. The pilot adds a backend with an audit log and a document AI service.

Pilot plan:

- **Partner:** one mid-sized sea-freight forwarder in Ho Chi Minh City.
- **Sample:** 30–100 anonymised invoice sets with permission to use, plus a set of deliberate exception cases.
- **Measures:** median handling minutes per invoice, line coverage, and the precision and recall of discrepancy alerts against business-confirmed labels.
- **Success threshold:** agreed with the buyer before the pilot; our proposal is at least a 30% cut in median handling time, with every money alert traceable to an openable source.

Data use follows the Personal Data Protection Law 91/2025/QH15: agreed access rights, retention limits and control over which fields reach an AI provider.

## 5. Scalability and business model

Movago is sold as a subscription priced by the number of unique invoices processed, with a setup fee for custom configuration. Our indicative price is about USD 1,400 per customer a year.

In an illustrative scenario of 1,000 invoices a month, cutting handling time from 15 to 9 minutes frees about 100 staff hours a month. At an estimated usage cost of VND 3 million a month, a saving of 3 minutes per invoice is enough to break even. These figures are assumptions that the pilot will replace with measured results.

The global freight audit and payment market is valued at about USD 0.8–1.0 billion in 2025 and is growing 13–14% a year, fastest in Asia-Pacific (Knowledge Sourcing Intelligence, 2025; Mordor Intelligence, n.d.). Vietnam has around 4,000–4,500 freight forwarding companies (Ministry of Industry and Trade, 2026). If 10% of them fit our profile, an assumption we will test through interviews, the serviceable market is about USD 560,000 a year; our year-three target is 30 customers, about USD 42,000 in annual revenue. We start with ocean freight, the most rule-heavy invoices, then extend the same evidence model to trucking, warehousing and customs payments; each needs new rate rules, not a new product.

## 6. Sustainability, ESG and impact

Movago's main contribution is to **governance**. It separates the person who flags, the person who confirms and the person who approves, and it leaves an audit trail for every payment decision. On the **social** side, it removes repetitive cross-checking from accountants' work and ensures that a forwarder's own customers are billed only for charges that were confirmed. We make no environmental claim that the pilot cannot measure. The solution supports SDG 8 (decent work and economic growth), SDG 9 (industry, innovation and infrastructure) and SDG 16.6 (effective, accountable and transparent institutions).

The anticipated impact is twofold: overpayments are stopped before money leaves the business, and Vietnam gets its first measured rate of freight invoice errors.

## 7. Team and next steps

Odylytics is a student-founded AI team in Ho Chi Minh City whose previous project, AquaGuard, won first prize at EPICS 8 in 2026.

Next steps: interview five to ten forwarders, secure one pilot partner, build document AI reading and the payee-account check, and publish results against the agreed thresholds.

## References

Decision No. 2229/QĐ-TTg. (2025). Prime Minister of Vietnam. https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/10/2229-ttg.signed.pdf

Knowledge Sourcing Intelligence. (2025). *Freight audit and payment market: Forecasts 2025–2030*. Research and Markets. https://www.researchandmarkets.com/reports/6176216/freight-audit-payment-market-forecasts

Ministry of Industry and Trade. (2026). *Vietnam logistics report 2025*. https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf

Mordor Intelligence. (n.d.). *Freight audit and payment market*. https://www.mordorintelligence.com/industry-reports/freight-audit-and-payment-market

National Statistics Office. (2026, November). *Socio-economic situation in October and the first ten months of 2026*. https://www.nso.gov.vn/bai-top/2026/11/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-thang-10-va-10-thang-nam-2026/

Transportation Insight. (n.d.). *Freight audit and payment: Protect profit from soft rates*. https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/

VietNamNet. (2026, August 13). Vietnam bank alerts stop 1.6 million suspected scam transactions. https://vietnamnet.vn/en/vietnam-bank-alerts-stop-1-6-million-suspected-scam-transactions-2545014.html

VnEconomy. (2026, August 12). Vietnam's cashless payment transactions rise 34.3% in first half. https://en.vneconomy.vn/vietnams-cashless-payment-transactions-rise-343-in-first-half.htm
