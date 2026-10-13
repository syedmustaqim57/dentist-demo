import { useEffect, useRef, useState } from 'react'
import { Smile } from 'lucide-react'

export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

// Image with graceful fallback: if a URL fails to load, a soft blue tile keeps the layout intact.
export function Img({ src, alt, className = '', eager = false }) {
  const [bad, setBad] = useState(false)
  if (bad) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gradient-to-br from-brand-soft to-white text-brand ${className}`}>
        <Smile className="h-10 w-10" aria-hidden="true" />
      </div>
    )
  }
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} className={`object-cover ${className}`} />
}

export function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition duration-200 active:scale-[.98] '
  const styles = {
    primary: 'bg-brand text-white shadow-[0_8px_20px_-8px_rgba(29,111,216,.7)] hover:-translate-y-0.5 hover:bg-brand-dark',
    white: 'bg-white text-brand-dark hover:-translate-y-0.5 hover:bg-brand-soft',
    outline: 'border border-brand/20 bg-white text-ink hover:border-brand hover:bg-brand-mist',
  }[variant]
  const cls = base + styles + ' ' + className
  return href
    ? <a href={href} className={cls} {...rest}>{children}</a>
    : <button type="button" className={cls} {...rest}>{children}</button>
}

export function SectionHeading({ title, sub }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ink-mute">{sub}</p>}
    </div>
  )
}

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 text-xl font-extrabold text-ink">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white"><Smile className="h-5 w-5" aria-hidden="true" /></span>
      DentoCare
    </a>
  )
}
