# Movago · Kịch bản video SaaS (khoảng 1:30)

Đây là bản cho người dựng video. Video đi theo mạch **Problem → Solution → Result**. Phần mở đầu khoảng 25 giây nêu bối cảnh Việt Nam bằng số liệu có nguồn. Sau đó video dẫn bằng giao diện Movago, xoay quanh một ca giả lập là hóa đơn **INV-095**. Chỉ có voice-over: không quay người thật, không có cảnh bắt tay hay bản đồ. Bảng chi phí theo từng bước và tech stack chi tiết đưa vào deck. [kich_ban_demo.md](kich_ban_demo.md) giữ vai trò tài liệu nguồn cho bản pitch dài.

## Quy tắc chung

- **Độ dài:** khoảng 1:25–1:35. Lời thoại khoảng 230 từ, đọc 155 từ/phút là khoảng 90 giây. Nếu bản thu vượt 1:35, cắt theo thứ tự này:
  1. Câu "No guessing where the number came from." ở shot 6.
  2. Vế "and every line traces back to the quote" ở shot 5.
- **Mạch kể:**
  - Problem (0:00–0:26): chi phí logistics cao, thương mại tăng nhanh, hóa đơn cước vẫn kiểm tay, Việt Nam chưa có số liệu công khai đáng tin cậy về lỗi.
  - Solution (0:26–1:15): Movago bắt lỗi, nêu căn cứ, chuyển cho người xử lý.
  - Result (1:15–1:30): kết quả minh họa và end card.
- **Movago xuất hiện ở đầu shot 4 (khoảng giây 32)**, sau khi hóa đơn INV-095 được đặt cạnh báo giá đã duyệt 8.500.000 ₫ ở shot 3. Shot 3 dựng bối cảnh: thỏa thuận giá trước, hóa đơn sau, khoản chênh lệch sau cùng. Hai shot đầu là đồ họa số liệu cùng phong cách giao diện, không dùng footage.
- **Số liệu thị trường phải có nguồn trên màn hình**, chữ nhỏ ở góc dưới, giữ suốt shot. Chỉ dùng ba số trong bảng nguồn ở cuối file. Câu "8,5 tỷ hóa đơn điện tử" đã bỏ vì chưa có nguồn chính thức.
- **Không nói tính năng dự kiến như đã chạy.** Demo đang mô phỏng hai việc: đọc PDF bằng OCR/AI và nhận chứng từ từ email hay Zalo. Shot nào có hai việc này phải có nhãn góc: `Prototype simulation · planned document AI`.
- **Phần đã dựng thật:**
  - Lập bảng giá từ báo giá.
  - Ghép lô, chọn giá theo tuyến, container, đơn vị và ngày.
  - Đối chiếu từng dòng, hiện căn cứ hai phía.
  - Gửi xác minh, xuất CSV.
- **Số tiền lấy đúng dữ liệu demo:**
  - INV-095 có 2 dòng: Ocean freight 8.000.000 và DOC 1.300.000, tổng 9.300.000 ₫.
  - RATE-V3 dòng 12 là DOC 20' giá 500.000.
  - Chênh lệch +800.000 ₫ (~US$31).
  - Hóa đơn sửa INV-095-A là 8.500.000 ₫.
- **Hình ảnh:** theo [DEMO_DESIGN_RULES.md](DEMO_DESIGN_RULES.md).
  - Nền Ice Blue, chữ Deep Navy, tương tác Electric Blue.
  - Transit Lime chỉ dùng cho CTA và khoảnh khắc chuyển trạng thái.
  - Trạng thái luôn có nhãn chữ (**Matched / Discrepancy / Missing basis**), không chỉ báo bằng màu.
- **Nhạc:**
  - Phần Problem: nhịp chậm, hơi căng.
  - Shot 4: vào beat sáng hơn khi logo Movago hiện.
  - Shot 6: hạ nhạc khi dòng DOC lật sang Discrepancy.
  - Shot 8: tăng lại.

---

## PROBLEM

### Shot 1 · Chi phí logistics (0:00–0:08)

**Hình:** Một con số lớn chiếm giữa khung, đếm từ 0 lên `16–17%`. Bên dưới có một thanh ngang, đoạn `12–15%` màu Transit Lime kéo thanh về bên trái, thể hiện mục tiêu.

