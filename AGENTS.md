# Hướng dẫn cho AI trong repository

## Commit và push

- Sau mỗi công việc đã hoàn thành có thay đổi tệp trong repo, kiểm tra diff và chạy các kiểm tra phù hợp. Stage đúng phần thuộc công việc, tạo commit có thông điệp rõ ràng, rồi push lên upstream của nhánh đang làm việc. Người dùng đã yêu cầu thực hiện các bước này theo mặc định.
- Dùng `user.name` và `user.email` đã cấu hình cho danh tính Git của người dùng trên repo này, cho cả author và committer. Giữ nguyên cấu hình Git và để phần tác giả chỉ mang danh tính người dùng. Nếu thiếu danh tính hoặc author hay committer đang bị ghi đè, báo người dùng trước khi commit.
- Chỉ dùng push thường. Nếu thiếu upstream, bị từ chối push hoặc có xung đột với remote, báo nguyên nhân và trạng thái commit. Sau khi push, xác minh trạng thái với upstream và báo mã commit.
- Công việc kết thúc ở bước push lên GitHub. Việc deploy lên Vercel do người phụ trách trong đội thực hiện. Khi bản live cần cập nhật, báo người dùng commit nào đang chờ deploy.

## Website demo

- Dùng tên **Movago** và slogan **Move smarter. Go safer.** theo quy tắc nhận diện của dự án.
- Ghi **Odylytics** là đội dự thi KTC Ideathon. Khi cần giới thiệu đội hoặc thành viên, tra [hồ sơ đội Odylytics](ODYLYTICS_TEAM.md) và dùng danh sách dự thi đã xác nhận.
- Trước khi làm việc trên giao diện, đọc [quy tắc thiết kế demo](DEMO_DESIGN_RULES.md) và [mẫu Dimension](DESIGN.md). Quy tắc demo quyết định màu và font. Mẫu Dimension hướng dẫn bố cục, khoảng cách và hình khối.
- Khi viết nội dung về sản phẩm hoặc dựng luồng demo, tra [brief Movago](colio_ai_project_brief.md) để bám sát phạm vi MVP và phân biệt số liệu giả lập với kết quả pilot.
- Chỉ bắt đầu thiết kế màn hình, viết mã hoặc tạo tài sản giao diện khi người dùng yêu cầu bước đó.
