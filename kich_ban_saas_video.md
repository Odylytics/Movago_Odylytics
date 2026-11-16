# Movago · Kịch bản video giới thiệu dự án (2 phút)

Bản này dành cho người dựng video. Xem xong, một người chưa biết gì về logistics phải trả lời được: forwarder là ai, họ mất tiền ở đâu, Movago nằm ở bước nào và nó chứng minh khoản chi đúng bằng cách nào. Video đi từ bối cảnh, sang forwarder, sang vấn đề, rồi tới Movago và kết quả, xoay quanh ca giả lập hóa đơn INV-095. Chỉ có voice-over, không quay người thật. [kich_ban_demo.md](kich_ban_demo.md) là tài liệu nguồn cho bản pitch dài. [Brochure](noi_dung_brochure_EN.md) và [script 10 phút](kich_ban_thuyet_trinh_10_phut_EN.md) dùng cùng bộ số liệu.

## Quy tắc chung

Video dài 1:55 đến 2:05, lời thoại khoảng 300 từ ở tốc độ 155 từ/phút. Nếu bản thu vượt 2:05, cắt lần lượt:

1. Vế "and if the old file comes back under a new name, Movago blocks it" ở shot 8.
2. Vế "and up to five percent of freight spend can be recovered" ở shot 4.
3. Câu về container 20 và 40 feet ở shot 3.

Phân bổ thời gian:

- 0:00 đến 0:10: chi phí logistics cao, thương mại tăng nhanh.
- 0:10 đến 0:24: forwarder làm gì, thu một bên và trả nhiều bên.
- 0:24 đến 0:52: ba nguồn ở ba nơi, cùng phí khác tên và khác giá, mức lỗi.
- 0:52 đến 1:40: Movago bắt lỗi, nêu căn cứ và chuyển cho người xử lý.
- 1:40 đến 2:00: kết quả minh họa và end card.

Shot 5 nói Movago là sản phẩm mới cho bước kiểm tra mà forwarder vẫn làm trước mỗi lần trả cước. Video không nói Movago tạo ra quy trình mới.

Số liệu thị trường phải có nguồn trên màn hình, chữ nhỏ ở góc dưới, giữ suốt shot. Chỉ dùng các số trong bảng nguồn ở cuối file.

Demo đang mô phỏng việc đọc PDF bằng AI và việc nhận chứng từ từ email hay Zalo, nên không nói hai việc này như đã chạy. Shot nào có PDF trên hình phải có nhãn góc `Prototype simulation · planned document AI`.

Phần đã dựng thật gồm: lập bảng giá từ báo giá; ghép lô và chọn giá theo tuyến, container, đơn vị, ngày; đối chiếu từng dòng và hiện căn cứ hai phía; chặn hóa đơn gửi lại bằng dấu vân tay SHA-256; gửi xác minh và xuất CSV.

Số tiền lấy đúng dữ liệu demo:

- INV-095 có Ocean freight 8.000.000 ₫ và DOC 1.300.000 ₫, tổng 9.300.000 ₫.
- RATE-V3 dòng 12 là DOC 20' giá 500.000 ₫.
- Chênh lệch +800.000 ₫ (khoảng US$31).
- Hóa đơn sửa INV-095-A là 8.500.000 ₫.

Hình ảnh theo [DEMO_DESIGN_RULES.md](DEMO_DESIGN_RULES.md): nền Ice Blue, chữ Deep Navy, tương tác Electric Blue. Transit Lime chỉ dùng cho CTA, bước Pay trên dải quy trình và lúc chuyển trạng thái. Trạng thái luôn có nhãn chữ (Matched, Discrepancy, Missing basis), không chỉ báo bằng màu.

Nhạc chậm và hơi căng ở shot 1 đến 4, sáng lên khi logo Movago hiện ở shot 5, hạ xuống khi dòng DOC lật sang Discrepancy ở shot 7, rồi tăng lại từ shot 9.

## Bối cảnh

### Shot 1 · Chi phí logistics và thương mại (0:00 đến 0:10)

**Hình:**
1. Số `16%` đếm lên giữa khung, thanh ngang có đoạn mục tiêu `12–15%` màu Lime.
2. Thu nhỏ sang trái. Số `US$1,010 bn` đếm lên bên phải, kèm chip `+32.3%`.

**On-screen:**
```
Logistics costs ≈ 16% of Vietnam's GDP · target 12–15% by 2035
US$1,010 bn goods trade · first 10 months of 2026 · +32.3%
```
**Nguồn:** `VIR 2026 · Decision 2229/QĐ-TTg · National Statistics Office`

