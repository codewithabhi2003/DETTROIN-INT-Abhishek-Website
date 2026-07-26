import ProgrammeAccordion from './ProgrammeAccordion'

const items = [
  {
    id: 'integrated-learning',
    title: 'Integrated Learning',
    body: 'Transcending barriers of a domain specific curriculum that is fettered in strict silos, students from Classes 3 to 8 explore carefully selected themes from varied perspectives in mixed-year groups. This also ensures complete integration of all domain areas. The assessment helps to sharpen the skills of analysis, critical thinking and problem solving besides stoking the creative instincts of the students.',
  },
  {
    id: 'art-specialisation',
    title: 'Art Specialisation',
    body: [
      'Art stimulates cognitive development, innovative thinking and helps our understanding of cultural diversity. Students from Foundation to Class 12 can research and experiment with different media.',
      'Performing Arts — Students can explore instruments, sing, act and learn movement and dance, guided by a group of full-time specialists. Students regularly showcase their learning during school events and external performances.',
      'Visual Arts — Students explore creativity through a variety of media while museum visits and exhibitions encourage appreciation of artistic and cultural diversity.',
    ],
  },
  {
    id: 'life-skills',
    title: 'Life Skills Programme',
    body: 'Developing competencies needed for life beyond school, this programme focuses on problem solving, decision-making, resilience, emotional intelligence and communication. Experts from diverse professions regularly interact with students from Classes 6 to 12.',
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    body: 'Students participate in a wide range of hobby programmes that help them discover new interests, develop practical skills and enjoy creative experiences beyond academics. Hobby classes are conducted once every week.',
  },
  {
    id: 'library-reading',
    title: 'Library & Reading Programme',
    body: "The Junior and Senior School libraries house over 60,000 books, with new additions throughout the year. Beyond regular library periods, students are encouraged to read independently, while author interactions and reading initiatives nurture a lifelong love for books.",
  },
]

export default function ClassroomExperience() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gold-light)' }}
    >
      <div className="section-container max-w-6xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            The Classroom Experience
          </h2>

          <span className="gold-rule mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Learning at Vasant Valley School extends well beyond textbooks.
            Students engage in interdisciplinary experiences that encourage
            creativity, collaboration, critical thinking and lifelong learning.
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