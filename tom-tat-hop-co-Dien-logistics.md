# Tóm tắt buổi họp tư vấn với cô Diễn: Dự án AI cho doanh nghiệp logistics / forwarder

- **Ngày:** 17/11/2026
- **Thành phần:** Quân và team (Research and Engineering Group); cô Diễn, người làm trong ngành logistics/forwarder từ năm 2006
- **Mục đích:** Xin góp ý của người trong ngành về dự án dùng AI hỗ trợ kế toán (đoạn debit note → hóa đơn) cho công ty forwarder

> **Lưu ý về bản ghi:** Biên bản này dựa trên bản ghi âm tự động, nên một số tên và thuật ngữ bị nhận sai. Cô tự xưng là "Diễn", bản ghi có chỗ ra "Yến", "Duy Yến", "Diễm", "dì Joy". "Công ty folder / Forder" là **công ty forwarder**. "Merz / Simay / MCMA" nhiều khả năng là hãng tàu **Maersk / CMA CGM**. "Bọt" là **port (cảng)**. "Mai Sĩ Cúc / IC Cúc / IC Phúc" là tên khách hàng ví dụ.

---

## 1. Tóm tắt nhanh

- **Phần debit note → hóa đơn của nhóm được cô đánh giá "tạm ổn"**, nhưng cô **không góp ý được về hiệu quả**, vì đây chỉ là khâu cuối của cả chuỗi. Dữ liệu sai từ đầu thì kiểm nhanh ở cuối cũng không còn ý nghĩa.
- **Mục tiêu của nhóm là đúng:** dùng AI giảm sai lệch dữ liệu và giảm chi phí nhân sự. Nhưng **chưa đủ để thành một sản phẩm bán ra thị trường.**
- **Doanh nghiệp logistics chỉ mua giải pháp trọn vẹn**, không mua lẻ một đoạn. Thị trường đã có nhiều phần mềm, và phần kế toán thì phần mềm forwarder nào cũng có.
- **Rủi ro lớn nhất của nhóm là làm trái ngành**, dễ sai **điểm chạm**: làm ra giải pháp tốt nhưng doanh nghiệp không cần, không dùng.
- **Lời khuyên cuối:** Cần người cố vấn có kiến thức logistics, **hoặc** chọn mảng gần kinh nghiệm của nhóm hơn như **vận tải / điều phối xe**. Cô sẽ gửi một hai phần mềm để tham khảo.

---

## 2. Bối cảnh của nhóm

- Nhóm thuộc **Research and Engineering Group**, một startup xuất phát từ Đại học Công nghệ Sydney (UTS) và Đại học Bách Khoa.
- Nhóm từng làm phần mềm **điều phối xe cứu hộ ở Úc**.
- Hiện nhóm đang tìm hiểu và thử nghiệm **ứng dụng AI cho doanh nghiệp**, và tự chọn đề tài này (không theo yêu cầu của giáo viên).
- Brief nhóm gửi cô tập trung vào **phần cuối chuỗi: từ debit note đến hóa đơn**, gồm so sánh giá, kiểm tra chứng từ (CMR, POD, hóa đơn nhà xe...).

Nhận xét của cô: Làm AI cho doanh nghiệp hiện **đang rất được cần**, nên hướng đi không sai. Nhưng góc nhìn của nhóm **còn dừng ở một góc nhỏ** của phần mềm, trong khi các công ty logistics **đã đưa gần hết công việc lên hệ thống**.

---

## 3. Câu hỏi mở đầu và hai lựa chọn cô đưa ra

**Câu hỏi đầu tiên của cô:** Nhóm chỉ làm kế toán, hay làm phần mềm cho cả công ty forwarder từ A đến Z (pricing → sales → documentation → operation → kế toán)? Kế toán ở đâu đang có điểm nghẽn mà phần mềm có thể giải quyết hoặc hỗ trợ?

