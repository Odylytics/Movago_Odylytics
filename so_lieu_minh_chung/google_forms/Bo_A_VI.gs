// Bộ A · Khảo sát vấn đề và thị trường
// Cách dùng: vào script.google.com → Dự án mới → xóa mã mẫu → dán toàn bộ file này → chọn hàm createForm → Run.
// Cấp quyền khi được hỏi. Xem link form ở mục Execution log (Nhật ký thực thi) phía dưới.
// Tạo 46 câu hỏi trong 7 trang.

var DATA = {
  "title": "Bộ A · Khảo sát vấn đề và thị trường",
  "description": "Đội Odylytics (sinh viên) đang nghiên cứu cách kế toán kiểm hóa đơn cước trước khi thanh toán, để dự thi KTC Ideathon và đánh giá khả năng triển khai một công cụ hỗ trợ. Khảo sát mất khoảng 12–15 phút, không thu tên hay tên công ty. Câu trả lời chỉ dùng dạng tổng hợp trong báo cáo và slide. Dữ liệu lưu tối đa 12 tháng, anh/chị có thể yêu cầu xóa phản hồi bằng cách liên hệ đội. Tham gia hoàn toàn tự nguyện, anh/chị có thể dừng bất cứ lúc nào.",
  "sections": [
    {
      "title": "",
      "desc": "",
      "items": [
        {
          "kind": "text",
          "text": "Mã người tham gia (do người điều phối cung cấp, nếu có)",
          "required": false
        },
        {
          "kind": "choice",
          "text": "Anh/chị đồng ý tham gia với các điều kiện trên?",
          "options": [
            "Đồng ý",
            "Không đồng ý"
          ]
        }
      ]
    },
    {
      "title": "Phần 1 · Sàng lọc và hồ sơ mẫu",
      "desc": "",
      "items": [
        {
          "kind": "choice",
          "text": "Anh/chị biết đến khảo sát này qua kênh nào?",
          "options": [
            "VLA/HLA",
            "Nhóm Zalo/Facebook",
            "LinkedIn",
            "Người quen giới thiệu",
            "Khác"
          ]
        },
        {
          "kind": "choice",
          "text": "Công ty anh/chị thuộc loại nào?",
          "options": [
            "Forwarder hàng biển",
            "Đại lý hãng tàu",
            "Chủ hàng XNK",
            "Công ty logistics khác",
            "Ngoài ngành"
          ]
        },
        {
          "kind": "choice",
          "text": "Anh/chị có tham gia xử lý, xác minh hoặc duyệt hóa đơn/debit note cước đầu vào trước khi chi không?",
          "options": [
            "Có, trực tiếp xử lý",
            "Có, xác minh hoặc duyệt",
            "Không"
          ]
        },
        {
          "kind": "choice",
          "text": "Vị trí hiện tại?",
          "options": [
            "Kế toán công nợ / AP",
            "Kế toán tổng hợp",
            "Kế toán trưởng / CFO",
            "Vận hành / chứng từ",
            "Pricing",
            "IT / dữ liệu",
            "Chủ doanh nghiệp",
            "Khác"
          ]
        },
        {
          "kind": "choice",
          "text": "Vai trò của anh/chị khi công ty mua một công cụ phần mềm cho phòng kế toán?",
          "options": [
            "Người dùng chính",
            "Người đề xuất hoặc đánh giá",
            "Người duyệt ngân sách",
            "Không tham gia quyết định"
          ]
        },
        {
          "kind": "choice",
          "text": "Số năm kinh nghiệm trong ngành hoặc nghiệp vụ liên quan?",
          "options": [
            "Dưới 2",
            "2–5",
            "5–10",
            "Trên 10"
          ]
        },
        {
          "kind": "choice",
          "text": "Quy mô nhân sự công ty?",
          "options": [
            "Dưới 20",
            "20–49",
            "50–199",
            "200–499",
            "Từ 500"
          ]
        },
        {
          "kind": "choice",
          "text": "Phòng anh/chị có bao nhiêu người làm công nợ phải trả?",
          "options": [
            "1",
            "2–3",
            "4–10",
            "Trên 10"
          ]
        },
        {
          "kind": "choice",
          "text": "Công ty đặt trụ sở chính ở đâu?",
          "options": [
            "TP.HCM",
            "Hà Nội",
            "Hải Phòng",
            "Đà Nẵng",
            "Khác ở Việt Nam",
            "Ngoài Việt Nam"
          ]
        }
      ]
    },
    {
      "title": "Phần 2 · Hiện trạng đo bằng sự kiện cụ thể",
      "desc": "Với các câu sau, anh/chị nhớ lại hóa đơn cước gần nhất hoặc tháng vừa qua, không cần ước lượng chung.",
      "items": [
        {
          "kind": "choice",
          "text": "Tháng vừa qua phòng anh/chị nhận khoảng bao nhiêu hóa đơn hoặc debit note cước?",
          "options": [
            "Dưới 100",
            "100–500",
            "500–1.000",
            "1.000–3.000",
            "Trên 3.000",
            "Không rõ"
          ]
        },
        {
          "kind": "choice",
          "text": "Hóa đơn cước gần nhất: số phút thao tác (mở chứng từ, so, ghi nhận), không tính thời gian chờ người khác?",
          "options": [
            "Dưới 5",
            "5–10",
            "10–20",
            "20–30",
            "Trên 30"
          ]
        },
        {
          "kind": "choice",
          "text": "Cũng hóa đơn đó, số giờ chờ người khác trả lời (pricing, operations, hãng tàu) trước khi chốt?",
          "options": [
            "Không chờ",
            "Dưới 1 giờ",
            "1–4 giờ",
            "4–24 giờ",
            "Trên 1 ngày"
          ]
        },
        {
          "kind": "choice",
          "text": "Hóa đơn đó cần mở bao nhiêu nguồn tài liệu khác nhau để kiểm?",
          "options": [
            "1",
            "2",
            "3",
            "4 trở lên"
          ]
        },
        {
          "kind": "choice",
          "text": "Tháng vừa qua, khoảng bao nhiêu hóa đơn phải hỏi lại nhà cung cấp hoặc phải điều chỉnh?",
          "options": [
            "0",
            "1–5",
            "6–20",
            "Trên 20",
            "Không nhớ"
          ]
        },
        {
          "kind": "choice",
          "text": "Với các hóa đơn đó, tổng số tiền chênh lệch tháng vừa qua khoảng bao nhiêu?",
          "options": [
            "Không có",
            "Dưới 5 triệu đ",
            "5–20 triệu",
            "20–100 triệu",
            "Trên 100 triệu",
            "Không biết"
          ],
          "required": false
        },
        {
          "kind": "choice",
          "text": "Trong 12 tháng qua, công ty có từng chi sai hoặc trả trùng một khoản cước đã được phát hiện sau khi chi không?",
          "options": [
            "Có",
            "Không",
            "Không biết"
          ]
        },
        {
          "kind": "text",
          "text": "Nếu \"Có\" ở H7: khoảng bao nhiêu lần và lớn nhất khoảng bao nhiêu? (Số lần; Số tiền lớn nhất (triệu đồng))",
          "required": false
        },
        {
          "kind": "checkbox",
          "text": "Lỗi nào anh/chị từng gặp trong 12 tháng qua?",
          "options": [
            "Sai đơn giá",
            "Sai loại container hoặc số lượng",
            "Phụ phí chưa được duyệt",
            "Dùng nhầm phiên bản bảng giá",
            "Hóa đơn gửi trùng",
            "Sai lô hoặc sai B/L",
            "Thiếu phê duyệt bổ sung",
            "Khác"
          ]
        },
        {
          "kind": "checkbox",
          "text": "Công cụ đang dùng để kiểm?",
          "options": [
            "Excel",
            "Phần mềm kế toán (MISA, Fast…)",
            "TMS / phần mềm forwarder",
            "ERP",
            "Kiểm bằng mắt trên PDF",
            "Dịch vụ kiểm toán cước bên ngoài",
            "Khác"
          ]
        },
        {
          "kind": "checkbox",
          "text": "Trong công cụ đó, bước nào vẫn làm tay?",
          "options": [
            "Tìm chứng từ",
            "Tra bảng giá",
            "Tính lại từng dòng",
            "Ghép hóa đơn với lô",
            "Phát hiện hóa đơn trùng",
            "Ghi nhận lý do xác minh",
            "Khác"
          ]
        },
        {
          "kind": "checkbox",
          "text": "Bảng giá đã duyệt lưu ở đâu?",
          "options": [
            "Hệ thống TMS/ERP",
            "Excel dùng chung",
            "Email",
            "Giấy hoặc PDF",
            "Trong đầu người phụ trách",
            "Khác"
          ]
        },
        {
          "kind": "choice",
          "text": "Mỗi nhà cung cấp thường có bao nhiêu phiên bản giá hiệu lực trong năm?",
          "options": [
            "1",
            "2–3",
            "4–6",
            "Trên 6",
            "Không biết"
          ]
        }
      ]
    },
    {
      "title": "Phần 3 · Mức độ đau và ưu tiên",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "\"Đối chiếu hóa đơn cước với hồ sơ lô và giá đã duyệt tốn nhiều công sức của phòng tôi.\"",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "\"Rủi ro chi sai hoặc trả trùng cước là mối lo thực sự của công ty tôi.\"",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "\"Quy trình đối chiếu hiện tại của tôi đủ tốt, không cần cải thiện.\"",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "grid",
          "text": "Xếp hạng khó khăn của công việc công nợ phải trả, từ khó nhất (1) đến ít khó nhất (5).",
          "options": [
            "Đối chiếu hóa đơn cước với lô và giá",
            "Thu thập chứng từ từ nhiều kênh",
            "Theo dõi hạn thanh toán và dòng tiền",
            "Đối chiếu công nợ với nhà cung cấp",
            "Nhập liệu vào phần mềm kế toán"
          ],
          "n": 5
        },
        {
          "kind": "choice",
          "text": "Công ty đã từng thử cải thiện việc kiểm hóa đơn cước (phần mềm, thuê ngoài, đổi quy trình) chưa?",
          "options": [
            "Đã triển khai",
            "Đã thử nhưng bỏ",
            "Đang cân nhắc",
            "Chưa"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Nếu \"Đã thử nhưng bỏ\" hoặc \"Đã triển khai\": cách đó còn thiếu gì hoặc vì sao bỏ?",
          "required": false
        }
      ]
    },
    {
      "title": "Phần 4 · Định giá và quyết định mua",
      "desc": "Movago là công cụ giúp kế toán kiểm hóa đơn cước trước khi thanh toán: ghép hóa đơn với hồ sơ lô và bảng giá đã duyệt, hiển thị khoản chênh lệch kèm căn cứ hai phía, và xuất báo cáo để người phụ trách xác minh.\n\nGiả sử công cụ giúp kiểm hóa đơn cước với tính năng đã mô tả ở trên (ghép chứng từ với lô và bảng giá, hiện chênh lệch kèm căn cứ, xuất báo cáo), cho khoảng 500 hóa đơn mỗi tháng.",
      "items": [
        {
          "kind": "number",
          "text": "Mức phí mỗi tháng rẻ đến mức anh/chị nghi ngờ chất lượng?"
        },
        {
          "kind": "number",
          "text": "Mức phí mỗi tháng anh/chị thấy là món hời, rẻ nhưng vẫn tin?"
        },
        {
          "kind": "number",
          "text": "Mức phí mỗi tháng bắt đầu thấy đắt, vẫn cân nhắc được nhưng phải suy nghĩ?"
        },
        {
          "kind": "number",
          "text": "Mức phí mỗi tháng đắt đến mức chắc chắn không mua?"
        },
        {
          "kind": "choice",
          "text": "Ai quyết định mua phần mềm cho phòng kế toán ở công ty anh/chị?",
          "options": [
            "Kế toán trưởng / CFO",
            "Giám đốc vận hành",
            "Chủ doanh nghiệp / Tổng giám đốc",
            "Bộ phận IT",
            "Công ty mẹ",
            "Không rõ"
          ]
        },
        {
          "kind": "choice",
          "text": "Ngân sách phần mềm nhỏ (dưới 5 triệu đồng/tháng) cần cấp phê duyệt nào?",
          "options": [
            "Tự quyết",
            "Kế toán trưởng",
            "Giám đốc",
            "Hội đồng quản trị hoặc công ty mẹ",
            "Không rõ"
          ]
        },
        {
          "kind": "choice",
          "text": "Thời gian từ khi đề xuất đến khi mua một công cụ nhỏ như vậy thường là?",
          "options": [
            "Dưới 1 tháng",
            "1–3 tháng",
            "3–6 tháng",
            "Trên 6 tháng",
            "Chưa từng mua"
          ]
        },
        {
          "kind": "grid",
          "text": "Khi mua công cụ mới, tiêu chí quan trọng nhất?",
          "options": [
            "Giảm thời gian xử lý",
            "Giảm rủi ro chi sai",
            "Giá",
            "Tích hợp với phần mềm hiện có",
            "Bảo mật dữ liệu"
          ],
          "n": 5
        }
      ]
    },
    {
      "title": "Phần 5 · Rào cản",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "\"Tôi lo ngại khi gửi chứng từ công ty tới dịch vụ AI bên ngoài.\"",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "choice",
          "text": "Nếu dữ liệu được ẩn danh hoặc xử lý trong nước, mức lo ngại của anh/chị?",
          "options": [
            "Giảm nhiều",
            "Giảm một phần",
            "Không đổi",
            "Không áp dụng"
          ]
        },
        {
          "kind": "scale",
          "text": "\"Tôi chỉ chấp nhận kết quả AI khi tôi mở được chứng từ gốc để tự kiểm.\"",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "\"Công cụ phải kết nối với TMS/ERP đang dùng thì tôi mới cân nhắc.\"",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "choice",
          "text": "Rào cản lớn nhất khiến công ty không dùng công cụ như vậy?",
          "options": [
            "Giá",
            "Bảo mật dữ liệu",
            "Tích hợp",
            "Công sức triển khai",
            "Độ chính xác của AI",
            "Không cần thiết",
            "Khác"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Điều anh/chị muốn Movago lưu ý thêm?",
          "required": false
        }
      ]
    },
    {
      "title": "Phần 6 · Cam kết hành vi",
      "desc": "",
      "items": [
        {
          "kind": "choice",
          "text": "Anh/chị sẵn sàng làm gì tiếp theo với Movago? (chọn mức cao nhất)",
          "options": [
            "Không",
            "Nhận thông tin cập nhật",
            "Xem demo trực tuyến 20 phút",
            "Cho đội xem 1–2 hóa đơn đã che thông tin",
            "Tham gia pilot 2–4 tuần với dữ liệu thật",
            "Giới thiệu người quyết định mua"
          ]
        },
        {
          "kind": "text",
          "text": "Để lại liên hệ nếu chọn từ \"Xem demo\" trở lên (form riêng, không gắn phản hồi).",
          "required": false
        }
      ]
    }
  ]
};

