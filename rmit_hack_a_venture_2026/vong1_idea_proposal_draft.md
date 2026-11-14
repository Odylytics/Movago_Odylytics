# Movago: Verifying B2B Freight Payments Before the Money Moves

**Team:** Odylytics
**Primary pillar:** Pillar 5, Trust Architecture & Financial Integrity
**Secondary pillar:** Pillar 2, Financial Infrastructure & Ecosystem Interoperability
**Prototype:** https://movago.odylytics.com

## 1. The problem: business payments are approved on evidence nobody checks line by line

Vietnam's payment rails are becoming faster and safer. Cashless transactions passed 15 billion in the first half of 2026, up 34.3% year on year, and the State Bank's SIMO system helped about 1.6 million customers stop suspicious transfers worth around VND 5.5 trillion (VnEconomy, 2026; VietNamNet, 2026). SIMO, however, protects the transfer itself. In business-to-business payments, much of the risk enters earlier, in the invoice that justifies the transfer. Once an accountant approves an incorrect invoice, the bank executes a payment that is valid in form but wrong in substance.

Freight is where this gap is widest. Goods trade reached USD 1,010.55 billion in the first ten months of 2026, up 32.3% (National Statistics Office, 2026). Every shipment ends in invoices from carriers and agents, and logistics costs already equal about 16% of GDP against a national target of 12–15% by 2035 (Vietnam Logistics Report 2025; Decision 2229/QĐ-TTg). To approve one freight invoice, an accounts-payable accountant has to bring together three sources: the invoice, the shipment file, and the rate card that pricing approved. These sit in email, chat apps, spreadsheets and different systems. The accountant checks them by hand, under time pressure, and often only the total.

A total that adds up proves nothing. In our test case, invoice INV-095 sums correctly to VND 9,300,000, yet its documentation fee is VND 1,300,000 against an approved VND 500,000, an overcharge of VND 800,000 that a sum check passes. In markets with professional freight audit, 3–6% of freight invoices contain errors and 1–5% of freight spend is recoverable (Transportation Insight). Vietnam has no published figure, and no common tool to find out.

## 2. The solution: a verification layer before every payment

Movago checks each fee line of a supplier invoice against the evidence for it, before payment is approved. It works in four steps:

1. **Collect and fingerprint.** Invoices, debit notes and quotations arrive in one inbox. A SHA-256 fingerprint flags a file that has been sent before, even under a new name, so the same invoice is not paid twice.
2. **Read and match.** Each fee line is matched to its shipment by shipment ID or bill of lading and supplier, then priced from the approved rate card by route, container type, unit and validity date.
3. **Show the evidence.** Every line is labelled *Matched*, *Discrepancy* or *Missing basis*, with both sources side by side: "INV-095, page 1, DOC line: 1,300,000" next to "RATE-V3, line 12: 500,000".
4. **Route the decision.** One click sends a discrepancy to pricing with the evidence attached. The chief accountant approves the correct amount, and every check exports to CSV with the verifier, the reason and the time.

**Technology.** Document AI (OCR with layout analysis) reads fields and fee lines together with their position on the page. A language model maps Vietnamese and English fee names, such as "Phí chứng từ" or "Documentation fee", to standard fee codes and returns a confidence score; anything below the threshold goes to a person. A deterministic rules engine selects the price and does the arithmetic, so the money decision is explainable and testable rather than generated. Data analytics turns the audit trail into reports on error rates by supplier and fee type.

**Built in the MVP versus planned.** Rate-card building from a quotation, shipment matching, the rate rules, line-by-line reconciliation, duplicate fingerprinting and CSV export run live in the prototype, covered by 14 automated tests. Document AI reading and channel intake (email, Zalo, phone capture) are simulated in the demo and will be built for the pilot.

**Next controls for financial integrity.** We will compare the payee bank account on each invoice with the approved supplier record, to catch account-substitution fraud before a transfer is created, and accept structured e-invoices under Decree 254/2026/NĐ-CP so that verified results can travel with the payment instruction to the bank.

## 3. Innovation and competitiveness

Movago verifies against a different source of truth from existing tools. Transport management systems such as CargoWise's Invoice Processing Portal compare an invoice with the cost the system itself accrued for the job. If the accrual was entered from the wrong rate version, the invoice still matches. Movago checks against the rate card pricing approved, and shows where both numbers came from. General invoice-matching tools in Vietnam, such as Innomation AutoMatching, compare invoices with purchase orders and contracts but do not model freight pricing conditions: container size, route, unit and validity dates.

