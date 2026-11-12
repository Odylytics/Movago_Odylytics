import { useEffect, useState } from 'react'
import { Mark } from './App'
import Avatar from './Avatar'
import StackSection from './StackSection'
import { useT } from './i18n'
import { unlock } from './sound'
import { PERSONAS } from './story'

const icons = {
  check: <path d="M3 8.5l3 3 7-7" />,
  doc: <><path d="M4 1.5h5l3 3v10H4z" /><path d="M8.5 1.5v3.5H12M6 8.5h4M6 11h4" /></>,
  box: <><path d="M1.5 5L8 2l6.5 3v6.5L8 14.5 1.5 11.5z" /><path d="M1.5 5L8 8l6.5-3M8 8v6.5" /></>,
  tag: <><path d="M1.5 8.5V2h6.5l6.5 6.5-6.5 6z" /><circle cx="5" cy="5" r="1" /></>,
  arrow: <path d="M3 8h10M9 4l4 4-4 4" />,
}
function Ico({ name, tone }: { name: keyof typeof icons; tone: 'light' | 'dark' }) {
  return <span className={`ico ${tone}`} aria-hidden="true"><svg viewBox="0 0 16 16">{icons[name]}</svg></span>
}

// Partner logos for the Trusted by strip: drop files in web/public/partners/ and list them here.
// While the list is empty the strip shows labelled placeholders, so no partner is implied.
const PARTNERS: { name: string; src: string }[] = []

