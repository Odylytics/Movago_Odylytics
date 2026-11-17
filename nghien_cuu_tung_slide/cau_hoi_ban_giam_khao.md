# Câu hỏi ban giám khảo có thể hỏi Movago

Bộ câu hỏi để đội tập trả lời trước phần Q&A. Mỗi câu có bản tiếng Anh (giám khảo có thể hỏi bằng tiếng Anh), lý do giám khảo hỏi và ý chính nên trả lời. Câu đánh dấu ⚠️ là câu khó nhất, nhiều khả năng bị hỏi vì trùng với phản biện của cô Diễn ([biên bản họp](../tom-tat-hop-co-Dien-logistics.md)).

Nguyên tắc chung khi trả lời:

- Trả lời trong 30–45 giây: kết luận trước, một số liệu hoặc ví dụ, rồi dừng.
- Số nào là giả lập thì nói là giả lập. Survey trên slide 10 là mẫu, chưa phải kết quả pilot.
- Không biết thì nói chưa biết và nói pilot sẽ đo thế nào. Giám khảo đánh giá cao việc biết mình chưa biết gì.

---

## 1. Vấn đề và khách hàng

**1.1. Ai là người dùng, ai là người trả tiền?**
*Who uses Movago every day, and who signs the cheque?*

- Lý do hỏi: kiểm tra đội có phân biệt người dùng và người mua.
- Ý chính: Operations/CS dùng hằng ngày, vì họ biết mỗi job thực tế dùng dịch vụ nào và họ là người đối chiếu hóa đơn nhà cung cấp. Kế toán trưởng hoặc CFO, cùng trưởng vận hành, là người duyệt chi và quyết định mua.
- Lưu ý: deck V4 (slide 2, slide 10) vẫn ghi Payables là người kiểm. Phải thống nhất trước khi thi, nếu không giám khảo sẽ bắt được.

**1.2. ⚠️ Vấn đề này có thật không, hay chỉ là giả thuyết của đội?**
*How do you know this problem is real? How many people have you talked to?*

- Lý do hỏi: đây là câu hỏi số một ở mọi ideathon.
- Ý chính: hai cuộc nói chuyện với người trong ngành. Một là Laura Tran, CEO TB Logistics JSC. Hai là cô Diễn, làm forwarder từ năm 2006. Cô Diễn xác nhận operation đang đối chiếu tay hóa đơn nhà cung cấp với giá mua, lệch thì gọi nhà cung cấp hỏi lại.
- Không được nói: "khảo sát cho thấy…" khi số liệu survey vẫn là mẫu.

**1.3. Một forwarder mất bao nhiêu tiền hay bao nhiêu giờ vì vấn đề này?**
*What does this problem cost a forwarder today?*

- Ý chính: chưa có số cho forwarder Việt Nam, và đó là việc pilot sẽ đo. Mốc tham chiếu quốc tế: 3–6% hóa đơn cước có lỗi trong một đợt audit điển hình; thu hồi được 1–5% tổng chi cước ([phân tích cạnh tranh](phan_tich_canh_tranh.md)). Ca demo INV-095 chênh +800.000 đ trước thuế trên một dòng phí.
- Cô Diễn thêm hai cái giá phải trả: trả nhà cung cấp trễ thì hãng tàu phạt, thu khách trễ thì lệch dòng tiền.

**1.4. Vì sao kiểm tổng hóa đơn chưa đủ?**
*Why can't they just check the invoice total?*

- Ý chính: INV-095 cộng đúng, nhưng phí chứng từ là 1.300.000 so với 500.000 đã duyệt. Kiểm tổng sẽ cho qua. Phải kiểm từng dòng theo đúng phiên bản giá và điều kiện của lô.

---

## 2. Giải pháp và AI

**2.1. ⚠️ Nếu dữ liệu đầu vào đã sai từ đầu thì Movago kiểm có ý nghĩa gì?**
*If the shipment data is wrong upstream, isn't your check meaningless?*

- Lý do hỏi: phản biện chính của cô Diễn. Người trong ngành sẽ hỏi câu này.
- Ý chính: Movago giả định dịch vụ và giá mua của job đã nằm trong hệ thống, do pricing và operation nhập. Movago kiểm hóa đơn nhà cung cấp theo dữ liệu đó, không sửa nó. Khoản phí không có căn cứ trong job thì đánh dấu và trả lại cho operation, không tự đoán. Bước đầu chuỗi (nhập giá, booking) là lộ trình sau, demo đã có phần dựng bảng giá từ báo giá của hãng.

**2.2. AI làm gì ở đây? Bỏ AI đi thì còn gì?**
*Where exactly is the AI? What's left if you remove it?*

