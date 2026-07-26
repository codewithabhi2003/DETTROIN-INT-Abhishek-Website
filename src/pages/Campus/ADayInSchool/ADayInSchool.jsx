import { Helmet } from 'react-helmet-async'
import { Clock3, Coffee, Music4, Trophy } from 'lucide-react'

const dailyBlocks = [
  { block: 'Block 1', timing: '8:00 am – 9:35 am' },
  { block: 'Block 2', timing: '9:50 am – 11:10 am' },
  { block: 'Block 3', timing: '11:20 am – 1:20 pm' },
  { block: 'Block 4', timing: '1:45 pm – 3:00 pm' },
]

const earlyYearsTimings = [
  { group: 'Foundation', timing: '9:30 am – 1:00 pm' },
  { group: 'Nursery', timing: '8:00 am – 1:00 pm' },
]

const dayInDetail = [
  {
    id: 'lesson-lengths',
    title: 'Lesson Lengths, No Bells',
    icon: Clock3,
    body: "Lessons range from 20 to 60 minutes depending on the age group. Instead of bells, gentle music fills the corridors to signal transitions, creating a calm and welcoming learning environment.",
  },
  {
    id: 'breaks-and-meals',
    title: 'Breaks & Meals',
    icon: Coffee,
    body: 'Students enjoy three breaks during the day—breakfast, a midday break and lunch. Fresh meals are prepared by the school, with menus shared regularly with students and parents.',
  },
  {
    id: 'after-school-camps',
    title: 'After-School Camps',
    icon: Trophy,
    body: 'From 3:00 pm onwards, students from Classes III–XII can participate in specialist sports, performing arts and creative camps led by experienced coaches and professionals.',
  },
  {
    id: 'the-alcove',
    title: 'The Alcove',
    icon: Music4,
    body: 'Every classroom is centred around an alcove—a shared space where students collaborate, interact and build friendships throughout the school day.',
  },
]

export default function ADayInSchool() {
  return (
    <>
      <Helmet>
        <title>A Day in School | Vasant Valley School</title>

        <meta
          name="description"
          content="Explore a typical day at Vasant Valley School, including the daily timetable, learning environment, meals and after-school activities."
        />
      </Helmet>

      {/* Hero */}

      <section
        className="relative h-90 md:h-120 lg:h-160 overflow-hidden"
      >
      <img
  src="https://static.vasantvalley.org/wp-content/uploads/2021/04/a-day-banner.jpg"
  alt="Students studying in the school library"
  className="w-full h-full object-cover"
/>

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <span className="badge badge-gold mx-auto mb-6">
              Campus Life
            </span>

            <h1 className="heading-1 text-white">
              A Day in School
            </h1>

            <span className="gold-rule mx-auto mt-5" />

            <p className="body-l text-white/90 mt-8 max-w-3xl mx-auto">
              Every school day is thoughtfully designed to balance
              academics, creativity, collaboration and wellbeing,
              helping students learn with confidence and curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="heading-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              Daily Schedule
            </h2>

            <span className="gold-rule mx-auto mt-4" />

            <p
              className="body-m mt-6"
              style={{ color: 'var(--color-ink-70)' }}
            >
              The school day runs from <strong>8:00 am to 3:00 pm</strong>,
              divided into four learning blocks with dedicated breaks
              for meals, recreation and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

            {/* Main Schedule */}

            <div className="rounded-(--radius-img) overflow-hidden border shadow-sm">
              <div
                className="px-6 py-5"
                style={{ backgroundColor: 'var(--color-maroon)' }}
              >
                <h3 className="heading-3 text-white">
                  School Timetable
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gold-light">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">
                        Block
                      </th>
                      <th className="text-left px-6 py-4 font-semibold">
                        Timing
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {dailyBlocks.map((row, index) => (
                      <tr
                        key={row.block}
                        className={index !== dailyBlocks.length - 1 ? 'border-b' : ''}
                      >
                        <td className="px-6 py-4 font-medium">
                          {row.block}
                        </td>

                        <td
                          className="px-6 py-4"
                          style={{ color: 'var(--color-ink-70)' }}
                        >
                          {row.timing}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Early Years */}

            <div className="rounded-(--radius-img) overflow-hidden border shadow-sm">
              <div
                className="px-6 py-5"
                style={{ backgroundColor: 'var(--color-maroon)' }}
              >
                <h3 className="heading-3 text-white">
                  Early Years Timings
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gold-light">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold">
                        Year Group
                      </th>
                      <th className="text-left px-6 py-4 font-semibold">
                        Timing
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {earlyYearsTimings.map((row, index) => (
                      <tr
                        key={row.group}
                        className={index !== earlyYearsTimings.length - 1 ? 'border-b' : ''}
                      >
                        <td className="px-6 py-4 font-medium">
                          {row.group}
                        </td>

                        <td
                          className="px-6 py-4"
                          style={{ color: 'var(--color-ink-70)' }}
                        >
                          {row.timing}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gold-light px-6 py-4">
                <p
                  className="text-small"
                  style={{ color: 'var(--color-ink-70)' }}
                >
                  Foundation and Nursery follow a separate timetable
                  tailored to the needs of younger learners.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Experience */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gold-light)' }}
      >
        <div className="section-container max-w-6xl mx-auto">

          <div className="text-center">
            <h2
              className="heading-2"
              style={{ color: 'var(--color-maroon)' }}
            >
              Making the Most of Every School Day
            </h2>

            <span className="gold-rule mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

            {dayInDetail.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="rounded-(--radius-img) bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(128,97,35,.12)',
                    }}
                  >
                    <Icon
                      size={26}
                      style={{
                        color: 'var(--color-maroon)',
                      }}
                    />
                  </div>

                  <h3
                    className="heading-3 mt-6"
                    style={{ color: 'var(--color-maroon)' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="body-m mt-4"
                    style={{ color: 'var(--color-ink-70)' }}
                  >
                    {item.body}
                  </p>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* Closing */}

      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--color-white)' }}
      >
        <div className="section-container max-w-4xl mx-auto text-center">

          <h2
            className="heading-2"
            style={{ color: 'var(--color-maroon)' }}
          >
            Learning Beyond the Timetable
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-l mt-8"
            style={{ color: 'var(--color-ink-70)' }}
          >
            From a bell-free campus and thoughtfully designed learning
            spaces to nutritious meals and enriching after-school
            programmes, every aspect of the school day encourages
            curiosity, collaboration and holistic development.
          </p>

        </div>
      </section>
    </>
  )
}