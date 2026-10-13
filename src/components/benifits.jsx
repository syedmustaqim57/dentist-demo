import { BENEFITS } from '../data'
import { Reveal } from './ui'

export default function Benefits() {
  return (
    <section aria-label="Highlights" className="py-14">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, text }) => (
          <Reveal key={title}>
            <div className="h-full rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(20,40,75,.25)] transition duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