**Hai lựa chọn:**
1. **Chỉ góp ý phần kế toán của nhóm.** Cô sẽ xem mục tiêu, cách kiểm tra, khả năng giảm chi phí nhân sự... Phần này "khá ổn, tạm ổn", nhưng **phần mềm forwarder nào cũng đã có**.
2. **Nghiên cứu cách dùng AI giúp doanh nghiệp logistics chính xác hơn và bớt cồng kềnh khi vận hành.** Hướng này **phải đi từ điểm đầu tiên** của quy trình.

→ **Nhóm chọn hướng 2** và nhờ cô tư vấn từ góc nhìn người làm forwarder.

---

## 4. Kiến thức ngành cô chia sẻ

### 4.1. Forwarder là gì

- Logistics là dịch vụ hậu cần liên quan đến xuất nhập khẩu. **Bản chất của ngành không thay đổi từ xưa đến nay.**
- **Carrier (nhà vận tải chính)** là bên sở hữu phương tiện, như hãng tàu (Maersk, CMA CGM...) hay hãng bay (Vietnam Airlines).
- **Forwarder là bên trung gian (middle party).** Họ **không có tàu, xe hay máy bay**, nhưng vẫn bán được dịch vụ vận tải cho khách hàng cuối cùng, tức là **thay mặt nhà vận tải**.
- Ngoài việc chở hàng, forwarder còn lo các dịch vụ đi kèm:
  - **Thủ tục hải quan** để hàng được thông quan khỏi Việt Nam
  - **Đóng gói (packaging)**. Ví dụ khách đưa 10 bịch snack thì phải đóng vào thùng.
  - **Chứng từ** để thông quan
  - **Xe tải (trucking)** đến tận nơi lấy hàng, chở ra sân bay hoặc cảng
  - Ở nước đến (ví dụ Mỹ) có **đại lý (agent)**, cũng là một công ty logistics, lo phần nhập khẩu tương tự

### 4.2. Đối tượng "logistics" rất rộng

Mọi công ty liên quan đến việc đưa một lô hàng từ điểm A đến điểm B, trong nước hay quốc tế, đều gọi là công ty dịch vụ logistics: trucking, hàng không, tàu biển, vận tải nội địa, đóng gói bao bì... → **Nhóm phải xác định lại đối tượng và mục tiêu của dự án.**

### 4.3. Ba bộ phận lớn trong công ty forwarder

1. **Sales marketing**, gồm cả **pricing**. Ví dụ một đội 5 người: 1 sales manager, 3 sales executive, 1 pricing.
2. **Operation / Documentation / CS**: làm booking, chứng từ, theo dõi lô hàng.
3. **Kế toán**: khâu cuối cùng, chờ dữ liệu từ các bộ phận trước.

---

## 5. Quy trình một lô hàng (ví dụ: xuất container từ TP.HCM đi Los Angeles)

### Bước 1: Pricing (lấy giá)

- Forwarder đứng giữa nên phải có **bảng giá cước cập nhật hằng tháng**. Giá biến động theo giá dầu và mùa cao điểm, **không bao giờ có hiệu lực mãi**.
- Người làm pricing **gọi tất cả hãng tàu** để lấy giá chung và giá theo nhu cầu của sales ("anh update giá tháng 11, tháng 12 cho em").
- **Sales manager lập kế hoạch giá.** Ví dụ gần Tết đẩy hàng đi Mỹ, pricing đi lấy giá các hãng theo kế hoạch đó.
- Sales không nên tự đi hỏi giá vì mất thời gian, nên công ty bố trí **trợ lý giá / pricing team**.
- Pricing **nhập dữ liệu giá vào hệ thống**. Sales chỉ cần mở phần mềm ra tra.
- 👉 **Chỗ AI có thể giúp:** Nhập bảng giá vào hệ thống bằng AI thay cho nhập tay. Cô nói: "Bạn pricing đó có thể là một con người, có thể là một task mà các bạn đưa AI vào."

