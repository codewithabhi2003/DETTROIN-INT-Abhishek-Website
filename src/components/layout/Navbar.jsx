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

            <Link to="/" className="flex items-center" aria-label="Vasant Valley School — home">
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

            <Link to={isAuthenticated ? '/account' : '/login'} className="btn-primary">
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
    <div className="flex flex-col items-center leading-none" aria-hidden="true">
      {/* IMAGE SLOT — replace with real assets/logos/vvs-logo.svg */}
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 2 L44 23 L23 44 L2 23 Z" stroke="var(--color-ink)" strokeWidth="1.5" />
        <path d="M23 9 L37 23 L23 37 L9 23 Z" stroke="var(--color-maroon)" strokeWidth="1.2" />
        <circle cx="23" cy="16" r="2.4" fill="var(--color-maroon)" />
      </svg>
      <span
        className="text-micro font-semibold uppercase mt-1"
        style={{ color: 'var(--color-ink)', letterSpacing: '0.08em' }}
      >
        Vasant Valley
      </span>
    </div>
  )
}