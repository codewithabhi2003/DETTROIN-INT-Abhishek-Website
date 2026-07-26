import { ArrowRight } from 'lucide-react'
import { OCTAGON_CLIP } from '@/constants/imagePlaceholder'

const events = [
  {
    title: 'Delhi State Open Summer Athletics Championships',
    date: '2 – 5 June 2026',
    image:
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Student athlete at the starting line',
  },
  {
    title: '33rd Asian Junior Squash Championship 2026',
    date: '24 May 2026',
    image:
      'https://images.pexels.com/photos/6203681/pexels-photo-6203681.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Student holding a medal',
  },
  {
    title: 'CBSE Class XII 2026 — Results at a Glance',
    date: '13 May 2026',
    image:
      'https://images.pexels.com/photos/8471797/pexels-photo-8471797.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Students in classroom',
  },
  {
    title: 'Synapse — Interdisciplinary Science Fest',
    date: '23 – 24 July 2026',
    image:
      'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Science exhibition',
  },
]

const archives = ['June 2026', 'May 2026']

export default function NewsPreview() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

          {/* Sidebar */}
          <div className="text-center lg:text-left">
            <h2 className="heading-1">
              A Timeline of Recent Events
            </h2>

            <span className="gold-rule mx-auto lg:mx-0" />

            <p
              className="text-small font-semibold uppercase tracking-wide mt-8 mb-3"
              style={{ color: 'var(--color-ink-40)' }}
            >
              Browse Archives
            </p>

            <ul className="space-y-2">
              {archives.map((a) => (
                <li key={a}>
                  <a
                    href={`/news/news-events?month=${encodeURIComponent(a)}`}
                    className="btn-ghost inline-flex items-center gap-2"
                  >
                    {a}
                    <ArrowRight size={14} />
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/news/news-events"
                  className="btn-ghost inline-flex items-center gap-2"
                  style={{ color: 'var(--color-maroon)' }}
                >
                  View all
                  <ArrowRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Desktop dotted line */}
            <div
              className="absolute left-0 right-0 top-20 border-t-2 border-dotted hidden lg:block"
              style={{
                borderColor: 'var(--color-maroon)',
              }}
            />

            <ul className="flex gap-5 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 px-1">

              {events.map((e) => (
                <li
                  key={e.title}
                  className="snap-start shrink-0 w-42.5 sm:w-47.5 md:w-52.5 lg:w-55 text-center"
                >
                  <div
                    className="mx-auto relative overflow-hidden w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
                    style={{
                      clipPath: OCTAGON_CLIP,
                    }}
                  >
                    <img
                      src={e.image}
                      alt={e.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-px h-6 mx-auto mt-3"
                    style={{
                      backgroundColor: 'var(--color-border)',
                    }}
                  />

                  <h3
                    className="mt-3 px-2 text-sm md:text-base font-semibold leading-snug wrap-break-words"
                    style={{
                      color: 'var(--color-ink)',
                    }}
                  >
                    {e.title}
                  </h3>

                  <p
                    className="mt-2 text-xs md:text-sm"
                    style={{
                      color: 'var(--color-ink-60)',
                    }}
                  >
                    {e.date}
                  </p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}