# Movago · Kịch bản video giới thiệu dự án (2 phút)

Đây là bản cho người dựng video. Người xem chưa biết gì về logistics vẫn phải hiểu được bốn điều:
1. Forwarder là ai.
2. Họ mất tiền ở đâu.
3. Movago đứng ở bước nào.
4. Movago chứng minh khoản chi đúng ra sao.

Video đi theo mạch **Bối cảnh → Forwarder → Vấn đề → Movago → Kết quả** và xoay quanh một ca giả lập là hóa đơn **INV-095**. Chỉ có voice-over, không quay người thật. [kich_ban_demo.md](kich_ban_demo.md) giữ vai trò tài liệu nguồn cho bản pitch dài. [Brochure](noi_dung_brochure_EN.md) và [script 10 phút](kich_ban_thuyet_trinh_10_phut_EN.md) dùng cùng bộ số liệu.

## Quy tắc chung

- **Độ dài:** 1:55–2:05. Lời thoại khoảng 300 từ, đọc 155 từ/phút. Nếu bản thu vượt 2:05, cắt theo thứ tự này:
  1. Câu "A resent copy under a new name is blocked." ở shot 8.
  2. Vế "and up to five percent of freight spend can be recovered" ở shot 4.
  3. Câu về container 20 và 40 feet ở shot 3.
- **Mạch kể:**
  - Bối cảnh (0:00–0:10): chi phí logistics cao, thương mại tăng nhanh.
  - Forwarder (0:10–0:24): họ làm gì, thu một bên, trả nhiều bên.
  - Vấn đề (0:24–0:52): ba nguồn ở ba nơi, cùng phí khác tên khác giá, mức lỗi.
  - Movago (0:52–1:40): sản phẩm mới cho bước đã có sẵn, bắt lỗi, nêu căn cứ, chuyển xử lý.
  - Kết quả (1:40–2:00): kết quả minh họa và end card.
- **Câu định vị của cả video** nằm ở shot 5: Movago là **sản phẩm mới cho một bước đã có sẵn** trước mỗi lần trả cước. Không nói Movago tạo ra quy trình mới.
- **Số liệu thị trường phải có nguồn trên màn hình,** chữ nhỏ ở góc dưới, giữ suốt shot. Chỉ dùng các số trong bảng nguồn ở cuối file.
- **Không nói tính năng dự kiến như đã chạy.** Demo đang mô phỏng việc đọc PDF bằng AI và việc nhận chứng từ từ email hay Zalo. Shot nào có PDF trên hình phải có nhãn góc `Prototype simulation · planned document AI`.
- **Phần đã dựng thật:**
  - Lập bảng giá từ báo giá.
  - Ghép lô, chọn giá theo tuyến, container, đơn vị và ngày.
  - Đối chiếu từng dòng, hiện căn cứ hai phía.
  - Chặn hóa đơn gửi lại bằng dấu vân tay SHA-256.
  - Gửi xác minh, xuất CSV.
- **Số tiền lấy đúng dữ liệu demo:**
  - INV-095 có Ocean freight 8.000.000 ₫ và DOC 1.300.000 ₫, tổng 9.300.000 ₫.
  - RATE-V3 dòng 12 là DOC 20' giá 500.000 ₫.
  - Chênh lệch +800.000 ₫ (~US$31).
  - Hóa đơn sửa INV-095-A là 8.500.000 ₫.
- **Hình ảnh** theo [DEMO_DESIGN_RULES.md](DEMO_DESIGN_RULES.md):
  - Nền Ice Blue, chữ Deep Navy, tương tác Electric Blue.
  - Transit Lime chỉ dùng cho CTA, bước "Pay" trên dải quy trình và khoảnh khắc chuyển trạng thái.
  - Trạng thái luôn có nhãn chữ (**Matched / Discrepancy / Missing basis**), không chỉ báo bằng màu.
- **Nhạc:**
  - Shot 1–4: nhịp chậm, hơi căng.
  - Shot 5: vào beat sáng khi logo Movago hiện.
  - Shot 7: hạ nhạc khi dòng DOC lật sang Discrepancy.
  - Shot 9–11: tăng lại.

---

## BỐI CẢNH

### Shot 1 · Chi phí logistics và thương mại (0:00–0:10)

**Hình:**
1. Số `16%` đếm lên giữa khung, thanh ngang có đoạn mục tiêu `12–15%` màu Lime.
2. Thu nhỏ sang trái. Số `US$1,010 bn` đếm lên bên phải, kèm chip `+32.3%`.

