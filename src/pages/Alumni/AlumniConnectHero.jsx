export default function AlumniConnectHero() {
  return (
    <section aria-label="Alumni Connect Hero">
      {/* Hero Image */}
      <div className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Vasant Valley School alumni reconnecting during a gathering"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <span className="badge badge-gold mx-auto mb-6">
              Since 1999
            </span>

            <h1 className="heading-1 text-white">
              Alumni Connect
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-2xl mx-auto">
              A lifelong community of Vasant Valley graduates inspiring,
              mentoring and supporting one another across the world.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-20">
          <p
            className="heading-2"
            style={{ color: 'var(--color-maroon)' }}
          >
            Stay Connected with Your School Family
          </p>

          <span className="gold-rule mx-auto mt-5" />

          <p
            className="body-m mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Discover alumni stories, reunions, mentoring opportunities and
            school updates. Whether you're a recent graduate or part of one of
            our earliest batches, you're always a valued member of the Vasant
            Valley family.
          </p>

          <a
            href="mailto:alumni@vasantvalley.edu.in"
            className="inline-flex mt-8 font-semibold hover:underline"
            style={{ color: 'var(--color-maroon)' }}
          >
            alumni@vasantvalley.edu.in
          </a>
        </div>
      </div>
    </section>
  )
}