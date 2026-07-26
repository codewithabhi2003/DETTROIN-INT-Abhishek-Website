export default function ProgrammesHero() {
  return (
    <section
      aria-label="Intra-school Programmes"
      className="relative overflow-hidden"
    >
      {/* Hero Image */}
      <div className="relative h-90 md:h-120 lg:h-160 w-full overflow-hidden">
        <img
          src="https://static.vasantvalley.org/wp-content/uploads/2021/04/inter.jpg"
          alt="Students participating in an intra-school activity"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge badge-gold mx-auto mb-5">
                Beyond the Classroom
              </span>

              <h1
                className="heading-1"
                style={{ color: "var(--color-white)" }}
              >
                Intra-School Programmes
              </h1>

              <span className="gold-rule mx-auto mt-5" />

              <p
                className="body-l mt-6 max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                A wide range of intra-school programmes enables students to
                discover their interests, develop new skills and grow with
                confidence through academics, arts, sports, leadership and
                creative experiences beyond the classroom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}