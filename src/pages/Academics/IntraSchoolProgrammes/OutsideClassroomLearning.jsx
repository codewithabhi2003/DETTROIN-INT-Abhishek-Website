import ProgrammeAccordion from './ProgrammeAccordion'

const items = [
  {
    id: 'environment-programme',
    title: 'Environment Programme',
    body: 'The school works towards developing compassion, sensitivity and a sense of responsibility towards the environment. This is achieved through life skills classes, trips outside school, talks by environmentalists, film shows, nature walks, adventure camps, gardening, vermicomposting, recycling paper, reducing food waste and a graded study of the River Yamuna.',
  },
  {
    id: 'annual-school-camps',
    title: 'Annual School Camps',
    body: 'The one experience that is forever etched in the minds of our students is the Annual School Camp. Class 2 students spend a night at school with their teachers and friends, while older students travel to the foothills, river valleys and national parks. These camps foster independence, teamwork, environmental awareness and lasting friendships while ensuring the highest standards of safety.',
  },
  {
    id: 'science-fair',
    title: 'Science Fair',
    body: 'The Science Fair provides a platform to cultivate scientific thinking through experiments, models and practical demonstrations. Students strengthen curiosity, inquiry, innovation, collaboration, decision-making and communication skills.',
  },
  {
    id: 'talks-seminars',
    title: 'Talks and Seminars',
    body: 'Regular interactions with distinguished personalities expose students to diverse perspectives and inspire them through stories of creativity, leadership, perseverance and excellence.',
  },
  {
    id: 'exchange-programmes',
    title: 'Exchange Programmes',
    body: 'The school partners with institutions such as Grace Church School (New York), Kulosaari Academy (Helsinki) and Government Middle School (Jhanjraula, Haryana). These exchanges promote cultural understanding, collaborative learning and global perspectives.',
  },
  {
    id: 'college-career-counselling',
    title: 'College and Career Counselling',
    body: [
      'The College and Career Counselling team supports students from Classes 9 to 12 through aptitude assessments, individual counselling sessions and subject selection guidance to help them prepare for higher education.',
      'Students receive expert assistance throughout the university application process, including college selection, recommendation letters, essays and interactions with university representatives. Career fairs and alumni interactions further help students make informed academic and professional choices.',
    ],
  },
]

export default function OutsideClassroomLearning() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Outside Classroom Learning
          </h2>

          <span className="gold-rule mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Learning extends beyond the classroom through immersive experiences
            that inspire curiosity, leadership, environmental awareness,
            scientific inquiry and global perspectives, helping students grow
            into confident and responsible individuals.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 md:mt-12">
          <ProgrammeAccordion items={items} />
        </div>
      </div>
    </section>
  )
}