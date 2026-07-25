import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

export default function ProgrammesHero() {
  return (
    <section aria-label="Intra-school programmes" className="relative">
      {/* IMAGE SLOT — replace with real photography (1920×900 min) */}
      <div
        className="relative h-80 md:h-120 w-full"
        style={PLACEHOLDER_PATTERN}
        role="img"
        aria-label="Students engaged in an intra-school activity"
      >
        <div className="absolute inset-0 flex items-start justify-end p-4">
          <span className="text-micro font-medium tracking-wide" style={{ color: 'var(--color-ink-40)' }}>
            IMAGE — Students in an intra-school programme
          </span>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center pt-14 pb-10 md:pt-20 md:pb-14">
          <span className="badge badge-gold w-fit mx-auto mb-4">Beyond the Classroom</span>
          <h1 className="heading-1">Intra-School Programmes</h1>
          <span className="gold-rule mx-auto" />
          <p className="body-m mt-5" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            A variety of intra-school programmes encourage students to
            develop their passions and skills. The school ensures that each
            child is able to grow at an individual pace and find an area of
            interest that facilitates the process of growing up to be an
            individual who is able to recognise and actualise her inherent
            potential.
          </p>
        </div>
      </div>
    </section>
  )
}