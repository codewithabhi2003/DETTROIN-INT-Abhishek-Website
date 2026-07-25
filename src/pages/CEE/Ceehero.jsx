import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

export default function Ceehero() {
  return (
    <section aria-label="CEE hero" className="relative">
      <div
        className="relative h-80 md:h-120 w-full"
        style={PLACEHOLDER_PATTERN}
        role="img"
        aria-label="Educators collaborating in a CEE@VVS workshop session"
      >
        <div className="absolute inset-0 flex items-start justify-end p-4">
          <span
            className="text-micro font-medium tracking-wide"
            style={{ color: 'var(--color-ink-40)' }}
          >
            IMAGE — CEE workshop session
          </span>
        </div>
      </div>
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center pt-14 pb-10 md:pt-20 md:pb-14">
          <span className="badge badge-gold w-fit mx-auto mb-4">CEE@VVS</span>
          <h1 className="heading-1">Centre for Excellence in Education</h1>
          <span className="gold-rule mx-auto" />
          <p
            className="body-m mt-5"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            Born out of thirty-six years of running Vasant Valley School, CEE@VVS gives
            educators the space, stimuli and support to reflect, question and re-imagine
            their practice.
          </p>
        </div>
      </div>
    </section>
  )
}