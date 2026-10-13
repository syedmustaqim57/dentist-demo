import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data'
import { Reveal, SectionHeading } from './ui'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeading title="Frequently Asked Questions" sub="General information only. Please consult a dental professional for advice about your own care." />
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQS.map(([q, a], i) => {
            const on = open === i
            return (
              <div key={q} className={`rounded-2xl border bg-white transition ${on ? 'border-brand/40 shadow-md' : 'border-brand/10'}`}>
                <h3>
                  <button id={`faq-q-${i}`} aria-expanded={on} aria-controls={`faq-a-${i}`} onClick={() => setOpen(on ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-semibold">
                    {q}
                    <ChevronDown className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${on ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`grid transition-all duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden"><p className="px-6 pb-5 leading-relaxed text-ink-mute">{a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
