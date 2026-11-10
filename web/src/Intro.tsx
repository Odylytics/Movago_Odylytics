import { useEffect, useState } from 'react'
import { Mark } from './App'
import { useT } from './i18n'
import { unlock } from './sound'

// Plays on every load of the home page, then waits for a choice: watch the guided demo or use the site.
// A deep link (#/demo, #/business, #/rates) opens its page directly, so judges' links and the nav's Open demo reload skip it.
const isHome = () => ['', '#', '#/'].includes(window.location.hash)

export default function Intro() {
  const { t } = useT()
  const [show, setShow] = useState(isHome)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    const skip = (event: KeyboardEvent) => { if (event.key === 'Escape') setLeaving(true) }
    window.addEventListener('keydown', skip)
    return () => {
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

  const watchDemo = () => {
    // the click is the user gesture that lets the story start straight away, with sound
    unlock()
    try { sessionStorage.setItem('movago.autostart', '1') } catch { /* private mode */ }
    window.location.hash = '#/demo?story=1'
    setLeaving(true)
  }

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

        <div className="intro-choices">
          <button className="intro-choice primary" onClick={watchDemo}>
            <b>{t('introDemo')}</b>
            <span>{t('introDemoSub')}</span>
          </button>
          <button className="intro-choice" onClick={() => setLeaving(true)}>
            <b>{t('introApp')}</b>
            <span>{t('introAppSub')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
