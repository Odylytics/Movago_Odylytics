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

### Cảnh 2 · Một thỏa thuận nhân thành rất nhiều (0:12–0:27)

**Hình:** Tờ báo giá tự nhân bản thành lưới hàng chục tờ: hãng khác nhau, tuyến khác nhau (Singapore, Manila, Busan → Cát Lái), container 20' và 40', ngày hiệu lực khác nhau. Mỗi thẻ sau đó tách ra thêm nhiều lô hàng.

**Animation:** Bộ đếm chạy lên: `Rate agreements · Shipments · Fee lines`. Ghi nhỏ ở góc: `Illustrative`.

**On-screen:** `Different routes. Different container sizes. Different dates. Same fee name, different price.`

**Narration:** "Now multiply that by every carrier, route, container size and validity date. The same fee can have a different price on every shipment."

### Cảnh 3 · Bối cảnh Việt Nam (0:27–0:47)

**Hình:** Bản đồ Việt Nam, cảng Cát Lái nhấp nháy. 3 thẻ số lần lượt hiện lên.

**Animation:** Số đếm từ 0 lên; thanh "12–15%" kéo về sau thanh "16–17%".

| Thẻ | On-screen |
|---|---|
| 1 | `Logistics costs ≈ 16–17% of Vietnam's GDP` · *Vietnam Logistics Report 2025* |
| 2 | `Target: 12–15% by 2035` · *Decision 2229/QĐ-TTg* |
| 3 | `US$1,010 bn in goods traded, first 10 months of 2026 (+32.3%)` · *National Statistics Office* |

**Narration:** "In Vietnam, logistics costs are about 16 to 17 percent of GDP, and the government wants them down to 12 to 15. Trade is growing over thirty percent a year. Every overpaid fee is part of that cost."

### Cảnh 4 · Kế toán quá tải (0:47–1:05)

**Hình:** Bàn làm việc của **Hà (AP accountant)**. Hóa đơn đổ về từ email, Zalo, bản giấy; Excel mở 5 tab; đồng hồ chạy nhanh; đèn văn phòng tối dần.

**Animation:** Bộ đếm hộp thư tăng liên tục; các thẻ hóa đơn chồng lên che mặt bàn. Một hóa đơn hiện **"Total ✓"** màu xanh, rồi rung nhẹ.

**On-screen:** `Freight audits typically find errors on 3–6% of invoices.` · *Transportation Insight (US)* · `In Vietnam, nobody has measured it yet.`

**Narration:** "Hà checks each invoice by hand against emails and spreadsheets. Audits abroad find errors on three to six percent of freight invoices, and most of those invoices still add up. In Vietnam, no one has published that number. Our pilot will measure it."

### Cảnh 5 · Movago gom mọi dữ liệu về một chỗ (1:05–1:30)

**Hình:** Các nguồn (email, Zalo, ảnh chụp, file xuất TMS) chảy vào một hộp thư Movago. Báo giá Q-SA-2611 được AI đọc thành **9 dòng giá**, 2 dòng hiện "Check". Khoa duyệt 9/9 → **RATE-V3 published**.

**Animation:** Mỗi dòng đọc xong bay sang bảng có cấu trúc. Hai đầu ra hiện cạnh nhau: màn hình **web** (bảng đối chiếu) và một tệp **CSV** trượt ra.

**On-screen:** `One inbox · one approved rate card · review on the web, export to CSV`

**Narration:** "Movago pulls every quotation, shipment file and invoice into one place. It reads the carrier's quotation into an approved rate card, with Khoa checking the two lines it isn't sure about. Nobody retypes prices into Excel."

**Chèn tech stack (1:22–1:30):** 5 chip trượt vào theo đúng thứ tự xử lý. Chip **đã dựng** in đậm, chip **dự kiến** có viền nét đứt.

| Bước | Chip |
|---|---|
| Intake | `Email · Zalo · SHA-256 file fingerprint` |
| Read | `OCR + layout AI (e.g. Azure AI Document Intelligence)` — *planned* |
| Match | `Rules engine: route · container · unit · date` — *built* |
| Review | `Low confidence → a person decides` |
| Export | `CSV / Excel → ERP later` — *built (CSV)* |

**Narration:** "Under the hood: OCR and layout AI to read documents, a rules engine to pick the right price, and a person for anything uncertain."

### Cảnh 6 · Hàng về, hóa đơn đến (1:30–1:42)

**Hình:** Tàu cập Cát Lái, container 20' của **Minh An Uniforms** được giao. Ngay sau đó **Vy (Supplier A)** gửi hóa đơn **INV-095**: PDF qua email, ảnh qua Zalo, Bảo quét bản giấy ở cảng.

**Animation:** 3 tệp bay vào hộp thư, nhập lại thành một thẻ: `3 copies → 1 invoice`.

**On-screen:** `Cargo delivered. The invoice arrives three times.`

**Narration:** "The cargo is delivered. The invoice arrives three ways. Movago groups them into one, so it's checked once."

### Cảnh 7 · AI đọc hóa đơn (1:42–1:55)

**Hình:** PDF INV-095 bên trái, các trường trích xuất bên phải.

**Animation:** Kẻ đường nối từ mỗi dòng trên PDF sang trường tương ứng. Phóng to ghi chú **"AI mapped 'Documentation fee' → DOC · confirm"**. Ghi chú này phải nằm ở vùng không bị khung kể chuyện che.

**On-screen:** `AI reads every line, and shows where it found it.`

**Narration:** "AI reads each fee line and where it sits on the page, and asks Hà to confirm what it isn't sure about."

