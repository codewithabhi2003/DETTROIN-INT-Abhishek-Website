export default function InterSchoolHero() {
  return (
    <section aria-label="Inter-school Programmes" className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-90 md:h-[65vh] lg:h-[75vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/8613307/pexels-photo-8613307.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Students participating in an inter-school programme"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge badge-gold mx-auto mb-5">
                Beyond Campus
              </span>

              <h1
                className="display-lg md:display-xl"
                style={{ color: "var(--color-white)" }}
              >
                Inter-School Programmes
              </h1>

              <span className="gold-rule mx-auto mt-5" />

              <p
                className="body-l mt-6 max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Inter-School Programmes provide opportunities for students to
                engage with peers from different schools through academics,
                arts, sports and cultural events, fostering collaboration,
                confidence and healthy competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}