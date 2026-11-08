# COLIO AI

> **AI-powered Logistics Document Verification**  
> **Tagline:** Catch discrepancies before they cost you.  
> **Trạng thái:** Ý tưởng / giả thuyết cần kiểm chứng  
> **Bối cảnh:** Hackathon AI for Business Innovation, TP.HCM — hạn nộp theo thông tin BTC được cung cấp: 23:59, 13/11/2026.

## 1. Executive summary

**Colio AI** là nền tảng AI hỗ trợ doanh nghiệp logistics và giao nhận vận tải (freight forwarder) **đọc, trích xuất, đối chiếu và kiểm chứng chứng từ**, ưu tiên workflow **kiểm tra hóa đơn cước vận chuyển trước khi thanh toán**.

Hệ thống nhận các tài liệu như **freight invoice, bill of lading, proof of delivery, shipment record và bảng giá/hợp đồng**, sau đó phát hiện thông tin không khớp, khoản phí bất thường hoặc hóa đơn trùng. Mỗi cảnh báo đi kèm **bằng chứng truy vết về tài liệu gốc** để nhân viên kiểm duyệt. Colio không tự quyết định thanh toán và không thay thế người phụ trách nghiệp vụ.

**Giá trị đề xuất:** giảm thời gian đối chiếu thủ công, hạn chế thanh toán sai/trùng, chuẩn hóa quy trình và tăng năng lực xử lý mà không phải tăng nhân sự tương ứng.

**Nguồn cảm hứng:** mô hình kiểm chứng chứng từ vận tải của **Conlio** (Đức), và hướng tự động hóa logistics của **Raft** và **Freightmate**. Colio là đề xuất độc lập, định hướng bản địa hóa cho Việt Nam; không phải sản phẩm chính thức hay công ty liên quan đến Conlio.

## 2. Business problem

### 2.1 Bối cảnh

Trong một lô hàng, dữ liệu liên quan có thể nằm rải rác trong email, PDF, ảnh scan, bảng Excel, TMS/ERP và phần mềm kế toán. Nhân viên operations hoặc kế toán phải tự tìm, nhập và so sánh các trường như số vận đơn, số container, trọng lượng, đơn giá cước, phụ phí và số tiền cần thanh toán.

### 2.2 Pain points

| Pain point | Vấn đề vận hành | Tác động kinh doanh cần đo |
|---|---|---|
| Đối chiếu thủ công | Mở và so sánh nhiều chứng từ/nguồn dữ liệu | Phút/bộ hồ sơ; giờ lao động/tháng |
| Sai lệch thông tin | Nhầm shipment ID, trọng lượng, phụ phí hoặc đồng tiền | Tỷ lệ lỗi; thời gian sửa lỗi |
| Thanh toán trùng/thừa | Invoice trùng hoặc charge không khớp hợp đồng | Số tiền có nguy cơ thanh toán sai |
| Dữ liệu phân tán | PDF, email, Excel và phần mềm nội bộ không đồng nhất | Số lần chuyển ứng dụng; thời gian tìm chứng từ |
| Thiếu audit trail | Khó giải thích tại sao một hóa đơn bị giữ lại | Thời gian tra cứu và phê duyệt |

### 2.3 Câu hỏi cần kiểm chứng tại Việt Nam

1. Một forwarder xử lý bao nhiêu hóa đơn cước/tháng và mất bao nhiêu phút để kiểm tra một hóa đơn?
2. Các lỗi phổ biến nhất là gì? Sai sót có thực sự dẫn đến chi phí hay chỉ làm mất thời gian?
3. Hóa đơn và bảng giá hiện nằm ở đâu (email, PDF, Excel, TMS, ERP)?
4. Ai có quyền phê duyệt thanh toán và ai quyết định mua phần mềm?
5. Đơn vị chấp nhận mức độ tự động hóa nào, và yêu cầu bảo mật ra sao?

