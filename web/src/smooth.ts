import Lenis from 'lenis'

// Momentum scrolling like Movora's Smooth Scroll component (Lenis). Wheel and trackpad are eased; touch stays native.
// Off for prefers-reduced-motion. Nested scrollers (drawer, demo picker, mobile menu, wide tables) keep native scroll.
let lenis: Lenis | null = null
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function startSmoothScroll() {
  if (lenis || reduced()) return
  lenis = new Lenis({ autoRaf: true, lerp: 0.1, wheelMultiplier: 1, smoothWheel: true, allowNestedScroll: true })
  // The intro and the mobile menu lock the page with overflow: hidden on <html>; pause the easing meanwhile.
  const html = document.documentElement
  const sync = () => (html.style.overflow === 'hidden' ? lenis?.stop() : lenis?.start())
  new MutationObserver(sync).observe(html, { attributes: true, attributeFilter: ['style'] })
  sync()
}

/** Scroll the page to a y position, eased by Lenis when it runs. */
export function scrollToY(top: number, smooth = true) {
  if (lenis) lenis.scrollTo(top, { immediate: !smooth, force: true })
  else window.scrollTo({ top, behavior: smooth && !reduced() ? 'smooth' : 'auto' })
}

/** Scroll an element below the fixed nav, or to the middle of the screen with `center`. */
export function scrollToEl(el: Element | null, { center = false, smooth = true } = {}) {
  if (!el) return
  const r = el.getBoundingClientRect()
  const nav = document.querySelector('.nav-bar')?.getBoundingClientRect().height ?? 64
  const top = center ? window.scrollY + r.top - (window.innerHeight - r.height) / 2 : window.scrollY + r.top - nav - 16
  scrollToY(Math.max(0, top), smooth)
}
