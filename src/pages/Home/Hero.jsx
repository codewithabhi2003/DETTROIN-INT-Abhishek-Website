import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

const slides = [
  {
    eyebrow: 'Model United Nations',
    title: '23rd Laissez Faire',
    body: 'Delegates from over 40 schools convene at Vasant Valley for three days of debate, diplomacy and dissent.',
    cta: { label: 'View gallery', to: '/campus/gallery' },
    imageAlt: 'Delegates seated at committee desks during Laissez Faire',
  },
  {
    eyebrow: 'Admissions 2027–28',
    title: 'A place is waiting',
    body: 'Applications for Pre-School, Class I and Class XI open shortly. Read the process before you begin.',
    cta: { label: 'Start admissions', to: '/admissions' },
    imageAlt: 'Students walking across the Vasant Valley campus',
  },
  {
    eyebrow: 'Since 1990',
    title: '"Excellence in Deed"',
    body: 'Thirty-five years of individualised attention, process-focused learning, and a campus built around the child.',
    cta: { label: 'Our story', to: '/about' },
    imageAlt: 'Archival photograph of the school\u2019s founding years',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => {
    clearInterval(timerRef.current)
    setActive(i)
  }

  const slide = slides[active]

  return (
    <section
      aria-label="Featured stories"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-ink)' }}
    >
      <div className="relative h-130 md:h-160 w-full">
        {/* IMAGE SLOT — replace with real photography per slide (1920×1080 min) */}
        <div
          className="absolute inset-0"
          style={PLACEHOLDER_PATTERN}
          role="img"
          aria-label={slide.imageAlt}
        >
          <div className="absolute inset-0 flex items-start justify-end p-4">
            <span className="text-micro font-medium tracking-wide" style={{ color: 'var(--color-ink-40)' }}>
              IMAGE — {slide.imageAlt}
            </span>
          </div>
        </div>

        {/* Gradient scrim so text stays legible over any photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(11,15,25,0.85) 0%, rgba(11,15,25,0.35) 45%, rgba(11,15,25,0.05) 70%)',
          }}
        />

        <div className="relative h-full section-container flex flex-col justify-end pb-20 md:pb-24">
          <span className="badge badge-gold w-fit mb-4">{slide.eyebrow}</span>
          <h1
            className="display-xl max-w-2xl"
            style={{ color: 'var(--color-white)' }}
          >
            {slide.title}
          </h1>
          <span className="gold-rule" />
          <p className="body-l max-w-lg mt-5" style={{ color: 'var(--color-white)', opacity: 0.85 }}>
            {slide.body}
          </p>
          <a href={slide.cta.to} className="btn-primary w-fit mt-8">
            {slide.cta.label} <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}: ${s.title}`}
            aria-current={i === active}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 22 : 8,
              height: 8,
              backgroundColor: i === active ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  )
}