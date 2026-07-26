import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, ArrowRight } from 'lucide-react'
import { useNav, useAuth } from '@/context'
import MobileNavOverlay from './MobileNavOverlay'

export default function Navbar() {
  const { isScrolled, isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useNav()
  const { isAuthenticated } = useAuth()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-shadow duration-200"
        style={{
          backgroundColor: 'var(--color-white)',
          boxShadow: isScrolled ? 'var(--shadow-1)' : 'none',
        }}
      >
        <div className="section-container flex items-center justify-between py-2 md:py-4">

          {/* ── Left: hamburger + logo ── */}
          <div className="flex items-center gap-5 md:gap-7">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="site-nav-overlay"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex items-center justify-center rounded-md shrink-0"
              style={{
                backgroundColor: 'var(--color-maroon)',
                /* 36×36 on mobile, 44×44 on md+ */
                width:  'clamp(36px, 8vw, 44px)',
                height: 'clamp(36px, 8vw, 44px)',
              }}
            >
              <Menu size={18} color="var(--color-white)" aria-hidden="true" />
            </button>

            <Link to="/" className="flex items-center shrink-0" aria-label="Vasant Valley School — home">
              <Logo />
            </Link>
          </div>

          {/* ── Right: search + login ── */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-expanded={isSearchOpen}
              aria-label="Search the site"
              className="p-1.5 md:p-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              <Search size={18} aria-hidden="true" />
            </button>

            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="btn-primary inline-flex items-center gap-1 md:gap-2"
              style={{
                /* smaller text + padding on mobile */
                fontSize:   'clamp(0.7rem, 2.5vw, 0.875rem)',
                padding:    'clamp(5px, 1.5vw, 8px) clamp(10px, 3vw, 16px)',
              }}
            >
              {isAuthenticated ? 'Account' : 'Log in'}
              {/* hide arrow on very small screens to save space */}
              <ArrowRight size={12} className="hidden sm:block" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ── Search bar ── */}
        {isSearchOpen && (
          <div className="border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="section-container py-3 md:py-4">
              <form role="search" onSubmit={(e) => e.preventDefault()} className="max-w-xl mx-auto">
                <input
                  type="search"
                  autoFocus
                  placeholder="Search the site…"
                  aria-label="Search the site"
                  className="input"
                />
              </form>
            </div>
          </div>
        )}
      </header>

      <MobileNavOverlay isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}

function Logo() {
  return (
    <div className="flex flex-col items-center leading-none shrink-0" aria-hidden="true">
      <img
        src="/favicon.svg"
        alt="Vasant Valley School logo"
        /* 32×32 on mobile, 46×46 on md+ */
        style={{ width: 'clamp(32px, 7vw, 46px)', height: 'clamp(32px, 7vw, 46px)' }}
        loading="eager"
      />
      <span
        className="font-semibold uppercase mt-0.5"
        style={{
          color:         'var(--color-ink)',
          letterSpacing: '0.08em',
          /* 9px on mobile → 11px on desktop */
          fontSize:      'clamp(0.5625rem, 1.5vw, 0.6875rem)',
        }}
      >
        Vasant Valley
      </span>
    </div>
  )
}