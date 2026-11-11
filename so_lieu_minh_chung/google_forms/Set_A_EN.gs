// Set A · Problem and Market Survey (English)
// Cách dùng: vào script.google.com → Dự án mới → xóa mã mẫu → dán toàn bộ file này → chọn hàm createForm → Run.
// Cấp quyền khi được hỏi. Xem link form ở mục Execution log (Nhật ký thực thi) phía dưới.
// Tạo 46 câu hỏi trong 7 trang.

var DATA = {
  "title": "Set A · Problem and Market Survey (English)",
  "description": "Team Odylytics (university students) is studying how accountants check freight invoices before paying them, to enter the KTC Ideathon and to assess whether a support tool is feasible. The survey takes about 12–15 minutes and collects no names or company names. Answers are used only in aggregate in our report and slides. Data is kept for at most 12 months, and you may ask us to delete your response. Participation is voluntary and you may stop at any time.",
  "sections": [
    {
      "title": "",
      "desc": "",
      "items": [
        {
          "kind": "text",
          "text": "Participant code (given by the moderator, if any)",
          "required": false
        },
        {
          "kind": "choice",
          "text": "Do you agree to take part under these conditions?",
          "options": [
            "Yes",
            "No"
          ]
        }
      ]
    },
    {
      "title": "Section 1 · Screening and sample profile",
      "desc": "",
      "items": [
        {
          "kind": "choice",
          "text": "How did you hear about this survey?",
          "options": [
            "VLA/HLA",
            "Zalo/Facebook group",
            "LinkedIn",
            "Personal referral",
            "Other"
          ]
        },
        {
          "kind": "choice",
          "text": "What type of company do you work for?",
          "options": [
            "Ocean freight forwarder",
            "Shipping-line agent",
            "Importer/exporter shipper",
            "Other logistics company",
            "Outside the industry"
          ]
        },
        {
          "kind": "choice",
          "text": "Do you take part in processing, verifying or approving inbound freight invoices or debit notes before payment?",
          "options": [
            "Yes, I process them directly",
            "Yes, I verify or approve them",
            "No"
          ]
        },
        {
          "kind": "choice",
          "text": "Your current role?",
          "options": [
            "Accounts payable / AP accountant",
            "General accountant",
            "Chief accountant / CFO",
            "Operations / documentation",
            "Pricing",
            "IT / data",
            "Business owner",
            "Other"
          ]
        },
        {
          "kind": "choice",
          "text": "What is your role when the company buys software for the accounting team?",
          "options": [
            "Main user",
            "Proposes or evaluates",
            "Approves the budget",
            "Not involved in the decision"
          ]
        },
        {
          "kind": "choice",
          "text": "Years of experience in the industry or a related function?",
          "options": [
            "Under 2",
            "2–5",
            "5–10",
            "Over 10"
          ]
        },
        {
          "kind": "choice",
          "text": "Company headcount?",
          "options": [
            "Under 20",
            "20–49",
            "50–199",
            "200–499",
            "500 or more"
          ]
        },
        {
          "kind": "choice",
          "text": "How many people work on accounts payable in your team?",
          "options": [
            "1",
            "2–3",
            "4–10",
            "More than 10"
          ]
        },
        {
          "kind": "choice",
          "text": "Where is the company headquartered?",
          "options": [
            "Ho Chi Minh City",
            "Hanoi",
            "Hai Phong",
            "Da Nang",
            "Elsewhere in Vietnam",
            "Outside Vietnam"
          ]
        }
      ]
    },
    {
      "title": "Section 2 · Current practice, measured on specific events",
      "desc": "For the next questions, think of the most recent freight invoice you checked, or last month. Please do not give a general estimate.",
      "items": [
        {
          "kind": "choice",
          "text": "Last month, roughly how many freight invoices or debit notes did your team receive?",
          "options": [
            "Under 100",
            "100–500",
            "500–1,000",
            "1,000–3,000",
            "Over 3,000",
            "Not sure"
          ]
        },
        {
          "kind": "choice",
          "text": "For the most recent freight invoice: how many minutes of hands-on work (opening documents, comparing, recording), excluding waiting for others?",
          "options": [
            "Under 5",
            "5–10",
            "10–20",
            "20–30",
            "Over 30"
          ]
        },
        {
          "kind": "choice",
          "text": "For the same invoice, how long did you wait for others (pricing, operations, carrier) before closing it?",
          "options": [
            "No waiting",
            "Under 1 hour",
            "1–4 hours",
            "4–24 hours",
            "Over 1 day"
          ]
        },
        {
          "kind": "choice",
          "text": "How many different sources of documents did you need to open to check that invoice?",
          "options": [
            "1",
            "2",
            "3",
            "4 or more"
          ]
        },
        {
          "kind": "choice",
          "text": "Last month, roughly how many invoices had to be queried with the supplier or corrected?",
          "options": [
            "0",
            "1–5",
            "6–20",
            "More than 20",
            "Don't remember"
          ]
        },
        {
          "kind": "choice",
          "text": "For those invoices, what was the approximate total discrepancy last month?",
          "options": [
            "None",
            "Under VND 5 million",
            "5–20 million",
            "20–100 million",
            "Over 100 million",
            "Don't know"
          ],
          "required": false
        },
        {
          "kind": "choice",
          "text": "In the last 12 months, did the company ever overpay or pay twice for a freight charge that was discovered after payment?",
          "options": [
            "Yes",
            "No",
            "Don't know"
          ]
        },
        {
          "kind": "text",
          "text": "If \"Yes\" in H7: roughly how many times, and what was the largest amount? (Count; Largest amount (VND million))",
          "required": false
        },
        {
          "kind": "checkbox",
          "text": "Which errors have you encountered in the last 12 months?",
          "options": [
            "Wrong unit rate",
            "Wrong container type or quantity",
            "Surcharge not approved",
            "Wrong rate-card version used",
            "Duplicate invoice sent",
            "Wrong shipment or B/L",
            "Missing supplementary approval",
            "Other"
          ]
        },
        {
          "kind": "checkbox",
          "text": "What tools do you use to check invoices?",
          "options": [
            "Excel",
            "Accounting software (MISA, Fast…)",
            "TMS / forwarder software",
            "ERP",
            "Eyeballing PDFs",
            "External freight audit service",
            "Other"
          ]
        },
        {
          "kind": "checkbox",
          "text": "In those tools, which steps are still done by hand?",
          "options": [
            "Finding documents",
            "Looking up the rate card",
            "Recalculating each line",
            "Matching the invoice to the shipment",
            "Detecting duplicate invoices",
            "Recording the reason for verification",
            "Other"
          ]
        },
        {
          "kind": "checkbox",
          "text": "Where is the approved rate card stored?",
          "options": [
            "TMS/ERP",
            "Shared Excel",
            "Email",
            "Paper or PDF",
            "In one person's head",
            "Other"
          ]
        },
        {
          "kind": "choice",
          "text": "For one supplier, how many rate versions are typically in force during a year?",
          "options": [
            "1",
            "2–3",
            "4–6",
            "More than 6",
            "Don't know"
          ]
        }
      ]
    },
    {
      "title": "Section 3 · Pain level and priority",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "\"Reconciling freight invoices against shipment records and approved rates takes a lot of effort in my team.\"",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "\"The risk of overpaying or paying twice for freight is a real concern for my company.\"",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "\"Our current reconciliation process is good enough and does not need improvement.\"",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "grid",
          "text": "Rank these accounts-payable difficulties from hardest (1) to least hard (5).",
          "options": [
            "Reconciling freight invoices to shipments and rates",
            "Collecting documents from several channels",
            "Tracking due dates and cash flow",
            "Reconciling supplier statements",
            "Keying data into accounting software"
          ],
          "n": 5
        },
        {
          "kind": "choice",
          "text": "Has the company ever tried to improve how freight invoices are checked (software, outsourcing, process change)?",
          "options": [
            "Implemented",
            "Tried and abandoned",
            "Considering",
            "No"
          ]
        },
        {
          "kind": "paragraph",
          "text": "If \"Tried and abandoned\" or \"Implemented\": what was missing, or why was it dropped?",
          "required": false
        }
      ]
    },
    {
      "title": "Section 4 · Pricing and the buying decision",
      "desc": "Movago is a tool that helps accountants check freight invoices before payment: it matches the invoice with the shipment file and the approved rate card, shows each discrepancy with evidence from both sides, and exports a report for the responsible person to verify.\n\nAssume a tool that checks freight invoices by matching documents to the shipment and rate card, showing discrepancies with evidence, and exporting a report, for about 500 invoices per month. Answers are numeric, in VND per month.",
      "items": [
        {
          "kind": "number",
          "text": "At what monthly price would the tool be so cheap that you would doubt its quality?"
        },
        {
          "kind": "number",
          "text": "At what monthly price would it be a bargain: cheap but you still trust it?"
        },
        {
          "kind": "number",
          "text": "At what monthly price would it start to feel expensive, but you would still consider it?"
        },
        {
          "kind": "number",
          "text": "At what monthly price would it be too expensive to buy at all?"
        },
        {
          "kind": "choice",
          "text": "Who decides on buying software for the accounting team at your company?",
          "options": [
            "Chief accountant / CFO",
            "Operations director",
            "Owner / CEO",
            "IT department",
            "Parent company",
            "Not sure"
          ]
        },
        {
          "kind": "choice",
          "text": "A small software budget (under VND 5 million/month) needs whose approval?",
          "options": [
            "I decide",
            "Chief accountant",
            "Director",
            "Board or parent company",
            "Not sure"
          ]
        },
        {
          "kind": "choice",
          "text": "From proposal to purchase of a small tool like this, how long does it usually take?",
          "options": [
            "Under 1 month",
            "1–3 months",
            "3–6 months",
            "Over 6 months",
            "Never bought one"
          ]
        },
        {
          "kind": "grid",
          "text": "When buying a new tool, rank the criteria from most important (1) to least (5).",
          "options": [
            "Reduces processing time",
            "Reduces risk of wrong payment",
            "Price",
            "Integration with existing software",
            "Data security"
          ],
          "n": 5
        }
      ]
    },
    {
      "title": "Section 5 · Barriers",
      "desc": "",
      "items": [
        {
          "kind": "scale",
          "text": "\"I am concerned about sending company documents to an external AI service.\"",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "choice",
          "text": "If the data were anonymised or processed in Vietnam, how would your concern change?",
          "options": [
            "Much lower",
            "Somewhat lower",
            "No change",
            "Not applicable"
          ]
        },
        {
          "kind": "scale",
          "text": "\"I would only accept an AI result if I can open the original document to check it myself.\"",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "scale",
          "text": "\"The tool must connect to our existing TMS/ERP before I would consider it.\"",
          "n": 7,
          "labels": [
            "Strongly disagree",
            "Strongly agree"
          ]
        },
        {
          "kind": "choice",
          "text": "What is the biggest barrier to your company using a tool like this?",
          "options": [
            "Price",
            "Data security",
            "Integration",
            "Effort to deploy",
            "AI accuracy",
            "Not needed",
            "Other"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Anything else you want Movago to take into account?",
          "required": false
        }
      ]
    },
    {
      "title": "Section 6 · Behavioural commitment",
      "desc": "",
      "items": [
        {
          "kind": "choice",
          "text": "What are you willing to do next with Movago? (choose the highest level)",
          "options": [
            "Nothing",
            "Receive updates",
            "Watch a 20-minute online demo",
            "Show the team 1–2 masked invoices",
            "Join a 2–4 week pilot with real data",
            "Introduce the person who decides on purchases"
          ]
        },
        {
          "kind": "text",
          "text": "If you chose \"Watch a demo\" or higher, leave contact details (separate form, not linked to your answers).",
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
