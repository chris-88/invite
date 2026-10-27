import { useState } from 'react'
import { Check, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

const items: { emoji: string; label: string; note?: string }[] = [
  { emoji: '🩷', label: 'Pyjamas' },
  { emoji: '🛏️', label: 'Blanket' },
  { emoji: '🛋️', label: 'Pillow' },
  { emoji: '🪥', label: 'Toothbrush' },
  { emoji: '⚡', label: 'Plenty of energy' },
]

export function PackingList() {
  const [packed, setPacked] = useState<Set<string>>(() => new Set())

  function toggle(label: string) {
    setPacked((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  const allPacked = packed.size === items.length

  return (
    <section id="bring" className="scroll-mt-6 bg-cream px-5 py-20" aria-labelledby="bring-title">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading eyebrow="Packing list" title="What to bring" />
        </Reveal>

        <Reveal delay={80}>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Things to pack. Tap to tick off.">
            {items.map(({ emoji, label, note }, i) => {
              const done = packed.has(label)
              return (
                <li key={label} className={cn(i % 2 ? 'sm:rotate-[0.6deg]' : 'sm:-rotate-[0.6deg]')}>
                  <button
                    type="button"
                    onClick={() => toggle(label)}
                    aria-pressed={done}
                    className={cn(
                      'flex min-h-16 w-full items-center gap-4 rounded-2xl border-[3px] px-4 py-3 text-left font-bold transition-all duration-200',
                      'active:scale-[0.98]',
                      done
                        ? 'border-bubblegum bg-bubblegum/10 text-plum/60'
                        : 'border-plum/10 bg-white text-plum shadow-soft hover:border-lavender',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-8 shrink-0 items-center justify-center rounded-lg border-[3px] transition-colors',
                        done ? 'border-bubblegum bg-bubblegum text-white' : 'border-plum/20 bg-cream',
                      )}
                      aria-hidden
                    >
                      {done && <Check className="size-5" strokeWidth={3.5} />}
                    </span>
                    <span className={cn('text-lg', done && 'line-through decoration-2')}>
                      <span aria-hidden className="mr-2">
                        {emoji}
                      </span>
                      {label}
                      {note && <span className="ml-1.5 text-sm font-semibold text-plum/60">({note})</span>}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="mt-3 text-center text-sm font-semibold text-plum/60" aria-live="polite">
            {allPacked ? 'All packed, see you there! 🎉' : 'Tap to tick things off as you pack.'}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <aside className="mt-8 flex gap-4 rounded-3xl bg-butter-soft p-5 ring-2 ring-butter">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-butter text-plum">
              <HeartHandshake className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold">Allergies & dietary needs</h3>
              <p className="mt-1 font-semibold leading-snug text-plum/80">
                Please let us know about any allergies or dietary requirements when you RSVP so we can plan the pizza
                (and the snacks!) around everyone.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
