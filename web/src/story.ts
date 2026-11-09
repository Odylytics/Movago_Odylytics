// Fictional cast and the six-step story. Every name and company here is invented for the demo.
type L = { en: string; vi: string }

export type PersonaId = 'vy' | 'ha' | 'bao' | 'khoa' | 'lananh' | 'an'

export interface Persona { id: PersonaId; name: string; initials: string; tone: 'navy' | 'blue' | 'ice'; role: L; org: L; does: L }

const FORWARDER: L = { en: 'Demo Forwarder Co., HCMC', vi: 'Demo Forwarder Co., TP.HCM' }

export const PERSONAS: Persona[] = [
  {
    id: 'ha', name: 'Trần Thu Hà', initials: 'TH', tone: 'navy',
    role: { en: 'Accounts payable accountant', vi: 'Kế toán công nợ' }, org: FORWARDER,
    does: { en: 'Checks every carrier charge before it is paid. Uses Movago every day.', vi: 'Kiểm tra từng khoản cước trước khi chi. Dùng Movago hằng ngày.' },
  },
  {
    id: 'vy', name: 'Hoàng Bảo Vy', initials: 'BV', tone: 'ice',
    role: { en: 'Billing clerk', vi: 'Nhân viên lập hóa đơn' }, org: { en: 'Supplier A (carrier’s agent)', vi: 'Nhà cung cấp A (đại lý hãng tàu)' },
    does: { en: 'Sends invoice INV-095, then resends the same PDF under a new name.', vi: 'Gửi hóa đơn INV-095, rồi gửi lại đúng PDF đó với tên mới.' },
  },
  {
    id: 'bao', name: 'Phạm Quốc Bảo', initials: 'QB', tone: 'blue',
    role: { en: 'Operations and documents', vi: 'Vận hành và chứng từ' }, org: FORWARDER,
    does: { en: 'Keeps shipment file SHP-001: route, container, B/L and rating date.', vi: 'Giữ hồ sơ lô SHP-001: tuyến, container, vận đơn và mốc tính giá.' },
  },
  {
    id: 'khoa', name: 'Lê Minh Khoa', initials: 'MK', tone: 'blue',
    role: { en: 'Pricing executive', vi: 'Nhân viên pricing' }, org: FORWARDER,
    does: { en: 'Builds rate card RATE-V3 from the carrier quotation, approves it and confirms any extra charge.', vi: 'Dựng bảng giá RATE-V3 từ báo giá của hãng, duyệt và xác nhận khoản phát sinh.' },
  },
  {
    id: 'lananh', name: 'Nguyễn Lan Anh', initials: 'LA', tone: 'navy',
    role: { en: 'Chief accountant', vi: 'Kế toán trưởng' }, org: FORWARDER,
    does: { en: 'Approves payment. Buys Movago if the pilot hits its targets.', vi: 'Duyệt chi. Quyết định mua Movago nếu pilot đạt mục tiêu.' },
  },
  {
    id: 'an', name: 'Đỗ Gia An', initials: 'GA', tone: 'ice',
    role: { en: 'Import manager, the forwarder’s customer', vi: 'Quản lý nhập khẩu, khách hàng của forwarder' }, org: { en: 'Minh An Uniforms', vi: 'Minh An Uniforms' },
    does: { en: 'Owns the cargo: a 20ft container of school uniforms from Singapore. Should be re-billed only for confirmed charges.', vi: 'Chủ lô hàng: một container 20 feet đồng phục học sinh từ Singapore. Chỉ nên bị tính lại các khoản đã xác nhận.' },
  },
]

export const persona = (id: PersonaId) => PERSONAS.find((p) => p.id === id)!

export type Cue = 'rates' | 'channels' | 'scan' | 'extract' | 'reconcile' | 'focus' | 'duplicate' | 'send' | 'done'

/** who speaks; also lists the cast members the step mentions, so they light up too */
export interface StoryStep { who: PersonaId; also: PersonaId[]; title: L; body: L; cue: Cue; seconds: number }

