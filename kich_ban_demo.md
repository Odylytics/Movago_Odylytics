# Kịch bản demo Movago — "One price, many invoices" (~3:00)

**Soạn ngày 10/11/2026.** Lời thoại (narration) và chữ trên màn hình (on-screen) viết bằng tiếng Anh cho ban giám khảo. Phần mô tả hình và animation viết bằng tiếng Việt cho người dựng demo.

## Ba điều cần nắm trước

1. **Không nói "logistics chiếm 16% GDP".** Con số 16–17% là **chi phí logistics so với GDP**. Bản thân ngành logistics chỉ đóng góp khoảng 4,5–5% GDP. Script dùng cách nói "logistics costs ≈ 16–17% of GDP".
2. **"Hợp đồng" trong script là báo giá / thỏa thuận giá** giữa forwarder và hãng tàu, tức bảng giá RATE-V3. Câu chuyện vẫn nằm trong phạm vi MVP là kiểm tra hóa đơn cước. Movago không phải phần mềm quản lý hợp đồng.
3. **Không nói Movago "có AI agents".** Trong MVP, AI chỉ đọc chứng từ và gợi ý, người vẫn là người duyệt. Script gọi đúng phần đã dựng, còn phần chưa làm thì ghi là kế hoạch cho pilot.

## Nên dùng web hay CSV?

**Dùng cả hai, mỗi cái một việc:**

| | Web (màn hình đối chiếu) | CSV / Excel |
|---|---|---|
| Dùng để | Xem, kiểm tra và xác minh từng dòng | Chuyển kết quả sang hệ thống đang dùng |
| Mạnh ở | Đặt hai nguồn cạnh nhau, trạng thái Khớp / Chênh lệch / Thiếu căn cứ, gửi pricing kèm lý do | Kế toán Việt Nam quen Excel; nhập được vào MISA, Fast, CargoWise mà chưa cần tích hợp |
| Khi nào | Mỗi ngày, cho từng hóa đơn | Cuối ngày hoặc khi trình duyệt chi |

- Báo cáo Logistics Việt Nam 2025 ghi nhận nhiều doanh nghiệp gặp khó khi tích hợp hệ thống. Vì vậy pilot nên đi theo hướng **web để kiểm tra, file xuất để bàn giao**, rồi mới làm kết nối ERP.
- Lưu ý kỹ thuật: CSV nên lưu **UTF-8 có BOM**, nếu không Excel sẽ làm vỡ dấu tiếng Việt. Nếu được, xuất thêm `.xlsx`.

---

## Script

### Cảnh 1 · Ký thỏa thuận giá (0:00–0:12)

**Hình:** Hai bên ngồi đối diện. Bên trái là Demo Forwarder (Khoa, Pricing), bên phải là Supplier A (đại lý hãng tàu). Tờ báo giá **Q-SA-2611** trượt vào giữa, hai chữ ký hiện ra, đóng dấu "Agreed".

**Animation:** Bắt tay → tờ báo giá phóng to, 3 dòng giá sáng lên: Ocean freight 20' · 8,000,000 / Documentation fee · 500,000 / THC · 900,000.

**On-screen:** `Every shipment starts with an agreed price.`

**Narration:** "Every shipment starts with a handshake: a forwarder and a carrier agree on a price, line by line."

### Cảnh 2 · Một thỏa thuận nhân thành rất nhiều (0:12–0:22)

**Hình:** Tờ báo giá tự nhân bản thành lưới hàng chục tờ: hãng khác nhau, tuyến khác nhau (Singapore, Manila, Busan → Cát Lái), container 20' và 40', ngày hiệu lực khác nhau. Mỗi thẻ sau đó tách ra thêm nhiều lô hàng.

**Animation:** Bộ đếm chạy lên: `Rate agreements · Shipments · Fee lines`. Ghi nhỏ ở góc: `Illustrative`.

**On-screen:** `Different routes. Different container sizes. Different dates. Same fee name, different price.`

**Narration:** "Now multiply that by every carrier, route, container size and date. Same fee, different price."

### Cảnh 3 · Bối cảnh Việt Nam (0:22–0:42)

**Hình:** Bản đồ Việt Nam, cảng Cát Lái nhấp nháy. 4 thẻ số lần lượt hiện lên, mỗi thẻ khoảng 4 giây.

**Animation:** Số đếm từ 0 lên; thanh "12–15%" kéo về sau thanh "16–17%".