### Bước 2: Sales báo giá (quotation)

- Sales gặp khách, mở điện thoại hoặc laptop tra giá (ví dụ đi Los Angeles 10.000, đi Singapore 2.000) và **chốt trong khoảng 1 phút 30 giây**.
- Sales bán được nhờ hai thứ: **kỹ năng bán hàng** và **dữ liệu giá từ pricing**.
- **Báo giá phải liệt kê từng dịch vụ và giá tương ứng.** Cô ví như quán cà phê hỏi khách lấy combo cà phê với bánh hay chỉ một ly nước. Khách dùng bao nhiêu dịch vụ (cước, kéo xe, tờ khai hải quan, đóng gói...) thì báo giá có bấy nhiêu dòng.
- Báo giá cần ghi rõ **điều kiện: giá đã bao gồm gì, chưa bao gồm gì**.
- Trước đây sales về văn phòng gõ Word, Excel mới ra báo giá.
- 👉 **Chỗ AI có thể giúp:** Bấm một lần là ra quotation, kéo đúng giá pricing vừa nhập. Nhanh hơn, gọn hơn, đúng hơn.

### Bước 3: Kiểm soát lợi nhuận khi đặt giá bán

- Giám đốc đặt quy tắc: **"Mở công ty là không được lỗ."** Mỗi khu vực có mức lời tối thiểu. Ví dụ hàng châu Á lời khoảng 10–15% (giá 2.000 thì lời 200–250), Mỹ/Canada có mức riêng.
- Sales không thể lô nào cũng gọi hỏi giám đốc. Sales muốn bán rẻ để giành khách, nhưng rẻ quá thì sếp không cho.
- 👉 **Chỗ AI có thể giúp:** Hệ thống cài sẵn mức lời. Sales mở bảng giá là thấy giá mua (ví dụ 10.000) và giá bán tối thiểu (ví dụ 11.000 nếu lời 10%). Cô nói: **"AI đã can thiệp ngay từ lúc pricing rồi."**

### Bước 4: Chốt hợp đồng và báo nội bộ

- Bán xong thì ký hợp đồng (thỏa thuận giữa công ty và khách, ví dụ chở container đi Los Angeles giá 10.000).
- **Admin** soạn hợp đồng theo mẫu, kèm bảng giá sales vừa bán và các điều kiện.
- Sales **gửi email báo cho các team liên quan**: đã giành được lô hàng nào, giá bao nhiêu, đang làm theo quy trình nào. Sales manager xác nhận giá **nằm trong mức lời cho phép**, không lỗ, không rủi ro.

### Bước 5: Booking

- Trong team operation có người **gọi hãng tàu lấy booking** rồi gửi cho khách.
- **Mỗi hãng tàu có định dạng và phần mềm riêng**, nhưng thông tin chính giống nhau, như vé máy bay: ai đặt, khởi hành lúc nào ở đâu, đến lúc nào ở đâu. Tùy khu vực có thêm vài trường riêng.
- Operation phải **nhập booking vào hệ thống của công ty**.
- ⚠️ **Đến đây đã có 3 người nhập dữ liệu cho cùng một lô hàng: pricing, sales, operation.**
- 👉 **Chỗ AI có thể giúp:** Đọc booking từ nhiều định dạng khác nhau và tự nhập vào hệ thống.

### Bước 6: Chứng từ

- Đến ngày tàu chạy thì các chứng từ liên quan được tạo ra.

### Bước 7: Công nợ

- Thời điểm thu tiền tùy thỏa thuận: thu khi tàu chạy, hoặc khách VIP được trả sau khi hàng đến (ví dụ nợ 30 ngày). Việc này tùy **hạn mức công nợ** công ty cấp cho khách.

### Bước 8: Mở job / file number