export const STEPS: StoryStep[] = [
  {
    who: 'khoa', cue: 'rates', seconds: 13, also: ['vy'],
    title: { en: 'Khoa builds the rate card from the quotation', vi: 'Khoa dựng bảng giá từ báo giá' },
    body: {
      en: 'Before any invoice arrives, Supplier A emails quotation Q-SA-2611. Movago reads its nine rate lines; Khoa checks the two it is unsure about, approves all nine and publishes RATE-V3. Nobody types the rates into Excel.',
      vi: 'Trước khi hóa đơn đến, nhà cung cấp A gửi báo giá Q-SA-2611. Movago đọc chín dòng giá; Khoa xem riêng hai dòng AI chưa chắc, duyệt đủ chín dòng và phát hành RATE-V3. Không ai phải gõ giá vào Excel.',
    },
  },
  {
    who: 'vy', cue: 'channels', seconds: 12, also: ['bao'],
    title: { en: 'INV-095 arrives from three channels', vi: 'INV-095 đến từ ba kênh' },
    body: {
      en: 'Vy emails the PDF and also sends a photo on Messenger; Bảo scans the paper copy at Cat Lai. Movago pulls all three into one inbox and groups them by supplier and invoice number, keeping the PDF as the source.',
      vi: 'Vy gửi PDF qua email và gửi thêm ảnh qua Messenger; Bảo quét bản giấy tại Cát Lái. Movago gom cả ba về một hộp thư, gộp theo nhà cung cấp và số hóa đơn, giữ PDF làm bản gốc.',
    },
  },
  {
    who: 'bao', cue: 'scan', seconds: 10, also: [],
    title: { en: 'Bảo scans the paper copy', vi: 'Bảo quét bản giấy' },
    body: {
      en: 'The phone camera finds the page edges, straightens the image and uploads it. The scan joins the same invoice, so nobody types it in again.',
      vi: 'Camera điện thoại tìm mép trang, làm thẳng ảnh rồi tải lên. Bản quét được gắn vào đúng hóa đơn đó, không ai phải gõ lại.',
    },
  },
  {
    who: 'ha', cue: 'extract', seconds: 12, also: [],
    title: { en: 'Movago reads INV-095', vi: 'Movago đọc INV-095' },
    body: {
      en: 'AI reads the PDF: invoice number, shipment, each fee line, the amount and where it sits on the page. It suggests mapping “Documentation fee” to fee code DOC, for Hà to confirm.',
      vi: 'AI đọc PDF: số hóa đơn, mã lô, từng dòng phí, số tiền và vị trí trên trang. AI gợi ý gắn “Documentation fee” với mã phí DOC để Hà xác nhận.',
    },
  },
  {
    who: 'ha', cue: 'reconcile', also: [], seconds: 10,
    title: { en: 'Hà runs the reconciliation', vi: 'Hà chạy đối chiếu' },
    body: {
      en: 'Ocean freight matches 8,000,000. The documentation fee does not: 1,300,000 invoiced against 500,000 approved. The invoice adds up, so a sum check alone would pass it.',
      vi: 'Cước chính khớp 8.000.000. Phí chứng từ thì không: 1.300.000 trên hóa đơn so với 500.000 đã duyệt. Hóa đơn cộng đúng nên chỉ kiểm tra tổng sẽ bỏ sót.',
    },
  },
  {
    who: 'ha', cue: 'focus', also: [], seconds: 9,
    title: { en: 'Hà opens the +800,000 evidence', vi: 'Hà mở căn cứ khoản +800.000' },
    body: {
      en: 'Invoice page 1, DOC line, beside RATE-V3 line 12, with the sum 1,300,000 − 500,000. No digging through email or spreadsheets.',
      vi: 'Hóa đơn trang 1 dòng DOC đặt cạnh RATE-V3 dòng 12, kèm phép tính 1.300.000 − 500.000. Không phải lục email hay bảng tính.',
    },
  },
  {
    who: 'vy', cue: 'duplicate', also: ['ha'], seconds: 9,
    title: { en: 'The same PDF arrives again', vi: 'Cùng PDF được gửi lại' },
    body: {
      en: 'Vy resends INV-095 under a new file name. Movago matches the file fingerprint and points Hà to the copy already received, so it is not entered twice.',
      vi: 'Vy gửi lại INV-095 với tên tệp mới. Movago so dấu vân tay tệp và chỉ cho Hà bản đã nhận, nên hóa đơn không bị nhập hai lần.',
    },
  },
  {
    who: 'khoa', cue: 'send', also: ['ha'], seconds: 10,
    title: { en: 'Hà asks Khoa to verify', vi: 'Hà nhờ Khoa xác minh' },
    body: {
      en: 'Hà sends the DOC line to Khoa in Pricing with the evidence attached. The discrepancy stays flagged while he checks for an extra approval on this shipment.',
      vi: 'Hà chuyển dòng DOC cho Khoa bên pricing kèm căn cứ. Cảnh báo vẫn giữ nguyên trong lúc Khoa kiểm tra có phê duyệt bổ sung cho lô này không.',
    },
  },
  {
    who: 'lananh', cue: 'done', also: ['an'], seconds: 10,
    title: { en: 'Lan Anh decides, with evidence', vi: 'Lan Anh quyết định, có căn cứ' },
    body: {
      en: 'The chief accountant gets the CSV report with both values and their sources. Payment approval stays with her, and Minh An Uniforms is re-billed only for confirmed charges.',
      vi: 'Kế toán trưởng nhận báo cáo CSV có giá trị hai phía và nguồn. Quyền duyệt chi vẫn thuộc chị, và Minh An Uniforms chỉ bị tính lại các khoản đã xác nhận.',
    },
  },
]
