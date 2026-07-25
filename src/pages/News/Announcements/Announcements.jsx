import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const announcements = [
  {
    id: 'class-12-cbse-marksheet',
    title: 'Class 12 CBSE Marksheet',
    excerpt:
      'CBSE Marksheets of the All India Senior School Certificate Examination for Class XII are available and can be collected from the Senior School Office on any working day between 10:00 a.m to 3:00 p.m. from Wednesday, 3rd June, 2026 onwards.',
    to: '/announcements/class-12-cbse-marksheet',
  },
  {
    id: 'vasant-valley-centre-for-excellence-in-education',
    title: 'Vasant Valley Centre for Excellence in Education',
    excerpt:
      "We are pleased to introduce the Vasant Valley Centre for Excellence in Education. This initiative is rooted in our school's long-standing commitment to excellence in teaching and learning. Our work at the Centre draws on thirty-six years of experience in nurturing professional learning communities, mentoring educators, and aligning academic practices with child-centred values that define Vasant Valley School…",
    to: '/announcements/vasant-valley-centre-for-excellence-in-education',
  },
  {
    id: 'announcing-vasant-valley-school-gurgaon',
    title: 'Announcing Vasant Valley School, Gurgaon',
    excerpt:
      'We are very happy to announce that Vasant Valley School, founded and run by Education Today for over 36 years, is expanding. The first of the new Vasant Valley Schools will open in Gurgaon and will be led by a team of experienced educators. The ethos, standards, and commitment to holistic development that define the founding campus will remain at the heart of every new campus.',
    to: '/announcements/announcing-vasant-valley-school-gurgaon',
  },
]

function AnnouncementRow({ item }) {
  return (
    <div
      className="py-8"
      style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}
    >
      <h2 className="heading-3" style={{ color: 'var(--color-ink)' }}>
        <Link to={item.to}>{item.title}</Link>
      </h2>
      <p
        className="body-m mt-3"
        style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
      >
        {item.excerpt}
      </p>
      <Link
        to={item.to}
        className="text-small mt-4 inline-flex items-center gap-1"
        style={{ color: 'var(--color-gold)' }}
      >
        Read More
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
  )
}

export default function Announcements() {
  return (
    <>
      <Helmet>
        <title>Announcements | Vasant Valley School</title>
        <meta
          name="description"
          content="Latest announcements from Vasant Valley School, including examination results, new initiatives and campus updates."
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto">
          <h1 className="heading-1">Announcements</h1>
          <span className="gold-rule" />
          <div className="mt-4">
            {announcements.map((item) => (
              <AnnouncementRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}