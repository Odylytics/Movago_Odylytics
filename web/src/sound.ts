// Story sounds, synthesised with Web Audio so the demo ships no audio files.
// Browsers only allow audio after a user gesture, so unlock() is called from the Play button.
import type { Cue } from './story'

let ctx: AudioContext | null = null
// each story cue plays on its own bus; starting the next cue (or muting) cuts the previous one off
let bus: GainNode | null = null
let out: AudioNode | null = null
const KEY = 'movago.muted'
let muted = (() => { try { return localStorage.getItem(KEY) === '1' } catch { return false } })()

export const isMuted = () => muted
export function setMuted(m: boolean) {
  muted = m
  if (m) { bus?.disconnect(); bus = null }
  try { localStorage.setItem(KEY, m ? '1' : '0') } catch { /* private mode */ }
}

export function unlock() {
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return
  ctx ??= new AC()
  if (ctx.state === 'suspended') void ctx.resume()
}

function tone(freq: number, at: number, dur: number, { type = 'sine' as OscillatorType, gain = 0.08, to }: { type?: OscillatorType; gain?: number; to?: number } = {}) {
  if (!ctx) return
  const t = ctx.currentTime + at
  const o = ctx.createOscillator()
  const g = ctx.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, t)
  if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur)
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(gain, t + 0.012)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  o.connect(g).connect(out ?? ctx.destination)
  o.start(t)
  o.stop(t + dur + 0.02)
}

function noise(at: number, dur: number, from: number, to: number, gain = 0.05) {
  if (!ctx) return
  const t = ctx.currentTime + at
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
  const src = ctx.createBufferSource()
  src.buffer = buf
  const f = ctx.createBiquadFilter()
  f.type = 'bandpass'
  f.Q.value = 1.2
  f.frequency.setValueAtTime(from, t)
  f.frequency.exponentialRampToValueAtTime(to, t + dur)
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(gain, t + dur * 0.3)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  src.connect(f).connect(g).connect(out ?? ctx.destination)
  src.start(t)
  src.stop(t + dur)
}

const SOUNDS: Record<Cue | 'click' | 'step', () => void> = {
  click: () => tone(1800, 0, 0.04, { gain: 0.04 }),
  step: () => { tone(660, 0, 0.12, { gain: 0.05 }); tone(990, 0.06, 0.16, { gain: 0.04 }) },
  // three messages land (timed with the inbox scene), then the group chime
  channels: () => {
    [0.6, 2.2, 3.8].forEach((a, i) => { noise(a, 0.3, 400, 2600, 0.045); tone([587, 659, 784][i], a + 0.26, 0.14, { type: 'triangle', gain: 0.06 }) })
    tone(880, 6.2, 0.22, { gain: 0.05 }); tone(1175, 6.32, 0.3, { gain: 0.045 })
  },
  // focus beeps while the edges lock, shutter at 3 s, upload sweep
  scan: () => {
    [1.1, 1.5, 1.9].forEach((a) => tone(1400, a, 0.05, { gain: 0.035 }))
    noise(3.0, 0.09, 2500, 6000, 0.09); noise(3.12, 0.07, 1800, 4000, 0.06)
    tone(380, 3.8, 1.3, { gain: 0.04, to: 900 }); tone(988, 5.3, 0.25, { gain: 0.05 })
  },
  // a slow scanning sweep, then one tick per extracted field
  extract: () => {
    noise(0.4, 2.4, 500, 3500, 0.03)
    for (let i = 0; i < 8; i++) tone(1900 + i * 60, 3 + i * 0.55, 0.04, { gain: 0.035 })
    tone(784, 7.6, 0.2, { gain: 0.05 }); tone(1047, 7.72, 0.3, { gain: 0.045 })
  },
  // three processing ticks, a match chime, then a two-note alert for the discrepancy
  reconcile: () => {
    [0, 0.14, 0.28].forEach((a) => tone(2200, a, 0.03, { gain: 0.035 }))
    tone(880, 0.55, 0.22, { gain: 0.06 }); tone(1320, 0.66, 0.3, { gain: 0.05 })
    tone(660, 1.15, 0.18, { type: 'triangle', gain: 0.08 }); tone(440, 1.33, 0.32, { type: 'triangle', gain: 0.08 })
  },
  focus: () => { tone(523, 0, 0.14, { gain: 0.05 }); tone(784, 0.09, 0.22, { gain: 0.05 }) },
  duplicate: () => { tone(196, 0, 0.13, { type: 'square', gain: 0.03 }); tone(196, 0.2, 0.13, { type: 'square', gain: 0.03 }) },
  send: () => { noise(0, 0.3, 600, 3200, 0.04); tone(420, 0.02, 0.28, { gain: 0.06, to: 980 }) },
  done: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.35, { gain: 0.05 })),
}

export function play(name: keyof typeof SOUNDS) {
  if (muted || !ctx) return
  if (ctx.state === 'suspended') void ctx.resume()
  if (name === 'click') out = ctx.destination
  else {
    bus?.disconnect()
    bus = ctx.createGain()
    bus.connect(ctx.destination)
    out = bus
  }
  SOUNDS[name]()
}