| Thẻ | On-screen |
|---|---|
| 1 | `Logistics costs ≈ 16–17% of Vietnam's GDP` · *Vietnam Logistics Report 2025* |
| 2 | `Target: 12–15% by 2035` · *Decision 2229/QĐ-TTg* |
| 3 | `US$1,010 bn in goods traded, first 10 months of 2026 (+32.3%)` · *National Statistics Office* |
| 4 | `8.5 bn e-invoices in 2025 · new e-invoice rules from 1 Jul 2026` · *General Department of Taxation · Decree 254/2026/NĐ-CP* |

**Narration:** "In Vietnam, logistics costs are about 16 to 17 percent of GDP, and the government wants them down to 12 to 15. Trade is growing over thirty percent a year, and invoices are going digital: eight and a half billion e-invoices last year. Every overpaid fee is part of that cost."

### Cảnh 4 · Kế toán quá tải (0:42–0:54)

**Hình:** Bàn làm việc của **Hà (AP accountant)**. Hóa đơn đổ về từ email, Zalo, bản giấy; Excel mở 5 tab; đồng hồ chạy nhanh; đèn văn phòng tối dần.

**Animation:** Bộ đếm hộp thư tăng liên tục; các thẻ hóa đơn chồng lên che mặt bàn. Một hóa đơn hiện **"Total ✓"** màu xanh, rồi rung nhẹ.

**On-screen:** `Freight audits typically find errors on 3–6% of invoices.` · *Transportation Insight (US)* · `In Vietnam, nobody has measured it yet.`

**Narration:** "Hà checks every invoice by hand. Audits abroad find errors on three to six percent of freight invoices. In Vietnam, no one has measured it. Our pilot will."

### Cảnh 5 · Movago gom mọi dữ liệu về một chỗ (0:54–1:13)

**Hình:** Các nguồn (email, Zalo, ảnh chụp, file xuất TMS) chảy vào một hộp thư Movago. Báo giá Q-SA-2611 được AI đọc thành **9 dòng giá**, 2 dòng hiện "Check". Khoa duyệt 9/9 → **RATE-V3 published**.

**Animation:** Mỗi dòng đọc xong bay sang bảng có cấu trúc. Hai đầu ra hiện cạnh nhau: màn hình **web** (bảng đối chiếu) và một tệp **CSV** trượt ra.

**On-screen:** `9 lines from Q-SA-2611 → approved rate card RATE-V3 (12 rows across suppliers and routes) · review on the web, export to CSV`

**Narration:** "Movago pulls every quotation, shipment file and invoice into one place. It reads the carrier's quotation into an approved rate card, with Khoa checking the two lines it isn't sure about. Nobody retypes prices into Excel."

**Chèn tech stack (1:05–1:13), chạy song song với lời thoại:** 6 chip trượt vào theo đúng thứ tự xử lý. Chip **đã dựng** in đậm, chip **dự kiến** có viền nét đứt.

| Bước | Chip |
|---|---|
| Intake | `Email · Zalo · SHA-256 file fingerprint` |
| Read | `OCR + layout AI (e.g. Azure AI Document Intelligence)` — *planned* |
| Match | `Rules engine: route · container · unit · date` — *built* |
| Review | `Low confidence → a person decides` |
| Export | `CSV / Excel → ERP later` — *built (CSV)* |
| Data | `Stored in Vietnam · audit log` — *planned* |

**Narration:** "Under the hood: OCR and layout AI to read documents, a rules engine to pick the right price, and a person for anything uncertain."

### Cảnh 6 · Hàng về, hóa đơn đến (1:13–1:25)

**Hình:** Tàu cập Cát Lái, container 20' của **Minh An Uniforms** được giao. Ngay sau đó **Vy (Supplier A)** gửi hóa đơn **INV-095**: PDF qua email, ảnh qua Zalo, Bảo quét bản giấy ở cảng.

**Animation:** 3 tệp bay vào hộp thư, nhập lại thành một thẻ: `3 copies → 1 invoice`.

**On-screen:** `Cargo delivered. The invoice arrives three times.`

**Narration:** "The cargo is delivered. The invoice arrives three ways. Movago groups them into one, so it's checked once."

### Cảnh 7 · AI đọc hóa đơn (1:25–1:38)

**Hình:** PDF INV-095 bên trái, các trường trích xuất bên phải.

