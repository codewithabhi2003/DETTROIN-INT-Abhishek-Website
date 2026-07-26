const stages = [
  {
    label: 'Designing a Curriculum with Learning Outcomes',
    position: 'top',
  },
  {
    label: 'Teaching & Learning',
    position: 'right',
  },
  {
    label: 'Assessments — Formative & Summative',
    position: 'bottom-right',
  },
  {
    label: 'Feedback from Teachers, Students & Parents',
    position: 'bottom',
  },
]

const placement = {
  top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center',

  right:
    'top-1/2 right-0 translate-x-16 -translate-y-1/2 text-left',

  'bottom-right':
    'bottom-6 right-0 translate-x-12 text-left',

  bottom:
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-20 text-center',
}

export default function AssessmentReporting() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gold-light)' }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-3xl">
            <h2
              className="heading-1"
              style={{ color: 'var(--color-maroon)' }}
            >
              Assessment &amp; Reporting
            </h2>

            <span className="gold-rule mt-4" />

            <p
              className="body-m mt-6"
              style={{ color: 'var(--color-ink-70)' }}
            >
              We share a comprehensive report with parents at the end of each
              Learning Cycle, highlighting every student's strengths,
              interests and progress. Beyond grades, the report combines
              qualitative observations from teachers, tutors, student
              self-reflection and parent feedback to provide a holistic view
              of each learner's development.
            </p>
          </div>

          {/* Learning Cycle */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">

              {stages.map((stage) => (
                <span
                  key={stage.label}
                  className={`absolute text-xs md:text-sm font-medium leading-snug max-w-40 ${placement[stage.position]}`}
                  style={{ color: 'var(--color-ink)' }}
                >
                  {stage.label}
                </span>
              ))}

              {/* Center Shape */}
              <div
                className="absolute inset-0 m-auto flex items-center justify-center text-center w-56 h-56 md:w-64 md:h-64 px-6"
                style={{
                  backgroundColor: 'var(--color-maroon)',
                  clipPath:
                    'polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)',
                }}
              >
                <span
                  className="text-sm md:text-base font-semibold tracking-wide"
                  style={{ color: 'var(--color-white)' }}
                >
                  THE CYCLE OF LEARNING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}