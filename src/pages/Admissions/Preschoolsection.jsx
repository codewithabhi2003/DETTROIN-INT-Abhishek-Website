import { ArrowRight } from 'lucide-react'

const eligibilityPoints = [
  'The registration process for admission to Pre School (Foundation) is done online, in strict compliance with the guidelines issued by the Department of Education.',
  'Under the provisions of the RTE Act-2009, the processing of admissions in the EWS/DG and CWSN categories lies with the Department of Education. Therefore, all applications under these categories must be submitted directly to the Department of Education.',
  'Children should be born between 1st April, 2022 and 31st March, 2023.',
]

// TODO: point these at the real published PDFs/pages once available
const resourceLinks = [
  'List of children shortlisted (Second List) and waiting list — Pre School (Foundation) 2026–27',
  'List of children shortlisted (First List) and waiting list — Pre School (Foundation) 2026–27',
  'List of children who applied for Pre School (Foundation) 2026–27, with points awarded',
  'List of children who applied for admission to Pre School (Foundation) 2026–27',
  'Details of seats available',
  'Criteria for awarding points',
  'Timeline for the admission process',
  'List of original documents to be shown at verification',
  'FAQs for the admission process',
]

export default function PreSchoolSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container max-w-2xl mx-auto text-center">
        <h2 className="heading-1">Admission to Pre-School (Foundation) 2026–27</h2>
        <span className="gold-rule mx-auto" />

        <div className="mt-8 space-y-4 text-left">
          {eligibilityPoints.map((point) => (
            <p key={point} className="body">
              {point}
            </p>
          ))}
          <p className="body">
            In accordance with the DoE order dated 22/11/2025, the Head of
            School may grant an age relaxation of up to 30 days for
            admission to Pre-school, at their discretion. Accordingly, for
            the academic session 2026–27,{' '}
            <strong style={{ color: 'var(--color-ink)' }}>
              children born between 1st March, 2022 and 31st March, 2022 will
              also be considered eligible for admission.
            </strong>
          </p>
        </div>

        <ul className="mt-10 space-y-3 text-left">
          {resourceLinks.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="flex items-start gap-2 text-small"
                style={{ color: 'var(--color-ink-60)' }}
              >
                <ArrowRight
                  size={14}
                  className="mt-1 shrink-0"
                  style={{ color: 'var(--color-maroon)' }}
                  aria-hidden="true"
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}