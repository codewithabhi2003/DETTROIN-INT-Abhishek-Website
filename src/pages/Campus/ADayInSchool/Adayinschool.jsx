import { Helmet } from 'react-helmet-async'

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
    body: 'The duration of lessons varies from 20 to 60 minutes for different year groups. There are no bells ringing in school to indicate the beginning or end of a lesson — you will know that it\'s break time when you hear music playing in the corridors.',
  },
  {
    id: 'breaks-and-meals',
    title: 'Breaks & Meals',
    body: 'There are three breaks in the day: breakfast, midday break and lunch. All children eat breakfast and lunch provided in school, and the menu for the meals is accessible to students and parents.',
  },
  {
    id: 'after-school-camps',
    title: 'After-School Camps',
    body: 'After 3:00 pm, children from Class 3 to 12 have the option of staying back in school for camps, held in a wide variety of sports and art forms. These camps are conducted by experts in the field and focus on honing a child\'s skills in their areas of interest.',
  },
  {
    id: 'the-alcove',
    title: 'The Alcove',
    body: 'Every year group is divided into three sections of about 30 students each, and every classroom is built around an alcove — the hub of social interaction for the children throughout the day.',
  },
]

export default function ADayInSchool() {
  return (
    <>
      <Helmet>
        <title>A Day in School | Vasant Valley School</title>
        <meta
          name="description"
          content="What a typical school day looks like at Vasant Valley School — timings, lesson blocks, breaks and after-school camps."
        />
      </Helmet>

      {/* Intro */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <span className="badge badge-gold w-fit mx-auto mb-4">Campus</span>
          <h1 className="heading-1">A Day in School</h1>
          <span className="gold-rule mx-auto" />
          <p
            className="body-l mt-5"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            A typical day in Vasant Valley School involves an invigorating and dynamic
            learning experience, both inside and outside the classroom.
          </p>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            The Daily Schedule
          </h2>
          <span className="gold-rule mt-2" />
          <p
            className="body-m mt-4"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            School timings are from 8:00 am to 3:00 pm, and the day is divided into four
            blocks with three breaks in between.
          </p>

          <table className="w-full mt-6 text-left" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-ink)' }}>
                <th className="text-small p-4" style={{ color: 'var(--color-white)' }}>Block</th>
                <th className="text-small p-4" style={{ color: 'var(--color-white)' }}>Timing</th>
              </tr>
            </thead>
            <tbody>
              {dailyBlocks.map((row, i) => (
                <tr
                  key={row.block}
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--color-white)' : 'var(--color-gold-light)' }}
                >
                  <td className="text-small p-4" style={{ color: 'var(--color-ink)' }}>{row.block}</td>
                  <td className="text-small p-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>{row.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full mt-6 text-left" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-ink)' }}>
                <th className="text-small p-4" style={{ color: 'var(--color-white)' }}>Year Group</th>
                <th className="text-small p-4" style={{ color: 'var(--color-white)' }}>Timing</th>
              </tr>
            </thead>
            <tbody>
              {earlyYearsTimings.map((row, i) => (
                <tr
                  key={row.group}
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--color-white)' : 'var(--color-gold-light)' }}
                >
                  <td className="text-small p-4" style={{ color: 'var(--color-ink)' }}>{row.group}</td>
                  <td className="text-small p-4" style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}>{row.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-micro mt-3" style={{ color: 'var(--color-ink-40)' }}>
            Timings shown above for Foundation and Nursery differ from the rest of the school.
          </p>
        </div>
      </section>

      {/* Making the most of each school day */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            Making the Most of Each School Day
          </h2>
          <span className="gold-rule mt-2" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-8">
            {dayInDetail.map((item) => (
              <div key={item.id}>
                <h3 className="heading-3" style={{ color: 'var(--color-ink)' }}>
                  {item.title}
                </h3>
                <p
                  className="body-m mt-3"
                  style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing reflection */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <p
            className="body-l"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            From the rhythm of a bell-free day to the alcove at the heart of every
            classroom, the school day is designed to give children the space to learn,
            socialise and pursue their interests well beyond the final lesson block.
          </p>
        </div>
      </section>
    </>
  )
}