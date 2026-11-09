# Phân tích cạnh tranh và nội dung còn thiếu trên deck Movago

**Rà ngày 09/11/2026 · Khung: competitive analysis (market context → bản đồ đối thủ → định vị → so sánh → lợi thế bền vững)**

Tài liệu này lấp các chỗ trống của deck 15 slide: **Why now** (slide 5), **Market size** (slide 11) và **Competitive** (slide 13). Phần cuối liệt kê từng thay đổi cần đưa vào slide. Số liệu công ty tư nhân phần lớn không công bố, nên ô thiếu ghi “–”. Mọi nhận định về đối thủ dựa trên trang sản phẩm công khai, chưa qua dùng thử.

**Phạm vi đã chọn.** Movago là công ty trung tâm. Đối thủ chia theo mức độ cạnh tranh: hiện trạng, liền kề, trực tiếp. Người đọc là ban giám khảo Ideathon, nên bỏ phần kịch bản đầu tư (bull/base/bear).

## Tóm tắt

1. **Thị trường freight audit toàn cầu nhỏ nhưng tăng nhanh:** khoảng 0,8–1,0 tỷ USD năm 2025, tăng 11–14%/năm đến 2030, châu Á – Thái Bình Dương tăng nhanh nhất. Nhà đầu tư đang rót vốn: Loop gọi 95 triệu USD Series C tháng 4/2026.
2. **Đối thủ mạnh nhất không phải startup freight audit, mà là CargoWise.** Invoice Processing Portal của CargoWise đã khớp hóa đơn với chi phí dự ghi theo job và chặn hóa đơn trùng. Với forwarder đã dùng CargoWise, Movago khó thắng nếu chỉ dựa vào tính năng.
3. **Khoảng trống của Movago** là forwarder vừa tại Việt Nam *không* dùng CargoWise. Nhóm này dùng phần mềm nội địa như G.O.L hoặc Excel, nên chưa có bước kiểm hóa đơn đầu vào theo bảng giá. Các công cụ AI đọc hóa đơn trong nước như Innomation và FPT AI Read lại không hiểu logic cước.
4. **Why now có căn cứ pháp lý:** Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC có hiệu lực từ 01/07/2026, thay Nghị định 123/2020 và 70/2025. Riêng năm 2025, cơ quan thuế xử lý gần 8,5 tỷ hóa đơn điện tử.
5. **Lợi thế bền vững Movago có thể xây** là dữ liệu có nhãn về phí cước Việt Nam (từ điển tên phí Việt–Anh, mẫu chứng từ, lỗi thường gặp). Phải có pilot mới bắt đầu tích lũy được.

## 1. Chỉ số ngành dùng để so sánh

| Chỉ số | Vì sao quan trọng | Mốc tham chiếu |
|---|---|---|
| Phút thao tác mỗi hóa đơn | Đo năng suất kế toán | Movago giả định 15 → 9 phút. Cần khảo sát |
| Chi phí xử lý mỗi hóa đơn | So với giá thuê bao | APQC: trung vị 6 USD/hóa đơn, mẫu 5.846 tổ chức [3] |
| Tỷ lệ hóa đơn có lỗi | Quy mô vấn đề | 3–6% hóa đơn cước trong một đợt audit điển hình [2] |
| Tỷ lệ chi phí cước thu hồi được | Giá trị tiền mặt | 1–5% tổng chi cước [2] |
| Tỷ lệ xử lý không chạm tay | Mức tự động hóa | Ardent Partners 2025: trung bình 32,6%, nhóm dẫn đầu 49,2% (qua tổng hợp thứ cấp) [4] |

## 2. Bối cảnh thị trường

