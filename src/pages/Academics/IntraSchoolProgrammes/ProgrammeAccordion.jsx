import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProgrammeAccordion({ items, defaultOpenId }) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id)

  return (
    <div className="mt-10 space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: 'rgba(128,97,35,.12)',
            }}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 md:px-8 md:py-6 text-left transition-colors duration-200 hover:bg-gold-light"
            >
              <span
                className="text-lg md:text-xl font-semibold leading-relaxed"
                style={{ color: 'var(--color-maroon)' }}
              >
                {item.title}
              </span>

              <ChevronDown
                size={22}
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                style={{
                  color: 'var(--color-gold-dark, var(--color-gold))',
                }}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-4">
                  {(Array.isArray(item.body)
                    ? item.body
                    : [item.body]
                  ).map((para, index) => (
                    <p
                      key={index}
                      className="leading-8"
                      style={{
                        color:
                          'var(--color-ink-70, rgba(11,15,25,.72))',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}