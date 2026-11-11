# Movago · Kịch bản video SaaS (khoảng 1:25)

Đây là bản cho người dựng video. Video dẫn bằng giao diện, xoay quanh một ca giả lập là hóa đơn **INV-095**. Chỉ có voice-over, không quay người thật, không có cảnh bắt tay hay bản đồ. Số liệu thị trường, bảng chi phí theo từng bước và tech stack chi tiết đưa vào deck. [kich_ban_demo.md](kich_ban_demo.md) giữ vai trò tài liệu nguồn cho bản pitch dài.

## Quy tắc chung

- **Độ dài:** khoảng 1:20–1:30. Lời thoại khoảng 210 từ, đọc 150 từ/phút là khoảng 85 giây. Nếu đọc chậm hơn và vượt 1:30, cắt câu "No guessing where the number came from." ở shot 6 trước. Mốc thời gian chỉ để ước lượng, người dựng chỉnh theo bản thu giọng.
- **Sản phẩm phải có trên hình từ giây đầu tiên.** Mọi shot đều là giao diện Movago hoặc chứng từ trong demo.
- **Không nói tính năng dự kiến như đã chạy.** Hai việc demo đang mô phỏng là đọc PDF bằng OCR/AI và nhận chứng từ từ email hay Zalo. Shot nào có hai việc này phải có nhãn góc: `Prototype simulation · planned document AI`.
- **Phần đã dựng thật:** bảng giá từ báo giá, ghép lô, chọn giá theo tuyến, container, đơn vị và ngày, đối chiếu từng dòng, hiện căn cứ hai phía, gửi xác minh, xuất CSV.
- **Số trong video lấy đúng dữ liệu demo:** INV-095 có 2 dòng (Ocean freight 8.000.000 và DOC 1.300.000, tổng 9.300.000 ₫), RATE-V3 dòng 12 là DOC 20' giá 500.000, chênh lệch +800.000 ₫ (~US$31), hóa đơn sửa INV-095-A là 8.500.000 ₫.
- **Hình ảnh:** theo [DEMO_DESIGN_RULES.md](DEMO_DESIGN_RULES.md). Nền Ice Blue, chữ Deep Navy, tương tác Electric Blue. Transit Lime chỉ dùng cho CTA và các khoảnh khắc chuyển trạng thái. Trạng thái luôn có nhãn chữ (**Matched / Discrepancy / Missing basis**), không chỉ báo bằng màu.
- **Nhạc:** nhạc nền điện tử nhẹ, tiết tấu đều. Hạ nhạc ở shot 5 khi dòng DOC lật sang Discrepancy, rồi tăng lại ở shot 7.

## Shot list và lời thoại

### Shot 1 · Hook (0:00–0:07)

**Hình:** Màn hình Movago, hóa đơn INV-095 đã mở. Tổng `9,300,000 ₫` hiện dấu ✓ "Total adds up". Giữ 1 giây, rồi dòng DOC lật đỏ sang **Discrepancy** và số `+800,000 ₫` đếm lên.

**On-screen:** `It adds up. It's still wrong.`

**VO:** "This freight invoice adds up. It's still eight hundred thousand dong wrong."

### Shot 2 · Bài toán (0:07–0:17)

**Hình:** Hàng chờ hóa đơn của kế toán công nợ, nhiều dòng `Waiting`. Ba khung trượt vào cạnh nhau: hóa đơn PDF, hồ sơ lô SHP-001, bảng giá RATE-V3. Con trỏ nhảy qua lại giữa ba khung, cho thấy cảnh đối chiếu thủ công.

**On-screen:** `Invoice · Shipment file · Approved rate card`

**VO:** "Before paying a carrier, accounts payable has to check every fee against the shipment and the price that was actually agreed. Three sources, every invoice, by hand."

### Shot 3 · Bảng giá có căn cứ (0:17–0:29)

**Hình:** Báo giá Q-SA-2611 mở ra, 9 dòng giá. Dòng 5 *Phí chứng từ / Documentation fee · 500,000* sáng lên, thu lại thành một token giá, bay vào bảng RATE-V3 và đáp xuống dòng 12. Pricing (Khoa) bấm **Approve 9/9**, rồi bấm **Publish RATE-V3**.

**On-screen, hiện một lần:** `Q-SA-2611 · line 5 → normalized → RATE-V3 · line 12`

**VO:** "Movago starts from the quotation pricing approved. Each price becomes a line in a rate card, and every line can be traced back to the quote it came from."

### Shot 4 · Hóa đơn vào hệ thống (0:29–0:40)

**Hình:** PDF INV-095 bên trái, các trường dữ liệu bên phải: nhà cung cấp, số hóa đơn, SHP-001, B/L, hai dòng phí. Đường nối từ mỗi dòng trên PDF sang trường tương ứng. Gợi ý `"Documentation fee" → DOC · confirm` hiện lên, Hà (AP) bấm xác nhận.

**Nhãn góc, bắt buộc:** `Prototype simulation · planned document AI`

**VO:** "In this prototype, the invoice arrives as structured fee lines. In the pilot, document AI will read the PDF, show where each value sits on the page, and hand anything uncertain to a person."

### Shot 5 · Khoảnh khắc bắt lỗi (0:40–0:52)

**Hình:** Bảng đối chiếu từng dòng. Chip `SHP-001 · Singapore → Cat Lai · 20' DRY` gắn vào. Vạch quét chạy qua từng dòng:
- Ocean freight `8,000,000` = `8,000,000` → **Matched**
- DOC `1,300,000` so với `500,000` → **Discrepancy · +800,000 ₫ (~US$31)**

