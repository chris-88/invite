import type { CSSProperties, SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export function PizzaSlice(props: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M8 12c16-9 32-9 48 0L32 58 8 12Z" fill="#f4b23e" />
      <path d="M8 12c16-9 32-9 48 0l-2.5 4.8C39 9.5 25 9.5 10.5 16.8L8 12Z" fill="#c9782b" />
      <path d="M12.5 19c13-6 26-6 39 0L32 52 12.5 19Z" fill="#ffd166" />
      <circle cx="26" cy="26" r="4.5" fill="#e63946" />
      <circle cx="38" cy="30" r="4.5" fill="#e63946" />
      <circle cx="31" cy="40" r="4" fill="#e63946" />
      <circle cx="26" cy="26" r="1.6" fill="#b91c1c" opacity=".7" />
      <circle cx="38" cy="30" r="1.6" fill="#b91c1c" opacity=".7" />
    </svg>
  )
}

export function Popcorn(props: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="20" cy="22" r="8" fill="#fff6d6" />
      <circle cx="32" cy="16" r="9" fill="#fff6d6" />
      <circle cx="44" cy="22" r="8" fill="#fff6d6" />
      <circle cx="26" cy="27" r="6" fill="#ffe9a8" />
      <circle cx="39" cy="27" r="6" fill="#ffe9a8" />
      <path d="M12 28h40l-5 30H17l-5-30Z" fill="#fff" />
      <path d="M12 28h8l-3 30h-0L12 28Zm16 0h8l-1 30h-6l-1-30Zm16 0h8l-5 30h-0l-3-30Z" fill="#e63946" />
      <path d="M10 25h44v6H10z" fill="#e63946" />
    </svg>
  )
}

export function Star(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2.5l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.7 6.2 20l1.5-6.5-5-4.4 6.6-.6L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Sparkle(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 1c.8 6.2 4.8 10.2 11 11-6.2.8-10.2 4.8-11 11-.8-6.2-4.8-10.2-11-11C7.2 11.2 11.2 7.2 12 1Z" fill="currentColor" />
    </svg>
  )
}

export function Moon(props: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M40 6a26 26 0 1 0 18 44A22 22 0 0 1 40 6Z" fill="#ffe275" />
      <circle cx="26" cy="24" r="3" fill="#f4b23e" opacity=".7" />
      <circle cx="20" cy="40" r="4" fill="#f4b23e" opacity=".6" />
    </svg>
  )
}

export function Clapper(props: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect x="8" y="26" width="48" height="30" rx="5" fill="#3b1d5e" />
      <path d="M8 16l45-9 3 12-45 9-3-12Z" fill="#2a1244" />
      <path d="M14 15l7-1.4 4 10-7 1.4-4-10Zm14-2.8l7-1.4 4 10-7 1.4-4-10Zm14-2.8l7-1.4 4 10-7 1.4-4-10Z" fill="#fff8ec" />
      <path d="M26 35l12 6-12 6V35Z" fill="#ff6fb5" />
    </svg>
  )
}

export function Controller(props: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M18 20h28a14 14 0 0 1 13 17l-2 9a7 7 0 0 1-12 3l-4-5H23l-4 5a7 7 0 0 1-12-3l-2-9a14 14 0 0 1 13-17Z" fill="#c7b8ff" />
      <path d="M20 29h4v4h4v4h-4v4h-4v-4h-4v-4h4v-4Z" fill="#3b1d5e" />
      <circle cx="42" cy="31" r="2.6" fill="#ff6fb5" />
      <circle cx="48" cy="35" r="2.6" fill="#ffe275" />
      <circle cx="42" cy="39" r="2.6" fill="#3b1d5e" />
      <circle cx="36" cy="35" r="2.6" fill="#e8428f" />
    </svg>
  )
}

