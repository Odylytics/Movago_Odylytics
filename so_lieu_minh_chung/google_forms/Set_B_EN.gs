// Set B · Web App Evaluation (English)
// Cách dùng: vào script.google.com → Dự án mới → xóa mã mẫu → dán toàn bộ file này → chọn hàm createForm → Run.
// Cấp quyền khi được hỏi. Xem link form ở mục Execution log (Nhật ký thực thi) phía dưới.
// Tạo 40 câu hỏi trong 7 trang.

var DATA = {
  "title": "Set B · Web App Evaluation (English)",
  "description": "Thank you. You will use a trial version of a tool for checking freight invoices. The data in it are simulated. There are no right or wrong answers, because we want to learn where the tool is confusing. Please think aloud as you work. You may stop at any time.",
  "sections": [
    {
      "title": "",
      "desc": "",
      "items": [
        {
          "kind": "text",
          "text": "Participant code (given by the moderator, if any)",
          "required": false
        }
      ]
    },
    {
      "title": "Part 2 · Post-task questionnaire · 2.1 Task difficulty (SEQ)",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "Overall, how easy or difficult was this task?",
          "n": 7,
          "labels": [
            "Very difficult",
            "Very easy"
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
          "text": "I think that I would like to use this system frequently.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I found the system unnecessarily complex.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I thought the system was easy to use.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I think that I would need the support of a technical person to be able to use this system.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I found the various functions in this system were well integrated.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I thought there was too much inconsistency in this system.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I would imagine that most people would learn to use this system very quickly.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I found the system very cumbersome to use.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I felt very confident using the system.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I needed to learn a lot of things before I could get going with this system.",
          "n": 5,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        }
      ]
    },
    {
      "title": "2.3 Technology acceptance (TAM/UTAUT)",
      "desc": "",
      "items": [
        {
          "kind": "header",
          "text": "Perceived usefulness"
        },
        {
          "kind": "scale",
          "text": "This tool would help me check freight invoices faster.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "This tool would help me find discrepancies I could easily miss.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "This tool would make my reconciliation work more effective.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "header",
          "text": "Perceived ease of use"
        },
        {
          "kind": "scale",
          "text": "Interacting with this tool is clear and understandable.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "It is easy for me to do what I want with this tool.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "Learning to use this tool would be easy for me.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "header",
          "text": "Social influence"
        },
        {
          "kind": "scale",
          "text": "My colleagues would support my using this tool.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "My manager would support my using this tool.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "My company would be ready to support deploying this tool.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "header",
          "text": "Behavioural intention"
        },
        {
          "kind": "scale",
          "text": "If my company had this tool, I would use it.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I intend to use this tool in my work within the next 6 months.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I would recommend this tool to colleagues.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        }
      ]
    },
    {
      "title": "2.4 Trust and transparency of the AI",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "I understand why the system flagged that item as a discrepancy.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "The evidence shown for each line is enough for me to check it myself.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I trust the system's reconciliation result.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I would still want to check the alerts myself before deciding to pay.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "I understand the difference between Matched, Discrepancy and Missing basis.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "The Missing basis label reassures me more than the system guessing a price.",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "paragraph",
          "text": "In case INV-095, which fee line holds the discrepancy?",
          "required": false
        },
        {
          "kind": "paragraph",
          "text": "What does the label Missing basis mean?",
          "required": false
        }
      ]
    },
    {
      "title": "2.5 Comparison with the current way of working",
      "desc": "",
      "items": [
        {
          "kind": "number",
          "text": "For an invoice like INV-095, how many minutes would it take you with your current method?"
        },
        {
          "kind": "number",
          "text": "How many minutes do you estimate it would take with this tool?"
        },
        {
          "kind": "choice",
          "text": "Would this tool replace, complement or be unrelated to how you work today?",
          "options": [
            "Replace",
            "Complement",
            "Unrelated"
          ]
        },
        {
          "kind": "paragraph",
          "text": "What about the tool makes you want to use it?",
          "required": false
        },
        {
          "kind": "paragraph",
          "text": "What makes you hesitant to use it?",
          "required": false
        },
        {
          "kind": "checkbox",
          "text": "Which missing features would you need before using it in real work?",
          "options": [
            "Reading more invoice layouts",
            "TMS/ERP integration",
            "Debit notes",
            "Consolidated multi-shipment invoices",
            "Multiple currencies",
            "Multi-level payment approval",
            "Reports by supplier",
            "Other"
          ]
        }
      ]
    },
    {
      "title": "Part 3 · Behavioural commitment",
      "desc": "",
      "items": [
        {
          "kind": "choice",
          "text": "After trying the tool, what are you willing to do next? (choose the highest level)",
          "options": [
            "Nothing",
            "Receive updates",
            "Show the team 1–2 masked invoices",
            "Join a 2–4 week pilot with real data",
            "Introduce the person who decides on purchases"
          ]
        },
        {
          "kind": "number",
          "text": "If the tool had the features in the missing-features question, what monthly price would you consider reasonable?",
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
