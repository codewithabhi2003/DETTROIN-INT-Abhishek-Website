import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    eyebrow: 'Science Fest',
    title: 'Synapse 2026',
    body: 'Students showcase innovation, teamwork and scientific thinking through exciting challenges and collaborative events.',
    cta: { label: 'About us', to: '/about' },
    image:
      'https://static.vasantvalley.org/wp-content/uploads/2026/07/25095948/synapse_2026_7.jpeg',
    imageAlt: 'Students participating in Synapse 2026',
  },
  {
    eyebrow: 'Innovation & Discovery',
    title: 'Learning Beyond the Classroom',
    body: 'Hands-on experiences encourage curiosity, creativity and problem-solving while students learn through exploration.',
    cta: { label: 'About us', to: '/about' },
    image:
      'https://static.vasantvalley.org/wp-content/uploads/2026/07/25095940/synapse_2026_4.jpeg',
    imageAlt: 'Students participating in Synapse activities',
  },
  {
    eyebrow: 'Model United Nations',
    title: '23rd Laissez Faire',
    body: 'Delegates from schools across the country gather to debate, negotiate and develop leadership through meaningful dialogue.',
    cta: { label: 'About us', to: '/about' },
    image:
      'https://static.vasantvalley.org/wp-content/uploads/2026/07/20114506/laissez_faire_2026_7-1.jpeg',
    imageAlt: 'Students participating in Laissez Faire 2026',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 1500)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const goTo = (i) => {
    setActive(i)
    startTimer()
  }

  const slide = slides[active]

  return (
    <section
      aria-label="Featured stories"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-ink)' }}
    >
      <div className="relative h-130 md:h-160 w-full">
        {/* Real photography */}
        <img
          src={slide.image}
          alt={slide.imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Gradient scrim */}
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
          <p
            className="body-l max-w-lg mt-5"
            style={{ color: 'var(--color-white)', opacity: 0.85 }}
          >
            {slide.body}
          </p>
          <a
            href={slide.cta.to}
            className="btn-primary w-fit mt-8 inline-flex items-center gap-2"
          >
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
            aria-current={i === active ? 'true' : undefined}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 22 : 8,
              height: 8,
              backgroundColor:
                i === active ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  )
}