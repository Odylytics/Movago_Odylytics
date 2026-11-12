// Line art authored for Movago (replaces Movora's 3D renders, which are not reused). Stroke = currentColor, Lime = the highlighter.
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const }
const LIME = '#C8F65A'

function Lines({ x, y, w, n, gap = 12, short = [] as number[] }: { x: number; y: number; w: number; n: number; gap?: number; short?: number[] }) {
  return <>{Array.from({ length: n }, (_, i) => <path key={i} d={`M${x} ${y + i * gap}h${short.includes(i) ? w * 0.55 : w}`} {...S} opacity={0.55} />)}</>
}

/** Three sources stacked: shipment folder, rate card, invoice with the highlighted DOC line. */
export function ArtSources() {
  return (
    <svg viewBox="0 0 340 300" role="img" aria-label="Invoice, shipment file and rate card stacked, one fee line highlighted">
      <g transform="rotate(-8 120 160)">
        <path d="M40 70h70l14 14h96v170H40z" {...S} />
        <Lines x={58} y={120} w={140} n={5} gap={22} short={[2, 4]} />
      </g>
      <g transform="rotate(4 200 150)">
        <rect x="120" y="40" width="170" height="200" {...S} />
        <path d="M120 80h170M120 120h170M120 160h170M120 200h170M178 40v200M234 40v200" {...S} opacity={0.5} />
      </g>
      <g>
        <rect x="70" y="96" width="190" height="196" {...S} style={{ fill: 'var(--surface)' }} />
        <path d="M90 124h70" {...S} strokeWidth={3} />
        <Lines x={90} y={148} w={150} n={2} gap={14} short={[1]} />
        <rect x="82" y="186" width="166" height="22" fill={LIME} />
        <path d="M90 197h88M206 197h34" stroke="#0B1F44" strokeWidth={2} />
        <Lines x={90} y={230} w={150} n={3} gap={18} short={[2]} />
      </g>
    </svg>
  )
}

/** 01 · Receive: channels drop into one inbox, fingerprint checks the copy. */
export function ArtReceive() {
  return (
    <svg viewBox="0 0 280 220" role="img" aria-label="Envelope, chat and paper falling into one inbox tray, with a fingerprint">
      <rect x="22" y="26" width="58" height="38" {...S} />
      <path d="M22 26l29 22 29-22" {...S} />
      <path d="M210 24h42v28h-24l-10 8v-8h-8z" {...S} />
      <g transform="rotate(-7 140 80)">
        <rect x="104" y="30" width="62" height="84" {...S} />
        <Lines x={114} y={48} w={40} n={4} gap={12} short={[3]} />
        <rect x="110" y="96" width="50" height="10" fill={LIME} />
      </g>
      <path d="M58 76l30 40M222 66l-30 46M140 122v14" {...S} strokeDasharray="4 5" opacity={0.7} />
      <path d="M30 150l26-24h168l26 24v46H30z" {...S} />
      <path d="M30 150h62l10 16h76l10-16h62" {...S} />
      <g transform="translate(236 168)" opacity={0.95}>
        <circle r="5" {...S} /><path d="M-11 0a11 11 0 0 1 22 0M-16 4a16 16 0 0 1 32-6" {...S} />
      </g>
    </svg>
  )
}

/** 02 · Read and match: the invoice is scanned, a line is located and priced from the rate card. */
export function ArtMatch() {
  return (
    <svg viewBox="0 0 280 220" role="img" aria-label="Invoice being scanned, one line linked to a row of the rate card">
      <rect x="24" y="22" width="104" height="176" {...S} />
      <path d="M38 44h46" {...S} strokeWidth={3} />
      <Lines x={38} y={66} w={76} n={3} gap={14} short={[2]} />
      <rect x="32" y="116" width="88" height="18" fill={LIME} />
      <path d="M38 125h44M92 125h22" stroke="#0B1F44" strokeWidth={2} />
      <Lines x={38} y={152} w={76} n={3} gap={14} short={[1]} />
      <path d="M16 100h120" {...S} strokeDasharray="2 4" />
      <rect x="160" y="52" width="100" height="120" {...S} />
      <path d="M160 76h100M160 100h100M160 124h100M160 148h100M200 52v120" {...S} opacity={0.5} />
      <rect x="160" y="124" width="100" height="24" {...S} strokeWidth={2.5} />
      <path d="M120 125c18 0 22 11 40 11" {...S} />
      <path d="M154 131l6 5-6 5" {...S} />
    </svg>
  )
}

/** 03 · Evidence and decision: both sides compared, a difference flagged, then approved by a person. */
export function ArtDecide() {
  return (
    <svg viewBox="0 0 280 220" role="img" aria-label="Invoice side and approved-rate side compared, a difference flagged and a check mark">
      <rect x="18" y="30" width="108" height="92" {...S} />
      <rect x="154" y="30" width="108" height="92" {...S} />
      <path d="M32 50h40M168 50h40" {...S} strokeWidth={3} />
      <path d="M32 76h72M168 76h72" {...S} opacity={0.55} />
      <rect x="28" y="92" width="88" height="18" fill={LIME} />
      <path d="M36 101h46" stroke="#0B1F44" strokeWidth={2} />
      <path d="M168 101h46" {...S} />
      <path d="M134 70h12M134 82h12" {...S} />
      <path d="M131 64l18 24" {...S} />
      <path d="M72 122v26h68M208 122v26h-68v14" {...S} opacity={0.7} />
      <circle cx="140" cy="186" r="22" {...S} />
      <path d="M129 186l8 8 15-16" {...S} strokeWidth={2.5} />
    </svg>
  )
}