**On-screen:**
```
Logistics costs ≈ 16–17% of Vietnam's GDP
Target: 12–15% by 2035
```
**Nguồn (góc dưới):** `Vietnam Logistics Report 2025 · Decision 2229/QĐ-TTg`

**VO:** "Logistics costs Vietnam around sixteen percent of its GDP. The government wants that down to between twelve and fifteen by 2035."

### Shot 2 · Thương mại tăng nhanh (0:08–0:14)

**Hình:** Số `US$1,010 bn` đếm lên, chip `+32.3% YoY` bật ra bên cạnh. Phía sau, các thẻ hóa đơn nhỏ bắt đầu rơi xuống và chồng dần lên nhau.

**On-screen:** `US$1,010 bn in goods trade · first 10 months of 2026 · +32.3% year on year`
**Nguồn:** `National Statistics Office`

**VO:** "Meanwhile, trade passed a trillion dollars in the first ten months of 2026, up thirty-two percent on last year."

### Shot 3 · Kiểm tay, và giá đã duyệt (0:14–0:26)

**Hình:**
1. (0:14–0:20) Chồng hóa đơn trượt vào một màn hình kế toán. Ba khung mở cạnh nhau: hóa đơn PDF, hồ sơ lô, bảng giá trong Excel. Chữ `3–6%` hiện lên, kèm nhãn nhỏ `freight invoices with errors · audits abroad`. Dòng `Vietnam: no public data yet` hiện ra, có dấu hỏi.
2. (0:20–0:26) Chồng hóa đơn lùi về. Một thẻ báo giá được ghim vào giữa khung, sáng Electric Blue, dán nhãn `Approved · Q-SA-2611`:
   - Chip `SHP-001 · Singapore → Cat Lai · 20' DRY`
   - Ocean freight `8,000,000`
   - Documentation fee `500,000`
   - Tổng `8,500,000 ₫` đếm lên và đóng dấu **Agreed price**.

**Thứ tự animation:** chữ 3–6% → dòng Vietnam → chồng hóa đơn lùi lại → thẻ báo giá bay vào giữa → các dòng hiện từ trên xuống → tổng 8,500,000 đóng dấu.

**On-screen (đóng dấu cuối shot):** `Agreed price · 8,500,000 ₫`

**Nguồn:** `Transportation Insight (US)` (số 3–6% chỉ áp dụng cho các cuộc kiểm toán ở Mỹ)

**VO:** "Every shipment starts with an approved quote. This one: a twenty-foot container, Singapore to Cat Lai, agreed at eight million five hundred thousand dong. Eight million ocean freight, five hundred thousand documentation. Audits abroad find errors in three to six percent of freight invoices. Vietnam has no public, reliable data yet to size the problem."

---

## SOLUTION

### Shot 4 · Giới thiệu Movago (0:26–0:33)

**Hình:**
1. (0:26–0:28) Thẻ báo giá `8,500,000 ₫` ở shot 3 giữ nguyên bên trái. Hóa đơn **INV-095** trượt vào từ bên phải, đặt cạnh thẻ đó.
2. (0:28–0:30) Các dòng hóa đơn hiện lên. Ocean freight `8,000,000` khớp với báo giá. Dòng DOC hiện `1,300,000` nằm cạnh `500,000` đã duyệt. Tổng `9,300,000 ₫` có dấu ✓ "Total adds up": phép cộng đúng, nhưng giá sai.
3. (0:30–0:32) Dòng DOC lật đỏ sang **Discrepancy**. Một thước nối hai tổng, số `+800,000 ₫` đếm lên.
4. (0:32–0:33) Logo Movago lướt vào góc trên.

**Nhãn góc bắt buộc:** `Prototype simulation · planned document AI` (vì hóa đơn đang hiện như một PDF đã đọc)

**On-screen:** `It adds up. It's still wrong.` (hiện sau bước 2)

**VO:** "Then the invoice arrives: nine million three hundred thousand. The total adds up, but the documentation fee is one point three million, against five hundred thousand agreed. That's eight hundred thousand dong over the price. Movago catches it before anyone pays."

### Shot 5 · Bảng giá có căn cứ (0:33–0:43)

**Hình:**
1. Báo giá Q-SA-2611 mở ra với 9 dòng giá.
2. Dòng 5 *Phí chứng từ / Documentation fee · 500,000* sáng lên, thu lại thành một token, bay vào bảng RATE-V3 và đáp xuống dòng 12.
3. Pricing (Khoa) bấm **Approve 9/9**, rồi **Publish RATE-V3**.

