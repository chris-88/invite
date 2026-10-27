import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Moon, PizzaSlice, Sparkle, Star } from '@/components/Doodles'
import { cn } from '@/lib/utils'

const steps = [
  {
    emoji: '🎮',
    title: 'Games & Giggles',
    text: 'Games, challenges and probably a little chaos!',
    card: 'bg-bubblegum text-white rotate-1',
    badge: 'bg-butter text-plum',
    decoration: (
      <>
        <Sparkle className="absolute right-4 top-4 w-7 text-butter animate-twinkle" />
        <Sparkle className="absolute right-14 top-12 w-4 text-white animate-twinkle" style={{ animationDelay: '.7s' }} />
        <Sparkle className="absolute bottom-5 right-8 w-5 text-lavender animate-twinkle" style={{ animationDelay: '1.3s' }} />
      </>
    ),
  },
  {
    emoji: '🍕',
    title: 'Pizza Party',
    text: "We're kicking things off with plenty of pizza!",
    card: 'bg-butter text-plum -rotate-1',
    badge: 'bg-plum text-butter',
    decoration: <PizzaSlice className="absolute -bottom-5 -right-4 w-28 rotate-12 opacity-80" />,
  },
  {
    emoji: '🎬',
    title: 'Movie Night',
    text: 'Films, popcorn, blankets and all the cosy movie-night essentials.',
    card: 'bg-plum text-cream rotate-1',
    badge: 'bg-bubblegum text-white',
    decoration: (
      <>
        <div aria-hidden className="absolute inset-x-0 top-0 flex h-3 justify-around bg-plum-deep">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mt-0.5 h-2 w-3 rounded-sm bg-cream/80" />
          ))}
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-3 justify-around bg-plum-deep">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mt-0.5 h-2 w-3 rounded-sm bg-cream/80" />
          ))}
        </div>
      </>
    ),
  },
  {
    emoji: '🌙',
    title: 'The Sleepover',
    text: 'Pyjamas, midnight chats (hopefully not too late!) and a big sleepover.',
    card: 'bg-lavender text-plum -rotate-1',
    badge: 'bg-plum text-lavender',
    decoration: (
      <>
        <Moon className="absolute -right-3 -top-3 w-20 opacity-90" />
        <Star className="absolute bottom-4 right-24 w-4 text-plum/50 animate-twinkle" />
        <Star className="absolute bottom-10 right-8 w-3 text-plum/40 animate-twinkle" style={{ animationDelay: '1s' }} />
      </>
    ),
  },
]

export function PartyPlan() {
  return (
    <section id="plan" className="scroll-mt-6 bg-cream px-5 py-20" aria-labelledby="plan-title">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading eyebrow="The plan" title="Here's how the night goes" />
        </Reveal>

        <ol className="grid gap-5 sm:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <article
                className={cn(
                  'relative overflow-hidden rounded-3xl p-6 pb-7 shadow-soft transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]',
                  step.card,
                )}
              >
                {step.decoration}
                <div className="relative">
                  <span
                    className={cn(
                      'mb-4 inline-flex size-9 items-center justify-center rounded-full font-display text-sm font-bold',
                      step.badge,
                    )}
                    aria-label={`Step ${i + 1}`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    <span aria-hidden className="mr-2">
                      {step.emoji}
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[26ch] text-base font-semibold leading-snug opacity-90">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
