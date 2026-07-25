import { ArrowRight } from 'lucide-react'

const testDates = ['Tuesday, 10th March 2026', 'Friday, 13th March 2026']

const processSteps = [
  'Admission test for Class XI for the year 2026–27 will be held in the school at 10:00 am on the date selected.',
  'The Admissions Officer will get in touch with all shortlisted students, apprising them of the date and time of the interaction with the admission committee.',
  'Parents of shortlisted students will meet the admission committee. Seats are reserved for EWS & Disadvantaged Group students as per Government rules.',
  'All admissions to Class XI will be subject to verification of original documents. If any information given in the form is false, the school reserves the right to cancel the admission.',
]

export default function ClassXISection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container max-w-2xl mx-auto text-center">
        <h2 className="heading-1">Class XI (AS Levels) Admissions 2026–27</h2>
        <span className="gold-rule mx-auto" />

        <div className="mt-8 space-y-4 text-left">
          <p className="body">
            Students who have scored an average of at least 70% in their
            last school examination in Class X in the following subjects —
            English, Second Language, Mathematics, Science and Social
            Science — are eligible for taking the entrance test for
            admission to Class XI.
          </p>
          <p className="body">
            Students for Class XI will be required to take an Admission
            Test in English and Mathematics. All those who wish to study
            Mathematics / Applied Mathematics / Physics / Chemistry /
            Economics / Accountancy will be required to take the test in
            Mathematics. The English test will be for 1 hour and the
            Mathematics test will be for 30 minutes.
          </p>
        </div>

        <p className="body font-semibold mt-6" style={{ color: 'var(--color-ink)' }}>
          Entrance test for Class XI (AS Levels) will be conducted on 2
          days:
        </p>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-3">
          {testDates.map((date) => (
            <li key={date} className="badge badge-ink">
              {date}
            </li>
          ))}
        </ul>

        <ol className="mt-8 space-y-4 text-left list-decimal list-inside">
          {processSteps.map((step) => (
            <li key={step} className="body">
              {step}
            </li>
          ))}
        </ol>

        <a href="#" className="btn-primary mt-8">
          Fill the application form <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}