export default function Landing() {
  const { t, money, signed, plain, lang } = useT()
  const [choose, setChoose] = useState(false)

  // Everything below the first screen fades in as it scrolls into view; the first screen stays clean.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (typeof IntersectionObserver === 'undefined') { els.forEach((el) => el.classList.add('in')); return }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <section className="home">
        <div className="home-brand"><Mark className="home-mark" /><span className="home-word">Movago</span></div>
        <p className="home-slogan">Move smarter. Go safer.</p>
        <div className="home-ctas">
          {!choose ? (
            <button className="btn on-dark big" onClick={() => setChoose(true)}>{t('introDemo')}</button>
          ) : (
            <div className="demo-choices" role="group" aria-label={t('introDemo')}>
              <a className="demo-choice primary" href="#/demo?story=1" autoFocus onClick={() => {
                // the click is the user gesture that lets the story start straight away, with sound
                unlock()
                try { sessionStorage.setItem('movago.autostart', '1') } catch { /* private mode */ }
              }}>
                <b>{t('choiceAuto')}</b><span>{t('choiceAutoSub')}</span>
              </a>
              <a className="demo-choice" href="#/demo">
                <b>{t('choiceTry')}</b><span>{t('choiceTrySub')}</span>
              </a>
            </div>
          )}
        </div>
        <p className="powered">{t('poweredBy')} <b>Odylytics</b></p>
        <div className="trust">
          <p className="trust-title">{t('trustTitle')}</p>
          <ul className="trust-logos">
            {PARTNERS.length
              ? PARTNERS.map((p) => <li key={p.name}><img src={p.src} alt={p.name} /></li>)
              : [1, 2, 3, 4, 5].map((i) => <li key={i} className="slot">{t('partnerSlot')}</li>)}
          </ul>
        </div>
        <a className="scroll-more" href="#/#more" onClick={(e) => { e.preventDefault(); document.getElementById('more')?.scrollIntoView({ behavior: 'smooth' }) }}>
          {t('scrollMore')} <span aria-hidden="true">↓</span>
        </a>
      </section>

      <div className="wrap" id="more">
        <section className="section hero reveal">
          <div className="hero-copy">
            <h1 className="display">{t('heroTitle')}</h1>
            <p className="lead">{t('heroLead')}</p>
            <p className="team-line">{t('teamLine')}</p>
          </div>

          <div className="hero-dash" aria-label={t('dashTitle')}>
            <div className="dash-head">
              <b>{t('dashTitle')}</b>
              <span className="chip sim">{t('simulated')}</span>
            </div>
            <div className="dash-kpis">
              <div><b>{plain(128)}</b><span>{t('kpiAudited')}</span></div>
              <div><b>{money(14_600_000)}</b><span>{t('kpiFlagged')}</span></div>
              <div><b>{plain(116)} <small>(91%)</small></b><span>{t('kpiMatched')}</span></div>
              <div><b>{plain(12)} <small>(9%)</small></b><span>{t('kpiReview')}</span></div>
            </div>
            <div className="dash-chart">
              <span className="muted">{t('kpiChart')}</span>
              {/* cumulative flagged amount per week, million VND — simulated, same total as the KPI above */}
              <svg viewBox="0 0 300 110" role="img" aria-label={t('kpiChart')}>
                <path d="M0 100 L0 92 L50 84 L100 70 L150 62 L200 44 L250 30 L300 10 L300 100 Z" fill="rgba(40,120,255,0.16)" />
                <path d="M0 92 L50 84 L100 70 L150 62 L200 44 L250 30 L300 10" fill="none" stroke="#2878FF" strokeWidth="2" />
              </svg>
              <div className="dash-axis">{[1, 2, 3, 4, 5, 6, 7].map((w) => <span key={w}>{lang === 'en' ? 'W' : 'T'}{w}</span>)}</div>
            </div>
          </div>
        </section>
      </div>

      <div className="wrap">
        <section className="section split reveal">
          <div>
            <h2>{t('heroTitleAlt')}</h2>
            <p className="sub">{t('heroBody')}</p>
            <ul className="feats">
              {(['feat1', 'feat2', 'feat3', 'feat4'] as const).map((k) => (
                <li key={k}><Ico name="check" tone="dark" />{t(k)}</li>
              ))}
            </ul>
          </div>
          <div className="device" aria-label="Movago workspace preview, INV-095">
            <div className="device-bar">
              <span>INV-095 · SHP-001 · RATE-V3</span>
              <span className="chip sim">{t('simulated')}</span>
            </div>
            <div className="device-body">
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr><th>{t('colFee')}</th><th className="n">{t('colInvoiced')}</th><th className="n">{t('colExpected')}</th><th>{t('colStatus')}</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Ocean freight</td><td className="n">{money(8_000_000)}</td><td className="n">{money(8_000_000)}</td><td><span className="status matched">{t('st_matched')}</span></td></tr>
                    <tr className="hl"><td>DOC</td><td className="n">{money(1_300_000)}</td><td className="n">{money(500_000)}</td><td><span className="status discrepancy">{signed(800_000)}</span></td></tr>
                    <tr className="total"><td>{t('total')}</td><td className="n">{money(9_300_000)}</td><td className="n">{money(8_500_000)}</td><td><span className="status sent">{t('needsReview')}</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="ev-mini">
                <div><span className="muted">INV-095 · {t('page')} 1 · DOC</span><b>{money(1_300_000)}</b></div>
                <div><span className="muted">RATE-V3 · {t('line')} 12</span><b>{money(500_000)}</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div>
            <h2>{t('problemTitle')}</h2>
            <p className="sub">{t('problemBody')}</p>
          </div>
          <ul className="rows">
            <li><Ico name="doc" tone="dark" /><div><h3>{t('src1Title')}</h3><p>{t('src1Body')}</p></div></li>
            <li><Ico name="box" tone="dark" /><div><h3>{t('src2Title')}</h3><p>{t('src2Body')}</p></div></li>
            <li><Ico name="tag" tone="dark" /><div><h3>{t('src3Title')}</h3><p>{t('src3Body')}</p></div></li>
          </ul>
        </section>

        <section className="section split reveal" aria-labelledby="cast">
          <div>
            <h2 id="cast">{t('castTitle')}</h2>
            <p className="sub">{t('castSub')}</p>
            <div className="cta-row"><a className="btn" href="#/demo?story=1">{t('ctaStory')}</a></div>
            <p className="muted mini" style={{ marginTop: 16 }}>{t('avatarCredit')}</p>
          </div>
          <ul className="rows cast-rows">
            {PERSONAS.map((p) => (
              <li key={p.id}><Avatar p={p} size={48} /><div><h3>{p.name} · {p.role[lang]}</h3><span className="who-org">{p.org[lang]}</span><p>{p.does[lang]}</p></div></li>
            ))}
          </ul>
        </section>

        <StackSection />

        <section className="section split reveal">
          <div>
            <h2>{t('outcomesTitle')}</h2>
            <p className="sub">{t('outcomesSub')}</p>
          </div>
          <ul className="rows">
            <li><div><span className="status matched">{t('st_matched')}</span><p style={{ marginTop: 10 }}>{t('outMatched')}</p></div></li>
            <li><div><span className="status discrepancy">{t('st_discrepancy')}</span><p style={{ marginTop: 10 }}>{t('outDiscrepancy')}</p></div></li>
            <li><div><span className="status missing_basis">{t('st_missing_basis')}</span><p style={{ marginTop: 10 }}>{t('outMissing')}</p></div></li>
          </ul>
        </section>

        <section className="section reveal">
          <div className="panel-dark">
            <div>
              <h2>{t('humanTitle')}</h2>
              <p style={{ marginTop: 16 }}>{t('humanBody')}</p>
            </div>
            <div className="cta-row" style={{ marginTop: 0 }}>
              <a className="btn on-dark" href="#/demo?story=1">{t('ctaStory')}</a>
              <a className="btn ghost-dark" href="#/business">{t('bizCta')}</a>
            </div>
          </div>
        </section>

        <footer className="footer" lang={lang}>
          <span>{t('footer')}</span>
          <span className="muted">{t('disclaimer')}</span>
        </footer>
      </div>
    </>
  )
}
