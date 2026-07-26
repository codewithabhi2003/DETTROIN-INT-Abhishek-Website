import { Helmet } from 'react-helmet-async'
import {
  Users,
  Activity,
  HeartPulse,
  MessageCircle,
  Brain,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react'

const supportTeam = [
  {
    id: 'special-ed',
    icon: BookOpen,
    label: 'Special Education Teachers',
  },
  {
    id: 'ot',
    icon: Activity,
    label: 'Occupational Therapists',
  },
  {
    id: 'physio',
    icon: HeartPulse,
    label: 'Physiotherapists',
  },
  {
    id: 'language',
    icon: MessageCircle,
    label: 'Language Therapists',
  },
  {
    id: 'psych',
    icon: Brain,
    label: 'Psychologists',
  },
  {
    id: 'dyslexia',
    icon: Users,
    label: 'Dyslexia Therapist',
  },
]

const approach = [
  {
    id: 'inclusive-model',
    title: 'Inclusive Model',
    body: 'The inclusive model of special education is followed, enabling children with additional needs to learn within the general education classroom. Occupational Therapy, Physiotherapy and Language Therapy are integrated into the school day.',
  },
  {
    id: 'iep',
    title: 'Individualised Education Plans',
    body: 'Every child is supported through an Individualised Education Plan (IEP), ensuring personalised learning goals that build upon individual strengths, interests and abilities.',
  },
  {
    id: 'early-intervention',
    title: 'Early Intervention Programme',
    body: 'The Early Intervention Programme supports younger children who benefit from structured learning experiences before transitioning into a regular classroom environment.',
  },
  {
    id: 'family-partnership',
    title: 'Working With Families',
    body: 'Parents, therapists and teachers work closely together to ensure that each child receives consistent support across therapy sessions, classrooms and home environments.',
  },
]

export default function SpecialEducationNeeds() {
  return (
    <>
      <Helmet>
        <title>Special Education Needs | Vasant Valley School</title>

        <meta
          name="description"
          content="Discover Vasant Valley School's multidisciplinary Special Education Needs programme, offering inclusive learning, therapy services and personalised educational support."
        />
      </Helmet>

      {/* Hero */}

      <section className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Teacher supporting children in an inclusive classroom"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <span className="badge badge-gold mx-auto mb-6">
              Student Support
            </span>

            <h1 className="heading-1 text-white">
              Special Education Needs
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
              Every child deserves the opportunity to learn, grow and
              flourish. Our multidisciplinary team provides personalised,
              inclusive support that empowers students to reach their full
              potential.
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
            Supporting Every Learner
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Vasant Valley School's multidisciplinary Special Education Needs
            Section includes Special Education Teachers, Occupational
            Therapists, Physiotherapists, Language Therapists,
            Psychologists and a Dyslexia Therapist who work together to
            provide holistic and individualised support.
          </p>

        </div>
      </section>

      {/* Support Team */}

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
              Our Support Team
            </h2>

            <span className="gold-rule mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {supportTeam.map((member) => {
              const Icon = member.icon

              return (
                <div
                  key={member.id}
                  className="rounded-(--radius-img) bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
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
                    {member.label}
                  </h3>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* Approach */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="text-center">
            <h2
              className="heading-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              Our Approach
            </h2>

            <span className="gold-rule mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

            {approach.map((item) => (
              <div
                key={item.id}
                className="rounded-(--radius-img) bg-gold-light p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3
                  className="heading-3"
                  style={{ color: 'var(--color-maroon)' }}
                >
                  {item.title}
                </h3>

                <p
                  className="body-m mt-5"
                  style={{ color: 'var(--color-ink-70)' }}
                >
                  {item.body}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Facilities */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="overflow-hidden rounded-(--radius-img) shadow-lg aspect-4/3">
              <img
                src="https://images.pexels.com/photos/8613156/pexels-photo-8613156.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Therapy and learning support facilities"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div>

              <h2
                className="heading-2"
                style={{ color: 'var(--color-maroon)' }}
              >
                Specialist Facilities
              </h2>

              <span className="gold-rule mt-4" />

              <p
                className="body-m mt-6"
                style={{ color: 'var(--color-ink-70)' }}
              >
                The school has a fully equipped Occupational Therapy
                facility featuring dedicated spaces for Occupational
                Therapy, Physiotherapy and Sensory Integration, providing
                students with comprehensive therapeutic support in a safe
                and nurturing environment.
              </p>

              <a
                href="https://static.vasantvalley.org/wp-content/uploads/2021/05/specialeducation-image1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                <ImageIcon size={16} />
                View Photo Gallery
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}