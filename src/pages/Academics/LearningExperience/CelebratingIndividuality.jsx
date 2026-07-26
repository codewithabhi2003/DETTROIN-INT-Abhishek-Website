export default function CelebratingIndividuality() {
  return (
    <section
      style={{ backgroundColor: 'var(--color-gold-light)' }}
    >
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-(--radius-img)] shadow-lg aspect-4/3 order-1">
            <img
              src="https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students learning and collaborating together"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="order-2">
            <h2
              className="heading-1"
              style={{ color: 'var(--color-maroon)' }}
            >
              Celebrating Individuality
            </h2>

            <span className="gold-rule mt-4" />

            <p
              className="body-m mt-6"
              style={{ color: 'var(--color-ink-70)' }}
            >
              The school encourages every child to develop confidence,
              self-awareness and a strong sense of purpose by creating an
              environment where individuality is valued and every voice is
              heard. Students learn to appreciate differences, communicate
              effectively, resolve conflicts respectfully and work
              collaboratively while developing empathy, resilience and
              generosity.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}