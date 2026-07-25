const cycles = [
  { number: 1, months: ['April', 'May'] },
  { number: 2, months: ['July', 'August', 'September'] },
  { number: 3, months: ['October', 'November', 'December'] },
  { number: 4, months: ['January', 'February', 'March'] },
]

export default function LearningCycles() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        <p className="body-l max-w-2xl mx-auto text-center" style={{ color: 'var(--color-ink)' }}>
          From April to March of the following year, each academic year is
          divided into four Learning Cycles.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {cycles.map((cycle) => (
            <div
              key={cycle.number}
              className="rounded-(--radius-img) p-5"
              style={{ backgroundColor: 'var(--color-gold-light)' }}
            >
              <div className="flex items-start justify-between">
                <span className="text-micro font-medium uppercase tracking-wide" style={{ color: 'var(--color-gold-dark, var(--color-gold))' }}>
                  Learning Cycle
                </span>
                <span className="display-l leading-none" style={{ color: 'var(--color-ink-20, rgba(11,15,25,0.2))' }}>
                  {cycle.number}
                </span>
              </div>
              <span className="gold-rule" style={{ marginTop: '0.75rem' }} />
              <ul className="mt-3 space-y-1">
                {cycle.months.map((month) => (
                  <li key={month} className="body-m" style={{ color: 'var(--color-ink)' }}>
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