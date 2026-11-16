# Movago · Kịch bản video giới thiệu dự án (2 phút)

Bản này dành cho người dựng video. Video đi theo một lô hàng, cùng mạch với [script 10 phút](kich_ban_thuyet_trinh_10_phut_EN.md):

1. Chủ hàng thuê forwarder.
2. Forwarder lo hãng tàu, xe kéo, hải quan, cảng và đại lý nước ngoài.
3. Các bên đó gửi hóa đơn về cho forwarder.
4. Movago kiểm hóa đơn trước khi forwarder trả tiền.

Phần sau của video xoay quanh ca giả lập hóa đơn INV-095. Chỉ có voice-over, không quay người thật. [kich_ban_demo.md](kich_ban_demo.md) là tài liệu nguồn cho bản pitch dài. [Brochure](noi_dung_brochure_EN.md) dùng cùng bộ số liệu.

## Quy tắc chung

Video dài 1:55 đến 2:05, lời thoại khoảng 310 từ ở tốc độ 155 từ/phút. Nếu bản thu vượt 2:05, cắt lần lượt:

1. Vế "and if the old file comes back under a new name, Movago blocks it" ở shot 8.
2. Vế "and in Ho Chi Minh City one global forwarder is hiring someone just to do this check" ở shot 4.
3. Câu "Booking, trucking and customs stay in the tools forwarders already use." ở shot 5.

Phân bổ thời gian:

- 0:00 đến 0:08: chi phí logistics cao, thương mại tăng nhanh.
- 0:08 đến 0:22: lô hàng đi thế nào, từ chủ hàng qua forwarder tới các nhà cung cấp.
- 0:22 đến 0:40: tiền và hóa đơn đi chiều ngược lại, kế toán phải kiểm ba chứng từ.
- 0:40 đến 0:50: mức độ của vấn đề.
- 0:50 đến 1:36: Movago nằm ở bước trả tiền, bắt lỗi, nêu căn cứ và chuyển cho người xử lý.
- 1:36 đến 2:00: kết quả minh họa và end card.

Sơ đồ mũi tên ở shot 2 là hình gốc của cả video. Shot 3 dùng lại sơ đồ đó với mũi tên tiền chạy ngược, và shot 5 thu nhỏ nó thành một dòng để chỉ ra bước Movago tham gia. Người xem thấy cùng một bức tranh ba lần.

Số liệu thị trường phải có nguồn trên màn hình, chữ nhỏ ở góc dưới, giữ suốt shot. Chỉ dùng các số trong bảng nguồn ở cuối file.

Demo đang mô phỏng việc đọc PDF bằng AI và việc nhận chứng từ từ email hay Zalo, nên không nói hai việc này như đã chạy. Shot nào có PDF trên hình phải có nhãn góc `Prototype simulation · planned document AI`.

Phần đã dựng thật gồm: lập bảng giá từ báo giá; ghép lô và chọn giá theo tuyến, container, đơn vị, ngày; đối chiếu từng dòng và hiện căn cứ hai phía; chặn hóa đơn gửi lại bằng dấu vân tay SHA-256; gửi xác minh và xuất CSV.

Số tiền lấy đúng dữ liệu demo:

- INV-095 có Ocean freight 8.000.000 ₫ và DOC 1.300.000 ₫, tổng 9.300.000 ₫.
- RATE-V3 dòng 12 là DOC 20' giá 500.000 ₫.
- Chênh lệch +800.000 ₫ (khoảng US$31).
- Hóa đơn sửa INV-095-A là 8.500.000 ₫.

Hình ảnh theo [DEMO_DESIGN_RULES.md](DEMO_DESIGN_RULES.md): nền Ice Blue, chữ Deep Navy, tương tác Electric Blue. Transit Lime chỉ dùng cho CTA, bước trả tiền trên sơ đồ và lúc chuyển trạng thái. Trạng thái luôn có nhãn chữ (Matched, Discrepancy, Missing basis), không chỉ báo bằng màu.

Nhạc chậm và hơi căng ở shot 1 đến 4, sáng lên khi logo Movago hiện ở shot 5, hạ xuống khi dòng DOC lật sang Discrepancy ở shot 7, rồi tăng lại từ shot 9.

## Bối cảnh

### Shot 1 · Chi phí logistics và thương mại (0:00 đến 0:08)

**Hình:**
1. Số `16%` đếm lên giữa khung, thanh ngang có đoạn mục tiêu `12–15%` màu Lime.
2. Thu nhỏ sang trái. Số `US$1,010 bn` đếm lên bên phải, vượt qua vạch `1,000` có nhãn `first time`, kèm chip `+32.3%`. Dòng nhỏ bên dưới: `Exports US$499.24 bn · a record`.