| Lớp | Số liệu | Nguồn và độ tin cậy |
|---|---|---|
| Freight audit & payment toàn cầu | 0,82 tỷ USD (2025) → 1,53 tỷ USD (2030), CAGR 13,2% | Knowledge Sourcing Intelligence, 08/2025 [5] |
| | 0,97 tỷ USD (2025) → 1,89 tỷ USD (2030), CAGR 14,2%. Châu Á – Thái Bình Dương tăng nhanh nhất | Mordor Intelligence [6] |
| | Mốc thận trọng nên dùng: khoảng 1 tỷ USD năm 2025, tách khỏi tổng giá trị thanh toán đi qua nền tảng | SupplyChainResearch, tổng hợp nhiều báo cáo [7] |
| Hóa đơn điện tử Việt Nam | Gần 8,5 tỷ hóa đơn năm 2025; lũy kế hơn 20,3 tỷ đến hết 2025 | Cục Thuế, qua Tạp chí Tài chính Doanh nghiệp [8] |
| Thương mại hàng hóa | Xuất nhập khẩu 10 tháng 2026 đạt 1.010,55 tỷ USD, +32,3% | Cục Thống kê [9] |
| Doanh nghiệp giao nhận | Khoảng 4.000–4.500 trên cả nước | VLA, dẫn trong Báo cáo Logistics Việt Nam 2025 [10] |

**Động lực:** khối lượng hàng tăng, hóa đơn chuyển sang điện tử nên có dữ liệu để đọc, giá cước và phụ phí biến động theo thông báo của hãng tàu. **Lực cản:** forwarder vừa ngại tích hợp, dữ liệu giá đã duyệt nằm rải rác, mức sẵn sàng chi cho phần mềm kế toán chưa được đo.

## 3. Dòng giá trị: Movago đứng ở đâu

```
Hãng tàu / đại lý ──hóa đơn, debit note──▶ FORWARDER ──hóa đơn bán──▶ Chủ hàng
                                             │
                     Vận hành (hồ sơ lô) · Pricing (bảng giá) · Kế toán công nợ
                                             │
                                   Movago kiểm ở bước này:
                       hóa đơn MUA vào ↔ lô ↔ giá đã duyệt, trước khi chi
```

Phần mềm forwarder (G.O.L, CargoWise) quản lý cả chuỗi và **phát hành** hóa đơn bán. Công cụ freight audit quốc tế phục vụ chủ hàng lớn. Movago chỉ làm một bước hẹp: kiểm **hóa đơn mua vào** của forwarder.

## 4. Movago hiện tại

| Hạng mục | Giá trị |
|---|---|
| Giai đoạn | Ý tưởng Ideathon, demo web chạy đủ luồng, chưa có khách |
| Doanh thu, khách hàng | – |
| Khác biệt hiện có | Đối chiếu ba nguồn (hóa đơn, lô, bảng giá) theo từng dòng; căn cứ hai phía; nhận ra bản gửi lại bằng SHA-256; tên phí Việt–Anh |
| Mô hình giá dự kiến | Thuê bao theo số hóa đơn, kèm phí thiết lập |
| Rủi ro lớn nhất | Chưa có dữ liệu người dùng; đối thủ có sẵn tập khách hàng |

## 5. Bản đồ đối thủ

| Nhóm | Đối thủ | Họ làm gì liên quan đến bài toán |
|---|---|---|
| **Hiện trạng** | Excel + email + Zalo | Kế toán tự gom và so tay |
| **Liền kề: phần mềm forwarder** | G.O.L SMS Live (Việt Nam) | Quản lý giá mua, công nợ, debit/credit note, duyệt chi phí. Không thấy chức năng kiểm hóa đơn đầu vào hay AI/OCR [11] |
| | CargoWise Invoice Processing Portal (WiseTech) | AI đọc hóa đơn, khớp dòng với chi phí dự ghi theo job, chặn hóa đơn trùng, đưa ngoại lệ đi duyệt [12] |
| **Liền kề: AI đối chiếu hóa đơn tại Việt Nam** | Innomation AutoMatching | AI trích xuất, khớp hóa đơn với PO, GR, hợp đồng; phát hiện trùng; tích hợp MISA, FAST, Bravo, SAP. Không chuyên cước [13] |
| | FPT AI Read | OCR và trích xuất hóa đơn VAT Việt Nam qua API, tính phí theo lượt. Không có logic đối chiếu [14] |
| **Trực tiếp: freight audit quốc tế** | ShipCheck (Thụy Sĩ/Đức) | Kiểm từng dòng hóa đơn theo biểu giá; AI số hóa biểu giá. Giá từ 99 €/tháng [15] |
| | Conlio (Đức) | Phần mềm kiểm cước cho chủ hàng, hãng vận chuyển và forwarder; dữ liệu xử lý trong EU [16] |
| | Loop (Mỹ) | Nền tảng AI freight audit, nay mở rộng thành dữ liệu chuỗi cung ứng. Tổng vốn 210 triệu USD [17] |

