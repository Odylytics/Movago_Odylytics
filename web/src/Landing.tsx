import { useT } from './i18n'

export default function Landing() {
  const { t, money, signed } = useT()
  return (
    <>
      <div className="wrap">
        <section className="hero">
          <div>
            <p className="eyebrow">{t('slogan')}</p>
            <h1 className="display">{t('heroTitle')}</h1>
            <p className="lead">{t('heroBody')}</p>
            <div className="cta-row">
              <a className="btn" href="#/demo?story=1">{t('ctaStory')}</a>
              <a className="btn ghost" href="#/demo">{t('ctaTry')}</a>
            </div>
            <p className="team-line">{t('teamLine')}</p>
          </div>

          <div className="mock" aria-label="INV-095 preview">
            <div className="mock-head">
              <span>INV-095 · SHP-001 · RATE-V3</span>
              <span className="chip sim">{t('simulated')}</span>
            </div>
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
            <p className="muted mini" style={{ marginTop: 10 }}>INV-095 p.1 · DOC ↔ RATE-V3 {t('line')} 12</p>
          </div>
        </section>

        <section className="section">
          <h2>{t('problemTitle')}</h2>
          <p className="sub">{t('problemBody')}</p>
          <div className="grid3">
            <div className="card"><span className="num">01</span><h3>{t('src1Title')}</h3><p>{t('src1Body')}</p></div>
            <div className="card"><span className="num">02</span><h3>{t('src2Title')}</h3><p>{t('src2Body')}</p></div>
            <div className="card"><span className="num">03</span><h3>{t('src3Title')}</h3><p>{t('src3Body')}</p></div>
          </div>
        </section>

        <section className="section" id="how">
          <h2>{t('howTitle')}</h2>
          <ol className="steps">
            {(['1', '2', '3', '4', '5', '6'] as const).map((n) => (
              <li key={n}><strong>{t(`step${n}`)}</strong><span>{t(`step${n}b`)}</span></li>
            ))}
          </ol>
          <p className="note">{t('howNote')}</p>
        </section>

        <section className="section">
          <h2>{t('outcomesTitle')}</h2>
          <div className="grid3">
            <div className="card"><span className="status matched">{t('st_matched')}</span><p style={{ marginTop: 12 }}>{t('outMatched')}</p></div>
            <div className="card"><span className="status discrepancy">{t('st_discrepancy')}</span><p style={{ marginTop: 12 }}>{t('outDiscrepancy')}</p></div>
            <div className="card"><span className="status missing_basis">{t('st_missing_basis')}</span><p style={{ marginTop: 12 }}>{t('outMissing')}</p></div>
          </div>
        </section>

        <section className="section">
          <div className="panel-dark">
            <div>
              <h2>{t('humanTitle')}</h2>
              <p style={{ marginTop: 14 }}>{t('humanBody')}</p>
            </div>
            <div className="cta-row" style={{ marginTop: 0 }}>
              <a className="btn" href="#/demo?story=1">{t('ctaStory')}</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>{t('footer')}</span>
          <span className="muted">{t('disclaimer')}</span>
        </footer>
      </div>
    </>
  )
}
