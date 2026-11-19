# Câu hỏi kỹ thuật giám khảo có thể hỏi Movago

Bổ sung cho [bộ câu hỏi giám khảo](cau_hoi_ban_giam_khao.md), tập trung vào người hiểu công nghệ: dùng công nghệ gì, AI nào, dữ liệu lấy ở đâu, đo độ chính xác ra sao. Mỗi câu có ý trả lời và chỗ dễ bị bắt lỗi. Câu đánh dấu ⚠️ là câu khó nhất.

Nguồn đối chiếu: [web/README.md](../web/README.md), [luồng kiểm tra](colio_ai_hoat_dong_the_nao.md), [bộ thử trích xuất](kiem_thu_trich_xuat/README.md), [nội dung slide](../colio_ai_noi_dung_slide.md) (phụ lục tech stack).

## 0. Bảng sự thật kỹ thuật (cả đội trả lời thống nhất theo bảng này)

| Thành phần | Trong demo hôm nay | Dự kiến cho pilot |
|---|---|---|
| Giao diện | React 18 + TypeScript + Vite, web tĩnh trên Vercel, không có backend. | Web app có backend và đăng nhập theo vai trò. |
| AI đọc hóa đơn PDF, scan, ảnh | **Mô phỏng.** Dòng phí đã trích sẵn trong `invoice-lines.csv`, có trang và vị trí dòng. | Azure AI Document Intelligence hoặc LLM đọc ảnh (chưa chốt, xem mục 2). |
| AI đọc báo giá để dựng bảng giá | **Mô phỏng.** Dòng giá và điểm tin cậy viết sẵn trong `rateQuote.ts`. Duyệt và xuất CSV chạy thật. | Như trên. |
| Ghép lô, chọn bảng giá, tính lại từng dòng | **Chạy thật**, rules engine TypeScript `engine/reconcile.ts`, hàm thuần. | Giữ nguyên hướng: quy tắc, không dùng AI cho phép tính tiền. |
| Nhận bản gửi lại | **Chạy thật**: SHA-256 nội dung tệp (Web Crypto), so lịch sử trong `localStorage`. | Thêm kiểm tra theo trường: nhà cung cấp + ký hiệu + số hóa đơn. |
| Xác minh, xuất CSV | **Chạy thật** trong trình duyệt. | Lưu cơ sở dữ liệu có audit log. |
| Kiểm thử | 14 test Vitest: 8 ca đối chiếu, 3 ca dựng bảng giá, 3 ca ROI. | Bộ đánh giá trên hóa đơn thật có nhãn. |
| Kênh nhận chứng từ (email, Zalo, chụp điện thoại) | **Cảnh mô phỏng** trong story. | Gmail/IMAP, webhook Zalo OA, tải lên. |
| Dữ liệu | **Toàn bộ giả lập**, tạo bằng script `make-sample-pdf.mjs`, `make-sample-quote.mjs`. Ca `INV-VN-020` dựa trên biểu phụ phí công khai của ONE Việt Nam. | 10–20 bộ đã ẩn danh, sau đó 30–100 bộ có quyền sử dụng. |

Câu mở đầu nên thuộc lòng: *"AI đọc chứng từ, quy tắc tính tiền, con người xác nhận. Trong demo, phần đọc là mô phỏng; phần ghép lô, chọn giá, tính lại và nhận bản gửi lại chạy thật, có 14 test."*

---

## 1. Kiến trúc và stack

**1.1. Stack của các bạn là gì? Backend ở đâu?**

- Trả lời: demo là web tĩnh React + TypeScript + Vite trên Vercel, chưa có backend. Mọi logic đối chiếu chạy trong trình duyệt nên demo mở được ở mọi nơi và không gửi dữ liệu đi đâu. Pilot cần backend để nhận email/Zalo, gọi API AI, lưu hồ sơ và audit log.
- Dễ bị bắt: đừng nói "có hệ thống hoàn chỉnh". Nói rõ đây là MVP chứng minh luồng kiểm tra.

**1.2. Kiến trúc pilot gồm những lớp nào?**

- Trả lời theo năm lớp trên slide: (1) nhận chứng từ: email, Zalo OA, tải lên; (2) AI đọc: trích trường, dòng phí, vị trí và độ tin cậy; (3) rules engine: ghép lô, chọn phiên bản giá, tính lại, kiểm trùng; (4) duyệt và xuất: người xác minh, báo cáo CSV, đề nghị thanh toán; (5) hạ tầng: cơ sở dữ liệu có audit log, phân quyền, kết nối ERP/TMS.
- Chuẩn bị thêm: vì sao tách AI khỏi phép tính? Vì kết quả tiền phải tái lập được và giải thích được dòng nào, giá nào; LLM không đảm bảo hai lần chạy cho cùng kết quả.

