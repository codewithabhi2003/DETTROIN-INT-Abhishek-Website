import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'

const slugify = (s) => s.replace(/\s+/g, '-').toLowerCase()

/**
 * sections: [{ role: 'Teacher Login', links: [{ label, href }] }]
 * All sections default open (matches the current site on desktop) but each
 * is independently collapsible — most useful on small screens.
 */
export default function LoginRoleAccordion({ sections, defaultOpenAll = true }) {
  const [openRoles, setOpenRoles] = useState(
    () => new Set(defaultOpenAll ? sections.map((s) => s.role) : [sections[0]?.role])
  )

  const toggle = (role) => {
    setOpenRoles((prev) => {
      const next = new Set(prev)
      next.has(role) ? next.delete(role) : next.add(role)
      return next
    })
  }

  return (
    <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
      {sections.map((section) => {
        const isOpen = openRoles.has(section.role)
        const slug = slugify(section.role)
        const panelId = `login-panel-${slug}`
        const buttonId = `login-trigger-${slug}`

        return (
          <div key={section.role} className="py-6">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(section.role)}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <span className="heading-2">{section.role}</span>
              <ChevronDown
                size={22}
                aria-hidden="true"
                style={{
                  color: 'var(--color-maroon)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms ease',
                }}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="mt-4 space-y-3"
            >
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-fit flex items-center gap-2 body"
                  style={{ color: 'var(--color-ink-60)' }}
                >
                  <span className="group-hover:underline">{link.label}</span>
                  <ExternalLink size={14} style={{ color: 'var(--color-ink-40)' }} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}