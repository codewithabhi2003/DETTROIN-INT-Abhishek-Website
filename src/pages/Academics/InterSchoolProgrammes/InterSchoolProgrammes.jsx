import { Helmet } from 'react-helmet-async'
import InterSchoolHero from './InterSchoolHero'

const programmes = [
  {
    id: 'drama-festival',
    title: 'Vasant Valley Drama Festival',
    body: 'A much-awaited annual event, held over 3 days in the month of August. Over the years, since its inception in 1992, this Festival has been the perfect occasion to showcase skills in drama, dance and music. A drama workshop is conducted for all the participating schools. Besides the plays, all students from Classes 3 to 5 of Vasant Valley School perform in various dance and music interludes. As the name suggests, it is a festival, a platform to showcase ideas and skills, not a competition.',
  },
  {
    id: 'inter-school-sports',
    title: 'Inter-School Sports',
    body: 'The school hosts several tournaments for both boys and girls, across ages and categories in Athletics, Basketball, Football, Hockey, Tennis and Cricket.',
  },
  {
    id: 'india-today-debate',
    title: 'India Today English Debate',
    body: 'The Vasant Valley Debate for the India Today Cup is a platform for young debaters across the country and abroad to deliberate, interact and learn, the debate follows the Parliamentary form of debating and is adjudicated by accomplished debaters of Delhi University. Participants engage in 2 days of rigorous debating, scrutinising motions from a spectrum of subjects like Economics, International Relations, Politics, Sociology and other topical issues. The event allows young minds to engage in discourse and rationalise their arguments using facts and theories, keeping up the spirit of open discourse, share perspectives and engage in constructive dialogue.',
  },
  {
    id: 'aaj-tak-debate',
    title: 'Aaj Tak Hindi Debate',
    body: 'An all-India school debating event, where topics of current importance and matters of ethics and principles are avidly discussed and hotly debated. Since 2011, this 2-day event has popularised debating in Hindi and instilled critical thinking and analysis.',
  },
  {
    id: 'tech-vviz',
    title: 'Tech VViz',
    body: 'An Inter-School Technology Festival, where students from different cities across India participate in various technology driven events like Digital Imaging, Music Creation, Technology Quiz and Gaming. The flagship event of the Festival is the Multimedia Contest which builds awareness among adolescents on current social issues. It also provides a platform for students to express their creative and critical thinking skills through the use of Technology.',
  },
  {
    id: 'maths-quiz',
    title: 'Inter-School Mathematics Quiz',
    body: 'An annual event for students of Class 10, the Quiz has three graded levels, where students from across the country participate in this event. It helps to showcase their spatial, cognitive, reasoning, logical thinking and mathematical skills.',
  },
  {
    id: 'synapse',
    title: 'Synapse',
    body: 'An Annual Inter School Science event, this initiative has activities to encourage students to analyze their environment through a scientific lens. Apart from engaging participants through various challenges, a talk by an eminent scientist is also planned on the same day.',
  },
  {
    id: 'vveaves',
    title: 'VVEAVES',
    body: 'An Inter-School Festival to showcase cross-curricular learning, bringing together students of Class 4 from different schools of the NCR to explore a chosen theme across subject domains. Students collaborate in groups over two days and weave the theme into a presentation to culminate the festival.',
  },
  {
    id: 'laissez-faire',
    title: 'Laissez Faire',
    body: 'This annual competitive activity organised by the Social Science Department gives students the freedom to think creatively and apply principles to real life case studies with action-oriented solutions. In order to strengthen the spirit of collaboration, teams are formed with students from different schools who are encouraged to work together to find innovative solutions to international issues.',
  },
  {
    id: 'voices',
    title: 'Voices at Vasant Valley',
    body: 'Speakers from diverse backgrounds are invited to share their life experiences. Over the years, "Voices" has helped in inspiring our students and making them aware of diverse roads people traverse to pursue their dreams and thus make career choices.',
  },
  {
    id: 'art-marathon',
    title: 'Art Marathon',
    body: 'Is a two-day workshop conducted by well known artists from various fields. This gives students an opportunity for personal expression and cooperative learning. Our students and those from other schools share ideas and resources to create works of art. At the end of the second day the Art Marathon draws to a close with a performance and exhibition of the creative work the students have done - allowing them to share and reflect on what they have learnt.',
  },
  {
    id: 'speakers-forum',
    title: "Vasant Valley Speakers' Forum",
    body: 'An Inter School event for Middle School students to explore and share their critical and imaginative faculties through a variety of competitive and noncompetitive opportunities. This event is open to students from Classes 6 to 9 and is designed to enhance the literary and creative spirit of students through the following platforms: Book Discussion, Tall Tales, Oral Interpretation, Turncoat and Slam Poetry.',
  },
]

// 12 programmes → 3 rows of 4 (2 per column), alternating section background
const rows = [
  { items: programmes.slice(0, 4), bg: 'var(--color-gold-light)' },
  { items: programmes.slice(4, 8), bg: 'var(--color-white)' },
  { items: programmes.slice(8, 12), bg: 'var(--color-gold-light)' },
]

function ProgrammeBlock({ programme }) {
  return (
    <div>
      <h3 className="heading-3" style={{ color: 'var(--color-ink)' }}>
        {programme.title}
      </h3>
      <p className="body-m mt-3" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
        {programme.body}
      </p>
    </div>
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

      {rows.map((row, i) => {
        const [left1, left2, right1, right2] = row.items
        return (
          <section key={i} className="section-padding" style={{ backgroundColor: row.bg }}>
            <div className="section-container grid md:grid-cols-2 gap-x-16 gap-y-10">
              <div className="space-y-10">
                <ProgrammeBlock programme={left1} />
                <ProgrammeBlock programme={left2} />
              </div>
              <div className="space-y-10">
                <ProgrammeBlock programme={right1} />
                <ProgrammeBlock programme={right2} />
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}