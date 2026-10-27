import type { CSSProperties } from 'react'
import { ArrowDown, PartyPopper } from 'lucide-react'
import { party } from '@/config/party'
import { formatDateShort } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Clapper, Controller, CosyScene, FairyLights, Moon, PizzaSlice, Popcorn, Sparkle, Star } from '@/components/Doodles'

const words = [
  { text: 'Pizza.', color: 'text-bubblegum-deep' },
  { text: 'Movies.', color: 'text-plum' },
  { text: 'Games.', color: 'text-[#8b6cf0]' },
  { text: 'Sleepover.', color: 'text-plum' },
]

function tilt(deg: number): CSSProperties {
  return { '--tilt': `${deg}deg` } as CSSProperties
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-cream" aria-labelledby="hero-title">
      {/* soft colour blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-lavender/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-bubblegum/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-butter/70 blur-3xl" />

      <FairyLights className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full sm:h-32" />

      {/* floating doodles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <PizzaSlice className="absolute left-[5%] top-[17%] w-14 animate-float sm:w-20" style={tilt(-14)} />
        <Popcorn className="absolute right-[6%] top-[15%] w-14 animate-float-slow sm:w-20" style={tilt(10)} />
        <Clapper className="absolute left-[8%] top-[60%] w-12 animate-float-slow sm:left-[12%] sm:w-16" style={tilt(8)} />
        <Controller className="absolute right-[7%] top-[62%] w-14 animate-float sm:right-[12%] sm:w-20" style={tilt(-8)} />
        <Moon className="absolute left-[16%] top-[32%] w-9 animate-float sm:w-12" style={tilt(-6)} />
        <Star className="absolute right-[22%] top-[9%] w-6 text-butter animate-twinkle" />
        <Star className="absolute left-[28%] top-[12%] w-4 text-bubblegum animate-twinkle" style={{ animationDelay: '.9s' }} />
        <Sparkle className="absolute right-[18%] top-[40%] w-6 text-lavender animate-twinkle" style={{ animationDelay: '1.6s' }} />
        <Sparkle className="absolute left-[24%] top-[76%] w-5 text-bubblegum animate-twinkle" style={{ animationDelay: '.4s' }} />
        <Star className="absolute right-[30%] top-[80%] w-5 text-butter animate-twinkle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 pb-10 pt-28 text-center sm:pt-32">
        <p className="eyebrow mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur">
          <PartyPopper className="size-4" aria-hidden /> You're invited!
        </p>

        <h1
          id="hero-title"
          className="sticker-text font-display text-[clamp(3rem,13vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-plum"
        >
          {party.birthdayGirl}'s <span className="text-bubblegum">Birthday</span> Bash!{' '}
          <span className="inline-block animate-wobble" aria-hidden>
            🎉
          </span>
        </h1>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 font-display text-xl font-semibold sm:text-2xl">
          {words.map((w) => (
            <span key={w.text} className={w.color}>
              {w.text}
            </span>
          ))}
        </p>

        <p className="mt-5 rotate-[-2deg] rounded-2xl bg-butter px-5 py-2.5 font-display text-lg font-semibold text-plum shadow-pop-sm sm:text-xl">
          {formatDateShort(party.date)}
        </p>

        <CosyScene className="mt-8 w-full max-w-xs sm:max-w-sm" />

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="#rsvp" className={buttonVariants({ variant: 'primary', size: 'lg', className: 'w-full sm:w-auto' })}>
            I'm Coming! 🎉
          </a>
          <a href="#plan" className={buttonVariants({ variant: 'outline', className: 'w-full sm:w-auto' })}>
            Party Details <ArrowDown className="size-5 animate-bob" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
