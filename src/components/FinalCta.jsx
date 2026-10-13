import { IMAGES } from '../data'
import { Button, Img, Reveal } from './ui'

export default function FinalCta({ onBook }) {
  return (
    <section id="contact" className="pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid items-center overflow-hidden rounded-[2rem] border border-brand/10 bg-brand-soft lg:grid-cols-2">
            <Img src={IMAGES.final} alt="Smiling dental professional welcoming a patient" className="h-64 w-full lg:h-full lg:min-h-[320px]" />
            <div className="px-7 py-12 sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Smile Deserves Great Care</h2>
              <Button onClick={onBook} className="mt-8">Book an Appointment</Button>
              <p className="mt-5 text-ink-mute">Have questions? Contact our team.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
