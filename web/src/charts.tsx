import { useEffect, useRef, useState, type CSSProperties } from 'react'

// Statistic motion, modelled on the Unfound landing page: each block animates once when it scrolls into view.
// Numbers count up with an ease-out; bars are revealed with clip-path; squares pop in on a diagonal stagger.

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    if (reduced() || typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [inView, threshold])
  return [ref, inView] as const
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))

export function CountUp({ to, from = 0, decimals = 0, prefix = '', suffix = '', locale, duration = 1400, start }: {
  to: number; from?: number; decimals?: number; prefix?: string; suffix?: string; locale: string; duration?: number; start: boolean
}) {
  const [v, setV] = useState(from)
  useEffect(() => {
    if (!start) return
    if (reduced()) { setV(to); return }
    let raf = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const p = easeOutExpo(Math.min(1, (now - t0) / duration))
      setV(from + (to - from) * p)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, to, from, duration])
  const fmt = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  const final = `${prefix}${fmt.format(to)}${suffix}`
  return (
    <>
      <span aria-hidden="true">{prefix}{fmt.format(v)}{suffix}</span>
      <span className="sr-only">{final}</span>
    </>
  )
}

const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties

export interface BarRow { label: string; value: string; pct: number; tone?: 'navy' | 'blue' | 'muted' }

export function Bars({ rows, axis, label, show }: { rows: BarRow[]; axis?: string[]; label: string; show: boolean }) {
  return (
    <div className={`bars draw ${show ? 'in' : ''}`} role="img" aria-label={label}>
      {rows.map((r, i) => (
        <div key={r.label} title={`${r.label}: ${r.value}`}>
          <div className="bar-label"><span>{r.label}</span><span>{r.value}</span></div>
          <div className="track"><div className={`fill ${r.tone ?? 'navy'}`} style={{ width: `${r.pct}%`, ...d(0.15 + i * 0.12) }} /></div>
        </div>
      ))}
      {axis && <div className="axis" aria-hidden="true">{axis.map((a) => <span key={a}>{a}</span>)}</div>}
    </div>
  )
}

/** One bar split into two parts that grow left to right in sequence. */
export function Split({ parts, label, show }: { parts: { label: string; pct: number; tone: 'navy' | 'blue' | 'muted' }[]; label: string; show: boolean }) {
  return (
    <div className={`split-bar draw ${show ? 'in' : ''}`} role="img" aria-label={label}>
      <div className="track split-track">
        {parts.map((p, i) => <div key={p.label} className={`fill ${p.tone}`} style={{ width: `${p.pct}%`, ...d(0.15 + i * 0.2) }} />)}
      </div>
      <div className="split-legend">
        {parts.map((p) => <span key={p.label}><i className={`dot ${p.tone}`} />{p.label}</span>)}
      </div>
    </div>
  )
}

/** Unit chart: `total` squares, the first `on` filled, popping in on a diagonal. */
export function Units({ total, on, cols = 10, label, show, legend }: { total: number; on: number; cols?: number; label: string; show: boolean; legend: [string, string] }) {
  return (
    <div>
      <div className={`units draw ${show ? 'in' : ''}`} role="img" aria-label={label} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: total }, (_, i) => (
          <i key={i} className={i < on ? 'on' : 'over'} style={d(0.1 + (i % cols) * 0.025 + Math.floor(i / cols) * 0.035)} />
        ))}
      </div>
      <div className="split-legend"><span><i className="dot navy" />{legend[0]}</span><span><i className="dot blue" />{legend[1]}</span></div>
    </div>
  )
}

/** Vertical columns with an optional dashed reference line (e.g. break-even). */
export function Columns({ cols, max, refLine, label, show }: {
  cols: { label: string; value: string; amount: number }[]; max: number; refLine?: { amount: number; label: string }; label: string; show: boolean
}) {
  return (
    <div className="colchart" role="img" aria-label={label}>
      <div className={`plot draw ${show ? 'in' : ''}`}>
        {refLine && (
          <div className="refline" style={{ bottom: `${(refLine.amount / max) * 100}%` }} />
        )}
        {cols.map((c, i) => (
          <div className="col" key={c.label}>
            <span className="col-val">{c.value}</span>
            <div className="seg" style={{ height: `${(c.amount / max) * 100}%`, ...d(0.1 + i * 0.15) }} />
          </div>
        ))}
      </div>
      <div className="col-labels" aria-hidden="true">{cols.map((c) => <span key={c.label}>{c.label}</span>)}</div>
      {refLine && <div className="split-legend"><span><i className="dash" />{refLine.label}</span></div>}
    </div>
  )
}
