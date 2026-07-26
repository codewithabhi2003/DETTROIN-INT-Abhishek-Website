import ProgrammeAccordion from './ProgrammeAccordion'

const items = [
  {
    id: 'art-camps',
    title: 'Art Camps',
    body: "These aim to hone a student's expertise in a particular visual or performing art to a higher level of understanding and proficiency.",
  },
  {
    id: 'sports-camps',
    title: 'Sports Camps',
    body: 'The school runs several after-school sports camps for children who are keen to excel in a particular sport.',
  },
  {
    id: 'special-needs-therapy',
    title: 'Special Needs Therapy',
    body: "Vasant Valley School has a dedicated multidisciplinary team of Occupational Therapists, Special Educators, Physical Therapists and Behaviour Therapists to deliver individualised services to meet children's needs. Services are available for children who are not students at Vasant Valley School.",
  },
  {
    id: 'rte-extension',
    title: 'After-School Extension Programme',
    body: 'Extra classes are held free of cost to extend remedial support to students belonging to the Right to Education category.',
  },
]

export default function AfterSchoolExtension() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            After School Extension Programmes
          </h2>

          <span className="gold-rule mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            These programmes allow students from Classes 3 to 12 to explore
            their interests beyond regular school hours through specialised
            learning experiences. Additional charges apply, and school
            transport is not available after the camps.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <ProgrammeAccordion items={items} />
        </div>
      </div>
    </section>
  )
}