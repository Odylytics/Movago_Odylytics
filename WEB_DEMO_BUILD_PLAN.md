# Kế hoạch dựng web demo Movago (MVP chạy được)

Đội **Odylytics** · 08/11/2026 · Hạn nộp 23:59 13/11/2026 (folder `AI4Biz_Tendoi_2026`, slide tiếng Anh ≤ 15 trang, điểm cộng cho Prototype/MVP).

Tài liệu nguồn: [Luồng và đáp án](nghien_cuu_tung_slide/colio_ai_hoat_dong_the_nao.md) · [Quy tắc thiết kế](DEMO_DESIGN_RULES.md) · [Mẫu Movora](DESIGN.md) · [Brief](colio_ai_project_brief.md).

## Quyết định

| Hạng mục | Chọn |
| --- | --- |
| Công nghệ | Vite + React + TypeScript, web tĩnh trong `web/`, deploy được lên Vercel hoặc Netlify không cần backend. |
| Ngôn ngữ giao diện | Tiếng Anh mặc định (khớp slide nộp bằng tiếng Anh), nút chuyển **EN / VI**. Số tiền giữ VND, định dạng `8,000,000 ₫` (EN) và `8.000.000 đ` (VI). |
| Dữ liệu | CSV và PDF giả lập trong `web/public/samples/`, luôn gắn nhãn **Simulated data / Hồ sơ giả lập**. |
| Bước "AI đọc PDF" | Mô phỏng: dùng `invoice-lines.csv` đã trích sẵn kèm vị trí trên trang. Giao diện ghi rõ là mô phỏng. |
| Engine đối chiếu | Hàm TypeScript thuần, có unit test (Vitest) cho mọi ca trong bảng đáp án. |
| Bản gửi lại | SHA-256 bằng Web Crypto trên byte của tệp; lịch sử tiếp nhận lưu `localStorage`, có nút **Reset demo**. |
| Màu, font | 5 màu và bộ font Hagrid · Acumin Pro · Source Sans Pro theo `DEMO_DESIGN_RULES.md`; bố cục, bo góc, khoảng cách theo `DESIGN.md`. |

## Màn hình

1. **Intro** — lần đầu mở web trong một tab: MOVAGO tách thành MOV · A · GO rồi thành MOVE · AI · GO và slogan. Thêm `?intro` vào link để xem lại.
2. **Trang chủ `#/`** — hero có khung thiết bị, vấn đề ba nguồn, sáu nhân vật giả tưởng, sơ đồ "một hộp thư cho mọi kênh" kèm tech stack (đã dựng và dự kiến cho pilot), ba loại kết quả.
3. **Business `#/business`** — số liệu có nguồn với hiệu ứng số chạy, vấn đề kinh tế, mô hình kinh doanh, ROI kèm máy tính, định hướng Việt Nam, danh mục nguồn. Mỗi số có nhãn Có nguồn, Giả định hoặc Giả lập.
4. **Tự thử `#/demo`** — chọn 4 ca, mở ba nguồn, chạy đối chiếu, xem căn cứ hai phía, yêu cầu xác minh, xuất CSV, thử tệp gửi lại.
5. **Xem tình huống `#/demo?story=1`** (nút Open demo vào thẳng và tự chạy) — 8 cảnh khoảng 85 giây: nhận từ 3 kênh, điện thoại quét bản giấy, AI đọc PDF, đối chiếu, căn cứ +800.000, bản gửi lại, xác minh với pricing, kế toán trưởng quyết định. Có âm thanh Web Audio, tự chạy, tạm dừng, nhảy bước, khung "Hậu trường" ở góc.

## Bộ ca và đáp án (nghiệm thu)

| Ca | Kết quả mong đợi |
| --- | --- |
| `INV-095` (chính) | Freight 8.000.000 khớp; DOC 1.300.000 vs 500.000 → **+800.000 trước thuế**; tổng 9.300.000 vs 8.500.000 → cần xác minh; nguồn: INV-095 trang 1 dòng DOC, RATE-V3 dòng 12. |
| Khớp | DOC 500.000 → hai dòng khớp, tổng 8.500.000. |
| Thiếu giá DOC | Freight khớp; DOC **Missing basis**, mức kỳ vọng và chênh lệch để trống. |
| Bản gửi lại | Tải lại PDF `INV-095` đã đổi tên → nhận ra trùng vân tay, chỉ bản đã tiếp nhận. |
| `INV-VN-020` Manila → Cát Lái | 20' DRY, không qua Cái Mép. THD 4.800.000 vs 3.000.000 → **+1.800.000**; DOF 950.000/B/L khớp. Ghi chú 4.800.000 là mức 40' áp nhầm (dữ liệu kiểm thử). |

## Demo tham chiếu

Hai lối vào *Xem tình huống* và *Tự thử* học theo [Unfound](https://unfound-be-reached-not-found.vercel.app/). Nạp sẵn hồ sơ học theo [Linehaul](https://trylinehaul.com/demo). Căn cứ hai phía cạnh chênh lệch học theo [FreightProof](https://getfreightproof.com/demo). Ba nguồn hiện sẵn ở điểm vào học theo [Venpalo](https://revenue.anrotex.com/demo).

## Trạng thái

Đã dựng xong trong `web/` và chạy tại https://movago-odylytics.vercel.app. `npm test` chạy 14 test (8 ca đối chiếu, 3 ca dựng bảng giá và 3 ca ROI), `npm run build` tạo web tĩnh. Định tuyến dùng hash nên chạy được trên mọi host tĩnh. Cách chạy và phần nào là mô phỏng: [web/README.md](web/README.md).