## 6. Định vị (ma trận 2×2)

**Trục ngang:** hiểu logic cước (bảng giá, lô, loại container). **Trục dọc:** phù hợp forwarder vừa tại Việt Nam (chứng từ tiếng Việt, giá, triển khai không cần tích hợp sâu).

```
                 Phù hợp forwarder vừa Việt Nam ▲
                                                │
   Innomation · FPT AI Read                     │        ★ Movago (mục tiêu)
   (AI đọc tốt, không hiểu cước)                │
   G.O.L SMS Live (có giá mua, không kiểm HĐ)   │
 ───────────────────────────────────────────────┼──────────────────────────▶ Hiểu logic cước
   Excel + email                                │   CargoWise IPP (mạnh, cần dùng CargoWise)
                                                │   ShipCheck · Conlio · Loop
                                                │   (chuyên cước, nhắm chủ hàng EU/Mỹ)
```

Ô trên bên phải đang trống. Đó là vị trí Movago nhắm tới. Vị trí này **cần pilot chứng minh**, chưa phải thực tế.

## 7. Hồ sơ từng đối thủ

### CargoWise Invoice Processing Portal: đối thủ mạnh nhất

| Hạng mục | Nhận định |
|---|---|
| Làm gì | Nhận hóa đơn qua email, upload, EDI, XML; AI đọc; khớp với chi phí dự ghi theo job hoặc lô gom; chặn hóa đơn đã ghi nhận [12] |
| Điểm mạnh | Nằm sẵn trong hệ thống forwarder lớn dùng; dữ liệu job đầy đủ; chặn trùng |
| Điểm yếu | Chỉ dành cho khách CargoWise; hiệu quả phụ thuộc chất lượng chi phí dự ghi [12]; WiseTech dự định thu phí riêng cho AI agent (ghi chú Citi, 01/10/2026) [18] |
| Hàm ý cho Movago | Không nhắm forwarder đang dùng CargoWise ở giai đoạn đầu. Nói rõ: Movago so với **giá đã duyệt**, còn CargoWise so với **chi phí dự ghi**. Hai căn cứ này có thể khác nhau |

### G.O.L SMS Live

| Hạng mục | Nhận định |
|---|---|
| Làm gì | Phần mềm quản lý forwarder trên Windows: chứng từ, giá mua, công nợ, debit note, duyệt chi phí [11] |
| Quy mô | Trang ghi “1.000+ doanh nghiệp”, nhưng FAQ ghi 184 văn phòng và chi nhánh. Hai số mâu thuẫn |
| Điểm yếu | Không thấy chức năng kiểm hóa đơn đầu vào hay AI/OCR trên trang sản phẩm |
| Hàm ý | Là **kênh hợp tác** hơn là đối thủ: Movago đọc file xuất từ G.O.L |

### Innomation AutoMatching

| Hạng mục | Nhận định |
|---|---|
| Làm gì | AI đối chiếu hóa đơn với PO, GR, hợp đồng; phát hiện trùng; hàng chờ ngoại lệ; kết quả Matched, Partial, Mismatch, Manual review [13] |
| Điểm mạnh | Tích hợp MISA, FAST, Bravo, SAP; triển khai on-premise được |
| Điểm yếu | Không nói đến cước hay logistics; logic dựa trên PO và nhận hàng, không dựa trên bảng giá theo lô |
| Hàm ý | Đối thủ khi khách coi đây là bài toán AP chung. Movago phải chứng minh logic cước là cần thiết |

### ShipCheck

