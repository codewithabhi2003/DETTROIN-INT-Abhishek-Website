export default function CurriculumHero() {
  return (
    <section aria-label="International Curriculum" className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-90 md:h-[65vh] lg:h-[75vh] w-full overflow-hidden">
       <img
  src="https://static.vasantvalley.org/wp-content/uploads/2022/11/18105957/igcse_header18112022.jpg"
  alt="Students in a modern international school"
  className="absolute inset-0 w-full h-full object-cover object-center"
  loading="eager"
/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="section-container text-center max-w-3xl">
            <span className="badge badge-gold mx-auto mb-5">
              Cambridge International School
            </span>

            <h1
              className="display-lg md:display-xl"
              style={{ color: "var(--color-white)" }}
            >
              International Curriculum
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p
              className="body-l mt-6 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Vasant Valley School is a registered Cambridge International
              School offering the Cambridge curriculum for Classes 8–12,
              preparing students with globally recognized academic standards
              and future-ready skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}