import { useEffect, useState } from 'react'
import { LangContext, useT, type Lang } from './i18n'
import Business from './Business'
import DemoChoice from './DemoChoice'
import Footer from './Footer'
import Intro from './Intro'
import Landing from './Landing'
import RateBuilder from './RateBuilder'
import Workspace from './Workspace'
import { ArrowBtn, Glyph } from './ui'

const store = {
  get: (k: string) => { try { return localStorage.getItem(k) } catch { return null } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v) } catch { /* private mode */ } },
}
export { store }

type Theme = 'dark' | 'light'

// Hash routes (#/, #/demo, #/demo?story=1) so the static build works on any host without rewrites.
function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => { setHash(window.location.hash); if (!window.location.hash.includes('#how')) window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash
}

export function Mark({ className = 'brand-mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0B1F44" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="rgba(234,242,255,0.18)" />
      <path d="M8 21l6-10 4 6 2-3 4 7" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 9h4v4" fill="none" stroke="#2878FF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const L = {
  how: { en: 'How it works', vi: 'Cách hoạt động' },
  menu: { en: 'Menu', vi: 'Menu' },
  closeMenu: { en: 'Close menu', vi: 'Đóng menu' },
  toLight: { en: 'Switch to light theme', vi: 'Chuyển sang giao diện sáng' },
  toDark: { en: 'Switch to dark theme', vi: 'Chuyển sang giao diện tối' },
  skip: { en: 'Skip to content', vi: 'Bỏ qua tới nội dung' },
}

function LangSwitch() {
  return (
    <LangContext.Consumer>
      {({ lang, setLang }) => (
        <div className="lang" role="group" aria-label="Language">
          <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          <button aria-pressed={lang === 'vi'} onClick={() => setLang('vi')}>VI</button>
        </div>
      )}
    </LangContext.Consumer>
  )
}

function ThemeSwitch({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  const { lang } = useT()
  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  const label = theme === 'dark' ? L.toLight[lang] : L.toDark[lang]
  return (
    <button className="icon-btn theme-btn" onClick={() => setTheme(next)} aria-label={label} title={label}>
      <Glyph name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}

function Nav({ path, theme, setTheme }: { path: string; theme: Theme; setTheme: (t: Theme) => void }) {
  const { t, lang } = useT()
  const [open, setOpen] = useState(false)
  useEffect(() => { setOpen(false) }, [path])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.documentElement.style.overflow = '' }
  }, [open])

  const links = [
    { href: '#/#how', label: L.how[lang], current: false },
    { href: '#/business', label: t('navBiz'), current: path.startsWith('/business') },
    { href: '#/rates', label: t('navRates'), current: path.startsWith('/rates') },
  ]

  return (
    <header className="nav-bar">
      <a className="skip" href="#content" onClick={(e) => { e.preventDefault(); document.getElementById('content')?.focus() }}>{L.skip[lang]}</a>
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#/" aria-label="Movago"><Mark /><span className="brand-word">MovaGo</span></a>
        <div className="nav-right">
          <div className="nav-links">
            {links.map((l) => <a key={l.href} href={l.href} aria-current={l.current ? 'page' : undefined}>{l.label}</a>)}
          </div>
          <div className="nav-tools">
            <LangSwitch />
            <ThemeSwitch theme={theme} setTheme={setTheme} />
            <ArrowBtn href="#/demo?choose=1">{t('navDemo')}</ArrowBtn>
            <button className="icon-btn burger" aria-expanded={open} aria-controls="menu-sheet" aria-label={open ? L.closeMenu[lang] : L.menu[lang]} onClick={() => setOpen(!open)}>
              <Glyph name={open ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="menu-sheet" id="menu-sheet">
          {links.map((l) => <a key={l.href} className="m-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a className="m-link" href="#/demo?choose=1" onClick={() => setOpen(false)}>{t('navDemo')}</a>
          <div className="menu-tools"><LangSwitch /><ThemeSwitch theme={theme} setTheme={setTheme} /></div>
        </div>
      )}
    </header>
  )
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(() => (store.get('movago.lang') === 'vi' ? 'vi' : 'en'))
  const setLang = (l: Lang) => { setLangState(l); store.set('movago.lang', l) }
  useEffect(() => { document.documentElement.lang = lang }, [lang])

  // dark by default (DEMO_DESIGN_RULES.md); index.html applies the stored choice before first paint
  const [theme, setThemeState] = useState<Theme>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'))
  const setTheme = (next: Theme) => { setThemeState(next); store.set('movago.theme', next) }
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071431' : '#EAF2FF')
  }, [theme])

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
      <Nav path={path} theme={theme} setTheme={setTheme} />
      <main id="content" tabIndex={-1} style={{ outline: 'none' }}>{isDemo ? <><Workspace key={String(story)} story={story} />{choose && <DemoChoice />}</> : isBiz ? <Business /> : isRates ? <RateBuilder /> : <Landing />}</main>
      {!isDemo && <Footer />}
    </LangContext.Provider>
  )
}