Nhạc hạ xuống ở dòng DOC.

**VO:** "Movago finds the shipment, picks the right price by route, container and date, and checks line by line. Ocean freight matches. The documentation fee is one point three million, against an approved five hundred thousand."

### Shot 6 · Căn cứ hai phía (0:52–0:59)

**Hình:** Hai thẻ đặt cạnh nhau: `INV-095 · page 1 · DOC · 1,300,000` và `RATE-V3 · line 12 · DOC 20' · 500,000`. Mũi tên nối hai thẻ, phép tính `1,300,000 − 500,000 = +800,000` hiện từng số.

**VO:** "Both sources, side by side. No guessing where the number came from."

### Shot 7 · Xử lý và duyệt chi (0:59–1:11)

**Hình:** Hà bấm **Request verification**, dòng DOC kèm căn cứ trượt sang Khoa (Pricing). Trạng thái chạy `Discrepancy → Waiting for Pricing`. Hóa đơn sửa **INV-095-A · 8,500,000 ₫** đến, mọi dòng chuyển sang **Matched**. Lan Anh (kế toán trưởng) đóng dấu **Approved for payment · 8,500,000 ₫**, dấu màu Transit Lime.

**On-screen:** `+800,000 ₫ not paid`

**VO:** "One click sends the line to Pricing with the evidence. The supplier corrects the invoice, and the chief accountant approves the right amount."

### Shot 8 · Kết quả (1:11–1:20)

**Hình:** Ba con số lớn xuất hiện lần lượt trên nền Ice Blue. Dòng chú thích nằm cố định ở dưới, chữ Deep Navy, đủ lớn để đọc.

```
15 → 9 min per invoice
100 team hours back each month
Illustrative scenario · the pilot will measure the real result
```

**VO:** "In our illustrative scenario of a thousand invoices a month, that's fifteen minutes down to nine, and a hundred hours back to the team. The pilot will measure the real result."

### Shot 9 · End card (1:20–1:26)

**Hình:** Logo Movago, slogan, nút CTA màu Transit Lime chữ Deep Navy. Dòng nhỏ bên dưới ghi tên đội.

**On-screen:**
```
Movago
Move smarter. Go safer.
[ Try the prototype ]
Odylytics · KTC Ideathon 2026
```

**VO:** "Movago. Move smarter. Go safer."

## Lời thoại liền mạch (dùng để thu âm)

> This freight invoice adds up. It's still eight hundred thousand dong wrong.
>
> Before paying a carrier, accounts payable has to check every fee against the shipment and the price that was actually agreed. Three sources, every invoice, by hand.
>
> Movago starts from the quotation pricing approved. Each price becomes a line in a rate card, and every line can be traced back to the quote it came from.
>
> In this prototype, the invoice arrives as structured fee lines. In the pilot, document AI will read the PDF, show where each value sits on the page, and hand anything uncertain to a person.
>
> Movago finds the shipment, picks the right price by route, container and date, and checks line by line. Ocean freight matches. The documentation fee is one point three million, against an approved five hundred thousand.
>
> Both sources, side by side. No guessing where the number came from.
>
> One click sends the line to Pricing with the evidence. The supplier corrects the invoice, and the chief accountant approves the right amount.
>
> In our illustrative scenario of a thousand invoices a month, that's fifteen minutes down to nine, and a hundred hours back to the team. The pilot will measure the real result.
>
> Movago. Move smarter. Go safer.

## Những gì đã cắt khỏi bản dài và chuyển đi đâu

| Nội dung | Lý do cắt | Chuyển sang |
| --- | --- | --- |
| Cảnh bắt tay, bản đồ, nhân vật, tàu, container | Lệch phong cách video SaaS dẫn bằng giao diện | Không dùng |
| Số liệu thị trường (kim ngạch 10 tháng 2026 đạt 1.010,55 tỷ USD, tăng 32,3%; mục tiêu chi phí logistics 12–15% GDP trong QĐ 2229/QĐ-TTg) | Làm sản phẩm xuất hiện muộn | Slide bài toán trong deck. Ghi đúng kỳ so sánh, không nói "tăng hơn 30% mỗi năm" |
| 8,5 tỷ hóa đơn điện tử năm 2025 | Chưa có nguồn chính thức | Bỏ, trừ khi tìm được số của cơ quan thuế |
| Bảng 5 bước × phút × công nghệ, chi phí sử dụng, điểm hòa vốn | Không đọc kịp trong vài giây | Trang Business case trên web và slide phụ lục |
| Tech stack chi tiết, nhãn built/planned từng chip | Quá tải cho video ngắn | Slide kiến trúc trong deck |
| Nhận chứng từ từ email, Zalo, ảnh chụp | Demo chưa có tính năng này | Lộ trình pilot trong deck |

## Checklist trước khi xuất video

- [ ] Shot 4 có nhãn `Prototype simulation · planned document AI` trong suốt shot.
- [ ] Shot 8 có dòng `Illustrative scenario` trên màn hình cùng lúc với ba con số.
- [ ] Không câu thoại hay chữ nào nói Movago "đã đọc", "đã kéo về" chứng từ từ email hoặc Zalo.
- [ ] Mọi số tiền khớp với dữ liệu demo: 8.000.000 · 1.300.000 · 500.000 · 9.300.000 · +800.000 · 8.500.000.
- [ ] Mapping `Q-SA-2611 · line 5 → RATE-V3 · line 12` hiện đúng một lần, ở shot 3.
- [ ] Có phụ đề tiếng Anh, vì nhiều người xem tắt tiếng.