**On-screen:**
```
Logistics costs ≈ 16% of Vietnam's GDP · target 12–15% by 2035
US$1,010 bn goods trade · first time above US$1,000 bn · first 10 months of 2026 · +32.3%
Exports US$499.24 bn · a record
```
**Nguồn:** `VIR 2026 · Decision 2229/QĐ-TTg · National Statistics Office`

**VO:** "Logistics costs Vietnam about sixteen percent of its GDP. In the first ten months of 2026, Vietnam's goods trade passed a trillion dollars for the first time."

## Lô hàng và dòng tiền

### Shot 2 · Lô hàng đi thế nào (0:08 đến 0:22)

**Hình:** Sơ đồ chạy từ trái sang phải. Mỗi khối và mũi tên hiện ra đúng lúc lời thoại nhắc tới. Một container nhỏ trượt dọc theo các mũi tên.

```
Shipper ──► Forwarder ──► Shipping line ──► Trucker ──► Customs ──► Port ──► Overseas agent ──► Buyer
"move my     quotes,       space on          container    export       loads the   receives and
 goods"      organises     the vessel        to the port  declaration  vessel      delivers
```

**On-screen:** `One shipment · many suppliers · one forwarder organising them`

**VO:** "A Vietnamese company that needs to ship goods abroad usually calls a freight forwarder. The forwarder books the shipping line, the truck, customs and the port, and an agent overseas delivers to the buyer."

### Shot 3 · Tiền và hóa đơn đi chiều ngược lại (0:22 đến 0:40)

**Hình:**
1. Giữ sơ đồ shot 2. Một mũi tên tiền màu Lime chạy từ `Shipper` vào `Forwarder`.
2. Từ forwarder, các mũi tên tiền chạy ra `Shipping line · Trucker · Port · Overseas agent`. Cùng lúc, từ mỗi khối đó một thẻ hóa đơn bay ngược về forwarder.

```
Shipper ──pays──► Forwarder ──pays──► Shipping line · Trucker · Port · Overseas agent
                       ▲                                   │
                       └────── invoices and debit notes ───┘
```

3. Zoom vào forwarder. Màn hình kế toán mở ba khung cạnh nhau, con trỏ nhảy qua lại: `Invoice` (PDF trong email), `Shipment file` (Excel), `Approved rate` (bảng giá, nhãn `v1 · v2 · v3`).
4. Hai dòng hóa đơn `Documentation fee` và `Phí chứng từ` chồng lên nhau với dấu `=`. Hai thẻ giá `DHC · 20' · $127` và `DHC · 40' · $196`.

**Nguồn (bước 4):** `Maersk, 31 Mar 2026`

**VO:** "The money runs the other way: the shipper pays the forwarder, and the forwarder pays each supplier, who sends its own invoice. Before paying, an accountant checks every fee line against the shipment file and the approved rate, held by two other teams. Carriers name the same fee differently, and the right price changes with the container."

### Shot 4 · Mức độ của vấn đề (0:40 đến 0:50)

**Hình:**
1. Chữ `3–6%` hiện lớn, nhãn nhỏ `freight invoices with errors · audits abroad`.
2. Dưới đó: `1–5% of freight spend recoverable`.
3. Dòng `Vietnam: not measured` hiện ra với dấu hỏi.
4. Góc phải trượt vào thẻ tin tuyển dụng đã làm mờ: `Freight invoice auditor · Ho Chi Minh City`.

**Nguồn:** `Transportation Insight (US) · Flexport job posting 2026`

**VO:** "Where freight audit is common, three to six percent of freight invoices contain errors. Vietnam has no figure yet, and in Ho Chi Minh City one global forwarder is hiring someone just to do this check."

## Movago

### Shot 5 · Movago nằm ở bước nào (0:50 đến 1:02)

**Hình:**
1. Một hóa đơn được kéo ra khỏi chồng, tổng `9,300,000 ₫` hiện dấu ✓ "Total adds up". Dòng DOC lật sang Discrepancy, số `+800,000 ₫` đếm lên.
2. Sơ đồ shot 2 thu nhỏ thành một dòng ở đáy khung. Bước cuối sáng màu Lime, logo Movago gắn vào, ba mũi tên đầu vào chạy vào:

```
Quote ──► Book ──► Move ──► Document ──► Pay suppliers
                                               ▲
                     rate card from pricing ───┤
                     shipment file from ops ───┤
                     invoice from supplier ────┘
                                            MOVAGO
```

**On-screen:** `Total 9,300,000 ₫ · 800,000 ₫ too high` rồi `Movago checks the bill before the forwarder pays`

**VO:** "This invoice adds up, and it is still eight hundred thousand dong too high. Movago works at this one step, just before the forwarder pays a supplier. Booking, trucking and customs stay in the tools forwarders already use."

