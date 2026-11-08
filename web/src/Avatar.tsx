import { createAvatar } from '@dicebear/core'
import { notionists } from '@dicebear/collection'
import { useMemo } from 'react'
import type { Persona } from './story'

// Illustrations: Notionists by Zoish (CC0), rendered with DiceBear.
export default function Avatar({ p, size = 40, className = '' }: { p: Persona; size?: number; className?: string }) {
  const src = useMemo(
    () => createAvatar(notionists, { seed: p.name, backgroundColor: [p.tone === 'navy' ? 'cfe0ff' : p.tone === 'blue' ? 'dbe8ff' : 'eaf2ff'] }).toDataUri(),
    [p.name, p.tone],
  )
  return <img className={`avatar ${className}`} src={src} width={size} height={size} alt="" />
}
