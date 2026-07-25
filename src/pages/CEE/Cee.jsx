import { Helmet } from 'react-helmet-async'
import {
  BookOpen,
  GraduationCap,
  Presentation,
  UsersRound,
  ClipboardList,
  Lightbulb,
  MonitorPlay,
} from 'lucide-react'
import CeeHero from './Ceehero'
import TeacherWorkshops from './TeacherWorkshops'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programmes Offered', href: '#programmes' },
  { label: 'Contact Us', href: '#contact' },
]

const achievements = [
  'Ivy League Day School (Education World Survey 2025)',
  'Best Day Co-Ed School in Delhi NCR (C-Fore Rankings 2025)',
  'Best Co-Ed School in India (C-Fore Rankings 2025)',
]

const programmes = [
  {
    id: 'cambridge-pd',
    icon: BookOpen,
    title: 'Cambridge Professional Development Qualifications',
    description: 'Teacher leadership and professional growth programmes',
    href: '#',
  },
  {
    id: 'vvs-pd-certificate',
    icon: GraduationCap,
    title: "Vasant Valley School's Professional Development Certificate Courses",
    description: 'In-house certified development initiatives',
    href: '#',
  },
  {
    id: 'teacher-workshops',
    icon: Presentation,
    title: 'Teacher Workshops',
    description: 'Skill-focussed workshops for classroom excellence',
    href: '#teacher-workshops',
  },
  {
    id: 'leadership-seminars',
    icon: UsersRound,
    title: 'Leaderships Seminars',
    description: 'Empowering leaders: insights and inspirations',
    href: '#',
  },
  {
    id: 'school-mentorship',
    icon: ClipboardList,
    title: 'School Mentorship Programme for Whole School Improvement and Capacity Building',
    description: 'Transforming schools through purposeful change and collective impact',
    href: '#school-mentorship',
  },
  {
    id: 'research-initiatives',
    icon: Lightbulb,
    title: 'Research Initiatives',
    description: 'Educational research and innovation projects',
    href: '#research-initiatives',
  },
  {
    id: 'masterclasses',
    icon: MonitorPlay,
    title: 'Masterclass by Global Experts',
    description: 'Global Perspectives, inspiring excellence',
    href: '#masterclasses',
  },
]

function ProgrammeCard({ programme }) {
  const Icon = programme.icon
  return (
    <div
      className="rounded-(--radius-img) p-6 h-full flex flex-col"
      style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}
    >
      <Icon size={28} color="var(--color-gold)" aria-hidden="true" />
      <h3 className="heading-3 mt-4" style={{ color: 'var(--color-ink)' }}>
        {programme.title}
      </h3>
      <p className="text-small mt-2" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
        {programme.description}
      </p>
      <a href={programme.href} className="text-small mt-auto pt-4" style={{ color: 'var(--color-gold)' }}>
        Know more →
      </a>
    </div>
  )
}

function DetailCard({ title, children, tone = 'white' }) {
  return (
    <div
      className="rounded-(--radius-img) p-8"
      style={{
        backgroundColor: tone === 'gold' ? 'var(--color-gold-light)' : 'var(--color-white)',
        border: tone === 'gold' ? 'none' : '1px solid var(--color-ink-10, rgba(11,15,25,0.1))',
      }}
    >
      <h3 className="heading-3" style={{ color: 'var(--color-gold)' }}>
        {title}
      </h3>
      <span className="gold-rule mt-2" />
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  )
}

