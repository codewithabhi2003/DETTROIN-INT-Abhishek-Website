import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GurgaonCampus() {
  return (
    <>
      <Helmet>
        <title>Announcing Vasant Valley School, Gurgaon | Vasant Valley School</title>
        <meta
          name="description"
          content="Vasant Valley School announces new campuses starting in Gurgaon, developed by a dedicated new team building on 36 years of the School's ethos and academic standards."
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto">
          <Link
            to="/announcements"
            className="text-small"
            style={{ color: 'var(--color-gold)' }}
          >
            Announcements
          </Link>

          <h1 className="heading-1 mt-4">Announcing Vasant Valley School, Gurgaon</h1>
          <span className="gold-rule" />

          <div className="mt-6 space-y-4">
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              Thirty-six years ago, a dream took shape, and Vasant Valley School was
              born. Over the years, the School, founded and run by Education Today, has
              built a reputation for strength, authenticity, and excellence in school
              education. This reputation rests upon a foundation of shared values,
              thoughtful pedagogy, and an unwavering commitment to the holistic
              development of every child entrusted to our care. Today, we are recognised
              not only for the quality of our teaching and leadership but for the
              enduring trust placed in us by generations of families and educators.
            </p>
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              We are now ready to begin an exciting new chapter by taking our expertise
              and best practices to a wider community of learners through new campuses
              starting in Gurgaon. While the founding campus will continue to be run by
              Education Today, the new Vasant Valley Schools will be developed and
              managed by a dedicated new team that includes our former Principal, Ms
              Rekha Krishnan (Chief Education Officer, Education Today), Mr Raj Singh
              Bhandal (Trustee, Vasant Valley School), Mr Vishnu Karthik (Former CEO,
              Heritage Xperiential Group of Schools), and other educators with a proven
              track record of setting up progressive school communities.
            </p>
            <p className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
              The ethos, academic standards, curriculum, and deep focus on student
              well-being, along with our motto of 'Excellence in Deed', will remain
              firmly at the heart of everything they do. While these new Vasant Valley
              Schools will build on the learning of the last 36 years, they will also
              reflect 21st-century global educational best practices.
            </p>
          </div>

          <a
            href="https://www.vasantvalley.school/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex items-center gap-2 w-fit"
          >
            Visit Vasant Valley School – Gurgaon
            <ArrowRight size={16} aria-hidden="true" />
          </a>

          <p className="body-m mt-8" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            We value your continued support and good wishes as we embark on this
            significant new phase in Vasant Valley School's journey.
          </p>

          <div className="mt-8">
            <p className="body-m" style={{ color: 'var(--color-ink)' }}>Rekha Purie</p>
            <p className="text-small" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>Chairperson</p>
            <p className="text-small" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>Vasant Valley School</p>
            <p className="text-small" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>(Education Today Trust)</p>
          </div>
        </div>
      </section>
    </>
  )
}