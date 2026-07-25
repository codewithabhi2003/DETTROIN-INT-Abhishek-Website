import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

export default function CurriculumHero() {
  return (
    <section aria-label="International Curriculum" className="relative">
      {/* IMAGE SLOT — replace with real photography (1920×900 min) */}
      <div
        className="relative h-80 md:h-120 w-full"
        style={PLACEHOLDER_PATTERN}
        role="img"
        aria-label="Students in front of the #VasantValleySchool installation"
      >
        <div className="absolute inset-0 flex items-start justify-end p-4">
          <span className="text-micro font-medium tracking-wide" style={{ color: 'var(--color-ink-40)' }}>
            IMAGE — #VasantValleySchool installation
          </span>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center pt-14 pb-10 md:pt-20 md:pb-14">
          <span className="badge badge-gold w-fit mx-auto mb-4">Cambridge International School</span>
          <h1 className="heading-1">International Curriculum</h1>
          <span className="gold-rule mx-auto" />
          <p className="body-m mt-5" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            Vasant Valley School is a registered Cambridge International
            School offering the Cambridge curriculum for Classes 8–12.
          </p>
        </div>
      </div>
    </section>
  )
}