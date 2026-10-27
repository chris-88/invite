import { useId, useState, type MouseEvent } from 'react'
import { CalendarX } from 'lucide-react'
import { acceptMessage, declineMessage, whatsappUrl } from '@/lib/utils'
import { fireConfetti } from '@/lib/confetti'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Sparkle, Star } from '@/components/Doodles'

function WhatsAppIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.2A11.8 11.8 0 0 0 .2 17.7L0 24l6.4-1.7A11.8 11.8 0 0 0 12 23.8c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4Z" />
    </svg>
  )
}

export function RSVP() {
  const [name, setName] = useState('')
  const inputId = useId()

  function celebrate(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    fireConfetti({
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    })
  }

  return (
    <section
      id="rsvp"
      className="relative isolate scroll-mt-6 overflow-hidden bg-plum px-5 py-20 text-cream"
      aria-labelledby="rsvp-title"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-bubblegum/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lavender/30 blur-3xl" />
        <Star className="absolute left-[8%] top-[14%] w-5 text-butter animate-twinkle" />
        <Star className="absolute right-[10%] top-[22%] w-4 text-bubblegum animate-twinkle" style={{ animationDelay: '.8s' }} />
        <Sparkle className="absolute left-[14%] bottom-[14%] w-6 text-lavender animate-twinkle" style={{ animationDelay: '1.5s' }} />
        <Star className="absolute right-[16%] bottom-[10%] w-5 text-butter animate-twinkle" style={{ animationDelay: '.3s' }} />
      </div>

      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionHeading eyebrow="RSVP" title="Are you in? 🎉" light />
          <p className="-mt-4 mb-8 text-center text-lg font-semibold italic text-cream/85">Let us know if you can make it!</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
            <label htmlFor={inputId} className="block font-display text-lg font-semibold">
              Your child's first name
            </label>
            <p className="mb-3 text-sm font-semibold text-cream/70">
              Just so the message reads nicely. It only goes into your WhatsApp message, nothing is stored here.
            </p>
            <input
              id={inputId}
              type="text"
              inputMode="text"
              autoComplete="off"
              autoCapitalize="words"
              enterKeyHint="done"
              maxLength={40}
              placeholder="e.g. Harlyn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-h-14 w-full rounded-2xl border-[3px] border-transparent bg-white px-5 font-sans text-lg font-bold text-plum placeholder:font-semibold placeholder:text-plum/40 focus:border-butter focus:outline-none"
            />

            <a
              href={whatsappUrl(acceptMessage(name))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={celebrate}
              className={buttonVariants({ variant: 'butter', size: 'lg', className: 'mt-4 w-full' })}
            >
              <WhatsAppIcon className="size-6" /> RSVP on WhatsApp
            </a>

            <a
              href={whatsappUrl(declineMessage(name))}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'ghost', className: 'mt-2 w-full text-cream/80 hover:text-cream' })}
            >
              <CalendarX className="size-5" aria-hidden /> Can't make it
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
