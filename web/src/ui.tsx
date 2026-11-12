import { useEffect, useLayoutEffect, useRef, type MouseEvent, type ReactNode } from 'react'

// Shared Movora-style building blocks (DESIGN.md): arrow button, section badge, auto-fit wordmark, reveal on scroll.

const glyphs = {
  arrow: <path d="M4 12L12 4M6 4h6v6" />,
  right: <path d="M2 8h12M9 3l5 5-5 5" />,
  plus: <path d="M8 2v12M2 8h12" />,
  sun: <><circle cx="8" cy="8" r="3" /><path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3 3l1.1 1.1M11.9 11.9L13 13M3 13l1.1-1.1M11.9 4.1L13 3" /></>,
  moon: <path d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1z" />,
  menu: <path d="M2 4.5h12M2 8h12M2 11.5h12" />,
  close: <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />,
}
export type GlyphName = keyof typeof glyphs

export function Glyph({ name, size }: { name: GlyphName; size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter">
      {glyphs[name]}
    </svg>
  )
}

type ArrowProps = { href: string; children: ReactNode; ghost?: boolean; onClick?: (e: MouseEvent<HTMLAnchorElement>) => void; external?: boolean; className?: string }
export function ArrowBtn({ href, children, ghost, onClick, external, className = '' }: ArrowProps) {
  return (
    <a className={`abtn edge ${ghost ? 'ghost' : ''} ${className}`} href={href} onClick={onClick} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {!ghost && <span className="abtn-ico"><Glyph name="arrow" /></span>}
      <span className="abtn-label">{children}</span>
    </a>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge"><span className="badge-ico"><Glyph name="arrow" /></span>{children}</span>
}

// Sets the font size so one line of text fills its container exactly (the giant MOVAGO wordmark).
export function FitText({ text, className = '' }: { text: string; className?: string }) {
  const box = useRef<HTMLSpanElement>(null)
  const inner = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    const el = inner.current
    const parent = box.current
    if (!el || !parent) return
    const fit = () => {
      el.style.fontSize = '100px'
      const w = el.getBoundingClientRect().width
      if (w > 0) el.style.fontSize = `${Math.floor((parent.clientWidth / w) * 100 * 100) / 100}px`
    }
    fit()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null
    ro?.observe(parent)
    document.fonts?.ready.then(fit).catch(() => {})
    return () => ro?.disconnect()
  }, [text])
  return (
    <span ref={box} className={`fit ${className}`} aria-hidden="true">
      <span ref={inner}>{text}</span>
    </span>
  )
}

// Adds .in to every .reveal inside the page once it scrolls into view. Re-runs when the language changes.
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (typeof IntersectionObserver === 'undefined') { els.forEach((el) => el.classList.add('in')); return }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