- Ý chính: AI đọc hóa đơn PDF, ảnh chụp, bản quét và báo giá của hãng tàu (mỗi hãng một định dạng), gợi ý gắn tên phí Việt–Anh với mã phí. Phần đối chiếu là quy tắc rõ ràng, không dùng AI, để mỗi kết luận đều có căn cứ mở ra được. Nói thật trong demo: phần AI đọc đang mô phỏng, phần ghép lô, chọn giá, tính lại và nhận bản gửi lại chạy thật.

**2.3. Nếu AI đọc sai số tiền thì sao?**
*What happens when the AI misreads an amount?*

- Ý chính: mỗi trường giữ vị trí trên trang và độ tin cậy. Trường độ tin cậy thấp, hoặc dòng khớp nhiều mức giá, được chuyển cho người kiểm. Movago không duyệt chi, quyền duyệt vẫn thuộc kế toán trưởng.

**2.4. ⚠️ Phần mềm forwarder và MISA đã làm việc này rồi, sao phải dùng Movago?**
*CargoWise, ForwardX and MISA already exist. Why would anyone add Movago?*

- Ý chính: phần mềm nội bộ của forwarder lưu giá mua, MISA lo hóa đơn và thuế. Khoảng trống ở giữa là đối chiếu hóa đơn nhà cung cấp với giá mua đó, đang làm tay. Movago là lớp kiểm nằm giữa hai hệ thống, không thay thế cái nào. Đầu ra là yêu cầu thanh toán dạng CSV để kế toán đưa vào MISA, kết nối MISA trực tiếp sau pilot.
- Không được nói: "chưa có ai làm". Có ForwardX, LogisForce, Viindoo, CargoWise ([phân tích cạnh tranh](phan_tich_canh_tranh.md)).

**2.5. Kết nối với MISA thế nào?**
*How does Movago connect to MISA?*

- Ý chính: hiện xuất CSV yêu cầu thanh toán. Sau pilot làm kết nối qua API của MISA AMIS. Chưa kiểm mẫu nhập của MISA, nên không hứa "nhập thẳng được".

---

## 3. Thị trường và cạnh tranh

**3.1. Thị trường lớn cỡ nào?**
*How big is the market?*

- Ý chính: khoảng 4.000–4.500 doanh nghiệp giao nhận ở Việt Nam (VLA). Freight audit and payment toàn cầu khoảng 1 tỷ USD năm 2025, châu Á – Thái Bình Dương tăng nhanh nhất. Xuất nhập khẩu 10 tháng 2026 đạt 1.010,55 tỷ USD, tăng 32,3%.
- Không được nói: lấy cả 1 tỷ USD làm thị trường của Movago. Nói rõ phân khúc đầu là forwarder vừa và nhỏ ở TP.HCM.

**3.2. ⚠️ Doanh nghiệp logistics chỉ mua giải pháp trọn gói. Ai mua một công cụ chỉ kiểm hóa đơn?**
*Forwarders buy end-to-end suites, not point tools. Who buys this?*

- Lý do hỏi: đây là nhận xét thẳng của cô Diễn.
- Ý chính: Movago không bán thay phần mềm forwarder, mà gắn thêm vào phần mềm họ đang dùng. Người mua là kế toán trưởng hoặc CFO, với lý do cụ thể: tránh chi sai và không trả nhà cung cấp trễ. Nếu pilot cho thấy giá trị nằm ở khoản chênh lệch thật, có thể tính phí theo khoản được xác nhận điều chỉnh.

**3.3. Đối thủ lớn copy tính năng này thì sao?**
*What stops CargoWise or ForwardX from adding this feature?*

- Ý chính: không có rào cản kỹ thuật lớn, và nói thẳng điều đó. Lợi thế là đi trước ở phân khúc vừa và nhỏ: tên phí Việt–Anh, hóa đơn Việt Nam, ảnh chụp Zalo, chi phí thiết lập thấp, và bộ dữ liệu ngoại lệ tích lũy qua pilot.

---

## 4. Mô hình kinh doanh

**4.1. Thu tiền thế nào, giá bao nhiêu?**
*How do you make money and what does it cost?*

- Ý chính: thuê bao theo số hóa đơn xử lý, cộng phí thiết lập khi cần cấu hình riêng. Mức giá chưa chốt, sẽ chốt cùng người mua trong pilot.

**4.2. ⚠️ Khách tiết kiệm được bao nhiêu? Có đủ để trả phí không?**
*Show me the ROI. Is it worth paying for?*

