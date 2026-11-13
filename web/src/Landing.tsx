import { useEffect, useRef, useState, type CSSProperties, type ComponentType } from 'react'
import { ArtDecide, ArtMatch, ArtReceive, ArtSources } from './art'
import { INTRO_DONE, introRunning } from './Intro'
import { Icon, type IconName } from './icons'
import { useT } from './i18n'
import StackSection from './StackSection'
import { PERSONAS, type PersonaId } from './story'
import { ArrowBtn, Badge, FitText, Glyph, useReveal } from './ui'

// Landing in the Movora layout (DESIGN.md): hero wordmark, channel strip, problem, numbered outcomes, control + KPIs,
// the Lime process band, stack, story cards, FAQ. Every figure here is simulated and labelled as such.
type L = { en: string; vi: string }
const img = (f: string) => `${import.meta.env.BASE_URL}img/${f}`
const avatar = (id: PersonaId) => `${import.meta.env.BASE_URL}avatars/${id}.svg`

const C = {
  slogan: { en: 'Move smarter. Go safer.', vi: 'Move smarter. Go safer.' },
  team: { en: 'Team Odylytics · KTC Ideathon 2026', vi: 'Đội Odylytics · KTC Ideathon 2026' },
  channels: { en: 'Where freight invoices arrive', vi: 'Nơi hóa đơn cước gửi đến' },
  problem: { en: 'The problem', vi: 'Vấn đề' },
  threeSources: { en: 'Three sources', vi: 'Ba nguồn' },
  wrong: { en: 'What goes wrong', vi: 'Sai ở đâu' },
  wrongBody: {
    en: 'A wrong container size, an outdated rate version or a missing extra approval can each become an overpayment that nobody sees before it is paid.',
    vi: 'Sai cỡ container, dùng phiên bản giá cũ hay thiếu phê duyệt bổ sung đều có thể thành khoản chi sai mà không ai thấy trước khi trả tiền.',
  },
  outcomes: { en: 'Outcomes', vi: 'Kết quả' },
  control: { en: 'Control', vi: 'Kiểm soát' },
  controlTitle: { en: 'Control before payment', vi: 'Kiểm soát trước khi chi' },
  feat5: { en: 'Exports every check to CSV', vi: 'Xuất mọi lần kiểm tra ra CSV' },
  kpiNote: {
    en: 'Simulated dashboard. The figures show what the pilot report will track, not results.',
    vi: 'Bảng điều khiển giả lập. Các số cho thấy báo cáo pilot sẽ theo dõi gì, không phải kết quả.',
  },
  howTitle: { en: 'One inbox. One check.', vi: 'Một hộp thư. Một lần kiểm tra.' },
  storyBadge: { en: 'The story', vi: 'Câu chuyện' },
  fictional1: { en: 'Fictional character', vi: 'Nhân vật giả tưởng' },
  faqBadge: { en: 'FAQ', vi: 'Hỏi đáp' },
  faqTitle: { en: 'Fair questions', vi: 'Câu hỏi thường gặp' },
  faqMore: { en: 'Still have questions?', vi: 'Còn câu hỏi?' },
  faqMoreSub: { en: 'Market, model, ROI and every source in one place.', vi: 'Thị trường, mô hình, ROI và mọi nguồn ở một chỗ.' },
}

const CHANNELS: { icon: IconName; t: L }[] = [
  { icon: 'mail', t: { en: 'Email', vi: 'Email' } },
  { icon: 'chat', t: { en: 'Zalo · Messenger', vi: 'Zalo · Messenger' } },
  { icon: 'camera', t: { en: 'Phone camera', vi: 'Camera điện thoại' } },
  { icon: 'globe', t: { en: 'Carrier portals', vi: 'Cổng hãng tàu' } },
  { icon: 'table', t: { en: 'TMS · ERP export', vi: 'File xuất TMS · ERP' } },
]

