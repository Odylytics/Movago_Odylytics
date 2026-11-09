# Quy tắc thiết kế website demo

## Tên và slogan

- Tên dự án là **Movago**. Slogan là **Move smarter. Go safer.**
- Cách kể tên đề xuất là **MOV · A · GO**. **MOV** lấy ba chữ đầu của **MOVE**, gợi việc vận chuyển và dẫn vào *Move smarter*. **GO** giữ nguyên, gợi bước tiếp theo sau khi kiểm tra và dẫn vào *Go safer*.
- Animation mở đầu của web kể **A** là **AI** (MOVE · AI · GO) theo yêu cầu của người dùng ngày 09/11/2026. Khi cần giải thích sâu hơn, có thể nói thêm việc AI phục vụ là **Audit**, tức đối chiếu hóa đơn cước với hồ sơ lô và mức giá đã duyệt trước khi chi. [Hướng dẫn kiểm tra hóa đơn vận tải của GSA](https://www.gsa.gov/policy-regulations/policy/transportation-management-policy/transportation-invoice-audit)
- Trong ngữ cảnh Movago, *Go safer* nói về việc có căn cứ để giảm rủi ro chi sai. Khi minh họa, dùng ca giả lập `INV-095`, trong đó kế toán thấy khoản chênh lệch và kiểm tra chứng từ trước khi chuyển sang bước duyệt chi.

## Cách dùng tài liệu tham chiếu

| Nguồn | Phần cần giữ |
| --- | --- |
| Bảng màu do người dùng gửi | Năm mã HEX và vai trò màu bên dưới. Ice Blue là nền mặc định của demo. |
| Yêu cầu trực tiếp của người dùng | Bộ ba font Hagrid Heavy, Acumin Pro và Source Sans Pro theo mục kiểu chữ bên dưới (09/11/2026). |
| [Mẫu Dimension](DESIGN.md) | Bố cục, nhịp khoảng trắng, hình khối và cách phân lớp bề mặt. Áp dụng lại bằng bảng màu và font của demo. |
| Bảng nhận diện Movago | Tham khảo nhánh Classic Blue và hình mũi tên. Khi viết nội dung, lấy tên và slogan ở mục trên. |

## Màu và kiểu chữ

| Màu | HEX | Vai trò |
| --- | --- | --- |
| Deep Navy | `#0B1F44` | Màu chủ đạo. Dùng cho tiêu đề, chữ chính và nút chính khi cần nhãn trắng. |
| Electric Blue | `#2878FF` | Màu nhấn. Dùng có chọn lọc cho chỉ báo tương tác, viền focus, biểu tượng và chi tiết cần thu hút chú ý. |
| Ice Blue | `#EAF2FF` | Nền trang mặc định. |
| White | `#FFFFFF` | Bề mặt nổi như thẻ, panel và vùng nội dung. Có thể dùng cho chữ trên Deep Navy. |
| Slate Gray | `#64748B` | Chữ phụ trên nền White. Trên nền Ice Blue, dùng Deep Navy cho chữ cỡ thường. |

- Kiểu chữ chốt ngày 09/11/2026:

| Vai trò | Font | Độ đậm | Cỡ | Nhịp |
| --- | --- | --- | --- | --- |
| Display | Hagrid Heavy | Heavy | 56–88 px | Line-height 0.95–1.0, tracking −2% đến −3% |
| Main / UI | Acumin Pro | Regular, Medium, Semibold | 14–40 px | Tracking −1% cho heading, 0% cho UI |
| Body | Source Sans Pro | Regular, Semibold | 14–18 px | Line-height 1.45–1.6 |

- Hagrid và Acumin Pro là font có bản quyền. Web hiển thị đúng khi máy đã cài font hoặc khi nạp từ kit có giấy phép, ví dụ Adobe Fonts với tên `acumin-pro`. Khi thiếu, cả hai lùi về Source Sans 3, bản kế tiếp của Source Sans Pro trên Google Fonts. Kiểm tra dấu tiếng Việt của Hagrid trước khi dùng cho tiêu đề tiếng Việt.
- Khai báo năm màu theo vai trò ở một chỗ khi triển khai. Đo tương phản trên nền thực tế, kể cả khi bề mặt trong mờ. Đặt ngưỡng tối thiểu 4,5:1 cho chữ cỡ thường. White và Deep Navy đều chỉ đạt khoảng 4:1 khi đặt trên Electric Blue, nên dùng cặp Deep Navy và White cho nút có nhãn cỡ thường.
- Nếu có trạng thái như **Khớp**, **Có chênh lệch** và **Thiếu căn cứ**, luôn hiển thị nhãn chữ để người dùng nhận biết được kết quả.

## Chi tiết lấy từ Dimension

- Giữ bố cục thoáng, nội dung chủ yếu căn trái. Lấy khung nội dung khoảng 1200 px và khoảng cách 64–80 px giữa các phần làm mốc cho trang giới thiệu trên desktop.
- Khi có điều hướng nổi, giữ khoảng hở với mép màn hình và dùng viền mảnh. Dùng dáng pill cho nút và mục điều hướng phù hợp, bo khoảng 10 px cho ô nhập và 24 px cho thẻ. Ưu tiên độ phân tách giữa các bề mặt và viền mảnh khi cần, với bóng đổ nhẹ hoặc bề mặt trong mờ có chọn lọc.
- Khi cần giới thiệu sản phẩm, có thể dùng bố cục hai cột chữ và ảnh giao diện như Dimension. Trên màn hình hẹp, xếp lại nội dung theo thứ tự đọc. Với màn hình đối chiếu cước, ưu tiên khả năng đọc bảng, trạng thái và căn cứ từng dòng.
- Lấy độ tương phản kiểu chữ và nhịp bố cục từ Dimension. Dùng bộ font và năm màu đã chốt khi diễn giải các ví dụ, kể cả các đoạn CSS và prompt trong mẫu. Các màu nền tối, tím, gradient cam và font DM Sans, Geist thuộc ví dụ gốc.
