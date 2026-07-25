import { ArrowRight } from 'lucide-react'
import { OCTAGON_CLIP, PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

const dimensions = [
  'Cerebral', 'Social', 'Physical', 'Spiritual',
  'Emotional', 'Environmental', 'Creative', 'Ethical',
]

const teasers = [
  {
    label: 'Vision',
    to: '/vision-philosophy',
    imageAlt: 'Students on the sports field podium',
    kicker: '“Excellence in Deed”',
    body: "The school's motto sets the standard for Vasant Valley: individualised attention for each student, a process-focused learning framework, equity of all stakeholders and a commitment to society.",
  },
  {
    label: 'A day in school',
    to: '/campus/a-day-in-school',
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
        <div className="section-container max-w-3xl mx-auto text-center">
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
              <div
                className={`aspect-4/3 rounded-(--radius-img) relative overflow-hidden ${
                  i % 2 === 1 ? 'md:order-2' : ''
                }`}
                style={PLACEHOLDER_PATTERN}
                role="img"
                aria-label={t.imageAlt}
              >
                <span className="absolute bottom-3 left-3 text-micro" style={{ color: 'var(--color-ink-40)' }}>
                  IMAGE — {t.imageAlt}
                </span>
              </div>
              <div>
                <p className="text-small font-semibold tracking-wide uppercase" style={{ color: 'var(--color-maroon)' }}>
                  {t.kicker}
                </p>
                <h2 className="heading-1 mt-2">{t.label === 'Vision' ? '“Excellence in Deed”' : 'Education is preparation for life.'}</h2>
                <p className="body mt-4">{t.body}</p>
                <a href={t.to} className="btn-ghost mt-6">
                  {t.label} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Founding history */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <p className="body-l" style={{ color: 'var(--color-maroon)', fontFamily: 'var(--font-display)', fontSize: 22 }}>
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
          <a href="/about" className="btn-ghost mt-6 mx-auto w-fit">
            About us <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Infrastructure strip */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
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
          <a href="/campus/infrastructure" className="btn-ghost mt-6 mx-auto w-fit">
            Infrastructure <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Learning Experience — signature octagon diagram */}
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
            <a href="/academics/learning-experience" className="btn-ghost mt-6">
              Learning experience <ArrowRight size={14} />
            </a>
          </div>

          <LearningExperienceDiagram />
        </div>
      </section>
    </>
  )
}

function LearningExperienceDiagram() {
  const size = 380
  const center = size / 2
  const ringRadius = size * 0.42
  const octagonRadius = size * 0.27

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }} aria-hidden="true">
      {/* connecting ticks */}
      {dimensions.map((label, i) => {
        const angle = (i * 360) / dimensions.length
        const rad = (angle * Math.PI) / 180
        const x = center + ringRadius * Math.sin(rad)
        const y = center - ringRadius * Math.cos(rad)
        const tickInner = center + (octagonRadius + 6) * Math.sin(rad)
        const tickInnerY = center - (octagonRadius + 6) * Math.cos(rad)

        return (
          <div key={label}>
            <svg className="absolute inset-0" width={size} height={size} style={{ pointerEvents: 'none' }}>
              <line
                x1={tickInner}
                y1={tickInnerY}
                x2={center + (ringRadius - 26) * Math.sin(rad)}
                y2={center - (ringRadius - 26) * Math.cos(rad)}
                stroke="var(--color-border)"
                strokeWidth="1.5"
              />
            </svg>
            <span
              className="absolute text-small font-semibold whitespace-nowrap"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
                color: i % 2 === 0 ? 'var(--color-ink)' : 'var(--color-maroon)',
              }}
            >
              {label}
            </span>
          </div>
        )
      })}

      {/* center octagon */}
      <div
        className="absolute flex items-center justify-center text-center px-6"
        style={{
          left: center,
          top: center,
          transform: 'translate(-50%, -50%)',
          width: octagonRadius * 2,
          height: octagonRadius * 2,
          backgroundColor: 'var(--color-maroon)',
          clipPath: OCTAGON_CLIP,
        }}
      >
        <p className="text-small font-bold uppercase tracking-wide" style={{ color: 'var(--color-white)' }}>
          The Vasant Valley Learning Experience
        </p>
      </div>
    </div>
  )
}