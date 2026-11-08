import type { CSSProperties, ReactNode } from 'react'
import { Icon, type IconName } from './icons'
import { useT } from './i18n'

// Story scenes shown before the reconciliation: multi-channel intake, phone scan, AI reading the PDF.
// Everything here is simulated and timed with CSS (animation-delay via --d); the sound cues in sound.ts match these times.
type L = { en: string; vi: string }
const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties

export type Scene = 'channels' | 'scan' | 'extract'

export default function Stage({ scene, className = '' }: { scene: Scene; className?: string }) {
  const { lang } = useT()
  const tx = (x: L) => x[lang]
  return (
    <section className={`box stage ${className}`} aria-label={tx({ en: 'Story scene', vi: 'Cảnh minh họa' })}>
      <div className="stage-head">
        <span className="chip sim">{tx({ en: 'Simulated', vi: 'Mô phỏng' })}</span>
        <span className="muted mini">{tx(TITLES[scene])}</span>
      </div>
      {scene === 'channels' && <Channels tx={tx} />}
      {scene === 'scan' && <Scan tx={tx} />}
      {scene === 'extract' && <Extract tx={tx} lang={lang} />}
    </section>
  )
}

const TITLES: Record<Scene, L> = {
  channels: { en: 'Intake · one inbox for every channel', vi: 'Tiếp nhận · một hộp thư cho mọi kênh' },
  scan: { en: 'Mobile capture · paper copy at the port', vi: 'Chụp bằng điện thoại · bản giấy tại cảng' },
  extract: { en: 'Document AI · reading INV-095, page 1', vi: 'Document AI · đọc INV-095, trang 1' },
}

function Channels({ tx }: { tx: (x: L) => string }) {
  const items: { icon: IconName; ch: L; from: string; text: L; file: string; at: number }[] = [
    { icon: 'mail', ch: { en: 'Email', vi: 'Email' }, from: 'billing@supplier-a.example', text: { en: 'Invoice INV-095 · SHP-001', vi: 'Hóa đơn INV-095 · SHP-001' }, file: 'INV-095.pdf', at: 0.6 },
    { icon: 'chat', ch: { en: 'Messenger / Zalo', vi: 'Messenger / Zalo' }, from: 'Hoàng Bảo Vy', text: { en: 'Photo of INV-095 as well', vi: 'Gửi thêm ảnh INV-095' }, file: 'photo_0412.jpg', at: 2.2 },
    { icon: 'camera', ch: { en: 'Phone scan', vi: 'Quét bằng điện thoại' }, from: 'Phạm Quốc Bảo · Cat Lai', text: { en: 'Paper copy from the port', vi: 'Bản giấy nhận tại cảng' }, file: 'scan_INV-095.jpg', at: 3.8 },
  ]
  return (
    <div className="scene-channels">
      <ol className="ch-list">
        {items.map((it) => (
          <li key={it.file} className="ch-item" style={d(it.at)}>
            <span className="ch-icon"><Icon name={it.icon} /></span>
            <div>
              <span className="ch-name">{tx(it.ch)}</span>
              <b>{it.from}</b>
              <span className="muted mini">{tx(it.text)} · {it.file}</span>
            </div>
            <span className="ch-flow" style={d(it.at + 0.5)} aria-hidden="true" />
          </li>
        ))}
      </ol>
      <div className="inbox">
        <div className="inbox-head"><Icon name="inbox" /> {tx({ en: 'Movago inbox', vi: 'Hộp thư Movago' })}</div>
        <ul className="inbox-rows">
          {items.map((it) => (
            <li key={it.file} style={d(it.at + 0.9)}><Icon name={it.icon} /> <span>{it.file}</span><span className="muted mini">Supplier A</span></li>
          ))}
        </ul>
        <div className="inbox-group" style={d(6)}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <b>INV-095 · Supplier A · SHP-001</b>
            <span className="status sent">{tx({ en: '3 copies → 1 invoice', vi: '3 bản → 1 hóa đơn' })}</span>
          </div>
          <div className="row" style={{ gap: 6, marginTop: 8 }}>
            <span className="chip">PDF · {tx({ en: 'source', vi: 'bản gốc' })}</span>
            <span className="chip">{tx({ en: 'Photo', vi: 'Ảnh' })}</span>
            <span className="chip">{tx({ en: 'Scan', vi: 'Bản quét' })}</span>
          </div>
          <p className="muted mini" style={{ marginTop: 8 }}>{tx({ en: 'Grouped by supplier + invoice number. Different files, same invoice: nothing is entered twice.', vi: 'Gộp theo nhà cung cấp + số hóa đơn. Khác tệp nhưng cùng hóa đơn: không nhập hai lần.' })}</p>
        </div>
      </div>
    </div>
  )
}

function Paper({ children, className = '' }: { children?: ReactNode; className?: string }) {
  return (
    <div className={`paper ${className}`}>
      <b>SUPPLIER A</b>
      <span>INVOICE INV-095 · SHP-001</span>
      <i /><i /><i className="short" />
      <span className="paper-line">Ocean freight <em>8,000,000</em></span>
      <span className="paper-line">Documentation fee <em>1,300,000</em></span>
      <span className="paper-line strong">Subtotal <em>9,300,000</em></span>
      {children}
    </div>
  )
}