/** A string of fairy lights that drapes across the top of the hero. */
export function FairyLights({ className }: { className?: string }) {
  const bulbs = [
    { x: 60, y: 44, c: '#ff6fb5' },
    { x: 160, y: 66, c: '#ffe275' },
    { x: 260, y: 80, c: '#c7b8ff' },
    { x: 360, y: 86, c: '#ff6fb5' },
    { x: 460, y: 84, c: '#ffe275' },
    { x: 560, y: 74, c: '#c7b8ff' },
    { x: 660, y: 56, c: '#ff6fb5' },
    { x: 760, y: 36, c: '#ffe275' },
  ]
  return (
    <svg
      viewBox="0 0 820 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M-10 20C140 90 330 100 410 86S680 80 830 10" stroke="#3b1d5e" strokeWidth="2.5" fill="none" opacity=".55" />
      {bulbs.map((b, i) => (
        <g key={i} className="animate-twinkle" style={{ animationDelay: `${i * 0.35}s`, transformOrigin: `${b.x}px ${b.y}px` } as CSSProperties}>
          <line x1={b.x} y1={b.y - 10} x2={b.x} y2={b.y} stroke="#3b1d5e" strokeWidth="2.5" />
          <circle cx={b.x} cy={b.y + 7} r="12" fill={b.c} opacity=".35" />
          <circle cx={b.x} cy={b.y + 7} r="7" fill={b.c} />
        </g>
      ))}
    </svg>
  )
}

/** Cosy movie-night scene: a screen, cushions, popcorn and a blanket. */
export function CosyScene(props: Props) {
  return (
    <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" {...props}>
      {/* rug */}
      <ellipse cx="160" cy="160" rx="150" ry="18" fill="#c7b8ff" opacity=".5" />
      {/* screen */}
      <rect x="86" y="22" width="148" height="96" rx="14" fill="#3b1d5e" />
      <rect x="94" y="30" width="132" height="80" rx="9" fill="#2a1244" />
      <path d="M152 58l24 13-24 13V58Z" fill="#ff6fb5" />
      <circle cx="112" cy="44" r="2.5" fill="#ffe275" className="animate-twinkle" style={{ transformOrigin: '112px 44px' }} />
      <circle cx="206" cy="50" r="2" fill="#ffe275" className="animate-twinkle" style={{ animationDelay: '.8s', transformOrigin: '206px 50px' }} />
      <circle cx="124" cy="94" r="2" fill="#c7b8ff" className="animate-twinkle" style={{ animationDelay: '1.4s', transformOrigin: '124px 94px' }} />
      <rect x="146" y="118" width="28" height="10" rx="3" fill="#2a1244" />
      <rect x="126" y="126" width="68" height="7" rx="3.5" fill="#3b1d5e" />
      {/* cushions */}
      <rect x="22" y="112" width="60" height="44" rx="14" fill="#ff6fb5" transform="rotate(-8 52 134)" />
      <rect x="236" y="110" width="62" height="44" rx="14" fill="#ffe275" transform="rotate(7 267 132)" />
      {/* blanket */}
      <path d="M42 150c40-14 80-14 118 0 42 14 80 14 118 0v22H42v-22Z" fill="#c7b8ff" />
      <path d="M42 158c40-10 80-10 118 0 42 10 80 10 118 0" stroke="#fff8ec" strokeWidth="3" strokeDasharray="8 8" />
      {/* popcorn bucket */}
      <g transform="translate(196 118) scale(.62)">
        <circle cx="20" cy="22" r="8" fill="#fff6d6" />
        <circle cx="32" cy="16" r="9" fill="#fff6d6" />
        <circle cx="44" cy="22" r="8" fill="#fff6d6" />
        <path d="M12 28h40l-5 30H17l-5-30Z" fill="#fff" />
        <path d="M12 28h8l-3 30L12 28Zm16 0h8l-1 30h-6l-1-30Zm16 0h8l-5 30-3-30Z" fill="#e63946" />
        <path d="M10 25h44v6H10z" fill="#e63946" />
      </g>
      {/* pizza slice */}
      <g transform="translate(66 108) rotate(-20) scale(.6)">
        <path d="M8 12c16-9 32-9 48 0L32 58 8 12Z" fill="#f4b23e" />
        <path d="M12.5 19c13-6 26-6 39 0L32 52 12.5 19Z" fill="#ffd166" />
        <circle cx="26" cy="26" r="4.5" fill="#e63946" />
        <circle cx="38" cy="30" r="4.5" fill="#e63946" />
        <circle cx="31" cy="40" r="4" fill="#e63946" />
      </g>
    </svg>
  )
}
