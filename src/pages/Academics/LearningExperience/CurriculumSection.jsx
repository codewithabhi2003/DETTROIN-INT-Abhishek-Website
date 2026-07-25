const seniorElectives = {
  headers: ['Elective 1', 'Elective 2', 'Elective 3', 'Elective 4'],
  rows: [
    ['Business Studies', 'Accountancy', 'Applied Art', 'Biology'],
    ['Economics', 'Applied Art', 'Physical Education', 'Computer Science'],
    ['History', 'Chemistry', 'Pure Mathematics', 'Economics'],
    ['Mass Media', 'Computer Science', 'Sociology', 'Entrepreneurship'],
    ['Painting', 'Home Science', 'Web Applications', 'Geography'],
    ['Physics', 'Political Science', 'Hindustani Vocal Music', 'Psychology'],
    ['Sociology', 'Psychology', '—', 'Tabla'],
  ],
}

const igcseSubjects = [
  { label: 'Mandatory', value: 'English Language, Global Perspectives' },
  { label: 'Elective 1', value: 'Spanish / Hindi / (French — to be studied privately)' },
  { label: 'Elective 2', value: 'English Literature, Information and Communication Technology' },
  { label: 'Elective 3', value: 'Economics, Physics, History' },
  { label: 'Elective 4', value: 'Extended Mathematics' },
  { label: 'Elective 5', value: 'Biology, Coordinated Sciences, Economics' },
  { label: 'Elective 6', value: 'Art and Design, Computer Science' },
  { label: 'Elective 7', value: 'Chemistry, Business Studies, Environmental Management' },
]

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto mt-6 rounded-(--radius-img)" style={{ border: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}>
      <table className="w-full text-small" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left font-medium px-3 py-2"
                style={{
                  color: 'var(--color-white)',
                  backgroundColor: 'var(--color-ink)',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 ? 'var(--color-gold-light)' : 'var(--color-white)' }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2"
                  style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))', color: 'var(--color-ink)' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function KeyValueTable({ rows }) {
  return (
    <div className="overflow-x-auto mt-6 rounded-(--radius-img)" style={{ border: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}>
      <table className="w-full text-small" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} style={{ backgroundColor: i % 2 ? 'var(--color-gold-light)' : 'var(--color-white)' }}>
              <td
                className="px-3 py-2 font-medium whitespace-nowrap align-top"
                style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))', color: 'var(--color-gold-dark, var(--color-gold))', width: '1%' }}
              >
                {row.label}
              </td>
              <td
                className="px-3 py-2"
                style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))', color: 'var(--color-ink)' }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CurriculumSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-1">Going Above &amp; Beyond</h2>
          <span className="gold-rule" />
          <div className="body-m space-y-4 mt-5" style={{ color: 'var(--color-ink)' }}>
            <p>
              The curriculum goes beyond the prescribed CBSE syllabus, where
              the process is as important as the outcome. We have various
              programmes that nurture the cerebral, social, emotional,
              physical, spiritual and creative development of every child.
            </p>
            <p>
              A wide array of activities and a holistic curriculum structure
              nurtures well rounded individuals. The School strives to
              inculcate a humane and robust value system in its students. The
              focus is on collaboration and doing the right thing even when
              'no one is looking'.
            </p>
            <p>
              Critical thinking and 'learning how to learn' are the key
              skills that students and teachers are encouraged to develop at
              Vasant Valley School. Our endeavour is to create a learning
              environment where all students can actualise their potential.
            </p>
            <p>Students will select subjects in Grade 11 &amp; 12 as follows:</p>
          </div>
          <DataTable headers={seniorElectives.headers} rows={seniorElectives.rows} />
        </div>

        <div>
          <h2 className="heading-1">IGCSE</h2>
          <span className="gold-rule" />
          <div className="body-m space-y-4 mt-5" style={{ color: 'var(--color-ink)' }}>
            <p>
              Vasant Valley School is offering the Cambridge International
              General Certificate of Secondary Education (IGCSE) for class 9.
            </p>
            <p className="font-medium" style={{ color: 'var(--color-ink)' }}>Why IGCSE?</p>
            <p>
              Considered the most 'popular' international certification for
              14–16-year-olds, the core of the IGCSE curriculum emphasises a
              practical approach to learning based on inquiry. It works
              towards developing analytical, problem solving, and
              communication skills. The learners ask questions, explore,
              brainstorm, discuss and share ideas.
            </p>
            <p className="font-medium" style={{ color: 'var(--color-ink)' }}>Why IGCSE in Vasant Valley School?</p>
            <p>
              The teaching-learning process in Vasant Valley School is
              synchronised to the methods followed by the Cambridge Board.
              The essence of our pedagogy is 'learning for understanding' and
              reading beyond course books, which epitomises the IGCSE
              philosophy. The Cambridge Board offers learners a plethora of
              subjects, and these subject choices appeal to students with
              varying areas of interest. A typical IGCSE classroom will have
              students studying different sets of subjects.
            </p>
            <p>Students will select 9 subjects in Grade 9 as follows:</p>
          </div>
          <KeyValueTable rows={igcseSubjects} />
        </div>
      </div>
    </section>
  )
}