import { useEffect, useState } from 'react'
import { LangContext, useT, type Lang } from './i18n'
import Business from './Business'
import DemoChoice from './DemoChoice'
import Footer from './Footer'
import Intro from './Intro'
import Landing from './Landing'
import RateBuilder from './RateBuilder'
import Workspace from './Workspace'

const store = {
  get: (k: string) => { try { return localStorage.getItem(k) } catch { return null } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v) } catch { /* private mode */ } },
}
export { store }

// Hash routes (#/, #/demo, #/demo?story=1) so the static build works on any host without rewrites.
function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => { setHash(window.location.hash); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash
}

export function Mark({ className = 'brand-mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0B1F44" />
      <path d="M8 21l6-10 4 6 2-3 4 7" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 9h4v4" fill="none" stroke="#2878FF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Nav() {
  const { t, lang } = useT()
  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#/"><Mark />Movago</a>
        <div className="nav-links">
          <a className="link" href="#/#how">{t('navHow')}</a>
          <a className="link" href="#/business">{t('navBiz')}</a>
          <a className="link" href="#/rates">{t('navRates')}</a>
          <LangSwitch lang={lang} />
          <a className="btn small" href="#/demo?choose=1">{t('navDemo')}</a>
        </div>
      </nav>
    </div>
  )
}

function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <LangContext.Consumer>
      {({ setLang }) => (
        <div className="lang" role="group" aria-label="Language">
          <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          <button aria-pressed={lang === 'vi'} onClick={() => setLang('vi')}>VI</button>
        </div>
      )}
    </LangContext.Consumer>
  )
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(() => (store.get('movago.lang') === 'vi' ? 'vi' : 'en'))
  const setLang = (l: Lang) => { setLangState(l); store.set('movago.lang', l) }
  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const hash = useHash()
  const [path, query] = hash.replace(/^#/, '').split('?')
  const isDemo = path.startsWith('/demo')
  const isBiz = path.startsWith('/business')
  const isRates = path.startsWith('/rates')
  const story = new URLSearchParams(query ?? '').get('story') === '1'
  const choose = new URLSearchParams(query ?? '').get('choose') === '1'

  useEffect(() => {
    if (!isDemo && !isBiz && !isRates && hash.includes('#how')) document.getElementById('how')?.scrollIntoView()
  }, [hash, isDemo, isBiz, isRates])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Intro />
      <Nav />
      <main>{isDemo && choose ? <DemoChoice /> : isDemo ? <Workspace key={String(story)} story={story} /> : isBiz ? <Business /> : isRates ? <RateBuilder /> : <Landing />}</main>
      {!isDemo && <Footer />}
    </LangContext.Provider>
  )
}
