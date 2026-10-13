import { Check } from 'lucide-react'
import { IMAGES } from '../data'
import { Button, Img } from './ui'

const TRUST = ['Gentle, Personalized Care', 'Modern Dental Technology', 'Comprehensive Dental Services']

export default function Hero({ onBook }) {
  return (
    <section id="home" className="overflow-hidden bg-gradient-to-b from-brand-mist to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">A Healthier Smile Starts Here</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-mute sm:text-xl">
            Modern dental care designed around your comfort, confidence, and long-term oral health.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={onBook}>Book an Appointment</Button>
            <Button href="#services" variant="outline">Explore Services</Button>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm font-semibold">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Check className="h-3 w-3" /></span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-brand-soft" aria-hidden="true" />
          <Img eager src={IMAGES.hero} alt="Friendly dentist with a smiling patient" className="relative h-[340px] w-full rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(20,40,75,.35)] sm:h-[480px]" />
        </div>
      </div>
    </section>
  )
}