- Kế toán mở **số job (file number)** cho lô hàng, ví dụ `HCM 01 12 01 001`.
- Từ số này, hệ thống kéo ra toàn bộ thông tin: khách hàng, người nhận ở nước đến, sales phụ trách, hãng tàu, số container, số bill, các dịch vụ và giá từng dịch vụ.

### Bước 9: Đối chiếu báo giá với thực tế và lập debit note (phần trong brief của nhóm)

- **Debit note** là phiếu liệt kê số tiền khách phải trả, để khách đối chiếu.
- **Ngoại lệ thường gặp:** Lúc báo giá khách lấy 4–5 dịch vụ ("anh không có người, em làm hết cho anh"), nhưng khi làm hàng khách tự chở hàng, bỏ trucking, chỉ còn 3 dịch vụ. Số dịch vụ thực tế có thể **bằng, ít hơn hoặc nhiều hơn** báo giá.
- **Báo giá chỉ là giá báo trước. Operation là người chốt** lô hàng thực tế dùng những dịch vụ nào.
- Trước đây người làm phải gõ tay ra form Excel hoặc Word.
- 👉 **Chỗ AI có thể giúp:** So dữ liệu từ báo giá của sales với dữ liệu operation nhập thực tế, rồi lập debit note đúng với những gì đã làm.

### Bước 10: Gửi debit note cho khách xác nhận

- Gửi khách bảng chi phí / debit note để khách so với báo giá ban đầu và **đồng ý tổng tiền**.

### Bước 11: Xuất hóa đơn qua MISA

- Sau khi khách xác nhận mới đưa vào hệ thống để **xuất hóa đơn theo quy định thuế Việt Nam**.
- **MISA** là phần mềm kế toán phổ biến nhất ở Việt Nam, đã kết nối sẵn với cơ quan thuế. Doanh nghiệp dùng MISA không phải làm tay.

---

## 6. Phía chi phí: kiểm hóa đơn nhà cung cấp (vendor) và payment request

*(Phần trả lời câu hỏi của Quân về việc kiểm CMR, POD, hóa đơn nhà xe trước khi trả tiền)*

- Forwarder **chỉ có hai bàn tay**, mọi dịch vụ đều thuê ngoài. Một lô hàng có thể có nhiều **hóa đơn đầu vào**, ví dụ:
  - Nhà xe giao hàng nhanh: 1.000.000đ
  - Công ty đóng gói: 500.000đ
  - Hãng tàu: cước 1.000 USD
  - Bên làm thủ tục hải quan
- **Ai kiểm? Operation / CS, không phải kế toán.** Kế toán chỉ có dữ liệu kéo từ hệ thống ra, không nắm nghiệp vụ sales và operation. Operation biết lô hàng có bao nhiêu việc, bao nhiêu vendor, ai làm việc gì.
- **Cách kiểm:** So hóa đơn vendor với **giá mua đã lưu trong hệ thống** (giá pricing hoặc sales đã mua). Nếu lệch, ví dụ đã thỏa thuận 800 mà hóa đơn ghi 1 triệu, thì **gọi vendor hỏi lý do** (có thể có phí phát sinh hai đầu...).
- **Sau khi đối chiếu xong trên phần mềm:**
  1. **Khóa dữ liệu job** để không ai sửa được
  2. Tạo **payment request** (yêu cầu thanh toán cho vendor)
  3. **Xuất debit note** (bấm một lần là ra các khoản cần thu khách)
  4. **Chuyển lệnh sang kế toán.** Trước đây phải gửi email, mỗi ngày cả trăm email. Giờ chỉ cần bấm nút trên hệ thống.