**Animation:** Kẻ đường nối từ mỗi dòng trên PDF sang trường tương ứng. Phóng to ghi chú **"AI mapped 'Documentation fee' → DOC · confirm"**. Ghi chú này phải nằm ở vùng không bị khung kể chuyện che.

**On-screen:** `AI reads every line, and shows where it found it.`

**Narration:** "AI reads each fee line and where it sits on the page, and asks Hà to confirm what it isn't sure about."

### Cảnh 8 · Khoảnh khắc bắt lỗi (1:38–1:58), cảnh quan trọng nhất

**Hình:** Bảng đối chiếu từng dòng.

**Animation, chia 2 nhịp:**

1. Tổng 9,300,000 hiện **✓ "Total adds up"** màu xanh, dừng 1 giây.
2. Vạch quét chạy từng dòng: Ocean freight ✓ khớp. Dòng DOC lật sang **Discrepancy**, số **+800,000 ₫** đếm lên, kèm **(~US$31)**.

**On-screen:** `It adds up. It's still wrong.`

**Narration:** "The total adds up, so a simple sum check would pass it. But line by line, the documentation fee is 1.3 million against an approved 500,000. That's 800,000 dong too much."

### Cảnh 9 · Căn cứ (1:58–2:10)

**Hình:** Hai nguồn đặt cạnh nhau: `INV-095 · page 1 · DOC line` và `RATE-V3 · line 12 · DOC 20' · 500,000`.

**Animation:** Mũi tên nối hai dòng; phép tính `1,300,000 − 500,000 = +800,000` hiện từng số.

**On-screen:** `Both sources, side by side. No digging.`

**Narration:** "Hà sees both sources side by side, with the sum. No digging through email."

### Cảnh 10 · Con người xử lý sai lệch (2:10–2:25)

**Hình:** Màn hình chia 3 ô, câu chuyện chuyền tay qua từng người.

1. **Hà (AP)** bấm "Request verification", dòng DOC kèm căn cứ bay sang **Khoa (Pricing)**.
2. Khoa mở RATE-V3 dòng 12 và hồ sơ SHP-001: không có phê duyệt bổ sung. Khoa gọi cho **Vy (Supplier A)**, bong bóng thoại hiện "DOC should be 500,000 per RATE-V3".
3. Vy gửi **hóa đơn điều chỉnh INV-095-A: 8,500,000 ₫**. Movago tự đối chiếu lại, tất cả các dòng chuyển sang **Matched**.

**Animation:** Đường nối chạy Hà → Khoa → Vy → quay lại Movago. Trạng thái dòng DOC đổi theo thứ tự `Discrepancy → Waiting for Pricing → Matched`.

**On-screen:** `Flagged → verified → corrected. Every step keeps its evidence.`

**Narration:** "Hà sends the line to Pricing with the evidence. Khoa confirms there's no extra approval and asks the supplier to correct it. The new invoice checks out, line by line."

### Cảnh 11 · Duyệt chi và tính lại cho khách hàng (2:25–2:33)

**Hình:** **Lan Anh (Chief accountant)** đóng dấu **"Approved for payment · 8,500,000 ₫"**. Bên cạnh, hóa đơn gửi khách **Minh An Uniforms** cũng giảm theo.

**On-screen:** `+800,000 ₫ (~US$31) not paid · customer billed only for confirmed charges`

**Narration:** "The chief accountant approves the right amount, and the customer is billed only for what was confirmed."

### Cảnh 12 · Mô phỏng chi phí: trước → sau (2:33–2:50)

**Hình:** Hai cột đặt cạnh nhau trên nền navy, ghi rõ ở góc **"Illustrative scenario · not pilot results"**. Bộ số lấy đúng kịch bản minh họa trong brief và trang Business case trên web.

| | Trước (thủ công) | Với Movago |
|---|---|---|
| Phút mỗi hóa đơn | 15 | 9 |
| Giờ mỗi tháng (1.000 hóa đơn) | 250 giờ | 150 giờ |
| Chi phí thời gian / tháng (60.000 ₫/giờ) | 15,0 triệu ₫ (~US$588) | 9,0 triệu ₫ (~US$353) |

**Animation:**

- Cột "Before" đứng yên; cột "With Movago" co dần từ 250 xuống 150 giờ, đồng hồ đếm số giờ ngược lại.
- Hiện số **−100 giờ/tháng ≈ 6 triệu ₫ (~US$235) thời gian được giải phóng**.
- Một vạch ngang "Usage cost: 3 triệu ₫ (~US$118)/tháng" hiện lên, cho thấy mức hòa vốn là giảm **3 phút** mỗi hóa đơn.
- Một thẻ riêng tách hẳn ra bên cạnh: `Avoided overpayments: counted separately, only when confirmed`.