| Hạng mục | Nhận định |
|---|---|
| Làm gì | Kiểm từng dòng hóa đơn theo biểu giá cho mọi phương thức; AI số hóa biểu giá, có chuyên gia rà [15] |
| Giá | Miễn phí (dashboard), 99 €, 199 €, 499 €, 1.499 €/tháng, cam kết năm [15] |
| Điểm yếu với Việt Nam | Khách hàng chủ yếu là nhà sản xuất châu Âu; không thấy hỗ trợ chứng từ tiếng Việt |
| Hàm ý | **Mốc giá tham chiếu tốt**: 99 €/tháng (cỡ 3 triệu đồng; kiểm lại tỷ giá ngày nộp) gần với mốc hòa vốn 3 triệu đồng/tháng ở slide 9 |

### Loop

| Hạng mục | Nhận định |
|---|---|
| Làm gì | Khởi đầu từ freight audit & payment, nay là nền tảng dữ liệu logistics; tuyên bố tự động 99% audit [17] |
| Vốn | Series B 35 triệu USD (10/2023), Series C 95 triệu USD (04/2026), tổng 210 triệu USD [17] |
| Hàm ý | Không cạnh tranh trực tiếp tại Việt Nam, nhưng chứng minh nhà đầu tư trả tiền cho AI kiểm cước |

## 8. Bảng so sánh (đề xuất thay bảng ở slide 13)

●●● = có, thể hiện rõ trên tài liệu công bố · ●●○ = có một phần · ●○○ = không thấy · *DEMO* = đã chạy trong demo Movago, chưa kiểm chứng với khách

| Năng lực | Excel + email | G.O.L SMS Live | CargoWise IPP | Innomation | ShipCheck | Movago |
|---|---|---|---|---|---|---|
| AI đọc hóa đơn PDF, scan | ●○○ | ●○○ không thấy | ●●● | ●●● | ●●○ AI cho biểu giá | ●●○ *mô phỏng trong demo* |
| Khớp hóa đơn với lô hàng | ●○○ tay | ●●○ dữ liệu lô có sẵn | ●●● theo job | ●○○ theo PO/GR | ●●○ | ●●● *DEMO* |
| So từng dòng với giá đã duyệt | ●○○ tay | ●○○ không thấy | ●●○ so chi phí dự ghi | ●●○ dung sai giá theo PO | ●●● | ●●● *DEMO* |
| Phát hiện hóa đơn trùng | ●○○ | ●○○ không thấy | ●●● | ●●● | ●○○ không thấy | ●●● *DEMO*, theo dấu vân tay tệp |
| Tên phí và chứng từ tiếng Việt | ●●● | ●●● | ●○○ không thấy | ●●● | ●○○ | ●●○ *DEMO* |
| Không cần thay hệ thống | ●●● | ●○○ là hệ thống | ●○○ cần CargoWise | ●●○ tích hợp ERP | ●●● upload | ●●● file CSV |

**Cách đọc trung thực.** Movago không có năng lực đơn lẻ nào mà đối thủ không có. Điểm khác là **tổ hợp**: logic cước, tiếng Việt và không cần thay hệ thống. Tổ hợp này dành cho forwarder vừa không dùng CargoWise. Câu này nên thay cho cách trình bày “Movago có, đối thủ chưa rõ” trên slide hiện tại.

## 9. Bối cảnh chiến lược

| Tín hiệu | Ngày | Ý nghĩa |
|---|---|---|
| Loop gọi 95 triệu USD Series C, tổng 210 triệu USD [17] | 17/04/2026 | Vốn chảy vào AI kiểm cước |
| WiseTech dự định thu phí riêng cho AI agent của CargoWise (ghi chú Citi) [18] | 01/10/2026 | Chi phí AI trên CargoWise tăng; khách nhỏ có thể tìm giải pháp rẻ hơn |
| Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC có hiệu lực [19] | 01/07/2026 | Khung hóa đơn điện tử mới thay Nghị định 123/2020 và 70/2025 |
| Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 | 2025 | Yêu cầu xử lý dữ liệu trên chứng từ; lợi thế cho giải pháp lưu dữ liệu tại Việt Nam so với Conlio (lưu trong EU) |

## 10. Lợi thế bền vững

