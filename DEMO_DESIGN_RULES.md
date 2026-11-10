# Quy tắc thiết kế website demo

## Tên và slogan

- Tên dự án là **Movago**. Slogan là **Move smarter. Go safer.**
- Cách kể tên đề xuất là **MOV · A · GO**. **MOV** lấy ba chữ đầu của **MOVE**, gợi việc vận chuyển và dẫn vào *Move smarter*. **GO** giữ nguyên, gợi bước tiếp theo sau khi kiểm tra và dẫn vào *Go safer*.
- Animation mở đầu của web kể **A** là **AI** (MOVE · AI · GO) theo yêu cầu của người dùng ngày 09/11/2026. Khi cần giải thích sâu hơn, có thể nói thêm việc AI phục vụ là **Audit**, tức đối chiếu hóa đơn cước với hồ sơ lô và mức giá đã duyệt trước khi chi. [Hướng dẫn kiểm tra hóa đơn vận tải của GSA](https://www.gsa.gov/policy-regulations/policy/transportation-management-policy/transportation-invoice-audit)
- Trong ngữ cảnh Movago, *Go safer* nói về việc có căn cứ để giảm rủi ro chi sai. Khi minh họa, dùng ca giả lập `INV-095`, trong đó kế toán thấy khoản chênh lệch và kiểm tra chứng từ trước khi chuyển sang bước duyệt chi.

## Cách dùng tài liệu tham chiếu

| Nguồn | Phần cần giữ |
| --- | --- |
| Bảng nhận diện Color & Typography foundations do người dùng gửi (10/11/2026) | Sáu mã HEX, vai trò màu, quy tắc Transit Lime và vai trò từng font bên dưới. Ice Blue là nền mặc định của demo. |
| [Mẫu Dimension](DESIGN.md) | Bố cục, nhịp khoảng trắng, hình khối và cách phân lớp bề mặt. Áp dụng lại bằng bảng màu và font của demo. |
| Bảng nhận diện Movago | Tham khảo nhánh Classic Blue và hình mũi tên. Khi viết nội dung, lấy tên và slogan ở mục trên. |

## Màu và kiểu chữ

| Màu | HEX | Vai trò |
| --- | --- | --- |
| Deep Navy | `#0B1F44` | Màu neo tin cậy. Dùng cho logo, tiêu đề, chữ chính và bề mặt hero tối. |
| Electric Blue | `#2878FF` | Màu tương tác của sản phẩm. Dùng cho viền focus, liên kết, điều khiển đang bật và tương tác hệ thống. |
| Transit Lime | `#C8F65A` | Màu nhấn thương hiệu. Dùng cho CTA chính, điểm nhấn chiến dịch, tín hiệu chuyển động và khoảnh khắc thương hiệu. |
| Ice Blue | `#EAF2FF` | Nền trang mặc định và các phần lớn, tĩnh. |
| White | `#FFFFFF` | Thẻ, panel, form và vùng nội dung. Có thể dùng cho chữ trên Deep Navy. |
| Slate Gray | `#64748B` | Metadata, chú thích và chữ phụ trên nền White. Trên nền Ice Blue, dùng Deep Navy cho chữ cỡ thường. |

- Dùng Transit Lime cho CTA chính và lúc chuyển đổi, tiêu đề chiến dịch và tín hiệu chuyển động, điểm đánh dấu tuyến, tiến trình và mục đang chọn, cùng các chi tiết thương hiệu nhỏ, nhiều năng lượng.
- Giữ Transit Lime có kiểm soát: không dùng cho chữ nội dung trên nền White, không thay Electric Blue ở trạng thái focus, không dùng Lime một mình để báo lỗi, và luôn ghép Lime với nhãn Deep Navy.
- Kiểu chữ chốt ngày 10/11/2026:

| Vai trò | Font | Độ đậm | Cỡ | Dùng cho |
| --- | --- | --- | --- | --- |
| Logo / wordmark | Hagrid Heavy | Heavy | Theo artwork | Chỉ logo Movago và các lockup đã duyệt. Không dùng cho tiêu đề web, chiến dịch, giao diện, bảng hay chữ nội dung. |
| Display / UI | Acumin Pro | Regular, Medium, Semibold | 14–72 px | Hero, tiêu đề chiến dịch, điều hướng, nút, nhãn và giao diện sản phẩm. Tracking −1% đến −2,5% cho tiêu đề lớn. |
| Body | Source Sans Pro | Regular, Semibold | 14–18 px | Đoạn văn, ghi chú căn cứ, bảng, hóa đơn, chú thích và chữ hỗ trợ. Line-height 1,45–1,6. |

- Quy tắc màu × chữ: Transit Lime là màu nhấn, không phải màu để đọc. Chữ cần dễ đọc dùng Deep Navy trên Ice Blue hoặc White, hay White trên Deep Navy. Electric Blue dành cho liên kết, focus và tương tác hệ thống.
- Hagrid và Acumin Pro là font có bản quyền. Web hiển thị đúng khi máy đã cài font hoặc khi nạp từ kit có giấy phép, ví dụ Adobe Fonts với tên `acumin-pro`. Kit hiện tại `bao1nxh` mới có Hagrid. Khi thiếu Acumin Pro, chữ lùi về Source Sans 3, bản kế tiếp của Source Sans Pro trên Google Fonts.
- Khai báo sáu màu theo vai trò ở một chỗ khi triển khai. Đo tương phản trên nền thực tế, kể cả khi bề mặt trong mờ. Đặt ngưỡng tối thiểu 4,5:1 cho chữ cỡ thường. White và Deep Navy đều chỉ đạt khoảng 4:1 khi đặt trên Electric Blue, nên dùng cặp Deep Navy và White cho nút có nhãn cỡ thường.
- Nếu có trạng thái như **Khớp**, **Có chênh lệch** và **Thiếu căn cứ**, luôn hiển thị nhãn chữ để người dùng nhận biết được kết quả.

## Chi tiết lấy từ Dimension

- Giữ bố cục thoáng, nội dung chủ yếu căn trái. Lấy khung nội dung khoảng 1200 px và khoảng cách 64–80 px giữa các phần làm mốc cho trang giới thiệu trên desktop.
- Khi có điều hướng nổi, giữ khoảng hở với mép màn hình và dùng viền mảnh. Dùng dáng pill cho nút và mục điều hướng phù hợp, bo khoảng 10 px cho ô nhập và 24 px cho thẻ. Ưu tiên độ phân tách giữa các bề mặt và viền mảnh khi cần, với bóng đổ nhẹ hoặc bề mặt trong mờ có chọn lọc.
- Khi cần giới thiệu sản phẩm, có thể dùng bố cục hai cột chữ và ảnh giao diện như Dimension. Trên màn hình hẹp, xếp lại nội dung theo thứ tự đọc. Với màn hình đối chiếu cước, ưu tiên khả năng đọc bảng, trạng thái và căn cứ từng dòng.
- Lấy độ tương phản kiểu chữ và nhịp bố cục từ Dimension. Dùng bộ font và sáu màu đã chốt khi diễn giải các ví dụ, kể cả các đoạn CSS và prompt trong mẫu. Các màu nền tối, tím, gradient cam và font DM Sans, Geist thuộc ví dụ gốc.
