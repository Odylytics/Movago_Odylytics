# Movago · Brief dự án

**KTC Ideathon · 08/11/2026 · Đề xuất cần kiểm chứng**

> Move smarter. Go safer.

Movago hỗ trợ kế toán công nợ kiểm tra từng khoản cước trước khi thanh toán. Công cụ ghép **chứng từ đề nghị chi, hồ sơ lô và bảng giá đã duyệt**, tính lại các khoản có đủ căn cứ và đưa chênh lệch kèm bằng chứng cho người xác minh. Mục tiêu thử nghiệm là giảm thời gian đối chiếu và giữ chất lượng kiểm soát.

## 1. Bài toán và khách hàng

Giả thuyết ưu tiên là kế toán mất công tìm đủ ba nguồn, rồi phải hỏi lại pricing hoặc operations khi không rõ điều kiện tính phí. Sai loại container, sai phiên bản giá hoặc thiếu phê duyệt bổ sung có thể dẫn đến chênh lệch. Quy trình đối chiếu xuất hiện trong mô tả công việc của Lacco và Flexport tại TP.HCM. Tần suất, tác động và cách phần mềm hiện có xử lý là nội dung pilot. [Nghiên cứu và ma trận bằng chứng](nghien_cuu_tung_slide/colio_ai_business_problems.md)

| Vai trò | Phạm vi đề xuất |
|---|---|
| Doanh nghiệp thử nghiệm | Forwarder hàng biển quy mô vừa tại TP.HCM, có nhóm công nợ và xuất được hồ sơ lô. |
| Người dùng và xác minh | AP kiểm tra. Operations xác nhận lô và dịch vụ. Pricing xác nhận phiên bản giá hoặc khoản phát sinh. |
| Người mua dự kiến | Kế toán trưởng hoặc CFO, phối hợp với trưởng vận hành. IT hoặc người phụ trách dữ liệu quyết định khả năng triển khai. |
| Đối tượng phù hợp nhất | Một nhóm AP, một tuyến hoặc nhóm phí và một đến hai nhà cung cấp. Ưu tiên nơi có hồ sơ lặp lại và bước đối chiếu còn thực hiện ngoài phần mềm. |

## 2. MVP và tiêu chí nghiệm thu

**Đầu vào.** Một hóa đơn cước PDF bằng VND cho một lô, CSV hồ sơ lô và CSV bảng giá do người phụ trách duyệt. Chọn vài mã phí đơn giá cố định, đối chiếu trên cùng tiền tệ và cơ sở trước thuế. Khi đơn vị nhận debit note trước lúc duyệt, xác định định danh và quan hệ với hóa đơn của cùng khoản trước khi bổ sung mẫu này vào pilot.

1. Trích nhà cung cấp, số và ngày hóa đơn, mã lô hoặc B/L, tiền tệ, dòng phí, tổng trước thuế, thuế và tổng ghi trên chứng từ. Lưu vị trí gốc của trường quan trọng.
2. Ghép lô bằng tham chiếu và nhà cung cấp. Chọn mã phí, đơn vị và phiên bản bảng giá theo điều kiện đã duyệt. Trường mờ hoặc nhiều ứng viên chuyển người kiểm tra.
3. Kiểm tra phép cộng và đối chiếu mức kỳ vọng theo từng dòng. So tệp gửi lại với lịch sử đã nhập. Xác minh đã chi cần dữ liệu sổ công nợ hoặc bằng chứng thanh toán.
4. Hiển thị **Khớp trong phạm vi kiểm tra**, **Có chênh lệch** hoặc **Thiếu căn cứ**, kèm nguồn hai phía. Ghi người và lý do xác minh, rồi xuất CSV. Phê duyệt chi thuộc quy trình của doanh nghiệp.

**Nghiệm thu demo.** Chạy ca khớp, lệch giá, thiếu căn cứ và bản gửi lại. Mỗi ca có kết quả dự kiến và nguồn mở được. Ca chính `INV-095` chênh **+800.000 đồng trước thuế** ở phí chứng từ và cần pricing xác minh. Xem [luồng chi tiết và ca kiểm thử](nghien_cuu_tung_slide/colio_ai_hoat_dong_the_nao.md) và [nguồn mẫu chứng từ](nghien_cuu_tung_slide/nguon_du_lieu_chung_tu_colio.md).

