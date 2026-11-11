// Odylytics · Interest form (EN / VI)
// Cách dùng: script.google.com → Dự án mới → xóa mã mẫu → dán toàn bộ file này → lưu → chọn hàm createForm → Run.
// Cấp quyền khi được hỏi. Link form hiện ở Execution log (Nhật ký thực thi).
// Muốn đẹp hơn: mở form → biểu tượng bảng màu (Customize theme) → chọn ảnh header, màu, font.

function createForm() {
  var form = FormApp.create('Join Odylytics · Tham gia Odylytics');
  form.setDescription(
    'Odylytics is an AI research and engineering team founded by five students from the UTS – HCMUT collaborative program. ' +
    'We start from real-world problems and emerging research, and turn them into practical solutions people can actually use, such as AquaGuard. ' +
    'Have an idea worth building, or want to join us? Leave your details, it takes about 1 minute.\n' +
    '🌐 odylytics.com · ✉️ odylytics@gmail.com\n\n' +
    'Odylytics là đội ngũ nghiên cứu và phát triển công nghệ AI, do 5 sinh viên chương trình liên kết UTS – ĐH Bách khoa (ĐHQG-HCM) sáng lập. ' +
    'Chúng tôi bắt đầu từ những vấn đề thực tế và nghiên cứu mới để làm ra giải pháp có giá trị ứng dụng, như AquaGuard. ' +
    'Bạn có ý tưởng đáng làm, hoặc muốn cùng làm với chúng tôi? Để lại thông tin, chỉ mất khoảng 1 phút.\n' +
    '🌐 odylytics.com · ✉️ odylytics@gmail.com\n\n' +
    'Odylytics — Engineering Intelligence.'
  );
  form.setProgressBar(true);
  form.setCollectEmail(false);
  form.setConfirmationMessage('Thank you! We will be in touch soon. Questions? odylytics@gmail.com\nCảm ơn bạn! Odylytics sẽ liên hệ sớm. Cần hỏi thêm: odylytics@gmail.com');

  // Page 1: intent (branches to the project page only for "invite us")
  var intent = form.addMultipleChoiceItem()
    .setTitle('What brings you here? / Bạn đến với Odylytics vì điều gì?')
    .setRequired(true);

  // Page 2 (only if inviting Odylytics to a project)
  var pProject = form.addPageBreakItem().setTitle('Your project · Dự án của bạn');
  form.addParagraphTextItem()
    .setTitle('Tell us about your project in 2–3 lines / Giới thiệu ngắn dự án của bạn (2–3 dòng)')
    .setRequired(true);

  // Page 3: about you
  var pAbout = form.addPageBreakItem().setTitle('About you · Về bạn');
  form.addTextItem().setTitle('Full name / Họ và tên').setRequired(true);
  form.addTextItem().setTitle('Age / Tuổi').setRequired(true)
    .setValidation(FormApp.createTextValidation().requireNumberBetween(10, 99).build());
  form.addMultipleChoiceItem()
    .setTitle('Occupation / Nghề nghiệp')
    .setChoiceValues([
      'Student / Sinh viên',
      'Working professional / Đang đi làm',
      'Founder or freelancer / Founder hoặc freelancer'
    ])
    .showOtherOption(true)
    .setRequired(true);
  form.addTextItem()
    .setTitle('School or organization / Trường hoặc tổ chức')
    .setHelpText('Students: your school · Sinh viên: ghi tên trường')
    .setRequired(true);
  form.addTextItem().setTitle('Email').setRequired(true)
    .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());
  form.addTextItem()
    .setTitle('Phone number / Zalo (optional) · Số điện thoại / Zalo (không bắt buộc)')
    .setRequired(false);
  form.addTextItem()
    .setTitle('LinkedIn (optional) · LinkedIn (không bắt buộc)')
    .setHelpText('Profile link · Link trang cá nhân')
    .setRequired(false);

  // Page 4: founding team
  form.addPageBreakItem().setTitle('Founding team · Đội sáng lập');
  form.addMultipleChoiceItem()
    .setTitle('Would you like to be considered for our founding team? / Bạn có muốn được cân nhắc vào đội sáng lập của Odylytics không?')
    .setChoiceValues([
      "Yes, I'm in / Có, mình muốn tham gia",
      'Maybe, tell me more / Có thể, cho mình biết thêm',
      'Not right now / Chưa phải lúc này'
    ])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('What can you bring? (optional) / Bạn có thể đóng góp gì? (không bắt buộc)')
    .setChoiceValues([
      'AI / Engineering · AI / Kỹ thuật',
      'Product / Design · Sản phẩm / Thiết kế',
      'Marketing / Communications · Marketing / Truyền thông',
      'Research · Nghiên cứu',
      'Business / Partnerships · Kinh doanh / Đối tác'
    ])
    .showOtherOption(true)
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle('Anything else you want to tell us? (optional) / Bạn muốn nhắn thêm điều gì? (không bắt buộc)')
    .setRequired(false);
  form.addCheckboxItem()
    .setTitle('Consent / Đồng ý')
    .setChoiceValues(['I agree that Odylytics may contact me. / Mình đồng ý để Odylytics liên hệ.'])
    .setRequired(true);

  // Branching for page 1
  intent.setChoices([
    intent.createChoice('Join the Odylytics team / Tham gia đội ngũ Odylytics', pAbout),
    intent.createChoice('Collaborate on an upcoming Odylytics project / Cùng làm dự án sắp tới của Odylytics', pAbout),
    intent.createChoice('Invite Odylytics to join my project / Mời Odylytics tham gia dự án của mình', pProject),
    intent.createChoice('Stay updated on Odylytics news / Để lại thông tin để nhận cập nhật từ Odylytics', pAbout)
  ]);

  Logger.log('Sửa form: ' + form.getEditUrl());
  Logger.log('Link gửi người trả lời: ' + form.getPublishedUrl());
}
