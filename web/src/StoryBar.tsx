import { useEffect, useState } from 'react'
import { T } from './ui'
import Avatar from './Avatar'
import { useT } from './i18n'
import { play } from './sound'
import { PERSONAS, STEPS, persona, type PersonaId } from './story'

const firstStepOf = (id: PersonaId) => {
  const own = STEPS.findIndex((s) => s.who === id)
  return own >= 0 ? own : STEPS.findIndex((s) => s.also.includes(id))
}

/** Bottom story player: cast strip, step progress you can click, the speaker's line and transport controls. */
export function StoryBar({ step, goto, playing, setPlaying, muted, toggleMute, hold, onExit }: {
  step: number; goto: (n: number) => void; playing: boolean; setPlaying: (p: boolean) => void
  muted: boolean; toggleMute: () => void; hold: boolean; onExit: () => void
}) {
  const { t, lang } = useT()
  const s = STEPS[step]
  const who = persona(s.who)
  // progress belongs to a step, so a stale value never ends the next step early
  const [prog, setProg] = useState({ step, t: 0 })
  const elapsed = prog.step === step ? prog.t : 0
  const last = step === STEPS.length - 1

  useEffect(() => {
    if (!playing || hold) return
    const id = window.setInterval(() => setProg((p) => ({ step, t: (p.step === step ? p.t : 0) + 0.1 })), 100)
    return () => window.clearInterval(id)
  }, [playing, hold, step])
  useEffect(() => {
    if (elapsed < s.seconds) return
    if (last) setPlaying(false)
    else goto(step + 1)
  }, [elapsed, s.seconds, last, step, goto, setPlaying])

  // ← / → step, K or P toggles play, M toggles sound
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest('input, textarea, select')) return
      if (e.key === 'ArrowRight' && !last) goto(step + 1)
      else if (e.key === 'ArrowLeft' && step > 0) goto(step - 1)
      else if (e.key === 'k' || e.key === 'p') setPlaying(!playing)
      else if (e.key === 'm') toggleMute()
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, last, goto, playing, setPlaying, toggleMute])

  const click = (fn: () => void) => () => { play('click'); fn() }

  return (
    <div className="story" role="region" aria-label={t('storyLabel')}>
      <div className="story-cast">
        {PERSONAS.map((p) => {
          const n = firstStepOf(p.id)
          const state = p.id === s.who ? 'speaking' : s.also.includes(p.id) ? 'mentioned' : ''
          return (
            <button key={p.id} className={`cast-btn ${state}`} title={`${p.name} · ${p.role[lang]}`} aria-label={`${p.name}, ${p.role[lang]}`}
              aria-current={state === 'speaking'} disabled={n < 0} onClick={click(() => goto(n))}>
              <Avatar p={p} size={36} />
            </button>
          )
        })}
      </div>

      <div className="story-segs">
        {STEPS.map((x, i) => (
          <button key={i} className="seg-btn" aria-label={`${i + 1}. ${x.title[lang]}`} aria-current={i === step} onClick={click(() => goto(i))}>
            <i style={{ width: `${i < step ? 100 : i > step ? 0 : Math.min(100, (elapsed / x.seconds) * 100)}%` }} />
          </button>
        ))}
      </div>

      <div className="story-line" key={step}>
        <Avatar p={who} size={52} className="speaker" />
        <div>
          <span className="story-who">{who.name} · {who.role[lang]} <span className="story-org">{who.org[lang]}</span></span>
          <h2>{step + 1}/{STEPS.length} · {s.title[lang]}</h2>
          <p>{s.body[lang]}</p>
        </div>
      </div>

      <div className="story-controls">
        <button className="btn ghost small" onClick={click(onExit)}><T k="exit" /></button>
        <div className="row">
          <button className="btn ghost small" onClick={click(toggleMute)} aria-pressed={!muted}>{muted ? t('soundOff') : t('soundOn')}</button>
          <button className="btn ghost small" onClick={click(() => goto(step - 1))} disabled={step === 0}><T k="back" /></button>
          <button className="btn small" onClick={click(() => (last && !playing && elapsed >= s.seconds ? goto(0) : setPlaying(!playing)))}>
            {playing ? t('pause') : last && elapsed >= s.seconds ? t('replay') : t('play')}
          </button>
          <button className="btn ghost small" onClick={click(() => goto(step + 1))} disabled={last}><T k="next" /></button>
        </div>
      </div>
    </div>
  )
}

/** Start gate: browsers only allow sound after a click, and it introduces the cast. */
export function StoryStart({ onStart }: { onStart: (withSound: boolean) => void }) {
  const { t, lang } = useT()
  return (
    <div className="modal-c story-start">
      <div className="modal start-card" role="dialog" aria-modal="true" aria-labelledby="start-title">
        <span className="chip sim"><T k="fictional" /></span>
        <h2 id="start-title"><T k="startTitle" /></h2>
        <p className="muted"><T k="startSub" /></p>
        <ul className="start-cast">
          {PERSONAS.map((p) => (
            <li key={p.id}><Avatar p={p} size={44} /><span><b>{p.name}</b><span>{p.role[lang]}</span></span></li>
          ))}
        </ul>
        <div className="row">
          <button className="btn" autoFocus onClick={() => onStart(true)}><T k="playSound" /></button>
          <button className="btn ghost" onClick={() => onStart(false)}><T k="playMuted" /></button>
          <a className="btn ghost" href="#/demo"><T k="exploreSelf" /></a>
        </div>
        <p className="muted mini"><T k="avatarCredit" /></p>
      </div>
    </div>
  )
}