- **Phía kế toán:** Mỗi sáng mở **danh sách việc** có cảnh báo màu: đỏ là gấp, xanh là theo yêu cầu, vàng..., cuối cùng là đã xong. Hệ thống cũng có thể gửi email. Đây là **SOP (Standard Operating Procedure)** do ban giám đốc đặt ra.
- **Vì sao cần chặt chẽ:**
  - Trả vendor trễ thì **hãng tàu phạt tiền trả chậm**
  - Thu tiền khách trễ thì **lệch dòng tiền**
  - Hệ thống giúp dữ liệu không bị lệch hay bị sửa tùy tiện, tránh cảnh "ai sửa chứng từ của tôi?"

---

## 7. Mô hình phần mềm của công ty logistics ở Việt Nam

- Phần mềm nội bộ của cô **phục vụ từ sales đến operation, và cũng xuất được hóa đơn, nhưng cô không dùng phần hóa đơn**, vì **nó khó kết nối với thuế**.
- Nên công ty logistics Việt Nam thường dùng **hai phần mềm**:
  1. **Phần mềm nội bộ** cho chuỗi công việc từ sales đến operation
  2. **MISA** để xuất hóa đơn, làm báo cáo, thuế
- Kế toán Việt Nam **rất thích mô hình này** vì:
  - MISA đã có sẵn đường kết nối với cơ quan thuế
  - Dữ liệu được đổ từ phần mềm nội bộ sang MISA, **không phải sửa tay, chỉ cần kiểm lại**
- **Câu hỏi cô đặt ra cho nhóm:** Phần mềm của nhóm kết nối với MISA thế nào? MISA hiện đã có thể kết nối với phần mềm khác và kéo toàn bộ dữ liệu lô hàng từ operation sang.
- Nếu nhóm chỉ dùng AI giúp đoạn cuối chính xác hơn thì thực chất là **làm cho công việc của MISA chuẩn hơn**. Cô nói đùa: "Khi đó MISA thuê luôn Quân về làm."

---

## 8. Độ phức tạp: kiến thức ngành và ngoại lệ

- Làm phần mềm logistics trọn gói cần **khối kiến thức khổng lồ**. Ví dụ trên thế giới có rất nhiều cảng, mỗi cảng có **mã quốc tế** (UN/LOCODE). Chỉ nhập dữ liệu đó thôi đã mệt.
- Mỗi khâu có **hàng trăm tình huống ngoại lệ, không kiểm soát được, không lường trước được**:
  - **Ngoại lệ trước khi làm hàng** (ví dụ khách đổi từ Hà Nội sang Đà Nẵng, đổi chuyến) thì dễ, chỉ cần chỉnh lại.
  - **Ngoại lệ sau khi hàng đã lên tàu** mới khó. Ví dụ báo giá đi Los Angeles, hàng đã đến cảng chuyển tải, khách lại muốn đổi sang New York hoặc Colombia. Lúc đó đổi cảng đến thế nào, báo giá xử lý thế nào?
- Đây là kiến thức chuyên môn mà cô nói **không thể giải thích hết trong vài phút**.
- **Bản demo sáng nay của Quân chỉ chạy được khi dữ liệu đầu vào trơn tru**, không có thay đổi hay sai khác. Thực tế thì không như vậy.

---

## 9. Lịch sử phần mềm logistics và đối thủ

- **Năm 2006** cô làm hệ thống đầu tiên. Khi đó gần như làm tay: nhập dữ liệu vào, sai thì xuất ra Excel sửa.
- Phần mềm đời đầu **tĩnh, không sửa được**. Mỗi lần sai hoặc cần xuất báo cáo phải gọi IT đến gõ lại, "IT dính với mình như hình với bóng".
- Khoảng **2010** có phiên bản chạy trực tuyến. **2015** công ty cô **tự viết phần mềm**, và **đến nay vẫn còn phải điều chỉnh**.
- **Phần mềm logistics thường ra đời như sau:** Công ty dịch vụ tự viết vì họ biết mình cần gì. Họ thuê IT, có một người như cô ngồi kể quy trình, IT chuyển thành code.
- **Lợi thế của người trong ngành:** Họ biết quy trình và điểm nghẽn sẵn, **chỉ phải học thêm kỹ thuật**. Nhóm thì ngược lại.
- Sau này định dạng dữ liệu được chuẩn hóa nhiều hơn, nên **ngày càng nhiều công ty phần mềm logistics ra đời**. Thị trường đang có **khá nhiều** sản phẩm.

