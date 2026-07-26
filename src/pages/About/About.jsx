import { Helmet } from 'react-helmet-async'
import FoundersSection from './FoundersSection'
import LeadershipHistorySection from './LeadershipHistorySection'
import CurrentLeadershipSection from './CurrentLeadershipSection'
import StaffSection from './StaffSection'
import AlumniSection from './AlumniSection'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Vasant Valley School</title>
        <meta
          name="description"
          content="Vasant Valley School is run by the Education Today Trust — the realisation of Mr. Aroon Purie and Mrs. Rekha Purie's vision for the ideal school experience."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-105 md:h-[75vh] overflow-hidden">
        <img
          src="https://static.vasantvalley.org/wp-content/uploads/2026/07/25095946/synapse_2026_6.jpeg"
          alt="Students and teachers on the Vasant Valley School campus"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.65) 100%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative h-full flex items-end">
          <div className="section-container w-full pb-12 md:pb-20">
            <div className="max-w-4xl">
              <span className="badge badge-gold mb-5">
                Since 1990
              </span>

              <h1
                className="display-xl"
                style={{ color: 'var(--color-white)' }}
              >
                About Vasant Valley School
              </h1>

              <span className="gold-rule mt-5" />

              <p
                className="body-l mt-6 max-w-2xl"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                }}
              >
                Run by the Education Today Trust, Vasant Valley School is
                the realisation of Mr. Aroon Purie and Mrs. Rekha Purie's
                vision of the ideal school experience for children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-4xl mx-auto text-center">
          <p className="heading-2">
            For over three decades, Vasant Valley School has nurtured
            curiosity, creativity, compassion and excellence. Every child
            is encouraged to think independently, act responsibly and
            contribute meaningfully to society.
          </p>

          <span className="gold-rule mx-auto mt-6" />

          <p className="body mt-8">
            The school believes that education extends beyond academic
            excellence. Through a balanced emphasis on academics, arts,
            sports, leadership and service, students develop the confidence,
            values and skills needed to thrive in an ever-changing world.
          </p>
        </div>
      </section>

      <FoundersSection />

      <LeadershipHistorySection />

      <CurrentLeadershipSection />

      <StaffSection />

      <AlumniSection />
    </>
  )
}