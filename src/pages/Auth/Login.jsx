import { Helmet } from 'react-helmet-async'
import LoginRoleAccordion from '@/components/navigation/LoginRoleAccordion'
import RegisterModal from '@/components/forms/RegisterModal'
import useModal from '@/hooks/useModal'

// TODO: swap these for the real ERP / webmail / fee-portal URLs
const sections = [
  {
    role: 'Teacher Login',
    links: [
      { label: 'School ERP', href: 'https://erp.vasantvalley.edu.in' },
      { label: 'School Email', href: 'https://mail.vasantvalley.edu.in' },
      { label: 'Google Account', href: 'https://accounts.google.com' },
    ],
  },
  {
    role: 'Student Login',
    links: [
      { label: 'School ERP', href: 'https://erp.vasantvalley.edu.in' },
      { label: 'Google Account', href: 'https://accounts.google.com' },
    ],
  },
  {
    role: 'Parent Login',
    links: [
      { label: 'School ERP', href: 'https://erp.vasantvalley.edu.in' },
      { label: 'Fee portal', href: 'https://fees.vasantvalley.edu.in' },
    ],
  },
]

export default function Login() {
  const { isOpen, open, close, containerRef } = useModal()

  return (
    <>
      <Helmet>
        <title>Login | Vasant Valley School</title>
        <meta
          name="description"
          content="Sign in to the Vasant Valley School ERP, email or fee portal as a teacher, student or parent."
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            Login
          </h1>
          <span className="gold-rule mx-auto" />
        </div>

        <div className="section-container max-w-xl mx-auto mt-10">
          <LoginRoleAccordion sections={sections} />

          <div className="mt-10 pt-8 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
            <p className="body">New to the parent portal?</p>
            <button type="button" onClick={open} className="btn-secondary mt-4">
              Register for access
            </button>
          </div>
        </div>
      </section>

      <RegisterModal isOpen={isOpen} onClose={close} containerRef={containerRef} />
    </>
  )
}