### Tham khảo thêm (tra cứu sau buổi họp, không phải ý của cô)

- **Quốc tế:** CargoWise (WiseTech Global, các forwarder lớn hay dùng), Magaya, GoFreight. Riêng phần tra giá cước có Freightos / WebCargo.
- **Việt Nam:** ForwardX (nhận giải Sao Khuê 2026, định vị là bài toán logistics nằm ở dữ liệu bị chia cắt chứ không phải thiếu phần mềm, rất trùng với ý cô Diễn), LogisForce (AFR Solutions), Viindoo (module quản lý forwarder).
- Kế toán: MISA (có MISA AMIS), Accnet ERP (Lạc Việt) cho doanh nghiệp vận tải.

---

## 10. Doanh nghiệp mua phần mềm như thế nào

- **Doanh nghiệp chỉ mua khi có một chuỗi hoàn chỉnh.** Giám đốc nói: "Làm cho tôi phần mềm để nhân viên làm đúng hơn, nhập liệu nhanh hơn." Họ **mua từ đầu**, không mua lẻ kiểu "kế toán của tôi ra hóa đơn sai hoài, làm sao giảm sai giúp tôi".
- Muốn doanh nghiệp bỏ tiền thì nhóm phải hiểu **logistics là gì, ngành còn điểm yếu nào, nghẽn ở đâu**, và dự án giúp được chỗ nào.
- **Giá trị của dự án** phải trả lời được: Mình là người đến sau, vậy **mình tiến bộ hơn ở đâu**, vì sao công ty logistics phải chọn mình?

---

## 11. Giá trị thật của phần mềm và vai trò của AI (theo cô)

- **Tiến bộ lớn nhất là thấy được toàn cảnh ngay từ đầu.**
  - Trước đây phải đến lúc ra hóa đơn và thu xong công nợ, chủ công ty mới biết lô nào lời, lô nào lỗ, có rủi ro gì. Nhiều thứ không rõ ràng.
  - Ví dụ tính bonus cho sales: trước đây phải ngồi tính tay, giờ phần mềm tính sẵn. Sales bán xong biết ngay lô đó lời bao nhiêu, bonus mang về bao nhiêu.
  - Phần mềm giúp thấy **lợi nhuận và rủi ro dòng tiền** từ phút đầu.
- **Vì sao trước đây dữ liệu chậm:** Con người nhập chậm, nhập sai, quy trình không chặt. **AI có thể giúp phần này.**
- **Lợi ích của AI cô công nhận:**
  - Chính xác hơn, **giảm áp lực công việc** cho người làm
  - **Khi nhân viên nghỉ ốm, công việc vẫn chạy.** Trước đây một người nghỉ là cả công ty đứng.
  - Nếu kết nối trực tiếp vào quy trình thì giúp công ty **giảm nhân sự**
- **Nhưng AI không phải lúc nào cũng đúng.** Nó cần **dữ liệu đầu vào** và **các chốt kiểm soát** để không sai. Nhóm phải thiết kế được dữ liệu đầu vào và các chốt kiểm soát đó.
- Cô nói: "Data đúng từ đầu, nhập chuẩn từ đầu thì cái điểm cuối ra thu tiền nó sẽ ok." Dù dùng Excel, dữ liệu đúng thì công thức cũng ra đúng. Vậy **giá trị của AI ở đây là rút ngắn công sức, thay cho việc nhập tay lọ mọ bằng Excel.**

---

## 12. Đánh giá cụ thể về dự án hiện tại

