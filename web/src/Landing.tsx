import Avatar from './Avatar'
import StackSection from './StackSection'
import { useT } from './i18n'
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

export default function Landing() {
  const { t, money, signed, lang } = useT()
  return (
    <>
      <section className="hero-band">
        <div className="wrap hero">
          <div className="hero-copy">
            <a className="banner" href="#/demo?story=1">
              <Ico name="arrow" tone="light" />
              {t('bannerText')}
            </a>
            <h1 className="display">{t('heroTitle')}</h1>
            <p className="lead">{t('heroBody')}</p>
            <ul className="feats">
              {(['feat1', 'feat2', 'feat3', 'feat4'] as const).map((k) => (
                <li key={k}><Ico name="check" tone="light" />{t(k)}</li>
              ))}
            </ul>
            <div className="cta-row">
              <a className="btn on-dark" href="#/demo?story=1">{t('ctaStory')}</a>
              <a className="btn ghost-dark" href="#/demo">{t('ctaTry')}</a>
            </div>
            <p className="team-line">{t('teamLine')}</p>
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
        </div>
      </section>

      <div className="wrap">
        <section className="section split">
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

        <section className="section split" aria-labelledby="cast">
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

        <section className="section split">
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

        <section className="section">
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