### Shot 6 · Bảng giá có căn cứ (1:02 đến 1:08)

**Hình:**
1. Báo giá Q-SA-2611 mở ra với 9 dòng giá.
2. Dòng 5 *Phí chứng từ / Documentation fee · 500,000* thu lại thành một token, bay vào RATE-V3 và đáp xuống dòng 12.
3. Pricing bấm **Approve 9/9**, rồi **Publish RATE-V3**.

**On-screen, hiện một lần:** `Q-SA-2611 · line 5 → RATE-V3 · line 12`

**VO:** "Pricing approves the carrier's quotation first, and each price becomes a rate card line that points back to the quote."

### Shot 7 · Bắt lỗi từng dòng (1:08 đến 1:22)

**Hình:**
1. PDF INV-095 bên trái, các trường dữ liệu bên phải, có đường nối giữa hai bên. Nhãn góc bắt buộc: `Prototype simulation · planned document AI`.
2. Chip `SHP-001 · Singapore → Cat Lai · 20' DRY` gắn vào. Vạch quét chạy qua từng dòng:
   - Ocean freight `8,000,000` = `8,000,000`, Matched
   - DOC `1,300,000` so với `500,000`, Discrepancy `+800,000 ₫ (~US$31)`
3. Hai thẻ căn cứ đặt cạnh nhau: `INV-095 · page 1 · DOC` và `RATE-V3 · line 12`.

**VO:** "When an invoice arrives, Movago finds the shipment, picks the price for that route, container and date, and checks each line. Here the documentation fee is one point three million against five hundred thousand approved, with both sources on one screen."

### Shot 8 · Xử lý và duyệt chi (1:22 đến 1:36)

**Hình:**
1. Kế toán AP bấm **Request verification**. Dòng DOC kèm căn cứ trượt sang Pricing, trạng thái `Waiting for Pricing`.
2. Hóa đơn sửa INV-095-A `8,500,000 ₫` đến, mọi dòng chuyển sang Matched.
3. Kế toán trưởng đóng dấu **Approved for payment · 8,500,000 ₫** màu Lime.
4. Một bản INV-095 đổi tên file thả vào, bị chặn với nhãn `Already received`.

**On-screen:** `+800,000 ₫ not paid`

**VO:** "One click sends the line to pricing. The supplier corrects the invoice, the chief accountant approves the right amount, and if the old file comes back under a new name, Movago blocks it."

## Kết quả

### Shot 9 · Kết quả minh họa (1:36 đến 1:50)

**Hình:** Ba dòng chữ lớn hiện lần lượt trên nền Ice Blue. Dòng chú thích cố định ở dưới, đủ lớn để đọc.

```
1,000 invoices a month · 15 → 9 min each
100 team hours back every month
Illustrative scenario · the pilot will measure the real result
```

**VO:** "For a forwarder handling a thousand invoices a month, our illustrative scenario frees a hundred hours of work. The pilot will measure the real number."

### Shot 10 · End card (1:50 đến 2:00)

**Hình:** Logo Movago, slogan, nút CTA màu Lime với chữ Deep Navy và đường link demo. Tên đội ghi nhỏ ở dưới.

```
Movago
Move smarter. Go safer.
[ Try the prototype ]  movago-odylytics.vercel.app
Odylytics · KTC Ideathon 2026
```

**VO:** "Movago. Move smarter. Go safer."

## Lời thoại liền mạch (dùng để thu âm)

> Logistics costs Vietnam about sixteen percent of its GDP. In the first ten months of 2026, Vietnam's goods trade passed a trillion dollars for the first time.
>
> A Vietnamese company that needs to ship goods abroad usually calls a freight forwarder. The forwarder books the shipping line, the truck, customs and the port, and an agent overseas delivers to the buyer.
>
> The money runs the other way: the shipper pays the forwarder, and the forwarder pays each supplier, who sends its own invoice. Before paying, an accountant checks every fee line against the shipment file and the approved rate, held by two other teams. Carriers name the same fee differently, and the right price changes with the container.
>
> Where freight audit is common, three to six percent of freight invoices contain errors. Vietnam has no figure yet, and in Ho Chi Minh City one global forwarder is hiring someone just to do this check.
>
> This invoice adds up, and it is still eight hundred thousand dong too high. Movago works at this one step, just before the forwarder pays a supplier. Booking, trucking and customs stay in the tools forwarders already use.
>
> Pricing approves the carrier's quotation first, and each price becomes a rate card line that points back to the quote.
>
> When an invoice arrives, Movago finds the shipment, picks the price for that route, container and date, and checks each line. Here the documentation fee is one point three million against five hundred thousand approved, with both sources on one screen.
>
> One click sends the line to pricing. The supplier corrects the invoice, the chief accountant approves the right amount, and if the old file comes back under a new name, Movago blocks it.
>
> For a forwarder handling a thousand invoices a month, our illustrative scenario frees a hundred hours of work. The pilot will measure the real number.
>
> Movago. Move smarter. Go safer.