- Nếu nhóm giữ phạm vi **debit note → hóa đơn**, thì phải đặt rõ **giả định: toàn bộ dữ liệu đầu vào và dữ liệu operation đã chuẩn**. Khi đó cách kiểm soát nhóm trình bày **khả thi một phần**.
- Cô sẽ phản biện: Nếu dữ liệu sai từ trước thì quyền kiểm bắt đầu từ đâu? Làm sao ra được kết quả đúng? → Giải pháp **làm nhanh khâu kiểm cuối**, nhưng nếu dữ liệu đã sai ở các khâu trước thì giải pháp không còn ý nghĩa.
- Trong **ngắn hạn**, ý tưởng AI của nhóm giải quyết được đoạn này. Muốn thành sản phẩm cho forwarder thì cần nhiều hơn.
- Cô nói: Nếu nhóm vẫn tiếp tục phần debit note và hóa đơn **cũng không sao**. **Quan trọng là cả nhóm thống nhất được mục tiêu chung của dự án.**

---

## 13. Lời khuyên cuối của cô

1. **Phải hiểu ngành trước khi viết phần mềm.** Không phải vì nhóm làm không tốt, mà vì **dễ không đúng điểm chạm**: làm ra giải pháp mà doanh nghiệp không cần.
2. **Cần người hướng dẫn hoặc cố vấn có tư duy logistics**, người kể quy trình, còn team IT chuyển thành giải pháp bằng code.
3. **Nên chọn mảng gần kinh nghiệm của nhóm**, như **vận tải / điều phối xe** (giống dự án cứu hộ ở Úc). Mảng này "đỡ hơn". Logistics forwarder thì "hơi căng" với người ngoài ngành.
4. Vẫn nên giữ ý tưởng **giúp doanh nghiệp rút ngắn quy trình và giảm rủi ro**, nhưng phải chọn đúng mảng.
5. Cô sẽ **gửi một hai phần mềm** để nhóm tham khảo, và có thể gửi **layout** các màn hình cần lưu ý.

Quân xác nhận đã hiểu rõ quy trình, sẽ **thảo luận lại với team** và quyết định có tiếp tục hay không.

---

## 14. Tổng hợp điểm nghẽn và chỗ AI có thể giúp

| # | Khâu | Điểm nghẽn | Chỗ AI có thể giúp |
|---|---|---|---|
| 1 | Pricing | Gọi từng hãng tàu lấy giá hằng tháng, nhập tay | Đọc bảng giá hoặc email từ hãng tàu và nhập tự động |
| 2 | Báo giá | Sales phải về văn phòng gõ Word, Excel | Tạo quotation ngay từ dữ liệu pricing, kèm điều kiện bao gồm / không bao gồm |
| 3 | Kiểm lợi nhuận | Sales phải hỏi giám đốc, dễ bán dưới mức lời | Cài sẵn mức lời theo tuyến, cảnh báo khi giá dưới mức |
| 4 | Hợp đồng / báo nội bộ | Admin soạn tay, gửi email cho nhiều team | Tự tạo hợp đồng và thông báo "đã giành được lô hàng" kèm đủ thông tin |
| 5 | Booking | Mỗi hãng tàu một định dạng, operation nhập lại | Đọc booking từ nhiều định dạng khác nhau và nhập tự động |
| 6 | Toàn chuỗi | **Cùng một lô hàng có ít nhất 3 người nhập dữ liệu** | Nhập một lần, dùng xuyên suốt theo số job |
| 7 | Hóa đơn vendor | Operation đối chiếu tay với giá mua, gọi hỏi khi lệch | Đọc hóa đơn vendor, so với giá mua và đánh dấu chỗ lệch |
| 8 | Debit note | Dịch vụ thực tế khác báo giá | So báo giá với thực tế, gợi ý debit note |
| 9 | Chuyển sang kế toán | Email qua lại, trễ hạn bị phạt, lệch dòng tiền | Khóa job, payment request, danh sách việc có cảnh báo |
| 10 | Hóa đơn | Phải chuyển dữ liệu sang MISA | Đẩy dữ liệu sạch sang MISA (qua API hoặc import) |
| 11 | Ngoại lệ | Khách đổi dịch vụ hoặc đổi cảng đến, kể cả khi hàng đã lên tàu | Phát hiện thay đổi, tính lại báo giá, debit note và chi phí |

