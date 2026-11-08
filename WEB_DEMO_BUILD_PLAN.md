# Kế hoạch dựng web demo Movago (MVP chạy được)

Đội **Odylytics** · 08/11/2026 · Hạn nộp 23:59 13/11/2026 (folder `AI4Biz_Tendoi_2026`, slide tiếng Anh ≤ 15 trang, điểm cộng cho Prototype/MVP).

Tài liệu nguồn: [Kế hoạch demo](MOVAGO_DEMO_PLAN.md) · [Luồng và đáp án](nghien_cuu_tung_slide/colio_ai_hoat_dong_the_nao.md) · [Quy tắc thiết kế](DEMO_DESIGN_RULES.md) · [Mẫu Dimension](DESIGN.md) · [Brief](colio_ai_project_brief.md).

## Quyết định

| Hạng mục | Chọn |
| --- | --- |
| Công nghệ | Vite + React + TypeScript, web tĩnh trong `web/`, deploy được lên Vercel hoặc Netlify không cần backend. |
| Ngôn ngữ giao diện | Tiếng Anh mặc định (khớp slide nộp bằng tiếng Anh), nút chuyển **EN / VI**. Số tiền giữ VND, định dạng `8,000,000 ₫` (EN) và `8.000.000 đ` (VI). |
| Dữ liệu | CSV và PDF giả lập trong `web/public/samples/`, luôn gắn nhãn **Simulated data / Hồ sơ giả lập**. |
| Bước "AI đọc PDF" | Mô phỏng: dùng `invoice-lines.csv` đã trích sẵn kèm vị trí trên trang. Giao diện ghi rõ là mô phỏng. |
| Engine đối chiếu | Hàm TypeScript thuần, có unit test (Vitest) cho mọi ca trong bảng đáp án. |
| Bản gửi lại | SHA-256 bằng Web Crypto trên byte của tệp; lịch sử tiếp nhận lưu `localStorage`, có nút **Reset demo**. |
| Màu, font | 5 màu và Manrope theo `DEMO_DESIGN_RULES.md`; bố cục, bo góc, khoảng cách theo `DESIGN.md`. |

## Màn hình

1. **Landing `/`** — Movago, slogan *Move smarter. Go safer.*, câu giới thiệu đội Odylytics, vấn đề 3 nguồn, cách hoạt động, hai nút: **Play the story** (xem tình huống) và **Try the sample case** (tự thử).
2. **Workspace `/demo`** — chọn ca; 3 thẻ nguồn (Invoice / Shipment / Rate card) mở được; nút **Run reconciliation**; bảng kết quả từng dòng (Matched / Discrepancy / Missing basis, luôn có nhãn chữ); bấm dòng để mở panel bằng chứng hai phía (hóa đơn trang 1 dòng DOC được highlight ↔ RATE-V3 dòng 12 được highlight) với phép tính `1,300,000 − 500,000 = +800,000`; **Request verification** (người + lý do, trạng thái đổi); **Export CSV**; vùng tải tệp để thử bản gửi lại.
3. **Story mode `/demo?story=1`** — cùng workspace, lớp hướng dẫn 5 bước theo kịch bản 3 phút.

## Bộ ca và đáp án (nghiệm thu)

| Ca | Kết quả mong đợi |
| --- | --- |
| `INV-095` (chính) | Freight 8.000.000 khớp; DOC 1.300.000 vs 500.000 → **+800.000 trước thuế**; tổng 9.300.000 vs 8.500.000 → cần xác minh; nguồn: INV-095 trang 1 dòng DOC, RATE-V3 dòng 12. |
| Khớp | DOC 500.000 → hai dòng khớp, tổng 8.500.000. |
| Thiếu giá DOC | Freight khớp; DOC **Missing basis**, mức kỳ vọng và chênh lệch để trống. |
| Bản gửi lại | Tải lại PDF `INV-095` đã đổi tên → nhận ra trùng vân tay, chỉ bản đã tiếp nhận. |
| `INV-VN-020` Manila → Cát Lái | 20' DRY, không qua Cái Mép. THD 4.800.000 vs 3.000.000 → **+1.800.000**; DOF 950.000/B/L khớp. Ghi chú 4.800.000 là mức 40' áp nhầm (dữ liệu kiểm thử). |

## Trạng thái

Đã dựng xong trong `web/`. `npm test` chạy 7 ca nghiệm thu, `npm run build` tạo web tĩnh. Định tuyến dùng hash (`#/`, `#/demo`, `#/demo?story=1`) nên chạy được trên mọi host tĩnh. Cách chạy: [web/README.md](web/README.md).
