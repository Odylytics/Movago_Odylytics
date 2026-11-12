import { useEffect, useState } from 'react'
import { Mark } from './App'

// Plays on every load of the home page, then drops into the landing hero, which carries the demo and app CTAs.
// A deep link (#/demo, #/business, #/rates) opens its page directly, so judges' links and the nav's Open demo reload skip it.
const isHome = () => ['', '#', '#/'].includes(window.location.hash)

export default function Intro() {
  const [show, setShow] = useState(isHome)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    const skip = (event: KeyboardEvent) => { if (event.key === 'Escape') setLeaving(true) }
    window.addEventListener('keydown', skip)
    const done = window.setTimeout(() => setLeaving(true), 3000) // after the slogan has landed
    return () => {
      window.clearTimeout(done)
      window.removeEventListener('keydown', skip)
      document.documentElement.style.overflow = ''
    }
  }, [show])

  // animationend can be skipped (background tab, animations off), so never leave the overlay covering the page
  useEffect(() => {
    if (!leaving) return
    const id = window.setTimeout(() => setShow(false), 700)
    return () => window.clearTimeout(id)
  }, [leaving])

  if (!show) return null

  return (
    <div
      className={`intro ${leaving ? 'leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Movago"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === 'intro-skip') setShow(false)
      }}
    >
      <div className="intro-stage">
        <div className="intro-brand" aria-hidden="true">
          <Mark className="intro-mark" />
          <div className="intro-word-wrap">
            <div className="intro-word">
              <span className="intro-group"><span>MOV</span><span className="intro-add">E</span></span>
              <span className="intro-group"><span>A</span><span className="intro-add">I</span></span>
              <span className="intro-group">GO</span>
            </div>
          </div>
        </div>
        <p className="intro-slogan">Move smarter. Go safer.</p>

      </div>
    </div>
  )
}
