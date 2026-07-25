import { ArrowRight, Mail } from 'lucide-react'

export default function AlumniSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container max-w-2xl">
        <h2 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
          Alumni
        </h2>
        <span className="gold-rule" />
        <p className="body mt-6">
          Since 1999, over 2000 students have graduated from the school and
          have found their calling all over the world. Their school
          experience has created bonds that have remained strong. Some of
          our alumni have become parents, and the second generation is
          already a part of our student body.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-6">
          <a href="/alumni-connect" className="btn-secondary">
            Alumni Connect <ArrowRight size={14} />
          </a>
          <a
            href="mailto:alumni@vasantvalley.edu.in"
            className="flex items-center gap-2 text-small"
            style={{ color: 'var(--color-ink-60)' }}
          >
            <Mail size={14} aria-hidden="true" /> alumni@vasantvalley.edu.in
          </a>
        </div>
      </div>
    </section>
  )
}