**On-screen:**
```
Logistics costs ≈ 16% of Vietnam's GDP · target 12–15% by 2035
US$1,010 bn goods trade · first 10 months of 2026 · +32.3%
```
**Nguồn:** `VIR 2026 · Decision 2229/QĐ-TTg · National Statistics Office`

**VO:** "Logistics costs Vietnam about sixteen percent of its GDP, and trade passed a trillion dollars in the first ten months of 2026."

---

## FORWARDER

### Shot 2 · Forwarder là ai (0:10–0:24)

**Hình:**
1. Một khối ở giữa ghi `Freight forwarder`.
2. Bên trái: một thẻ `Customer` nối vào, mũi tên tiền chạy **vào** forwarder.
3. Bên phải: nhiều thẻ bung ra, mỗi thẻ có mũi tên tiền chạy **ra**: `Shipping line` · `Trucker` · `Port` · `Overseas agent`.
4. Dải 5 bước trượt vào dưới đáy: `Sell → Book → Move → Document → Pay`. Bước **Pay** sáng màu Lime.

**On-screen:** `Collects from one customer. Pays many suppliers.`

**VO:** "In the middle sits the freight forwarder. It books the ship, the truck and the port for its customer. It collects from one customer, but pays many suppliers for every shipment."

---

## VẤN ĐỀ

### Shot 3 · Một khoản phí, ba nơi phải kiểm (0:24–0:40)

**Hình:**
1. Zoom vào bước **Pay**. Màn hình kế toán mở ba khung cạnh nhau, con trỏ nhảy qua lại:
   - `Invoice` (PDF trong email)
   - `Shipment file` (Excel)
   - `Approved rate` (bảng giá, nhãn `v1 · v2 · v3`)
2. Hai dòng hóa đơn chồng lên nhau: `Documentation fee` và `Phí chứng từ`. Một dấu `=` hiện giữa hai dòng.
3. Hai thẻ giá: `DHC · 20' · $127` và `DHC · 40' · $196`.

**Nguồn (bước 3):** `Maersk notice, 31 Mar 2026`

**VO:** "Before paying, an accountant checks every fee line against three things in three places: the invoice, the shipment file and the approved rate. The same fee can have different names, and a different correct price for a twenty- or forty-foot container."

### Shot 4 · Vì sao đau (0:40–0:52)

**Hình:**
1. Chữ `3–6%` hiện lớn, nhãn nhỏ `freight invoices with errors · audits abroad`.
2. Dưới đó: `1–5% of freight spend recoverable`.
3. Dòng `Vietnam: not measured` hiện ra với dấu hỏi.
4. Góc phải trượt vào thẻ tin tuyển dụng đã làm mờ: `Freight invoice auditor · Ho Chi Minh City`.

**Nguồn:** `Transportation Insight (US) · Flexport job posting 2026`

**VO:** "Audits abroad find errors in three to six percent of freight invoices, and up to five percent of freight spend can be recovered. In Vietnam, nobody measures it. Big forwarders hire people just to do this check."

---

## MOVAGO

### Shot 5 · Giới thiệu Movago (0:52–1:02)

**Hình:**
1. Một hóa đơn được kéo ra khỏi chồng: tổng `9,300,000 ₫` hiện ✓ "Total adds up".
2. Hóa đơn bay vào giao diện Movago. Dòng DOC lật sang **Discrepancy**, số `+800,000 ₫` đếm lên.
3. Logo Movago lướt vào. Dải 5 bước hiện lại nhỏ ở đáy, Movago gắn vào bước **Pay**.

**On-screen:** `It adds up. It's still wrong.` → `A new product for a step that already exists.`

**VO:** "Take this invoice. The total adds up, but it's still eight hundred thousand dong wrong. Movago is a new product for a step that already happens before every freight payment."

### Shot 6 · Bảng giá có căn cứ (1:02–1:10)

**Hình:**
1. Báo giá Q-SA-2611 mở ra với 9 dòng giá.
2. Dòng 5 *Phí chứng từ / Documentation fee · 500,000* thu lại thành một token, bay vào RATE-V3 và đáp xuống dòng 12.
3. Pricing bấm **Approve 9/9**, rồi **Publish RATE-V3**.

**On-screen, hiện một lần:** `Q-SA-2611 · line 5 → RATE-V3 · line 12`

