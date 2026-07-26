import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const navGroups = [
  {
    title: 'About',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Vision & Philosophy', to: '/vision-philosophy' },
      { label: 'The Learning Experience', to: '/academics/learning-experience' },
      { label: 'International Curriculum', to: '/academics/international-curriculum' },
    ],
  },
  {
    title: 'Academics & Campus',
    links: [
      { label: 'Intra-School Programmes', to: '/academics/intra-school-programmes' },
      { label: 'Inter-School Programmes', to: '/academics/inter-school-programmes' },
      { label: 'Special Education Needs', to: '/campus/special-education-needs' },
      { label: 'A Day in School', to: '/campus/a-day-in-school' },
      { label: 'Infrastructure', to: '/campus/infrastructure' },
    ],
  },
  {
    title: 'News & Admissions',
    links: [
      { label: 'Admissions', to: '/admissions' },
      { label: 'Announcements', to: '/news/announcements' },
      { label: 'News & Events', to: '/news/news-events' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Alumni Connect', to: '/alumni/connect' },
      { label: 'CEE', to: '/cee' },
      { label: 'Gurgaon Campus', to: '/gurgaon-campus' },
      { label: 'Careers', to: '/careers' },
    ],
  },
]

const utilityLinks = [
  { label: 'Login', to: '/login' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
]

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export default function MobileNavOverlay({ isOpen, onClose }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const node = containerRef.current
    const focusable = node?.querySelectorAll(FOCUSABLE)
    focusable?.[0]?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      id="site-nav-overlay"
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: 'var(--color-ink)' }}
    >
      {/* Subtle background image with overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      <div className="relative section-container py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-2"
            aria-label="Vasant Valley School — home"
          >
            <img
              src="/favicon.svg"
              alt=""
              className="w-10 h-10 md:w-11.5 md:h-11.5"
              aria-hidden="true"
            />
            <span
              className="text-small font-semibold uppercase hidden sm:inline"
              style={{ color: 'var(--color-white)', letterSpacing: '0.08em' }}
            >
              Vasant Valley
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center rounded-md"
            style={{ backgroundColor: 'var(--color-maroon)', width: 44, height: 44 }}
          >
            <X size={20} color="var(--color-white)" aria-hidden="true" />
          </button>
        </div>

        <Link
          to="/"
          onClick={onClose}
          className="block mt-10"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-white)' }}
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold">Home</span>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {navGroups.map((group) => (
            <div key={group.title}>
              <p
                className="text-small font-semibold uppercase tracking-wide"
                style={{ color: 'var(--color-gold)' }}
              >
                {group.title}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className="body"
                      style={{ color: 'rgba(255,255,255,0.85)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul
          className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          {utilityLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={onClose}
                className="text-small"
                style={{ color: 'var(--color-gold-light)' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}