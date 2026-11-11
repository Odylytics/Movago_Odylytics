# Bộ B · Đánh giá web app Movago sau khi dùng thử

Đo **sau khi người tham gia tự dùng web demo** ([`#/demo`](https://movago-odylytics.vercel.app/#/demo)). Bộ A ([khảo sát vấn đề và thị trường](bo_a_khao_sat_van_de_thi_truong.md)) đo trước khi xem demo. Hai bộ dùng chung một mã người tham gia (`P01`, `P02`…) để ghép dữ liệu mà không thu danh tính.

Mục tiêu: chứng minh người trong ngành **dùng được**, **hiểu được kết quả**, **tin được căn cứ** và **có ý định dùng thật**. Mọi số đo ở đây là số đo trên **dữ liệu giả lập**. Không báo cáo như hiệu quả trong công việc thật. Hiệu quả thật cần pilot theo [brief](../colio_ai_project_brief.md) mục 3.

Thời gian: 15–20 phút gồm làm nhiệm vụ, 6–8 phút phần bảng hỏi.

## Thiết kế nghiên cứu

| Mục | Quy định |
|---|---|
| Đối tượng | Người đã qua sàng lọc ở Bộ A (S1, S2), ưu tiên người xử lý công nợ và người quyết định mua. |
| Cỡ mẫu | 10–20 người cho kiểm thử khả dụng có quan sát. 5 người đã phát hiện phần lớn lỗi giao diện, nhưng báo cáo số đo cần mẫu lớn hơn nên ghi "tín hiệu ban đầu" nếu dưới 20. Bản bảng hỏi tự điền từ xa cần n ≥ 30 để báo cáo phần trăm. |
| Hình thức | **Có người quan sát** (trực tiếp hoặc họp video chia sẻ màn hình, ghi thời gian bằng đồng hồ bấm giờ) hoặc **tự điền từ xa** (chỉ làm bảng hỏi, không có số đo hành vi). Báo cáo riêng hai nhóm. |
| Thiết bị | Ghi laptop hoặc điện thoại, trình duyệt. Dùng cùng bản deploy cho mọi người, ghi mã commit tại thời điểm thử. |
| Nguyên tắc người điều phối | Đọc nguyên văn nhiệm vụ, **không gợi ý**, không chỉ vào màn hình. Nếu người tham gia kẹt hơn 3 phút ở một bước, ghi "bỏ cuộc" và chỉ cách đi tiếp để làm nhiệm vụ sau. Người điều phối không phải người thiết kế giao diện nếu có thể. |
| Đạo đức | Dùng lời đồng ý như Bộ A (C0). Nói rõ: "Chúng tôi đánh giá công cụ, không đánh giá anh/chị." Dữ liệu demo là giả lập, không cần nhập dữ liệu thật của công ty. |
| Reset | Bấm **Reset demo** trước mỗi người để xóa lịch sử tiếp nhận trong `localStorage`. |

### Lời mở đầu (đọc nguyên văn)

> Cảm ơn anh/chị. Anh/chị sẽ dùng một bản thử của công cụ kiểm hóa đơn cước. Dữ liệu trong đó là giả lập. Không có đáp án đúng hay sai, vì chúng tôi muốn biết công cụ chỗ nào khó hiểu. Anh/chị vừa làm vừa nói to điều đang nghĩ. Anh/chị có thể dừng bất cứ lúc nào.

## Phần 1 · Nhiệm vụ có quan sát

Mỗi nhiệm vụ có kết quả đúng định trước. Người quan sát ghi: **thành công** (đúng, không cần gợi ý), **thành công có gợi ý**, **sai**, **bỏ cuộc**, kèm giây hoàn thành và số lần bấm sai.

| Nhiệm vụ | Đọc nguyên văn cho người tham gia | Kết quả đúng | Nguồn ca (theo [web/README](../web/README.md)) |
|---|---|---|---|
| T1 | "Hãy mở ca hóa đơn `INV-095` và cho biết hóa đơn này có vấn đề gì không." | Nói được khoản phí DOC lệch **+800.000 đồng trước thuế**. | `INV-095` |
| T2 | "Cho tôi biết căn cứ nào chứng minh khoản lệch đó." | Mở được hai phía căn cứ: dòng DOC trên hóa đơn (trang 1) và dòng 12 của bảng giá `RATE-V3`. | `INV-095` |
| T3 | "Hãy yêu cầu xác minh khoản này và ghi lý do." | Hoàn thành thao tác xác minh có ghi lý do. | `INV-095` |
| T4 | "Hãy xuất báo cáo để gửi cho kế toán trưởng." | Xuất được tệp CSV. | `INV-095` |
| T5 | "Bây giờ mở ca `INV-095-NORATE`. Hóa đơn này khác ca trước thế nào?" | Phân biệt được **Thiếu căn cứ** (không có giá tham chiếu), khác với **Có chênh lệch**. | `INV-095-NORATE` |
| T6 | "Tải lại tệp `INV-095-resent.pdf`. Hệ thống phản ứng thế nào?" | Nhận ra hệ thống báo tệp đã tiếp nhận (trùng nội dung với `INV-095.pdf`). | resent |
| T7 | "Mở ca `INV-VN-020` và cho biết hệ thống có đồng ý với hóa đơn không." | Nêu được dòng THD lệch **+1.800.000 đồng**, dòng DOF khớp. | `INV-VN-020` |

Thứ tự T1→T7 cố định cho phần đầu, vì T1–T4 là luồng chính. Với mẫu từ 20 người trở lên, đảo T5, T6, T7 ngẫu nhiên và ghi thứ tự đã dùng.

### Bảng ghi người quan sát

| Mã | Nhiệm vụ | Kết quả | Giây | Số lần bấm sai | Gợi ý | Câu nói đáng ghi lại |
|---|---|---|---|---|---|---|
| P01 | T1 | | | | | |

### Số đo tính từ bảng ghi

- **Tỷ lệ hoàn thành** mỗi nhiệm vụ = số thành công không cần gợi ý / số người, kèm khoảng tin cậy Wilson 95%. Công bố tử số và mẫu số.
- **Thời gian hoàn thành** trung vị và khoảng tứ phân vị, chỉ tính người thành công. Không dùng trung bình khi n nhỏ.
- **Số lỗi** trung bình mỗi nhiệm vụ.
- **Nhiệm vụ gây lỗi nhiều nhất**: những nhiệm vụ có tỷ lệ hoàn thành thấp nhất là ưu tiên sửa giao diện.

## Phần 2 · Bảng hỏi sau nhiệm vụ

### 2.1 Độ khó từng nhiệm vụ (SEQ)

Sau mỗi nhiệm vụ T1–T7, hỏi một câu duy nhất (Single Ease Question):

**SEQ.** Nhìn chung, nhiệm vụ này **dễ hay khó** với anh/chị? · Thang 1–7 · 1 = Rất khó · 7 = Rất dễ.

Báo cáo trung bình từng nhiệm vụ. Mốc tham khảo của SEQ là khoảng 5,5.

### 2.2 System Usability Scale (SUS)

Thang 1–5: 1 = Hoàn toàn không đồng ý · 5 = Hoàn toàn đồng ý. Giữ **nguyên thứ tự** 10 câu, vì cách tính điểm dựa vào câu lẻ (tích cực) và câu chẵn (tiêu cực).

| # | Câu |
|---|---|
| SUS1 | Tôi nghĩ mình sẽ muốn dùng hệ thống này thường xuyên. |
| SUS2 | Tôi thấy hệ thống phức tạp một cách không cần thiết. |
| SUS3 | Tôi thấy hệ thống dễ sử dụng. |
| SUS4 | Tôi nghĩ mình cần sự hỗ trợ của một người am hiểu kỹ thuật để dùng được hệ thống này. |
| SUS5 | Tôi thấy các chức năng của hệ thống được tích hợp tốt với nhau. |
| SUS6 | Tôi thấy hệ thống có quá nhiều điểm không nhất quán. |
| SUS7 | Tôi tưởng tượng phần lớn người sẽ học cách dùng hệ thống này rất nhanh. |
| SUS8 | Tôi thấy hệ thống rất cồng kềnh khi sử dụng. |
| SUS9 | Tôi cảm thấy rất tự tin khi dùng hệ thống. |
| SUS10 | Tôi cần học nhiều điều trước khi có thể bắt đầu dùng hệ thống này. |

**Cách tính (Brooke, 1996).** Với câu lẻ lấy (điểm − 1). Với câu chẵn lấy (5 − điểm). Cộng 10 giá trị rồi nhân 2,5 để ra điểm 0–100. Báo cáo trung bình và khoảng tin cậy 95%. Mốc đọc: 68 là trung bình tham chiếu; trên 80 là tốt. SUS **không phải phần trăm**, không nói "đạt 75%".

### 2.3 Chấp nhận công nghệ (TAM/UTAUT)

Thang 1–7: 1 = Hoàn toàn không đồng ý · 7 = Hoàn toàn đồng ý. Mỗi cấu trúc có 3 câu; tính trung bình theo cấu trúc, kiểm tra Cronbach α (≥ 0,7 là chấp nhận được).

| Cấu trúc | # | Câu |
|---|---|---|
| Hữu ích cảm nhận | U1 | Công cụ này giúp tôi kiểm hóa đơn cước nhanh hơn. |
| | U2 | Công cụ này giúp tôi phát hiện khoản chênh lệch mà tôi dễ bỏ sót. |
| | U3 | Công cụ này làm công việc đối chiếu của tôi hiệu quả hơn. |
| Dễ dùng cảm nhận | E1 | Cách dùng công cụ này rõ ràng và dễ hiểu. |
| | E2 | Tôi dễ dàng làm được những gì tôi muốn với công cụ này. |
| | E3 | Học cách dùng công cụ này là dễ với tôi. |
| Ảnh hưởng xã hội | N1 | Đồng nghiệp tôi sẽ ủng hộ việc dùng công cụ này. |
| | N2 | Cấp trên của tôi sẽ ủng hộ việc dùng công cụ này. |
| | N3 | Công ty tôi sẽ sẵn sàng hỗ trợ khi triển khai công cụ này. |
| Ý định dùng | I1 | Nếu công ty tôi có công cụ này, tôi sẽ dùng nó. |
| | I2 | Tôi dự định dùng công cụ này trong công việc của mình trong 6 tháng tới. |
| | I3 | Tôi sẽ giới thiệu công cụ này cho đồng nghiệp. |

### 2.4 Niềm tin và minh bạch của AI

Thang 1–7 như trên.

| # | Câu |
|---|---|
| X1 | Tôi hiểu vì sao hệ thống báo khoản đó chênh lệch. |
| X2 | Căn cứ hiển thị cho từng dòng đủ để tôi tự kiểm lại. |
| X3 | Tôi tin kết quả đối chiếu của hệ thống. |
| X4 | Tôi vẫn muốn tự kiểm tra lại các cảnh báo trước khi quyết định chi. |
| X5 | Tôi hiểu sự khác nhau giữa **Khớp trong phạm vi kiểm tra**, **Có chênh lệch** và **Thiếu căn cứ**. |
| X6 | Nhãn **Thiếu căn cứ** khiến tôi yên tâm hơn là hệ thống tự đoán một mức giá. |

Hai câu X4 và X6 hỏi về hành vi mong muốn, không chỉ độ tin. Trả lời cao ở X4 là **tín hiệu tốt**: người dùng hiểu hệ thống hỗ trợ chứ không thay quyết định.

**Câu kiểm tra hiểu bài.** Sau X1–X6, hỏi 2 câu trắc nghiệm một đáp án đúng:

| # | Câu | Đáp án đúng |
|---|---|---|
| K1 | Ở ca `INV-095`, khoản lệch nằm ở dòng phí nào? | Phí chứng từ (DOC). |
| K2 | Nhãn **Thiếu căn cứ** nghĩa là gì? | Hệ thống không tìm được giá đã duyệt phù hợp, nên không tính mức kỳ vọng. |

Tỷ lệ trả lời đúng K1 và K2 là bằng chứng giao diện truyền đạt đúng, độc lập với cảm nhận chủ quan.

### 2.5 So sánh với cách làm hiện tại

| # | Câu hỏi | Kiểu |
|---|---|---|
| W1 | Với hóa đơn như `INV-095`, nếu anh/chị làm theo cách hiện tại, mất khoảng bao nhiêu phút? | Số phút |
| W2 | Anh/chị ước lượng dùng công cụ này mất bao nhiêu phút cho hóa đơn đó? | Số phút |
| W3 | Công cụ này **thay thế**, **bổ sung** hay **không liên quan** đến cách anh/chị đang làm? | Một lựa chọn |
| W4 | Điều gì ở công cụ khiến anh/chị muốn dùng? | Trả lời ngắn |
| W5 | Điều gì khiến anh/chị chưa muốn dùng? | Trả lời ngắn |
| W6 | Tính năng nào còn thiếu để anh/chị dùng trong công việc thật? | Nhiều lựa chọn: Đọc nhiều mẫu hóa đơn hơn · Kết nối TMS/ERP · Debit note · Hóa đơn gộp lô · Nhiều tiền tệ · Duyệt chi nhiều cấp · Báo cáo theo nhà cung cấp · Khác |

W1 và W2 là ước lượng chủ quan; ghi riêng, đặt cạnh số giây đo được ở phần 1. Không dùng chênh lệch W1–W2 làm hiệu quả thật; đây chỉ là cảm nhận. Số phút thao tác thật cần pilot.

## Phần 3 · Cam kết hành vi

| # | Câu hỏi | Lựa chọn |
|---|---|---|
| A1 | Sau khi dùng thử, anh/chị sẵn sàng làm gì tiếp theo? (chọn mức cao nhất) | Không · Nhận thông tin cập nhật · Cho đội xem 1–2 hóa đơn đã che thông tin · Tham gia pilot 2–4 tuần với dữ liệu thật · Giới thiệu người quyết định mua |
| A2 | Nếu công cụ có đủ tính năng ở W6, mức phí hằng tháng anh/chị cho là hợp lý? | Số, đồng/tháng. So với khoảng giá Van Westendorp ở Bộ A. |

So sánh A1 ở Bộ A và Bộ B của cùng người (qua mã `P`): tỷ lệ người **nâng mức cam kết** sau khi xem demo là bằng chứng demo có sức thuyết phục.

## Phân tích và báo cáo

| Chỉ số | Cách tính | Ghi chú |
|---|---|---|
| Tỷ lệ hoàn thành T1–T7 | Số thành công không gợi ý / n, khoảng Wilson 95% | Bảng một dòng mỗi nhiệm vụ. |
| Thời gian hoàn thành | Trung vị, tứ phân vị | Người thành công. |
| SEQ | Trung bình mỗi nhiệm vụ | Mốc ~5,5. |
| SUS | Trung bình, độ lệch chuẩn, khoảng tin cậy 95% | So với 68. Ghi phân phối. |
| TAM | Trung bình mỗi cấu trúc và Cronbach α | Phân tích riêng người quyết định mua (S4) nếu n ≥ 10. |
| Niềm tin AI | Trung bình X1–X6, tỷ lệ đúng K1, K2 | X4 cao là tốt, đừng đảo ý. |
| Chuyển đổi cam kết | Số người tăng mức A1 từ Bộ A sang Bộ B / n | Kiểm định dấu hoặc Wilcoxon cặp khi n ≥ 20. |
| Tương quan | Spearman giữa U1–U3 và I1–I3 | Chỉ khi n ≥ 30. |

## Quy tắc báo cáo

- Gắn nhãn **dữ liệu giả lập** cho mọi số đo hành vi và ghi mã commit của bản demo đã thử.
- Phân biệt người **có quan sát** và **tự điền từ xa**. Không gộp số giây của hai nhóm.
- Không nói "giảm X% thời gian" từ W1 và W2. Số đó chỉ là ước lượng chủ quan.
- Cỡ mẫu nhỏ dùng "tín hiệu ban đầu". Ghi toàn bộ lỗi giao diện tìm thấy, kể cả lỗi đã sửa, kèm số người gặp.
- Mục "Giới hạn": mẫu thuận tiện, dữ liệu giả lập, người tham gia biết mình đang được đánh giá (hiệu ứng quan sát), ca demo là ca được thiết kế sẵn nên dễ hơn thực tế.
- Sau khi sửa giao diện theo kết quả, chạy lại một vòng nhỏ (5 người) và ghi sự thay đổi SUS, tỷ lệ hoàn thành. Kết quả lặp lại là bằng chứng cải tiến.

## Trích dẫn thang đo

- Brooke, J. (1996). *SUS: A quick and dirty usability scale*. In Jordan et al. (Eds.), Usability Evaluation in Industry. Taylor & Francis.
- Sauro, J., & Lewis, J. R. (2016). *Quantifying the User Experience* (2nd ed.). Morgan Kaufmann. (SEQ, khoảng tin cậy, mốc SUS.)
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly*, 13(3).
- Venkatesh, V., Morris, M., Davis, G., & Davis, F. (2003). User acceptance of information technology: Toward a unified view. *MIS Quarterly*, 27(3).