**VO:** "It starts from the quotation pricing approved. Every price becomes a rate card line you can trace back."

### Shot 7 · Bắt lỗi từng dòng (1:10–1:24)

**Hình:**
1. PDF INV-095 bên trái, các trường dữ liệu bên phải, có đường nối giữa hai bên. **Nhãn góc bắt buộc:** `Prototype simulation · planned document AI`.
2. Chip `SHP-001 · Singapore → Cat Lai · 20' DRY` gắn vào. Vạch quét chạy qua từng dòng:
   - Ocean freight `8,000,000` = `8,000,000` → **Matched**
   - DOC `1,300,000` so với `500,000` → **Discrepancy · +800,000 ₫ (~US$31)**
3. Hai thẻ căn cứ đặt cạnh nhau: `INV-095 · page 1 · DOC` và `RATE-V3 · line 12`.

**VO:** "Movago finds the shipment, picks the right price by route, container and date, and checks line by line. The documentation fee is one point three million, against five hundred thousand approved. Both sources, side by side."

### Shot 8 · Xử lý và duyệt chi (1:24–1:34)

**Hình:**
1. Kế toán AP bấm **Request verification**. Dòng DOC kèm căn cứ trượt sang Pricing, trạng thái `Waiting for Pricing`.
2. Hóa đơn sửa **INV-095-A · 8,500,000 ₫** đến, mọi dòng chuyển sang **Matched**.
3. Kế toán trưởng đóng dấu **Approved for payment · 8,500,000 ₫** màu Lime.
4. Một bản INV-095 đổi tên file thả vào, bị chặn với nhãn `Already received`.

**On-screen:** `+800,000 ₫ not paid`

**VO:** "One click sends it to pricing. The supplier corrects the invoice, and the chief accountant approves the right amount. A resent copy under a new name is blocked."

### Shot 9 · Movago đứng ở đâu (1:34–1:40)

**Hình:**
1. Ba khối ngang: `Operations · TMS / Excel` → **`Movago`** → `Accounting · payment`.
2. Hai mũi tên đầu vào: `rate card` từ Pricing, `invoices` từ nhà cung cấp.

**On-screen:** `Operations moves the box. Accounting moves the money.`

**VO:** "Operations moves the box. Accounting moves the money. Movago proves the money matches the box."

---

## KẾT QUẢ

### Shot 10 · Kết quả (1:40–1:52)

**Hình:** Ba dòng chữ lớn hiện lần lượt trên nền Ice Blue. Dòng chú thích cố định ở dưới, đủ lớn để đọc.

```
1,000 invoices a month · 15 → 9 min each
100 team hours back every month
Illustrative scenario · the pilot will measure the real result
```

**VO:** "In our illustrative scenario of a thousand invoices a month, that's a hundred hours back every month. Our pilot will measure the real result."

### Shot 11 · End card (1:52–2:00)

**Hình:** Logo Movago, slogan, nút CTA màu Lime với chữ Deep Navy, đường link demo. Tên đội ghi nhỏ ở dưới.

```
Movago
Move smarter. Go safer.
[ Try the prototype ]  movago-odylytics.vercel.app
Odylytics · KTC Ideathon 2026
```

**VO:** "Movago. Move smarter. Go safer."

---

## Lời thoại liền mạch (dùng để thu âm)

> Logistics costs Vietnam about sixteen percent of its GDP, and trade passed a trillion dollars in the first ten months of 2026.
>
> In the middle sits the freight forwarder. It books the ship, the truck and the port for its customer. It collects from one customer, but pays many suppliers for every shipment.
>
> Before paying, an accountant checks every fee line against three things in three places: the invoice, the shipment file and the approved rate. The same fee can have different names, and a different correct price for a twenty- or forty-foot container.
>
> Audits abroad find errors in three to six percent of freight invoices, and up to five percent of freight spend can be recovered. In Vietnam, nobody measures it. Big forwarders hire people just to do this check.
>
> Take this invoice. The total adds up, but it's still eight hundred thousand dong wrong. Movago is a new product for a step that already happens before every freight payment.
>
> It starts from the quotation pricing approved. Every price becomes a rate card line you can trace back.
>
> Movago finds the shipment, picks the right price by route, container and date, and checks line by line. The documentation fee is one point three million, against five hundred thousand approved. Both sources, side by side.
>
> One click sends it to pricing. The supplier corrects the invoice, and the chief accountant approves the right amount. A resent copy under a new name is blocked.
>
> Operations moves the box. Accounting moves the money. Movago proves the money matches the box.
>
> In our illustrative scenario of a thousand invoices a month, that's a hundred hours back every month. Our pilot will measure the real result.
>
> Movago. Move smarter. Go safer.

