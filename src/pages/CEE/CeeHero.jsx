import { Helmet } from 'react-helmet-async'

export default function CeeHero() {
  return (
    <>
      <Helmet>
        <title>CEE@VVS | Vasant Valley School</title>

        <meta
          name="description"
          content="The Centre for Excellence in Education at Vasant Valley School empowers educators through professional development, leadership programmes, research and innovation."
        />
      </Helmet>

      <section className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-1.jpg"
          alt="Educators participating in a professional development workshop"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">

            <span className="badge badge-gold mx-auto mb-6">
              CEE@VVS
            </span>

            <h1 className="heading-1 text-white">
              Centre for Excellence
              <br />
              in Education
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
              Empowering educators through research, leadership,
              innovation and professional learning—building a community
              where teaching continues to evolve and inspire.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}