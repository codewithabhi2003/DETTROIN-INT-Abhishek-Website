import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

export default function LearningHero() {
  return (
    <section aria-label="Learning experience" className="relative">
      {/* IMAGE SLOT — replace with real photography (1920×900 min) */}
      <div
        className="relative h-80 md:h-120 w-full"
        style={PLACEHOLDER_PATTERN}
        role="img"
        aria-label="Students in the courtyard beneath hanging artwork panels"
      >
        <div className="absolute inset-0 flex items-start justify-end p-4">
          <span className="text-micro font-medium tracking-wide" style={{ color: 'var(--color-ink-40)' }}>
            IMAGE — Courtyard, student artwork panels
          </span>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center pt-14 pb-10 md:pt-20 md:pb-14">
          <p
            className="heading-2"
            style={{ color: 'var(--color-teal, #2f6f7a)' }}
          >
            The learning experience is focused on nurturing qualities such as
            leadership and self-discipline, aiming towards the holistic
            development of each child.
          </p>
          <span className="gold-rule mx-auto" />
          <p className="body-m mt-5" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            The School environment in Vasant Valley encourages each student
            and teacher to exceed their own expectations and to push the
            boundaries of their understanding and beliefs.
          </p>
        </div>
      </div>
    </section>
  )
}