**1.3. Vì sao không dùng AI cho cả phần đối chiếu?**

- Trả lời: phép tính "số lượng × đơn giá đã duyệt so với số tiền trên hóa đơn" là quy tắc rõ ràng. Viết bằng mã thì kiểm thử được, chạy giống nhau mỗi lần và mỗi cảnh báo đều chỉ ra được hai nguồn. AI chỉ làm chỗ quy tắc không làm được: đọc bố cục khác nhau của từng hãng và gợi ý mã phí cho tên lạ.

**1.4. Rules engine chọn giá thế nào khi có nhiều dòng giá?**

- Trả lời: lọc theo nhà cung cấp, tuyến, loại container, tuyến qua Cái Mép, mã phí, đơn vị, tiền tệ và ngày tính giá (hiệu lực). Nếu còn đúng một dòng thì tính. Nếu không có dòng nào thì "Thiếu căn cứ". Nếu còn hai dòng trở lên mà chưa có quy tắc ưu tiên đã duyệt thì cũng "Thiếu căn cứ" và chuyển người xác minh, không đoán.

**1.5. Hệ thống mở rộng ra sao khi khách có 10.000 hóa đơn/tháng?**

- Trả lời: phần tốn tài nguyên là gọi API đọc chứng từ, xử lý theo hàng đợi và song song được. Rules engine là hàm thuần, rất nhẹ. Nút cổ chai thật là người xác minh ngoại lệ, nên chỉ số cần theo dõi là tỷ lệ hồ sơ phải chuyển người.
- Dễ bị bắt: chưa có số đo tải thực tế; nói là thiết kế, chưa đo.

---

## 2. AI: mô hình nào, làm gì

**2.1. ⚠️ Các bạn dùng AI nào? Tự train hay gọi API?**

