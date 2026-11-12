import { Icon, type IconName } from './icons'
import { useT } from './i18n'
import { Badge } from './ui'

type L = { en: string; vi: string }

const SOURCES: { icon: IconName; t: L; d: L }[] = [
  { icon: 'mail', t: { en: 'Email', vi: 'Email' }, d: { en: 'PDF invoices and debit notes from carriers and agents', vi: 'Hóa đơn PDF và debit note từ hãng tàu, đại lý' } },
  { icon: 'chat', t: { en: 'Messenger / Zalo', vi: 'Messenger / Zalo' }, d: { en: 'Photos and files sent in chat', vi: 'Ảnh và tệp gửi qua chat' } },
  { icon: 'camera', t: { en: 'Phone camera', vi: 'Camera điện thoại' }, d: { en: 'Paper copies scanned at the port or office', vi: 'Bản giấy quét tại cảng hoặc văn phòng' } },
  { icon: 'globe', t: { en: 'Carrier portals', vi: 'Cổng hãng tàu' }, d: { en: 'Invoices downloaded by B/L or container', vi: 'Hóa đơn tải theo vận đơn hoặc container' } },
  { icon: 'table', t: { en: 'TMS / ERP exports', vi: 'File xuất TMS / ERP' }, d: { en: 'Shipment files and approved rate cards as CSV', vi: 'Hồ sơ lô và bảng giá đã duyệt dạng CSV' } },
]

const PIPE: { icon: IconName; t: L; d: L }[] = [
  { icon: 'inbox', t: { en: 'Intake and grouping', vi: 'Tiếp nhận và gộp' }, d: { en: 'One inbox; SHA-256 fingerprint for exact copies, supplier + invoice number for photos and scans', vi: 'Một hộp thư; dấu vân tay SHA-256 cho bản trùng, nhà cung cấp + số hóa đơn cho ảnh và bản quét' } },
  { icon: 'scan', t: { en: 'Document AI reading', vi: 'Document AI đọc chứng từ' }, d: { en: 'OCR and layout: fields, fee lines and their position on the page; low confidence goes to a person', vi: 'OCR và bố cục: trường, dòng phí và vị trí trên trang; trường tin cậy thấp chuyển cho người kiểm tra' } },
  { icon: 'rules', t: { en: 'Match and rules', vi: 'Ghép lô và quy tắc' }, d: { en: 'Shipment by ID or B/L + supplier; approved rate by route, container, unit and date', vi: 'Ghép lô theo mã hoặc vận đơn + nhà cung cấp; chọn giá theo tuyến, container, đơn vị và ngày' } },
  { icon: 'eye', t: { en: 'Evidence and review', vi: 'Căn cứ và xác minh' }, d: { en: 'Both sources side by side; send to pricing or operations with a reason', vi: 'Hai nguồn đặt cạnh nhau; chuyển pricing hoặc vận hành kèm lý do' } },
  { icon: 'export', t: { en: 'Report and export', vi: 'Báo cáo và xuất' }, d: { en: 'CSV with values, sources, verifier and time; later an ERP / AP ledger link', vi: 'CSV có giá trị, nguồn, người xác minh và thời điểm; sau này nối ERP / sổ công nợ' } },
]

const BUILT = ['React', 'TypeScript', 'Vite', 'Rules engine in TypeScript', 'Web Crypto · SHA-256', 'Web Audio', 'Vitest', 'Vercel']
const PLANNED: L[] = [
  { en: 'Email ingestion (IMAP / Gmail API)', vi: 'Nhận email (IMAP / Gmail API)' },
  { en: 'Zalo OA / Messenger webhooks', vi: 'Webhook Zalo OA / Messenger' },
  { en: 'Mobile camera capture', vi: 'Chụp bằng camera điện thoại' },
  { en: 'Document AI, e.g. Azure AI Document Intelligence', vi: 'Document AI, ví dụ Azure AI Document Intelligence' },
  { en: 'Database with audit log', vi: 'Cơ sở dữ liệu kèm nhật ký kiểm toán' },
  { en: 'ERP / TMS connectors', vi: 'Kết nối ERP / TMS' },
]

export default function StackSection() {
  const { lang } = useT()
  const tx = (x: L) => x[lang]
  return (
    <section className="sec" aria-labelledby="stack">
      <div className="wrap">
      <div className="sec-head sec-tight reveal">
        <Badge>{tx({ en: 'Under the hood', vi: 'Bên trong Movago' })}</Badge>
        <h2 className="h2" id="stack">{tx({ en: 'One inbox for every channel', vi: 'Một hộp thư cho mọi kênh' })}</h2>
        <p className="sub lg">{tx({ en: 'Invoices reach a forwarder by email, chat, paper and portals. Movago pulls them into one place before any checking starts, so the same invoice is never checked or paid twice.', vi: 'Hóa đơn đến forwarder qua email, chat, giấy và cổng hãng. Movago gom về một chỗ trước khi kiểm tra, để cùng một hóa đơn không bị kiểm hay chi hai lần.' })}</p>
      </div>

      <div className="flow reveal" role="img" aria-label={tx({ en: 'Five sources flow into the Movago pipeline of five stages', vi: 'Năm nguồn đi vào năm bước xử lý của Movago' })}>
        <ul className="flow-col">
          <li className="flow-title">{tx({ en: 'Sources', vi: 'Nguồn' })}</li>
          {SOURCES.map((s) => (
            <li key={s.t.en} className="flow-item"><span className="ch-icon"><Icon name={s.icon} /></span><div><b>{tx(s.t)}</b><span>{tx(s.d)}</span></div></li>
          ))}
        </ul>
        <div className="flow-arrow" aria-hidden="true"><i /><i /><i /></div>
        <ol className="flow-col pipe">
          <li className="flow-title">Movago</li>
          {PIPE.map((s, i) => (
            <li key={s.t.en} className="flow-item"><span className="ch-icon light"><Icon name={s.icon} /></span><div><b>{String(i + 1).padStart(2, '0')} · {tx(s.t)}</b><span>{tx(s.d)}</span></div></li>
          ))}
        </ol>
      </div>

      <div className="stack-lists">
        <div>
          <h3>{tx({ en: 'In this demo', vi: 'Đã dựng trong demo' })}</h3>
          <ul className="chips">{BUILT.map((b) => <li key={b} className="chip">{b}</li>)}</ul>
        </div>
        <div>
          <h3>{tx({ en: 'Planned for the pilot', vi: 'Dự kiến cho pilot' })}</h3>
          <ul className="chips">{PLANNED.map((b) => <li key={b.en} className="chip planned">{tx(b)}</li>)}</ul>
        </div>
      </div>
      <p className="muted mini" style={{ marginTop: 16 }}>{tx({ en: 'In the demo, the channels, phone capture and AI reading are simulated; matching, rate rules, fingerprinting and export run live in the browser.', vi: 'Trong demo, các kênh, chụp điện thoại và AI đọc chứng từ là mô phỏng; ghép lô, quy tắc giá, dấu vân tay và xuất báo cáo chạy thật trên trình duyệt.' })}</p>
      </div>
    </section>
  )
}
