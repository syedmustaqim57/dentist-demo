import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data'
import { Img, Reveal, SectionHeading } from './ui'

export default function Services({ onBook }) {
  return (
    <section id="services" className="bg-brand-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            title="Complete Dental Care Under One Roof"
            sub="From routine preventive care to smile-enhancing treatments, our services are designed to support your oral health at every stage."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text, img, alt }) => (
            <Reveal key={title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-[0_10px_30px_-18px_rgba(20,40,75,.25)] transition duration-300 hover:-translate-y-1 hover:border-brand/40">
                <div className="relative h-44 overflow-hidden">
                  <Img src={img} alt={alt} className="h-full w-full transition duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow"><Icon className="h-5 w-5" /></span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-mute">{text}</p>
                  <button onClick={onBook} className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