function createForm() {
  var form = FormApp.create(DATA.title);
  form.setDescription(DATA.description);
  form.setCollectEmail(false);
  form.setProgressBar(true);
  DATA.sections.forEach(function (s, si) {
    if (si > 0) {
      var pb = form.addPageBreakItem().setTitle(s.title);
      if (s.desc) pb.setHelpText(s.desc);
    }
    s.items.forEach(function (q) { addItem(form, q); });
  });
  Logger.log('Sửa form: ' + form.getEditUrl());
  Logger.log('Link gửi người trả lời: ' + form.getPublishedUrl());
}

function addItem(form, q) {
  var item, req = q.required !== false;
  if (q.kind === 'header') { form.addSectionHeaderItem().setTitle(q.text); return; }
  if (q.kind === 'choice' || q.kind === 'checkbox') {
    item = q.kind === 'choice' ? form.addMultipleChoiceItem() : form.addCheckboxItem();
    var vals = (q.options || []).filter(function (o) { return !/^(Khác|Other)$/i.test(o); });
    var hasOther = (q.options || []).length !== vals.length;
    item.setTitle(q.text);
    if (vals.length) item.setChoiceValues(vals);
    if (hasOther) item.showOtherOption(true);
  } else if (q.kind === 'scale') {
    item = form.addScaleItem().setTitle(q.text).setBounds(1, q.n);
    if (q.labels) item.setLabels(q.labels[0], q.labels[1]);
  } else if (q.kind === 'grid') {
    var cols = [];
    for (var i = 1; i <= q.n; i++) cols.push(String(i));
    item = form.addGridItem().setTitle(q.text).setRows(q.options).setColumns(cols).setRequireLimitOneResponsePerColumn(true);
  } else if (q.kind === 'paragraph') {
    item = form.addParagraphTextItem().setTitle(q.text);
  } else if (q.kind === 'number') {
    item = form.addTextItem().setTitle(q.text);
    item.setValidation(FormApp.createTextValidation().requireNumber().build());
  } else {
    item = form.addTextItem().setTitle(q.text);
  }
  item.setRequired(req);
}
