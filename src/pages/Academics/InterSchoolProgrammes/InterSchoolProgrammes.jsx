import { Helmet } from 'react-helmet-async'
import InterSchoolHero from './InterSchoolHero'

const programmes = [
  {
    id: 'drama-festival',
    title: 'Vasant Valley Drama Festival',
    body: 'A much-awaited annual event, held over 3 days in August. Since its inception in 1992, the festival has showcased drama, dance and music while bringing schools together through workshops and performances. It is a celebration of creativity rather than a competition.',
  },
  {
    id: 'inter-school-sports',
    title: 'Inter-School Sports',
    body: 'The school hosts tournaments for boys and girls across Athletics, Basketball, Football, Hockey, Tennis and Cricket, encouraging teamwork, discipline and sportsmanship.',
  },
  {
    id: 'india-today-debate',
    title: 'India Today English Debate',
    body: 'A prestigious parliamentary debate where students from India and abroad discuss Economics, Politics, Sociology, International Relations and contemporary issues under the guidance of experienced adjudicators.',
  },
  {
    id: 'aaj-tak-debate',
    title: 'Aaj Tak Hindi Debate',
    body: 'An all-India debating competition that encourages students to discuss current affairs, ethics and public issues while strengthening critical thinking and Hindi oratory.',
  },
  {
    id: 'tech-vviz',
    title: 'Tech VViz',
    body: 'An inter-school technology festival featuring Digital Imaging, Multimedia, Music Creation, Technology Quiz and Gaming while encouraging innovation and creative problem-solving.',
  },
  {
    id: 'maths-quiz',
    title: 'Inter-School Mathematics Quiz',
    body: 'An annual national quiz for Class 10 students that develops logical reasoning, spatial thinking, mathematical ability and problem-solving skills.',
  },
  {
    id: 'synapse',
    title: 'Synapse',
    body: 'An annual science festival where students explore scientific inquiry through exciting challenges, experiments and inspiring talks by eminent scientists.',
  },
  {
    id: 'vveaves',
    title: 'VVEAVES',
    body: 'A cross-curricular learning festival where Class 4 students collaborate across subjects and schools to explore a common theme and present their collective learning.',
  },
  {
    id: 'laissez-faire',
    title: 'Laissez Faire',
    body: 'A Social Science event where mixed-school teams collaborate to create innovative solutions for global issues using research, creativity and teamwork.',
  },
  {
    id: 'voices',
    title: 'Voices at Vasant Valley',
    body: 'Inspirational speakers from diverse backgrounds share their journeys, helping students understand different career paths and life experiences.',
  },
  {
    id: 'art-marathon',
    title: 'Art Marathon',
    body: 'A two-day creative workshop where students work with renowned artists, collaborate with peers from other schools and exhibit their artwork at the end of the event.',
  },
  {
    id: 'speakers-forum',
    title: "Vasant Valley Speakers' Forum",
    body: 'An event for Middle School students featuring Book Discussions, Tall Tales, Oral Interpretation, Turncoat and Slam Poetry to nurture creativity and communication skills.',
  },
]

function ProgrammeCard({ programme }) {
  return (
    <article
      className="rounded-2xl bg-white border p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: 'rgba(128,97,35,.12)',
      }}
    >
      <h3
        className="text-2xl font-semibold"
        style={{ color: 'var(--color-maroon)' }}
      >
        {programme.title}
      </h3>

      <div
        className="mt-4 h-1 w-16 rounded-full"
        style={{ backgroundColor: 'var(--color-gold)' }}
      />

      <p
        className="mt-5 leading-8"
        style={{
          color: 'var(--color-ink-70, rgba(11,15,25,.72))',
        }}
      >
        {programme.body}
      </p>
    </article>
  )
}

export default function InterSchoolProgrammes() {
  return (
    <>
      <Helmet>
        <title>Inter-School Programmes | Vasant Valley School</title>

        <meta
          name="description"
          content="Drama Festival, debates, sports, Synapse, VVEAVES, Laissez Faire and other inter-school events that connect Vasant Valley School students with the wider world."
        />
      </Helmet>

      <InterSchoolHero />

      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="heading-1"
              style={{ color: 'var(--color-maroon)' }}
            >
              Our Inter-School Programmes
            </h2>

            <span className="gold-rule mx-auto mt-5" />

            <p
              className="body mt-6"
              style={{
                color: 'var(--color-ink-70)',
              }}
            >
              Our programmes encourage students to collaborate, compete,
              innovate and learn beyond the classroom through academics,
              sports, performing arts, technology and leadership experiences.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programmes.map((programme) => (
              <ProgrammeCard
                key={programme.id}
                programme={programme}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}