> **Nguyên tắc chứng cứ:** Chưa có số liệu khảo sát khách hàng Việt Nam cho Colio. Mọi tỷ lệ tiết kiệm thời gian, giảm lỗi hay doanh thu trong tài liệu này đều là **mục tiêu đo lường hoặc ví dụ giả định**, không phải kết quả thực nghiệm.

## 3. Target customers & buyer

**ICP ban đầu (giả thuyết):** freight forwarder hoặc 3PL quy mô vừa tại Việt Nam, có lượng hóa đơn và chứng từ đủ lớn, đang dùng nhiều PDF/Excel/email và có đội operations/kế toán xử lý thủ công.

- **End users:** nhân viên operations, documentation, accounts payable, billing.
- **Economic buyers:** trưởng bộ phận operations, CFO/kế toán trưởng, giám đốc doanh nghiệp.
- **Influencers:** IT, compliance, trưởng nhóm chứng từ.
- **Không ưu tiên ở MVP:** doanh nghiệp siêu nhỏ có khối lượng tài liệu thấp; tập đoàn cần triển khai tích hợp/phân quyền phức tạp ngay từ đầu.

## 4. AI solution

### 4.1 Workflow đề xuất

1. **Upload / Ingest:** nhân viên tải lên tài liệu liên quan đến một shipment hoặc invoice.
2. **Extract:** OCR / document AI nhận dạng, trích xuất các trường dữ liệu theo schema.
3. **Normalize & Link:** chuẩn hóa ngày, tiền tệ, đơn vị đo; liên kết invoice với shipment, hợp đồng hoặc bảng giá phù hợp.
4. **Cross-check:** rule engine kiểm tra số tham chiếu, charges, đơn giá, số tiền và bản ghi trùng.
5. **Flag discrepancies:** ghi rõ trường không khớp, mức độ ưu tiên, quy tắc bị vi phạm và bằng chứng gốc.
6. **Human review:** nhân viên xác nhận, bác bỏ hoặc yêu cầu sửa; lưu lịch sử quyết định.
7. **Export:** xuất báo cáo kiểm tra (CSV/PDF) hoặc chuẩn bị dữ liệu đưa sang TMS/ERP.

### 4.2 Ví dụ minh họa

- **Shipment record:** `SHP-001`, cước cơ bản 8.000.000 VND, phụ phí được duyệt 500.000 VND.
- **Carrier invoice:** `INV-095`, tham chiếu `SHP-001`, tổng tiền 9.300.000 VND.
- **Colio flag:** chênh lệch 800.000 VND so với tổng dự kiến 8.500.000 VND; yêu cầu người kiểm duyệt xem lại cơ sở tính phí và thuế trước thanh toán.

*Ví dụ dữ liệu giả lập; không có nghĩa chênh lệch luôn là sai. Thuế, phụ phí phát sinh, tỷ giá và điều khoản hợp đồng phải được xem xét.*

### 4.3 Nguyên tắc kỹ thuật

- **LLM/VLM để hiểu tài liệu**, không để LLM tự ý quyết định số tiền phải trả.
- **Kiểm chứng có tính quyết định** bằng quy tắc/đối chiếu số học khi có thể.
- **Traceability:** mọi trường quan trọng lưu `document_id`, trang, vị trí đoạn trích hoặc bounding box và mức tin cậy.
- **Human-in-the-loop:** hóa đơn rủi ro cao phải được phê duyệt thủ công.
- **Privacy-by-design:** ẩn dữ liệu nhạy cảm trong demo; phân quyền và nhật ký truy cập khi làm sản phẩm thật.

## 5. MVP cho hackathon

### 5.1 Phạm vi nên làm

**Một workflow duy nhất:** đối chiếu *freight invoice* với *shipment record* và *rate sheet/contract*; có thể bổ sung B/L hoặc POD nếu đủ mẫu dữ liệu.

**Tính năng tối thiểu:**

