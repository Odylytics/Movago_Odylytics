import type { Persona } from './story'

// Illustrations: Notionists by Zoish (CC0), pre-rendered with DiceBear by scripts/make-avatars.mjs.
export default function Avatar({ p, size = 40, className = '' }: { p: Persona; size?: number; className?: string }) {
  return <img className={`avatar ${className}`} src={`${import.meta.env.BASE_URL}avatars/${p.id}.svg`} width={size} height={size} alt="" />
}
