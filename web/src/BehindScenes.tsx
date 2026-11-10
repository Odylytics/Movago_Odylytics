import { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar'
import { Icon, type IconName } from './icons'
import { useT } from './i18n'
import { persona, type PersonaId } from './story'

// "Behind the scenes" picture-in-picture: a looping vignette per story step that shows what happens
// off-screen (who hands what to whom, how paper becomes a PDF, how the discrepancy is settled).
// Scenes are drawn on a 320 × 180 canvas; each actor moves along keyframes run by the Web Animations API.
type L = { en: string; vi: string }
/** [offset 0–1, dx px, dy px, opacity, scale] */
type P = [number, number, number, number?, number?]
interface Actor { who?: PersonaId; icon?: IconName; label?: string | L; tone?: 'light' | 'dark' | 'blue'; x: number; y: number; size?: number; path?: P[] }
interface Vignette { place: L; caption: L; seconds: number; set: 'office' | 'port' | 'desk'; actors: Actor[] }

const show = (from: number, to = 1): P[] => [[0, 0, 0, 0], [from, 0, 0, 0], [from + 0.04, 0, 0, 1], [to, 0, 0, 1], [Math.min(1, to + 0.04), 0, 0, 0], [1, 0, 0, 0]]
const pop = (at: number, until = 0.96): P[] => [[0, 0, 6, 0, 0.8], [at, 0, 6, 0, 0.8], [at + 0.06, 0, 0, 1, 1], [until, 0, 0, 1, 1], [1, 0, -4, 0, 1]]
const bob: P[] = [[0, 0, 0], [0.5, 0, -3], [1, 0, 0]]
const inbox: Actor = { icon: 'inbox', label: 'Movago', tone: 'dark', x: 236, y: 12 }

const VIGNETTES: Vignette[] = [
  {
    set: 'desk', seconds: 9,
    place: { en: 'Demo Forwarder · pricing desk', vi: 'Demo Forwarder · bàn pricing' },
    caption: { en: 'Supplier A’s quotation lands. Movago drafts the rate card; Khoa checks two lines, approves and publishes RATE-V3.', vi: 'Báo giá của nhà cung cấp A đến. Movago dựng nháp bảng giá; Khoa xem hai dòng, duyệt và phát hành RATE-V3.' },
    actors: [
      { who: 'khoa', x: 18, y: 92, size: 58, path: bob },
      { icon: 'laptop', label: 'Movago', tone: 'dark', x: 120, y: 120 },
      { icon: 'mail', label: 'Q-SA-2611.pdf', x: 230, y: 14, path: [[0, 0, 0, 0], [0.05, 0, 0, 1], [0.3, -96, 92, 0.2], [0.34, -96, 92, 0], [1, -96, 92, 0]] },
      { icon: 'table', label: { en: '9 lines read · 2 to check', vi: 'Đọc 9 dòng · 2 dòng cần xem' }, tone: 'blue', x: 120, y: 36, path: pop(0.36) },
      { icon: 'check', label: { en: 'RATE-V3 approved', vi: 'Đã duyệt RATE-V3' }, tone: 'dark', x: 120, y: 76, path: pop(0.62) },
    ],
  },
  {
    set: 'office', seconds: 8,
    place: { en: 'Supplier A · billing desk', vi: 'Nhà cung cấp A · bàn lập hóa đơn' },
    caption: { en: 'Vy prints and stamps INV-095, scans it to PDF and emails it. She snaps a photo for Messenger too.', vi: 'Vy in và đóng dấu INV-095, scan ra PDF rồi gửi email. Vy chụp thêm ảnh gửi qua Messenger.' },
    actors: [
      inbox,
      { who: 'vy', x: 14, y: 96, size: 56, path: bob },
      { icon: 'printer', label: { en: 'Scan', vi: 'Quét' }, x: 124, y: 120 },
      { icon: 'doc', label: 'INV-095', x: 66, y: 98, path: [[0, 0, 0, 0], [0.06, 0, 0, 1], [0.3, 56, 22, 1], [0.36, 56, 22, 0], [1, 56, 22, 0]] },
      { icon: 'stamp', tone: 'dark', x: 84, y: 64, path: [[0, 0, -8, 0], [0.1, 0, -8, 0], [0.15, 0, 10, 1], [0.2, 0, 0, 1], [0.24, 0, 0, 0], [1, 0, 0, 0]] },
      { icon: 'doc', label: 'INV-095.pdf', tone: 'blue', x: 150, y: 96, path: [[0, 0, 0, 0], [0.36, 0, 0, 0], [0.42, 12, -6, 1], [0.62, 70, -36, 1], [0.68, 70, -36, 0], [1, 70, -36, 0]] },
      { icon: 'mail', label: 'Email', x: 220, y: 60, path: [[0, 0, 0, 0], [0.58, 0, 0, 0], [0.62, 0, 0, 1], [0.76, 0, 0, 1], [0.88, 24, -40, 0], [1, 24, -40, 0]] },
      { icon: 'chat', label: { en: 'Photo', vi: 'Ảnh' }, x: 70, y: 52, path: [[0, 0, 0, 0], [0.7, 0, 0, 0], [0.74, 0, 0, 1], [0.94, 170, -36, 0.2], [1, 170, -36, 0]] },
    ],
  },
  {
    set: 'port', seconds: 8,
    place: { en: 'Cat Lai port · gate', vi: 'Cảng Cát Lái · cổng' },
    caption: { en: 'The paper copy comes with the delivery papers. Bảo scans it on his phone before he files it.', vi: 'Bản giấy đi kèm bộ chứng từ giao hàng. Bảo quét bằng điện thoại trước khi lưu hồ sơ.' },
    actors: [
      inbox,
      { icon: 'truck', label: { en: 'Truck', vi: 'Xe tải' }, x: 10, y: 120, path: [[0, -70, 0, 0], [0.14, 0, 0, 1], [0.8, 0, 0, 1], [0.96, -70, 0, 0], [1, -70, 0, 0]] },
      { icon: 'doc', label: 'INV-095', x: 70, y: 112, path: [[0, 0, 0, 0], [0.16, 0, 0, 0], [0.2, 0, 0, 1], [0.42, 84, -4, 1], [0.5, 84, -4, 1], [0.54, 84, -4, 0], [1, 84, -4, 0]] },
      { who: 'bao', x: 176, y: 94, size: 56, path: bob },
      { icon: 'phone', label: { en: 'Scan', vi: 'Quét' }, tone: 'blue', x: 236, y: 104, path: show(0.48, 0.82) },
      { icon: 'check', label: { en: 'Scanned', vi: 'Đã quét' }, tone: 'dark', x: 232, y: 66, path: [[0, 0, 0, 0], [0.62, 0, 0, 0], [0.66, 0, 0, 1], [0.84, 4, -40, 1], [0.9, 4, -40, 0], [1, 4, -40, 0]] },
    ],
  },
  {
    set: 'desk', seconds: 7,
    place: { en: 'Demo Forwarder · AP desk', vi: 'Demo Forwarder · bàn kế toán công nợ' },
    caption: { en: 'Hà gets one notification: INV-095 is read and grouped. Nothing to type in by hand.', vi: 'Hà nhận một thông báo: INV-095 đã được đọc và gộp. Không phải gõ tay.' },
    actors: [
      { who: 'ha', x: 22, y: 90, size: 60, path: bob },
      { icon: 'laptop', label: 'Movago', tone: 'dark', x: 112, y: 116 },
      { icon: 'bell', label: { en: 'INV-095 read · 8 fields', vi: 'Đã đọc INV-095 · 8 trường' }, tone: 'blue', x: 134, y: 36, path: pop(0.12) },
      { icon: 'inbox', label: { en: '3 copies → 1 invoice', vi: '3 bản → 1 hóa đơn' }, x: 134, y: 72, path: pop(0.32) },
    ],
  },
  {
    set: 'desk', seconds: 7,
    place: { en: 'Demo Forwarder · AP desk', vi: 'Demo Forwarder · bàn kế toán công nợ' },
    caption: { en: 'The invoice, Bảo’s shipment file and Khoa’s rate card meet on Hà’s screen. One click runs the check.', vi: 'Hóa đơn, hồ sơ lô của Bảo và bảng giá của Khoa gặp nhau trên màn hình của Hà. Một cú bấm là chạy đối chiếu.' },
    actors: [
      { who: 'ha', x: 22, y: 90, size: 60, path: bob },
      { icon: 'laptop', label: 'Movago', tone: 'dark', x: 128, y: 120 },
      { icon: 'doc', label: 'INV-095', x: 100, y: 14, path: [[0, 0, 0, 0], [0.05, 0, 0, 1], [0.3, 40, 96, 0.2], [0.34, 40, 96, 0], [1, 40, 96, 0]] },
      { icon: 'table', label: 'SHP-001', x: 180, y: 14, path: [[0, 0, 0, 0], [0.12, 0, 0, 1], [0.38, -30, 96, 0.2], [0.42, -30, 96, 0], [1, -30, 96, 0]] },
      { icon: 'rules', label: 'RATE-V3', x: 250, y: 30, path: [[0, 0, 0, 0], [0.2, 0, 0, 1], [0.46, -96, 80, 0.2], [0.5, -96, 80, 0], [1, -96, 80, 0]] },
      { icon: 'bell', label: { en: 'DOC +800,000 ₫', vi: 'DOC +800.000 đ' }, tone: 'blue', x: 200, y: 82, path: pop(0.56) },
    ],
  },
  {
    set: 'desk', seconds: 7,
    place: { en: 'Demo Forwarder · AP desk', vi: 'Demo Forwarder · bàn kế toán công nợ' },
    caption: { en: 'No searching through email or spreadsheets: the invoice line and the approved rate are already side by side.', vi: 'Không phải lục email hay bảng tính: dòng hóa đơn và giá đã duyệt đã nằm cạnh nhau.' },
    actors: [
      { who: 'ha', x: 16, y: 96, size: 56, path: bob },
      { icon: 'doc', label: { en: 'Invoice · 1,300,000', vi: 'Hóa đơn · 1.300.000' }, x: 92, y: 40, path: pop(0.08) },
      { icon: 'rules', label: { en: 'RATE-V3 L12 · 500,000', vi: 'RATE-V3 dòng 12 · 500.000' }, x: 92, y: 80, path: pop(0.24) },
      { icon: 'eye', label: { en: '+800,000 pre-tax', vi: '+800.000 trước thuế' }, tone: 'blue', x: 120, y: 124, path: pop(0.44) },
    ],
  },
  {
    set: 'office', seconds: 7,
    place: { en: 'Supplier A · billing desk, next day', vi: 'Nhà cung cấp A · bàn lập hóa đơn, hôm sau' },
    caption: { en: 'Vy resends the same PDF under a new name. Movago stamps it as already received, so it is never paid twice.', vi: 'Vy gửi lại đúng PDF đó với tên mới. Movago đóng dấu đã nhận, nên không bao giờ bị chi hai lần.' },
    actors: [
      inbox,
      { who: 'vy', x: 14, y: 96, size: 56, path: bob },
      { icon: 'mail', label: 'INV-095 (1).pdf', x: 74, y: 104, path: [[0, 0, 0, 0], [0.06, 0, 0, 1], [0.4, 120, -60, 1], [0.86, 120, -60, 1], [0.92, 120, -60, 0], [1, 120, -60, 0]] },
      { icon: 'stamp', label: { en: 'Already received', vi: 'Đã nhận trước đó' }, tone: 'dark', x: 176, y: 76, path: pop(0.46, 0.9) },
    ],
  },
  {
    set: 'desk', seconds: 8,
    place: { en: 'Demo Forwarder · pricing desk', vi: 'Demo Forwarder · bàn pricing' },
    caption: { en: 'Hà sends the DOC line with its evidence. Khoa opens the contract file for SHP-001: there is no extra approval.', vi: 'Hà gửi dòng DOC kèm căn cứ. Khoa mở hồ sơ hợp đồng của SHP-001: không có phê duyệt bổ sung.' },
    actors: [
      { who: 'ha', x: 14, y: 96, size: 56, path: bob },
      { who: 'khoa', x: 248, y: 96, size: 56, path: [[0, 0, 0], [0.5, 0, -3], [1, 0, 0]] },
      { icon: 'chat', label: { en: 'DOC +800,000 · evidence', vi: 'DOC +800.000 · căn cứ' }, tone: 'blue', x: 64, y: 70, path: [[0, 0, 0, 0], [0.06, 0, 0, 1], [0.34, 80, -20, 1], [0.4, 80, -20, 0], [1, 80, -20, 0]] },
      { icon: 'folder', label: { en: 'Contract SHP-001', vi: 'Hợp đồng SHP-001' }, x: 150, y: 110, path: pop(0.42) },
      { icon: 'check', label: { en: 'No extra approval', vi: 'Không có phê duyệt thêm' }, tone: 'dark', x: 150, y: 20, path: pop(0.62) },
    ],
  },
  {
    set: 'office', seconds: 10,
    place: { en: 'Settling it · simulated outcome', vi: 'Giải quyết · kịch bản mô phỏng' },
    caption: {
      en: 'Khoa calls Vy. Supplier A issues an adjusted invoice with DOC at 500,000. Lan Anh approves 8,500,000 pre-tax, and Minh An Uniforms is billed only for confirmed charges.',
      vi: 'Khoa gọi Vy. Nhà cung cấp A xuất hóa đơn điều chỉnh với DOC 500.000. Lan Anh duyệt 8.500.000 trước thuế, và Minh An Uniforms chỉ bị tính khoản đã xác nhận.',
    },
    actors: [
      { who: 'khoa', x: 10, y: 10, size: 46 },
      { who: 'vy', x: 10, y: 118, size: 46 },
      { icon: 'call', label: { en: 'Call', vi: 'Gọi điện' }, tone: 'blue', x: 14, y: 72, path: [[0, 0, 0, 0], [0.04, 0, 0, 1, 1], [0.1, 0, 0, 1, 1.12], [0.16, 0, 0, 1, 1], [0.22, 0, 0, 1, 1.12], [0.3, 0, 0, 0, 1], [1, 0, 0, 0]] },
      { icon: 'doc', label: { en: 'INV-095-A · DOC 500,000', vi: 'INV-095-A · DOC 500.000' }, x: 60, y: 128, path: [[0, 0, 0, 0], [0.3, 0, 0, 0], [0.34, 0, 0, 1], [0.54, 70, -66, 1], [0.6, 70, -66, 0], [1, 70, -66, 0]] },
      { who: 'lananh', x: 150, y: 50, size: 52 },
      { icon: 'stamp', label: { en: 'Approved 8,500,000', vi: 'Duyệt 8.500.000' }, tone: 'dark', x: 128, y: 112, path: pop(0.58) },
      { who: 'an', x: 262, y: 54, size: 46 },
      { icon: 'check', label: { en: 'Billed: confirmed only', vi: 'Chỉ tính khoản đã xác nhận' }, tone: 'blue', x: 198, y: 14, path: pop(0.76) },
    ],
  },
]

const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function ActorEl({ a, seconds }: { a: Actor; seconds: number }) {
  const { lang } = useT()
  const label = typeof a.label === 'string' ? a.label : a.label?.[lang]
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !a.path) return
    const frames = a.path.map(([offset, x, y, opacity = 1, s = 1]) => ({ offset, transform: `translate(${x}px, ${y}px) scale(${s})`, opacity }))
    if (reduced()) {
      // still frame: the last visible pose
      const f = [...frames].reverse().find((k) => k.opacity > 0) ?? frames[0]
      el.style.transform = f.transform
      el.style.opacity = String(f.opacity)
      return
    }
    const anim = el.animate(frames, { duration: seconds * 1000, iterations: Infinity, easing: 'cubic-bezier(0.45, 0, 0.25, 1)' })
    return () => anim.cancel()
  }, [a, seconds])
  return (
    <div ref={ref} className="act" style={{ left: a.x, top: a.y }}>
      {a.who ? <Avatar p={persona(a.who)} size={a.size ?? 48} /> : <span className={`prop ${a.tone ?? 'light'}`}>{a.icon && <Icon name={a.icon} size={12} />}{label}</span>}
    </div>
  )
}