const STEPS: { art: ComponentType; t: L; d: L }[] = [
  {
    art: ArtReceive,
    t: { en: 'Receive and fingerprint', vi: 'Tiếp nhận và lấy vân tay' },
    d: { en: 'Email, Zalo, paper scans and carrier portals land in one inbox. A SHA-256 fingerprint catches the same PDF sent twice, even under a new name.', vi: 'Email, Zalo, bản quét giấy và cổng hãng tàu về chung một hộp thư. Dấu vân tay SHA-256 nhận ra cùng một PDF gửi hai lần, kể cả khi đã đổi tên.' },
  },
  {
    art: ArtMatch,
    t: { en: 'Read and match', vi: 'Đọc và ghép lô' },
    d: { en: 'Each fee line is read with its place on the page, matched to the shipment and priced from the approved rate by route, container, unit and date.', vi: 'Từng dòng phí được đọc kèm vị trí trên trang, ghép với đúng lô và tính theo giá đã duyệt theo tuyến, container, đơn vị và ngày.' },
  },
  {
    art: ArtDecide,
    t: { en: 'Evidence and decision', vi: 'Căn cứ và quyết định' },
    d: { en: 'Both sources sit side by side. Pricing confirms, the chief accountant decides, and the result exports to CSV.', vi: 'Hai nguồn đặt cạnh nhau. Pricing xác nhận, kế toán trưởng quyết định, kết quả xuất ra CSV.' },
  },
]

const FAQ: { q: L; a: L }[] = [
  {
    q: { en: 'Is any of this real data?', vi: 'Có dữ liệu nào là thật không?' },
    a: { en: 'No. Every invoice, shipment, company and figure on this site is simulated. Time savings, error rates and willingness to pay will be measured in a pilot.', vi: 'Không. Mọi hóa đơn, lô hàng, công ty và số liệu trên trang này đều là giả lập. Thời gian tiết kiệm, tỷ lệ sai lệch và mức sẵn sàng trả phí sẽ được đo trong pilot.' },
  },
  {
    q: { en: 'Does Movago approve or make payments?', vi: 'Movago có duyệt chi hay thanh toán không?' },
    a: { en: 'No. Movago outputs an evidence-backed check result. Payment approval stays with the people who hold that authority in your company.', vi: 'Không. Đầu ra của Movago là kết quả kiểm tra có bằng chứng. Phê duyệt chi thuộc người có thẩm quyền trong doanh nghiệp.' },
  },
  {
    q: { en: 'What runs live in this demo?', vi: 'Phần nào trong demo chạy thật?' },
    a: { en: 'Shipment matching, rate selection, recalculation, the resend check (SHA-256), verification and CSV export run in your browser. Email and Zalo intake, the phone scan and AI reading are simulated.', vi: 'Ghép lô, chọn giá, tính lại, kiểm tra tệp gửi lại (SHA-256), xác minh và xuất CSV chạy thật trên trình duyệt. Nhận chứng từ qua email, Zalo, quét bằng điện thoại và bước AI đọc là mô phỏng.' },
  },
  {
    q: { en: 'What if the AI misreads an invoice?', vi: 'Nếu AI đọc sai hóa đơn thì sao?' },
    a: { en: 'Each field keeps its place on the page and a confidence score. Low-confidence fields, and lines that match several rates, go to a person instead of being guessed.', vi: 'Mỗi trường giữ vị trí trên trang và độ tin cậy. Trường có độ tin cậy thấp, và dòng khớp nhiều mức giá, được chuyển cho người kiểm tra thay vì đoán.' },
  },
  {
    q: { en: 'Why not just use the TMS or ERP?', vi: 'Sao không dùng luôn TMS hay ERP?' },
    a: { en: 'Movago checks against the approved rate with both sources on screen, then hands over a CSV that accounts payable can bring into the tools it already uses. Direct ERP links come after the pilot.', vi: 'Movago kiểm theo giá đã duyệt với hai nguồn trên màn hình, rồi bàn giao file CSV để kế toán công nợ đưa vào công cụ đang dùng. Kết nối ERP trực tiếp làm sau pilot.' },
  },
]