export default function Cee() {
  return (
    <>
      <Helmet>
        <title>CEE@VVS | Vasant Valley School</title>
        <meta
          name="description"
          content="The Vasant Valley Centre for Excellence in Education (CEE@VVS) — professional development, mentorship, research and masterclasses for educators."
        />
      </Helmet>

      <CeeHero />

      {/* Quick links */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-(--radius-img) p-6"
              style={{ backgroundColor: 'var(--color-gold-light)' }}
            >
              <span className="heading-3" style={{ color: 'var(--color-ink)' }}>
                {link.label.toUpperCase()}
              </span>
              <span className="gold-rule mt-2" />
              <span
                className="text-small block mt-4 underline"
                style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
              >
                Read more
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding scroll-mt-24" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>About</h2>
          <span className="gold-rule mt-2" />
          <div className="mt-6 space-y-4">
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              The Vasant Valley Centre for Excellence in Education, Vasant Valley School
              (CEE@VVS) was born out of the experience and expertise we have gained over
              the last thirty-six years of running Vasant Valley School.
            </p>
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              Vasant Valley School has consistently been ranked as one of the top
              co-educational day schools in India and Delhi/NCR over the last 15 years,
              frequently securing the No. 1 or No. 2 position in prominent rankings. A few
              achievements this year –
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {achievements.map((item) => (
                <li key={item} className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              Today Vasant Valley School is recognised as an 'Institution of Excellence'
              in the field of school education in India and we rely on this wide
              knowledge and experience of running one of the best schools in the country
              in our work at Vasant Valley Centre for Excellence in Education, Vasant
              Valley School CEE@VVS.
            </p>
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              With learner needs changing and pedagogies rapidly advancing, CEE@VVS was
              created to give teachers the space, stimuli, and support to pause, to
              reflect, to question, learn, and re-imagine their practice.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container grid md:grid-cols-2 gap-8">
          <div
            className="rounded-(--radius-img) p-8"
            style={{ border: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}
          >
            <h3 className="heading-3" style={{ color: 'var(--color-gold)' }}>Vision</h3>
            <p className="body-m mt-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              The Vasant Valley Centre for Excellence in Education, Vasant Valley School
              (CEE@VVS) aims to empower and inspire educators through innovative,
              inclusive and forward looking pedagogical practices and leadership
              development. Our goal is to nurture and create a vibrant community of
              educators, who are equipped to transform school education. We seek to shape
              a future where every child's learning journey is both meaningful and
              joyful, and the learning process will include the best global practices,
              while being rooted in the local context.
            </p>
          </div>
          <div
            className="rounded-(--radius-img) p-8"
            style={{ border: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}
          >
            <h3 className="heading-3" style={{ color: 'var(--color-gold)' }}>Mission</h3>
            <p className="body-m mt-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              The three focus areas for The Vasant Valley Centre for Excellence in
              Education, Vasant Valley School (CEE@VVS) are Research, Action, and
              Capacity Building.
            </p>
            <p className="body-m mt-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              It fosters innovation, nurtures best practices, and dives deep into action
              research and training; to create a new and empowered generation of
              educators. Most importantly, we create common safe spaces for educators to
              learn, unlearn and relearn from each other.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes Offered */}
      <section id="programmes" className="section-padding scroll-mt-24" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>Programmes Offered</h2>
          <span className="gold-rule mt-2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} />
            ))}
          </div>
        </div>
      </section>

      {/* Programme details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto space-y-8">
          <div id="school-mentorship" className="scroll-mt-24">
            <DetailCard title="School Mentorship Programme for Whole School Improvement and Capacity Building">
              <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                About the programme: The VVS EDGE school mentorship programme is a
                framework that inspires an objective review and reflection of practice
                and process in order to ensure continuous and consistent improvement and
                growth in different aspects of school functioning.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>E - Evidence-based needs assessment</li>
                <li className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>D - Discover areas for improvement</li>
                <li className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>G - Guide targeted intervention</li>
                <li className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>E - Evaluate impact and sustainability</li>
              </ul>
              <p className="body-m" style={{ color: 'var(--color-ink)' }}>
                <strong>Programme Duration:</strong> 3–6 months
              </p>
              <div>
                <p className="body-m" style={{ color: 'var(--color-ink)' }}><strong>Plans Offered:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  {[
                    'Curriculum and Pedagogy',
                    'Student Well-Being and Community Engagement',
                    'Teacher Development and Performance',
                    'Leadership, Management & Governance',
                    'Inclusive Practices',
                    'Infrastructure and Resources',
                  ].map((item) => (
                    <li key={item} className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </DetailCard>
          </div>

          <div id="research-initiatives" className="scroll-mt-24">
            <DetailCard title="Research Initiatives">
              <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                About the programme: This strand promotes a culture of inquiry by
                engaging educators in evidence-based research and reflective practice.
                Participants explore classroom challenges, collect data, and analyse
                outcomes to inform decision-making. The process fosters critical
                thinking, continuous improvement, and the integration of research
                insights into everyday teaching and leadership practices.
              </p>
              <p className="body-m" style={{ color: 'var(--color-ink)' }}>
                <strong>Programme Duration:</strong> Ongoing
              </p>
              <div>
                <p className="body-m" style={{ color: 'var(--color-ink)' }}><strong>Research Areas:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  {['Communities of Parenting', 'Inclusive Education', 'Impact Study of RTE-12(1C)'].map((item) => (
                    <li key={item} className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </DetailCard>
          </div>

          <div id="masterclasses" className="scroll-mt-24">
            <DetailCard title="Masterclasses by Global Experts" tone="gold">
              <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                Masterclasses by Global Experts are carefully curated professional
                learning initiatives designed to provide educators and school leaders
                with access to internationally recognised expertise and contemporary
                global practices in Education. The programme reflects a strong commitment
                to continuous learning, professional excellence, and staying aligned with
                evolving research and innovation in student learning and school
                leadership.
              </p>
              <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                Through this programme, distinguished experts from across the world are
                invited to engage with educators and school leaders on areas of their
                specialised knowledge. Each masterclass offers in-depth exploration of
                key themes, evidence-informed practices and practical insights that can
                be meaningfully applied within school contexts.
              </p>
              <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                The masterclasses are conducted at different points during the academic
                year and are scheduled in alignment with the availability of the experts.
                This ensures a diverse range of perspectives and sustained opportunities
                for high-quality professional development, enabling participants to
                deepen their understanding, reflect on practice, and strengthen
                educational outcomes within their institutions.
              </p>
            </DetailCard>
          </div>
        </div>
      </section>

      {/* Teacher Workshops (imported directly, rendered inline) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container">
          <TeacherWorkshops />
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="section-padding scroll-mt-24" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>Contact Us</h2>
          <span className="gold-rule mx-auto mt-2" />
          <p className="body-m mt-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            For programme enquiries and partnerships, get in touch with the CEE@VVS team.
          </p>
          <p className="text-micro mt-4" style={{ color: 'var(--color-ink-40)' }}>
            PLACEHOLDER — contact details (email / phone) to be added
          </p>
        </div>
      </section>
    </>
  )
}