import { party } from '@/config/party'

export function Footer() {
  return (
    <footer className="bg-plum-deep px-5 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] pt-12 text-center text-cream">
      <p className="font-display text-2xl font-bold">Can't wait to celebrate! 💜</p>
      <p className="mt-2 text-lg font-semibold italic text-cream/80">Love, {party.birthdayGirl} x</p>
      <p className="mt-8 text-xs font-semibold text-cream/45">
        This little page is just for friends. Please keep the link between us. 🤫
      </p>
    </footer>
  )
}