| Lợi thế | Movago hôm nay | Có thể xây | CargoWise | Innomation | ShipCheck |
|---|---|---|---|---|---|
| Hiệu ứng mạng lưới | Yếu | Trung bình: mỗi khách thêm mẫu chứng từ và tên phí, công cụ đọc tốt hơn cho khách sau | Mạnh (hệ sinh thái forwarder) | Yếu | Yếu |
| Chi phí chuyển đổi | Yếu | Trung bình: bảng giá và lịch sử đối chiếu nằm trong Movago | Mạnh | Trung bình | Yếu |
| Lợi thế quy mô | Yếu | Yếu | Mạnh | Trung bình | Trung bình |
| Tài sản vô hình (dữ liệu, thương hiệu) | Yếu | **Mạnh nếu có pilot**: dữ liệu có nhãn về phí cước Việt Nam | Mạnh | Trung bình | Trung bình |

**Điểm yếu cấu trúc của Movago:** chưa có khách, phụ thuộc dữ liệu giá đã duyệt mà khách thường để rải rác, quy mô thị trường nội địa nhỏ nếu chỉ tính forwarder vừa.

## 11. Nội dung đưa vào slide

### Slide 5 · Why now

- **Tiêu đề đề xuất:** “Hóa đơn đã số hóa, việc kiểm vẫn làm tay”.
- **Đoạn 1:** Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC ban hành 30/06/2026, hiệu lực 01/07/2026, thay Nghị định 123/2020 và 70/2025 [19]. **Còn phải đọc toàn văn** để trích điều khoản về phía người mua: nhận hóa đơn, điều chỉnh, thay thế. Bản tóm tắt của Forvis Mazars không đề cập phần này.
- **Đoạn 2:** Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP: dữ liệu chứng từ cần lưu và xử lý đúng quy định.
- **Ba số liệu:** `8,5 tỷ` hóa đơn điện tử năm 2025 [8] · `+32,3%` xuất nhập khẩu 10 tháng 2026 [9] · `4.000+` doanh nghiệp giao nhận [10].

### Slide 11 · Market size

| Ô trên slide | Giá trị | Ghi chú |
|---|---|---|
| TAM | ~1 tỷ USD (2025), CAGR 13–14% | Freight audit & payment toàn cầu [5][6][7] |
| SAM | `[số DN đạt tiêu chí] × 36 triệu đồng/năm` | Ví dụ minh họa: nếu 10% của 4.000 doanh nghiệp đạt tiêu chí thì 400 × 36 triệu ≈ **14,4 tỷ đồng/năm**. Tỷ lệ 10% là giả định, cần thay bằng số lọc từ danh bạ VLA/HLA và khảo sát |
| SOM | **1,08 tỷ đồng/năm** = 30 khách năm thứ 3 × 36 triệu đồng | Minh họa: 30 khách bằng 7,5% của 400 doanh nghiệp SAM, theo lộ trình 1 pilot năm 2027 rồi mở rộng. Đội chốt lại mục tiêu |
| Pilot | 1 forwarder | Theo slide 15 |
| Unit economics | Mốc giá: ShipCheck 99–499 €/tháng [15]; mốc hòa vốn của Movago 3 triệu đồng/tháng | LTV và CAC chưa có dữ liệu. Để `[x]` cho đến sau pilot |

### Slide 13 · Competitive

- **Thay bảng** bằng bảng ở mục 8. Thêm cột CargoWise IPP vì đây là câu hỏi giám khảo dễ hỏi nhất.
- **Tiêu đề đề xuất:** “Không ai kết hợp logic cước, tiếng Việt và không cần thay hệ thống”.
- **Thêm vào speaker notes:** “Với forwarder đã dùng CargoWise, chúng em không cạnh tranh. Nhóm khách đầu tiên là forwarder vừa dùng G.O.L hoặc Excel.”

### Phụ lục #3 · Sao không dùng TMS/ERP

- Điền ô `[Khác biệt với chi phí dự ghi trong TMS]` bằng: “CargoWise so hóa đơn với chi phí dự ghi theo job; Movago so với bảng giá đã duyệt và mở hai căn cứ cạnh nhau. Với phần mềm không có bước kiểm hóa đơn đầu vào như G.O.L, Movago đọc file xuất và bổ sung bước này.”

