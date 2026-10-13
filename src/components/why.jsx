import { WHY } from '../data'
import { Reveal, SectionHeading } from './ui'

export default function Why() {
  return (
    <section id="why" className="bg-brand-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHeading title="Why Patients Choose DentoCare" /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {WHY.map(({ icon: Icon, title, text }) => (
            <Reveal key={title}>
              <div className="flex h-full gap-5 rounded-3xl border border-brand/10 bg-white p-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white"><Icon className="h-7 w-7" /></div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-mute">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
