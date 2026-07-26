import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  Building2,
  HeartPulse,
  Bus,
} from 'lucide-react'

const sections = [
  {
    title: 'Learning Spaces',
    icon: Building2,
    paragraphs: [
      'The school features well-equipped Science laboratories, two libraries, a state-of-the-art Occupational Therapy facility, a modern auditorium, gymnasium, extensive sports facilities and a dedicated Centre for Visual and Performing Arts.',
      'Every classroom is equipped for audio-visual learning, while the entire campus is supported by high-speed wireless connectivity to enhance teaching and collaboration.',
    ],
  },
  {
    title: 'Health & Safety',
    icon: HeartPulse,
    paragraphs: [
      'The campus has three full-time qualified nurses, fully equipped medical rooms and a paediatrician available on call. Several leading hospitals are located within a kilometre of the school.',
      'Students and staff regularly participate in workshops and emergency response training covering first aid, fire safety, earthquakes and other emergency preparedness drills.',
      'Annual health check-ups are conducted for all students and staff. CCTV surveillance, air purifiers, fire safety systems and a strict zero-tolerance policy towards bullying and substance abuse ensure a safe learning environment.',
      'Cyber safety workshops and responsible technology sessions are conducted throughout the year to promote safe digital practices.',
    ],
  },
  {
    title: 'Transport',
    icon: Bus,
    paragraphs: [
      "Students across South Delhi can avail the school's transport facility. The school also encourages organised carpooling and community transport initiatives wherever school buses are unavailable.",
      "All buses comply with the Government of NCT of Delhi and Hon'ble Supreme Court safety guidelines to ensure secure and reliable transportation.",
    ],
  },
]

const PHOTO_GALLERY_URL =
  'https://static.vasantvalley.org/wp-content/uploads/2021/05/part-9.jpg'

export default function Infrastructure() {
  return (
    <>
      <Helmet>
        <title>Infrastructure | Vasant Valley School</title>

        <meta
          name="description"
          content="Explore the Vasant Valley School campus, featuring modern learning spaces, sports facilities, health services, safety systems and transport."
        />
      </Helmet>

      {/* Hero */}

      <section className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://static.vasantvalley.org/wp-content/uploads/2021/04/infra-banner-1.jpg"
          alt="Modern school campus"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <span className="badge badge-gold mx-auto mb-6">
              Campus
            </span>

            <h1 className="heading-1 text-white">
              Infrastructure
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
              Purposefully designed learning spaces, modern facilities and
              green open environments create an inspiring campus where
              students learn, collaborate and thrive every day.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2
                className="heading-2"
                style={{ color: 'var(--color-maroon)' }}
              >
                A Campus Designed for Learning
              </h2>

              <span className="gold-rule mt-4" />

              <p
                className="body-m mt-6"
                style={{ color: 'var(--color-ink-70)' }}
              >
                The campus combines academic spaces, sports facilities,
                gardens, courtyards and recreational areas within a vibrant
                green environment featuring more than 400 species of trees
                and plants.
              </p>

              <p
                className="body-m mt-5"
                style={{ color: 'var(--color-ink-70)' }}
              >
                Every part of the campus is thoughtfully planned to
                encourage collaboration, creativity and accessibility,
                while remaining fully challenge compliant.
              </p>

              <a
                href={PHOTO_GALLERY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                View Photo Gallery
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-(--radius-img) shadow-lg aspect-4/3">
              <img
                src="https://static.vasantvalley.org/wp-content/uploads/2021/04/valley-1.png"
                alt="Students walking through a modern school campus"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Feature Cards */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="grid grid-cols-1 gap-8">

            {sections.map((section) => {
              const Icon = section.icon

              return (
                <div
                  key={section.title}
                  className="rounded-(--radius-img) bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-8">

                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
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

                    <div>
                      <h2
                        className="heading-2"
                        style={{
                          color: 'var(--color-maroon)',
                        }}
                      >
                        {section.title}
                      </h2>

                      <span className="gold-rule mt-4" />

                      <div className="space-y-5 mt-6">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="body-m"
                            style={{
                              color: 'var(--color-ink-70)',
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* Closing */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-4xl mx-auto text-center">

          <h2
            className="heading-2"
            style={{ color: 'var(--color-maroon)' }}
          >
            An Environment That Inspires
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-l mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            From technology-enabled classrooms and specialist learning
            centres to safe transport and comprehensive healthcare, every
            aspect of the Vasant Valley campus is designed to support
            academic excellence, creativity and student wellbeing.
          </p>

        </div>
      </section>
    </>
  )
}