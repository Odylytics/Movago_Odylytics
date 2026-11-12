# Quy tắc thiết kế website demo

## Tên và slogan

- Tên dự án là **Movago**. Slogan là **Move smarter. Go safer.**
- Cách kể tên đề xuất là **MOV · A · GO**. **MOV** lấy ba chữ đầu của **MOVE**, gợi việc vận chuyển và dẫn vào *Move smarter*. **GO** giữ nguyên, gợi bước tiếp theo sau khi kiểm tra và dẫn vào *Go safer*.
- Animation mở đầu của web kể **A** là **AI** (MOVE · AI · GO) theo yêu cầu của người dùng ngày 09/11/2026. Khi cần giải thích sâu hơn, có thể nói thêm việc AI phục vụ là **Audit**, tức đối chiếu hóa đơn cước với hồ sơ lô và mức giá đã duyệt trước khi chi. [Hướng dẫn kiểm tra hóa đơn vận tải của GSA](https://www.gsa.gov/policy-regulations/policy/transportation-management-policy/transportation-invoice-audit)
- Trong ngữ cảnh Movago, *Go safer* nói về việc có căn cứ để giảm rủi ro chi sai. Khi minh họa, dùng ca giả lập `INV-095`, trong đó kế toán thấy khoản chênh lệch và kiểm tra chứng từ trước khi chuyển sang bước duyệt chi.

## Cách dùng tài liệu tham chiếu

Hướng thiết kế mới chốt ngày 12/11/2026: phong cách template Movora, theme tối làm mặc định, có thêm bản sáng, dùng bảng màu MovaGo. Mã trong `web/` được chuyển dần sang quy tắc này.

| Nguồn | Phần cần giữ |
| --- | --- |
| [Bộ nhận diện MovaGo trên Figma](https://www.figma.com/design/iZiC4AnBHGP3baNCUlAcdH/MovaGo?node-id=0-1) | Logo, sáu mã HEX và vai trò màu. Bảng Typography trên Figma vẫn ghi Acumin Pro và Source Sans Pro. Web dùng bộ font ở mục dưới. |
| [Mẫu Movora](DESIGN.md) | Bố cục, nhịp khoảng trắng, hình khối, cấu trúc thành phần và chuyển động. Áp dụng bằng màu và font trong file này. |

## Màu thương hiệu

| Màu | HEX | Vai trò |
| --- | --- | --- |
| Deep Navy | `#0B1F44` | Màu neo tin cậy. Logo, chữ chính ở bản sáng, thẻ nổi ở bản tối, thẻ trong dải nhấn. |
| Electric Blue | `#2878FF` | Màu tương tác của hệ thống. Vòng focus, gạch chân liên kết, điều khiển đang bật. |
| Transit Lime | `#C8F65A` | Màu nhấn thương hiệu, nhận vai trò của màu đỏ trong Movora. Ô icon của nút chính, dải nhấn tràn viền, mục đang chọn, tiến trình, điểm đánh dấu. |
| Ice Blue | `#EAF2FF` | Nền trang ở bản sáng. Gốc của màu chữ phụ ở bản tối. |
| White | `#FFFFFF` | Chữ chính ở bản tối. Thẻ và panel ở bản sáng. |
| Slate Gray | `#64748B` | Metadata và chú thích trên nền White ở bản sáng. |

Hai sắc nền tối dưới đây suy ra từ Deep Navy để có độ tối gần với Movora mà vẫn giữ sắc xanh của thương hiệu. Không thêm màu nào khác ngoài sáu màu thương hiệu, hai sắc này và các độ mờ của chúng.

| Sắc suy ra | HEX | Vai trò |
| --- | --- | --- |
| Night | `#071431` | Nền trang ở bản tối. |
| Pit | `#030A1A` | Thẻ, hàng, nav và bảng ở bản tối. Tối hơn nền, giống cách Movora đặt thẻ đen trên nền xám đậm. |

## Theme tối và sáng

Theme tối là mặc định. Nút chuyển trên nav ghi nhớ lựa chọn trong trình duyệt. Khai báo theme bằng thuộc tính `data-theme` trên thẻ `<html>`, và mọi thành phần chỉ đọc màu qua các token dưới đây.

| Token | Tối (mặc định) | Sáng | Dùng cho |
| --- | --- | --- | --- |
| `--bg` | Night `#071431` | Ice Blue `#EAF2FF` | Nền trang |
| `--surface` | Pit `#030A1A` | White `#FFFFFF` | Thẻ, hàng, nav, bảng |
| `--surface-2` | Deep Navy `#0B1F44` | Ice Blue `#EAF2FF` | Chip, ô nhập, hàng xen kẽ, thẻ lồng trong thẻ |
| `--text` | White `#FFFFFF` | Deep Navy `#0B1F44` | Tiêu đề và chữ chính |
| `--text-2` | Ice Blue 72% | Deep Navy 75% | Chữ phụ, nhãn cột, chú thích |
| `--line` | Ice Blue 16% | Deep Navy 14% | Viền tĩnh, đường kẻ |
| `--line-strong` | Ice Blue 55% | Deep Navy 45% | Cạnh sáng của viền chuyển sắc |
| `--accent` | Transit Lime | Transit Lime | Nền nhấn: ô icon nút, dải tràn viền, mục chọn |
| `--accent-ink` | Deep Navy | Deep Navy | Chữ và icon đặt trên nền Lime |
| `--accent-text` | Transit Lime | Deep Navy, kèm vạch Lime | Nhãn mục, số thứ tự, số liệu lớn |
| `--focus` | Electric Blue | Electric Blue | Vòng focus 2 px |
| `--link-line` | Electric Blue | Electric Blue | Gạch chân liên kết |

- **Lime ở bản tối** được dùng làm chữ cho nhãn ngắn, số thứ tự và số liệu lớn, vì đạt khoảng 14,6:1 trên Night. Không dùng Lime cho đoạn văn.
- **Lime ở bản sáng** không bao giờ là màu chữ, vì chỉ đạt 1,1:1 trên Ice Blue. Thay vào đó, chữ nhấn dùng Deep Navy và có vạch Lime phía sau giống bút dạ quang (`background: linear-gradient(transparent 62%, var(--accent) 62%)`). Hình ảnh bút dạ quang khớp với việc đánh dấu khoản cần kiểm tra trên hóa đơn.
- **Dải nhấn tràn viền** giữ nền Lime ở cả hai theme. Chữ trên dải là Deep Navy. Thẻ trong dải nền Deep Navy, chữ White, số thứ tự Lime.
- **Liên kết** giữ màu `--text` và có gạch chân Electric Blue 2 px. Electric Blue chỉ đạt 3,6:1 trên Ice Blue, chưa đủ cho chữ cỡ thường.
- **Viền chuyển sắc** đi từ `--line-strong` ở cạnh trên về trong suốt ở cạnh dưới.

## Trạng thái đối chiếu

Mỗi trạng thái luôn có nhãn chữ và hình riêng. Màu chỉ hỗ trợ.

| Trạng thái | Hình | Hiển thị |
| --- | --- | --- |
| **Khớp** | Chấm tròn | Viền `--line`, nền trong suốt, chữ `--text` |
| **Có chênh lệch** | Hình thoi | Nền Lime, chữ Deep Navy. Đây là khoản cần chú ý nhất, nên nhận màu nhấn. |
| **Thiếu căn cứ** | Ô vuông rỗng | Viền nét đứt `--text`, nền trong suốt, chữ `--text` |
| **Đã gửi xác minh** | Mũi tên | Viền Electric Blue, chữ `--text` |

Không dùng Lime đơn độc để báo lỗi. Hình thoi và nhãn chữ luôn đi cùng.

## Kiểu chữ

Đổi ngày 12/11/2026. Font cũ có hai vấn đề: Acumin Pro cần kit Adobe có giấy phép (kit `bao1nxh` hiện chỉ có Hagrid), còn Stack Sans của Movora thiếu nguyên âm tiếng Việt có dấu thanh. Ba font mới đều miễn phí theo giấy phép OFL trên Google Fonts và có đủ tiếng Việt.

| Vai trò | Font | Độ đậm | Dùng cho |
| --- | --- | --- | --- |
| Wordmark | Hagrid Heavy (Adobe Fonts, kit `bao1nxh`) | Heavy | Logo MovaGo và wordmark MOVAGO khổng lồ ở hero, footer và intro. Không dùng cho tiêu đề, giao diện hay chữ nội dung. |
| Display / UI | Archivo (biến thiên `wght` 100–900, `wdth` 62–125) | 600–800 cho tiêu đề in hoa, 500–600 cho nhãn, nav, nút | Tiêu đề H1–H3, nhãn mục, nav, nút, số liệu lớn, tiêu đề bảng |
| Body | Be Vietnam Pro | 400, 500, 600 | Đoạn văn, ghi chú căn cứ, ô bảng, chú thích. Thiết kế riêng cho dấu tiếng Việt. |
| Dữ liệu | JetBrains Mono | 500 | Mã chứng từ (`INV-095`, `RATE-V3`), số B/L, vị trí nguồn (“trang 1 · dòng DOC”), mã băm |

- Cỡ chữ, line-height và tracking theo thang chữ trong [mẫu Movora](DESIGN.md#thang-chữ). Archivo dùng `wdth` 100, riêng H1 có thể dùng 110–115.
- Ở chế độ VI, tăng line-height của tiêu đề in hoa (H1 1,12, H2 1,2, H3 1,3) để dấu không chạm dòng trên.
- Nạp font từ Google Fonts kèm `subset=vietnamese` và `display=swap`. Font dự phòng: `system-ui, sans-serif` và `ui-monospace, monospace`.

## Độ tương phản

Ngưỡng tối thiểu 4,5:1 cho chữ cỡ thường và 3:1 cho chữ lớn (từ 24 px, hoặc từ 18,7 px đậm) và thành phần giao diện. Số đo trên nền thực tế:

| Cặp màu | Tỉ lệ | Kết luận |
| --- | --- | --- |
| White trên Night / Pit | 18,2 / 19,8 | Đạt |
| Lime trên Night / Pit / Deep Navy | 14,6 / 15,8 / 13,0 | Đạt, chỉ cho nhãn ngắn và số |
| Ice Blue 72% trên Night | 8,7 | Đạt |
| Electric Blue trên Night | 4,5 | Đạt cho viền và focus |
| Deep Navy trên Lime | 13,0 | Đạt |
| Deep Navy trên Ice Blue / White | 14,4 / 16,2 | Đạt |
| Deep Navy 75% trên Ice Blue / White | 6,8 / 7,3 | Đạt |
| Slate Gray trên White | 4,8 | Đạt |
| Slate Gray trên Ice Blue | 4,2 | Chưa đạt cho chữ thường. Dùng Deep Navy 75%. |
| Electric Blue trên Ice Blue | 3,6 | Chỉ cho viền, focus, chữ lớn |
| Lime trên Ice Blue | 1,1 | Không dùng làm chữ |
| White hoặc Deep Navy trên Electric Blue | 4,0 | Không dùng cho nhãn cỡ thường |

Đo lại khi đặt chữ lên ảnh hoặc lên bề mặt trong mờ.
