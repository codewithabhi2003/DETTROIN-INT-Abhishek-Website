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
    body: 'The school runs several after School Sports Camps for children who are keen to excel in a particular sport.',
  },
  {
    id: 'special-needs-therapy',
    title: 'Special Needs Therapy',
    body: "Vasant Valley School has a dedicated multidisciplinary team of Occupational Therapists, Special Educators, Physical Therapists and Behaviour Therapists to deliver individualised services to meet children's needs. Services are available for children, who are not students at Vasant Valley School.",
  },
  {
    id: 'rte-extension',
    title: 'After-School Extension Programme',
    body: 'Extra classes are held free of cost, to extend remedial support to students belonging to the Right To Education category.',
  },
]

export default function AfterSchoolExtension() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        <h2 className="heading-1">After School Extension Programmes</h2>
        <span className="gold-rule" />
        <p className="body-m mt-5 max-w-2xl" style={{ color: 'var(--color-ink)' }}>
          These allow children from Classes 3 to 12 to delve deeper into a
          particular area of interest. There are additional charges for
          these camps and school transport is not available after the
          camps.
        </p>
        <ProgrammeAccordion items={items} />
      </div>
    </section>
  )
}