**VO:** "Logistics costs Vietnam about sixteen percent of its GDP. In the first ten months of 2026, trade passed a trillion dollars."

## Forwarder

### Shot 2 · Forwarder là ai (0:10 đến 0:24)

**Hình:**
1. Một khối ở giữa ghi `Freight forwarder`.
2. Bên trái, một thẻ `Customer` nối vào, mũi tên tiền chạy vào forwarder.
3. Bên phải, nhiều thẻ bung ra, mỗi thẻ có mũi tên tiền chạy ra: `Shipping line` · `Trucker` · `Port` · `Overseas agent`.
4. Dải 5 bước trượt vào dưới đáy: `Sell · Book · Move · Document · Pay`. Bước Pay sáng màu Lime.

**On-screen:** `Collects from one customer. Pays many suppliers.`

**VO:** "Between the shipper and the carriers sits the freight forwarder. It books the ship, the truck and the port, collects from one customer, and pays many suppliers for every shipment."

## Vấn đề

### Shot 3 · Một khoản phí, ba nơi phải kiểm (0:24 đến 0:40)

**Hình:**
1. Zoom vào bước Pay. Màn hình kế toán mở ba khung cạnh nhau, con trỏ nhảy qua lại: `Invoice` (PDF trong email), `Shipment file` (Excel), `Approved rate` (bảng giá, nhãn `v1 · v2 · v3`).
2. Hai dòng hóa đơn chồng lên nhau, `Documentation fee` và `Phí chứng từ`, với dấu `=` ở giữa.
3. Hai thẻ giá: `DHC · 20' · $127` và `DHC · 40' · $196`.

**Nguồn (bước 3):** `Maersk notice, 31 Mar 2026`

**VO:** "Before any of those bills is paid, an accountant checks each fee line against the invoice, the shipment file and the approved rate, which sit with three different teams. One carrier writes 'Documentation fee', another writes 'Phí chứng từ'. A forty-foot container also pays a higher handling charge than a twenty-foot one."

### Shot 4 · Mức độ của vấn đề (0:40 đến 0:52)

**Hình:**
1. Chữ `3–6%` hiện lớn, nhãn nhỏ `freight invoices with errors · audits abroad`.
2. Dưới đó: `1–5% of freight spend recoverable`.
3. Dòng `Vietnam: not measured` hiện ra với dấu hỏi.
4. Góc phải trượt vào thẻ tin tuyển dụng đã làm mờ: `Freight invoice auditor · Ho Chi Minh City`.

**Nguồn:** `Transportation Insight (US) · Flexport job posting 2026`

**VO:** "Where freight audit is common, three to six percent of freight invoices contain errors, and up to five percent of freight spend can be recovered. Vietnam has no figure yet. In Ho Chi Minh City, one global forwarder is hiring someone just to do this check."

## Movago

### Shot 5 · Giới thiệu Movago (0:52 đến 1:02)

**Hình:**
1. Một hóa đơn được kéo ra khỏi chồng, tổng `9,300,000 ₫` hiện dấu ✓ "Total adds up".
2. Hóa đơn bay vào giao diện Movago. Dòng DOC lật sang Discrepancy, số `+800,000 ₫` đếm lên.
3. Logo Movago lướt vào. Dải 5 bước hiện lại nhỏ ở đáy, Movago gắn vào bước Pay.

**On-screen:** `Total 9,300,000 ₫ · 800,000 ₫ too high` rồi `Built for the check before every payment`

**VO:** "This invoice adds up, and it is still eight hundred thousand dong too high. Forwarders already run this check before every payment. Movago is a new product for that step."

### Shot 6 · Bảng giá có căn cứ (1:02 đến 1:10)

**Hình:**
1. Báo giá Q-SA-2611 mở ra với 9 dòng giá.
2. Dòng 5 *Phí chứng từ / Documentation fee · 500,000* thu lại thành một token, bay vào RATE-V3 và đáp xuống dòng 12.
3. Pricing bấm **Approve 9/9**, rồi **Publish RATE-V3**.

**On-screen, hiện một lần:** `Q-SA-2611 · line 5 → RATE-V3 · line 12`

**VO:** "Pricing approves the carrier's quotation first, and each price becomes a rate card line that points back to the quote."

### Shot 7 · Bắt lỗi từng dòng (1:10 đến 1:24)

