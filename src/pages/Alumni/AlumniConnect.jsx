import { Helmet } from 'react-helmet-async'
import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'
import AlumniConnectHero from './AlumniConnectHero'

const connectPrograms = [
  {
    id: 'career-connect',
    title: 'Career Connect',
    body: 'The Alumni Association of Vasant Valley School partnered with Vasant Valley to conduct the first career fair in the month of August 2021. The fair entailed participation of various school alumni working in different fields across the globe. The erstwhile students of school spoke to the students of classes 11th and 12th about their experience with respect to their chosen fields and what to expect in that career path. The career fair conducted over two weekends of 7th and 8th of August and 11th and 14th of August ensured a comprehensive coverage of the common career paths chosen by students in the current times.',
  },
  {
    id: 'college-connect',
    title: 'College Connect',
    body: 'The Vasant Valley Alumni from various universities across the globe, spoke to the students of Classes 11 and 12 about the various career options available. Getting an insight into the application process, subject choices available and campus life was invaluable for the current students who were just beginning their applications.',
  },
]

function ProgramBlock({ item }) {
  return (
    <div>
      <h3 className="heading-3" style={{ color: 'var(--color-gold)' }}>
        {item.title}
      </h3>
      <p
        className="body-m mt-3"
        style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
      >
        {item.body}{' '}
        <a href="#" style={{ color: 'var(--color-gold)' }}>
          more
        </a>
      </p>
    </div>
  )
}

export default function AlumniConnect() {
  return (
    <>
      <Helmet>
        <title>Alumni Connect | Vasant Valley School</title>
        <meta
          name="description"
          content="Stay connected with the Vasant Valley School alumni community — career fairs, college guidance, batch reunions and exclusive alumni merchandise."
        />
      </Helmet>

      <AlumniConnectHero />

      {/* Intro + merchandise callout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <p className="body-l" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>
            Since 1999, over 2000 students have graduated from the school and have found
            their calling all over the world. Their school experience has created bonds
            that have remained strong. Some of our Alumni have become parents and the
            second generation is already a part of our student body.
          </p>

          <div
            className="rounded-(--radius-img) mt-10 p-8"
            style={{ backgroundColor: 'var(--color-gold-light)' }}
          >
            <p className="body-m" style={{ color: 'var(--color-ink)' }}>
              Exclusive Vasant Valley Alumni merchandise curated by Mrinalini Tandon
              (Class of 2000) is now available.
            </p>
            <a
              href="#"
              className="btn-primary mt-4 inline-flex w-fit"
            >
              Visit the online store
            </a>
          </div>
        </div>
      </section>

      {/* Career Connect / College Connect */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container grid md:grid-cols-2 gap-x-16 gap-y-10">
          {connectPrograms.map((item) => (
            <ProgramBlock key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Batch Connect */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative h-64 md:h-80 w-full rounded-(--radius-img)"
            style={PLACEHOLDER_PATTERN}
            role="img"
            aria-label="Screenshot of alumni batch reunion video call grid"
          >
            <div className="absolute inset-0 flex items-start justify-end p-4">
              <span
                className="text-micro font-medium tracking-wide"
                style={{ color: 'var(--color-ink-40)' }}
              >
                IMAGE — Batch reunion video call
              </span>
            </div>
          </div>
          <div>
            <h3 className="heading-3" style={{ color: 'var(--color-gold)' }}>
              Batch Connect
            </h3>
            <p
              className="body-m mt-3"
              style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
            >
              The batch connect initiative by Vasant Valley School aims to renew bonds
              of yesteryear by bringing together Vasant Valley family from all over the
              world. The evenings of the virtual reunions are full of nostalgia and lots
              of laughter as the memories come flooding back...{' '}
              <a href="#" style={{ color: 'var(--color-gold)' }}>
                more
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}