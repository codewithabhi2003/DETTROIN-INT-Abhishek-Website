import { Helmet } from 'react-helmet-async'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from 'lucide-react'
import { CONTACT_INFO } from '@/constants/contactInfo'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Vasant Valley School</title>

        <meta
          name="description"
          content={`Get in touch with ${CONTACT_INFO.schoolName}.`}
        />
      </Helmet>

      {/* Hero */}

      <section className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Vasant Valley School campus"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">

            <span className="badge badge-gold mx-auto mb-6">
              Get in Touch
            </span>

            <h1 className="heading-1 text-white">
              Contact Us
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
              We'd be delighted to answer your questions and help you
              connect with our school community.
            </p>

          </div>
        </div>
      </section>

      {/* Contact Cards */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Contact */}

            <div className="rounded-(--radius-img) bg-gold-light p-10">

              <h2
                className="heading-2"
                style={{ color: 'var(--color-maroon)' }}
              >
                Contact Information
              </h2>

              <span className="gold-rule mt-4" />

              <div className="space-y-8 mt-10">

                <div className="flex gap-5">

                  <MapPin
                    style={{
                      color: 'var(--color-maroon)',
                    }}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Address
                    </h3>

                    <p className="body-m">
                      {CONTACT_INFO.schoolName}
                      <br />
                      {CONTACT_INFO.addressLine}
                      <br />
                      {CONTACT_INFO.postalCode},{" "}
                      {CONTACT_INFO.country}
                    </p>

                    <a
                      href={CONTACT_INFO.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary mt-4 inline-flex items-center gap-2"
                    >
                      View on Map
                      <ExternalLink size={16} />
                    </a>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Phone
                    style={{
                      color: 'var(--color-maroon)',
                    }}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Phone
                    </h3>

                    <a href={CONTACT_INFO.phoneHref}>
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                </div>

                <div className="flex gap-5">

                  <Mail
                    style={{
                      color: 'var(--color-maroon)',
                    }}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <a href={`mailto:${CONTACT_INFO.email}`}>
                      {CONTACT_INFO.email}
                    </a>
                  </div>

                </div>

                <div className="flex gap-5">

                  <Clock
                    style={{
                      color: 'var(--color-maroon)',
                    }}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Office Hours
                    </h3>

                    <p>
                      Monday – Friday
                      <br />
                      8:00 AM – 4:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Map */}

            <div className="overflow-hidden rounded-(--radius-img) shadow-lg">

              <iframe
                title="School Location"
                src={CONTACT_INFO.mapEmbedUrl}
                className="w-full h-full min-h-130 border-0"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      </section>
    </>
  )
}