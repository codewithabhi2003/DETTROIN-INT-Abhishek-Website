import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, HeartHandshake, TrendingUp } from 'lucide-react'

const whyWorkWithUs = [
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Professional Growth',
    body: 'Access to ongoing training, mentorship and leadership development through CEE@VVS, alongside opportunities to grow within the school.',
  },
  {
    id: 'culture',
    icon: Users,
    title: 'A Collaborative Culture',
    body: 'Work alongside experienced educators in a school known for its strong, supportive community of teachers, staff and leadership.',
  },
  {
    id: 'student-centred',
    icon: HeartHandshake,
    title: 'Student-Centred Ethos',
    body: "Be part of a school where every decision is grounded in the holistic development and well-being of the child, in line with our motto, 'Excellence in Deed'.",
  },
  {
    id: 'learning',
    icon: BookOpen,
    title: 'A Culture of Learning',
    body: 'Join a school that treats teaching as a craft worth refining, with space to reflect, question and re-imagine practice throughout your career.',
  },
]

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Vasant Valley School</title>
        <meta
          name="description"
          content="Explore careers at Vasant Valley School — teaching, leadership and support roles in a collaborative, student-centred community."
        />
      </Helmet>

      {/* Intro */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <span className="badge badge-gold w-fit mx-auto mb-4">Join Us</span>
          <h1 className="heading-1">Careers at Vasant Valley School</h1>
          <span className="gold-rule mx-auto" />
          <p
            className="body-l mt-5"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            We are always looking for passionate educators and staff who share our
            commitment to thoughtful pedagogy and the holistic development of every
            child in our care.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            Why Work With Us
          </h2>
          <span className="gold-rule mt-2" />
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10 mt-8">
            {whyWorkWithUs.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.id}>
                  <Icon size={28} color="var(--color-gold)" aria-hidden="true" />
                  <h3 className="heading-3 mt-4" style={{ color: 'var(--color-ink)' }}>
                    {item.title}
                  </h3>
                  <p
                    className="body-m mt-3"
                    style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
                  >
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            Current Openings
          </h2>
          <span className="gold-rule mt-2" />
          <div
            className="rounded-(--radius-img) mt-8 p-8 text-center"
            style={{ backgroundColor: 'var(--color-gold-light)' }}
          >
            <p className="body-m" style={{ color: 'var(--color-ink)' }}>
              There are no open positions listed at the moment.
            </p>
            <p
              className="text-small mt-2"
              style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
            >
              Please check back for updates, or send us your resume below for future
              opportunities.
            </p>
            <p className="text-micro mt-4" style={{ color: 'var(--color-ink-40)' }}>
              PLACEHOLDER — live openings list to be added
            </p>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            How to Apply
          </h2>
          <span className="gold-rule mx-auto mt-2" />
          <p
            className="body-m mt-4"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            Interested candidates can send their resume and a cover letter to the school
            office. Our team will get in touch if your profile matches a current or
            upcoming opening.
          </p>
          <p className="text-micro mt-4" style={{ color: 'var(--color-ink-40)' }}>
            PLACEHOLDER — careers email / application form link to be added
          </p>
        </div>
      </section>
    </>
  )
}