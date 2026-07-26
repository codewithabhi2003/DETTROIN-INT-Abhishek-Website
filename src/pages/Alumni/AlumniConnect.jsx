import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import AlumniConnectHero from './AlumniConnectHero'

const connectPrograms = [
  {
    id: 'career-connect',
    title: 'Career Connect',
    body: 'The Alumni Association of Vasant Valley School partnered with the school to organise its first Career Fair in August 2021. Alumni from diverse professions across the world interacted with students of Classes XI and XII, sharing valuable insights into their careers, workplace experiences and future opportunities. Conducted over two weekends, the event introduced students to a broad range of career paths and industry perspectives.',
  },
  {
    id: 'college-connect',
    title: 'College Connect',
    body: 'Alumni studying at leading universities across the globe interacted with students of Classes XI and XII, providing first-hand guidance on university applications, subject choices, campus life and student experiences. These sessions help students make informed decisions while preparing for higher education.',
  },
]

function ProgramCard({ item }) {
  return (
    <div className="rounded-(--radius-img) bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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

      <a
        href="#"
        className="inline-flex items-center gap-2 mt-6 font-medium"
        style={{ color: 'var(--color-maroon)' }}
      >
        Learn More
        <ArrowRight size={16} />
      </a>
    </div>
  )
}

export default function AlumniConnect() {
  return (
    <>
      <Helmet>
        <title>Alumni Connect | Vasant Valley School</title>

        <meta
          name="description"
          content="Stay connected with the Vasant Valley School alumni community through career guidance, college mentoring, reunions and alumni initiatives."
        />
      </Helmet>

      <AlumniConnectHero />

      {/* Introduction */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="heading-1"
              style={{ color: 'var(--color-maroon)' }}
            >
              A Lifelong Community
            </h2>

            <span className="gold-rule mx-auto mt-4" />

            <p
              className="body-m mt-8"
              style={{ color: 'var(--color-ink-70)' }}
            >
              Since 1999, more than 2,000 students have graduated from
              Vasant Valley School and have built successful careers across
              the world. Their connection with the school remains strong,
              creating a vibrant alumni community that continues to mentor,
              inspire and support future generations.
            </p>
          </div>

          {/* Merchandise */}

          <div className="rounded-(--radius-img) bg-gold-light p-10 text-center mt-14">
            <h3
              className="heading-3"
              style={{ color: 'var(--color-maroon)' }}
            >
              Alumni Merchandise
            </h3>

            <p
              className="body-m mt-5 max-w-2xl mx-auto"
              style={{ color: 'var(--color-ink-70)' }}
            >
              Exclusive Vasant Valley Alumni merchandise curated by
              <strong> Mrinalini Tandon (Class of 2000)</strong> is now
              available for alumni worldwide.
            </p>

            <a
              href="#"
              className="btn-primary mt-8 inline-flex"
            >
              Visit the Online Store
            </a>
          </div>

        </div>
      </section>

      {/* Career & College */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2
              className="heading-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              Alumni Initiatives
            </h2>

            <span className="gold-rule mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {connectPrograms.map((item) => (
              <ProgramCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Batch Connect */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="overflow-hidden rounded-(--radius-img) shadow-lg aspect-4/3">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Alumni reconnecting during an online reunion"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div>
              <h2
                className="heading-2"
                style={{ color: 'var(--color-maroon)' }}
              >
                Batch Connect
              </h2>

              <span className="gold-rule mt-4" />

              <p
                className="body-m mt-6"
                style={{ color: 'var(--color-ink-70)' }}
              >
                The Batch Connect initiative brings together alumni from
                across the globe, rekindling friendships and celebrating
                shared memories. These reunions strengthen the lifelong
                bond between former students and the school while creating
                opportunities to reconnect, collaborate and inspire future
                generations.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-8 font-medium"
                style={{ color: 'var(--color-maroon)' }}
              >
                Read More
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}