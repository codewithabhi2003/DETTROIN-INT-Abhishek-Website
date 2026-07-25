import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

export default function CelebratingIndividuality() {
  return (
    <section style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container grid md:grid-cols-2 gap-0 md:gap-10 items-center py-10 md:py-0">
        {/* IMAGE SLOT — replace with real photography (1200×800 min) */}
        <div
          className="aspect-4/3 rounded-(--radius-img) overflow-hidden"
          style={PLACEHOLDER_PATTERN}
          role="img"
          aria-label="Students standing in a circle formation, viewed from above"
        >
          <div className="w-full h-full flex items-start justify-end p-4">
            <span className="text-micro font-medium tracking-wide" style={{ color: 'var(--color-ink-40)' }}>
              IMAGE — Students in circle formation, overhead
            </span>
          </div>
        </div>

        <div className="py-10 md:py-16">
          <h2 className="heading-1">Celebrating Individuality</h2>
          <span className="gold-rule" />
          <p className="body-m mt-5" style={{ color: 'var(--color-ink)' }}>
            The School strives to encourage a sense of purpose,
            self-assuredness, confidence and acceptance by creating spaces
            for children to be themselves and be heard by others. As students
            develop and learn to identify their own individuality, they also
            gain skills to communicate and resolve conflicts appropriately.
            The learning environment is designed to generate a spirit of
            teamwork, develop empathy and generosity.
          </p>
        </div>
      </div>
    </section>
  )
}