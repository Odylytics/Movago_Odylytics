import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent } from 'react'
import { store } from './App'
import { CASES, SAMPLE_FILES, type DemoCase } from './cases'
import { findDuplicate, parseCsv, reconcile, sha256Hex, type IntakeRecord, type LineResult, type ReconcileResult, type Row } from './engine/reconcile'
import { CountUp } from './charts'
import { useT, type Key, type Lang } from './i18n'
import { isMuted, play, setMuted, unlock } from './sound'
import { STEPS } from './story'
import Stage, { type Scene } from './Stage'
import BehindScenes from './BehindScenes'
import { StoryBar, StoryStart } from './StoryBar'

const SAMPLES = `${import.meta.env.BASE_URL}samples/`
const INTAKE_KEY = 'movago.intake'

interface CaseData { lines: Row[]; shipments: Row[]; rates: Row[]; shipmentText: string; rateText: string }
interface Verification { assignee: string; reason: string; at: string }
type IntakeMsg = { kind: 'dup'; rec: IntakeRecord; hash: string; fileName: string } | { kind: 'new'; hash: string; fileName: string }
type Viewer = 'invoice' | 'shipment' | 'rate' | null

const fetchText = (f: string) => fetch(SAMPLES + f).then((r) => { if (!r.ok) throw new Error(f); return r.text() })
const fetchBytes = (f: string) => fetch(SAMPLES + f).then((r) => { if (!r.ok) throw new Error(f); return r.arrayBuffer() })

function loadIntake(): IntakeRecord[] {
  try { return JSON.parse(store.get(INTAKE_KEY) ?? '[]') } catch { return [] }
}
async function seedIntake(): Promise<IntakeRecord[]> {
  // The preloaded case counts as already received, so a renamed copy can be recognised.
  const hash = await sha256Hex(await fetchBytes('INV-095.pdf'))
  const recs = [{ hash, fileName: 'INV-095.pdf', invoiceId: 'INV-095', receivedAt: new Date(Date.now() - 2 * 3600_000).toISOString() }]
  store.set(INTAKE_KEY, JSON.stringify(recs))
  return recs
}

/** story steps 0–2 are the intake scenes; k counts the workspace steps after them */
const INTRO = 3
const SCENES: Scene[] = ['rates', 'channels', 'scan', 'extract']

const caseKey = (id: string) => `case_${id.replace(/-/g, '_')}` as Key

/** Money that counts up from 0 when it first renders (a new key replays it). */
function Money({ n, lang, sign = false }: { n: number; lang: Lang; sign?: boolean }) {
  return <CountUp to={sign ? Math.abs(n) : n} prefix={sign ? (n > 0 ? '+' : n < 0 ? '−' : '') : ''} suffix={lang === 'en' ? ' ₫' : ' đ'}
    locale={lang === 'en' ? 'en-US' : 'vi-VN'} start duration={1100} />
}

