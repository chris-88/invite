/**
 * Pre-deployment check for src/config/party.ts.
 *
 *   node scripts/validate.ts            -> prints warnings, always exits 0 (used in CI)
 *   node scripts/validate.ts --strict   -> exits 1 if anything required is blank
 *
 * Runs on plain Node 24 (type stripping), no build step needed.
 */
import { missingFields, party } from '../src/config/party.ts'

const strict = process.argv.includes('--strict')
const ci = process.env.GITHUB_ACTIONS === 'true'
const missing = missingFields(party)

const problems: string[] = missing.map((field) => `${field} is blank`)

if (party.startTime && !/^\d{1,2}:\d{2}$/.test(party.startTime)) problems.push('startTime must be 24-hour "HH:MM"')
if (party.collectionTime && !/^\d{1,2}:\d{2}$/.test(party.collectionTime))
  problems.push('collectionTime must be 24-hour "HH:MM"')
if (party.rsvpPhone && !/^\d{8,15}$/.test(party.rsvpPhone))
  problems.push('rsvpPhone must be digits only in international format, e.g. 353871234567')
if (party.address.eircode && !/^[A-Z0-9]{3}\s?[A-Z0-9]{4}$/i.test(party.address.eircode))
  problems.push('address.eircode does not look like an Eircode, e.g. "D06 X1Y2"')

if (problems.length === 0) {
  console.log('✅ Party config looks complete. Ready to send!')
  process.exit(0)
}

console.log(`${strict ? '❌' : '⚠️ '} Party config still needs attention (src/config/party.ts):`)
for (const p of problems) {
  console.log(`   • ${p}`)
  if (ci) console.log(`::warning file=src/config/party.ts::${p}`)
}
if (strict) {
  console.log('\nFill these in before sharing the link, then re-run `pnpm validate`.')
  process.exit(1)
}
console.log('\nThe page will show "to be confirmed" for these until they are filled in.')
