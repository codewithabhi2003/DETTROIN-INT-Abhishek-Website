export default function LearningHero() {
  return (
    <section aria-label="Learning experience">
      {/* Hero Image */}
      <div className="relative h-90 md:h-120 lg:h-160 overflow-hidden">
        <img
          src="https://static.vasantvalley.org/wp-content/uploads/2021/04/learning-banner-1.jpg"
          alt="Students learning together in a school environment"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <h1 className="heading-1 text-white">
              The Learning Experience
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/95 mt-8">
              The learning experience is focused on nurturing leadership,
              curiosity and self-discipline while supporting the holistic
              development of every child.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-20">
          <p
            className="heading-2"
            style={{ color: 'var(--color-teal, #2f6f7a)' }}
          >
            Every student is encouraged to discover their strengths,
            challenge themselves and become a confident, compassionate and
            lifelong learner.
          </p>

          <span className="gold-rule mx-auto mt-5" />

          <p
            className="body-m mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            At Vasant Valley School, the learning environment inspires
            students and teachers alike to exceed expectations, think
            critically, embrace creativity and continuously expand their
            understanding of the world around them.
          </p>
        </div>
      </div>
    </section>
  )
}