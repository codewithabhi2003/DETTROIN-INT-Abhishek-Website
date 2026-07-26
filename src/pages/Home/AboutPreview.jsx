import { ArrowRight } from 'lucide-react'

const teasers = [
  {
    label: 'Vision',
    to: '/vision-philosophy',
    image:
'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
    kicker: '“Excellence in Deed”',
    body: "The school's motto sets the standard for Vasant Valley: individualised attention for each student, a process-focused learning framework, equity of all stakeholders and a commitment to society.",
  },
  {
    label: 'A day in school',
    to: '/campus/a-day-in-school',
    image:
'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'A visiting dignitary with students on campus',
    kicker: 'Education is preparation for life',
    body: 'Academic and non-academic Learning Experiences are planned around the developmental needs of our students. The entire campus is a classroom, and learning is continuous.',
  },
]

export default function AboutPreview() {
  return (
    <>
      {/* Mission statement */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center px-4 md:px-0">
          <p className="heading-2" style={{ color: 'var(--color-ink)' }}>
            Vasant Valley School encourages students to push the boundaries of
            current understanding and set benchmarks in the field of
            education.
          </p>
          <span className="gold-rule mx-auto" />
          <p className="body-l mt-6">
            Our objective is to inculcate in our students ethical values,
            nurture original thinking and develop a sense of national
            identity as well as global citizenship.
          </p>
        </div>
      </section>

      {/* Vision + A Day in School teasers, alternating image side */}
      <section style={{ backgroundColor: 'var(--color-surface)' }}>
        {teasers.map((t, i) => (
          <div key={t.label} className="section-container section-padding">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Real photograph – responsive with object-cover */}
              <div
                className={`aspect-4/3 rounded-(--radius-img) relative overflow-hidden ${
                  i % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={t.image}
                  alt={t.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div>
                <p
                  className="text-small font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--color-maroon)' }}
                >
                  {t.kicker}
                </p>
                <h2 className="heading-1 mt-2">
                  {t.label === 'Vision'
                    ? '“Excellence in Deed”'
                    : 'Education is preparation for life.'}
                </h2>
                <p className="body mt-4">{t.body}</p>
                <a href={t.to} className="btn-ghost mt-6 inline-flex items-center gap-2">
                  {t.label} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Founding history */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center px-4 md:px-0">
          <p
            className="body-l"
            style={{
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-display)',
              fontSize: 22,
            }}
          >
            Vasant Valley School was established in 1990 by Mr. Aroon Purie
            and Mrs. Rekha Purie as an initiative of the Education Today
            Trust.
          </p>
          <p className="body mt-6">
            The school began its journey with around 200 students and 16
            teachers in July 1990. It is a self-financing, inclusive day
            school spread over eight acres of land in Vasant Kunj, New
            Delhi, India.
          </p>
          <a href="/about" className="btn-ghost mt-6 mx-auto w-fit inline-flex items-center gap-2">
            About us <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Infrastructure strip */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="section-container max-w-3xl mx-auto text-center px-4 md:px-0">
          <p className="body">
            The School is divided into two wings, with an open amphitheatre
            connecting them. This eight-acre campus has a built-up area of
            four acres, while the rest of the space comprises a lush, green
            cover.
          </p>
          <p className="body mt-4" style={{ color: 'var(--color-maroon)' }}>
            The red and beige sandstone building was designed and built
            keeping in mind the ideal environment for children, the
            philosophy of the school, and evolving paradigms.
          </p>
          <a href="/campus/infrastructure" className="btn-ghost mt-6 mx-auto w-fit inline-flex items-center gap-2">
            Infrastructure <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Learning Experience – responsive SVG diagram */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-1">Learning with Understanding</h2>
            <span className="gold-rule" />
            <p className="body-l mt-6">
              While high academic achievement is a priority, the school aims
              to create a community of well-rounded individuals who are
              compassionate and confident. This fosters a spirit of
              cooperation and mutual respect among students and teachers.
            </p>
            <a href="/academics/learning-experience" className="btn-ghost mt-6 inline-flex items-center gap-2">
              Learning experience <ArrowRight size={14} />
            </a>
          </div>

          <div className="w-full max-w-md mx-auto">
            <LearningExperienceDiagram />
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Fully responsive SVG diagram ── */
function LearningExperienceDiagram() {
  const dimensions = [
    'Cerebral', 'Social', 'Physical', 'Spiritual',
    'Emotional', 'Environmental', 'Creative', 'Ethical',
  ]

  // Angle calculations
  const n = dimensions.length
  const outerR = 140  // ring radius for label placement
  const innerR = 90   // radius of octagon vertices (outermost points of octagon)
  // The octagon will have vertices at (innerR * cos(a), innerR * sin(a))

  // Generate points for a regular octagon (starting from top, going clockwise)
  const octagonPoints = Array.from({ length: n }, (_, i) => {
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2 // -90° so first point is top
    const x = innerR * Math.cos(angle)
    const y = innerR * Math.sin(angle)
    return `${x},${y}`
  }).join(' ')

  return (
    <svg
     viewBox="-250 -250 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Connector lines from octagon vertices to outer labels */}
      {dimensions.map((label, i) => {
        const angle = (i * 2 * Math.PI) / n - Math.PI / 2
        const xOuter = outerR * Math.cos(angle)
        const yOuter = outerR * Math.sin(angle)
        const xInner = innerR * Math.cos(angle)
        const yInner = innerR * Math.sin(angle)

        return (
          <line
            key={`line-${i}`}
            x1={xInner}
            y1={yInner}
            x2={xOuter}
            y2={yOuter}
            stroke="#D1D5DB"
strokeWidth="2"
strokeLinecap="round"
          />
        )
      })}

      {/* Outer labels */}
      {dimensions.map((label, i) => {
        const angle = (i * 2 * Math.PI) / n - Math.PI / 2
        const x = outerR * Math.cos(angle)
        const y = outerR * Math.sin(angle)

        // Adjust text-anchor based on which side of the circle
        const anchor = x > 5 ? 'start' : x < -5 ? 'end' : 'middle'
        const dx = x > 5 ? 6 : x < -5 ? -6 : 0

        return (
          <text
            key={`label-${i}`}
            x={x + dx}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            className="text-small font-semibold"
            fill="#111827"
            fontSize="13"
          >
            {label}
          </text>
        )
      })}

      {/* Central octagon */}
      <polygon
        points={octagonPoints}
        fill="var(--color-maroon)"
        stroke="var(--color-maroon)"
        strokeWidth="1"
      />

      {/* Text inside octagon */}
      <text
        x="0"
        y="-10"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-bold uppercase tracking-wide"
        fill="var(--color-white)"
        fontSize="10"
        fontWeight="bold"
      >
        <tspan x="0" dy="-8">The Vasant Valley</tspan>
        <tspan x="0" dy="14">Learning Experience</tspan>
      </text>
    </svg>
  )
}