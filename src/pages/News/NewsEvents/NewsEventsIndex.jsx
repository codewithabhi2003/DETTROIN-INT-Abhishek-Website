import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const YEARS = Array.from({ length: 15 }, (_, i) => 2026 - i) // 2026 → 2012

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// TODO: swap for services/newsService.js once data/news.json exists
const newsItems = [
  {
    slug: 'synapse-2026',
    title: 'Synapse 2026',
    dateLabel: '22 July 2026 – 23 July 2026',
    year: 2026,
    month: 'July',
    excerpt:
      "Vasant Valley School hosted the 15th edition of Synapse, our annual inter-school science event, on 22nd and 23rd July 2026. The two-day event brought together some of the brightest young minds from across the National Capital Region, providing a vibrant platform for students to showcase their scientific talent, exchange ideas, and address real-world challenges through creativity, critical thinking, and collaboration. Participants from Classes 9 to 12 competed in three exciting events — Labyrinth (Class 9), Science Quiz (Class 10), Discovery Quest (Classes 11 & 12). Results: Labyrinth — First Place: Delhi Public School Vasant Kunj, Second Place: The Mother's International School Science Quiz",
    truncated: true,
  },
  {
    slug: '23rd-laissez-faire',
    title: 'The 23rd Edition of Laissez Faire',
    dateLabel: '17 July 2026',
    year: 2026,
    month: 'July',
    excerpt:
      "The 23rd Edition of Laissez Faire was held on 17th July, 2026. This year's theme, \"Finding 'WE' in a World of 'ME'\", celebrated the importance of empathy, collaboration, and dialogue. In an increasingly diverse and interconnected world, we believe that meaningful progress is achieved not by competing against one another, but by listening, understanding different perspectives, and moving forward together. In addition to the much-awaited Social Science Quiz, this year's event featured a range of engaging and thought-provoking competitions: Beyond the Frame: The Other Side — participants created a short film inspired by real human experiences, exploring themes of empathy, identity, misunderstanding, belonging and the",
    truncated: true,
  },
  {
    slug: '21st-suryodaya-it-fest',
    title: '21st Edition of Suryodaya IT Fest 2026',
    dateLabel: '14 July 2026 – 18 July 2026',
    year: 2026,
    month: 'July',
    excerpt:
      "Inter-School Sarvodaya, hosted by The Scindia School, Fort Gwalior. Three events. Three podium finishes. One proud moment! Our students represented Vasant Valley School at 21st Suryodaya '26, hosted by The Scindia School, Fort Gwalior, and returned with outstanding achievements: Retro View (Photography) — Third Position, Donna Chhatwal, 10A; Robo Rumble (Robotics) — First Position, Bickram Singh Laalie, 9I & Keshav Rana, 10A; Mind Mash (IT Quiz) — Third Position, Laghima Chopra, 9C & Vedang Sasturkar, 10B. Congratulations to our participants for their creativity, teamwork, and dedication. We are proud of their remarkable performance and wish them continued success in all their future endeavours.",
    truncated: false,
  },
  {
    slug: 'inter-school-tennis-zonal-2026',
    title: 'Inter-School Tennis Zonal Tournament 2026',
    dateLabel: '13 July 2026 – 15 July 2026',
    year: 2026,
    month: 'July',
    excerpt:
      'Our Under-14 Girls and Under-17 Girls Table Tennis Teams participated in the Inter-School Tennis Zonal Tournament held at GBSSS IARI, Pusa Rd, from 13th to 15th July 2026. The teams delivered an outstanding performance, achieving the following results: Under-14 Girls Team — First Place; Under-17 Boys Team — Bronze Place. Team members — Under-14: Alvira Seth, Nandini Raj, Nandini Sahib. Under-17: Vandana Puri, Aaditri Trivedi, Naintara Sitaram.',
    truncated: false,
  },
]

export default function NewsEventsIndex() {
  const [selectedYear, setSelectedYear] = useState(2026)
  const [selectedMonth, setSelectedMonth] = useState('July')

  const monthsWithContent = useMemo(
    () => new Set(newsItems.filter((item) => item.year === selectedYear).map((item) => item.month)),
    [selectedYear]
  )

  const filteredItems = useMemo(
    () => newsItems.filter((item) => item.year === selectedYear && item.month === selectedMonth),
    [selectedYear, selectedMonth]
  )

  return (
    <>
      <Helmet>
        <title>News & Events | Vasant Valley School</title>
        <meta
          name="description"
          content="Latest news, competitions and events from Vasant Valley School."
        />
      </Helmet>

      <section className="section-padding pb-0" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            News & Events
          </h1>
          <span className="gold-rule mx-auto" />
        </div>
      </section>

      {/* Archive filter */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by year">
            {YEARS.map((year) => {
              const isActive = year === selectedYear
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setSelectedYear(year)
                    setSelectedMonth(MONTHS[0])
                  }}
                  aria-pressed={isActive}
                  className="rounded-pill text-small font-semibold transition-colors"
                  style={{
                    padding: '6px 14px',
                    backgroundColor: isActive ? 'var(--color-maroon)' : 'transparent',
                    color: isActive ? 'var(--color-white)' : 'var(--color-ink-60)',
                    border: `1px solid ${isActive ? 'var(--color-maroon)' : 'var(--color-border)'}`,
                  }}
                >
                  {year}
                </button>
              )
            })}
          </div>

          <div
            className="flex flex-wrap justify-center gap-2 mt-6 pt-6"
            style={{ borderTop: '1px solid var(--color-border)' }}
            role="group"
            aria-label="Filter by month"
          >
            {MONTHS.map((month) => {
              const isActive = month === selectedMonth
              const hasContent = monthsWithContent.has(month)
              return (
                <button
                  key={month}
                  type="button"
                  disabled={!hasContent}
                  onClick={() => setSelectedMonth(month)}
                  aria-pressed={isActive}
                  className="rounded-pill text-small font-semibold transition-colors"
                  style={{
                    padding: '6px 14px',
                    backgroundColor: isActive ? 'var(--color-ink)' : 'transparent',
                    color: isActive
                      ? 'var(--color-white)'
                      : hasContent
                        ? 'var(--color-ink-60)'
                        : 'var(--color-ink-40)',
                    cursor: hasContent ? 'pointer' : 'not-allowed',
                    opacity: hasContent ? 1 : 0.5,
                  }}
                >
                  {month}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container">
          {filteredItems.length === 0 ? (
            <p className="body text-center" style={{ color: 'var(--color-ink-40)' }}>
              No stories published for {selectedMonth} {selectedYear} yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredItems.map((item) => (
                <article key={item.slug}>
                  <h2 className="heading-3">{item.title}</h2>
                  <p className="text-small mt-1" style={{ color: 'var(--color-ink-40)' }}>
                    {item.dateLabel}
                  </p>
                  <p className="body mt-3">
                    {item.excerpt}
                    {item.truncated && '…'}
                  </p>
                  {item.truncated && (
                    <a
                      href="#"
                      className="text-small font-semibold mt-3 inline-block"
                      style={{ color: 'var(--color-maroon)' }}
                    >
                      Read more
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}