Our open-innovation angle is deliberate. Movago starts from files every forwarder already has (PDF invoices, CSV exports from TMS and ERP) instead of requiring a system change. Its value grows with a labelled dataset of Vietnamese fee names, document layouts and common errors, which only a pilot can begin to build and which incumbents do not hold.

## 4. Feasibility

The prototype is live and can be tested without login, with a guided three-minute story and a hands-on sample case. The core logic runs in the browser today; the pilot adds a backend with an audit log and a document AI service.

Pilot plan:

- **Partner:** one mid-sized sea-freight forwarder in Ho Chi Minh City, recruited through the VLA and HLA member directories.
- **Sample:** 30–100 anonymised invoice sets with permission to use, plus a set of deliberate exception cases.
- **Measures:** median handling minutes per invoice, the share of lines that can be checked, and the precision and recall of discrepancy alerts against labels confirmed by the business.
- **Success threshold:** agreed with the buyer before the pilot; our proposal is at least a 30% cut in median handling time, with every money alert traceable to an openable source.

Data use follows the Personal Data Protection Law 91/2025/QH15: agreed access rights, retention limits and control over which fields reach an AI provider.

## 5. Scalability and business model

Movago is sold as a subscription priced by the number of unique invoices processed, with a setup fee when a customer needs custom configuration.

In an illustrative scenario of 1,000 invoices a month, cutting handling time from 15 to 9 minutes frees about 100 staff hours a month. At an estimated usage cost of VND 3 million a month, a saving of 3 minutes per invoice is enough to break even. These figures are assumptions that the pilot will replace with measured results.

The global freight audit and payment market is valued at about USD 0.8–1.0 billion in 2025 and is growing 13–14% a year, fastest in Asia-Pacific (Knowledge Sourcing Intelligence; Mordor Intelligence). Vietnam has around 4,000–4,500 freight forwarding companies (Vietnam Logistics Report 2025). We start with ocean freight charges, the most rule-heavy invoices, and then extend the same evidence model to other recurring supplier payments: trucking, warehousing and customs services. Each new category needs new rate rules, not a new product.

## 6. Sustainability, ESG and impact

Movago's main contribution is to **governance**. It separates the person who flags, the person who confirms and the person who approves, and it leaves an audit trail for every payment decision. On the **social** side, it removes repetitive cross-checking from accountants' work and ensures that a forwarder's own customers are billed only for charges that were confirmed. On the **environmental** side, a single digital evidence record replaces repeated printing, re-sending and re-keying of documents. The solution supports SDG 8 (decent work and economic growth), SDG 9 (industry, innovation and infrastructure) and SDG 16.6 (effective, accountable and transparent institutions).

The anticipated impact is twofold: overpayments are stopped before money leaves the business rather than recovered afterwards, and Vietnam gets its first measured rate of freight invoice errors, a figure that today has to be borrowed from other markets.

## 7. Team and next steps

Odylytics is a student-founded AI team in Ho Chi Minh City whose previous project, AquaGuard, won first prize at EPICS 8 in 2026. Product, engineering and AI research are covered within the founding team.

Next steps: interview accounts-payable, pricing and finance leads at five to ten forwarders; secure one pilot partner; build document AI reading and the payee-account check; and publish pilot results against the agreed thresholds.

## References

- Decision 2229/QĐ-TTg (2025). https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/10/2229-ttg.signed.pdf
- Ministry of Industry and Trade (2026). Vietnam Logistics Report 2025. https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf
- National Statistics Office (2026). Socio-economic situation, October and ten months of 2026. https://www.nso.gov.vn/bai-top/2026/11/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-thang-10-va-10-thang-nam-2026/
- Transportation Insight. Freight audit and payment: protect profit from soft rates. https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/
- Knowledge Sourcing Intelligence (2025). Freight Audit and Payment Market 2025–2030. https://www.researchandmarkets.com/reports/6176216/freight-audit-payment-market-forecasts
- Mordor Intelligence. Freight Audit and Payment Market. https://www.mordorintelligence.com/industry-reports/freight-audit-and-payment-market
- VnEconomy (2026, August 12). Vietnam's cashless payment transactions rise 34.3% in first half. https://en.vneconomy.vn/vietnams-cashless-payment-transactions-rise-343-in-first-half.htm
- VietNamNet (2026, August 13). Vietnam bank alerts stop 1.6 million suspected scam transactions. https://vietnamnet.vn/en/vietnam-bank-alerts-stop-1-6-million-suspected-scam-transactions-2545014.html
