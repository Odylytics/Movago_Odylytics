import { useT } from './i18n'
import { unlock } from './sound'

// Full-screen fork at the start of the demo (#/demo?choose=1): watch the story play by itself, or work the sample case by hand.
export default function DemoChoice() {
  const { t } = useT()
  return (
    <section className="choose" aria-labelledby="choose-title">
      <h1 id="choose-title" className="sr-only">{t('introDemo')}</h1>
      <a className="choose-tile primary" href="#/demo?story=1" autoFocus onClick={() => {
        // the click is the user gesture that lets the story start straight away, with sound
        unlock()
        try { sessionStorage.setItem('movago.autostart', '1') } catch { /* private mode */ }
      }}>
        <span className="choose-num" aria-hidden="true">01</span>
        <b>{t('choiceAuto')}</b>
        <span className="choose-sub">{t('choiceAutoSub')}</span>
        <span className="choose-go" aria-hidden="true">▶</span>
      </a>
      <a className="choose-tile" href="#/demo">
        <span className="choose-num" aria-hidden="true">02</span>
        <b>{t('choiceTry')}</b>
        <span className="choose-sub">{t('choiceTrySub')}</span>
        <span className="choose-go" aria-hidden="true">→</span>
      </a>
    </section>
  )
}
