import { Star } from 'lucide-react'
import { REVIEWS } from '../data'
import { Reveal, SectionHeading } from './ui'

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-brand-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHeading title="What Patients Can Expect" sub="Sample testimonials shown for demonstration purposes only." /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map(({ name, text }) => (
            <Reveal key={name}>
              <figure className="flex h-full flex-col rounded-3xl border border-brand/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(20,40,75,.25)]">
                <div className="flex gap-1 text-brand" role="img" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed">“{text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft font-bold text-brand">{name[0]}</span>
                  <span><span className="block font-semibold">{name}</span><span className="block text-xs text-ink-mute">Demo testimonial</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
