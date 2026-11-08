// Pre-renders the six fictional cast avatars (Notionists by Zoish, CC0, via DiceBear) so the site ships static SVGs.
import { writeFile } from 'node:fs/promises'
import { createAvatar } from '@dicebear/core'
import * as notionists from '@dicebear/notionists'

const cast = [
  ['ha', 'Trần Thu Hà', 'cfe0ff'], ['vy', 'Hoàng Bảo Vy', 'eaf2ff'], ['bao', 'Phạm Quốc Bảo', 'dbe8ff'],
  ['khoa', 'Lê Minh Khoa', 'dbe8ff'], ['lananh', 'Nguyễn Lan Anh', 'cfe0ff'], ['an', 'Đỗ Gia An', 'eaf2ff'],
]
for (const [id, seed, bg] of cast) {
  await writeFile(new URL(`../public/avatars/${id}.svg`, import.meta.url), createAvatar(notionists, { seed, backgroundColor: [bg] }).toString())
}
console.log('wrote', cast.length, 'avatars')
