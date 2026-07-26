import { ArrowRight, CalendarDays, ClipboardCheck } from 'lucide-react'

const testDates = [
  'Tuesday, 10th March 2026',
  'Friday, 13th March 2026',
]

const processSteps = [
  'Admission tests for Class XI (2026–27) will be conducted at the school at 10:00 AM on the selected date.',
  'Shortlisted applicants will be contacted by the Admissions Officer regarding the interaction with the Admission Committee.',
  'Parents of shortlisted students will meet the Admission Committee. Seats for EWS and Disadvantaged Group students are reserved as per Government norms.',
  'Admission will be confirmed only after verification of original documents. Any incorrect or false information may result in cancellation of admission.',
]

export default function ClassXISection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="section-container max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Class XI (AS Levels) Admissions 2026–27
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Students meeting the eligibility criteria are invited to apply for
            admission to Class XI (AS Levels). The admission process includes
            an entrance assessment followed by an interaction with the
            Admission Committee.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">

          <div className="rounded-(--radius-img) bg-gold-light p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <ClipboardCheck
                size={24}
                style={{ color: 'var(--color-maroon)' }}
              />

              <h3
                className="heading-3"
                style={{ color: 'var(--color-maroon)' }}
              >
                Eligibility
              </h3>
            </div>

            <div
              className="body-m mt-6 space-y-5"
              style={{ color: 'var(--color-ink-70)' }}
            >
              <p>
                Students must have secured an average of at least <strong>70%</strong>{' '}
                in their most recent Class X examination across English,
                Second Language, Mathematics, Science and Social Science.
              </p>

              <p>
                Applicants are required to take admission tests in English
                and Mathematics. Students opting for Mathematics, Applied
                Mathematics, Physics, Chemistry, Economics or Accountancy
                must also appear for the Mathematics test.
              </p>

              <p>
                The English test is for <strong>1 hour</strong> and the
                Mathematics test is for <strong>30 minutes</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-(--radius-img) bg-gold-light p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <CalendarDays
                size={24}
                style={{ color: 'var(--color-maroon)' }}
              />

              <h3
                className="heading-3"
                style={{ color: 'var(--color-maroon)' }}
              >
                Entrance Test Dates
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {testDates.map((date) => (
                <span
                  key={date}
                  className="badge badge-ink"
                >
                  {date}
                </span>
              ))}
            </div>

            <div
              className="body-m mt-8"
              style={{ color: 'var(--color-ink-70)' }}
            >
              <p className="font-semibold mb-5">
                Admission Process
              </p>

              <ol className="space-y-4 list-decimal list-inside">
                {processSteps.map((step) => (
                  <li key={step}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a href="#" className="btn-primary">
            Fill the Application Form
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}