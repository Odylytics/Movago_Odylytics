# Colio AI · Nội dung 10 slide

Bản chép vào deck. Dùng [kịch bản thuyết trình](colio_ai_pitch_research_vi.md) để tập nói và [nghiên cứu bài toán kinh doanh](nghien_cuu_tung_slide/colio_ai_business_problems.md) để tra nguồn.

## 01 · Colio AI

**Đối chiếu cước vận tải trước khi thanh toán**

> Phát hiện sai lệch trước khi chuyển tiền.

**[Tên đội]**  
**[Tên người 1] · [Tên người 2]**  
KTC Ideathon

---

## 02 · Căn cứ trả cước nằm ở ba nguồn

| Kế toán cần gì? | Xem ở đâu? |
|---|---|
| Khoản nhà cung cấp yêu cầu trả | Hóa đơn hoặc debit note |
| Lô hàng và dịch vụ liên quan | Hồ sơ lô hàng |
| Đơn giá và phụ phí được duyệt | Bảng giá và phê duyệt bổ sung |

Khi căn cứ nằm ở nhiều nơi, kế toán phải gom hồ sơ, so từng dòng phí và hỏi lại người phụ trách. Pilot đo thời gian gom hồ sơ và số chênh lệch được xác nhận.

*Nguồn nghiệp vụ tại TP.HCM · [Lacco Logistics](https://lacco.com.vn/tuyen-dung/tuyen-dung-nhan-vien-chung-tu-xuat-nhap-khau-tai-tp-hcm) · [Flexport](https://job-boards.greenhouse.io/flexport/jobs/7660304)*

---

## 03 · Forwarder hàng biển tại TP.HCM

- **Khách hàng đầu tiên** · Forwarder vừa, mua cước từ nhiều hãng hoặc đại lý, có dữ liệu lô hàng xuất được.
- **Người dùng** · Kế toán công nợ kiểm tra phí. Vận hành và phụ trách giá xác nhận khoản phát sinh.
- **Người mua dự kiến** · Kế toán trưởng hoặc CFO.
- **Phạm vi pilot** · Một nhóm kế toán, một tuyến hoặc nhóm phí, một đến hai nhà cung cấp.

*Bối cảnh toàn ngành · Khoảng **4.000–4.500 doanh nghiệp giao nhận** trên cả nước năm 2025, theo ước tính VLA được dẫn trong báo cáo. [Bộ Công Thương, mục 3.3](https://cdn.hstatic.net/files/200001055703/file/bao_cao_logistics_viet_nam_2025.pdf#page=76)*

---

## 04 · Mức phí đúng phụ thuộc vào lô hàng

**Ví dụ · Phí làm hàng tại cảng đích (DHC) của Maersk**

| Container khô 20 feet | Container khô 40 feet |
|---:|---:|
| **3,25 triệu đồng/container** | **5 triệu đồng/container** |

*Biểu phí công bố áp dụng từ 01/05/2026 cho tuyến vào Việt Nam từ các điểm đi ngoài Trung Quốc. [Thông báo Maersk](https://www.maersk.com/news/articles/2026/03/31/terminal-handling-charges-vietnam-ohc-dhc)*

**Để kiểm tra một khoản phí, cần biết đúng lô, đúng điều kiện giá và căn cứ của khoản phát sinh.**

---

## 05 · Một màn hình đối chiếu ba nguồn

**Chứng từ đề nghị chi + Hồ sơ lô hàng + Bảng giá đã duyệt**

| Kết quả | Kế toán nhìn thấy |
|---|---|
| **Khớp** | Khoản phí khớp trong phạm vi kiểm tra |
| **Có chênh lệch** | Dòng phí, số tiền chênh và căn cứ hai phía |
| **Thiếu căn cứ** | Thông tin cần bổ sung trước khi xác nhận |

Kế toán xác nhận kết quả hoặc chuyển người phụ trách xử lý. Người có thẩm quyền quyết định thanh toán.

---

## 06 · AI đọc chứng từ, quy tắc kiểm tra số tiền

- **AI trích dữ liệu** · Đọc số hóa đơn, mã lô, dòng phí và vị trí trên PDF hoặc bản scan.
- **AI gợi ý mã phí** · Đề xuất ghép “Documentation fee” và “Phí chứng từ” vào mã DOC khi phù hợp.
- **Quy tắc đối chiếu** · Chọn bảng giá có hiệu lực, so cùng đơn vị và cơ sở thuế, kiểm tra chứng từ gửi lại.
- **Nhân viên xác nhận ngoại lệ** · Kiểm tra trường đọc chưa rõ, mã phí mơ hồ hoặc hồ sơ thiếu căn cứ.

---

## 07 · Quy trình kiểm tra cước

**Tải hồ sơ → Trích xuất → Ghép lô → So từng dòng → Xác nhận → Xuất báo cáo**

- **Đầu vào MVP** · Hóa đơn PDF bằng VND, CSV lô hàng và CSV bảng giá.
- **Ghép hồ sơ** · Dùng mã lô hoặc số vận đơn cùng thông tin nhà cung cấp.
- **Đầu ra** · Báo cáo từng dòng phí, nguồn đối chiếu và kết quả xác nhận.

---

## 08 · Một khoản phí chênh 800.000 đồng

**Mockup · Hóa đơn INV-095 · Lô SHP-001**

| Dòng phí | Hóa đơn | Bảng giá đã duyệt | Kết quả |
|---|---:|---:|---|
| Cước vận tải | 8.000.000 đ | 8.000.000 đ | Khớp |
| Phí chứng từ (DOC) | 1.300.000 đ | 500.000 đ | **+800.000 đ** |
| **Tổng trước thuế** | **9.300.000 đ** | **8.500.000 đ** | **Cần xác minh** |

- **Bằng chứng** · Hóa đơn trang 1, dòng DOC ↔ Bảng giá RATE-V3, dòng 12
- **Bản gửi lại** · PDF INV-095 đã có trong lịch sử tiếp nhận
- **Thao tác** · Yêu cầu xác minh · Xuất báo cáo

*Dữ liệu giả lập. Các số tiền đối chiếu đều tính trước thuế.*

---

## 09 · Pilot đo thời gian và chất lượng kiểm tra

- **Pilot** · So quy trình hiện tại và quy trình có Colio trên bộ hồ sơ có nhãn.
- **Chỉ số** · Phút thao tác, cảnh báo đúng, sai lệch bỏ sót và khoản thực tế điều chỉnh.
- **Nguồn lực** · Nghiệp vụ cước, kỹ thuật trích xuất và quy tắc, giao diện.
- **Mô hình bán thử** · Thuê bao theo số hóa đơn duy nhất đã xử lý, kèm phí thiết lập khi cần.

**Kịch bản minh họa** · 1.000 hóa đơn/tháng × 6 phút giảm/hóa đơn = **100 giờ/tháng**. Với 60.000 đ/giờ, giá trị thời gian là **6 triệu đồng/tháng** trước chi phí.

---

## 10 · Kiểm chứng trên hồ sơ cước Việt Nam

| Giải pháp hiện có | Năng lực công bố |
|---|---|
| G.O.L SMS Live | Quản lý giá mua, công nợ và duyệt chi phí |
| Innomation AutoMatching | Đối chiếu chứng từ và xử lý ngoại lệ |
| ShipCheck | Kiểm tra từng dòng hóa đơn theo biểu phí |

**Khác biệt đề xuất** · Gắn tên phí Việt–Anh với lô hàng, phiên bản giá và chứng từ gốc của forwarder Việt Nam.

**Cách chứng minh** · Pilot một tuyến. So thời gian thiết lập, phút kiểm tra và sai lệch bỏ sót với quy trình hiện tại.

*Nguồn tính năng · [G.O.L](https://gol.vn/services/logistics-software/) · [Innomation](https://innomation.vn/product/automatching) · [ShipCheck](https://shipcheck.com/en)*
