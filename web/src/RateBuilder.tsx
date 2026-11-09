import { useEffect, useState } from 'react'
import { useT } from './i18n'
import { QUOTE, REVIEW_THRESHOLD, toRateCsv } from './rateQuote'

const SAMPLES = `${import.meta.env.BASE_URL}samples/`
const low = (c: number) => c < REVIEW_THRESHOLD

// Three steps that used to be manual: receive the quotation, extract the rate lines, approve and export the rate card.
export default function RateBuilder() {
  const { t, plain, lang } = useT()
  const [reading, setReading] = useState(false)
  const [extracted, setExtracted] = useState(false)
  const [approved, setApproved] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!reading) return
    const id = window.setTimeout(() => { setReading(false); setExtracted(true) }, 1200)
    return () => window.clearTimeout(id)
  }, [reading])

  const toggle = (line: number) => setApproved((s) => { const n = new Set(s); if (n.has(line)) n.delete(line); else n.add(line); return n })
  const approveConfident = () => setApproved((s) => new Set([...s, ...QUOTE.lines.filter((l) => !low(l.confidence)).map((l) => l.line)]))
  const allApproved = approved.size === QUOTE.lines.length
  const reset = () => { setReading(false); setExtracted(false); setApproved(new Set()) }

  const exportCsv = () => {
    const url = URL.createObjectURL(new Blob([toRateCsv(QUOTE, approved)], { type: 'text/csv;charset=utf-8' }))
    const a = document.createElement('a'); a.href = url; a.download = `${QUOTE.rateCard}-${QUOTE.supplier.replace(' ', '')}.csv`; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="wrap ws">
      <div className="ws-head">
        <div>
          <div className="row" style={{ marginBottom: 8 }}><span className="chip sim">{t('simulated')}</span></div>
          <h1>{t('rbTitle')}</h1>
          <p className="muted" style={{ maxWidth: '44rem', marginTop: 8 }}>{t('rbSub')}</p>
        </div>
        <button className="btn ghost" style={{ alignSelf: 'flex-end' }} onClick={reset}>{t('reset')}</button>
      </div>

      <section className="box" aria-labelledby="rb1">
        <div className="box-head">
          <div>
            <span className="chip">{t('rbStep')} 1</span>
            <h2 id="rb1" style={{ marginTop: 6 }}>{t('rbStep1')}</h2>
          </div>
          <button className="btn" onClick={() => setReading(true)} disabled={reading || extracted}>{reading ? t('rbReading') : t('rbRead')}</button>
        </div>
        <div className="mail">
          <div className="muted mini">{t('rbFrom')} <b>pricing@supplier-a.example</b> · {t('rbTo')} <b>pricing@demo-forwarder.example</b></div>
          <div style={{ fontWeight: 600, margin: '6px 0' }}>{t('rbSubject')}</div>
          <a className="ref" href={SAMPLES + QUOTE.file} target="_blank" rel="noreferrer">{QUOTE.file}</a>
          <span className="muted mini"> · {QUOTE.quoteNo} · {QUOTE.origin} → {QUOTE.destination} · {QUOTE.validFrom} → {QUOTE.validTo}</span>
        </div>
      </section>

      <section className="box" style={{ marginTop: 16 }} aria-labelledby="rb2" aria-live="polite">
        <div className="box-head">
          <div>
            <span className="chip">{t('rbStep')} 2</span>
            <h2 id="rb2" style={{ marginTop: 6 }}>{t('rbStep2')}</h2>
            <p className="muted mini">{t('rbSimNote')}</p>
          </div>
          {extracted && <button className="btn ghost" onClick={approveConfident}>{t('rbApproveConfident')}</button>}
        </div>
        {!extracted ? (
          <p className="muted">{t('rbNotRead')}</p>
        ) : (
          <div className="table-scroll">
            <table>
              <thead>
                <tr><th>{t('rbColLine')}</th><th>{t('rbColWritten')}</th><th>{t('rbColCode')}</th><th>{t('rbColEquip')}</th><th className="n">{t('rbColPrice')}</th><th className="n">{t('rbColConf')}</th><th>{t('rbColApprove')}</th></tr>
              </thead>
              <tbody>
                {QUOTE.lines.map((l) => (
                  <tr key={l.line} className={approved.has(l.line) ? 'selected' : ''}>
                    <td className="mini">{t('rbPage')} 1 · {t('rbLine')} {l.line}</td>
                    <td>
                      {l.asWritten}
                      {l.note && <div className="mini muted" style={{ maxWidth: 280 }}>{l.note[lang]}</div>}
                    </td>
                    <td><b>{l.feeCode}</b></td>
                    <td className="mini">{l.container} · {l.unit === 'BL' ? 'B/L' : l.unit}</td>
                    <td className="n">{plain(l.price)}</td>
                    <td className="n">
                      {low(l.confidence) ? <span className="status missing_basis">{Math.round(l.confidence * 100)}% · {t('rbCheck')}</span> : <span className="mini">{Math.round(l.confidence * 100)}%</span>}
                    </td>
                    <td>
                      <label className="row" style={{ gap: 6, cursor: 'pointer' }}>
                        <input type="checkbox" checked={approved.has(l.line)} onChange={() => toggle(l.line)} aria-label={`${t('rbColApprove')} ${l.feeCode} ${l.container}`} />
                        <span className="mini">{approved.has(l.line) ? t('rbApproved') : t('rbPending')}</span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="box" style={{ marginTop: 16 }} aria-labelledby="rb3">
        <div className="box-head">
          <div>
            <span className="chip">{t('rbStep')} 3</span>
            <h2 id="rb3" style={{ marginTop: 6 }}>{t('rbStep3')}</h2>
            <p className="muted">{approved.size}/{QUOTE.lines.length} {t('rbCount')} · {t('rbApprover')}</p>
          </div>
          <div className="row">
            <button className="btn" onClick={exportCsv} disabled={!allApproved}>{t('rbExport')} {QUOTE.rateCard}.csv</button>
            <a className={`btn ghost ${allApproved ? '' : 'disabled'}`} href="#/demo" aria-disabled={!allApproved}>{t('rbUse')}</a>
          </div>
        </div>
        <p className="muted mini">{allApproved ? t('rbReady') : t('rbBlocked')}</p>
      </section>
    </div>
  )
}