**On-screen, hiện một lần:** `Q-SA-2611 · line 5 → normalized → RATE-V3 · line 12`

**VO:** "It starts from the quotation pricing approved: each price becomes a rate card line, and every line traces back to the quote."

### Shot 6 · Hóa đơn vào và bắt lỗi (0:43–0:58)

**Hình:**
1. PDF INV-095 bên trái, các trường dữ liệu bên phải, có đường nối từ từng dòng trên PDF sang trường tương ứng. **Nhãn góc bắt buộc:** `Prototype simulation · planned document AI`.
2. Chuyển sang bảng đối chiếu. Chip `SHP-001 · Singapore → Cat Lai · 20' DRY` gắn vào, vạch quét chạy qua từng dòng:
   - Ocean freight `8,000,000` = `8,000,000` → **Matched**
   - DOC `1,300,000` so với `500,000` → **Discrepancy · +800,000 ₫ (~US$31)**
3. Hai thẻ căn cứ đặt cạnh nhau: `INV-095 · page 1 · DOC` và `RATE-V3 · line 12`.

**VO:** "In this prototype, invoice lines arrive structured. In the pilot, document AI will read the PDF. Movago finds the shipment, picks the right price by route, container and date, and checks line by line. The documentation fee is one point three million, against five hundred thousand approved. Both sources, side by side. No guessing where the number came from."

### Shot 7 · Xử lý và duyệt chi (0:58–1:10)

**Hình:**
1. Hà (AP) bấm **Request verification**. Dòng DOC kèm căn cứ trượt sang Khoa (Pricing), trạng thái chuyển `Discrepancy → Waiting for Pricing`.
2. Hóa đơn sửa **INV-095-A · 8,500,000 ₫** đến, mọi dòng chuyển sang **Matched**.
3. Lan Anh (kế toán trưởng) đóng dấu **Approved for payment · 8,500,000 ₫**, dấu màu Transit Lime.

**On-screen:** `+800,000 ₫ not paid`

**VO:** "One click sends it to Pricing with the evidence. The supplier corrects the invoice, and the chief accountant approves the right amount."

---

## RESULT

### Shot 8 · Kết quả (1:10–1:22)

**Hình:** Ba dòng chữ lớn hiện lần lượt trên nền Ice Blue. Dòng chú thích cố định ở dưới, chữ Deep Navy, đủ lớn để đọc.

```
15 → 9 min per invoice
100 team hours back each month
Illustrative scenario · the pilot will measure the real result
```

**VO:** "In our illustrative scenario of a thousand invoices a month, that's fifteen minutes down to nine, and a hundred hours back to the team. Our pilot will measure the real result."

### Shot 9 · End card (1:22–1:30)

**Hình:** Logo Movago, slogan, nút CTA màu Transit Lime với chữ Deep Navy. Tên đội ghi nhỏ ở dưới.

```
Movago
Move smarter. Go safer.
[ Try the prototype ]
Odylytics · KTC Ideathon 2026
```

**VO:** "Movago. Move smarter. Go safer."

---

## Lời thoại liền mạch (dùng để thu âm)

> Logistics costs Vietnam around sixteen percent of its GDP. The government wants that down to between twelve and fifteen by 2035.
>
> Meanwhile, trade passed a trillion dollars in the first ten months of 2026, up thirty-two percent on last year.
>
> Every shipment starts with an approved quote. This one: a twenty-foot container, Singapore to Cat Lai, agreed at eight million five hundred thousand dong. Eight million ocean freight, five hundred thousand documentation. Audits abroad find errors in three to six percent of freight invoices. Vietnam has no public, reliable data yet to size the problem.
>
> Then the invoice arrives: nine million three hundred thousand. The total adds up, but the documentation fee is one point three million, against five hundred thousand agreed. That's eight hundred thousand dong over the price. Movago catches it before anyone pays.
>
> It starts from the quotation pricing approved: each price becomes a rate card line, and every line traces back to the quote.
>
> In this prototype, invoice lines arrive structured. In the pilot, document AI will read the PDF. Movago finds the shipment, picks the right price by route, container and date, and checks line by line. The documentation fee is one point three million, against five hundred thousand approved. Both sources, side by side. No guessing where the number came from.
>
> One click sends it to Pricing with the evidence. The supplier corrects the invoice, and the chief accountant approves the right amount.
>
> In our illustrative scenario of a thousand invoices a month, that's fifteen minutes down to nine, and a hundred hours back to the team. Our pilot will measure the real result.
>
> Movago. Move smarter. Go safer.

