import { useEffect } from 'react'
import { Hero } from '@/components/Hero'
import { PartyPlan } from '@/components/PartyPlan'
import { EventDetails } from '@/components/EventDetails'
import { PackingList } from '@/components/PackingList'
import { RSVP } from '@/components/RSVP'
import { Footer } from '@/components/Footer'
import { fireWelcomeConfetti } from '@/lib/confetti'

export default function App() {
  useEffect(() => {
    // A little welcome burst once the hero has painted.
    const id = window.setTimeout(fireWelcomeConfetti, 650)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <main className="min-h-dvh">
      <Hero />
      <PartyPlan />
      <EventDetails />
      <PackingList />
      <RSVP />
      <Footer />
    </main>
  )
}
