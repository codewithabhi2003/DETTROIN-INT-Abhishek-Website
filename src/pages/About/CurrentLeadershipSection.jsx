import PersonCard from '@/components/cards/PersonCard'

const principal = {
  name: 'Sharmila Bakshi',
  role: 'Principal',
  image:
    'https://static.vasantvalley.org/wp-content/uploads/2021/06/ranu.jpg',
  imageAlt: 'Portrait of Sharmila Bakshi',
}

const team = [
  {
    name: 'Vijay Trivedi',
    role: 'Head of Senior School',
    image:
      'https://static.vasantvalley.org/wp-content/uploads/2025/04/02175614/vijay_trivedi_2-scaled.jpeg',
    imageAlt: 'Portrait of Vijay Trivedi',
  },
  {
    name: 'Mona Datta',
    role: 'Head of Junior School',
    image:
      'https://static.vasantvalley.org/wp-content/uploads/2021/04/mona-dutta.jpg',
    imageAlt: 'Portrait of Mona Datta',
  },
  {
    name: 'A. P. John',
    role: 'Administrative Head',
    image:
      'https://static.vasantvalley.org/wp-content/uploads/2021/04/john.jpg',
    imageAlt: 'Portrait of A. P. John',
  },
]

export default function CurrentLeadershipSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container max-w-3xl mx-auto text-center">
        <h2 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
          The Current Leadership Team
        </h2>
        <span className="gold-rule mx-auto" />

        <div className="mt-10">
          <PersonCard {...principal} size="lg" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 max-w-xl mx-auto">
          {team.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>

        <p className="body mt-12 text-left sm:text-center">
          Each domain area has a Head of Department, and the ten Heads of
          Department work very closely with the Leadership Team to ensure an
          optimal school experience for our students. The curriculum, both
          academic and non-academic, is structured around the Areas of
          Development. Five Teacher Coordinators are responsible for the
          Cerebral, Creative, Physical, Social-Emotional and Spiritual
          development of all students and staff. The Coordinators in charge
          of various year groups are responsible for the execution of plans
          and processes.
        </p>
      </div>
    </section>
  )
}