# Nghiên cứu demo sản phẩm cho Movago

Khảo sát ngày 08/11/2026 để chuẩn bị demo KTC Ideathon của đội Odylytics. Mục tiêu là để giám khảo tự xem một khoản cước lệch ở đâu, vì sao bị gắn cờ và cần mở nguồn nào để xác minh. Hướng hình ảnh lấy từ [quy tắc demo Movago](DEMO_DESIGN_RULES.md).

## Unfound và dự án có chung tác giả

**Unfound.** Trang giới thiệu bắt đầu bằng một tình huống cụ thể, sau đó mới đi vào vấn đề, cách giải quyết và kiến trúc. Phần minh họa nhúng prototype vào trang. Trang ghi tám cảnh trong khoảng 70 giây. Hai lối vào dẫn tới cùng prototype. *Play the story* mở chế độ kể chuyện, còn *Open demo* mở màn hình có các vai để tự khám phá. Mình đã mở cả hai lối vào và chạy được cảnh đầu của câu chuyện. Lần thử chuyển vai trong chế độ tự thao tác chưa xác minh được kết quả. [Trang giới thiệu](https://unfound-be-reached-not-found.vercel.app/) · [Câu chuyện](https://unfound-be-reached-not-found.vercel.app/demo?story=1) · [Demo tự thao tác](https://unfound-be-reached-not-found.vercel.app/demo) · [Hồ sơ dự án](https://github.com/BennedictQuanTon/Unfound-Be-reached-Not-found)

**The Lantern.** Một dự án khác có Long Quan Ton tham gia, do đội Develarper thực hiện. Trang giới thiệu có teaser, các đoạn ngắn chọn theo tình huống như hết món và chuyển đơn xuống bếp, cùng một lối vào demo giọng nói riêng. Trang demo mở được và hiển thị tiến trình đánh thức máy chủ. Phần giọng nói chưa được thử. Cách chia theo tình huống phù hợp cho Movago vì người xem có thể mở thẳng cảnh cần giải thích. [Trang The Lantern](https://the-lantern-voice-agent.vercel.app/) · [Demo giọng nói](https://the-lantern-voice-agent.vercel.app/demo) · [Hồ sơ dự án](https://github.com/BennedictQuanTon/Team-Develarper---AssemblyAI---Voice-Agent-Hackathon)

## Demo nghiệp vụ để tham khảo

| Mẫu | Đã quan sát | Áp dụng cho Movago |
| --- | --- | --- |
| Linehaul | Bấm xử lý lô PDF nạp sẵn, sau đó thấy danh sách hóa đơn đã xử lý và các ca cần kế toán rà, gồm một ca nghi gửi lại. [Demo freight AP](https://trylinehaul.com/demo) | Nạp sẵn hồ sơ để giám khảo chạy được ngay. Đưa các dòng cần xác minh lên trước. |
| FreightProof | Đổi được giữa hai lô mẫu. Màn hình đặt tài liệu nguồn cạnh danh sách lỗi, nêu giá trị hai phía và phép tính. [Demo đối chiếu chứng từ](https://getfreightproof.com/demo) | Bấm vào dòng DOC để mở hóa đơn và dòng giá tương ứng ngay cạnh chênh lệch. |
| Venpalo | Mở tệp usage mẫu trong trình xem. Demo đánh dấu đã mở và hướng dẫn chuyển sang billing CSV. Ba nguồn có sẵn từ đầu. [Demo đối soát](https://revenue.anrotex.com/demo) | Hiện rõ hóa đơn, hồ sơ lô và bảng giá ở điểm vào. Để người xem mở nguồn theo nhu cầu trong lúc đối chiếu. |

## Luồng đề xuất cho bản đầu

Dùng một hồ sơ chung cho hai cách xem. **Xem tình huống** dẫn người xem qua từng bước. **Tự thử hồ sơ mẫu** mở cùng hồ sơ để người xem chủ động bấm và kiểm tra.

1. Nạp sẵn hóa đơn `INV-095`, hồ sơ lô `SHP-001` và bảng giá `RATE-V3`. Ghi rõ đây là hồ sơ giả lập.
2. Cho bấm **Chạy đối chiếu**. Bảng cho thấy cước chính khớp và phí DOC là **1.300.000 đồng** trên hóa đơn so với **500.000 đồng** theo giá đã duyệt.
3. Cho bấm khoản **chênh +800.000 đồng trước thuế** để mở trang 1 của hóa đơn và dòng 12 của bảng giá. Ghi rõ vì sao cần xác minh khoản này.
4. Kết bằng thao tác **Yêu cầu xác minh**. Người xem có thể nhập lý do mẫu và thấy trạng thái thay đổi trong demo.

Khoảnh khắc cần làm rõ là cú bấm từ số tiền chênh lệch sang hai căn cứ nguồn. Bản đầu có thể tính từ dữ liệu mẫu có cấu trúc và ghi rõ nếu phần đọc PDF được mô phỏng. [Luồng đối chiếu và đáp án](nghien_cuu_tung_slide/colio_ai_hoat_dong_the_nao.md)
