// Bộ B · Đánh giá web app Movago sau khi dùng thử
// Cách dùng: vào script.google.com → Dự án mới → xóa mã mẫu → dán toàn bộ file này → chọn hàm createForm → Run.
// Cấp quyền khi được hỏi. Xem link form ở mục Execution log (Nhật ký thực thi) phía dưới.
// Tạo 40 câu hỏi trong 7 trang.

var DATA = {
  "title": "Bộ B · Đánh giá web app Movago sau khi dùng thử",
  "description": "Cảm ơn anh/chị. Anh/chị sẽ dùng một bản thử của công cụ kiểm hóa đơn cước. Dữ liệu trong đó là giả lập. Không có đáp án đúng hay sai, vì chúng tôi muốn biết công cụ chỗ nào khó hiểu. Anh/chị vừa làm vừa nói to điều đang nghĩ. Anh/chị có thể dừng bất cứ lúc nào.",
  "sections": [
    {
      "title": "",
      "desc": "",
      "items": [
        {
          "kind": "text",
          "text": "Mã người tham gia (do người điều phối cung cấp, nếu có)",
          "required": false
        }
      ]
    },
    {
      "title": "Phần 2 · Bảng hỏi sau nhiệm vụ · 2.1 Độ khó từng nhiệm vụ (SEQ)",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "Nhìn chung, nhiệm vụ này dễ hay khó với anh/chị?",
          "n": 7,
          "labels": [
            "Rất khó",
            "Rất dễ"
          ]
        }
      ]
    },
    {
      "title": "2.2 System Usability Scale (SUS)",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "Tôi nghĩ mình sẽ muốn dùng hệ thống này thường xuyên.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi thấy hệ thống phức tạp một cách không cần thiết.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi thấy hệ thống dễ sử dụng.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi nghĩ mình cần sự hỗ trợ của một người am hiểu kỹ thuật để dùng được hệ thống này.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi thấy các chức năng của hệ thống được tích hợp tốt với nhau.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi thấy hệ thống có quá nhiều điểm không nhất quán.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi tưởng tượng phần lớn người sẽ học cách dùng hệ thống này rất nhanh.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi thấy hệ thống rất cồng kềnh khi sử dụng.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi cảm thấy rất tự tin khi dùng hệ thống.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi cần học nhiều điều trước khi có thể bắt đầu dùng hệ thống này.",
          "n": 5,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        }
      ]
    },
    {
      "title": "2.3 Chấp nhận công nghệ (TAM/UTAUT)",
      "desc": "",
      "items": [
        {
          "kind": "header",
          "text": "Hữu ích cảm nhận"
        },
        {
          "kind": "scale",
          "text": "Công cụ này giúp tôi kiểm hóa đơn cước nhanh hơn.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Công cụ này giúp tôi phát hiện khoản chênh lệch mà tôi dễ bỏ sót.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Công cụ này làm công việc đối chiếu của tôi hiệu quả hơn.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "header",
          "text": "Dễ dùng cảm nhận"
        },
        {
          "kind": "scale",
          "text": "Cách dùng công cụ này rõ ràng và dễ hiểu.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi dễ dàng làm được những gì tôi muốn với công cụ này.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Học cách dùng công cụ này là dễ với tôi.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "header",
          "text": "Ảnh hưởng xã hội"
        },
        {
          "kind": "scale",
          "text": "Đồng nghiệp tôi sẽ ủng hộ việc dùng công cụ này.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Cấp trên của tôi sẽ ủng hộ việc dùng công cụ này.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Công ty tôi sẽ sẵn sàng hỗ trợ khi triển khai công cụ này.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "header",
          "text": "Ý định dùng"
        },
        {
          "kind": "scale",
          "text": "Nếu công ty tôi có công cụ này, tôi sẽ dùng nó.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi dự định dùng công cụ này trong công việc của mình trong 6 tháng tới.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi sẽ giới thiệu công cụ này cho đồng nghiệp.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        }
      ]
    },
    {
      "title": "2.4 Niềm tin và minh bạch của AI",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "Tôi hiểu vì sao hệ thống báo khoản đó chênh lệch.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Căn cứ hiển thị cho từng dòng đủ để tôi tự kiểm lại.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi tin kết quả đối chiếu của hệ thống.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi vẫn muốn tự kiểm tra lại các cảnh báo trước khi quyết định chi.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Tôi hiểu sự khác nhau giữa Khớp, Có chênh lệch và Thiếu căn cứ.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "scale",
          "text": "Nhãn Thiếu căn cứ khiến tôi yên tâm hơn là hệ thống tự đoán một mức giá.",
          "n": 7,
          "labels": [
            "Hoàn toàn không đồng ý",
            "Hoàn toàn đồng ý"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Ở ca INV-095, khoản lệch nằm ở dòng phí nào?",
          "required": false
        },
        {
          "kind": "paragraph",
          "text": "Nhãn Thiếu căn cứ nghĩa là gì?",
          "required": false
        }
      ]
    },
    {
      "title": "2.5 So sánh với cách làm hiện tại",
      "desc": "",
      "items": [
        {
          "kind": "number",
          "text": "Với hóa đơn như INV-095, nếu anh/chị làm theo cách hiện tại, mất khoảng bao nhiêu phút?"
        },
        {
          "kind": "number",
          "text": "Anh/chị ước lượng dùng công cụ này mất bao nhiêu phút cho hóa đơn đó?"
        },
        {
          "kind": "choice",
          "text": "Công cụ này thay thế, bổ sung hay không liên quan đến cách anh/chị đang làm?",
          "options": [
            "Thay thế",
            "Bổ sung",
            "Không liên quan"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Điều gì ở công cụ khiến anh/chị muốn dùng?",
          "required": false
        },
        {
          "kind": "paragraph",
          "text": "Điều gì khiến anh/chị chưa muốn dùng?",
          "required": false
        },
        {
          "kind": "checkbox",
          "text": "Tính năng nào còn thiếu để anh/chị dùng trong công việc thật?",
          "options": [
            "Đọc nhiều mẫu hóa đơn hơn",
            "Kết nối TMS/ERP",
            "Debit note",
            "Hóa đơn gộp lô",
            "Nhiều tiền tệ",
            "Duyệt chi nhiều cấp",
            "Báo cáo theo nhà cung cấp",
            "Khác"
          ]
        }
      ]
    },
    {
      "title": "Phần 3 · Cam kết hành vi",
      "desc": "",
      "items": [
        {
          "kind": "choice",
          "text": "Sau khi dùng thử, anh/chị sẵn sàng làm gì tiếp theo? (chọn mức cao nhất)",
          "options": [
            "Không",
            "Nhận thông tin cập nhật",
            "Cho đội xem 1–2 hóa đơn đã che thông tin",
            "Tham gia pilot 2–4 tuần với dữ liệu thật",
            "Giới thiệu người quyết định mua"
          ]
        },
        {
          "kind": "number",
          "text": "Nếu công cụ có đủ tính năng ở câu hỏi về tính năng còn thiếu, mức phí hằng tháng anh/chị cho là hợp lý?",
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
    item = form.addGridItem().setTitle(q.text).setRows(q.options).setColumns(cols);
    item.setValidation(FormApp.createGridValidation().requireLimitOneResponsePerColumn().build());
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
