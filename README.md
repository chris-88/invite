# Harlyn's Birthday Bash 🎉

A small, mobile-first invitation site for Harlyn's birthday party, shared privately with parents over WhatsApp.

**Live:** https://invite.chrisquinn.ie

Built with Vite, React, TypeScript and Tailwind CSS. Static, no backend, no analytics, nothing collected.

## Before you send the link

All party details live in one file: [`src/config/party.ts`](src/config/party.ts).

Fill in:

| Field | Example | Notes |
| --- | --- | --- |
| `startTime` | `"17:30"` | 24-hour `HH:MM` |
| `collectionTime` | `"10:00"` | 24-hour `HH:MM` |
| `address.line1` | `"12 Example Road"` | House number and street |
| `address.line2` | `"Rathmines, Dublin 6"` | Optional area / town |
| `address.eircode` | `"D06 X1Y2"` | |
| `rsvpPhone` | `"353871234567"` | Your WhatsApp number, digits only, international format |

Then run the check:

```sh
pnpm validate
```

It fails loudly if anything required is still blank or looks malformed. Until the details are filled in, the page shows friendly "to be confirmed" copy instead of broken links, and the WhatsApp button opens a contact picker instead of a direct chat.

## Local development

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # type-check + production build into dist/
pnpm preview    # serve the production build locally
pnpm lint       # oxlint
```

Requires Node 24+ and pnpm.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which lints, builds and publishes `dist/` to GitHub Pages. You can also trigger it manually from the Actions tab.

The custom domain is handled by:

- `public/CNAME` containing `invite.chrisquinn.ie` (copied into `dist/` on every build, so Pages never forgets the domain).
- `base: '/'` in `vite.config.ts`, since the site lives at the root of the domain.
- The DNS `CNAME` record for `invite.chrisquinn.ie` pointing at `chris-88.github.io` (already in place, no change needed).
- "Enforce HTTPS" switched on in the repo's Pages settings.

The site is a single page with no client-side routes, so refresh and direct navigation work without any 404 tricks.

## Sharing on WhatsApp

Paste https://invite.chrisquinn.ie into a chat and WhatsApp renders the preview card from the Open Graph tags in `index.html` and `public/og-image.png`.

WhatsApp caches previews aggressively. If you change the preview image or text after someone has already seen the link, add a harmless query string (for example `?v=2`) to bust the cache.

To regenerate the preview image, the source SVG was drawn by hand and rasterised with `rsvg-convert` at 1200×630, then quantised to keep it under WhatsApp's ~300KB preview limit.

## Privacy notes

- The address and Eircode are only on the page itself, never in the social preview or metadata.
- `noindex, nofollow` is set and there is no analytics or tracking.
- Nothing is stored: the child's name typed into the RSVP box only goes into the WhatsApp message on the parent's own phone.
- The site is unlisted, not access-controlled. Anyone with the link can see the address, so share it only with the families you're inviting.

## Project structure

```
.github/workflows/deploy.yml   GitHub Pages deployment
public/                        CNAME, favicon, social preview image
scripts/validate.ts            Pre-send config check (pnpm validate)
src/config/party.ts            All editable party details
src/components/                Hero, PartyPlan, EventDetails, PackingList, RSVP, Footer
src/components/Doodles.tsx     Inline SVG illustrations
src/components/ui/button.tsx   shadcn-style button variants
src/lib/utils.ts               Date/time formatting, WhatsApp and Maps links
src/lib/confetti.ts            Confetti bursts (respects reduced motion)
```