function Scan({ tx }: { tx: (x: L) => string }) {
  const checks: { t: L; at: number }[] = [
    { t: { en: 'Page edges found', vi: 'Tìm thấy mép trang' }, at: 2 },
    { t: { en: 'Captured, straightened, glare checked', vi: 'Đã chụp, làm thẳng, kiểm tra lóa' }, at: 3.4 },
    { t: { en: 'Uploaded · linked to INV-095', vi: 'Đã tải lên · gắn vào INV-095' }, at: 5.3 },
  ]
  return (
    <div className="scene-scan">
      <div className="phone" aria-hidden="true">
        <div className="phone-notch" />
        <div className="phone-screen">
          <span className="cam-label">{tx({ en: 'Scan invoice', vi: 'Quét hóa đơn' })}</span>
          <Paper className="tilted" />
          <span className="frame" style={d(0.8)}><i /><i /><i /><i /></span>
          <span className="flash" style={d(3)} />
          <div className="upload" style={d(3.8)}>
            <span>{tx({ en: 'Sending to Movago', vi: 'Đang gửi tới Movago' })}</span>
            <span className="upload-bar"><i style={d(3.9)} /></span>
          </div>
          <span className="shutter" />
        </div>
      </div>
      <ol className="scan-checks">
        {checks.map((c) => (
          <li key={c.t.en} style={d(c.at)}><span className="ico dark"><Icon name="check" /></span>{tx(c.t)}</li>
        ))}
        <li className="muted mini" style={d(6)}>{tx({ en: 'In the MVP, invoices arrive as PDF; phone capture is for paper copies and is part of the roadmap.', vi: 'Trong MVP, hóa đơn đến dưới dạng PDF; chụp bằng điện thoại dành cho bản giấy và nằm trong lộ trình.' })}</li>
      </ol>
    </div>
  )
}

function Extract({ tx, lang }: { tx: (x: L) => string; lang: 'en' | 'vi' }) {
  const n = (x: number) => x.toLocaleString(lang === 'en' ? 'en-US' : 'vi-VN')
  const fields: { k: L; v: string; conf: number; ai?: L }[] = [
    { k: { en: 'Invoice no.', vi: 'Số hóa đơn' }, v: 'INV-095', conf: 99 },
    { k: { en: 'Supplier', vi: 'Nhà cung cấp' }, v: 'Supplier A', conf: 98 },
    { k: { en: 'Shipment · B/L', vi: 'Mã lô · vận đơn' }, v: 'SHP-001 · BL-SG-001', conf: 97 },
    { k: { en: 'Currency · tax basis', vi: 'Tiền tệ · cơ sở thuế' }, v: lang === 'en' ? 'VND · pre-tax' : 'VND · trước thuế', conf: 99 },
    { k: { en: 'Line 1 · Ocean freight', vi: 'Dòng 1 · Cước biển' }, v: `OCEAN · ${n(8_000_000)}`, conf: 98 },
    { k: { en: 'Line 2 · Documentation fee', vi: 'Dòng 2 · Phí chứng từ' }, v: `DOC · ${n(1_300_000)}`, conf: 96, ai: { en: 'AI mapped “Documentation fee” → DOC · confirm', vi: 'AI gắn “Documentation fee” → DOC · cần xác nhận' } },
    { k: { en: 'Subtotal', vi: 'Cộng trước thuế' }, v: n(9_300_000), conf: 99 },
    { k: { en: 'VAT 10% · Total', vi: 'VAT 10% · Tổng' }, v: `${n(930_000)} · ${n(10_230_000)}`, conf: 97 },
  ]
  return (
    <div className="scene-extract">
      <div className="doc-wrap" aria-hidden="true">
        <div className="doc">
          <div className="doc-head hitrow" style={d(3)}>
            <b>SUPPLIER A (FICTIONAL CARRIER)</b>
            <span className="wm">SIMULATED</span>
          </div>
          <div className="doc-meta hitrow" style={d(3.55)}>Freight invoice · INV-095 · 06 Nov 2026</div>
          <div className="doc-meta hitrow" style={d(4.1)}>Shipment SHP-001 · B/L BL-SG-001 · VND</div>
          <div className="doc-line hitrow" style={d(5.2)}><span>Ocean freight - 20&apos; DRY · 1 × CONTAINER</span><span>8,000,000</span></div>
          <div className="doc-line hitrow" style={d(5.75)}><span>Documentation fee · 1 × B/L</span><span>1,300,000</span></div>
          <div className="doc-line hitrow" style={d(6.3)}><span>Subtotal · VAT 10% · Total</span><span>9,300,000</span></div>
          <span className="scanline" />
        </div>
      </div>
      <div className="fields">
        <div className="fields-head"><span>{tx({ en: 'Extracted field', vi: 'Trường trích xuất' })}</span><span>{tx({ en: 'Value', vi: 'Giá trị' })}</span><span>{tx({ en: 'Conf.', vi: 'Tin cậy' })}</span></div>
        <ul>
          {fields.map((f, i) => (
            <li key={i} style={d(3 + i * 0.55)}>
              <span className="muted">{tx(f.k)}<span className="where"> · p.1</span></span>
              <b className="typed" style={d(3.1 + i * 0.55)}>{f.v}</b>
              <span className="conf">{f.conf}%</span>
              {f.ai && <span className="ai-note" style={d(3.4 + i * 0.55)}>{tx(f.ai)}</span>}
            </li>
          ))}
        </ul>
        <p className="muted mini">{tx({ en: 'Simulated: values come from invoice-lines.csv and confidence figures are illustrative. A pilot measures real accuracy on Vietnamese–English invoices.', vi: 'Mô phỏng: giá trị lấy từ invoice-lines.csv, độ tin cậy chỉ để minh họa. Pilot sẽ đo độ chính xác thật trên hóa đơn Việt–Anh.' })}</p>
      </div>
    </div>
  )
}
