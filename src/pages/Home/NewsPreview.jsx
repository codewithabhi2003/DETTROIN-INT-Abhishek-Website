import { ArrowRight } from 'lucide-react'
import { OCTAGON_CLIP, PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

// TODO: swap for services/newsService.js once data/news.json exists (up to 7 latest)
const events = [
  {
    title: 'Delhi State Open Summer Athletics Championships',
    date: '2 – 5 June 2026',
    imageAlt: 'Student athlete at the starting line',
  },
  {
    title: '33rd Asian Junior Squash Championship 2026',
    date: '24 May 2026',
    imageAlt: 'Student holding a medal and certificate',
  },
  {
    title: 'CBSE Class XII 2026 — Results at a Glance',
    date: '13 May 2026',
    imageAlt: 'CBSE board emblem',
  },
  {
    title: 'Synapse — Interdisciplinary Science Fest',
    date: '23 – 24 July 2026',
    imageAlt: 'Synapse festival poster on display',
  },
]

const archives = ['June 2026', 'May 2026']

export default function NewsPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        <div className="grid md:grid-cols-[280px_1fr] gap-10">
          <div>
            <h2 className="heading-1">A Timeline of Recent Events</h2>
            <span className="gold-rule" />
            <p className="text-small font-semibold uppercase tracking-wide mt-8 mb-3" style={{ color: 'var(--color-ink-40)' }}>
              Browse archives
            </p>
            <ul className="space-y-2">
              {archives.map((a) => (
                <li key={a}>
                  <a href={`/news/news-events?month=${encodeURIComponent(a)}`} className="btn-ghost">
                    {a} <ArrowRight size={14} />
                  </a>
                </li>
              ))}
              <li>
                <a href="/news/news-events" className="btn-ghost" style={{ color: 'var(--color-maroon)' }}>
                  View all <ArrowRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 right-0 top-19 border-t-2 border-dotted hidden md:block"
              style={{ borderColor: 'var(--color-maroon)' }}
            />
            <ul className="flex gap-8 overflow-x-auto pb-4 -mx-1 px-1 snap-x snap-mandatory">
              {events.map((e) => (
                <li key={e.title} className="snap-start shrink-0 w-55 text-center">
                  <div
                    className="mx-auto relative"
                    style={{ width: 152, height: 152, clipPath: OCTAGON_CLIP, ...PLACEHOLDER_PATTERN }}
                    role="img"
                    aria-label={e.imageAlt}
                  />
                  <div className="w-px h-6 mx-auto mt-3" style={{ backgroundColor: 'var(--color-border)' }} />
                  <h3 className="body font-semibold mt-2" style={{ color: 'var(--color-ink)' }}>
                    {e.title}
                  </h3>
                  <p className="text-small mt-1">{e.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}