export default function BehindScenes({ step }: { step: number }) {
  const { lang } = useT()
  const [open, setOpen] = useState(() => window.innerWidth > 640)
  const v = VIGNETTES[step]
  if (!v) return null
  const label = lang === 'en' ? 'Behind the scenes' : 'Hậu trường'
  if (!open) {
    return (
      <button className="pip-min" onClick={() => setOpen(true)}><span className="pip-rec" />{label}</button>
    )
  }
  return (
    <aside className="pip" aria-label={label}>
      <div className="pip-head">
        <span className="pip-rec" aria-hidden="true" />
        <span className="pip-title">{label}<span> · {v.place[lang]}</span></span>
        <button className="pip-x" onClick={() => setOpen(false)} aria-label={lang === 'en' ? 'Minimise' : 'Thu nhỏ'}>
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
      <div className="pip-frame">
        <div className={`pip-canvas set-${v.set}`} key={step}>
          <Backdrop set={v.set} />
          {v.actors.map((a, i) => <ActorEl key={i} a={a} seconds={v.seconds} />)}
        </div>
      </div>
      <div className="pip-bar" key={`bar-${step}`}><i style={{ animationDuration: `${v.seconds}s` }} /></div>
      <p className="pip-cap" key={`cap-${step}`}>{v.caption[lang]}</p>
    </aside>
  )
}

function Backdrop({ set }: { set: Vignette['set'] }) {
  if (set === 'port') {
    return (
      <div className="bd" aria-hidden="true">
        <span className="crane" /><span className="jib" />
        {[0, 1, 2, 3, 4].map((i) => <span key={i} className={`box c${i % 3}`} style={{ left: 96 + i * 40, top: 138 - (i % 2) * 18 }} />)}
        <span className="ground" />
      </div>
    )
  }
  return (
    <div className="bd" aria-hidden="true">
      <span className="window" />
      {set === 'desk' && <span className="desk" />}
      <span className="ground" />
    </div>
  )
}
