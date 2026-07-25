import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

export default function AlumniConnectHero() {
  return (
    <section aria-label="Alumni Connect hero" className="relative">
      <div
        className="relative h-80 md:h-120 w-full"
        style={PLACEHOLDER_PATTERN}
        role="img"
        aria-label="Collage of alumni photos from past reunions and gatherings"
      >
        <div className="absolute inset-0 flex items-start justify-end p-4">
          <span
            className="text-micro font-medium tracking-wide"
            style={{ color: 'var(--color-ink-40)' }}
          >
            IMAGE — Alumni reunion photo collage
          </span>
        </div>
      </div>
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center pt-14 pb-10 md:pt-20 md:pb-14">
          <span className="badge badge-gold w-fit mx-auto mb-4">Since 1999</span>
          <h1 className="heading-1">Alumni Connect</h1>
          <span className="gold-rule mx-auto" />
          <p
            className="body-m mt-5"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            Watch this space for alumni updates. Contact us at{' '}
            <a
              href="mailto:alumni@vasantvalley.edu.in"
              style={{ color: 'var(--color-gold)' }}
            >
              alumni@vasantvalley.edu.in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}