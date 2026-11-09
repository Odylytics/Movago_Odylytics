# Thử AI trích xuất hóa đơn cước

Mục tiêu là có một con số **đội tự đo** cho slide 6: AI đọc đúng bao nhiêu phần trăm trường trên hóa đơn cước thật. Bộ này gồm prompt, bảng đáp án, bộ chấm điểm và một lần chạy thử trên hóa đơn giả lập.

## Đã có gì

| Tệp | Nội dung |
|---|---|
| `mau/` | INV-095 ở ba dạng: PDF gốc, bản scan mờ có nhiễu, ảnh chụp nghiêng và tối. |
| `answer_key.csv` | Đáp án 15 trường cho mỗi tệp: nhà cung cấp, số và ngày hóa đơn, mã lô, B/L, tiền tệ, hai dòng phí (mô tả, số lượng, số tiền), cộng trước thuế, VAT, tổng. |
| `extracted/` | Kết quả trích xuất dạng JSON, mỗi hóa đơn một tệp. |
| `score.py` | So `extracted/` với đáp án, in độ chính xác theo loại tài liệu, theo trường và liệt kê từng lỗi. |

**Lần chạy thử (09/11/2026)** đạt 45/45 trường. Kết quả này chỉ chứng minh bộ kiểm thử chạy được. Người đọc ảnh biết trước đáp án và hóa đơn là bản giả lập bố cục đơn giản, nên **không dùng con số này trên slide**.

## Chạy trên hóa đơn thật

1. Xin 5–10 hóa đơn hoặc debit note cước đã ẩn thông tin, từ ít nhất 2 nhà cung cấp. Lấy cả PDF gốc, bản scan và ảnh chụp nếu có. Ghi đồng ý sử dụng của doanh nghiệp.
2. Đặt tên tệp theo mẫu `<mã>_<pdf|scan|photo>`. Một người điền `answer_key.csv` bằng tay **trước** khi chạy AI.
3. Gửi từng tệp cho mô hình với prompt bên dưới. Lưu câu trả lời JSON vào `extracted/<tên tệp>.json`. Ghi tên và phiên bản mô hình.
4. Chạy `python score.py answer_key.csv extracted`. Người thứ hai xem lại từng lỗi trong danh sách *Misses* để chắc lỗi thuộc AI, không thuộc đáp án.
5. Ghi lên slide theo dạng: *“AI đọc đúng X/Y trường trên N hóa đơn thật của M nhà cung cấp (mô hình …, ngày …)”*. Tách riêng trường đầu hóa đơn và dòng phí.

```text
Bạn là trợ lý kế toán. Đọc hóa đơn cước đính kèm và trả về đúng một đối tượng JSON với các khóa:
supplier, invoice_no, invoice_date (YYYY-MM-DD), shipment_ref, bl_no, currency,
line1_desc, line1_qty_unit, line1_amount, line2_desc, ... (mỗi dòng phí một nhóm),
subtotal, vat, total.
Số tiền chỉ ghi chữ số, bỏ dấu phân cách. Trường không thấy trên chứng từ thì để null, không đoán.
```

## Số liệu công khai để đối chiếu

| Nguồn | Kết quả | Giới hạn |
|---|---|---|
| Businessware Technologies, 03/2026, qua tổng hợp của RevExOS | Hiệu quả trích xuất trung bình: Gemini 3 Pro 94,75%, Azure AI Document Intelligence 90,52%, Claude Sonnet 4.5 90,27%, Google Document AI 79,76%. | Chỉ 20 hóa đơn giai đoạn 2006–2020, không phải hóa đơn cước Việt Nam. [RevExOS](https://revexos.com/blog/best-ai-model-for-invoice-parsing) |
| Cùng nguồn, nghiên cứu trước | GPT-4o đọc đúng 98% trường đầu hóa đơn nhưng 57% dòng hàng. Azure Document Intelligence đạt 87% dòng hàng. | Bộ test khác nhau, không so trực tiếp được. |

**Hàm ý cho Movago.** Trường đầu hóa đơn thường đọc tốt. Dòng phí, bản scan và ảnh chụp là chỗ yếu. Vì vậy thiết kế giữ ngưỡng tin cậy và chuyển người kiểm tra, còn phép tính tiền chạy bằng quy tắc. Đội nên đo riêng nhóm dòng phí trên hóa đơn thật.
