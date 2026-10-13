import { Check } from 'lucide-react'
import { IMAGES } from '../data'
import { Img, Reveal } from './ui'

const POINTS = ['Patient-first approach', 'Comfortable environment', 'Preventive care', 'Modern treatment options', 'Clear communication', 'Personalized treatment plans']

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Img src={IMAGES.about} alt="Modern, welcoming dental clinic treatment room" className="h-[340px] w-full rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(20,40,75,.35)] sm:h-[460px]" />
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Dentistry With Your Comfort in Mind</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-mute">
            We take a patient-first approach, so every visit happens in a comfortable environment where you feel heard. Our focus is on preventive care and modern treatment options, explained clearly and shaped into personalized treatment plans.
          </p>
          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {POINTS.map((t) => (
              <li key={t} className="flex items-center gap-3 text-[15px] font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-brand"><Check className="h-3.5 w-3.5" /></span>{t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
