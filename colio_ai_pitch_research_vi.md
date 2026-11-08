# Movago · Kịch bản thuyết trình và hỏi đáp

Dùng cùng [nội dung 10 slide](colio_ai_noi_dung_slide.md). [Brief](colio_ai_project_brief.md) giữ phạm vi MVP và số liệu minh họa. [Nghiên cứu bài toán kinh doanh](nghien_cuu_tung_slide/colio_ai_business_problems.md) giữ căn cứ và giới hạn của từng nhận định.

## Lời thuyết trình theo slide

| Slide | Lời nói gợi ý |
|---|---|
| **01 · Movago** | “Khi nhận hóa đơn cước, kế toán cần biết khoản nào khớp với lô và giá đã duyệt, khoản nào cần hỏi lại. Movago đưa câu trả lời và chứng từ gốc vào cùng một chỗ.” |
| **02 · Ba nguồn căn cứ** | “Chứng từ ghi số tiền đang được yêu cầu. Hồ sơ lô ghi dịch vụ và điều kiện. Pricing giữ mức đã duyệt. Lacco và Flexport mô tả các bước bàn giao và kiểm tra này ở TP.HCM. Pilot sẽ đo phần thao tác còn phải làm tay.” |
| **03 · Khách hàng đầu tiên** | “Chúng tôi bắt đầu với forwarder hàng biển vừa tại TP.HCM có nhóm công nợ và xuất được dữ liệu lô. Kế toán dùng hằng ngày, còn pricing và vận hành bổ sung căn cứ. Kế toán trưởng hoặc CFO là người mua giả định.” |
| **04 · Điều kiện giá** | “Với biểu phí Maersk trên màn hình, cùng mã DHC nhưng container khô 20 feet và 40 feet chịu hai mức khác nhau. Đọc đúng số trên hóa đơn vẫn có thể đối chiếu sai nếu chọn nhầm loại container hoặc mốc hiệu lực.” |
| **05 · Một màn hình đối chiếu** | “Mỗi dòng sẽ hiện số trên chứng từ, mức kỳ vọng và nguồn của cả hai. Nếu chưa có giá được duyệt, kế toán biết chính xác cần bổ sung gì.” |
| **06 · Vai trò của AI** | “AI đọc trường và vị trí trên PDF, đồng thời gợi ý mã phí. Quy tắc đã duyệt chọn điều kiện và tính lại số tiền. Người phụ trách xác nhận trường mơ hồ và xử lý ngoại lệ.” |
| **07 · Luồng MVP** | “Ta tải một hóa đơn VND, một CSV lô và một CSV giá. Movago ghép đúng lô, so từng dòng và xuất kết quả kiểm tra. Việc duyệt chi tiếp tục theo thẩm quyền của doanh nghiệp.” |
| **08 · Demo** | “Cước chính khớp. Riêng phí chứng từ chênh 800.000 đồng trước thuế. Tôi mở dòng gốc trên hóa đơn và dòng giá đã duyệt rồi chuyển cho người phụ trách kiểm tra xem có phê duyệt bổ sung không.” |
| **09 · Đo hiệu quả** | “Pilot so với quy trình đang dùng, gồm cả thời gian sửa trường và duyệt ngoại lệ. Kịch bản giảm từ 15 còn 9 phút ở 1.000 hóa đơn giải phóng 100 giờ/tháng, tương đương 6 triệu đồng theo giả định. Tác động thực tế sẽ được đo.” |
| **10 · Khác biệt cần chứng minh** | “Khách có thể dùng tính năng sẵn trong hệ thống hoặc mua công cụ đối chiếu chuyên biệt. Chúng tôi sẽ so trên hồ sơ của họ, bắt đầu từ một tuyến, đo thời gian thiết lập, công kiểm tra và chất lượng phát hiện.” |

## Demo khoảng 3 phút

1. **0:00–0:40.** Tải `INV-095`, `SHP-001` và `RATE-V3`. Hiện nhà cung cấp, lô và phiên bản giá được chọn.
2. **0:40–1:35.** Mở cảnh báo **+800.000 đồng trước thuế**. Chỉ `INV-095` trang 1, dòng DOC và `RATE-V3` dòng 12. Hỏi có phê duyệt bổ sung cho lô hay không.
3. **1:35–2:15.** Tải lại cùng PDF dưới tên khác. Hiện bản đã ghi nhận. Để xác nhận đã trả, cần sổ công nợ hoặc lịch sử chi.
4. **2:15–3:00.** Bấm **Yêu cầu xác minh**, ghi lý do và xuất kết quả. Nếu còn thời gian, mở hồ sơ đối chứng có phê duyệt bổ sung để giải thích cách đóng ngoại lệ.

[Luồng nghiệp vụ và đáp án từng ca](nghien_cuu_tung_slide/colio_ai_hoat_dong_the_nao.md)

## Hỏi đáp

**Có số liệu chứng minh forwarder thường trả sai không?** Nguồn công khai xác nhận bước đối chiếu và cơ chế phát sinh sai lệch. Nhóm sẽ dùng hồ sơ có nhãn để đo tỷ lệ, mức tiền và nguyên nhân. Con số 800.000 đồng là ca giả lập.

**Vì sao cần AI nếu đã có Excel hoặc TMS?** Dùng AI ở bước đọc PDF và gợi ý mã phí. Khi khách đã xuất được dữ liệu cấu trúc, ưu tiên đọc trực tiếp. Giá trị tăng thêm được đo trên quy trình TMS hoặc Excel khách đang sử dụng.

**Nếu hóa đơn có phí cao hơn nhưng hợp lệ thì sao?** Chuyển người phụ trách xác minh. Khi có phê duyệt bổ sung đúng lô, đính kèm căn cứ, đối chiếu lại và lưu lịch sử.

**Kế toán có thể dùng debit note thay hóa đơn không?** Pilot xác định chứng từ nào thực sự có trước lúc duyệt và cách liên kết với chứng từ phát hành sau. Demo dùng PDF hóa đơn, một lô, tiền VND và giá trước thuế.

**Thị trường bao nhiêu và bán cho ai?** Ước tính ngành dùng để tìm địa bàn. Quy mô có thể phục vụ cần lọc theo phương thức vận tải, khối lượng, dữ liệu có thể lấy và bước đối chiếu còn thiếu. Người mua dự kiến là kế toán trưởng hoặc CFO. Pilot cần xác minh ngân sách và mức sẵn sàng trả.

**Đo lợi ích tài chính thế nào?** Ghi riêng giá trị giờ giải phóng, chênh lệch được gắn cờ, khoản xác nhận sai và khoản thực sự tránh chi hoặc thu hồi. Khi tính giá trị ròng, trừ chi phí thiết lập và vận hành.
