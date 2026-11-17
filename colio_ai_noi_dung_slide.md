# Movago · Nội dung 10 slide

Bản tiếng Việt của nội dung trong [deck tiếng Anh để nộp](nghien_cuu_tung_slide/Movago_Pitch_V4.pptx). Đội chỉ làm slide bằng tiếng Anh; deck dựng trên [template Odylytics](nghien_cuu_tung_slide/Odylytics_Company_Deck.pptx). Lời nói cho từng slide nằm trong speaker notes của deck. Dùng [kịch bản demo và hỏi đáp](colio_ai_pitch_research_vi.md) để tập hỏi đáp và [nghiên cứu bài toán kinh doanh](nghien_cuu_tung_slide/colio_ai_business_problems.md) để tra nguồn.

**Hạng mục dự thi** · Operations & Productivity: AI trích xuất thông tin từ hóa đơn và phát hiện điểm nghẽn trong quy trình kiểm tra cước.

| Slide | Tiêu chí chấm chính |
|---|---|
| 2–4 | Problem 25% |
| 5–6, 10 | Idea & Innovation 30% |
| 7, 9 | Feasibility 25% |
| 8 và toàn deck | Presentation 20% |


Tỷ giá quy đổi: 1 USD = 25.500 đồng, 1 EUR = 1,12 USD (09/11/2026).

## Thứ tự 17 slide

Deck chính là [Movago_Pitch_V4.pptx](nghien_cuu_tung_slide/Movago_Pitch_V4.pptx), dựng từ bản đội sửa [Movago_Pitch_V3.pptx](nghien_cuu_tung_slide/Movago_Pitch_V3.pptx) và thêm slide 1 và 15. Deck có 17 trang: trang mở đầu, 15 slide nội dung và trang kết. Đề cho tối đa 15 slide, không tính mở đầu và kết, nên deck đã dùng hết số slide nội dung. Phụ lục hỏi đáp nằm ở file riêng: [Movago_Appendix_QA_EN.pptx](nghien_cuu_tung_slide/Movago_Appendix_QA_EN.pptx).

| Trang | Slide | Ghi chú |
|---|---|---|
| 1 | Mở đầu (không tính) | |
| 2 | 1. How Freight Works | Mới. Shipper, forwarder và năm nhà cung cấp; hóa đơn đi chiều ngược lại; Movago ở bước Pay suppliers. Cùng sơ đồ với shot 2 và 3 của video |
| 3 | 2. Business Problem | |
| 4 | 3. Target Business & Users | |
| 5 | 4. Business Insight | |
| 6 | 5. Why Now | |
| 7 | 6. Proposed Solution | |
| 8 | 7. How AI Helps | |
| 9 | 8. How It Works | |
| 10 | 9. Mockup / Demo | |
| 11 | 10. User Validation | |
| 12 | 11. Market Size | |
| 13 | 12. Feasibility & Business Value | |
| 14 | 13. Competitive Advantage | |
| 15 | 14. Team | |
| 16 | 15. Track Record & Advisors | Mới. Hành trình giải thưởng, số liệu AquaGuard, năm cố vấn kèm vai trò, theo odylytics.com tra ngày 17/11/2026 |
| 17 | Kết (không tính) | |

Phụ lục: #1 Dữ liệu tài chính có an toàn không · #2 Nếu AI đọc sai · #3 Sao không dùng TMS/ERP · #4 Đo tác động · #5 Kiến trúc và tech stack · Tài liệu tham khảo.

