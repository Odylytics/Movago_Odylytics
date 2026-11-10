import { useEffect, useState } from 'react'
import { Mark } from './App'

// Mount on every page load so a browser refresh always replays the intro.
// Hash navigation does not remount App, so it will not interrupt the user mid-session.
export default function Intro() {
  const [show, setShow] = useState(
    () => !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    const skip = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') setLeaving(true)
    }
    window.addEventListener('keydown', skip)
    return () => {
      window.removeEventListener('keydown', skip)
      document.documentElement.style.overflow = ''
    }
  }, [show])

  if (!show) return null

  return (
    <div
      className={`intro ${leaving ? 'leaving' : ''}`}
      onClick={() => setLeaving(true)}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && (event.animationName === 'intro-drop' || event.animationName === 'intro-skip')) setShow(false)
      }}
      aria-hidden="true"
    >
      <div className="intro-stage">
        <div className="intro-brand">
          <Mark className="intro-mark" />

          <div className="intro-word-wrap">
            <div className="intro-word" aria-label="MOVE AI GO">
              <span className="intro-group"><span>MOV</span><span className="intro-add">E</span></span>
              <span className="intro-group"><span>A</span><span className="intro-add">I</span></span>
              <span className="intro-group">GO</span>
            </div>
          </div>
        </div>
        <p className="intro-slogan">Move smarter. Go safer.</p>
      </div>

      <button className="intro-skip" onClick={(event) => { event.stopPropagation(); setLeaving(true) }} tabIndex={-1}>
        Skip
      </button>
    </div>
  )
}
