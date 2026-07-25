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
      'Performing Arts — Students can explore instruments, sing, act and learn movement and dance, guided by a group of full-time specialists. The students put these skills to practice during events within and outside the school, giving them an opportunity to showcase their learning and pursue their passion.',
      'Visual Arts — Students can explore their creativity and transform their imagination into tangible expressions. Trips to various museums and exhibitions allow children to appreciate cultural diversity.',
    ],
  },
  {
    id: 'life-skills',
    title: 'Life Skills Programme',
    body: 'Developing competencies needed to prepare students for life beyond school, here the focus is on problem solving and effective decision-making skills. Speakers from different walks of life are invited to create awareness about career options, handling peer pressure, resilience, understanding and managing emotions and effective communication for students from Class 6 to 12.',
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    body: 'Students are offered opportunities to engage in pursuits that helps them imbibe new skills. These hobbies are both stimulating and fun and give students creative outlets beyond the academic sphere. There are several choices offered as hobbies for students in the Junior School and Senior School. Hobby classes are held once every week.',
  },
  {
    id: 'library-reading',
    title: 'Library & Reading Programme',
    body: "The Junior and Senior School libraries together have more than 60,000 books and new books are continuously added to the collection. Apart from the regular library lessons included in a student's timetable, children can visit the library during breaks and other lessons. The School's Reading Programme encourages children to read for pleasure and author interactions are planned through the year.",
  },
]

export default function ClassroomExperience() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container">
        <h2 className="heading-1">The Classroom Experience</h2>
        <span className="gold-rule" />
        <p className="body-m mt-5 max-w-2xl" style={{ color: 'var(--color-ink)' }}>
          The Classroom Experience takes learning well beyond the academic
          curriculum, making lifelong learners of our students.
        </p>
        <ProgrammeAccordion items={items} />
      </div>
    </section>
  )
}