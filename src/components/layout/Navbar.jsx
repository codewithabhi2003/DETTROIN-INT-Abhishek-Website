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
        <div className="section-container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="site-nav-overlay"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex items-center justify-center rounded-md shrink-0"
              style={{ backgroundColor: 'var(--color-maroon)', width: 44, height: 44 }}
            >
              <Menu size={20} color="var(--color-white)" aria-hidden="true" />
            </button>

            <Link to="/" className="flex items-center shrink-0" aria-label="Vasant Valley School — home">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-expanded={isSearchOpen}
              aria-label="Search the site"
              className="p-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              <Search size={20} aria-hidden="true" />
            </button>

            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isAuthenticated ? 'Account' : 'Log in'} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {isSearchOpen && (
          <div className="border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="section-container py-4">
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
      {/* Real favicon from public directory – responsive sizing */}
      <img
        src="/favicon.svg"
        alt="Vasant Valley School logo"
        className="w-10 h-10 md:w-11.5 md:h-11.5"
        loading="eager"
      />
      <span
        className="text-micro font-semibold uppercase mt-1"
        style={{ color: 'var(--color-ink)', letterSpacing: '0.08em' }}
      >
        Vasant Valley
      </span>
    </div>
  )
}