# Nguồn dữ liệu và chứng từ công khai cho Colio

Danh mục phục vụ chuẩn bị đầu vào. Mẫu công khai dùng để tham khảo bố cục và điều kiện tính phí. Pilot cần bộ hồ sơ do doanh nghiệp cho phép sử dụng, có **chứng từ đề nghị chi, hồ sơ lô và căn cứ giá của cùng một lô**. [Luồng kiểm tra và demo chính](colio_ai_hoat_dong_the_nao.md) · [Kế hoạch pilot](../colio_ai_project_brief.md)

## 1. Nguồn công khai theo loại đầu vào

| Đầu vào | Tài liệu tìm được | Cách dùng |
|---|---|---|
| **Hóa đơn cước biển** | Maersk công bố mẫu export invoice hai trang với số vận đơn, từng dòng phí, số lượng, đơn vị, đơn giá, tiền tệ, thuế và loại container. [PDF mẫu hóa đơn Maersk](https://www.maersk.com/~/media_sc9/maersk/news/advisories/files/2024/freight-invoice-template.pdf) | Mẫu hãng tàu có nhiều trường được thay bằng ký tự X. Dùng tham khảo cách trình bày và danh sách trường cần trích. |
| **Bản thể hiện hóa đơn tại Việt Nam** | Tài liệu hướng dẫn kiểm tra chữ ký hóa đơn của Maersk Việt Nam có ảnh minh họa hóa đơn năm 2017, thể hiện số vận đơn, đơn giá VND, tỷ giá, tiền trước thuế và thuế. [PDF Maersk Việt Nam](https://www.maersk.com/~/media_sc9/maersk/local-information/files/asia-pacific/vietnam/overview/lc-7.pdf) | Tham khảo bố cục tiếng Việt và cách tách tiền trước thuế. Đây là mẫu lịch sử. |
| **Debit note** | CMA CGM Việt Nam hướng dẫn xem và tải Debit Note/Invoice từ cổng của hãng. SotaFMS công khai bảng trường của mẫu debit note, gồm số B/L, cảng đi/đến, số lượng, đơn giá và tiền tệ. [PDF CMA CGM Việt Nam](https://www.cma-cgm.com/assets/public/documents/How%20to%20Get%20Debit%20Note%20-%20VN.pdf?VersionId=bu49t55hUll9I4Mn08UkZewEPCGrpuCA) · [Tài liệu mẫu in SotaFMS](https://www.sota-solutions.com/solution/freight-forwarding/documentation/16.0/applications/freight/debit_note.html) | Dùng xác định trường cần lưu nếu khách hàng thử nghiệm nhận debit note trước khi trả tiền. Hướng dẫn CMA CGM mô tả thao tác trên tài khoản khách hàng. |
| **Hồ sơ lô hàng** | CMA CGM có biểu mẫu theo cấu trúc vận đơn với số booking, số B/L, số container, cảng đi/đến và số lượng. Maersk Developer Portal công bố hướng dẫn kèm liên kết mẫu dữ liệu tạo và xác nhận booking trong mục *Payload examples*. [PDF mẫu CMA CGM](https://www.cma-cgm.com/assets/public/pdf/Shipping%20instructions%20format%20-%20CMA-CGM.pdf) · [Hướng dẫn dữ liệu booking của Maersk](https://edpmediastorage.blob.core.windows.net/media/Migration-Guide-Ocean-Booking-v2-pilot-to-DCSA-Ocean-Booking-v2-0-1_20250708.pdf#page=3) | PDF dùng học các trường trên chứng từ. Hướng dẫn API giúp hình dung dữ liệu có cấu trúc. Lần rà này xác minh được tài liệu PDF và tên mẫu, chưa mở được file JSON trực tiếp. |
| **Bảng giá theo điều kiện tại Việt Nam** | ONE Việt Nam công bố mức phí hàng nhập/xuất từ 01/04/2026 với mã phí, số tiền trước và sau VAT, đơn vị, loại container và điều kiện. [Thông báo biểu phí ONE Việt Nam](https://vn.one-line.com/sites/vietnam/files/2026-03/Customer%20Advisory%20for%20Surcharge%20-%20Vietnam.pdf) | Dùng làm căn cứ cho các ca giả lập. Với hồ sơ thật, dùng báo giá hoặc hợp đồng áp dụng cho chính lô đó. |
| **Biểu phí để đối chiếu thêm** | PIL công bố bảng phí Việt Nam với nhóm THC và D/O, đơn vị tính và ngày áp dụng. Bảng hàng nhập ghi số tiền đã gồm VAT theo cách trình bày của hãng. [PDF biểu phí PIL Việt Nam](https://www.pilship.com/wp-content/uploads/2026/03/VN-local-charges-1.pdf) | Dùng để kiểm thử tình huống nguồn giá có cơ sở thuế khác nhau. |

## 2. Bộ mẫu kiểm thử theo mục đích

- **Kiểm tra logic ghép ba nguồn.** ParcelProof có dữ liệu điền sẵn cho hồ sơ chuyến, dòng hóa đơn và bảng giá, với các tình huống giả lập để chọn trên trang. Các ca này thuộc chuyển phát ở Mỹ. Dùng tham khảo cách tổ chức đầu vào và nhãn kết quả của một bài toán đối soát. [ParcelProof — các bộ CSV mẫu trên trang](https://apps.aichieve.net/parcelproof)
- **Kiểm tra AI đọc hóa đơn.** Invoice Extraction Benchmark có 181 tài liệu giả lập, trong đó tác giả phân loại 16 mẫu là hóa đơn vận tải, kèm dữ liệu đáp án. Dữ liệu công bố theo CC BY 4.0 và có yêu cầu ghi công nêu trong repo. Dùng cho trích xuất trường và dòng phí. [InvoiceParser Pro — bộ benchmark và hướng dẫn](https://github.com/DrewKraken/invoice-extraction-benchmark)
- **Kiểm tra OCR tiếng Việt.** Bộ dữ liệu MC-OCR có ảnh hóa đơn bán lẻ và nhãn văn bản theo dòng. Ban tổ chức giới hạn dữ liệu cho mục đích nghiên cứu và yêu cầu đăng ký bằng thỏa thuận sử dụng trước khi tải. [RIVF2021 MC-OCR — bộ dữ liệu và điều kiện](https://www.rivf2021-mc-ocr.vietnlp.com/dataset)

## 3. Ca kiểm thử bổ sung theo biểu phí ONE

Giả lập **một vận đơn và một container khô 20 feet** nhập trực tiếp vào TP.HCM, ngoài trường hợp đi qua Cái Mép, thuộc dòng giá chung trong biểu phí ONE áp dụng từ 01/04/2026. Giả định biểu phí công bố là mức áp dụng cho lô demo. Hóa đơn mô phỏng có hai dòng, đều tính **trước VAT**.

| Mã phí | Mức theo biểu phí | Số ghi trên hóa đơn giả lập | Kết quả kỳ vọng |
|---|---:|---:|---|
| THD · Phí làm hàng tại cảng đích | 3.000.000 đ cho 20 feet khô | 4.800.000 đ | **Chênh +1.800.000 đ.** Mức ghi trên chứng từ trùng mức của container 40 feet khô trong bảng. |
| DOF · Phí chứng từ đầu nhập | 950.000 đ/vận đơn | 950.000 đ | Khớp |

**Dữ liệu thật** trong ca trên là các mức phí và điều kiện được ONE công bố. **Dữ liệu giả lập** là lô hàng, số hóa đơn và khoản phí bị tính theo sai loại container. Các mẫu Maersk và CMA CGM dùng tham khảo bố cục tài liệu. [ONE Việt Nam — dòng THD và DOF](https://vn.one-line.com/sites/vietnam/files/2026-03/Customer%20Advisory%20for%20Surcharge%20-%20Vietnam.pdf)

## 4. Checklist nhận bộ mẫu từ doanh nghiệp

- **Chứng từ đề nghị chi.** Giữ nhà cung cấp, định danh, mã tham chiếu, dòng phí, đơn vị, cơ sở thuế và trạng thái bản gốc, gửi lại hoặc điều chỉnh.
- **Hồ sơ lô.** Giữ mã lô hoặc liên kết B/L, tuyến, loại và số lượng container, mốc áp dụng giá. Dùng cùng mã giả ở các nguồn khi ẩn danh.
- **Căn cứ giá.** Giữ phiên bản, ngày hiệu lực, đơn vị, tiền tệ, cơ sở thuế và phê duyệt phát sinh nếu có.
- **Đáp án nghiệp vụ.** Nhờ AP hoặc pricing ghi kết quả đã xác nhận, tài liệu dùng để quyết định và khoản điều chỉnh nếu có. Gắn nhãn nguồn thật hoặc giả lập và lưu điều kiện sử dụng.
