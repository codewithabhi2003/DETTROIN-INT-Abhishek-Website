import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProgrammeAccordion({ items, defaultOpenId }) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id)

  return (
    <div className="mt-6 divide-y" style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))', borderColor: 'var(--color-ink-10, rgba(11,15,25,0.1))' }}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} style={{ borderBottom: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
            >
              <span className="body-l font-medium" style={{ color: 'var(--color-ink)' }}>
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className="shrink-0 transition-transform duration-200"
                style={{
                  color: 'var(--color-gold-dark, var(--color-gold))',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            {isOpen && (
              <div className="pb-5 space-y-3 max-w-2xl">
                {(Array.isArray(item.body) ? item.body : [item.body]).map((para, i) => (
                  <p key={i} className="body-m" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}