const stages = [
  { label: 'Designing a Curriculum with Learning Outcomes', position: 'top' },
  { label: 'Teaching & Learning', position: 'right' },
  { label: 'Assessments — Formative & Summative', position: 'bottom-right' },
  { label: 'Feedback from Teachers, Students & Parents', position: 'bottom' },
]

const placement = {
  top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center',
  right: 'top-1/2 right-0 translate-x-[92%] -translate-y-1/2 text-left',
  'bottom-right': 'bottom-6 right-0 translate-x-[70%] text-left',
  bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[120%] text-center',
}

export default function AssessmentReporting() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="heading-1">Assessment &amp; Reporting</h2>
          <span className="gold-rule" />
          <p className="body-m mt-5" style={{ color: 'var(--color-ink)' }}>
            We share a detailed report with the parents at the end of each
            Learning Cycle which gives a complete picture of the child's
            strengths, interests and skills. Since grades can at best provide
            an understanding of one aspect of a child's development; the
            report is a combination of quantitative and qualitative feedback
            from all teachers, tutors and includes a self assessment by the
            students as well as parent feedback.
          </p>
        </div>

        <div className="relative mx-auto" style={{ width: '19rem', height: '19rem' }}>
          {stages.map((stage) => (
            <span
              key={stage.label}
              className={`absolute text-micro font-medium leading-tight max-w-38 ${placement[stage.position]}`}
              style={{ color: 'var(--color-ink)' }}
            >
              {stage.label}
            </span>
          ))}

          <div
            className="absolute inset-0 m-auto flex items-center justify-center text-center px-6"
            style={{
              width: '13rem',
              height: '13rem',
              backgroundColor: 'var(--color-maroon, #7b1e2b)',
              clipPath:
                'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          >
            <span className="text-small font-medium tracking-wide" style={{ color: 'var(--color-white)' }}>
              THE CYCLE OF LEARNING
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}