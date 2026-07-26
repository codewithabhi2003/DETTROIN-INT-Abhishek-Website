export default function TeacherWorkshopsHero() {
  return (
    <section className="relative h-90 md:h-120 lg:h-160 overflow-hidden rounded-(--radius-img)">
      <img
        src="https://www.vasantvalley.org/wp-content/uploads/2026/01/image-vv-4-1.jpg"
        alt="Teachers participating in a professional development workshop"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center">

          <span className="badge badge-gold mx-auto mb-6">
            Learning Experiences
          </span>

          <h2 className="heading-1 text-white">
            Teacher Workshops
          </h2>

          <span className="gold-rule mx-auto mt-5" />

          <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
            Interactive, practice-based workshops designed to strengthen
            classroom practice, educational leadership and whole-school
            improvement through collaborative professional learning.
          </p>

        </div>
      </div>
    </section>
  )
}