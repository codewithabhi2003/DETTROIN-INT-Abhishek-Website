import { Helmet } from 'react-helmet-async'
import { GraduationCap, School, Users } from 'lucide-react'
import LoginRoleAccordion from '@/components/navigation/LoginRoleAccordion'
import RegisterModal from '@/components/forms/RegisterModal'
import useModal from '@/hooks/useModal'

const sections = [
  {
    role: 'Teacher Login',
    icon: School,
    links: [
      {
        label: 'School ERP',
        href: 'https://erp.vasantvalley.edu.in',
      },
      {
        label: 'School Email',
        href: 'https://mail.vasantvalley.edu.in',
      },
      {
        label: 'Google Account',
        href: 'https://accounts.google.com',
      },
    ],
  },
  {
    role: 'Student Login',
    icon: GraduationCap,
    links: [
      {
        label: 'School ERP',
        href: 'https://erp.vasantvalley.edu.in',
      },
      {
        label: 'Google Account',
        href: 'https://accounts.google.com',
      },
    ],
  },
  {
    role: 'Parent Login',
    icon: Users,
    links: [
      {
        label: 'School ERP',
        href: 'https://erp.vasantvalley.edu.in',
      },
      {
        label: 'Fee Portal',
        href: 'https://fees.vasantvalley.edu.in',
      },
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
          content="Secure access to the Vasant Valley School ERP, email services and parent fee portal."
        />
      </Helmet>

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-5xl mx-auto">

          {/* Header */}

          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="heading-1"
              style={{ color: 'var(--color-maroon)' }}
            >
              Login Portal
            </h1>

            <span className="gold-rule mx-auto mt-4" />

            <p
              className="body-m mt-6"
              style={{ color: 'var(--color-ink-70)' }}
            >
              Access school services securely through the appropriate portal.
              Teachers, students and parents can log in to the ERP, email
              services and other online resources.
            </p>
          </div>

          {/* Login Card */}

          <div className="rounded-(--radius-img) bg-gold-light shadow-sm p-8 md:p-10 mt-14">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

              {sections.map((section) => {
                const Icon = section.icon

                return (
                  <div
                    key={section.role}
                    className="rounded-(--radius-img) bg-white p-6 text-center shadow-sm"
                  >
                    <div
                      className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(128,97,35,.12)',
                      }}
                    >
                      <Icon
                        size={26}
                        style={{
                          color: 'var(--color-maroon)',
                        }}
                      />
                    </div>

                    <h3
                      className="heading-3 mt-5"
                      style={{
                        color: 'var(--color-maroon)',
                      }}
                    >
                      {section.role.replace(' Login', '')}
                    </h3>
                  </div>
                )
              })}

            </div>

            <LoginRoleAccordion sections={sections} />

          </div>

          {/* Register */}

          <div
            className="rounded-(--radius-img) bg-white border text-center p-8 md:p-10 mt-12"
            style={{
              borderColor: 'rgba(11,15,25,.08)',
            }}
          >
            <h3
              className="heading-3"
              style={{
                color: 'var(--color-maroon)',
              }}
            >
              Parent Portal Registration
            </h3>

            <p
              className="body-m mt-5"
              style={{
                color: 'var(--color-ink-70)',
              }}
            >
              If you're accessing the Parent Portal for the first time,
              complete your registration to activate your account.
            </p>

            <button
              type="button"
              onClick={open}
              className="btn-primary mt-8"
            >
              Register for Access
            </button>
          </div>

        </div>
      </section>

      <RegisterModal
        isOpen={isOpen}
        onClose={close}
        containerRef={containerRef}
      />
    </>
  )
}