- Upload PDF/ảnh và nhập dữ liệu shipment bằng CSV.
- Trích xuất các trường: `invoice_number`, `carrier`, `shipment_reference`, `currency`, `invoice_date`, `line_items`, `subtotal`, `tax`, `total`.
- Phát hiện **invoice trùng**, **shipment reference sai/không có**, **tổng tiền không khớp**, **phụ phí không có trong bảng giá**, **trường dữ liệu thiếu**.
- Dashboard cảnh báo có dẫn chiếu tài liệu gốc.
- Nút **Approve / Request review**, xuất báo cáo.

### 5.2 Ngoài phạm vi MVP

- Tự động thanh toán hoặc khai hải quan.
- Kiểm tra tuân thủ pháp luật đầy đủ.
- Tích hợp sâu với mọi TMS/ERP tại Việt Nam.
- Cam kết đọc chính xác mọi ảnh scan, mọi định dạng và mọi ngôn ngữ.

### 5.3 Demo story (3–4 phút)

1. Nhân viên tải lên 3 tài liệu của cùng shipment.
2. Colio trích xuất dữ liệu và hiển thị các trường với nguồn trích dẫn.
3. Hệ thống phát hiện một **phụ phí sai** và một **invoice trùng** được cài vào bộ demo.
4. Người xem click vào cảnh báo để thấy giá trị và trang chứng từ gốc.
5. Nhân viên chọn **Request review**, sau đó xuất báo cáo.

**Điểm nhấn:** trình diễn được lỗi thật trong bộ dữ liệu thử nghiệm; không chỉ là chatbot trả lời từ PDF.

## 6. Business value & ROI

### 6.1 KPI cần đo bằng thí nghiệm

| KPI | Định nghĩa |
|---|---|
| Manual handling time | Số phút người dùng cần để hoàn thành một bộ hồ sơ |
| Field extraction accuracy | Số trường trích xuất đúng / tổng số trường được gán nhãn |
| Discrepancy precision | Cảnh báo đúng / tổng cảnh báo |
| Discrepancy recall | Sai lệch được phát hiện / tổng sai lệch thực |
| False negative rate | Sai lệch bị bỏ sót / tổng sai lệch thực |
| Straight-through rate | Tỷ lệ hồ sơ không cần sửa thủ công trong phạm vi được phép |
| Financial exposure flagged | Giá trị khoản phí bất thường cần được xác minh, **không đồng nghĩa tiền đã tiết kiệm** |

### 6.2 Ví dụ tính ROI (giả định)

- 1.000 hóa đơn/tháng.
- 15 phút xử lý thủ công/hóa đơn.
- 60.000 VND/giờ chi phí lao động quy đổi.
- Giả sử giảm 70% thời gian kiểm tra.

Chi phí lao động trước tự động hóa: `1.000 × 15 / 60 × 60.000 = 15.000.000 VND/tháng`.

Giá trị thời gian giải phóng ước tính: `15.000.000 × 70% = 10.500.000 VND/tháng`.

**Lưu ý:** Đây là kịch bản minh họa, **không phải kết quả đã chứng minh**. Giờ tiết kiệm không tự động chuyển thành tiết kiệm tiền mặt. Cần trừ phí sử dụng, chi phí AI, kiểm duyệt, tích hợp và vận hành.

## 7. Business model (giả thuyết)

- **SaaS theo tháng + hạn mức chứng từ:** gói nhỏ và vừa theo số lượng invoice/shipments.
- **Usage-based overage:** tính thêm theo chứng từ vượt hạn mức.
- **Enterprise:** báo giá theo khối lượng, tích hợp, phân quyền, triển khai riêng và SLA.
- **Implementation fee:** phí thiết lập rule, tích hợp hệ thống và chuyển đổi dữ liệu.

**Giá khảo sát ban đầu (chưa xác minh):** Starter 1,5–3 triệu VND/tháng; Growth 5–10 triệu VND/tháng; Enterprise báo giá riêng.

## 8. Competitor & international inspiration

