# Kế hoạch demo Movago · KTC Ideathon

Đội **Odylytics** · Đề xuất ngày 08/11/2026

Demo dành cho giám khảo đóng vai kế toán công nợ của một forwarder hàng biển. Sau một lượt thử, người xem có thể chỉ ra khoản nào chênh, mở hai căn cứ và ghi lý do chuyển xác minh. Hai lối vào **Xem tình huống** và **Tự thử hồ sơ mẫu** dùng chung một hồ sơ và một bộ quy tắc. [Nghiên cứu các demo tham chiếu](MOVAGO_DEMO_RESEARCH.md)

## Lô hàng và nguồn công khai

| Nguồn | Thông tin công khai | Dùng cho demo |
| --- | --- | --- |
| Lô Singapore → Cát Lái | Headway công bố lô hàng lẻ (LCL) gồm 8 thùng đồng phục và vật phẩm học tập, 136 kg. [Headway](https://headway.com.vn/vn/headway-jsc-trien-khai-giai-phap-lcl-door-to-door-cho-lo-hang-dong-phuc-tu-singapore-ve-viet-nam.html) | Tham khảo tuyến và bối cảnh nhập hàng. `SHP-001` là lô nguyên container giả lập trên cùng tuyến. |
| Lô Manila → Cát Lái | Vantage Logistics công bố lô máy phát điện quá khổ, 14 kiện, nhập về Việt Nam tháng 10/2024. Project Shipping công bố dịch vụ FCL trên tuyến này có container khô 20 và 40 feet. [Lô thực tế của Vantage](https://vantage-logistics.com/project/successfully-transported-generator-set-from-philippines-to-binh-duong-viet-nam) · [Dịch vụ FCL của Project Shipping](https://projectshipping.vn/cuoc-van-chuyen-duong-bien-tu-cang-manila-north-and-south-den-cang-cat-lai/) | Dựng lô container khô giả lập trên tuyến Manila → Cát Lái để thử điều kiện theo kích cỡ container. |
| Mẫu chứng từ | Maersk có mẫu hóa đơn cước, CMA CGM Việt Nam có hướng dẫn lập vận đơn và cổng CMIT dùng số container, booking hoặc B/L để tra hóa đơn theo lô. [Mẫu hóa đơn Maersk](https://www.maersk.com/~/media_sc9/maersk/news/advisories/files/2024/freight-invoice-template.pdf) · [CMA CGM Việt Nam](https://www.cma-cgm.com/local/vietnam/news/140/shipping-instruction-si-process) · [Cổng hóa đơn CMIT](https://einvoice.cmit.com.vn/) | Tham khảo cấu trúc và khóa ghép lô. Tự dựng chứng từ mang nhãn **Hồ sơ giả lập**. |
| Biểu phí ONE Việt Nam | Thông báo áp dụng từ 01/04/2026 có mã THD và DOF. THD theo loại container và có nhóm giá riêng nếu nhập qua Cái Mép về TP.HCM. [Thông báo của ONE Việt Nam](https://vn.one-line.com/sites/vietnam/files/2026-03/Customer%20Advisory%20for%20Surcharge%20-%20Vietnam.pdf) | Dùng các dòng công bố tại mốc hiệu lực để làm căn cứ giá cho ca Manila giả lập. |

Các lô thực tế trên có thông tin tuyến và hàng hóa công khai. Chưa tìm được bộ công khai đủ **hóa đơn cước, hồ sơ lô và mức giá đã duyệt của cùng một lô**. Bản demo dùng mã, hóa đơn và dữ liệu khách hàng giả lập. Nếu chạy pilot sau cuộc thi, xin một bộ đủ ba nguồn đã ẩn danh và được doanh nghiệp đồng ý cho sử dụng. [Danh mục chứng từ và checklist pilot](nghien_cuu_tung_slide/nguon_du_lieu_chung_tu_colio.md)

## Bộ ca cần chuẩn bị

| Ưu tiên | Ca | Đầu vào và kết quả mong đợi |
| --- | --- | --- |
| Trình chiếu chính | `INV-095` · Singapore → Cát Lái | Lô `SHP-001`, một container khô 20 feet, một B/L, mốc tính giá 06/11/2026, bảng giá giả lập `RATE-V3`. Cước chính **8.000.000 đ** khớp. Phí DOC **1.300.000 đ** so với **500.000 đ**, chênh **+800.000 đ trước thuế**. Mở hóa đơn trang 1 và bảng giá dòng 12. |
| Tự thử | Khớp | Tạo biến thể độc lập của ca chính với DOC **500.000 đ**. Hiện hai dòng khớp, tổng trước thuế **8.500.000 đ**. |
| Tự thử | Thiếu giá DOC | Tạo biến thể thiếu dòng giá DOC. Cước chính vẫn khớp. Dòng DOC hiện **Thiếu căn cứ**, để trống mức kỳ vọng và chênh lệch. |
| Tự thử | Bản gửi lại | Nạp lại chính PDF `INV-095` đã đổi tên sau khi đã nhận bản đầu. So dấu vân tay tệp và chỉ ra bản đã tiếp nhận. |
| Minh họa điều kiện giá | `INV-VN-020` · Manila → Cát Lái | Lô giả lập ngày 15/04/2026, một B/L, một container khô 20 feet, không qua Cái Mép. Giả định dùng biểu phí ONE công bố làm căn cứ đã duyệt cho lô mẫu. Hóa đơn giả lập ghi THD **4.800.000 đ** so với **3.000.000 đ**, chênh **+1.800.000 đ trước VAT**. DOF **950.000 đ/vận đơn** khớp. [Biểu phí ONE](https://vn.one-line.com/sites/vietnam/files/2026-03/Customer%20Advisory%20for%20Surcharge%20-%20Vietnam.pdf) |

Giữ các ca độc lập khi chạy lại, ngoại trừ ca bản gửi lại cần lịch sử tiếp nhận. Trong ca `INV-VN-020`, **4.800.000 đ** là mức ONE công bố cho container khô 40 feet ở cùng nhóm tuyến. Tình huống áp mức đó vào container 20 feet là dữ liệu kiểm thử do nhóm dựng.

## Bộ tệp chuẩn bị trước khi dựng web

| Tệp dự kiến | Nội dung tối thiểu |
| --- | --- |
| `INV-095.pdf` | Một trang hóa đơn giả lập với số hóa đơn, nhà cung cấp, mã lô hoặc B/L, mã phí, số lượng, đơn vị và số tiền trước thuế. |
| `invoice-lines.csv` | Dòng phí đã trích sẵn, số tiền và vị trí trên PDF. Giá trị khớp từng dòng với bản PDF. Giao diện ghi rõ bước trích xuất dùng dữ liệu mẫu. |
| `SHP-001.csv` | Mã lô, nhà cung cấp, B/L, tuyến, loại và số lượng container, mốc tính giá. |
| `RATE-V3.csv` | Mã phí, đơn giá VND trước thuế, đơn vị tính, hiệu lực và điều kiện áp dụng. Khi tạo tệp, đặt hoặc đánh số dòng DOC sao cho vị trí nguồn khớp với dòng 12 trên demo. |
| Bảng đáp án theo ca | Dòng nào khớp, lệch hoặc thiếu căn cứ, số tiền kỳ vọng và vị trí nguồn. Dùng để kiểm tra kết quả khi chạy lại từng ca. |

## Kịch bản trình chiếu 3 phút

| Thời gian | Thao tác |
| --- | --- |
| 0:00–0:40 | Mở hồ sơ nạp sẵn. Chỉ nhanh ba nguồn và bấm **Chạy đối chiếu**. |
| 0:40–1:35 | Mở cảnh báo **+800.000 đ**. Cho thấy hai nguồn và phép tính **1.300.000 − 500.000** ngay cạnh nhau. |
| 1:35–2:15 | Nạp lại PDF đã đổi tên, chỉ ra bản đã nhận trong lịch sử. |
| 2:15–3:00 | Bấm **Yêu cầu xác minh**, ghi lý do mẫu và xuất báo cáo CSV. Cảnh báo chênh lệch vẫn hiển thị cùng trạng thái đã chuyển xác minh. |

**Thứ tự triển khai đề xuất.** Dựng và rà bộ tệp trước. Sau đó chạy thông ca `INV-095` từ đầu vào đến mở chứng từ và xuất báo cáo. Thêm chế độ hướng dẫn và các ca đối chứng sau khi ca chính đã chạy ổn.

**Nghiệm thu bản đầu.** Giám khảo có thể tự mở hồ sơ nạp sẵn mà không cần tài khoản, thấy đúng **+800.000 đ trước thuế**, mở được hai căn cứ và chạy lại demo từ trạng thái ban đầu. Kiểm tra thêm ca khớp, thiếu giá và PDF gửi lại theo bảng đáp án. [Quy tắc nghiệp vụ và ngoại lệ](nghien_cuu_tung_slide/colio_ai_hoat_dong_the_nao.md)
