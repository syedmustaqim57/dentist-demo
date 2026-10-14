import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import About from './components/About'
import Why from './components/Why'
import CtaBanner from './components/CtaBanner'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'

export default function App() {
  const [open, setOpen] = useState(false)
  const book = () => setOpen(true)
  const close = useCallback(() => setOpen(false), [])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Navbar onBook={book} />
      <main id="main">
        <Hero onBook={book} />
        <Benefits />
        <Services onBook={book} />
        <About />
        <Why />
        <CtaBanner onBook={book} />
        <Testimonials />
        <FAQ />
        <FinalCta onBook={book} />
      </main>
      <Footer />
      {open && <AppointmentModal onClose={close} />}
    </>
  )
}
