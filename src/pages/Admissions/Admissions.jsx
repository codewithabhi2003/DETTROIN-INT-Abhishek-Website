import { Helmet } from 'react-helmet-async'
import PreSchoolSection from './PreSchoolSection'
import Class1to7Section from './Class1to7Section'
import ClassXISection from './ClassXISection'
import FeeStructureSection from './FeeStructureSection'

export default function Admissions() {
  return (
    <>
      <Helmet>
        <title>Admissions | Vasant Valley School</title>
        <meta
          name="description"
          content="Admissions to Vasant Valley School — Pre-School (Foundation), Class 1 to Class 7, Class XI (AS Levels), and the current fee structure."
        />
      </Helmet>

      <section className="section-padding pb-0" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            Admissions
          </h1>
          <span className="gold-rule mx-auto" />
        </div>
      </section>

      <PreSchoolSection />
      <Class1to7Section />
      <ClassXISection />
      <FeeStructureSection />
    </>
  )
}