- Trả lời: không tự train mô hình. Pilot dùng mô hình có sẵn qua API, ứng viên là Azure AI Document Intelligence (mô hình hóa đơn dựng sẵn, trả về trường, dòng, vị trí trên trang và điểm tin cậy) và LLM đọc ảnh như Gemini hoặc Claude (linh hoạt hơn với bố cục lạ và tên phí Việt–Anh). Chọn bằng cách chạy cả hai trên cùng bộ hóa đơn thật có nhãn rồi so độ chính xác, chi phí và độ trễ. Bộ chấm điểm đã có sẵn trong repo.
- Tham khảo công khai (không phải hóa đơn cước Việt Nam): một benchmark 20 hóa đơn cho Gemini 3 Pro 94,75%, Azure Document Intelligence 90,52%, Claude Sonnet 4.5 90,27%. Một nghiên cứu khác: GPT-4o đọc đúng 98% trường đầu hóa đơn nhưng chỉ 57% dòng hàng. [RevExOS](https://revexos.com/blog/best-ai-model-for-invoice-parsing)
- **Việc đội cần chốt trước buổi thi:** nói một hướng cụ thể thay vì "hoặc". Gợi ý: *"Hướng mặc định là Azure Document Intelligence vì có vị trí và điểm tin cậy cho từng trường; LLM dùng để gợi ý mã phí cho tên lạ và đọc lại khi độ tin cậy thấp."*

**2.2. Tại sao không tự train? Đó có phải là "chỉ gọi API"?**

- Trả lời: với vài chục đến vài trăm hóa đơn của pilot, train riêng không thắng được mô hình nền tảng. Giá trị của Movago không nằm ở mô hình mà ở: dữ liệu bảng giá đã chuẩn hóa, quy tắc chọn giá theo điều kiện lô, luồng chuyển ngoại lệ có bằng chứng và bộ ca ngoại lệ thật thu được trong pilot. Khi có đủ dữ liệu có nhãn, có thể tinh chỉnh (ví dụ custom model của Azure DI cho bố cục của nhà cung cấp lớn).
- Dễ bị bắt: đừng nói "AI độc quyền" hay "mô hình riêng".

**2.3. ⚠️ Điểm tin cậy 0,84 hay 0,71 trên demo lấy từ đâu?**

- Trả lời thật: trong demo là số minh họa, viết sẵn. Ở pilot, Azure DI trả điểm tin cậy cho từng trường. LLM thì không có điểm tin cậy hiệu chỉnh tốt, nên thay bằng kiểm tra chéo: tổng các dòng phải bằng tổng trước thuế, số tiền phải xuất hiện trong văn bản OCR của trang, mã lô phải tồn tại trong hồ sơ, đọc lại hai lần phải trùng nhau. Trường nào trượt một kiểm tra thì chuyển người.
- Đây là câu giám khảo kỹ thuật hay hỏi nhất về demo AI; đừng nói điểm đó do mô hình tính.

**2.4. LLM bịa số (hallucination) thì sao?**

- Trả lời: ba lớp chặn. (1) Prompt yêu cầu để null khi không thấy, không đoán. (2) Giá trị đọc được phải neo vào vị trí trên trang; người dùng bấm mở được đúng vùng gốc. (3) Phép tính tiền chạy bằng quy tắc, và tổng các dòng phải khớp tổng in trên hóa đơn, nên số bịa thường lộ ngay. Movago không bao giờ tự duyệt chi.

**2.5. Hóa đơn tiếng Việt, tên phí lẫn Việt–Anh, không dấu thì sao?**

- Trả lời: tên phí được gắn mã qua danh mục phí của chính doanh nghiệp (ví dụ "Documentation fee", "Phí chứng từ" → DOC). Tên chưa có trong danh mục thì AI gợi ý mã, người dùng xác nhận một lần rồi danh mục học thêm. Demo có ca "Phu phi an ninh cang" không dấu, AI gợi ý ISPS với độ tin cậy thấp và bắt duyệt tay.
- Dễ bị bắt: độ chính xác trên hóa đơn cước Việt–Anh **chưa đo**. Nói rõ đó là việc đầu tiên của pilot.

**2.6. Chi phí AI cho mỗi hóa đơn là bao nhiêu?**

- Trả lời: cỡ vài cent mỗi trang với API đọc chứng từ, nhỏ so với giá thuê bao giả định 3 triệu đồng/tháng. Con số chính xác phụ thuộc mô hình và số trang; đội đo trong pilot.
- **Việc đội cần làm:** tra bảng giá hiện hành của Azure DI và mô hình LLM được chọn, ghi một con số có ngày tra trước buổi thi.

**2.7. Có dùng agent, RAG hay vector database không?**

- Trả lời: không cần cho MVP. Dữ liệu cần tra là bảng giá có cột rõ ràng và hồ sơ lô có mã, tra bằng truy vấn có điều kiện thì chính xác hơn tìm kiếm ngữ nghĩa. Nói thẳng điều này cho thấy đội chọn công nghệ theo bài toán, không theo trào lưu.

---

## 3. Dữ liệu: lấy ở đâu, như thế nào

**3.1. ⚠️ Dữ liệu demo lấy ở đâu? Có phải dữ liệu thật không?**

- Trả lời: toàn bộ là giả lập. Hóa đơn INV-095, báo giá QUOTE-SA-2611 và bảng giá RATE-V3 do đội tạo bằng script; người và công ty trong story là hư cấu. Ca INV-VN-020 dùng mức phụ phí từ biểu công khai của ONE Việt Nam làm căn cứ giả định. Bộ đọc thử INV-095 đạt 45/45 trường nhưng đội **không** dùng số này, vì hóa đơn bố cục đơn giản và người chạy biết trước đáp án.

**3.2. Ở pilot, Movago lấy ba nguồn dữ liệu như thế nào?**

| Nguồn | Cách lấy |
|---|---|
| Hóa đơn, debit note của hãng tàu/đại lý | Chuyển tiếp email vào hộp thư riêng (đọc qua IMAP/Gmail API), gửi qua Zalo OA, hoặc tải lên. Nhiều hãng còn có cổng tải hóa đơn như Maersk MyFinance. |
| Hồ sơ lô (mã lô, B/L, tuyến, container, ngày) | Xuất CSV/Excel từ phần mềm quản lý lô hàng hoặc bảng tính của operations. Tích hợp API với TMS sau pilot. |
| Bảng giá đã duyệt | Từ báo giá của hãng (PDF/email), AI đọc thành dòng giá, pricing duyệt từng dòng rồi xuất bảng giá (luồng `#/rates` trong demo). Biểu local charge công khai của hãng tàu làm căn cứ bổ sung. |

- Dễ bị bắt: chưa xác nhận forwarder nào xuất được hồ sơ lô dạng nào. Đó là câu hỏi số 6 trong danh sách phỏng vấn của brief.

**3.3. Nếu khách không có bảng giá dạng bảng, chỉ có trong email thì sao?**

- Trả lời: đó là lý do có luồng dựng bảng giá từ báo giá. Không có bảng giá đã duyệt thì Movago không tính chênh lệch, chỉ báo "Thiếu căn cứ". Đội không giả vờ kiểm tra khi không có căn cứ.

**3.4. Lấy dữ liệu có nhãn để đánh giá ở đâu?**

- Trả lời: xin 5–10 hóa đơn đã ẩn danh từ ít nhất hai nhà cung cấp, một người điền đáp án bằng tay **trước** khi chạy AI, rồi chạy `score.py` để ra độ chính xác theo trường và theo loại tài liệu (PDF gốc, scan, ảnh chụp). Bộ cấu hình và bộ đánh giá tách riêng; người thứ hai xem lại từng lỗi.
- Bộ dữ liệu công khai MC-OCR có hóa đơn bán lẻ tiếng Việt nhưng chỉ cho mục đích nghiên cứu và khác hóa đơn cước, chỉ dùng thử OCR.

**3.5. Ẩn danh dữ liệu mà vẫn ghép được ba nguồn thế nào?**

- Trả lời: thay mã lô, số B/L, tên khách bằng mã giả nhưng giữ cùng một bảng ánh xạ cho cả hóa đơn, hồ sơ lô và bảng giá, để khóa liên kết vẫn khớp.

---

## 4. Độ chính xác và đánh giá

**4.1. ⚠️ Độ chính xác của hệ thống là bao nhiêu?**

- Trả lời: chưa có số trên hóa đơn thật, và đội không bịa. Pilot đo hai tầng riêng: (1) chất lượng đọc: số trường trích đúng / số trường có nhãn, tách trường đầu hóa đơn và dòng phí; (2) chất lượng kiểm tra: precision = cảnh báo đúng / tổng cảnh báo, recall = sai lệch bắt được / tổng sai lệch thật. Công bố tử số, mẫu số và từng lỗi bỏ sót.
- Phần rules engine thì có bằng chứng ngay: 8 ca đối chiếu có đáp án, chạy `npm test`.

**4.2. Bỏ sót (false negative) hay báo nhầm (false positive) cái nào tệ hơn?**

- Trả lời: với kiểm tra trước khi chi, bỏ sót tệ hơn vì tiền đã đi; báo nhầm chỉ tốn vài phút xác minh. Vì vậy ngưỡng đặt nghiêng về chuyển người khi mơ hồ. Nhưng báo nhầm quá nhiều thì người dùng bỏ qua cảnh báo, nên pilot theo dõi cả hai và chốt ngưỡng cùng người mua.

**4.3. Có dung sai làm tròn không?**

- Trả lời: demo so trên cùng tiền tệ VND, trước thuế, đơn giá cố định nên so bằng nhau. Pilot cần quy tắc dung sai cho làm tròn và tỷ giá khi mở rộng sang USD; đây là mục "đối chiếu đa tiền tệ" trong phần mở rộng.

---

## 5. Kiểm trùng, ngoại lệ, độ bền

**5.1. ⚠️ SHA-256 chỉ bắt được tệp giống hệt. Hãng scan lại hoặc xuất lại PDF thì sao?**

- Trả lời: đúng, SHA-256 chỉ là lớp đầu, bắt bản giống từng byte kể cả đổi tên. Lớp hai là so định danh đọc được: nhà cung cấp + ký hiệu + số hóa đơn, và B/L + mã phí + số tiền. Lớp hai là thiết kế cho pilot, demo chưa làm.
- Dễ bị bắt: đừng nói "hệ thống chống trùng hoàn toàn".

**5.2. Một B/L có nhiều hóa đơn hợp lệ thì có bị báo trùng nhầm?**

- Trả lời: không coi là trùng chỉ vì cùng B/L. Kiểm từng định danh và loại phí; trạng thái "đã trả" cần sổ công nợ hoặc bằng chứng thanh toán.

**5.3. Phí D&D tính theo ngày, hóa đơn điều chỉnh, gộp nhiều lô?**

- Trả lời: ngoài phạm vi MVP và nói thẳng. D&D thiếu ngày miễn phí hoặc mốc lấy/trả container thì chuyển xác minh. Hóa đơn điều chỉnh giữ liên kết với chứng từ gốc. Các loại này nằm trong phần "mở rộng sau khi kiểm chứng" của brief.

---

## 6. Bảo mật, pháp lý, lưu trữ

**6.1. ⚠️ Gửi hóa đơn và giá mua lên API của Microsoft/Google có an toàn không?**

- Trả lời: giá mua là bí mật kinh doanh, nên trước pilot thống nhất bằng văn bản: trường nào được gửi tới nhà cung cấp AI, chọn gói API cam kết không dùng dữ liệu để huấn luyện, chọn vùng máy chủ gần (ví dụ Đông Nam Á), thời hạn lưu và cách xóa. Chỉ gửi ảnh hóa đơn đi đọc; bảng giá và phép đối chiếu nằm ở hệ thống của Movago, không cần gửi cho AI.
- Pháp lý: Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP. Hóa đơn chủ yếu là dữ liệu doanh nghiệp nhưng có thể chứa tên, số điện thoại nhân viên; chuyển ra nước ngoài cần đánh giá tác động theo quy định. Đội nên nói *"sẽ rà với người có chuyên môn pháp lý trước pilot"* thay vì khẳng định chi tiết.

**6.2. Có chạy on-premise hoặc lưu dữ liệu tại Việt Nam được không?**

- Trả lời: phần rules engine và cơ sở dữ liệu triển khai được tại Việt Nam hoặc trên máy chủ của khách. Phần đọc AI phụ thuộc nhà cung cấp; nếu khách bắt buộc không đưa dữ liệu ra ngoài thì cần OCR chạy nội bộ, chất lượng phải đo lại.

**6.3. Phân quyền và audit log?**

- Trả lời: mỗi kết quả ghi người xác minh, thời điểm, lý do và căn cứ; cảnh báo cũ được giữ khi chạy lại. Demo ghi trong trình duyệt; pilot lưu ở cơ sở dữ liệu với vai trò AP, operations, pricing, kế toán trưởng.

---

## 7. Tích hợp

**7.1. Kết nối MISA, CargoWise, phần mềm forwarder ra sao?**

- Trả lời: hôm nay xuất CSV báo cáo và đề nghị thanh toán. Sau pilot: API MISA AMIS và API của TMS khách đang dùng. Chưa kiểm tra mẫu nhập của MISA, nên không hứa nhập thẳng.

**7.2. Hóa đơn điện tử XML theo quy định Việt Nam có giúp bỏ được OCR không?**

- Trả lời: có, với hóa đơn GTGT điện tử của nhà cung cấp trong nước, đọc XML chính xác hơn đọc PDF và là hướng mở rộng trong brief (Nghị định 254/2026/NĐ-CP, Thông tư 91/2026/TT-BTC). Nhưng debit note của hãng tàu, đại lý nước ngoài và ảnh gửi qua Zalo vẫn cần đọc ảnh/PDF, và hóa đơn đến thường muộn hơn đề nghị chi. Đây là câu tốt để thể hiện đội hiểu bối cảnh Việt Nam.

---

## 8. Câu bẫy về demo

**8.1. "Cho tôi tải một hóa đơn của tôi lên thử."**

- Trả lời: demo không đọc tệp lạ vì bước AI là mô phỏng; tệp tải lên chỉ dùng để kiểm trùng bằng SHA-256. Mời giám khảo thử ca gửi lại, ca thiếu giá hoặc tự sửa bảng giá trong `#/demo` để thấy rules engine chạy thật.
- Chuẩn bị: một người trong đội thao tác được ca INV-095-resent và INV-095-NORATE trong 30 giây.

**8.2. "Code ở đâu? Có test không?"**

- Trả lời: `web/src/engine/reconcile.ts` là hàm thuần, không phụ thuộc giao diện; `npm test` chạy 14 test. Có thể mở repo nếu giám khảo yêu cầu.

**8.3. "Phần nào do AI viết code?"**

- Trả lời trung thực: đội dùng công cụ AI hỗ trợ lập trình và nghiên cứu, còn quy tắc nghiệp vụ, ca kiểm thử và đáp án do đội đặt và kiểm.

---

## Việc cần làm trước buổi thi

- [ ] Chốt một câu trả lời về mô hình AI cho pilot (mục 2.1), không để "hoặc".
- [ ] Tra giá API hiện hành, ghi chi phí/trang có ngày tra (mục 2.6).
- [ ] Nếu kịp: chạy `score.py` trên 3–5 hóa đơn thật đã ẩn danh để có một con số đội tự đo, ghi rõ mô hình, ngày, số hóa đơn.
- [ ] Mọi người nhớ bảng sự thật ở mục 0, nhất là phần "mô phỏng" và "chạy thật".
- [ ] Bỏ chữ "AI độc quyền", "chính xác 99%" khỏi slide và lời nói nếu có.
