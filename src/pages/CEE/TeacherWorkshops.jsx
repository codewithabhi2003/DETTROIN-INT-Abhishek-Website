import { BookOpen, HeartHandshake, Presentation, Users } from 'lucide-react'
import TeacherWorkshopsHero from './TeacherWorkshopshero'
 
const focusAreas = [
  { id: 'academics', icon: BookOpen, label: 'Academics' },
  { id: 'pastoral-care', icon: HeartHandshake, label: 'Pastoral Care' },
  { id: 'pedagogy', icon: Presentation, label: 'Pedagogy' },
  { id: 'school-culture', icon: Users, label: 'School Culture' },
]
 
const areasWeWorkAcross = [
  {
    id: 'tw-academics',
    title: 'Academics',
    items: [
      'Enhancing Student Learning Outcomes: From Reflection to Action',
      'Educating for Tomorrow: Reimagining Curriculum for 21st-Century Citizenship',
      'Designing Learning Outcomes & Lesson Planning',
      'Inquiry-Based & Projects-Based Learning: Designing Interdisciplinary Projects',
      'Rethinking Assessment: Strategies to Empower Learners and Inform Teaching',
      'Building Early Literacy and Numeracy',
      'Instructional Leadership: Strategic Visioning and Change Management',
      'Curriculum and Pedagogy in the Early Years',
      "Developing IEP's and Tracking Student Progress",
    ],
  },
  {
    id: 'tw-pastoral-care',
    title: 'Pastoral Care',
    items: [
      'Building Social-Emotional Well-being in Schools',
      'Creating Compassion Based Classrooms',
      'Teacher Coaching and Mentoring',
      'Understanding and Supporting Neurodiverse Learners: Practical Approaches for Teachers',
      'Conflict Resolution and Building Bridges',
      'Embracing Diversity: Strategies to Create Compassionate, Inclusive and Equitable Classrooms',
      'Ensuring Digital Safety',
      'The Importance of Student Voice',
      'Universal Design for Learning',
    ],
  },
  {
    id: 'tw-pedagogy',
    title: 'Pedagogy',
    items: [
      'Becoming a Great Teacher: Cultivating Excellence in the Classroom',
      'Active Learning and Metacognition',
      'Effective Classroom Management',
      'Collaborative Learning Strategies',
      'Digital Literacy & Technology Integration',
      'Differentiated Instruction: Reaching Out to Every Child',
      'The Heart of Storytelling: Using Arts, Storytelling and Design Thinking',
      'The Art of Classroom Observation: Tools and Techniques',
      'Blended Learning Models: Effective Use of Digital Pedagogies to Aid Learning',
    ],
  },
  {
    id: 'tw-school-culture',
    title: 'School Culture',
    items: [
      'Building a Culture of Collegiality: Strengthening Professional Collaboration in Schools',
      'Embracing Diversity: Strategies to Create Inclusive and Equitable Classrooms',
      'Designing an Impactful School Calendar: Aligning Plans with Purpose',
      "Crafting a Vision-Driven School Schedule: Mapping Schedules with the School's Vision",
      'From Needs to Knowledge: How Maslow and Bloom Shape the Way Students Learn',
      'Global Framework for School Improvement',
      'Building a Culture of Professional Excellence',
      'Designing Future-Ready Learning Spaces',
      'Data-Driven Decision Making and School Improvement',
    ],
  },
]
 
export default function TeacherWorkshops() {
  return (
    <div id="teacher-workshops" className="scroll-mt-24">
      <TeacherWorkshopsHero />
 
      {/* Focus area quick-nav cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {focusAreas.map((area) => {
          const Icon = area.icon
          return (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="rounded-(--radius-img) p-6 text-center"
              style={{ backgroundColor: 'var(--color-white)' }}
            >
              <Icon size={24} color="var(--color-gold)" className="mx-auto" aria-hidden="true" />
              <p className="heading-3 mt-3" style={{ color: 'var(--color-ink)' }}>
                {area.label}
              </p>
              <span
                className="text-small block mt-2"
                style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
              >
                Know more →
              </span>
            </a>
          )
        })}
      </div>
 
      {/* Teacher Workshops detail card */}
      <div className="max-w-3xl mx-auto mt-8">
        <div
          className="rounded-(--radius-img) p-8"
          style={{ backgroundColor: 'var(--color-white)' }}
        >
          <h3 className="heading-3" style={{ color: 'var(--color-gold)' }}>
            Teacher Workshops
          </h3>
          <span className="gold-rule mt-2" />
 
          <p className="body-m mt-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            About the programme: These structured workshops support schools and teachers
            in completing the mandatory hours of annual teacher training. The sessions
            are designed to be practical, relevant, and deeply rooted in classroom
            reality.
          </p>
          <p className="body-m mt-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            These interactive practice-based sessions empower educators to enhance
            classroom effectiveness, explore innovative pedagogy, and align with modern
            teaching standards by returning to school. Each workshop blends theory with
            real-world application, encouraging collaboration, reflection, and
            skill-building to strengthen teaching practice and improve student learning
            outcomes across diverse subjects and grade levels.
          </p>
          <p className="body-m mt-4" style={{ color: 'var(--color-ink)' }}>
            <strong>Programme Duration:</strong> 1 day / 2 days
          </p>
 
          <p className="body-m mt-6" style={{ color: 'var(--color-ink)' }}>
            <strong>Areas We Work Across:</strong>
          </p>
          <div className="mt-4 space-y-6">
            {areasWeWorkAcross.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <h4 className="heading-3" style={{ color: 'var(--color-ink)' }}>
                  {group.title}
                </h4>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-small"
                      style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
 