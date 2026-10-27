import { useEffect, useState } from 'react'
import { CalendarDays, Check, Clock, Copy, MapPin, Moon, Navigation, Sunrise } from 'lucide-react'
import { party } from '@/config/party'
import { addressLines, directionsUrl, formatDateLong, formatDateShort, formatTime, fullAddress, hasAddress } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

function CopyAddressButton() {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')

  useEffect(() => {
    if (state === 'idle') return
    const id = window.setTimeout(() => setState('idle'), 2200)
    return () => window.clearTimeout(id)
  }, [state])

  async function copy() {
    try {
      await navigator.clipboard.writeText(fullAddress())
      setState('copied')
    } catch {
      setState('failed')
    }
  }

  return (
    <Button variant="outline" onClick={copy} className="w-full sm:w-auto" aria-live="polite">
      {state === 'copied' ? (
        <>
          <Check className="size-5" aria-hidden /> Copied!
        </>
      ) : state === 'failed' ? (
        <>Long-press to copy</>
      ) : (
        <>
          <Copy className="size-5" aria-hidden /> Copy address
        </>
      )}
    </Button>
  )
}

export function EventDetails() {
  const arrival = formatTime(party.startTime)
  const collection = formatTime(party.collectionTime)

  const rows = [
    { icon: Clock, label: 'Arrival', value: arrival ?? 'Time to be confirmed', muted: !arrival },
    { icon: Moon, label: 'Sleepover', value: `${formatDateShort(party.date).split(' ')[0]} night`, muted: false },
    {
      icon: Sunrise,
      label: 'Collection',
      value: collection
        ? `${formatDateShort(party.collectionDate)} at ${collection}`
        : `${formatDateShort(party.collectionDate)}, time to be confirmed`,
      muted: !collection,
    },
  ]

  return (
    <section id="details" className="scroll-mt-6 bg-lavender-soft px-5 py-20" aria-labelledby="details-title">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading eyebrow="The important bits" title="When & Where" />
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-butter text-plum">
                <CalendarDays className="size-6" aria-hidden />
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight">{formatDateLong(party.date)}</h3>
            </div>

            <dl className="mt-6 divide-y divide-lavender-soft">
              {rows.map(({ icon: Icon, label, value, muted }) => (
                <div key={label} className="flex items-start gap-3 py-3.5">
                  <Icon className="mt-0.5 size-5 shrink-0 text-bubblegum-deep" aria-hidden />
                  <dt className="w-24 shrink-0 font-bold text-plum/70">{label}</dt>
                  <dd className={muted ? 'font-semibold italic text-plum/60' : 'font-bold'}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-5 rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-bubblegum text-white">
                <MapPin className="size-6" aria-hidden />
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight">Where</h3>
            </div>

            {hasAddress() ? (
              <>
                <address className="mt-5 text-lg font-bold not-italic leading-snug">
                  {addressLines().map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-2 text-sm font-semibold text-plum/60">Our home in Dublin</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={directionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: 'primary', className: 'w-full sm:w-auto' })}
                  >
                    <Navigation className="size-5" aria-hidden /> Get Directions
                  </a>
                  <CopyAddressButton />
                </div>
              </>
            ) : (
              <p className="mt-5 text-lg font-semibold italic leading-snug text-plum/70">
                Our home in Dublin. We'll pop the full address and Eircode on WhatsApp.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