- Ý chính, dùng kịch bản minh họa trong [brief](../colio_ai_project_brief.md): 1.000 hóa đơn/tháng, giảm từ 15 còn 9 phút, giải phóng 100 giờ/tháng, khoảng 235 USD/tháng theo lương 60.000 đ/giờ. Tất cả là giả định.
- Chuẩn bị cho câu hỏi tiếp theo: 235 USD/tháng là thấp. Trả lời thật: giá trị theo thời gian có thể không đủ. Giá trị lớn hơn nằm ở khoản chi sai được chặn và phạt trả trễ được tránh, và pilot sẽ đo đúng hai thứ này.

---

## 5. Pilot và bằng chứng

**5.1. Pilot đo gì, thế nào là thành công?**
*What does the pilot measure, and what counts as success?*

- Ý chính: 1 forwarder ở TP.HCM, 30–100 bộ hồ sơ, 1 tuyến, 1–2 nhà cung cấp, quý 1 năm 2027. Thành công khi:
  - phút thao tác trung vị mỗi hóa đơn giảm ít nhất 30%;
  - mỗi cảnh báo tiền mở ra được căn cứ;
  - công bố precision và recall, kể cả số lỗi bỏ sót.

**5.2. Đã có forwarder nào đồng ý pilot chưa?**
*Do you have a pilot partner signed up?*

- Ý chính: trả lời đúng hiện trạng. Nếu TB Logistics hoặc cô Diễn chưa đồng ý chính thức thì nói "đang trao đổi", nêu bước tiếp theo: xin một bộ hồ sơ đã che thông tin.

**5.3. Số trên slide 10 lấy từ đâu?**
*Where do the survey numbers on slide 10 come from?*

- Ý chính: số liệu mẫu, đã gắn nhãn "Sample pilot". Không trình bày như kết quả thật. Tốt nhất là thay bằng kết quả survey thật trước ngày thi.

---

## 6. Đội và thực thi

**6.1. ⚠️ Đội không ai làm trong ngành logistics. Sao tin được đội hiểu bài toán?**
*None of you works in logistics. Why should we trust you on this?*

- Lý do hỏi: cô Diễn nói đây là rủi ro lớn nhất của đội.
- Ý chính: thừa nhận thẳng. Đội bù bằng ba cách:
  - học từ người trong ngành (Laura Tran, cô Diễn);
  - mời cố vấn có kinh nghiệm forwarder;
  - để người nghiệp vụ xác nhận từng kết quả trong pilot.
- Đội mạnh ở phần đưa sản phẩm ra người dùng thật: AquaGuard có 600+ người dùng, 4 giải trong một năm, và một lõi AI dùng chung.

**6.2. Sau cuộc thi đội có tiếp tục không? Mỗi người làm gì?**
*Will you keep going after this competition? Who does what?*

- Ý chính: mỗi người nêu đúng vai của mình trên slide Team. Nói bước cụ thể trong 30 ngày tới, ví dụ phỏng vấn thêm 2–3 forwarder và xin bộ hồ sơ mẫu.

**6.3. Movago liên quan gì tới AquaGuard?**
*How does AquaGuard relate to Movago?*

- Ý chính: cùng đội Odylytics và cùng lõi AI. Các giải thưởng và số người dùng là của AquaGuard, không phải của Movago. Nói rõ điểm này để giám khảo không nghĩ đội nhận vơ.

---

## 7. Dữ liệu và rủi ro

**7.1. Hóa đơn và giá mua là dữ liệu nhạy cảm. Đội bảo vệ thế nào?**
*Invoices and buy rates are sensitive. How do you protect them?*

- Ý chính: trong pilot thống nhất trước bằng văn bản:
  - quyền sử dụng và quyền truy cập;
  - thời hạn lưu và cách xóa;
  - những trường nào được gửi tới nhà cung cấp AI.
- Tuân thủ Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP. Toàn bộ dữ liệu trong demo là giả lập.

**7.2. Khách đổi cảng đến khi hàng đã lên tàu thì xử lý thế nào?**
*How do you handle exceptions, like a change of destination mid-voyage?*

- Lý do hỏi: cô Diễn đưa đúng ví dụ này.
- Ý chính: bản đầu không tự xử lý ngoại lệ. Dòng nào không có căn cứ trong job hiện tại thì đánh dấu và chuyển cho operation. Danh sách ngoại lệ hay gặp nhất là thứ pilot sẽ thu thập để làm bước tiếp theo.

---

## Câu hỏi để đội tự kiểm tra trước khi thi

- [ ] Deck, demo và video có cùng nói Operations/CS là người kiểm hóa đơn không?
- [ ] Mỗi người trong đội trả lời được câu 1.2, 2.1, 2.4 và 4.2 trong 45 giây chưa?
- [ ] Đã thay số survey mẫu trên slide 10 bằng số thật chưa? Nếu chưa, đã nói rõ là mẫu chưa?
- [ ] Đã hỏi Laura Tran và cô Diễn có đồng ý cho nêu tên khi thi không?
