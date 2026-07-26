import { ArrowRight } from 'lucide-react'

const announcements = [
  {
    title: 'Class 12 CBSE Marksheet',
    date: 'From Wed, 3 June 2026',
    body: 'CBSE Marksheets of the All India Senior School Certificate Examination for Class XII are available and can be collected from the Senior School Office on any working day between 10:00 a.m. and 3:00 p.m.',
  },
  {
    title: 'Winter Break — Academic Calendar',
    date: '15 Dec – 2 Jan',
    body: 'The school will remain closed for the winter break. Classes resume on 3 January for all sections. The revised academic calendar is available on request.',
  },
  {
    title: 'Parent–Teacher Meetings',
    date: 'Sat, 8 Aug, 9:00 a.m.',
    body: 'PTMs for Classes VI–XII will be held on campus. Slots may be booked through the parent portal from 1 August onwards.',
  },
]

export default function AnnouncementsPreview() {
  return (
    <section
      className="relative section-padding"
      style={{
        backgroundColor: 'var(--color-maroon)',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay to maintain maroon depth and ensure text legibility */}
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 section-container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <h2 className="heading-1" style={{ color: 'var(--color-white)' }}>
            Announcements
          </h2>
          <a
            href="/news/announcements"
            className="btn-ghost inline-flex items-center gap-2"
            style={{ color: 'var(--color-gold-light)' }}
          >
            View all <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((a) => (
            <article
              key={a.title}
              className="rounded-(--radius-card) p-6 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              <span className="badge badge-gold">{a.date}</span>
              <h3
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 600,
                  color: 'var(--color-white)',
                }}
              >
                {a.title}
              </h3>
              <p className="text-small mt-3" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {a.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}