import confetti from 'canvas-confetti'
import { prefersReducedMotion } from '@/lib/utils'

const colors = ['#ff6fb5', '#c7b8ff', '#ffe275', '#3b1d5e', '#ffffff']

/** A short, cheerful burst. Skipped entirely when the user prefers reduced motion. */
export function fireConfetti(origin: { x: number; y: number } = { x: 0.5, y: 0.6 }) {
  if (prefersReducedMotion()) return
  confetti({
    particleCount: 90,
    spread: 75,
    startVelocity: 38,
    gravity: 0.9,
    scalar: 1.05,
    ticks: 220,
    origin,
    colors,
    disableForReducedMotion: true,
  })
  confetti({
    particleCount: 40,
    spread: 110,
    startVelocity: 25,
    decay: 0.92,
    scalar: 0.8,
    ticks: 200,
    origin,
    colors,
    shapes: ['circle'],
    disableForReducedMotion: true,
  })
}

/** Two side cannons for the big moment on first load. */
export function fireWelcomeConfetti() {
  if (prefersReducedMotion()) return
  const common = { particleCount: 60, spread: 60, startVelocity: 45, ticks: 260, colors, disableForReducedMotion: true }
  confetti({ ...common, angle: 60, origin: { x: 0, y: 0.75 } })
  confetti({ ...common, angle: 120, origin: { x: 1, y: 0.75 } })
}
