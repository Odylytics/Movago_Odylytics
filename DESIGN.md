# Mẫu Movora · Tham chiếu bố cục cho Movago

> Công nghiệp, biên tập, góc vuông. Tiêu đề in hoa rất lớn, viền mảnh chuyển sắc, một màu nhấn dùng tiết chế và một dải màu nhấn tràn viền.

Chốt ngày 12/11/2026, thay mẫu Dimension. File này quyết định **bố cục, khoảng cách, hình khối, cấu trúc thành phần và chuyển động**. Màu, font và độ tương phản do [quy tắc thiết kế demo](DEMO_DESIGN_RULES.md) quyết định. Khi hai file khác nhau về màu hoặc font, theo quy tắc demo.

## Nguồn và giới hạn sử dụng

| Nguồn | Đường dẫn |
| --- | --- |
| Template trên Framer Marketplace | [Movora](https://www.framer.com/marketplace/templates/movora/) |
| Bản xem trước | [movora.framer.website](https://movora.framer.website/) |
| Bản clone của đội (để đọc layer và số đo) | [Framer project](https://framer.com/projects/Movora-Industrial-Logistics-Company-copy--0KmfM7xqmLHDbvfPNP3R-gCZ7a) |
| Bộ nhận diện MovaGo | [Figma](https://www.figma.com/design/iZiC4AnBHGP3baNCUlAcdH/MovaGo?node-id=0-1) |

- Lấy từ Movora: lưới, nhịp khoảng trắng, thang chữ, hình khối, cách dựng viền, cấu trúc nav, nút, nhãn mục, thẻ số liệu, hàng đánh số, dải nhấn tràn viền, FAQ và footer.
- Không lấy: ảnh, ảnh dựng 3D, logo dấu cộng, chữ “MOVORA”, nội dung chữ và lời chứng thực. Đây là tài sản của template. Movago dùng ảnh giao diện sản phẩm, hình nét SVG tự vẽ, ảnh có giấy phép rõ ràng (ghi nguồn khi dùng) và hai ảnh container MovaGo do đội tạo bằng ChatGPT, chỉ dùng ảnh Movora làm tham chiếu góc máy.
- Không lấy màu đỏ `#E51E31` và font Stack Sans. Màu đỏ đổi sang vai trò Transit Lime. Stack Sans không có các nguyên âm tiếng Việt có dấu thanh (thiếu U+1EA0–1EF1), nên thay bằng font trong quy tắc demo.

## Tinh thần

- Nền tối gần đen, mặt thẻ tối hơn nền, phân lớp bằng viền 1px chuyển sắc thay cho bóng đổ.
- Tiêu đề in hoa, rất lớn, chữ khít. Chữ nội dung nhỏ, thoáng, chủ yếu căn trái.
- Màu nhấn chỉ xuất hiện ở ô icon của nút, nhãn mục, số thứ tự, số liệu lớn và **một** dải tràn viền mỗi trang.
- Góc vuông cho mọi bề mặt, nút, ô nhập và ảnh. Cảm giác chính xác, chắc chắn, hợp với việc đối chiếu chứng từ.

## Lưới và breakpoint

| Breakpoint | Khoảng | Lề hai bên | Khung nội dung |
| --- | --- | --- | --- |
| Desktop | ≥ 1440 px | 40 px | 1360 px khi màn hình 1440 px |
| Tablet | 810–1439 px | 40 px | Co theo màn hình |
| Phone | < 810 px | 20 px | Co theo màn hình |

- Trên web, dùng `max-width: 1360px` cho khung nội dung và lề `clamp(20px, 2.8vw, 40px)`. Mọi phần dùng chung khung này. Chữ nội dung căn cùng mép trái với tiêu đề.
- Lưới 12 cột, khe 20 px. Các bố cục thường gặp: 4 cột thẻ số liệu, 3 cột thẻ giới thiệu (5 : 3 : 5), 2 cột chữ và ảnh (lệch 4 : 8 hoặc 5 : 7).
- Nav và footer tràn hết bề ngang. Mặt nền của phần trải tràn viền, chỉ nội dung bên trong bị giới hạn bề ngang.

## Khoảng cách

| Vị trí | Desktop | Tablet | Phone |
| --- | --- | --- | --- |
| Padding trên và dưới của phần | 72 px | 64 px | 56 px |
| Khoảng từ cụm tiêu đề tới nội dung | 40 px | 36 px | 32 px |
| Hero | 80 px trên, 40 px dưới, khoảng 250 px giữa wordmark và cụm chữ đáy | 64 px khoảng giữa | 40 px khoảng giữa |
| Padding thẻ lớn (hàng đánh số, footer) | 40 px | 32 px | 20 px |
| Padding thẻ nhỏ (số liệu, quy trình) | 20 px | 20 px | 16 px |
| Khoảng giữa các thẻ cùng nhóm | 20 px | 20 px | 12 px |
| Khoảng trong thành phần | 10, 12, 20, 40 px | như desktop | 8, 10, 16, 24 px |

Chỉ dùng các giá trị trong bảng. Khi cần giá trị mới, thêm vào bảng trước. Ngày 13/11/2026 nhịp phần được thu gọn so với Movora (120 px) để trên laptop một màn hình thấy trọn một phần; hero cần cẩu giữ nguyên.

## Hình khối và viền

- **Bo góc 0** cho thẻ, nút, ô nhập, chip, ảnh, nav và nhãn trạng thái. Ngoại lệ duy nhất là biểu tượng logo MovaGo, giữ nguyên artwork.
- **Viền chuyển sắc 1 px** cho thẻ và nút: sáng ở cạnh trên, nhạt dần về trong suốt ở cạnh dưới. Movora dựng bằng một khung bọc padding 1 px có nền gradient. Trên web dùng giả phần tử:

```css
.frame { position: relative; background: var(--surface); }
.frame::before {
  content: ""; position: absolute; inset: 0; padding: 1px; pointer-events: none;
  background: linear-gradient(180deg, var(--line-strong), transparent);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
```

- **Viền tĩnh 1 px** màu `--line` cho ô lưới footer, đường kẻ giữa các mục danh sách và thanh đáy.
- Không dùng bóng đổ để tạo độ nổi. Độ sâu đến từ chênh lệch nền và viền.

## Thang chữ

Font cụ thể theo quy tắc demo. Bảng dưới là cỡ và nhịp lấy từ Movora.

| Vai trò | Desktop | Tablet | Phone | Line-height | Tracking | Kiểu |
| --- | --- | --- | --- | --- | --- | --- |
| Display (H1) | 150 px | 100 px | 60 px | 1,0 | −0,04em (phone −0,02em) | In hoa, đậm |
| Heading (H2) | 52 px | 44 px | 30 px | 1,1 | −0,03em | In hoa, đậm |
| Title (H3) | 32 px | 26 px | 20 px | 1,2 | −0,01em | In hoa, đậm |
| Body lớn | 20 px | 18 px | 16 px | 1,4 | 0 | Thường |
| Body | 16 px | 16 px | 14 px | 1,5 | 0 | Thường |
| Nhãn, nav, nút | 16 px | 16 px | 14 px | 1,2 | 0 | In hoa, đậm vừa |
| Wordmark khổng lồ | Tự khớp bề ngang khung | | | 1,0 | | Chỉ chữ MOVAGO |

- Trên web dùng `clamp()`: H1 `clamp(60px, 10.4vw, 150px)`, H2 `clamp(40px, 5.6vw, 80px)`, H3 `clamp(20px, 2.2vw, 32px)`, Body lớn `clamp(16px, 1.4vw, 20px)`.
- **Tiếng Việt in hoa cần thêm chỗ cho dấu** (Ế, Ộ, Ữ chồng lên dòng trên). Khi trang ở chế độ VI, tăng line-height: H1 1,12, H2 1,2, H3 1,3. Kiểm tra mọi tiêu đề VI ở cả ba breakpoint.
- Số liệu và tiền dùng chữ số đều bề (`font-variant-numeric: tabular-nums`).
- Tiêu đề và đoạn ngắn dùng `text-wrap: balance`, đoạn dài dùng `text-wrap: pretty`.

## Thành phần

### Thanh điều hướng
- Tràn bề ngang, dính đỉnh màn hình, nền `--surface`, padding 14 px 40 px (phone 14 px 20 px).
- Trái: logo MovaGo (biểu tượng và wordmark). Phải: các mục in hoa 16 px cách nhau 40 px, nút chuyển EN / VI, nút chuyển tối / sáng, rồi nút mũi tên chính.
- Dưới 810 px: chỉ giữ logo, nút mũi tên chính và nút menu. Menu mở thành tấm phủ toàn màn hình với các mục in hoa cỡ H3.

### Nút mũi tên
- Khung viền chuyển sắc 1 px, nền `--surface`, padding 6 px 16 px 6 px 6 px, khoảng 10 px.
- Bên trái là ô vuông 36 px nền `--accent`, mũi tên chéo ↗ màu `--accent-ink`. Bên phải là nhãn in hoa 16 px đậm vừa.
- Hover: ô vuông giãn ngang để mũi tên trượt sang phải, viền sáng hơn. Focus: vòng `--focus` 2 px.
- Nút phụ bỏ ô vuông, chỉ còn khung viền và nhãn.

### Nhãn mục
- Ký hiệu 20 px (dấu cộng hoặc ô vuông nhỏ của Movago) cạnh nhãn in hoa 16 px, khoảng 10 px, màu `--accent-text`.
- Đặt trên tiêu đề H2 của mỗi phần, cách 20 px.

### Hàng đánh số
- Thẻ tràn bề ngang khung, viền chuyển sắc, padding 40 px.
- Cột trái: số thứ tự `01` cỡ H3, màu `--accent-text`. Cột phải: tiêu đề cỡ H2 in hoa.
- Hàng đang mở thêm ảnh hoặc hình nét (khoảng 325 × 282 px), các chip `(01) …` nền `--surface-2` padding 8 px 12 px, và nút mũi tên. Các hàng khác thu gọn chỉ còn số và tiêu đề. Khoảng giữa các hàng 20 px.

### Thẻ số liệu
- Viền chuyển sắc, padding 20 px, khoảng 12 px. Nhãn cỡ Body lớn ở trên, con số cỡ H2 màu `--accent-text` ở dưới.
- Lưới 4 cột trên desktop, 2 cột trên tablet, 1 cột trên phone.
- Mỗi số ghi rõ loại: Có nguồn, Giả định hoặc Giả lập.

### Dải nhấn tràn viền
- Một phần mỗi trang có nền `--accent` tràn viền. Hai đường kẻ dọc mảnh chia khung giữa (khoảng 800 px) làm điểm nhấn.
- Tiêu đề H2 căn giữa, màu `--accent-ink`. Các thẻ bên trong nền Deep Navy, chữ trắng, số thứ tự màu Lime.
- Thẻ quy trình: rộng 700 px, ảnh hoặc hình nét cao 360 px, rồi số thứ tự, tiêu đề H3 và một câu mô tả. Xếp dọc, cách nhau 100 px.

### Thẻ ba cột giới thiệu
- Cột trái: ảnh lớn, đáy có danh sách `(01) …` ngăn bằng đường kẻ.
- Cột giữa: ảnh dọc, đoạn chữ và nút mũi tên.
- Cột phải: thẻ viền chứa tiêu đề H3 và đoạn chữ ở đáy, hình minh họa tràn mép phải.

### Thẻ câu chuyện
- Thay thẻ lời chứng thực của Movora. Trái: chân dung nhân vật giả tưởng 245 × 300 px, tên và vai trò in hoa. Phải: trích dẫn cỡ H3 in hoa, rồi hai thẻ số liệu.
- Ghi rõ nhân vật và công ty là giả tưởng.

### FAQ
- Khung giữa khoảng 507 px trên desktop. Mỗi mục có viền chuyển sắc, phần đầu padding 40 px 20 px, câu hỏi cỡ Body lớn, icon `+` xoay thành `×` khi mở.
- Cuối danh sách là thẻ nền `--accent` với tiêu đề “Còn câu hỏi?” và nút mũi tên.

### Footer
- Padding 120 px 40 px 40 px.
- Khối liên hệ có viền tĩnh, padding 40 px. Tiêu đề H2 màu `--accent-text`, câu mô tả, mũi tên lớn 140 px ở góc phải.
- Ba cột liên kết trong ô viền tĩnh, padding 40 px, cao bằng nhau. Nhãn cột cỡ Body, độ mờ 0,7. Liên kết cỡ H3 in hoa.
- Wordmark MOVAGO khổng lồ ở độ mờ 0,5, rồi thanh đáy có đường kẻ trên và dòng bản quyền căn giữa.

### Màn hình sản phẩm (đối chiếu, dựng bảng giá, câu chuyện)
- Giữ cùng hình khối: góc vuông, viền mảnh, nền `--surface` cho bảng và panel.
- Bảng đối chiếu ưu tiên đọc: chữ 16 px, dòng cao tối thiểu 48 px, số căn phải, chữ số đều bề.
- Tiêu đề màn hình dùng H3. Không dùng cỡ H1 hay H2 trong vùng làm việc.

## Chuyển động

- Cuộn có quán tính cho toàn trang như thành phần Smooth Scroll của Movora: Lenis với `lerp` 0,1 cho chuột và trackpad. Cảm ứng giữ cuộn gốc của hệ điều hành. Tạm dừng khi intro hoặc menu khoá trang; drawer, modal, menu và bảng tràn ngang vẫn cuộn riêng. Tắt khi bật `prefers-reduced-motion`.
- **Mở đầu hero**, đo từ bản clone Movora. Chạy mỗi khi vào trang chủ; lần đầu tải trang thì chạy ngay khi intro MOV · A · GO → MOVE · AI · GO rút đi.
  1. Wordmark rơi từ −250 px và hiện dần, lò xo 1,6 s, độ nảy 0,4.
  2. Container rơi từ trên màn hình xuống sau 0,4 s, lò xo stiffness 150 · damping 20 · mass 2,8, vượt khoảng 17% rồi nảy về. Sau đó đung đưa ±0,45° quanh móc cẩu.
  3. Badge, câu chính, nút và dòng đội trượt lên 80 px trong 0,8 s, `cubic-bezier(0.44, 0, 0.56, 1)`, lệch nhau 0,08 s. Thẻ INV-095 vào sau cùng, lúc 1,2 s.
  4. Khi cuộn qua hero, container trôi xuống thêm 100 px.
- Lò xo viết bằng `linear()` lấy mẫu từ phương trình lò xo, có `cubic-bezier` dự phòng cho trình duyệt cũ.
- Nav trượt lên khi cuộn xuống quá 160 px và quay lại khi cuộn lên.
- Phần tử xuất hiện khi cuộn tới: mờ dần và trượt lên 24 px trong 0,6 s. Các thẻ cùng nhóm lệch nhau 0,08 s.
- Tôn trọng `prefers-reduced-motion`: tắt rơi, đung đưa, trượt và cuộn mượt, chỉ giữ đổi độ mờ.

## Gợi ý ghép phần cho trang chủ Movago

| Phần Movora | Phần Movago |
| --- | --- |
| Hero: wordmark khổng lồ, vật thể 3D, câu chính, nút | Wordmark MOVAGO, container MovaGo treo đè lên wordmark (trắng ở theme tối, navy ở theme sáng), slogan, nút, thẻ kết quả INV-095 ở góc phải |
| Dải logo đối tác | Các kênh chứng từ và công nghệ (email, Zalo, PDF, TMS, Vercel…) |
| About: ba thẻ giới thiệu | Vấn đề ba nguồn: hóa đơn, hồ sơ lô, bảng giá |
| Services: hàng đánh số | Ba kết quả: Khớp, Có chênh lệch, Thiếu căn cứ |
| Compliance: danh sách và thẻ số liệu | Kiểm soát và số liệu có nhãn nguồn |
| Process: dải nhấn tràn viền | Cách Movago hoạt động trong ba bước |
| Testimonial | Câu chuyện INV-095 qua nhân vật giả tưởng |
| FAQ | Hỏi đáp cho giám khảo và khách hàng |
| Blog | Bỏ hoặc thay bằng danh mục nguồn |
| Footer | Liên hệ đội Odylytics, liên kết trang, wordmark |

## Nên và không nên

### Nên
- Giữ một khung nội dung và một bộ khoảng cách cho mọi phần.
- Dùng màu nhấn cho điểm cần chú ý nhất, không rải đều.
- Mỗi trang chỉ có một dải nhấn tràn viền.
- Kiểm tra tiêu đề tiếng Việt in hoa ở cả ba breakpoint.

### Không nên
- Không bo góc, không dùng bóng đổ, không dùng nút dạng viên thuốc.
- Không dùng màu nhấn cho đoạn chữ dài.
- Không chép ảnh, logo, chữ hay lời chứng thực của Movora.
- Không dùng tiêu đề H1 hoặc H2 trong vùng làm việc của sản phẩm.
