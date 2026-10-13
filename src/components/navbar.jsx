import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'
import { Button, Logo } from './ui'

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur transition-shadow ${scrolled ? 'border-brand/10 shadow-sm' : 'border-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map(([t, h]) => (
            <li key={t}><a href={h} className="text-[15px] font-medium text-ink-mute transition hover:text-brand">{t}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button onClick={onBook} className="hidden !py-2.5 sm:inline-flex">Book an Appointment</Button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/15 lg:hidden"
            aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-nav" className="animate-pop border-t border-brand/10 bg-white px-5 pb-5 lg:hidden">
          <ul className="py-2">
            {NAV.map(([t, h]) => (
              <li key={t}><a href={h} onClick={() => setOpen(false)} className="block border-b border-brand/5 py-3 text-base font-medium">{t}</a></li>
            ))}
          </ul>
          <Button onClick={() => { setOpen(false); onBook() }} className="mt-3 w-full">Book an Appointment</Button>
        </div>
      )}
    </header>
  )
}
