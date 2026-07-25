import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@/components/common/BrandIcons'
import { CONTACT_INFO } from '@/constants/contactInfo'

const columns = [
  [
    { label: 'Home', to: '/' },
    { label: 'Vision & Philosophy', to: '/vision-philosophy' },
    { label: 'The Learning Experience', to: '/academics/learning-experience' },
    { label: 'International Curriculum', to: '/academics/international-curriculum' },
    { label: 'Infrastructure', to: '/campus/infrastructure' },
  ],
  [
    { label: 'Special Education Needs', to: '/campus/special-education-needs' },
    { label: 'Intra-School Programmes', to: '/academics/intra-school-programmes' },
    { label: 'Inter-School Programmes', to: '/academics/inter-school-programmes' },
    { label: 'A Day in School', to: '/campus/a-day-in-school' },
  ],
  [
    { label: 'About Us', to: '/about' },
    { label: 'Admissions', to: '/admissions' },
    { label: 'Announcements', to: '/news/announcements' },
    { label: 'News & Events', to: '/news/news-events' },
  ],
  [
    { label: 'Login', to: '/login' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Statutory Compliances', to: '/legal/statutory-compliances' },
    { label: 'Privacy Policy', to: '/legal/privacy' },
  ],
]

// TODO: swap for the school's real social profile URLs
const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/vasantvalleyschool', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://instagram.com/vasantvalleyschool', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/school/vasantvalleyschool', Icon: LinkedinIcon },
  { label: 'YouTube', href: 'https://youtube.com/@vasantvalleyschool', Icon: YoutubeIcon },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-maroon)' }}>
      <div className="section-container section-padding">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10">
          {columns.map((links, i) => (
            <ul key={i} className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-small" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div>
            <p
              className="text-small font-semibold uppercase tracking-wide"
              style={{ color: 'var(--color-gold-light)' }}
            >
              Contact Us
            </p>
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-center gap-2 text-small mt-3"
              style={{ color: 'rgba(255,255,255,0.88)' }}
            >
              <Phone size={14} aria-hidden="true" /> {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-small mt-2"
              style={{ color: 'rgba(255,255,255,0.88)' }}
            >
              <Mail size={14} aria-hidden="true" /> {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          <p className="text-micro" style={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} Vasant Valley School
          </p>

          <ul className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={CONTACT_INFO.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="text-micro"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {CONTACT_INFO.addressLine}, {CONTACT_INFO.postalCode} | MAP
          </a>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--color-ink-max)' }}>
        <div className="section-container py-4 text-center">
          <p className="text-micro" style={{ color: 'rgba(255,255,255,0.6)' }}>
            We are grateful to our alumni, Ishaan Gupta (Class of 2006), Medha
            Vira Gupta (Class of 2009) and Samvid Gupta (Class of 2010) for
            their generous support in creating the website.
          </p>
        </div>
      </div>
    </footer>
  )
}