**Hình:**
1. PDF INV-095 bên trái, các trường dữ liệu bên phải, có đường nối giữa hai bên. Nhãn góc bắt buộc: `Prototype simulation · planned document AI`.
2. Chip `SHP-001 · Singapore → Cat Lai · 20' DRY` gắn vào. Vạch quét chạy qua từng dòng:
   - Ocean freight `8,000,000` = `8,000,000`, Matched
   - DOC `1,300,000` so với `500,000`, Discrepancy `+800,000 ₫ (~US$31)`
3. Hai thẻ căn cứ đặt cạnh nhau: `INV-095 · page 1 · DOC` và `RATE-V3 · line 12`.

**VO:** "When an invoice arrives, Movago finds the shipment, picks the price for that route, container and date, and checks each line. Here the documentation fee is one point three million against five hundred thousand approved, with both sources on one screen."

### Shot 8 · Xử lý và duyệt chi (1:24 đến 1:34)

**Hình:**
1. Kế toán AP bấm **Request verification**. Dòng DOC kèm căn cứ trượt sang Pricing, trạng thái `Waiting for Pricing`.
2. Hóa đơn sửa INV-095-A `8,500,000 ₫` đến, mọi dòng chuyển sang Matched.
3. Kế toán trưởng đóng dấu **Approved for payment · 8,500,000 ₫** màu Lime.
4. Một bản INV-095 đổi tên file thả vào, bị chặn với nhãn `Already received`.

**On-screen:** `+800,000 ₫ not paid`

**VO:** "One click sends the line to pricing. The supplier corrects the invoice, the chief accountant approves the right amount, and if the old file comes back under a new name, Movago blocks it."

### Shot 9 · Movago nằm ở đâu (1:34 đến 1:40)

**Hình:**
1. Ba khối ngang: `Operations · TMS / Excel`, `Movago`, `Accounting · payment`. Khối Movago ở giữa sáng hơn.
2. Hai mũi tên đầu vào: `rate card` từ Pricing, `invoices` từ nhà cung cấp.

**On-screen:** `Works next to your TMS and accounting software`

**VO:** "Operations runs the shipment, accounting sends the payment, and Movago shows them whether the amount is right."

## Kết quả

### Shot 10 · Kết quả minh họa (1:40 đến 1:52)

**Hình:** Ba dòng chữ lớn hiện lần lượt trên nền Ice Blue. Dòng chú thích cố định ở dưới, đủ lớn để đọc.

```
1,000 invoices a month · 15 → 9 min each
100 team hours back every month
Illustrative scenario · the pilot will measure the real result
```

**VO:** "For a forwarder handling a thousand invoices a month, our illustrative scenario frees a hundred hours of work. The pilot will measure the real number."

### Shot 11 · End card (1:52 đến 2:00)

**Hình:** Logo Movago, slogan, nút CTA màu Lime với chữ Deep Navy và đường link demo. Tên đội ghi nhỏ ở dưới.

```
Movago
Move smarter. Go safer.
[ Try the prototype ]  movago-odylytics.vercel.app
Odylytics · KTC Ideathon 2026
```

**VO:** "Movago. Move smarter. Go safer."

## Lời thoại liền mạch (dùng để thu âm)

> Logistics costs Vietnam about sixteen percent of its GDP. In the first ten months of 2026, trade passed a trillion dollars.
>
> Between the shipper and the carriers sits the freight forwarder. It books the ship, the truck and the port, collects from one customer, and pays many suppliers for every shipment.
>
> Before any of those bills is paid, an accountant checks each fee line against the invoice, the shipment file and the approved rate, which sit with three different teams. One carrier writes "Documentation fee", another writes "Phí chứng từ". A forty-foot container also pays a higher handling charge than a twenty-foot one.
>
> Where freight audit is common, three to six percent of freight invoices contain errors, and up to five percent of freight spend can be recovered. Vietnam has no figure yet. In Ho Chi Minh City, one global forwarder is hiring someone just to do this check.
>
> This invoice adds up, and it is still eight hundred thousand dong too high. Forwarders already run this check before every payment. Movago is a new product for that step.
>
> Pricing approves the carrier's quotation first, and each price becomes a rate card line that points back to the quote.
>
> When an invoice arrives, Movago finds the shipment, picks the price for that route, container and date, and checks each line. Here the documentation fee is one point three million against five hundred thousand approved, with both sources on one screen.
>
> One click sends the line to pricing. The supplier corrects the invoice, the chief accountant approves the right amount, and if the old file comes back under a new name, Movago blocks it.
>
> Operations runs the shipment, accounting sends the payment, and Movago shows them whether the amount is right.
>
> For a forwarder handling a thousand invoices a month, our illustrative scenario frees a hundred hours of work. The pilot will measure the real number.
>
> Movago. Move smarter. Go safer.

