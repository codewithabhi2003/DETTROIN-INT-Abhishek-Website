import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    title: 'Learning Spaces',
    paragraphs: [
      'The School has well equipped Science laboratories, two libraries, a state-of-the-art Occupational Therapy facility, an auditorium and gymnasium, extensive sports facilities and a specialized centre for the Visual and Performing Arts. All classrooms are equipped for streaming audio/visual content and the entire campus is wireless enabled.',
    ],
  },
  {
    title: 'Health & Safety',
    paragraphs: [
      'To ensure high quality primary medical care for the students and teachers, we have 3 full time, qualified nurses on the campus and a Paediatrician available on call. There are two fully equipped medical rooms and, by virtue of our location, we have several big hospitals within a kilometre of the school campus.',
      'We regularly conduct trainings, workshops and seminars to educate our students and staff on First Responder drills for health, fire, earthquakes and other natural disasters. All staff members and senior students are trained in basic minimum first aid. The School regularly conducts mock drills, safety workshops and sessions to prepare our staff and children to deal with an emergency.',
      'An annual health check-up is conducted for students as well as all staff members. Our foremost priority is the safety and security of everyone on campus as well as the community.',
      "CCTV cameras, fire extinguishers and air purifiers are installed throughout the school building and grounds. The School has a strict zero-tolerance policy regarding bullying and substance abuse of any kind. Regular workshops and training sessions are held for teachers and students on Cyber Safety and the norms of safe use of technology.",
    ],
  },
  {
    title: 'Transport',
    paragraphs: [
      "Students from the neighbouring areas of South Delhi can avail the facility of school transport. The School encourages carpooling amongst students who come to school in their own vehicles. We also encourage parents to organise private buses in areas where School buses do not ply. The buses comply with all the guidelines of the Government of NCT, Delhi and the Hon'ble Supreme Court of India.",
    ],
  },
]

const PHOTO_GALLERY_URL = 'https://static.vasantvalley.org/wp-content/uploads/2021/05/part-9.jpg'

export default function Infrastructure() {
  return (
    <>
      <Helmet>
        <title>Infrastructure | Vasant Valley School</title>
        <meta
          name="description"
          content="The Vasant Valley School campus — learning spaces, health & safety, and transport facilities."
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            Infrastructure
          </h1>
          <span className="gold-rule mx-auto" />

          <p className="body-l mt-8">
            The campus has sports fields, gardens, play areas and
            courtyards, with over 400 species of trees and plants.
          </p>
          <p className="body mt-4">
            The school is surrounded by the busy neighbourhood of Vasant
            Kunj on one side and the main road connecting the capital city
            to the airport on the other. While there is a planned space for
            every activity, there are also many open "mixed-use" areas. The
            entire campus is challenge compliant.
          </p>

          <a href={PHOTO_GALLERY_URL} target="_blank" rel="noreferrer" className="btn-secondary mt-6">
            Photo gallery <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={section.title}
          className="section-padding"
          style={{ backgroundColor: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-white)' }}
        >
          <div className="section-container max-w-2xl mx-auto">
            <h2 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
              {section.title}
            </h2>
            <span className="gold-rule" />
            <div className="mt-6 space-y-4">
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="body">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}