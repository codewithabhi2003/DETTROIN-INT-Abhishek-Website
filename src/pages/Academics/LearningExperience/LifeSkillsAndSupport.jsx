export default function LifeSkillsAndSupport() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Learning to Build Life Skills
          </h2>

          <span className="gold-rule mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Beyond academics, students develop creativity, resilience,
            confidence and essential life skills through arts, physical
            education and an inclusive learning environment that nurtures
            every learner's potential.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* Life Skills */}
          <div
            className="rounded-(--radius-img)] bg-gold-light p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3
              className="heading-3"
              style={{ color: 'var(--color-maroon)' }}
            >
              Creative Learning & Well-being
            </h3>

            <div
              className="body-m mt-6 space-y-5"
              style={{ color: 'var(--color-ink-70)' }}
            >
              <p>
                Creative thinking forms the foundation of the Vasant Valley
                School curriculum. Students are encouraged to explore new
                ideas, think independently and connect imagination with
                rational inquiry through a rich programme of Performing Arts
                and Visual Arts.
              </p>

              <p>
                Physical development is equally important, with programmes
                that promote fitness, mental well-being, hygiene and
                nutrition. Students are encouraged to develop lifelong
                healthy habits while taking responsibility for their own
                well-being.
              </p>
            </div>
          </div>

          {/* Student Support */}
          <div
            className="rounded-(--radius-img)] bg-gold-light p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3
              className="heading-3"
              style={{ color: 'var(--color-maroon)' }}
            >
              Inclusive Learning Support
            </h3>

            <div
              className="body-m mt-6 space-y-5"
              style={{ color: 'var(--color-ink-70)' }}
            >
              <p>
                The school is committed to providing multidisciplinary
                support for students with diverse learning needs. An
                accessible campus, trained special educators and
                Individualised Education Plans ensure every child receives
                personalised academic and developmental support.
              </p>

              <p>
                State-of-the-art facilities for occupational therapy,
                physiotherapy, sensory integration, language therapy and
                specialised support for Dyslexia and Specific Learning
                Difficulties enable students to thrive in an inclusive and
                nurturing environment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}