## 12. Việc còn phải kiểm chứng

1. Đọc toàn văn Nghị định 254/2026 và Thông tư 91/2026, trích điều khoản về phía người mua.
2. Hỏi trong phỏng vấn: forwarder dùng phần mềm gì, có CargoWise không, đã kiểm hóa đơn đầu vào bằng chức năng nào.
3. Đặt lịch demo Innomation hoặc FPT AI Read để xác nhận chúng không xử lý logic cước.
4. Lọc danh bạ VLA/HLA để có số doanh nghiệp đạt tiêu chí cho ô SAM.

## Nguồn

1. Maersk, Terminal handling charges Vietnam (OHC/DHC), 31/03/2026. https://www.maersk.com/news/articles/2026/03/31/terminal-handling-charges-vietnam-ohc-dhc
2. Transportation Insight, Freight audit and payment: protecting profit in soft rates. https://transportationinsight.com/resources/freight-audit-payment-protect-profit-soft-rates/
3. APQC, What is the average cost to process an invoice? https://www.apqc.org/What-Is-the-Average-Cost-to-Process-an-Invoice
4. Ardent Partners, Accounts Payable Metrics that Matter 2025, qua Medius. https://www.medius.com/resources/guides-reports/ardent-partners-accounts-payable-metrics-that-matter/
5. Knowledge Sourcing Intelligence, Freight Audit and Payment Market 2025–2030, qua Research and Markets. https://www.researchandmarkets.com/reports/6176216/freight-audit-payment-market-forecasts
6. Mordor Intelligence, Freight Audit and Payment Market. https://www.mordorintelligence.com/industry-reports/freight-audit-and-payment-market
7. SupplyChainResearch, Buyer’s guide: freight audit & payment. https://www.supplychainresearch.com/research-library/buyers-guide-freight-audit-payment
8. Tạp chí Tài chính Doanh nghiệp, Hơn 20,3 tỷ hóa đơn điện tử đã được xử lý. https://taichinhdoanhnghiep.net.vn/hon-203-ty-hoa-don-dien-tu-da-duoc-xu-ly-d63773.html
9. Cục Thống kê, Tình hình kinh tế – xã hội tháng 10 và 10 tháng năm 2026. https://www.nso.gov.vn/bai-top/2026/11/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-thang-10-va-10-thang-nam-2026/
10. Bộ Công Thương, Báo cáo Logistics Việt Nam 2025. https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf
11. G.O.L, Logistics software / SMS Live. https://gol.vn/services/logistics-software/
12. Elicit Technology, Automating AP with CargoWise Invoice Processing Portal, 20/07/2026 (đối tác WiseTech, không phải tài liệu chính thức). https://elicittechnology.com/newsletter/automating-accounts-payable-with-the-invoice-processing-portal-in-cargowise/
13. Innomation, AutoMatching. https://innomation.vn/product/automatching
14. FPT Cloud, FPT AI Read. https://fptcloud.com/product/fpt-ai-read/
15. ShipCheck. https://shipcheck.com/en
16. Conlio, Terms and conditions. https://www.conlio.com/terms-conditions
17. TechCrunch, Loop raises $95M, 17/04/2026. https://techcrunch.com/2026/04/17/loop-raises-95m-to-build-supply-chain-ai-that-predicts-disruptions/ · Loop Series B: https://www.loop.com/article/loops-series-b
18. TransportManagement.org, WiseTech to charge separately for CargoWise AI agents. https://www.transportmanagement.org/wisetech-to-charge-separately-for-cargowise-ai-agents/
19. Forvis Mazars, Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC. https://www.forvismazars.com/vn/vi/n-ph-m-s-ki-n/c-p-nh-t-v-vi-t-nam/b-n-tin-thong-bao-chuyen-mon/b-n-tin-v-thu-va-phap-ly/ngh-d-nh-254-va-thong-t-91 · Toàn văn: https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-so-254-2026-nd-cp-ve-hoa-don-dien-tu-chung-tu-dien-tu-119260713164251972.htm
