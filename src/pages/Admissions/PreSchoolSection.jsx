import { ArrowRight, FileText, Baby } from 'lucide-react'

const eligibilityPoints = [
  'The registration process for admission to Pre School (Foundation) is conducted online in strict accordance with the guidelines issued by the Department of Education.',
  'Applications under the EWS/DG and CWSN categories are processed directly by the Department of Education under the provisions of the Right to Education Act (RTE), 2009.',
  'Children should be born between 1st April, 2022 and 31st March, 2023.',
]

const resourceLinks = [
  'Second List of Shortlisted & Waiting List – Pre School (Foundation) 2026–27',
  'First List of Shortlisted & Waiting List – Pre School (Foundation) 2026–27',
  'List of Applicants with Points Awarded',
  'List of Applicants for Pre School (Foundation) 2026–27',
  'Details of Seats Available',
  'Criteria for Awarding Points',
  'Admission Process Timeline',
  'Original Documents Required for Verification',
  'Frequently Asked Questions (FAQs)',
]

export default function PreSchoolSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="section-container max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Admission to Pre-School (Foundation) 2026–27
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Admissions to Pre-School (Foundation) are conducted in accordance
            with the Department of Education guidelines, ensuring a fair,
            transparent and child-friendly admission process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

          {/* Eligibility */}
          <div className="rounded-(--radius-img) bg-gold-light p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Baby
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
              {eligibilityPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}

              <div
                className="rounded-(--radius-img) bg-white p-5 border-l-4"
                style={{
                  borderColor: 'var(--color-maroon)',
                }}
              >
                <strong style={{ color: 'var(--color-maroon)' }}>
                  Age Relaxation
                </strong>

                <p className="mt-3">
                  As per the DoE order dated <strong>22/11/2025</strong>, the
                  Head of School may grant an age relaxation of up to
                  <strong> 30 days</strong>. Therefore, children born between
                  <strong> 1st March 2022 and 31st March 2022</strong> are also
                  eligible for admission for the academic session 2026–27.
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="rounded-(--radius-img) bg-gold-light p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <FileText
                size={24}
                style={{ color: 'var(--color-maroon)' }}
              />

              <h3
                className="heading-3"
                style={{ color: 'var(--color-maroon)' }}
              >
                Admission Resources
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="group flex items-start gap-4 rounded-(--radius-img) bg-white p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <ArrowRight
                      size={18}
                      className="mt-1 shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: 'var(--color-maroon)' }}
                    />

                    <span
                      className="body-m"
                      style={{ color: 'var(--color-ink-70)' }}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}