## Nguồn số liệu

| Số trên video | Nguồn | Ghi chú |
| --- | --- | --- |
| Chi phí logistics khoảng 16% GDP | [VIR](https://vir.com.vn/vietnam-logistics-costs-account-for-16-per-cent-of-gdp-159581.html) | Đây là chi phí logistics so với GDP, không phải tỷ trọng của ngành trong GDP. |
| Mục tiêu 12–15% GDP đến 2035 | [Quyết định 2229/QĐ-TTg](https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/10/2229-ttg.signed.pdf) | Văn bản gốc. |
| US$1.010,55 tỷ, +32,3%, 10 tháng 2026 | [Cục Thống kê](https://www.nso.gov.vn/tin-tuc-thong-ke/2026/11/tong-kim-ngach-xuat-nhap-khau-vuot-moc-1-000-ty-usd-dau-moc-lich-su-va-dong-luc-tang-truong-moi/) | Lần đầu tổng kim ngạch vượt 1.000 tỷ USD; xuất khẩu đạt kỷ lục 499,24 tỷ USD. Chỉ nói đúng kỳ 10 tháng này. Đối chiếu số 499,24 với bài gốc trước khi xuất video. |
| DHC $127 (20') và $196 (40') | [Maersk, 31/03/2026](https://www.maersk.com/news/articles/2026/03/31/terminal-handling-charges-vietnam-ohc-dhc) | Giá gốc 3,25 triệu và 5 triệu đồng, áp dụng từ 01/05/2026. |
| 3–6% hóa đơn cước có lỗi, 1–5% chi cước thu hồi được | [Transportation Insight](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/) | Số đo ở Mỹ. Lời thoại nói "where freight audit is common", trên hình có dòng "Vietnam: not measured". |
| Tin tuyển freight invoice auditor ở TP.HCM | [Flexport, 2026](https://job-boards.greenhouse.io/flexport/jobs/7660304) | Lời thoại nói "one global forwarder", không nêu tên Flexport. Làm mờ logo nếu chưa xin phép. |
| 1.000 hóa đơn, 15 xuống 9 phút, 100 giờ | Kịch bản minh họa trong [brief](colio_ai_project_brief.md) | Luôn có nhãn `Illustrative scenario` trên hình. |

## Những gì không đưa vào video

| Nội dung | Lý do | Chuyển sang |
| --- | --- | --- |
| Bảo hiểm, ngân hàng, kho bãi trong sơ đồ lô hàng | Làm sơ đồ shot 2 quá dày | Script 10 phút, phần hỏi đáp |
| Quy mô thị trường (TAM, SAM, SOM), giá thuê bao, điểm hòa vốn | Người xem không đọc kịp | Slide Market size và Feasibility |
| So sánh đối thủ | Cần bảng, không hợp video ngắn | Slide Competitive advantage |
| Tech stack chi tiết | Quá nhiều cho video ngắn | Slide kiến trúc trong deck |
| Nhận chứng từ từ email, Zalo, ảnh chụp | Demo chưa có tính năng này | Lộ trình pilot trong deck |
| 8,5 tỷ hóa đơn điện tử | Mạch kể này không cần | Slide Why now |

## Checklist trước khi xuất video

- [ ] Shot 1, 3 và 4 có dòng nguồn ở góc dưới suốt shot.
- [ ] Shot 1 ghi "logistics costs", không ghi "logistics is 16% of GDP".
- [ ] Shot 2 xếp các bước đúng thứ tự container di chuyển: hãng tàu, xe kéo, hải quan, cảng, đại lý nước ngoài.
- [ ] Shot 3 dùng lại đúng sơ đồ shot 2, chỉ thêm mũi tên tiền và hóa đơn.
- [ ] Shot 4 giữ vế "where freight audit is common" trong lời thoại và dòng "Vietnam: not measured" trên hình.
- [ ] Shot 5 thu sơ đồ thành một dòng và chỉ rõ Movago ở bước "Pay suppliers".
- [ ] Shot 7 có nhãn `Prototype simulation · planned document AI` khi PDF còn trên hình.
- [ ] Shot 9 có dòng `Illustrative scenario` cùng lúc với các con số.
- [ ] Không câu thoại hay dòng chữ nào nói Movago đã đọc hoặc đã kéo về chứng từ từ email hay Zalo.
- [ ] Mọi số tiền khớp dữ liệu demo: 8.000.000 · 1.300.000 · 500.000 · 9.300.000 · +800.000 · 8.500.000.
- [ ] Có phụ đề tiếng Anh, vì nhiều người xem tắt tiếng.