---

## 15. Các hướng nhóm cần chọn

| Hướng | Mô tả | Ưu | Nhược |
|---|---|---|---|
| **A** | Giữ phạm vi debit note → hóa đơn | Đã có sẵn, dễ làm | Giá trị thấp, trùng với MISA, phụ thuộc dữ liệu đầu vào |
| **B** | Lớp AI kiểm soát dữ liệu xuyên suốt job forwarder: nhập giá và booking, kiểm lời lỗ, đối chiếu vendor và debit note, khóa job, đẩy sang MISA. Gắn vào phần mềm sẵn có | Đúng các điểm nghẽn cô kể, không phải làm lại cả hệ thống | Cần cố vấn trong ngành thường xuyên |
| **C** | Phần mềm forwarder trọn gói | Doanh nghiệp mua hướng này | Quá lớn, đối thủ mạnh (ForwardX, CargoWise...), nhóm thiếu kiến thức ngành |
| **D** | Chuyển sang vận tải / điều phối xe (cô gợi ý) | Gần kinh nghiệm của nhóm, ít phải học thêm | Phải nghiên cứu lại thị trường và điểm nghẽn của mảng xe |

**Gợi ý:** Bàn nghiêm túc giữa **B** (nếu có được cố vấn ngành như cô Diễn) và **D** (nếu không có).

---

## 16. Việc cần làm tiếp

- [ ] Gửi lời cảm ơn cô Diễn
- [ ] Xin cô **các phần mềm tham khảo** và **layout** như cô đã hứa
- [ ] Xin **một bộ hồ sơ mẫu của một job đã che thông tin**: bảng giá, quotation, booking, hóa đơn vendor, debit note
- [ ] Hỏi cô có sẵn lòng **làm cố vấn**, hoặc giới thiệu thêm **2–3 công ty forwarder** để phỏng vấn không
- [ ] Tìm hiểu cách **kết nối với MISA** (API của MISA AMIS)
- [ ] Tìm hiểu các phần mềm đối thủ (ForwardX, CargoWise, LogisForce...) để xác định khoảng trống
- [ ] **Họp team chọn hướng A / B / C / D**, thống nhất mục tiêu chung
- [ ] Viết lại phạm vi dự án và **gửi cô góp ý lần hai**

## 17. Câu hỏi còn mở, nên hỏi cô hoặc các forwarder khác

1. Trong cả chuỗi, **khâu nào tốn nhiều giờ làm tay nhất, và khâu nào sai thì tốn tiền nhất**? Nếu chỉ làm tốt một khâu trước thì nên chọn khâu nào?
2. Hãng tàu gửi bảng giá và booking confirmation ở dạng gì (email, PDF, Excel, web)? Mỗi tháng có bao nhiêu booking?
3. Mỗi operation mỗi tháng kiểm bao nhiêu hóa đơn vendor? **Loại phí nào hay lệch nhất?**
4. Khách hay khiếu nại debit note ở chỗ nào?
5. Hiện dữ liệu từ phần mềm nội bộ sang MISA bằng cách nào? Kế toán mất bao lâu để kiểm lại?
6. **Ngoại lệ nào hay xảy ra nhất** và tốn công xử lý nhất?
7. Phần mềm cô đang dùng tên gì? Nhân viên còn phải mở Excel ra làm ở chỗ nào?
8. Nên bắt đầu với loại công ty nào (đường biển, hàng không hay trucking) và quy mô nào? Loại nào dễ chịu bỏ tiền nhất?