export default function Landing() {
  const { t, money, signed, plain, lang } = useT()
  const tx = (x: L) => x[lang]
  const [open, setOpen] = useState(1)
  useReveal(lang)

  // Movora's hero entrance runs on mount; on the first home load it waits until the MOVE · AI · GO intro lifts away.
  const [go, setGo] = useState(() => !introRunning())
  useEffect(() => {
    if (go) return
    const start = () => setGo(true)
    window.addEventListener(INTRO_DONE, start)
    const fallback = window.setTimeout(start, 5000)
    return () => { window.removeEventListener(INTRO_DONE, start); window.clearTimeout(fallback) }
  }, [go])

  // Movora lowers the container a further 100 px while the hero scrolls away.
  const crateRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = crateRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const hero = el.parentElement
        const h = hero ? hero.offsetHeight : window.innerHeight
        el.style.translate = `0 ${Math.round(Math.min(window.scrollY / h, 1) * 100)}px`
      })
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf) }
  }, [])

  const compact = (n: number) => (lang === 'en' ? `${(n / 1e6).toLocaleString('en-US', { maximumFractionDigits: 1 })}M ₫` : `${(n / 1e6).toLocaleString('vi-VN', { maximumFractionDigits: 1 })} tr đ`)

  const OUTCOMES = [
    {
      key: 'matched', status: 'matched', title: t('st_matched'), body: t('outMatched'),
      pills: lang === 'en' ? ['(01) Quantity × approved unit price', '(02) Same currency, before tax', '(03) Within the checked scope'] : ['(01) Số lượng × đơn giá đã duyệt', '(02) Cùng tiền tệ, trước thuế', '(03) Trong phạm vi kiểm tra'],
      evi: [[`INV-095 · ${t('page')} 1 · OCEAN`, money(8_000_000)], [`RATE-V3 · ${t('line')} 7`, money(8_000_000)]], out: money(0),
    },
    {
      key: 'discrepancy', status: 'discrepancy', title: t('st_discrepancy'), body: t('outDiscrepancy'),
      pills: lang === 'en' ? ['(01) The fee line', '(02) The amount difference', '(03) Evidence from both sides', '(04) Sent to pricing with a reason'] : ['(01) Dòng phí', '(02) Số tiền chênh', '(03) Căn cứ hai phía', '(04) Chuyển pricing kèm lý do'],
      evi: [[`INV-095 · ${t('page')} 1 · DOC`, money(1_300_000)], [`RATE-V3 · ${t('line')} 12`, money(500_000)]], out: signed(800_000),
    },
    {
      key: 'missing_basis', status: 'missing_basis', title: t('st_missing_basis'), body: t('outMissing'),
      pills: lang === 'en' ? ['(01) No approved rate applies', '(02) Expected amount left empty', '(03) Pricing adds a rate or approval'] : ['(01) Chưa có giá đã duyệt phù hợp', '(02) Mức kỳ vọng để trống', '(03) Pricing bổ sung giá hoặc phê duyệt'],
      evi: [[`INV-095 · ${t('page')} 1 · DOC`, money(1_300_000)], [lang === 'en' ? 'Rate card · no DOC rate' : 'Bảng giá · không có giá DOC', '—']], out: '—',
    },
  ] as const

  const ha = PERSONAS.find((p) => p.id === 'ha')!
  const khoa = PERSONAS.find((p) => p.id === 'khoa')!
  const STORIES = [
    {
      p: ha,
      quote: lang === 'en'
        ? `“DOC was billed at ${money(1_300_000)} against ${money(500_000)} on the approved rate card. I sent pricing both lines before anyone paid.”`
        : `“Phí DOC bị tính ${money(1_300_000)} trong khi bảng giá duyệt ${money(500_000)}. Tôi gửi pricing cả hai dòng trước khi ai đó chi tiền.”`,
      stats: [{ l: lang === 'en' ? 'Flagged before payment' : 'Phát hiện trước khi chi', v: signed(800_000) }, { l: lang === 'en' ? 'Sources on one screen' : 'Nguồn trên một màn hình', v: '3' }],
    },
    {
      p: khoa,
      quote: lang === 'en'
        ? '“The carrier sent a quotation. Movago read nine rate lines, I approved each one, and that rate card now checks the invoices.”'
        : '“Hãng gửi báo giá. Movago đọc chín dòng giá, tôi duyệt từng dòng, và bảng giá đó giờ dùng để kiểm hóa đơn.”',
      stats: [{ l: lang === 'en' ? 'Rate lines approved' : 'Dòng giá đã duyệt', v: '9/9' }, { l: lang === 'en' ? 'Rate card' : 'Bảng giá', v: 'RATE-V3' }],
    },
  ]

  return (
    <>
      {/* ===== hero: Movora's entrance — wordmark drops in, the container is lowered on a spring, the copy rises ===== */}
      <section className={`hero2 ${go ? 'go' : ''}`} aria-labelledby="hero-title">
        <div className="wrap hero2-top"><div className="a-word"><FitText text="MOVAGO" className="wordmark" /></div></div>
        <div className="crate" ref={crateRef} aria-hidden="true">
          <div className="crate-drop">
            <div className="crate-sway">
              {/* white box on the dark theme, navy box on the light theme; only the visible one is fetched */}
              <img className="crate-img crate-white" src={img('hero-container-white.webp')} alt="" width={1254} height={1254} loading="lazy" decoding="async" />
              <img className="crate-img crate-navy" src={img('hero-container-navy.webp')} alt="" width={1254} height={1254} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="hero2-foot">
            <div className="hero2-copy">
              <div className="a-up"><Badge>{tx(C.slogan)}</Badge></div>
              <h1 className="h3 a-up" id="hero-title" style={{ '--ad': '0.08s' } as CSSProperties}>{t('heroTitle')}</h1>
              <div className="hero2-ctas a-up" style={{ '--ad': '0.16s' } as CSSProperties}>
                <ArrowBtn href="#/demo?choose=1">{t('introDemo')}</ArrowBtn>
              </div>
              <p className="hero2-meta a-up" style={{ '--ad': '0.24s' } as CSSProperties}>{t('poweredBy')} <b>Odylytics</b> · {tx(C.team)}</p>
            </div>
            <div className="a-up" style={{ '--ad': '1.2s' } as CSSProperties}>
              <div className="hero-card edge" role="group" aria-label={`INV-095 · ${t('results')}`}>
                <div className="hc-bar"><b>INV-095 · {t('results')}</b><span className="chip sim">{t('simulated')}</span></div>
                <div className="hc-rows">
                  <div className="hc-row"><span>Ocean freight</span><span className="muted">{money(8_000_000)}</span><span className="status matched">{t('st_matched')}</span></div>
                  <div className="hc-row"><span>DOC</span><span className="muted">{money(1_300_000)}</span><span className="status discrepancy">{t('st_discrepancy')}</span></div>
                </div>
                <div className="hc-diff"><b>{signed(800_000)}</b><span>INV-095 · {t('page')} 1 · DOC<br />RATE-V3 · {t('line')} 12</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== channels (Movora's logo strip) ===== */}
      <section className="wrap" aria-label={tx(C.channels)}>
        <ul className="strip" style={{ listStyle: 'none', margin: 0 }}>
          {CHANNELS.map((c) => <li key={c.t.en} className="strip-cell edge"><Icon name={c.icon} size={20} />{tx(c.t)}</li>)}
        </ul>
      </section>

      {/* ===== problem ===== */}
      <section className="sec" aria-labelledby="problem-title">
        <div className="wrap">
          <div className="about-head reveal">
            <Badge>{tx(C.problem)}</Badge>
            <h2 className="statement" id="problem-title">{t('problemTitle')}</h2>
          </div>
          <div className="about-grid">
            <article className="photo-card edge reveal">
              <img src={img('port-aerial.jpg')} alt="" width={1800} height={1125} loading="lazy" />
              <h3 className="h3">{tx(C.threeSources)}</h3>
              <ol className="plist">
                {([['src1Title', 'src1Body'], ['src2Title', 'src2Body'], ['src3Title', 'src3Body']] as const).map(([h, b], i) => (
                  <li key={h}><b>(0{i + 1}) {t(h)}</b><span>{t(b)}</span></li>
                ))}
              </ol>
            </article>
            <article className="mid-card reveal" style={{ '--rd': '0.08s' } as CSSProperties}>
              <div className="photo"><img src={img('office-night.jpg')} alt="" width={1200} height={675} loading="lazy" /></div>
              <p className="pretty">{t('problemBody')}</p>
              <ArrowBtn href="#/demo?story=1">{t('ctaStory')}</ArrowBtn>
            </article>
            <article className="art-card edge reveal" style={{ '--rd': '0.16s' } as CSSProperties}>
              <h3 className="h3">{tx(C.wrong)}</h3>
              <div className="art"><ArtSources /></div>
              <p className="pretty">{tx(C.wrongBody)}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== outcomes: numbered rows ===== */}
      <section className="sec" aria-labelledby="outcomes-title">
        <div className="wrap">
          <div className="sec-head reveal">
            <Badge>{tx(C.outcomes)}</Badge>
            <h2 className="h2" id="outcomes-title">{t('outcomesTitle')}</h2>
            <p className="sub lg">{t('outcomesSub')}</p>
          </div>
          <div className="nrows">
            {OUTCOMES.map((o, i) => {
              const isOpen = open === i
              return (
                <article key={o.key} className="nrow edge reveal" data-open={isOpen}>
                  <button className="nrow-head" aria-expanded={isOpen} aria-controls={`out-${o.key}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="nrow-num">0{i + 1}</span>
                    <span className="nrow-title">{o.title}</span>
                    <span className="nrow-plus" aria-hidden="true"><Glyph name="plus" /></span>
                  </button>
                  {isOpen && (
                    <div className="nrow-body" id={`out-${o.key}`}>
                      <div className="evi">
                        {o.evi.map(([k, v]) => <div key={k} className="evi-row"><span className="k">{k}</span><b>{v}</b></div>)}
                        <div className="evi-out"><span className={`status ${o.status}`}>{o.title}</span><b>{o.out}</b></div>
                      </div>
                      <div className="nrow-copy">
                        <p className="pretty">{o.body}</p>
                        <ul className="pills">{o.pills.map((p) => <li key={p}>{p}</li>)}</ul>
                        <div><ArrowBtn href="#/demo">{t('ctaTry')}</ArrowBtn></div>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== control: list + product + KPIs ===== */}
      <section className="sec" aria-labelledby="control-title">
        <div className="wrap">
          <div className="sec-head reveal">
            <Badge>{tx(C.control)}</Badge>
            <h2 className="h2" id="control-title">{tx(C.controlTitle)}</h2>
          </div>
          <div className="ctl">
            <ul className="ctl-list reveal">
              {(['feat1', 'feat2', 'feat3', 'feat4'] as const).map((k) => <li key={k}>{t(k)}</li>)}
              <li>{tx(C.feat5)}</li>
            </ul>
            <div className="device edge reveal" aria-label="Movago workspace preview, INV-095">
              <div className="device-bar"><span>INV-095 · SHP-001 · RATE-V3</span><span className="chip sim">{t('simulated')}</span></div>
              <div className="device-body">
                <div className="table-scroll">
                  <table>
                    <thead><tr><th>{t('colFee')}</th><th className="n">{t('colInvoiced')}</th><th className="n">{t('colExpected')}</th><th>{t('colStatus')}</th></tr></thead>
                    <tbody>
                      <tr><td>Ocean freight</td><td className="n">{money(8_000_000)}</td><td className="n">{money(8_000_000)}</td><td><span className="status matched">{t('st_matched')}</span></td></tr>
                      <tr className="hl"><td>DOC</td><td className="n">{money(1_300_000)}</td><td className="n">{money(500_000)}</td><td><span className="status discrepancy">{signed(800_000)}</span></td></tr>
                      <tr className="total"><td>{t('total')}</td><td className="n">{money(9_300_000)}</td><td className="n">{money(8_500_000)}</td><td><span className="status sent">{t('needsReview')}</span></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="ev-mini">
                  <div><span className="muted mono">INV-095 · {t('page')} 1 · DOC</span><b>{money(1_300_000)}</b></div>
                  <div><span className="muted mono">RATE-V3 · {t('line')} 12</span><b>{money(500_000)}</b></div>
                </div>
              </div>
            </div>
          </div>
          <div className="kpis">
            {[
              { l: t('kpiAudited'), v: <>{plain(128)}</> },
              { l: t('kpiFlagged'), v: <>{compact(14_600_000)}</> },
              { l: t('kpiMatched'), v: <>{plain(116)} <small>91%</small></> },
              { l: t('kpiReview'), v: <>{plain(12)} <small>9%</small></> },
            ].map((k, i) => (
              <div key={k.l} className="kpi edge reveal" style={{ '--rd': `${i * 0.08}s` } as CSSProperties}>
                <span className="kpi-label">{k.l}</span>
                <span className="kpi-value"><span className="mk">{k.v}</span></span>
                <span className="kpi-tag">{t('simulated')}</span>
              </div>
            ))}
          </div>
          <p className="kpi-note">{tx(C.kpiNote)}</p>
        </div>
      </section>

      {/* ===== the Lime band: how it works ===== */}
      <section className="sec band" id="how" aria-labelledby="how-title">
        <div className="wrap">
          <div className="sec-head center reveal">
            <Badge>{t('navHow')}</Badge>
            <h2 className="h2" id="how-title">{tx(C.howTitle)}</h2>
          </div>
          <div className="pcards">
            {STEPS.map((s, i) => (
              <article key={s.t.en} className="pcard edge reveal">
                <div className="pcard-art"><s.art /></div>
                <div className="pcard-copy">
                  <span className="pcard-num">0{i + 1}</span>
                  <h3 className="h3">{tx(s.t)}</h3>
                  <p className="pretty">{tx(s.d)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StackSection />

      {/* ===== story cards ===== */}
      <section className="sec" aria-labelledby="cast">
        <div className="wrap">
          <div className="sec-head reveal">
            <Badge>{tx(C.storyBadge)}</Badge>
            <h2 className="h2" id="cast">{t('castTitle')}</h2>
            <p className="sub lg">{t('castSub')}</p>
          </div>
          <div className="tcards">
            {STORIES.map((s) => (
              <article key={s.p.id} className="tcard edge reveal">
                <div className="tcard-person">
                  <img src={avatar(s.p.id)} alt="" width={245} height={245} loading="lazy" />
                  <div>
                    <div className="tcard-name">{s.p.name}</div>
                    <div className="tcard-role">{s.p.role[lang]}</div>
                    <div className="tcard-role">{tx(C.fictional1)}</div>
                  </div>
                </div>
                <div className="tcard-side">
                  <blockquote className="tcard-quote" style={{ margin: 0 }}>{s.quote}</blockquote>
                  <div className="tcard-stats">
                    {s.stats.map((k) => (
                      <div key={k.l} className="kpi edge">
                        <span className="kpi-label">{k.l}</span>
                        <span className="kpi-value"><span className="mk">{k.v}</span></span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <ul className="cast-strip" style={{ listStyle: 'none', padding: 0 }}>
            {PERSONAS.map((p) => (
              <li key={p.id} className="cast-cell edge reveal">
                <img src={avatar(p.id)} alt="" width={56} height={56} loading="lazy" />
                <b>{p.name}</b>
                <span>{p.role[lang]}</span>
              </li>
            ))}
          </ul>
          <div className="cast-foot">
            <p>{t('avatarCredit')}</p>
            <ArrowBtn href="#/demo?story=1">{t('ctaStory')}</ArrowBtn>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sec" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="sec-head center reveal sec-tight">
            <Badge>{tx(C.faqBadge)}</Badge>
            <h2 className="h2" id="faq-title">{tx(C.faqTitle)}</h2>
          </div>
          <div className="faq">
            {FAQ.map((f, i) => (
              <details key={f.q.en} className="edge reveal" open={i === 0}>
                <summary>{tx(f.q)}<span className="q-ico" aria-hidden="true"><Glyph name="plus" /></span></summary>
                <p className="ans pretty">{tx(f.a)}</p>
              </details>
            ))}
            <div className="faq-cta reveal">
              <div><b>{tx(C.faqMore)}</b><span>{tx(C.faqMoreSub)}</span></div>
              <ArrowBtn href="#/business">{t('bizCta')}</ArrowBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