| Đơn vị | Mô hình tham khảo | Bài học cho Colio |
|---|---|---|
| **Conlio (Đức)** | Kiểm chứng chứng từ vận tải và chứng từ thanh toán | Bán độ tin cậy của workflow, không chỉ bán OCR |
| **Raft** | Tự động hóa xử lý dữ liệu, chứng từ và nghiệp vụ freight forwarding | Tích hợp vào quy trình vận hành hiện có |
| **Freightmate** | Tự động hóa luồng email/chứng từ cho forwarder | Bắt đầu từ sự phân mảnh dữ liệu và thao tác lặp lại |
| **OCR / generic LLM** | Trích xuất, hỏi đáp, tóm tắt tài liệu | Colio phải khác biệt bằng rules, liên kết shipment và audit trail |

**Tình trạng bằng chứng:** Các con số gọi vốn, khách hàng và hiệu suất được nhắc đến trong quá trình nghiên cứu trước đó cần đối chiếu lại nguồn gốc trước khi đưa vào slide như số liệu xác nhận. Gọi vốn không đồng nghĩa đã có lợi nhuận hoặc product-market fit.

**Nguồn để tìm hiểu thêm:**
- Conlio qua Sonic: https://www.sonic.tech/de/project/conlio
- Raft: https://raft.ai/freight-forwarding
- Freightmate: tìm website và tài liệu công khai chính thức trước khi trích dẫn.

## 9. Competitive advantage giả định tại Việt Nam

- Xử lý kết hợp **tiếng Việt – tiếng Anh** và biểu mẫu phổ biến trong xuất nhập khẩu Việt Nam.
- Cấu hình business rules theo forwarder, hãng vận chuyển và bảng giá cụ thể.
- Liên kết chứng từ từ email/Excel/TMS theo shipment reference.
- Bằng chứng rõ ràng, có thể kiểm tra lại bởi nhân viên.
- Hướng triển khai nhẹ, phù hợp doanh nghiệp vừa, không bắt thay toàn bộ ERP/TMS.

**Chưa được phép tuyên bố:** “Không có đối thủ tại Việt Nam” hoặc “AI chính xác hơn con người” nếu chưa có benchmark và competitor scan.

## 10. Risks & edge cases

| Rủi ro | Cách giảm thiểu |
|---|---|
| OCR sai từ ảnh mờ/chữ viết tay | Confidence threshold, hiển thị vùng ảnh, yêu cầu xác nhận |
| Nhiều invoice có số gần giống | Kết hợp supplier + invoice number + date + amount + shipment |
| Một shipment có nhiều invoice | Thiết kế quan hệ một-nhiều; không đánh dấu nhầm là trùng |
| Tỷ giá, thuế, phụ phí phát sinh hợp lệ | Rule có điều kiện; trạng thái “needs review” thay vì khẳng định lỗi |
| Split shipment, partial delivery, thay đổi B/L | Hỗ trợ ngoại lệ nghiệp vụ và lịch sử phiên bản |
| LLM hallucination | Structured extraction, schema validation, deterministic rules, source citation |
| Dữ liệu nhạy cảm | Ẩn thông tin, mã hóa, phân quyền, quản lý retention |
| Tích hợp TMS/ERP khó | MVP qua CSV/PDF trước, tích hợp API sau |
| Chi phí inference cao | Benchmark lựa chọn OCR/LLM và tối ưu xử lý theo loại tài liệu |
| Khách hàng không sẵn sàng trả phí | Pilot có KPI, xác minh người mua và mức giá trước khi mở rộng |

## 11. Validation plan

### Customer discovery

Phỏng vấn **5–10** người làm logistics/forwarding, ưu tiên operations lead, chứng từ và AP.