**On-screen:** `100 hours a month back to the team. Overcharges stopped, one confirmed case at a time.`

**Narration:** "In our illustrative scenario, a team handling a thousand invoices a month saves six minutes on each, about a hundred hours a month. Money stopped from overcharges is counted separately, and only when it's confirmed. Our pilot measures both."

**Quy tắc khi dựng cảnh này:**

- Thời gian được giải phóng là **năng lực làm việc**, không phải tiền mặt tiết kiệm được. Không ghi "save 6 million".
- Khoản 800.000 ₫ là tiền thật của ca INV-095 giả lập. Không nhân nó lên thành số "tiết kiệm mỗi tháng" khi chưa có pilot.

### Cảnh 13 · Chốt (2:50–3:00)

**Hình:** Thẻ tóm tắt trên nền navy, rồi logo và slogan.

**On-screen:**

```
1 invoice · 1 overcharge caught · +800,000 ₫ (~US$31) · evidence attached
Simulated case. Our pilot measures the real numbers.
Movago — Move smarter. Go safer.
Team Odylytics · KTC Ideathon 2026
[ Try it yourself ]   [ See the business case ]
```

**Narration:** "Caught before payment, with the evidence attached. Movago. Move smarter. Go safer."

---

## Ghi chú cho người dựng

- **Khớp số liệu:** báo giá Q-SA-2611 có **9 dòng**; bảng giá RATE-V3 có **12 dòng** (thêm giá đã hết hạn, Supplier B và tuyến chiều ngược lại), phí DOC 20' nằm ở **dòng 12**. Demo hiện tại đúng. Chỉ cần lời thoại cảnh 5 và màn hình nói rõ hai con số này để giám khảo không nhầm.
- **Thời lượng:** tổng khoảng 3:00, khớp với chữ "3-minute" ở intro. Để giữ 3:00 khi thêm cảnh xử lý và mô phỏng chi phí, đã cắt cảnh hóa đơn gửi lại (tính năng vẫn còn trên web để giám khảo tự thử) và rút cảnh 2, 4, 5. Bảng chọn nhân vật đang ghi "under two minutes", cần đổi thành 3 phút.
- **Vai trò cạnh tên:** luôn ghi như *Hà (AP)*, *Khoa (Pricing)*, *Vy (Supplier A)*, *Lan Anh (Chief accountant)* để người nước ngoài theo dõi được.
- **USD:** dùng tỷ giá chung của dự án **1 USD = 25.500 ₫** (09/11/2026), ghi "~" vì là số làm tròn.
- **Giả lập:** cảnh 2, 12 và 13 phải ghi rõ là giả lập, không phải kết quả pilot, theo đúng [brief Movago](colio_ai_project_brief.md).
- **Lời thoại:** mỗi cảnh một câu chính, khoảng 15–25 chữ. Toàn bài khoảng 355 chữ, khoảng 120 chữ/phút, đọc thong thả trong 3 phút và còn chỗ cho nhịp dừng ở cảnh 8.
- **Màu và font:** theo [quy tắc thiết kế demo](DEMO_DESIGN_RULES.md). Transit Lime cho tiêu đề chiến dịch, tiến trình và điểm nhấn; không dùng Lime một mình để báo lỗi ở cảnh 8.

## Còn cần gì nữa? (rà ngày 10/11/2026)

### Đối chiếu với tiêu chí chấm

Hạng mục dự thi là Operations & Productivity. Tỷ trọng chấm lấy từ [nội dung slide](colio_ai_noi_dung_slide.md).

| Tiêu chí | Tỷ trọng | Cảnh trong video | Đánh giá |
|---|---|---|---|
| Problem | 25% | 1–4 | Đủ: số liệu Việt Nam, kế toán quá tải, tỷ lệ lỗi 3–6% |
| Idea & Innovation | 30% | 5, 7, 8, 9 | Đủ phần "bắt lỗi khi tổng vẫn đúng". **Còn thiếu một câu nói Movago khác đối thủ ở đâu** |
| Feasibility | 25% | 5 (tech stack), 12 | Đủ: tách rõ đã dựng và dự kiến, kịch bản chi phí ghi là minh họa |
| Presentation | 20% | Toàn bài | Cần phụ đề tiếng Anh và giọng đọc rõ (xem bên dưới) |