## Nguồn số liệu phần Problem

| Số trên video | Nguồn | Ghi chú |
| --- | --- | --- |
| Chi phí logistics ≈ 16–17% GDP | [VIR](https://vir.com.vn/vietnam-logistics-costs-account-for-16-per-cent-of-gdp-159581.html) · [Báo cáo Logistics Việt Nam 2025](https://proship.vn/news/bao-cao-logistics-viet-nam-2025/) | Đây là **chi phí** logistics so với GDP, không phải tỷ trọng của ngành trong GDP. Mới đọc qua bài tóm tắt; mở [PDF báo cáo](https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf) để lấy số trang trước khi xuất video. |
| Mục tiêu 12–15% GDP giai đoạn 2025–2035 | [Quyết định 2229/QĐ-TTg](https://datafiles.chinhphu.vn/cpp/files/vbpq/2025/10/2229-ttg.signed.pdf) | Đã có văn bản gốc. |
| US$1.010,55 tỷ, tăng 32,3% so với cùng kỳ, 10 tháng 2026 | [Cục Thống kê](https://www.nso.gov.vn/tin-tuc-thong-ke/2026/11/tong-kim-ngach-xuat-nhap-khau-vuot-moc-1-000-ty-usd-dau-moc-lich-su-va-dong-luc-tang-truong-moi/) | Chỉ nói đúng kỳ so sánh này, không nói "tăng hơn 30% mỗi năm". |
| 3–6% hóa đơn cước có lỗi | [Transportation Insight](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/) | Số đo ở Mỹ. Lời thoại phải giữ chữ "abroad". Trên hình ghi "Vietnam: no public data yet", không ghi "not measured" hay "nobody is measuring", vì chưa thể khẳng định không ai đo. |

## Những gì không đưa vào video

| Nội dung | Lý do | Chuyển sang |
| --- | --- | --- |
| Cảnh bắt tay, bản đồ, nhân vật, tàu, container | Lệch phong cách video SaaS dẫn bằng giao diện | Không dùng |
| 8,5 tỷ hóa đơn điện tử năm 2025 | Chưa có nguồn chính thức | Bỏ, trừ khi tìm được số của cơ quan thuế |
| Bảng 5 bước × phút × công nghệ, chi phí sử dụng, điểm hòa vốn | Không đọc kịp trong vài giây | Trang Business case trên web và slide phụ lục |
| Tech stack chi tiết, nhãn built/planned từng chip | Quá tải cho video ngắn | Slide kiến trúc trong deck |
| Nhận chứng từ từ email, Zalo, ảnh chụp | Demo chưa có tính năng này | Lộ trình pilot trong deck |

## Checklist trước khi xuất video

- [ ] Shot 1–3 có dòng nguồn ở góc dưới trong suốt shot.
- [ ] Shot 1 ghi "logistics **costs**", không ghi "logistics is 16% of GDP".
- [ ] Shot 3 giữ chữ "abroad" trong lời thoại và dòng "Vietnam: no public data yet" trên hình.
- [ ] Shot 3 đặt thẻ báo giá 8.500.000 ₫ trước khi INV-095 xuất hiện ở shot 4.
- [ ] Shot 6 có nhãn `Prototype simulation · planned document AI` khi PDF còn trên hình.
- [ ] Shot 8 có dòng `Illustrative scenario` trên màn hình cùng lúc với các con số.
- [ ] Không câu thoại hay dòng chữ nào nói Movago "đã đọc" hoặc "đã kéo về" chứng từ từ email hay Zalo.
- [ ] Mọi số tiền khớp dữ liệu demo: 8.000.000 · 1.300.000 · 500.000 · 9.300.000 · +800.000 · 8.500.000.
- [ ] Mapping `Q-SA-2611 · line 5 → RATE-V3 · line 12` hiện đúng một lần, ở shot 5.
- [ ] Có phụ đề tiếng Anh, vì nhiều người xem tắt tiếng.
