import { useEffect, useState } from 'react'

const SEEN = 'movago.intro.seen'

// Plays once when the site is first opened in a tab: MOVAGO splits into MOV·A·GO, grows into MOVE·AI·GO,
// shows the slogan, then lifts away. Hash navigation inside the app never replays it; add ?intro to the URL to force it.
function shouldPlay() {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false
  if (new URLSearchParams(window.location.search).has('intro')) return true
  try { return sessionStorage.getItem(SEEN) !== '1' } catch { return true }
}

export default function Intro() {
  const [show, setShow] = useState(shouldPlay)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!show) return
    try { sessionStorage.setItem(SEEN, '1') } catch { /* private mode */ }
    document.documentElement.style.overflow = 'hidden'
    const skip = (e: KeyboardEvent) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') setLeaving(true) }
    window.addEventListener('keydown', skip)
    return () => { window.removeEventListener('keydown', skip); document.documentElement.style.overflow = '' }
  }, [show])

  if (!show) return null
  const letters = (s: string, start: number) => [...s].map((ch, i) => <span key={i} className="il" style={{ animationDelay: `${(start + i) * 60}ms` }}>{ch}</span>)

  return (
    <div
      className={`intro ${leaving ? 'leaving' : ''}`}
      onClick={() => setLeaving(true)}
      onAnimationEnd={(e) => { if (e.target === e.currentTarget && (e.animationName === 'intro-out' || e.animationName === 'intro-skip')) setShow(false) }}
      aria-hidden="true"
    >
      <div className="intro-stage">
        <div className="intro-word">
          <span className="ig">{letters('MOV', 0)}<span className="add">E</span></span>
          <span className="ig">{letters('A', 3)}<span className="add">I</span></span>
          <span className="ig">{letters('GO', 4)}</span>
        </div>
        <p className="intro-slogan">Move smarter. Go safer.</p>
      </div>
      <button className="intro-skip" onClick={(e) => { e.stopPropagation(); setLeaving(true) }} tabIndex={-1}>Skip</button>
    </div>
  )
}
