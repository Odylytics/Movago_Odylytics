import { useT } from './i18n'
import { T } from './ui'
import { unlock } from './sound'

// Start of the demo (#/demo?choose=1): the sample-case workspace sits dimmed behind two options.
// Option 2 drops the overlay onto that same workspace; option 1 starts the self-playing story.
export default function DemoChoice() {
  const { t } = useT()
  return (
    <section className="choose" role="dialog" aria-modal="true" aria-labelledby="choose-title">
      <h1 id="choose-title" className="choose-title"><T k="chooseTitle" /></h1>
      <div className="choose-tiles">
      <a className="choose-tile primary" href="#/demo?story=1" autoFocus onClick={() => {
        // the click is the user gesture that lets the story start straight away, with sound
        unlock()
        try { sessionStorage.setItem('movago.autostart', '1') } catch { /* private mode */ }
      }}>
        <b><T k="choiceAuto" /></b>
        <span className="choose-sub"><T k="choiceAutoSub" /></span>
        <span className="choose-go" aria-hidden="true">▶</span>
      </a>
      <a className="choose-tile" href="#/demo">
        <b><T k="choiceTry" /></b>
        <span className="choose-sub"><T k="choiceTrySub" /></span>
        <span className="choose-go" aria-hidden="true">→</span>
      </a>
      </div>
    </section>
  )
}