**Tech stack (phụ lục #5, tóm tắt ở slide 13).** Năm lớp: nhận chứng từ, AI đọc, quy tắc, duyệt và xuất, hạ tầng. Demo chạy React + TypeScript + Vite trên Vercel, rules engine TypeScript có 14 test Vitest, SHA-256 bằng Web Crypto; bước AI đọc là mô phỏng. Pilot dự kiến Azure Document Intelligence hoặc LLM, Gmail/IMAP, webhook Zalo OA, cơ sở dữ liệu lưu tại Việt Nam có audit log, kết nối ERP/TMS.

> Phần nội dung chi tiết bên dưới giữ đánh số 10 slide cũ. Số slide trong deck đã đổi theo bảng trên.

## 01 · Title

**Movago** · *Move smarter. Go safer.*

AI đối chiếu hóa đơn cước với hồ sơ lô hàng và bảng giá đã duyệt, trước khi kế toán thanh toán.

Đội Odylytics · Nguyễn Minh Quân · Trần Tuấn Nghĩa · Nguyễn Trường Sơn · Nguyễn Minh Quân · Trương Nguyễn Bảo Khang · KTC Ideathon 2026. Xác nhận danh sách đăng ký trước khi nộp.

## 02 · Business Problem · Căn cứ để trả một khoản cước nằm ở ba nơi

Trước mỗi lần chi cước, kế toán công nợ phải gom ba nguồn, so từng dòng phí và hỏi lại vận hành hoặc pricing.

1. **Hóa đơn, debit note** · PDF hoặc bản scan gửi qua email, Zalo, cổng hãng tàu.
2. **Hồ sơ lô hàng** · Tuyến, loại container, số vận đơn nằm trong TMS hoặc Excel.
3. **Bảng giá đã duyệt** · Đơn giá, phụ phí do pricing giữ, đổi theo phiên bản.

*Hình: các kênh hóa đơn đến, chụp từ web demo.*

## 03 · Target Business & Users · Forwarder hàng biển quy mô vừa tại TP.HCM

| Vai trò | Ai | Vấn đề |
|---|---|---|
| Doanh nghiệp | Forwarder vừa | Mua cước từ nhiều hãng và đại lý. Bối cảnh: 4.000–4.500 DN giao nhận cả nước (VLA, BCT 2025). |
| **Người dùng chính** | Kế toán công nợ (AP) | Kiểm từng dòng phí trước khi chi, mất thời gian gom đủ ba nguồn. |
| Xác minh lô | Vận hành | Xác nhận lô, container, dịch vụ. Bị hỏi lại qua email, Zalo. |
| Xác minh giá | Pricing | Giữ bảng giá và phụ phí đã duyệt, xác minh khoản phát sinh. |
| Người mua | Kế toán trưởng hoặc CFO | Quyết định ngân sách và duyệt chi, cần bằng chứng trước khi ký. |

## 04 · Business Insight · Mức phí đúng phụ thuộc vào từng lô hàng

- **$127** (3,25 triệu đồng) · DHC Maersk cho container 20 feet khô. **$196** (5 triệu đồng) cho 40 feet khô. Áp dụng từ 01/05/2026. [Maersk](https://www.maersk.com/news/articles/2026/03/31/terminal-handling-charges-vietnam-ohc-dhc)
- **3–6%** hóa đơn cước có lỗi trong một đợt audit điển hình, chủ yếu ở phụ phí và chiết khấu. [Transportation Insight](https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/) · Việt Nam chưa có số công bố, pilot sẽ đo.

Quy trình hiện tại còn hạn chế:

- **Thủ công** · So bằng mắt và Excel. Tên phí khác nhau giữa các hãng, dễ sót khi nhiều hóa đơn.
- **Phụ thuộc người** · Thiếu căn cứ thì hồ sơ chờ qua email, Zalo. Người duyệt chi không thấy bằng chứng.
- **Rủi ro chi** · Sai giá, sai phiên bản, trả trùng. Hóa đơn gửi lại với tên tệp mới có thể bị nhập hai lần.

## 05 · Proposed Solution · Movago: một màn hình đối chiếu ba nguồn

Hóa đơn + Hồ sơ lô + Bảng giá → **Movago**. Movago đọc hóa đơn, ghép đúng lô và đúng phiên bản giá, rồi tính lại từng dòng phí. Mỗi dòng nhận một kết quả: **Khớp**, **Có chênh lệch** hoặc **Thiếu căn cứ**, kèm nguồn hai phía.

*Kế toán xác nhận trên bằng chứng. Người có thẩm quyền vẫn là người duyệt chi.*

## 06 · How AI Helps · AI đọc chứng từ, quy tắc kiểm tra số tiền

- Document AI trích trường, dòng phí và vị trí trên PDF, bản scan.
- AI gợi ý mã phí: “Phí chứng từ” → DOC.
- Quy tắc chọn giá đúng tuyến, container, ngày hiệu lực.
- Độ tin cậy thấp hoặc mơ hồ: chuyển người kiểm tra.

AI không quyết định số tiền: mọi chênh lệch đều có phép tính và nguồn.

## 07 · How It Works · Bốn bước từ báo giá đến báo cáo

1. **Dựng bảng giá** · AI đọc báo giá của hãng; pricing duyệt từng dòng (dòng tin cậy thấp xem riêng) rồi xuất bảng giá. Trước đây pricing gõ tay vào Excel. Demo: trang `#/rates`.
2. **Nhận và đọc hóa đơn** · AI trích dòng phí và vị trí. Dấu vân tay SHA-256 chặn bản gửi lại.
3. **Ghép lô và giá** · Ghép theo mã lô hoặc vận đơn và nhà cung cấp. Chọn bảng giá có hiệu lực.
4. **So và xác nhận** · Gắn trạng thái, kế toán xác nhận, xuất CSV.

Đầu vào MVP: báo giá PDF của hãng, hóa đơn PDF bằng VND và CSV hồ sơ lô. Bảng giá đã duyệt do bước 1 tạo ra.

## 08 · Mockup / Demo · Ca INV-095: phí chứng từ chênh +$31 (800.000 đ)

Bốn ảnh chụp từ [web demo](https://movago-odylytics.vercel.app): trang giới thiệu, kết quả từng dòng, căn cứ hai phía, nhận ra bản gửi lại.

| Dòng phí | Hóa đơn | Bảng giá đã duyệt | Kết quả |
|---|---:|---:|---|
| Cước biển | $314 (8.000.000 đ) | $314 (8.000.000 đ) | Khớp |
| Phí chứng từ (DOC) | $51 (1.300.000 đ) | $20 (500.000 đ) | **+$31** (800.000 đ) |

Bằng chứng: hóa đơn trang 1 ↔ RATE-V3 dòng 12. *Dữ liệu giả lập, số tiền trước thuế.*

## 09 · Feasibility & Business Value · Pilot nhỏ, đo được, hòa vốn từ 3 phút mỗi hóa đơn

**Kịch bản minh họa** · 1.000 hóa đơn/tháng × giảm 6 phút (15 xuống 9) = **100 giờ/tháng** ≈ **$235/tháng** ở $2,35/giờ, trước chi phí.

- **Mô hình** · B2B SaaS, thuê bao theo số hóa đơn đã xử lý, thêm phí thiết lập khi cần.
- **Hòa vốn** · 3 phút/hóa đơn nếu thuê bao quy đổi $118/tháng.
- **KPI pilot** · Giảm ít nhất 30% phút thao tác trung vị, trên 30–100 bộ hồ sơ.
- **Nguồn lực** · 1 tuyến, 1–2 nhà cung cấp, dữ liệu CSV, 3 vai: nghiệp vụ, kỹ thuật, giao diện.
- **Công nghệ** · Document AI + rules engine + web app. Demo đã chạy đủ luồng.

*Số liệu là giả định, không phải kết quả pilot. $2,35/giờ thấp hơn lương kế toán công nợ trung bình khoảng $450/tháng (TopCV). Benchmark: trung vị chi phí xử lý một hóa đơn AP là $6 ([APQC](https://www.apqc.org/What-Is-the-Average-Cost-to-Process-an-Invoice)).*

## 10 · Competitive Advantage · Khác biệt: căn cứ từng dòng phí cho forwarder Việt Nam

| Năng lực | Excel + email | Phần mềm forwarder | Audit cước quốc tế | Movago |
|---|---|---|---|---|
| Kiểm từng dòng phí theo biểu giá | Thủ công | Chưa rõ | Có | Có |
| Ghép hóa đơn với hồ sơ lô | Thủ công | Có | Chưa rõ | Có |
| Hiểu tên phí Việt–Anh | Thủ công | Chưa rõ | Chưa rõ | Có |
| Mở căn cứ hai phía cho mỗi chênh lệch | Thủ công | Chưa rõ | Chưa rõ | Có |
| Nhận ra bản gửi lại khi đổi tên | Thủ công | Chưa rõ | Chưa rõ | Có |

*Chưa rõ = chưa thấy trong tài liệu công bố, sẽ so trực tiếp khi pilot. Ví dụ: [G.O.L SMS Live](https://gol.vn/services/logistics-software/), [Innomation AutoMatching](https://innomation.vn/product/automatching), [ShipCheck](https://shipcheck.com/en).*

## Slide kết

**Kiểm tra trước khi chi.** *Move smarter. Go safer.* Đề nghị pilot 30–100 bộ hồ sơ với một forwarder tại TP.HCM. movago-odylytics.vercel.app · odylytics@gmail.com
