import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Logo } from './ui'

const LINKS = [['Home', '#home'], ['Services', '#services'], ['About', '#about'], ['FAQ', '#faq'], ['Contact', '#contact'], ['Privacy Policy', '#home']]
const SOCIAL = [[Facebook, 'Facebook placeholder'], [Instagram, 'Instagram placeholder'], [Youtube, 'YouTube placeholder']]

export default function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-brand-soft/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs leading-relaxed text-ink-mute">Modern dental care focused on healthier smiles and confident patients.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-3">
            {LINKS.map(([t, h]) => <li key={t}><a href={h} className="text-ink-mute transition hover:text-brand">{t}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-2 text-sm text-ink-mute">[Demo placeholder: clinic contact details appear here]</p>
          <div className="mt-4 flex gap-3">
            {SOCIAL.map(([Icon, label]) => (
              <a key={label} href="#home" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/15 bg-white text-brand transition hover:bg-brand hover:text-white">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-brand/10 px-5 py-5 text-center text-sm text-ink-mute">© DentoCare. Demo website for presentation purposes only.</div>
    </footer>
  )
}
