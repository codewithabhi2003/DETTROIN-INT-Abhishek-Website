import { ArrowRight, Mail } from 'lucide-react'

export default function Class1to7Section() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-4xl mx-auto">

        <div className="text-center">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Admission for Class 1 to Class 7
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-8 max-w-3xl mx-auto leading-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Admission to each year group is subject to the availability of
            vacancies. Each class has three sections with a limited number of
            students to ensure a supportive learning environment.
          </p>
        </div>

        {/* Information Card */}
        <div
          className="rounded-(--radius-img) bg-gold-light shadow-sm p-8 md:p-10 mt-12"
        >
          <div className="flex items-start gap-4">

            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'rgba(128,97,35,.12)' }}
            >
              <Mail
                size={22}
                style={{ color: 'var(--color-maroon)' }}
              />
            </div>

            <div
              className="body-m space-y-5"
              style={{ color: 'var(--color-ink-70)' }}
            >
              <p>
                Applications for admission should be emailed to{' '}
                <a
                  href="mailto:admissions@vasantvalley.edu.in"
                  className="font-semibold hover:underline"
                  style={{ color: 'var(--color-maroon)' }}
                >
                  admissions@vasantvalley.edu.in
                </a>
                .
              </p>

              <p>
                Applications remain on record for three months. If you do not
                receive a response during this period, please submit a fresh
                application to confirm your continued interest.
              </p>

              <p>
                No application form is required at the initial stage.
                Applications for children with special educational needs follow
                the same admission process and are considered based on
                vacancies in the relevant year group.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a href="#" className="btn-primary">
            Fill the Application Form
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}