export default function SportsProgramme() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gold-light)' }}
    >
      <div className="section-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            The Sports Programme
          </h2>

          <span className="gold-rule mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Physical education is an integral part of life at Vasant Valley
            School. Students develop fitness, teamwork, discipline and
            sportsmanship through structured coaching, competitions and
            year-round sporting activities.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-10 md:mt-12">
          <div
            className="rounded-2xl bg-white p-8 shadow-sm"
            style={{
              border: '1px solid rgba(128,97,35,.12)',
            }}
          >
            <h3
              className="heading-3"
              style={{ color: 'var(--color-maroon)' }}
            >
              Sports Facilities
            </h3>

            <p
              className="body-m mt-5"
              style={{ color: 'var(--color-ink-70)' }}
            >
              Physical Education is built into the curriculum with guidance
              from qualified teachers and specialist tennis and squash
              coaches. The campus features cricket, football and hockey
              fields, along with tennis, basketball and squash courts.
              Students also participate in the Annual Track & Field Meet and
              Inter-House tournaments throughout the academic year.
            </p>
          </div>

          <div
            className="rounded-2xl bg-white p-8 shadow-sm"
            style={{
              border: '1px solid rgba(128,97,35,.12)',
            }}
          >
            <h3
              className="heading-3"
              style={{ color: 'var(--color-maroon)' }}
            >
              Competitive Excellence
            </h3>

            <p
              className="body-m mt-5"
              style={{ color: 'var(--color-ink-70)' }}
            >
              School teams regularly compete in Inter-School, State, Zonal
              and National tournaments. Students undergo age-appropriate
              physical fitness assessments twice each year, while those
              pursuing sports outside the school receive academic support,
              flexible schedules and additional teaching to balance sporting
              excellence with their education.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}