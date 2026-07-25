import { ArrowRight } from 'lucide-react'

export default function Class1to7Section() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container max-w-2xl mx-auto text-center">
        <h2 className="heading-1">Admission for Class 1 to Class 7</h2>
        <span className="gold-rule mx-auto" />

        <p className="body mt-8">
          Admission to each year group depends on a vacancy. There are a
          limited number of children and three sections to each class.
          Application for admission needs to be sent to{' '}
          <a href="mailto:admissions@vasantvalley.edu.in" style={{ color: 'var(--color-maroon)' }}>
            admissions@vasantvalley.edu.in
          </a>
          . All applications are kept on record for three months. A fresh
          application needs to be sent to reiterate your interest if you do
          not hear from the school office within three months. No form
          needs to be filled at the time of application. In case of
          children with special needs, the above procedure is to be
          followed. Admission is dependent on a vacancy in the relevant
          year group.
        </p>

        <a href="#" className="btn-primary mt-8">
          Fill the application form <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}