import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { party } from '@/config/party'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Parse an ISO date (YYYY-MM-DD) at midday local time so the weekday never shifts. */
function localDate(iso: string): Date {
  return new Date(`${iso}T12:00:00`)
}

/** "Friday, 30 October 2026" */
export function formatDateLong(iso: string): string {
  return new Intl.DateTimeFormat('en-IE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(localDate(iso))
}

/** "Friday 30 October" */
export function formatDateShort(iso: string): string {
  const d = localDate(iso)
  const weekday = new Intl.DateTimeFormat('en-IE', { weekday: 'long' }).format(d)
  const dayMonth = new Intl.DateTimeFormat('en-IE', { day: 'numeric', month: 'long' }).format(d)
  return `${weekday} ${dayMonth}`
}

/** "17:30" -> "5:30pm", "10:00" -> "10am". Returns null when blank or malformed. */
export function formatTime(hhmm: string): string | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm.trim())
  if (!match) return null
  const hours = Number(match[1])
  const minutes = Number(match[2])
  if (hours > 23 || minutes > 59) return null
  const suffix = hours >= 12 ? 'pm' : 'am'
  const h12 = hours % 12 === 0 ? 12 : hours % 12
  return minutes === 0 ? `${h12}${suffix}` : `${h12}:${String(minutes).padStart(2, '0')}${suffix}`
}

export function hasAddress(): boolean {
  return party.address.line1.trim() !== ''
}

/** Address as display lines, skipping blanks. */
export function addressLines(): string[] {
  const { line1, line2, eircode } = party.address
  return [line1, line2, eircode].map((s) => s.trim()).filter(Boolean)
}

/** Single-line address for copying and for the maps query. */
export function fullAddress(): string {
  return addressLines().join(', ')
}

/** Google Maps directions deep link. Works in the Maps app on iOS/Android and in the browser. */
export function directionsUrl(): string {
  const destination = encodeURIComponent(`${fullAddress()}, Ireland`)
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

/**
 * WhatsApp "click to chat" link with a prefilled message.
 * If no number is configured, WhatsApp opens its contact picker instead,
 * so the link still works rather than breaking.
 */
export function whatsappUrl(message: string): string {
  const phone = party.rsvpPhone.replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function acceptMessage(childName: string): string {
  const who = childName.trim() || 'my child'
  return `Hi ${party.parentName}! Just confirming that ${who} would love to come to ${party.birthdayGirl}'s birthday party on ${formatDateShort(party.date)}! 🎉`
}

export function declineMessage(childName: string): string {
  const who = childName.trim() || 'we'
  return `Hi ${party.parentName}! Sadly ${who} can't make it to ${party.birthdayGirl}'s birthday party on ${formatDateShort(party.date)}, but thank you so much for the invite! 💜`
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
