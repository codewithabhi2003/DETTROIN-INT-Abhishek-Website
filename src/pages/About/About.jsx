import { Helmet } from 'react-helmet-async'
import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'
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

      {/* IMAGE SLOT — full staff photo on the sandstone campus steps */}
      <div
        className="relative h-70 md:h-100 w-full"
        style={PLACEHOLDER_PATTERN}
        role="img"
        aria-label="The Vasant Valley staff on the campus steps"
      >
        <span className="absolute bottom-3 right-4 text-micro" style={{ color: 'var(--color-ink-40)' }}>
          IMAGE — staff group photo, campus steps
        </span>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="heading-1">
            Run by the Education Today Trust, Vasant Valley School is the
            realisation of Mr. Aroon Purie and Mrs. Rekha Purie's vision of
            the ideal school experience for children.
          </h1>
          <span className="gold-rule mx-auto" />
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