**Câu hỏi chính:**
1. Một tháng đơn vị xử lý bao nhiêu hóa đơn cước?
2. Thời gian trung bình kiểm tra một hóa đơn là bao lâu?
3. 3 lỗi chứng từ phổ biến nhất là gì? Lỗi nào gây thiệt hại tiền?
4. Đơn vị đã dùng phần mềm nào? Vì sao vẫn phải kiểm tra thủ công?
5. Có thể chia sẻ 10–20 mẫu chứng từ đã ẩn thông tin để thử nghiệm không?
6. Với kết quả pilot đo được, người nào có thể quyết định trả phí?

### Evaluation plan

- Tập hợp 30–100 bộ chứng từ mẫu có quyền sử dụng.
- Gán nhãn thủ công các trường và sai lệch; có ít nhất một người am hiểu nghiệp vụ xác nhận.
- Tạo thêm các lỗi kiểm soát (invoice trùng, mismatch, charge sai) và gắn nhãn rõ là dữ liệu tổng hợp.
- So sánh **manual baseline** và **Colio-assisted** trên cùng bộ hồ sơ.
- Báo cáo precision, recall, false negatives, thời gian thực và loại lỗi chưa xử lý.

## 12. Kế hoạch hackathon 7–13/11/2026

| Ngày | Việc ưu tiên | Deliverable |
|---|---|---|
| 7–8/11 | Phỏng vấn nhanh, lấy mẫu, chọn workflow | Problem statement + dữ liệu mẫu |
| 9/11 | Chuẩn hóa schema & business rules | Data dictionary + test cases |
| 10–11/11 | Xây pipeline và dashboard | MVP chạy được |
| 12/11 | Benchmark, test edge cases, tính ROI giả định | Evaluation table + demo |
| 13/11 | Pitch deck, video demo, kiểm tra form nộp | Hồ sơ nộp hoàn chỉnh |

## 13. Pitch structure — Business Problem / AI Solution / Business Value

**Business Problem:** Doanh nghiệp vận tải và forwarder phải đối chiếu hóa đơn với chứng từ, shipment record và bảng giá bằng tay. Quy trình tốn công, thiếu truy vết và có rủi ro thanh toán sai/trùng.

**AI Solution:** Colio kết hợp Document AI/OCR, structured extraction, shipment matching và rule-based cross-checking. Hệ thống đánh dấu bất thường kèm dẫn chứng để nhân viên phê duyệt.

**Business Value:** Đo thời gian đối chiếu giảm, khả năng phát hiện sai lệch và giá trị khoản phí được cảnh báo. Bán dưới dạng SaaS theo lượng chứng từ, với lộ trình tích hợp vào hệ thống hiện có.

**One-line pitch:**

> **Colio AI turns fragmented freight documents into verifiable payment decisions — with every discrepancy linked back to its source.**

## 14. Open questions trước khi gọi đây là startup khả thi

- Pain point mạnh nhất ở Việt Nam là **freight invoice audit** hay **xuất nhập khẩu/customs document matching**?
- Doanh nghiệp đã có tính năng tương đương trong TMS/ERP hiện tại hay chưa?
- Ai giữ dữ liệu, ai chịu trách nhiệm với false negatives, và hệ thống cần chứng chỉ/đánh giá bảo mật nào?
- Một lô hàng thường có bao nhiêu invoice, bao nhiêu ngoại lệ hợp lệ?
- ROI có đủ lớn sau khi tính người kiểm duyệt và chi phí triển khai không?
- Buyer trả tiền theo shipment, invoice, seat hay flat monthly fee?

---

### Ghi chú về tên và nguồn

Tài liệu dùng tên **Colio AI** theo yêu cầu. Đây là tên làm việc, chưa tra cứu trùng tên/nhãn hiệu/tên miền. **Conlio** là một doanh nghiệp nước ngoài dùng làm nguồn cảm hứng; không nên sử dụng nhãn hiệu, giao diện hay tài sản thương hiệu của họ như của mình.

**Phiên bản:** 0.1 — 07/11/2026. Tài liệu ý tưởng để thảo luận và chuẩn bị hackathon, không phải market research được kiểm toán.
