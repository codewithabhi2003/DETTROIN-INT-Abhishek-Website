const cycles = [
  { number: 1, months: ['April', 'May'] },
  { number: 2, months: ['July', 'August', 'September'] },
  { number: 3, months: ['October', 'November', 'December'] },
  { number: 4, months: ['January', 'February', 'March'] },
]

export default function LearningCycles() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Learning Cycles
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            The academic year, from April to March, is divided into four
            Learning Cycles. Each cycle provides students with focused
            learning goals, regular assessments and opportunities for
            reflection and continuous growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
          {cycles.map((cycle) => (
            <div
              key={cycle.number}
              className="rounded-(--radius-img)] bg-gold-light p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: 'var(--color-gold-dark)' }}
                >
                  Learning Cycle
                </span>

                <span
                  className="text-6xl font-bold leading-none"
                  style={{ color: 'rgba(11,15,25,.12)' }}
                >
                  {cycle.number}
                </span>
              </div>

              <span className="gold-rule mt-5" />

              <ul className="mt-6 space-y-3">
                {cycle.months.map((month) => (
                  <li
                    key={month}
                    className="body-m flex items-center gap-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: 'var(--color-maroon)',
                      }}
                    />

                    {month}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}