## Nguồn số liệu

| Số trên video | Nguồn | Ghi chú |
| --- | --- | --- |
| Chi phí logistics ≈ 16% GDP | [VIR](https://vir.com.vn/vietnam-logistics-costs-account-for-16-per-cent-of-gdp-159581.html) | Đây là **chi phí** logistics so với GDP, không phải tỷ trọng của ngành trong GDP. |
| Mục tiêu 12–15% GDP đến 2035 | [Quyết định 2229/QĐ-TTg](https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/10/2229-ttg.signed.pdf) | Văn bản gốc. |
| US$1.010,55 tỷ, +32,3%, 10 tháng 2026 | [Cục Thống kê](https://www.nso.gov.vn/tin-tuc-thong-ke/2026/11/tong-kim-ngach-xuat-nhap-khau-vuot-moc-1-000-ty-usd-dau-moc-lich-su-va-dong-luc-tang-truong-moi/) | Chỉ nói đúng kỳ so sánh này. |
| DHC $127 (20') và $196 (40') | Thông báo của Maersk ngày 31/03/2026, áp dụng từ 01/05/2026 | Giá gốc 3,25 triệu và 5 triệu đồng. Thêm link thông báo vào bảng này trước khi xuất video. |
| 3–6% hóa đơn cước có lỗi · 1–5% chi cước thu hồi được | [Transportation Insight](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/) | Số đo ở Mỹ. Lời thoại giữ chữ "abroad", trên hình có dòng "Vietnam: not measured". |
| Tin tuyển freight invoice auditor ở TP.HCM | [Flexport, 2026](https://job-boards.greenhouse.io/flexport/jobs/7660304) | Làm mờ logo nếu không xin được phép. Lời thoại nói chung "big forwarders", không nêu tên Flexport. |
| 1.000 hóa đơn, 15 → 9 phút, 100 giờ | Kịch bản minh họa trong [brief](colio_ai_project_brief.md) | Luôn có nhãn `Illustrative scenario` trên hình. |

## Những gì không đưa vào video

| Nội dung | Lý do | Chuyển sang |
| --- | --- | --- |
| Danh sách đối tác của forwarder (hải quan, bảo hiểm, ngân hàng, kho bãi) | Không giúp hiểu Movago, làm loãng shot 2 | Script 10 phút, phần hỏi đáp |
| Quy mô thị trường (TAM, SAM, SOM), giá thuê bao, điểm hòa vốn | Không đọc kịp | Slide Market size và Feasibility |
| So sánh đối thủ | Cần bảng, không hợp video ngắn | Slide Competitive advantage |
| Tech stack chi tiết | Quá tải cho video ngắn | Slide kiến trúc trong deck |
| Nhận chứng từ từ email, Zalo, ảnh chụp | Demo chưa có tính năng này | Lộ trình pilot trong deck |
| 8,5 tỷ hóa đơn điện tử | Không cần cho mạch kể này | Slide Why now |

## Checklist trước khi xuất video

- [ ] Shot 1, 3 và 4 có dòng nguồn ở góc dưới suốt shot.
- [ ] Shot 1 ghi "logistics **costs**", không ghi "logistics is 16% of GDP".
- [ ] Shot 2 cho thấy rõ tiền **vào** từ một khách hàng và **ra** cho nhiều nhà cung cấp.
- [ ] Shot 4 giữ chữ "abroad" trong lời thoại và dòng "Vietnam: not measured" trên hình.
- [ ] Shot 5 có câu định vị "a new product for a step that already exists".
- [ ] Shot 7 có nhãn `Prototype simulation · planned document AI` khi PDF còn trên hình.
- [ ] Shot 10 có dòng `Illustrative scenario` cùng lúc với các con số.
- [ ] Không câu thoại hay dòng chữ nào nói Movago "đã đọc" hoặc "đã kéo về" chứng từ từ email hay Zalo.
- [ ] Mọi số tiền khớp dữ liệu demo: 8.000.000 · 1.300.000 · 500.000 · 9.300.000 · +800.000 · 8.500.000.
- [ ] Có phụ đề tiếng Anh, vì nhiều người xem tắt tiếng.