export default function Workspace({ story }: { story: boolean }) {
  const { t, money, signed, plain, lang } = useT()
  const [caseId, setCaseId] = useState('INV-095')
  const c = CASES.find((x) => x.id === caseId) as DemoCase
  const [allLines, setAllLines] = useState<Row[] | null>(null)
  const [data, setData] = useState<CaseData | null>(null)
  const [loadError, setLoadError] = useState(false)
  const [result, setResult] = useState<ReconcileResult | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [viewer, setViewer] = useState<Viewer>(null)
  const [verifyFor, setVerifyFor] = useState<string | null>(null)
  const [verifications, setVerifications] = useState<Record<string, Verification>>({})
  const [intake, setIntake] = useState<IntakeRecord[]>([])
  const [intakeMsg, setIntakeMsg] = useState<IntakeMsg | null>(null)
  const [log, setLog] = useState<{ at: string; text: string }[]>([])
  const [step, setStep] = useState(story ? 0 : -1)
  // the story waits for a click so sound is allowed, unless it was opened from the nav's Open demo (already a click)
  const [autostart] = useState(() => {
    if (!story) return false
    try { return sessionStorage.getItem('movago.autostart') === '1' } catch { return false }
  })
  // consume the flag after mount (not in the initializer, which StrictMode runs twice)
  useEffect(() => { try { sessionStorage.removeItem('movago.autostart') } catch { /* private mode */ } }, [])
  const [started, setStarted] = useState(!story || autostart)
  const [playing, setPlaying] = useState(autostart)
  const [muted, setMutedState] = useState(isMuted)
  const [runId, setRunId] = useState(0)
  const k = step - INTRO
  const resentDone = useRef(false) // story step 4 receives the resent PDF once, even if the step is revisited
  const [over, setOver] = useState(false)

  const time = (iso: string) => new Date(iso).toLocaleString(lang === 'en' ? 'en-GB' : 'vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
  const addLog = (text: string) => setLog((l) => [{ at: new Date().toISOString(), text }, ...l])

  useEffect(() => {
    fetchText('invoice-lines.csv').then((x) => setAllLines(parseCsv(x))).catch(() => setLoadError(true))
    const existing = loadIntake()
    if (existing.length) setIntake(existing)
    else seedIntake().then(setIntake).catch(() => setLoadError(true))
  }, [])

  useEffect(() => {
    if (!allLines) return
    let live = true
    setData(null); setResult(null); setSelected(null)
    Promise.all([fetchText(c.shipmentFile), fetchText(c.rateFile)])
      .then(([shipmentText, rateText]) => {
        if (live) setData({ lines: allLines, shipments: parseCsv(shipmentText), rates: parseCsv(rateText), shipmentText, rateText })
      })
      .catch(() => setLoadError(true))
    return () => { live = false }
  }, [c, allLines])

  const run = useCallback(() => {
    if (!data) return null
    const r = reconcile(c.header, data.lines, data.shipments, data.rates)
    setResult(r)
    setRunId((n) => n + 1)
    addLog(`${t('logRun')} · ${c.header.invoiceId}`)
    return r
  }, [data, c, t])

  const receive = useCallback(async (bytes: ArrayBuffer, fileName: string) => {
    const hash = await sha256Hex(bytes)
    const history = loadIntake().length ? loadIntake() : intake
    const dup = findDuplicate(hash, history)
    if (dup) {
      setIntakeMsg({ kind: 'dup', rec: dup, hash, fileName })
      addLog(`${t('logDup')} · ${fileName} = ${dup.fileName}`)
      return
    }
    const rec = { hash, fileName, invoiceId: '—', receivedAt: new Date().toISOString() }
    const next = [...history, rec]
    store.set(INTAKE_KEY, JSON.stringify(next))
    setIntake(next)
    setIntakeMsg({ kind: 'new', hash, fileName })
    addLog(`${t('logIntake')} · ${fileName}`)
  }, [intake, t])

  const simulateResend = useCallback(async () => {
    await receive(await fetchBytes('INV-095-resent.pdf'), 'INV-095-resent.pdf')
  }, [receive])

  const vKey = (fee: string) => `${caseId}:${fee}`

  const exportCsv = () => {
    if (!result) return
    const at = new Date().toISOString()
    const head = ['shipment_id', 'document_id', 'fee_code', 'invoiced_vnd_pretax', 'expected_vnd_pretax', 'difference_vnd', 'result', 'invoice_source', 'rate_source', 'verification', 'assigned_to', 'reason', 'exported_at', 'data']
    const rows = result.lines.map((l) => {
      const v = verifications[vKey(l.feeCode)]
      return [
        result.shipment?.shipment_id ?? '', c.header.invoiceId, l.feeCode, l.invoiced, l.expected ?? '', l.diff ?? '', l.status,
        `${c.header.invoiceId} page ${l.invoiceSource.page} line ${l.invoiceSource.lineLabel}`,
        l.rateSource ? `${l.rateSource.rateCard} line ${l.rateSource.line}` : '',
        v ? 'sent_for_verification' : l.status === 'matched' ? 'not_needed' : 'open',
        v?.assignee ?? '', v?.reason ?? '', at, 'simulated',
      ]
    })
    const esc = (x: unknown) => `"${String(x).replace(/"/g, '""')}"`
    const csv = '﻿' + [head, ...rows].map((r) => r.map(esc).join(',')).join('\r\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const a = document.createElement('a')
    a.href = url; a.download = `movago-${c.header.invoiceId}-report.csv`; a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    addLog(`${t('logExport')} · ${c.header.invoiceId}`)
  }

  const reset = async () => {
    try { localStorage.removeItem(INTAKE_KEY) } catch { /* ignore */ }
    setCaseId('INV-095'); setResult(null); setSelected(null); setViewer(null); setVerifyFor(null)
    setVerifications({}); setIntakeMsg(null); setLog([]); resentDone.current = false
    setIntake(await seedIntake().catch(() => []))
    if (story) { setStep(0); setPlaying(false) }
  }

  const goto = useCallback((n: number) => setStep(Math.max(0, Math.min(STEPS.length - 1, n))), [])
  const toggleMute = useCallback(() => setMutedState((m) => { setMuted(!m); return !m }), [])
  const submitVerification = useCallback((fee: string, v: Verification) => {
    setVerifications((m) => ({ ...m, [`${caseId}:${fee}`]: v }))
    addLog(`${t('logVerify')} · ${fee} → ${v.assignee}`)
    play('send')
    setVerifyFor(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseId, t])

  // Story mode: each step drives the UI to its state.
  useEffect(() => {
    if (step < 0 || !data || !started) return
    if (caseId !== 'INV-095') { setCaseId('INV-095'); return }
    setViewer(null)
    if (k <= 0) { setResult(null); setSelected(null); setVerifyFor(null) }
    if (k >= 1 && !result) run()
    if (k === 1) { setSelected(null); setVerifyFor(null) }
    if (k === 2 || k === 3) { setSelected('DOC'); setVerifyFor(null) }
    if (k === 3 && !resentDone.current) { resentDone.current = true; simulateResend() }
    if (k >= 4) setSelected('DOC')
    if (k !== 4) setVerifyFor(null)
    // jumping straight to the last step: the line has been sent to pricing already
    if (k === 5 && !verifications[`${caseId}:DOC`]) {
      setVerifications((m) => ({ ...m, [`${caseId}:DOC`]: { assignee: t('roles_pricing'), reason: t('defaultReason'), at: new Date().toISOString() } }))
    }
    play(STEPS[step].cue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, data, started])

  // Story mode: bring the step's target into the gap between the floating nav and the story card.
  useEffect(() => {
    if (step < 0 || !started) return
    const id = window.setTimeout(() => {
      const el = document.querySelector<HTMLElement>('.story-target')
      if (!el) return
      const navBottom = (document.querySelector('.nav')?.getBoundingClientRect().bottom ?? 80) + 16
      // the target must clear both the story card and the behind-the-scenes window
      const cardTop = Math.min(...['.story', '.pip'].map((q) => document.querySelector(q)?.getBoundingClientRect().top ?? window.innerHeight)) - 16
      const gap = cardTop - navBottom
      const r = el.getBoundingClientRect()
      // fits: centre it in the gap · too tall: show its top, except on the last step where the actions sit at its bottom
      const top = r.height <= gap ? r.top - (navBottom + (gap - r.height) / 2) : k === 5 ? r.bottom - cardTop : r.top - navBottom
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: Math.max(0, window.scrollY + top), behavior: smooth ? 'smooth' : 'auto' })
    }, 120)
    // step 5 (index 4) opens the verification form once the evidence is in view
    const open = k === 4 && !verifications[`${caseId}:DOC`] ? window.setTimeout(() => setVerifyFor((v) => v ?? 'DOC'), 900) : 0
    return () => { window.clearTimeout(id); window.clearTimeout(open) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, result, selected, verifications, started])

  const sel = result?.lines.find((l) => l.feeCode === selected) ?? null
  const target = (n: number) => (story && k === n ? 'spot story-target' : '')

  return (
    <div className="wrap ws">
      <div className="ws-head">
        <div>
          <div className="row" style={{ marginBottom: 8 }}>
            <span className="chip sim">{t('simulated')}</span>
            {story && <span className="chip">{t('storyLabel')}</span>}
          </div>
          <h1>{t('wsTitle')}</h1>
        </div>
        <div className="row">
          <label className="field">
            {t('wsCase')}
            <select value={caseId} onChange={(e) => { setCaseId(e.target.value); setVerifyFor(null) }} disabled={story && step >= 0}>
              {CASES.map((x) => <option key={x.id} value={x.id}>{t(caseKey(x.id))}</option>)}
            </select>
          </label>
          <button className="btn ghost" style={{ alignSelf: 'flex-end' }} onClick={reset}>{t('reset')}</button>
        </div>
      </div>

      {loadError && <p className="callout strong" role="alert">Could not load sample files. Run the app with `npm run dev` from the web folder.</p>}

      {story && started && k <= 0 && step >= 0 && <Stage key={step} scene={SCENES[step]} className="spot story-target" />}

      <div className="ws-grid">
        <div>
          <section aria-label={t('sources')} className="src-cards">
            <SourceCard k={t('srcInvoice')} v={c.header.invoiceId} d={`${c.header.supplier} · ${c.invoiceDate}`} open={viewer === 'invoice'} onClick={() => setViewer('invoice')} />
            <SourceCard k={t('srcShipment')} v={c.header.shipmentId} d={data?.shipments[0] ? `${data.shipments[0].origin} → ${data.shipments[0].destination} · ${data.shipments[0].container_type}` : '…'} open={viewer === 'shipment'} onClick={() => setViewer('shipment')} />
            <SourceCard k={t('srcRate')} v={c.rateFile.replace('.csv', '')} d={`${data?.rates.length ?? '…'} ${t('rateRows')}`} open={viewer === 'rate'} onClick={() => setViewer('rate')} />
          </section>
          <p className="mini" style={{ marginTop: 8, textAlign: 'right' }}><a className="ref" href="#/rates">{t('buildFromQuote')}</a></p>

          <section className={`box ${target(1)}`} style={{ marginTop: 16 }} aria-live="polite">
            <div className="box-head">
              <div>
                <h2>{t('results')}</h2>
                {result?.shipment && (
                  <p className="muted">{t('matchedShipment')} <b>{result.shipment.shipment_id}</b> · {result.shipment.bl_number} · {t('ratingDate')} {result.shipment.rating_date}</p>
                )}
              </div>
              <div className="row">
                <button className="btn" onClick={() => { run(); setSelected(null) }} disabled={!data}>{result ? t('rerun') : t('run')}</button>
                <button className="btn ghost" onClick={exportCsv} disabled={!result}>{t('export')}</button>
              </div>
            </div>

            {!result ? (
              <p className="muted">{t('notRun')}</p>
            ) : (
              <>
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr><th>{t('colFee')}</th><th className="n">{t('colInvoiced')}</th><th className="n">{t('colExpected')}</th><th className="n">{t('colDiff')}</th><th>{t('colStatus')}</th></tr>
                    </thead>
                    <tbody>
                      {result.lines.map((l) => (
                        <tr key={l.feeCode} className={`clickable ${selected === l.feeCode ? 'selected' : ''}`} onClick={() => setSelected(l.feeCode)}>
                          <td>
                            <b>{l.feeCode}</b> <span className="muted">{l.description}</span>
                            <div className="mini muted">{l.quantity} × {l.unit}</div>
                          </td>
                          <td className="n"><Money key={runId} n={l.invoiced} lang={lang} /></td>
                          <td className="n">{l.expected === null ? '—' : <Money key={runId} n={l.expected} lang={lang} />}</td>
                          <td className="n">{l.diff === null ? '—' : l.diff === 0 ? money(0) : <b><Money key={runId} n={l.diff} sign lang={lang} /></b>}</td>
                          <td>
                            <div className="row" style={{ gap: 6 }}>
                              <span className={`status ${l.status}`}>{t(`st_${l.status}`)}</span>
                              {verifications[vKey(l.feeCode)] && <span className="status sent">{t('st_sent')}</span>}
                              <button className="btn ghost small" onClick={(e) => { e.stopPropagation(); setSelected(l.feeCode) }}>{t('viewEvidence')}</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      <tr className="total">
                        <td>{t('total')}</td>
                        <td className="n"><Money key={runId} n={result.invoicedTotal} lang={lang} /></td>
                        <td className="n">{result.expectedTotal === null ? '—' : <Money key={runId} n={result.expectedTotal} lang={lang} />}</td>
                        <td className="n">{result.expectedTotal === null ? '—' : <Money key={runId} n={result.invoicedTotal - result.expectedTotal} sign lang={lang} />}</td>
                        <td><span className={`status ${result.overall === 'matched' ? 'matched' : 'sent'}`}>{result.overall === 'matched' ? t('allMatched') : t('needsReview')}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="muted mini" style={{ marginTop: 10 }}>{result.arithmeticOk ? t('arithmeticOk') : t('arithmeticBad')} · {t('pretax')}</p>
              </>
            )}
          </section>

          {sel && (
            <Evidence
              line={sel} c={c} rates={data?.rates ?? []} className={story && (k === 2 || k === 4 || k === 5) ? 'spot story-target' : ''}
              verification={verifications[vKey(sel.feeCode)]}
              onOpen={setViewer} onVerify={() => setVerifyFor(sel.feeCode)} time={time}
            />
          )}
        </div>

        <aside className="stack">
          <section className={`box ${target(3)}`}>
            <h2>{t('intakeTitle')}</h2>
            <p className="muted" style={{ marginBottom: 12 }}>{t('intakeBody')}</p>
            <label
              className={`drop ${over ? 'over' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setOver(true) }}
              onDragLeave={() => setOver(false)}
              onDrop={async (e: DragEvent) => { e.preventDefault(); setOver(false); const f = e.dataTransfer.files[0]; if (f) await receive(await f.arrayBuffer(), f.name) }}
              style={{ display: 'block', cursor: 'pointer' }}
            >
              <input type="file" accept="application/pdf,.pdf" className="sr-only" onChange={async (e) => { const f = e.target.files?.[0]; if (f) await receive(await f.arrayBuffer(), f.name); e.target.value = '' }} />
              <span className="btn ghost small">{t('chooseFile')}</span>
            </label>
            <button className="btn ghost small" style={{ marginTop: 10, width: '100%', whiteSpace: 'normal' }} onClick={simulateResend}>{t('tryResent')}</button>

            {intakeMsg && (
              <div className={`callout ${intakeMsg.kind === 'dup' ? 'strong' : ''}`} style={{ marginTop: 12 }} role="status">
                {intakeMsg.kind === 'dup' ? (
                  <>
                    <b>{t('dupFound')}: {intakeMsg.rec.invoiceId}</b>
                    <div className="mini" style={{ marginTop: 4 }}>
                      “{intakeMsg.fileName}” = {t('asFile')} “{intakeMsg.rec.fileName}”, {t('receivedAt')} {time(intakeMsg.rec.receivedAt)}. {t('paidNote')}
                    </div>
                  </>
                ) : (
                  <>{t('newFile')} <span className="mini">“{intakeMsg.fileName}”</span></>
                )}
                <div className="hash" style={{ marginTop: 6, color: 'inherit', opacity: 0.8 }}>{t('fingerprint')}: {intakeMsg.hash.slice(0, 32)}…</div>
              </div>
            )}

            <h3 className="muted mini" style={{ margin: '14px 0 6px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>{t('history')}</h3>
            <ul className="log">
              {intake.map((r) => (
                <li key={r.hash + r.receivedAt}><time>{time(r.receivedAt)}</time><span><b>{r.fileName}</b> <span className="hash">{r.hash.slice(0, 12)}…</span></span></li>
              ))}
            </ul>
          </section>

          <section className="box">
            <h2>{t('samples')}</h2>
            <ul className="files" style={{ marginTop: 10 }}>
              {SAMPLE_FILES.map((f) => <li key={f}><a href={SAMPLES + f} download>{f}</a></li>)}
            </ul>
          </section>

          <section className="box">
            <h2>{t('activity')}</h2>
            {log.length === 0 ? <p className="muted">—</p> : (
              <ul className="log" style={{ marginTop: 10 }}>
                {log.map((x) => <li key={x.at + x.text}><time>{time(x.at)}</time><span>{x.text}</span></li>)}
              </ul>
            )}
          </section>
        </aside>
      </div>

      {viewer && data && (
        <SourceViewer viewer={viewer} c={c} data={data} sel={sel} onClose={() => setViewer(null)} />
      )}

      {verifyFor && result && (
        <VerifyModal
          key={verifyFor}
          line={result.lines.find((l) => l.feeCode === verifyFor)!}
          caseId={caseId}
          auto={story && playing && k === 4}
          onCancel={() => setVerifyFor(null)}
          onSubmit={(v) => submitVerification(verifyFor, v)}
        />
      )}

      {story && !started && (
        <StoryStart onStart={(withSound) => {
          unlock()
          setMuted(!withSound); setMutedState(!withSound)
          setStarted(true); setStep(0); setPlaying(true)
        }} />
      )}

      {story && started && step >= 0 && (
        <>
          <div className="story-pad" />
          <BehindScenes step={step} />
          <StoryBar step={step} goto={goto} playing={playing} setPlaying={setPlaying} muted={muted} toggleMute={toggleMute}
            hold={!!verifyFor} onExit={() => { window.location.hash = '#/demo' }} />
        </>
      )}
    </div>
  )

  function SourceCard(p: { k: string; v: string; d: string; open: boolean; onClick: () => void }) {
    return (
      <button className="src" aria-expanded={p.open} onClick={p.onClick}>
        <span className="k">{p.k}</span>
        <span className="v">{p.v}</span>
        <span className="d">{p.d}</span>
        <span className="mini" style={{ fontWeight: 700, marginTop: 4 }}>{t('open')} →</span>
      </button>
    )
  }

  function Evidence(p: { line: LineResult; c: DemoCase; rates: Row[]; className: string; verification?: Verification; onOpen: (v: Viewer) => void; onVerify: () => void; time: (s: string) => string }) {
    const { line: l } = p
    const rateRow = l.rateSource ? p.rates.find((r) => Number(r._line) === l.rateSource!.line) : null
    const why = { ok: 'why_ok', diff: 'why_diff', no_rate: 'why_no_rate', ambiguous: 'why_ambiguous', no_shipment: 'why_no_shipment' }[l.reasonCode] as Key
    return (
      <section className={`box ${p.className}`} style={{ marginTop: 16 }} aria-label={t('evidence')}>
        <div className="box-head">
          <div>
            <h2>{t('evidence')} · {l.feeCode}</h2>
            <p className="muted">{l.description} · {l.quantity} × {l.unit}</p>
          </div>
          <div className="row" style={{ gap: 6 }}>
            <span className={`status ${l.status}`}>{t(`st_${l.status}`)}</span>
            {p.verification && <span className="status sent">{t('st_sent')}</span>}
          </div>
        </div>

        <div className="evidence">
          <div className="ev-side">
            <h3>{t('invoiceSide')}</h3>
            <div className="ev-amount">{money(l.invoiced)}</div>
            <div className="ev-src">{p.c.header.invoiceId} · {t('page')} {l.invoiceSource.page} · {t('line')} {l.invoiceSource.lineLabel}</div>
            <button className="btn ghost small" style={{ marginTop: 10 }} onClick={() => p.onOpen('invoice')}>{t('open')} {p.c.header.invoiceId}</button>
          </div>
          <div className="ev-side">
            <h3>{t('rateSide')}</h3>
            {l.expected !== null && l.rateSource ? (
              <>
                <div className="ev-amount">{money(l.expected)}</div>
                <div className="ev-src">{l.rateSource.rateCard} · {t('line')} {l.rateSource.line}</div>
                {rateRow && <div className="mini muted" style={{ marginTop: 4 }}>{rateRow.fee_code} · {rateRow.container_type} · {rateRow.unit} · {rateRow.effective_from} → {rateRow.effective_to}</div>}
                <button className="btn ghost small" style={{ marginTop: 10 }} onClick={() => p.onOpen('rate')}>{t('open')} {l.rateSource.rateCard}</button>
              </>
            ) : (
              <>
                <div className="ev-amount">—</div>
                <div className="ev-src">{t('st_missing_basis')}</div>
                <button className="btn ghost small" style={{ marginTop: 10 }} onClick={() => p.onOpen('rate')}>{t('open')} {p.c.rateFile.replace('.csv', '')}</button>
              </>
            )}
          </div>
        </div>

        {l.diff !== null && l.unitPrice !== null && (
          <div className="calc">
            {t('calc')}: {plain(l.invoiced)} − ({l.quantity} × {plain(l.unitPrice)}) = <b>{l.diff > 0 ? '+' : l.diff < 0 ? '−' : ''}{plain(Math.abs(l.diff))}</b> ({t('pretax')})
          </div>
        )}
        <p className="callout" style={{ marginTop: 12 }}>{t(why)}</p>
        {p.c.id === 'INV-VN-020' && l.feeCode === 'THD' && <p className="muted mini" style={{ marginTop: 8 }}>{t('vn020Note')}</p>}

        {p.verification ? (
          <p className="callout" style={{ marginTop: 12 }}>
            <b>{t('sentTo')} {p.verification.assignee}</b> · {p.time(p.verification.at)}<br />{p.verification.reason}
          </p>
        ) : null}
        {p.verification ? (
          <div className="row" style={{ marginTop: 14 }}>
            <button className={`btn ${story && k === 5 ? 'spot' : ''}`} onClick={exportCsv}>{t('export')}</button>
          </div>
        ) : l.status !== 'matched' && (
          <div className="row" style={{ marginTop: 14 }}>
            <button className="btn" onClick={p.onVerify}>{t('requestVerify')}</button>
          </div>
        )}
      </section>
    )
  }
}

function SourceViewer(p: { viewer: Exclude<Viewer, null>; c: DemoCase; data: CaseData; sel: LineResult | null; onClose: () => void }) {
  const { t, plain } = useT()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') p.onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [p])
  const lines = p.data.lines.filter((l) => l.invoice_id === p.c.header.invoiceId)
  const vat = Math.round(p.c.header.statedSubtotal * p.c.vatRate)
  const title = p.viewer === 'invoice' ? p.c.header.invoiceId : p.viewer === 'shipment' ? p.c.shipmentFile : p.c.rateFile
  return (
    <div className="overlay" onClick={p.onClose}>
      <div className="drawer" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="box-head">
          <div className="row"><h2 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em' }}>{title}</h2><span className="chip sim">{t('simulated')}</span></div>
          <button className="btn ghost small" onClick={p.onClose} autoFocus>{t('close')}</button>
        </div>

        {p.viewer === 'invoice' && (
          <div className="box">
            <p className="muted mini" style={{ marginBottom: 10 }}>{t('extractedNote')}</p>
            <div className="invoice">
              <span className="wm">SIMULATED</span>
              <h3>{p.c.header.supplier}</h3>
              <div className="muted mini">Freight invoice · {t('page')} 1</div>
              <div className="inv-meta mini">
                <span>Invoice no: <b>{p.c.header.invoiceId}</b></span><span>Date: <b>{p.c.invoiceDate}</b></span>
                <span>Shipment: <b>{p.c.header.shipmentId}</b></span><span>B/L: <b>{p.c.header.blNumber}</b></span>
              </div>
              <table className="mini">
                <thead><tr><th>Description</th><th>Qty / unit</th><th className="n">Amount (VND)</th></tr></thead>
                <tbody>
                  {lines.map((l) => (
                    <tr key={l.fee_code} className={p.sel?.feeCode === l.fee_code ? 'hl' : ''}>
                      <td>{l.description} ({l.fee_code})</td><td>{l.quantity} × {l.unit}</td><td className="n">{plain(Number(l.amount))}</td>
                    </tr>
                  ))}
                  <tr><td colSpan={2}>{t('subtotal')}</td><td className="n">{plain(p.c.header.statedSubtotal)}</td></tr>
                  <tr><td colSpan={2}>{t('vat')} ({Math.round(p.c.vatRate * 100)}%)</td><td className="n">{plain(vat)}</td></tr>
                  <tr className="total"><td colSpan={2}>{t('grand')}</td><td className="n">{plain(p.c.header.statedSubtotal + vat)}</td></tr>
                </tbody>
              </table>
            </div>
            {p.c.pdfFile
              ? <a className="btn ghost small" style={{ marginTop: 12 }} href={SAMPLES + p.c.pdfFile} target="_blank" rel="noreferrer">{t('openPdf')} ↗</a>
              : <p className="muted mini" style={{ marginTop: 10 }}>{t('noPdf')}</p>}
          </div>
        )}

        {p.viewer !== 'invoice' && (
          <div className="box">
            <CsvTable text={p.viewer === 'shipment' ? p.data.shipmentText : p.data.rateText} hl={p.viewer === 'rate' ? p.sel?.rateSource?.line ?? null : 2} />
          </div>
        )}
      </div>
    </div>
  )
}

function VerifyModal(p: { line: LineResult; caseId: string; auto?: boolean; onCancel: () => void; onSubmit: (v: Verification) => void }) {
  const { t, money } = useT()
  const roles = [t('roles_pricing'), t('roles_ops'), t('roles_chief')]
  const [assignee, setAssignee] = useState<string>(roles[0])
  const defaultReason = p.caseId === 'INV-095' && p.line.feeCode === 'DOC'
    ? t('defaultReason')
    : `${p.line.feeCode} · ${p.caseId}: ${money(p.line.invoiced)}${p.line.expected !== null ? ` vs ${money(p.line.expected)}` : ''}. ${t(p.line.status === 'missing_basis' ? 'why_no_rate' : 'why_diff')}`
  const [reason, setReason] = useState<string>(p.auto ? '' : defaultReason)
  // story autoplay: type the reason as if Hà were typing, then send it
  useEffect(() => {
    if (!p.auto) return
    let i = 0
    let done = 0
    const id = window.setInterval(() => {
      i += 2
      setReason(defaultReason.slice(0, i))
      if (i % 6 === 0) play('click')
      if (i >= defaultReason.length) {
        window.clearInterval(id)
        done = window.setTimeout(() => p.onSubmit({ assignee: roles[0], reason: defaultReason, at: new Date().toISOString() }), 900)
      }
    }, 28)
    return () => { window.clearInterval(id); window.clearTimeout(done) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.auto])
  return (
    <div className="modal-c" onClick={p.onCancel}>
      <form className="modal" role="dialog" aria-modal="true" aria-label={t('requestVerify')} onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => { e.preventDefault(); if (reason.trim()) p.onSubmit({ assignee, reason: reason.trim(), at: new Date().toISOString() }) }}>
        <h2 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.01em' }}>{t('requestVerify')} · {p.line.feeCode}</h2>
        <label className="field">{t('assignee')}
          <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>{roles.map((r) => <option key={r}>{r}</option>)}</select>
        </label>
        <label className="field">{t('reason')}
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />
        </label>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button type="button" className="btn ghost" onClick={p.onCancel}>{t('cancel')}</button>
          <button type="submit" className="btn" autoFocus>{t('submit')}</button>
        </div>
      </form>
    </div>
  )
}

function CsvTable({ text, hl }: { text: string; hl: number | null }) {
  const rows = useMemo(() => text.trim().split('\n').map((l) => l.split(',')), [text])
  return (
    <div className="table-scroll">
      <table className="mini">
        <thead><tr><th>#</th>{rows[0].map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.slice(1).map((r, i) => (
            <tr key={i} className={hl === i + 2 ? 'hl' : ''}>
              <td className="muted">{i + 2}</td>{r.map((x, j) => <td key={j}>{x}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
