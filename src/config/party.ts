/**
 * Every editable party detail lives here.
 *
 * Fill in the empty strings before sending the link. Run `pnpm validate`
 * to check nothing required is missing. Anything left blank renders as a
 * friendly "to be confirmed" on the page rather than a broken link.
 */

export interface PartyConfig {
  /** First name only. Shown on the page and in the WhatsApp messages. */
  birthdayGirl: string
  title: string
  theme: string
  /** ISO date, e.g. "2026-10-30" */
  date: string
  /** 24-hour "HH:MM", e.g. "17:30". Leave "" until confirmed. */
  startTime: string
  /** ISO date for pick-up the next morning. */
  collectionDate: string
  /** 24-hour "HH:MM", e.g. "10:00". Leave "" until confirmed. */
  collectionTime: string
  address: {
    /** House number and street */
    line1: string
    /** Area / town, e.g. "Rathmines, Dublin 6" */
    line2: string
    /** Eircode, e.g. "D06 X1Y2" */
    eircode: string
  }
  /** WhatsApp number in international format, e.g. "353871234567" or "+353 87 123 4567" */
  rsvpPhone: string
  /** Who the RSVP message is addressed to. */
  parentName: string
}

export const party = {
  birthdayGirl: 'Harlyn',
  title: "Harlyn's Birthday Party!",
  theme: 'Pizza, Movies, Games & Sleepover',
  date: '2026-10-30',
  startTime: '17:00',
  collectionDate: '2026-10-31',
  collectionTime: '10:00',
  address: {
    line1: '22 Greenville Terrace',
    line2: 'South Circular Road',
    eircode: 'D08 T6C9',
  },
  rsvpPhone: '+353876968718',
  parentName: 'Chris',
} satisfies PartyConfig

/** Fields that must be filled in before the invitation is sent to parents. */
export const requiredFields = [
  'startTime',
  'collectionTime',
  'address.line1',
  'address.eircode',
  'rsvpPhone',
] as const

/** Returns the names of required fields that are still blank. */
export function missingFields(config: PartyConfig = party): string[] {
  return requiredFields.filter((path) => {
    const value = path
      .split('.')
      .reduce<unknown>((obj, key) => (obj as Record<string, unknown>)?.[key], config)
    return typeof value !== 'string' || value.trim() === ''
  })
}