## Nguồn số liệu

| Số trên video | Nguồn | Ghi chú |
| --- | --- | --- |
| Chi phí logistics khoảng 16% GDP | [VIR](https://vir.com.vn/vietnam-logistics-costs-account-for-16-per-cent-of-gdp-159581.html) | Đây là chi phí logistics so với GDP, không phải tỷ trọng của ngành trong GDP. |
| Mục tiêu 12–15% GDP đến 2035 | [Quyết định 2229/QĐ-TTg](https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/10/2229-ttg.signed.pdf) | Văn bản gốc. |
| US$1.010,55 tỷ, +32,3%, 10 tháng 2026 | [Cục Thống kê](https://www.nso.gov.vn/tin-tuc-thong-ke/2026/11/tong-kim-ngach-xuat-nhap-khau-vuot-moc-1-000-ty-usd-dau-moc-lich-su-va-dong-luc-tang-truong-moi/) | Chỉ nói đúng kỳ so sánh này. |
| DHC $127 (20') và $196 (40') | Thông báo của Maersk ngày 31/03/2026, áp dụng từ 01/05/2026 | Giá gốc 3,25 triệu và 5 triệu đồng. Thêm link thông báo vào bảng này trước khi xuất video. |
| 3–6% hóa đơn cước có lỗi, 1–5% chi cước thu hồi được | [Transportation Insight](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/) | Số đo ở Mỹ. Lời thoại nói "where freight audit is common", trên hình có dòng "Vietnam: not measured". |
| Tin tuyển freight invoice auditor ở TP.HCM | [Flexport, 2026](https://job-boards.greenhouse.io/flexport/jobs/7660304) | Lời thoại nói "one global forwarder", không nêu tên Flexport. Làm mờ logo nếu chưa xin phép. |
| 1.000 hóa đơn, 15 xuống 9 phút, 100 giờ | Kịch bản minh họa trong [brief](colio_ai_project_brief.md) | Luôn có nhãn `Illustrative scenario` trên hình. |

## Những gì không đưa vào video

| Nội dung | Lý do | Chuyển sang |
| --- | --- | --- |
| Danh sách đối tác của forwarder (hải quan, bảo hiểm, ngân hàng, kho bãi) | Không giúp hiểu Movago và làm loãng shot 2 | Script 10 phút, phần hỏi đáp |
| Quy mô thị trường (TAM, SAM, SOM), giá thuê bao, điểm hòa vốn | Người xem không đọc kịp | Slide Market size và Feasibility |
| So sánh đối thủ | Cần bảng, không hợp video ngắn | Slide Competitive advantage |
| Tech stack chi tiết | Quá nhiều cho video ngắn | Slide kiến trúc trong deck |
| Nhận chứng từ từ email, Zalo, ảnh chụp | Demo chưa có tính năng này | Lộ trình pilot trong deck |
| 8,5 tỷ hóa đơn điện tử | Mạch kể này không cần | Slide Why now |

## Checklist trước khi xuất video

- [ ] Shot 1, 3 và 4 có dòng nguồn ở góc dưới suốt shot.
- [ ] Shot 1 ghi "logistics costs", không ghi "logistics is 16% of GDP".
- [ ] Shot 2 cho thấy tiền vào từ một khách hàng và ra cho nhiều nhà cung cấp.
- [ ] Shot 4 giữ vế "where freight audit is common" trong lời thoại và dòng "Vietnam: not measured" trên hình.
- [ ] Shot 5 có câu "Movago is a new product for that step".
- [ ] Shot 7 có nhãn `Prototype simulation · planned document AI` khi PDF còn trên hình.
- [ ] Shot 10 có dòng `Illustrative scenario` cùng lúc với các con số.
- [ ] Không câu thoại hay dòng chữ nào nói Movago đã đọc hoặc đã kéo về chứng từ từ email hay Zalo.
- [ ] Mọi số tiền khớp dữ liệu demo: 8.000.000 · 1.300.000 · 500.000 · 9.300.000 · +800.000 · 8.500.000.
- [ ] Có phụ đề tiếng Anh, vì nhiều người xem tắt tiếng.
