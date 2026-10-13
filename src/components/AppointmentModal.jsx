import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Loader2, X } from 'lucide-react'
import { SERVICES } from '../data'
import { Button } from './ui'

const TIMES = ['Morning', 'Midday', 'Afternoon', 'Evening']
const EMPTY = { name: '', email: '', phone: '', date: '', time: '', service: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your full name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.'
  if (!v.date) e.date = 'Please choose a preferred date.'
  else if (v.date < new Date().toISOString().slice(0, 10)) e.date = 'Please choose a date that is today or later.'
  if (!v.time) e.time = 'Please choose a preferred time.'
  return e
}

export default function AppointmentModal({ onClose }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const box = useRef(null)
  const closeBtn = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    document.body.style.overflow = 'hidden'
    box.current?.querySelector('input')?.focus()
    const onKey = (ev) => {
      if (ev.key === 'Escape') onClose()
      if (ev.key === 'Tab' && box.current) {
        const f = box.current.querySelectorAll('button:not([disabled]),input,select,textarea,a[href]')
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus() }
        else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose])

  const set = (k) => (ev) => setValues((s) => ({ ...s, [k]: ev.target.value }))
  const submit = (ev) => {
    ev.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) { box.current?.querySelector('[aria-invalid="true"]')?.focus(); return }
    setStatus('loading')
    setTimeout(() => setStatus('done'), 900)
  }

  const input = 'mt-1.5 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-[15px] placeholder:text-ink-mute/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-500'
  const Field = ({ id, label, required, children }) => (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">{label}{required && <span className="text-brand" aria-hidden="true"> *</span>}</label>
      {children}
      {errors[id] && <p id={`${id}-err`} className="mt-1 text-sm text-red-600">{errors[id]}</p>}
    </div>
  )
  const a11y = (id) => ({ id, 'aria-invalid': errors[id] ? 'true' : 'false', 'aria-describedby': errors[id] ? `${id}-err` : undefined })

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 sm:items-center sm:p-5" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={box} role="dialog" aria-modal="true" aria-labelledby="appt-title" className="max-h-[92vh] w-full animate-pop overflow-y-auto rounded-t-[2rem] bg-white p-6 shadow-2xl sm:max-w-xl sm:rounded-[2rem] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="appt-title" className="text-2xl font-bold">Book an Appointment</h2>
            <p className="mt-1 text-sm text-ink-mute">Tell us what works for you and our team will follow up.</p>
          </div>
          <button ref={closeBtn} onClick={onClose} aria-label="Close" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/15 hover:bg-brand-soft"><X className="h-5 w-5" /></button>
        </div>

        {status === 'done' ? (
          <div className="animate-pop py-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand"><CheckCircle2 className="h-8 w-8" /></div>
            <p role="status" className="mx-auto mt-5 max-w-sm text-lg leading-relaxed">Thank you! Your appointment request has been received. Our team will contact you to confirm the details.</p>
            <Button onClick={onClose} className="mt-7">Close</Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2"><Field id="name" label="Full Name" required><input {...a11y('name')} value={values.name} onChange={set('name')} autoComplete="name" className={input} placeholder="Your full name" /></Field></div>
            <Field id="email" label="Email" required><input {...a11y('email')} type="email" value={values.email} onChange={set('email')} autoComplete="email" className={input} placeholder="you@example.com" /></Field>
            <Field id="phone" label="Phone" required><input {...a11y('phone')} type="tel" value={values.phone} onChange={set('phone')} autoComplete="tel" className={input} placeholder="Your phone number" /></Field>
            <Field id="date" label="Preferred Date" required><input {...a11y('date')} type="date" value={values.date} onChange={set('date')} className={input} /></Field>
            <Field id="time" label="Preferred Time" required>
              <select {...a11y('time')} value={values.time} onChange={set('time')} className={input}>
                <option value="">Select a time</option>{TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <div className="sm:col-span-2"><Field id="service" label="Service">
              <select id="service" value={values.service} onChange={set('service')} className={input}>
                <option value="">Select a service</option>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </Field></div>
            <div className="sm:col-span-2"><Field id="message" label="Additional Message">
              <textarea id="message" rows="3" value={values.message} onChange={set('message')} className={input} placeholder="Anything else we should know?" />
            </Field></div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={status === 'loading'} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark active:scale-[.99] disabled:opacity-80">
                {status === 'loading' ? <><Loader2 className="h-5 w-5 animate-spin" />Sending…</> : 'Request Appointment'}
              </button>
              <p className="mt-3 text-center text-xs text-ink-mute">Demo form. Nothing is submitted or booked.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
