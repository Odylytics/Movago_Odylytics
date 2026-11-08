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
    does: { en: 'Owns approved rate card RATE-V3 and confirms any extra charge.', vi: 'Giữ bảng giá đã duyệt RATE-V3 và xác nhận khoản phát sinh.' },
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

export type Cue = 'arrive' | 'reconcile' | 'focus' | 'duplicate' | 'send' | 'done'

/** who speaks; also lists the cast members the step mentions, so they light up too */
export interface StoryStep { who: PersonaId; also: PersonaId[]; title: L; body: L; cue: Cue; seconds: number }

export const STEPS: StoryStep[] = [
  {
    who: 'vy', cue: 'arrive', also: ['bao', 'khoa', 'an'], seconds: 9,
    title: { en: 'Vy sends invoice INV-095', vi: 'Vy gửi hóa đơn INV-095' },
    body: {
      en: 'Supplier A bills shipment SHP-001: Minh An Uniforms’ 20ft container from Singapore to Cat Lai. Movago already holds Bảo’s shipment file and Khoa’s approved rate card RATE-V3.',
      vi: 'Nhà cung cấp A lập hóa đơn cho lô SHP-001: container 20 feet của Minh An Uniforms từ Singapore về Cát Lái. Movago đã có hồ sơ lô của Bảo và bảng giá đã duyệt RATE-V3 của Khoa.',
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
