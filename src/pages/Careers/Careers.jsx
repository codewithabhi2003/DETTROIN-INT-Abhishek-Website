import { Helmet } from 'react-helmet-async'
import {
  BookOpen,
  Users,
  HeartHandshake,
  TrendingUp,
  Briefcase,
  Mail,
} from 'lucide-react'

const whyWorkWithUs = [
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Professional Growth',
    body: 'Access ongoing professional development, mentorship programmes and leadership opportunities through CEE@VVS, while continuously refining your teaching practice.',
  },
  {
    id: 'culture',
    icon: Users,
    title: 'Collaborative Culture',
    body: 'Join a vibrant community of educators who believe in teamwork, innovation and lifelong learning, supported by experienced mentors and school leadership.',
  },
  {
    id: 'student-centred',
    icon: HeartHandshake,
    title: 'Student-Centred Philosophy',
    body: "Every decision at Vasant Valley School is guided by the holistic development of every child and our guiding principle of 'Excellence in Deed'.",
  },
  {
    id: 'learning',
    icon: BookOpen,
    title: 'A Learning Community',
    body: 'Teaching is viewed as a craft that evolves through reflection, collaboration and curiosity, encouraging educators to innovate and inspire every day.',
  },
]

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Vasant Valley School</title>

        <meta
          name="description"
          content="Join Vasant Valley School and build a meaningful career in education within a collaborative, innovative and student-centred learning community."
        />
      </Helmet>

      {/* Hero */}

      <section className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Teachers collaborating in a modern school"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <span className="badge badge-gold mx-auto mb-6">
              Join Our Team
            </span>

            <h1 className="heading-1 text-white">
              Careers at Vasant Valley School
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
              Inspire young minds, collaborate with passionate educators and
              become part of a school community committed to excellence,
              innovation and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-4xl mx-auto text-center">

          <h2
            className="heading-2"
            style={{ color: 'var(--color-maroon)' }}
          >
            Build a Meaningful Career
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            We welcome passionate educators and professionals who share our
            commitment to academic excellence, innovation and the holistic
            development of every child. At Vasant Valley School, every team
            member contributes to creating a nurturing and inspiring learning
            environment.
          </p>

        </div>
      </section>

      {/* Why Work With Us */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="text-center">
            <h2
              className="heading-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              Why Work With Us
            </h2>

            <span className="gold-rule mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

            {whyWorkWithUs.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="rounded-(--radius-img) bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(128,97,35,.12)',
                    }}
                  >
                    <Icon
                      size={30}
                      style={{
                        color: 'var(--color-maroon)',
                      }}
                    />
                  </div>

                  <h3
                    className="heading-3 mt-6"
                    style={{
                      color: 'var(--color-maroon)',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="body-m mt-5"
                    style={{
                      color: 'var(--color-ink-70)',
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* Current Openings */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-5xl mx-auto">

          <div className="rounded-(--radius-img) bg-gold-light p-10 md:p-12 text-center">

            <div
              className="w-18 h-18 rounded-full mx-auto flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(128,97,35,.12)',
              }}
            >
              <Briefcase
                size={34}
                style={{
                  color: 'var(--color-maroon)',
                }}
              />
            </div>

            <h2
              className="heading-2 mt-6"
              style={{ color: 'var(--color-maroon)' }}
            >
              Current Openings
            </h2>

            <span className="gold-rule mx-auto mt-4" />

            <p
              className="body-m mt-8"
              style={{ color: 'var(--color-ink-70)' }}
            >
              There are no vacancies available at the moment.
            </p>

            <p
              className="body-m mt-4"
              style={{ color: 'var(--color-ink-70)' }}
            >
              We encourage interested candidates to share their profile for
              future opportunities. Suitable applicants will be contacted
              whenever relevant positions become available.
            </p>

          </div>

        </div>
      </section>

      {/* Apply */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container max-w-4xl mx-auto">

          <div className="rounded-(--radius-img) bg-white p-10 md:p-12 text-center shadow-sm">

            <div
              className="w-18 h-18 rounded-full mx-auto flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(128,97,35,.12)',
              }}
            >
              <Mail
                size={34}
                style={{
                  color: 'var(--color-maroon)',
                }}
              />
            </div>

            <h2
              className="heading-2 mt-6"
              style={{ color: 'var(--color-maroon)' }}
            >
              How to Apply
            </h2>

            <span className="gold-rule mx-auto mt-4" />

            <p
              className="body-m mt-8"
              style={{ color: 'var(--color-ink-70)' }}
            >
              Interested candidates may submit their résumé along with a
              cover letter to the school office. Applications are carefully
              reviewed and shortlisted candidates will be contacted for
              current or upcoming opportunities.
            </p>

            <a
              href="mailto:careers@vasantvalley.edu.in"
              className="btn-primary mt-10 inline-flex items-center gap-2"
            >
              <Mail size={18} />
              careers@vasantvalley.edu.in
            </a>

            <p
              className="text-small mt-6"
              style={{ color: 'var(--color-ink-40)' }}
            >
              Replace the email above with the official recruitment email if
              different.
            </p>

          </div>

        </div>
      </section>
    </>
  )
}