### Cảnh 8 · Khoảnh khắc bắt lỗi (1:55–2:15), cảnh quan trọng nhất

**Hình:** Bảng đối chiếu từng dòng.

**Animation, chia 2 nhịp:**

1. Tổng 9,300,000 hiện **✓ "Total adds up"** màu xanh, dừng 1 giây.
2. Vạch quét chạy từng dòng: Ocean freight ✓ khớp. Dòng DOC lật sang **Discrepancy**, số **+800,000 ₫** đếm lên, kèm **(~US$30)**.

**On-screen:** `It adds up. It's still wrong.`

**Narration:** "The total adds up, so a simple sum check would pass it. But line by line, the documentation fee is 1.3 million against an approved 500,000. That's 800,000 dong too much."

### Cảnh 9 · Căn cứ (2:15–2:27)

**Hình:** Hai nguồn đặt cạnh nhau: `INV-095 · page 1 · DOC line` và `RATE-V3 · line 5 · DOC 20' · 500,000`.

**Animation:** Mũi tên nối hai dòng; phép tính `1,300,000 − 500,000 = +800,000` hiện từng số.

**On-screen:** `Both sources, side by side. No digging.`

**Narration:** "Hà sees both sources side by side, with the sum. No digging through email."

### Cảnh 10 · Hóa đơn gửi lại (2:27–2:35), có thể cắt nếu thiếu thời gian

**Animation:** Tệp `INV-095-resent.pdf` rơi vào; hai mã vân tay trượt lại khớp nhau; đóng dấu **"Already received"**.

**Narration:** "Same PDF, new file name. Movago knows it has seen it, so it's never paid twice."

### Cảnh 11 · Xác minh và quyết định (2:35–2:50)

**Hình:** Hà gửi dòng DOC cho **Khoa (Pricing)** kèm căn cứ. Khoa trả lời ngay trên màn hình chính: **"No extra approval for SHP-001."** Supplier A phát hành hóa đơn điều chỉnh **8,500,000 ₫**. **Lan Anh (Chief accountant)** đóng dấu **"Approved for payment"**.

**On-screen:** `People approve. Movago brings the evidence.`

**Narration:** "Pricing confirms there's no extra approval. The supplier corrects the invoice, and the chief accountant approves payment, with the evidence attached."

### Cảnh 12 · Chốt (2:50–3:00)

**Hình:** Thẻ tóm tắt trên nền navy, rồi logo và slogan.

**On-screen:**

```
1 invoice · 1 overcharge caught · +800,000 ₫ (~US$30) · evidence attached
Simulated case. Our pilot measures the real numbers.
Movago — Move smarter. Go safer.
[ Try it yourself ]   [ See the business case ]
```

**Narration:** "One invoice, one overcharge, caught before payment. Now imagine that across thousands of invoices a month. That's what our pilot will measure. Movago. Move smarter. Go safer."

---

## Ghi chú cho người dựng

- **Khớp số liệu:** RATE-V3 trong script có **9 dòng**. Phí DOC 20' nằm ở **dòng 5** của báo giá, nhưng demo hiện ghi "12 approved rate rows" và "line 12". Phải sửa hai chỗ này cho khớp.
- **Thời lượng:** tổng khoảng 3:00, khớp với chữ "3-minute" ở intro. Bảng chọn nhân vật đang ghi "under two minutes", cần đổi thành 3 phút.
- **Vai trò cạnh tên:** luôn ghi như *Hà (AP)*, *Khoa (Pricing)*, *Vy (Supplier A)*, *Lan Anh (Chief accountant)* để người nước ngoài theo dõi được.
- **USD:** quy đổi khoảng 26.000 ₫/USD, ghi "~" vì là số gần đúng.
- **Giả lập:** cảnh 2 và 12 phải ghi rõ là giả lập, không phải kết quả pilot, theo đúng [brief Movago](colio_ai_project_brief.md).
- **Lời thoại:** mỗi cảnh một câu chính, khoảng 15–25 chữ. Toàn bài khoảng 430 chữ, đọc vừa 3 phút.
- **Màu và font:** theo [quy tắc thiết kế demo](DEMO_DESIGN_RULES.md). Transit Lime cho tiêu đề chiến dịch, tiến trình và điểm nhấn; không dùng Lime một mình để báo lỗi ở cảnh 8.

## Nguồn số liệu

- [VIR — Vietnam logistics costs account for 16 per cent of GDP](https://vir.com.vn/vietnam-logistics-costs-account-for-16-per-cent-of-gdp-159581.html)
- [Báo cáo Logistics Việt Nam 2025 (tóm tắt, Proship)](https://proship.vn/news/bao-cao-logistics-viet-nam-2025/)
- [VIR — 2025, a breakthrough year for Vietnam's logistics industry](https://vir.com.vn/2025-a-breakthrough-year-for-vietnams-logistics-industry-121405-121405.html)
- [Cục Thống kê — tình hình kinh tế xã hội 10 tháng năm 2026](https://www.nso.gov.vn/bai-top/2026/11/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-thang-10-va-10-thang-nam-2026/)
- [Transportation Insight — tỷ lệ lỗi 3–6%](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/)
- Các số liệu khác đã rà trong [colio_ai_business_problems.md](nghien_cuu_tung_slide/colio_ai_business_problems.md).

**Cần kiểm tra trước khi lên slide:** con số 16–17% và Quyết định 2229/QĐ-TTg mới được đọc qua kết quả tìm kiếm, chưa mở văn bản gốc. Mở [PDF Báo cáo Logistics Việt Nam 2025](https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf) để lấy đúng số trang cần trích.
