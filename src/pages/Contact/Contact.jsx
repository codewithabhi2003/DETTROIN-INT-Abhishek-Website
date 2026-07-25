import { Helmet } from 'react-helmet-async'
import { CONTACT_INFO } from '@/constants/contactInfo'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Vasant Valley School</title>
        <meta
          name="description"
          content={`Get in touch with ${CONTACT_INFO.schoolName}, ${CONTACT_INFO.addressLine} – ${CONTACT_INFO.postalCode}, ${CONTACT_INFO.country}.`}
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            Contact Us
          </h1>
          <span className="gold-rule mx-auto" />

          <div className="mt-10">
            <p className="body-l" style={{ color: 'var(--color-ink)' }}>
              {CONTACT_INFO.schoolName}
            </p>
            <p className="body mt-1">
              {CONTACT_INFO.addressLine} – {CONTACT_INFO.postalCode}, {CONTACT_INFO.country}
            </p>
            <a
              href={CONTACT_INFO.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-small font-semibold uppercase tracking-wide mt-3 inline-block"
              style={{ color: 'var(--color-ink)' }}
            >
              See map
            </a>
          </div>

          <div className="mt-10 space-y-2">
            <a href={CONTACT_INFO.phoneHref} className="block body" style={{ color: 'var(--color-ink-60)' }}>
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="block body"
              style={{ color: 'var(--color-ink-60)' }}
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}