**Mở rộng sau khi kiểm chứng.** Xem xét XML có cấu trúc, debit note nhiều mẫu, hóa đơn gộp lô, credit note hoặc hóa đơn điều chỉnh, D&D, đối chiếu đa tiền tệ và tích hợp TMS/ERP theo nhu cầu khách hàng. Demo mô phỏng bước kiểm tra nội bộ. Nếu thử XML, xác minh định dạng và liên kết giữa chứng từ gốc, bản điều chỉnh và bản thay thế. [Nghị định 254/2026/NĐ-CP](https://vanban.chinhphu.vn/?classid=1&docid=218689&pageid=27160&typegroupid=4) · [Thông tư 91/2026/TT-BTC](https://congbao.chinhphu.vn/van-ban/thong-tu-so-91-2026-tt-btc-470171.htm)

## 3. Pilot và cách ra quyết định

### Khảo sát trước khi xây thêm

Phỏng vấn 5–10 người ở AP, operations, pricing và người có ngân sách. Nhờ họ đi qua hồ sơ gần nhất thay vì ước lượng chung. Ghi sản lượng, công cụ hiện tại, thời gian tìm đủ ba nguồn, người xử lý ngoại lệ và khoản tiền thực sự điều chỉnh. Hỏi khách đã có những tính năng đối chiếu nào và bước nào còn thực hiện bên ngoài. Tìm đầu mối qua [danh bạ VLA](https://vla.com.vn/danh-sach-hoi-vien/) và [danh bạ HLA](https://www.hla-hcm.vn/danh-sach-hoi-vien/).

### Chạy pilot

1. Lấy 10–20 bộ đã ẩn thông tin để khảo sát. Khi đủ điều kiện, mở rộng khoảng 30–100 bộ có quyền sử dụng. Dùng một nhóm hồ sơ liên tiếp để đo thời gian và độ bao phủ. Dùng bộ ca ngoại lệ có chủ đích để thử quy tắc. Báo cáo mẫu thật và ca giả lập riêng.
2. Nhờ người nghiệp vụ xác nhận lô, phiên bản giá, dòng phí và kết quả. Gán riêng các nhãn sai phí, phí hợp lệ, thiếu căn cứ và nghi trùng. Tách bộ cấu hình khỏi bộ đánh giá, ưu tiên giữ lại mẫu từ bố cục chưa dùng.
3. So quy trình thực tế và quy trình có Movago trên nhóm ca tương đương. Đảo thứ tự hoặc chia người duyệt để giảm hiệu ứng nhớ. Bấm giờ cả tải file, sửa kết quả trích và duyệt. Ghi thời gian chờ phản hồi riêng.
4. Chốt ngưỡng cùng người mua trước thử nghiệm. Mốc thảo luận là giảm ít nhất 30% phút thao tác trung vị trên hồ sơ trong phạm vi, các cảnh báo tiền có căn cứ mở được và chạy đủ các ca trọng yếu. Xem từng lỗi bỏ sót hoặc hồ sơ hợp lệ bị giữ nhầm. Nếu khâu chờ chiếm phần lớn thời gian, đánh giá lại ưu tiên giữa trích xuất và luồng chuyển ngoại lệ.

| Chỉ số | Cách đọc |
|---|---|
| Thời gian và độ bao phủ | Phút thao tác trung vị và trung bình, giờ chờ, tỷ lệ hồ sơ đủ ba nguồn và tỷ lệ dòng có thể đối chiếu. Công bố cả hồ sơ ngoài phạm vi. |
| Chất lượng đọc | Số trường quan trọng trích đúng trên số trường có nhãn, tách theo trường và bố cục. |
| Chất lượng kiểm tra | Precision = cảnh báo đúng / toàn bộ cảnh báo. Recall = sai lệch bắt được / toàn bộ sai lệch thật đã gán nhãn. Công bố tử số, mẫu số và số lỗi bỏ sót theo loại. Nếu mẫu số bằng 0, ghi chưa tính được. |
| Tác động tài chính | Theo dõi riêng chênh lệch được gắn cờ, khoản xác nhận sai và khoản đã điều chỉnh, tránh chi hoặc thu hồi. |

**Điều kiện dữ liệu.** Thống nhất quyền sử dụng, quyền truy cập, thời hạn lưu, trường được gửi tới nhà cung cấp AI và cách xóa dữ liệu. Khi ẩn danh, giữ khóa liên kết nhất quán giữa ba nguồn. Dữ liệu dùng trong pitch là giả lập. [Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15](https://vanban.chinhphu.vn/?docid=214590&pageid=27160) · [Nghị định 356/2025/NĐ-CP](https://vanban.chinhphu.vn/?docid=216387&pageid=27160)

## 4. Giá trị kinh tế và mô hình bán thử

**Kịch bản minh họa dùng trong pitch.** 1.000 hóa đơn/tháng, trung bình giảm từ 15 còn 9 phút mỗi hóa đơn. Phần thời gian giải phóng là **100 giờ/tháng**. Với 60.000 đồng/giờ, giá trị thời gian là **6 triệu đồng/tháng** trước chi phí. Nếu chỉ giảm 3 phút hoặc giảm tới 9 phút, giá trị tương ứng là 3 hoặc 9 triệu đồng/tháng. Các số là giả định.

Giá trị ròng ước tính bằng giá trị thời gian giải phóng cộng khoản tránh chi hoặc thu hồi đã xác nhận, rồi trừ thuê bao, thiết lập, chuẩn hóa giá, tích hợp và chi phí vận hành tăng thêm. Tách lợi ích năng lực xử lý khỏi khoản tiết kiệm tiền mặt. Tránh tính hai lần thời gian duyệt đã nằm trong số phút đo.

**Giả thuyết bán thử.** Thuê bao theo số hóa đơn duy nhất xử lý, với phí thiết lập khi cần cấu hình riêng. Nếu chi phí sử dụng quy đổi là 3 triệu đồng/tháng, kịch bản trên cần giảm trung bình 3 phút/hóa đơn để cân bằng theo giá trị thời gian. Đề nghị pilot có KPI và xác nhận người mua, ngân sách và khả năng trả phí trước khi ước lượng phân khúc có thể phục vụ.

**Đối chứng cạnh tranh.** So trực tiếp với quy trình TMS/ERP, bảng tính và luồng AP đang dùng. Thử xem Movago có rút ngắn thời gian thiết lập và đối chiếu trên cùng bộ hồ sơ, với nguồn giá và vị trí chứng từ truy được hay không. Ghi riêng phần kiểm tra với giá hợp đồng và phần so với chi phí dự ghi trong TMS. Hai căn cứ có thể khác nhau. [Ma trận cạnh tranh và điều kiện đổi ưu tiên](nghien_cuu_tung_slide/colio_ai_business_problems.md)

## 5. Kế hoạch Ideathon

| Mốc | Kết quả cần có |
|---|---|
| 7–8/11 | Giả thuyết bài toán, đầu mối phỏng vấn và bộ hồ sơ demo. |
| 9/11 | Schema, bảng giá đã duyệt cho ca demo và bộ đáp án kiểm thử. |
| 10–11/11 | Luồng tải, đối chiếu, mở bằng chứng, xác minh và xuất báo cáo. |
| 12/11 | Chạy ca kiểm thử, rà false positive/false negative và tập demo. |
| 13/11 | Chốt deck, video và hồ sơ nộp. Hạn 23:59 theo thông tin BTC được cung cấp trong brief ban đầu. |

[Deck 10 slide](colio_ai_noi_dung_slide.md) · [Lời thuyết trình, demo và hỏi đáp](colio_ai_pitch_research_vi.md)

**Tham chiếu ngành.** Conlio là một nguồn tham khảo về kiểm tra cước. [Mô tả dịch vụ Conlio](https://www.conlio.com/terms-conditions)
