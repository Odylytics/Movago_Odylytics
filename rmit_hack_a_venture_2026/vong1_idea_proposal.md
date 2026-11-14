# Khung Idea Proposal · Vòng 1

Tổng ngân sách: **1.500 từ**. Bài nộp viết bằng tiếng Anh, trừ khi thể lệ cho phép tiếng Việt. Mỗi mục ghi số từ dự kiến và các ý cần có. Số liệu chỉ lấy từ nguồn đã kiểm, ghi nguồn ngay trong câu hoặc chú thích.

**Tiêu đề:** Movago: Pre-payment verification for B2B freight payments
**Trụ cột:** Pillar 5, Trust Architecture & Financial Integrity (chính) · Pillar 2, Financial Infrastructure & Ecosystem Interoperability (phụ)
**Đội:** Odylytics

---

## 1. Problem (khoảng 300 từ)

- Mở bằng bối cảnh của đề: thanh toán số tăng nhanh, SIMO bảo vệ giao dịch của người dùng cá nhân. Ý chính: phía doanh nghiệp, sai sót và gian lận nằm ở **hóa đơn**, tức trước khi lệnh chuyển tiền tới ngân hàng.
- Ví dụ cụ thể: một hóa đơn cước có tổng cộng đúng nhưng một dòng phí sai giá. Ca INV-095: phí chứng từ 1.300.000 ₫ so với giá đã duyệt 500.000 ₫.
- Căn cứ trả tiền nằm ở ba nơi: hóa đơn, hồ sơ lô, bảng giá đã duyệt. Kế toán đối chiếu bằng tay.
- Số liệu đã có nguồn:
  - Kiểm toán cước ở nước ngoài thấy 3–6% hóa đơn có lỗi, 1–5% chi cước thu hồi được (Transportation Insight). Ghi rõ đây là số ở nước ngoài, Việt Nam chưa có số đo.
  - Chi phí xử lý trung vị 6 USD/hóa đơn (APQC).
  - Kim ngạch xuất nhập khẩu 10 tháng 2026 đạt 1.010,55 tỷ USD, +32,3% (Cục Thống kê). Đây là quy mô dòng tiền thanh toán cho logistics.
- **Còn thiếu:** một số liệu có nguồn về gian lận hoặc sai sót thanh toán B2B tại Việt Nam.

## 2. Solution and technology (khoảng 350 từ)

- Movago kiểm chứng từng khoản trước khi chi:
  1. Gom chứng từ về một hộp thư, dùng dấu vân tay SHA-256 để chặn file gửi trùng.
  2. Đọc hóa đơn, ghép với lô hàng, chọn đúng giá đã duyệt theo tuyến, container, đơn vị và ngày.
  3. Đánh dấu Khớp, Có chênh lệch hoặc Thiếu căn cứ, kèm bằng chứng hai phía.
  4. Chuyển cho pricing xác minh. Kế toán trưởng duyệt chi. Xuất CSV có dấu vết kiểm toán.
- Công nghệ:
  - AI đọc tài liệu (OCR và layout).
  - LLM gắn tên phí với mã phí chuẩn, có điểm tin cậy; trường chưa chắc chắn chuyển cho người xác nhận.
  - Bộ quy tắc đối chiếu.
  - Data analytics cho báo cáo sai lệch.
- Ghi rõ phần nào đã chạy trong MVP, phần nào để pilot.
- Hướng mở rộng cho trụ 5: kiểm tra số tài khoản nhận tiền trên hóa đơn với danh bạ nhà cung cấp đã duyệt, để chặn gian lận đổi tài khoản.
- Hướng mở rộng cho trụ 2: nhận hóa đơn điện tử XML theo Nghị định 254/2026, đi kèm lệnh chi gửi ngân hàng.

## 3. Innovation and competitiveness (khoảng 200 từ)

- So sánh với TMS/ERP như CargoWise: các hệ thống này so hóa đơn với chi phí dự ghi của chính chúng. Movago so với bảng giá pricing đã duyệt và hiện cả hai nguồn.
- So sánh với công cụ AI đối chiếu hóa đơn chung (Innomation): Movago chuyên về cước, xử lý điều kiện giá theo tuyến, container và ngày hiệu lực.
- Nguồn: [phân tích cạnh tranh](../nghien_cuu_tung_slide/phan_tich_canh_tranh.md).

## 4. Feasibility and MVP status (khoảng 200 từ)

- Prototype chạy thật tại https://movago.odylytics.com.
- Phần đã dựng: lập bảng giá từ báo giá, ghép lô, quy tắc giá, đối chiếu từng dòng, dấu vân tay chống trùng, xuất CSV, 14 test tự động.
- Phần đang mô phỏng: AI đọc PDF, nhận chứng từ qua email hoặc Zalo.
- Kế hoạch pilot:
  - 30–100 bộ hồ sơ từ một forwarder ở TP.HCM.
  - KPI chốt cùng người mua: giảm ít nhất 30% phút thao tác trung vị, đo precision và recall của cảnh báo.
- Dữ liệu: tuân thủ Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15.

## 5. Scalability and business model (khoảng 200 từ)

- Thu phí thuê bao theo số hóa đơn xử lý, cộng phí thiết lập khi cần.
- Kịch bản minh họa: 1.000 hóa đơn/tháng, mỗi hóa đơn giảm từ 15 xuống 9 phút, tức khoảng 100 giờ/tháng. Hòa vốn khi giảm 3 phút/hóa đơn. Phải ghi đây là số minh họa.
- Thị trường:
  - Freight audit toàn cầu khoảng 1 tỷ USD, tăng trưởng 13–14%/năm.
  - Việt Nam có hơn 4.000 doanh nghiệp giao nhận.
  - Lộ trình: bắt đầu từ cước biển, mở rộng sang các khoản chi B2B khác.

## 6. Sustainability, ESG and impact (khoảng 150 từ)

- G (Governance): kiểm soát nội bộ, dấu vết kiểm toán, phân quyền người xác nhận và người duyệt.
- S (Social): bớt việc thủ công cho kế toán; khách hàng của forwarder chỉ trả các khoản phí đã được xác nhận.
- SDG 8, 9, 16.6.
- Tác động dự kiến: tránh chi sai trước khi tiền rời doanh nghiệp, và lần đầu đo được tỷ lệ lỗi hóa đơn cước tại Việt Nam.

## 7. Team and next steps (khoảng 100 từ)

- Đội Odylytics: lấy từ [hồ sơ đội](../ODYLYTICS_TEAM.md).
- Kế hoạch tiếp theo: phỏng vấn kế toán và pricing, chạy pilot, thêm bước kiểm tra tài khoản nhận tiền.

---

**Đếm từ:** 300 + 350 + 200 + 200 + 200 + 150 + 100 = 1.500. Phần tiêu đề và nguồn tham khảo có thể không tính vào giới hạn, nhưng cần xác nhận lại trong thể lệ.