### Việc nên bổ sung

1. **Một câu về khác biệt**, chèn vào cảnh 9 hoặc đọc trên sân khấu: *"Unlike a TMS that compares invoices with its own cost estimates, Movago checks each line against the rate card pricing approved, and shows both sources."* Nội dung lấy từ [phân tích cạnh tranh](nghien_cuu_tung_slide/phan_tich_canh_tranh.md) (G.O.L, Innomation, ShipCheck, Conlio, BravoTran, CargoWise IPP).
2. **Phụ đề tiếng Anh** cho toàn video. Nhiều giám khảo xem không bật tiếng. Chữ trên màn hình đã có, nhưng lời thoại cũng cần phụ đề.
3. **Giọng đọc:** khoảng 355 chữ trong 3:00, tức khoảng 120 chữ/phút. Nên thu thử một lần để đo lại thời lượng từng cảnh trước khi dựng animation.
4. **Câu trả lời sẵn cho 3 câu hỏi giám khảo hay hỏi sau khi xem video.** Video đã gợi ý câu trả lời ở các cảnh tương ứng, phần đầy đủ nằm trong [phụ lục Q&A](nghien_cuu_tung_slide/Movago_Appendix_QA_EN.pptx) và [kịch bản hỏi đáp](colio_ai_pitch_research_vi.md):
   - *Nếu AI đọc sai?* → cảnh 7: dòng tin cậy thấp chuyển cho người.
   - *Dữ liệu tài chính có an toàn không?* → cảnh 5: chip "Stored in Vietnam · audit log", ghi là dự kiến.
   - *Sao không dùng TMS/ERP?* → câu khác biệt ở mục 1.
5. **Nghị định 254/2026:** mới có bản tóm tắt. Chưa đọc điều khoản phía người mua (nhận, điều chỉnh, thay thế hóa đơn), nên video chỉ nói "new e-invoice rules", không nói nghị định bắt buộc doanh nghiệp phải kiểm tra.
6. **Hai kịch bản demo song song:** [colio_ai_pitch_research_vi.md](colio_ai_pitch_research_vi.md) giữ kịch bản **demo trực tiếp** (bấm trên web khi thuyết trình), còn tệp này là kịch bản **video dựng sẵn**. Giữ cả hai, nhưng dùng chung số liệu: +800.000 ₫ (~US$31), RATE-V3 dòng 12, 3 phút.
7. **Hạn nộp:** brief ghi chốt deck, video và hồ sơ ngày **13/11**. Video cần dựng xong trước 12/11 để còn thời gian tập.

## Nguồn số liệu

- [VIR — Vietnam logistics costs account for 16 per cent of GDP](https://vir.com.vn/vietnam-logistics-costs-account-for-16-per-cent-of-gdp-159581.html)
- [Báo cáo Logistics Việt Nam 2025 (tóm tắt, Proship)](https://proship.vn/news/bao-cao-logistics-viet-nam-2025/)
- [VIR — 2025, a breakthrough year for Vietnam's logistics industry](https://vir.com.vn/2025-a-breakthrough-year-for-vietnams-logistics-industry-121405-121405.html)
- [Cục Thống kê — tình hình kinh tế xã hội 10 tháng năm 2026](https://www.nso.gov.vn/bai-top/2026/11/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-thang-10-va-10-thang-nam-2026/)
- [Transportation Insight — tỷ lệ lỗi 3–6%](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/)
- Số hóa đơn điện tử và Nghị định 254/2026: [phân tích cạnh tranh](nghien_cuu_tung_slide/phan_tich_canh_tranh.md), mục nguồn [8] và [19].
- Kịch bản chi phí (1.000 hóa đơn, 15 → 9 phút, 60.000 ₫/giờ, 3 triệu ₫/tháng): [brief dự án](colio_ai_project_brief.md), mục 4.
- Các số liệu khác đã rà trong [colio_ai_business_problems.md](nghien_cuu_tung_slide/colio_ai_business_problems.md).

**Cần kiểm tra trước khi lên slide:** con số 16–17% và Quyết định 2229/QĐ-TTg mới được đọc qua kết quả tìm kiếm, chưa mở văn bản gốc. Mở [PDF Báo cáo Logistics Việt Nam 2025](https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf) để lấy đúng số trang cần trích.
