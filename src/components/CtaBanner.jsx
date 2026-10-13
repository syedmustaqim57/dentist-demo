import { IMAGES } from '../data'
import { Button, Img, Reveal } from './ui'

export default function CtaBanner({ onBook }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid items-center overflow-hidden rounded-[2rem] bg-brand text-white lg:grid-cols-2">
            <div className="px-7 py-12 sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Take Care of Your Smile?</h2>
              <p className="mt-4 max-w-md text-lg text-white/90">Schedule your next dental visit and take the first step toward healthier teeth and gums.</p>
              <Button variant="white" onClick={onBook} className="mt-8">Book an Appointment</Button>
            </div>
            <Img src={IMAGES.cta} alt="Dentist preparing for a patient visit" className="h-64 w-full lg:h-full lg:min-h-[340px]" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
