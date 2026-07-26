export default function StaffSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container">
        <h2 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
          Staff
        </h2>
        <span className="gold-rule" />

        {/* Staff image – responsive, full-width */}
        <div className="mt-8 rounded-(--radius-img)] overflow-hidden shadow-lg">
  <img
    src="https://static.vasantvalley.org/wp-content/uploads/2021/04/about-image.jpg"
    alt="Teachers collaborating during a staff meeting"
    className="w-full h-auto md:max-h-125 object-cover transition-transform duration-500 hover:scale-105"
    loading="lazy"
  />
</div>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <p className="body">
            Our staff is a diverse group of individuals, with a strong sense
            of commitment and a passion for learning. There are more than
            150 teachers. All staff members are well qualified in their
            domain areas. We boast of content-creators for the NCERT and the
            CBSE, advisors to educational organisations, writers, musicians,
            theatre artists and sportspersons. Each teacher plays an active
            role as a professional, a specialist and a mentor in school.
          </p>
          <p className="body">
            'Learning never stops' — this has been the watermark for all
            staff at Vasant Valley School. The Teacher Enrichment Programme
            helps teachers access a vast storehouse of skills and knowledge
            to enhance both their professional and personal growth. Teachers
            have been encouraged to attend courses or workshops across the
            world to understand best practices globally. Opportunity for
            growth also helps our staff assume leadership roles, and share
            their learning with colleagues and students.
          </p>
        </div>
      </div>
    </section>
  )
}