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
    <div className="mt-8 overflow-x-auto rounded-(--radius-img)] border shadow-sm">
      <table className="min-w-180 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-maroon">
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-4 text-left font-semibold text-white whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="even:bg-gold-light"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-t px-5 py-4"
                  style={{
                    borderColor: 'rgba(11,15,25,.08)',
                    color: 'var(--color-ink)',
                  }}
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
    <div className="mt-8 overflow-x-auto rounded-(--radius-img)] border shadow-sm">
      <table className="min-w-160 w-full border-collapse text-sm">
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className="even:bg-gold-light"
            >
              <td
                className="sticky left-0 border-t bg-white px-5 py-4 font-semibold whitespace-nowrap"
                style={{
                  borderColor: 'rgba(11,15,25,.08)',
                  color: 'var(--color-maroon)',
                  width: '22%',
                }}
              >
                {row.label}
              </td>

              <td
                className="border-t px-5 py-4"
                style={{
                  borderColor: 'rgba(11,15,25,.08)',
                  color: 'var(--color-ink)',
                }}
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
    <section
  className="section-padding"
  style={{ backgroundColor: 'var(--color-gold-light)' }}
>
  <div className="section-container">

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">

      {/* CBSE */}

      <div>
        <h2
          className="heading-1"
          style={{ color: 'var(--color-maroon)' }}
        >
          Going Above &amp; Beyond
        </h2>

        <span className="gold-rule mt-4" />

        <div
          className="space-y-5 mt-6"
          style={{ color: 'var(--color-ink-70)' }}
        >
          <p>
            The curriculum goes beyond the prescribed CBSE syllabus where
            the learning process is as important as the outcome.
          </p>

          <p>
            Through academics, arts, sports and life skills, students are
            encouraged to become compassionate, curious and responsible
            individuals.
          </p>

          <p>
            Critical thinking, collaboration and lifelong learning remain
            central to every learning experience.
          </p>

          <p className="font-semibold">
            Students select subjects in Grades 11 &amp; 12:
          </p>
        </div>

        <DataTable
          headers={seniorElectives.headers}
          rows={seniorElectives.rows}
        />
      </div>

      {/* IGCSE */}

      <div>
        <h2
          className="heading-1"
          style={{ color: 'var(--color-maroon)' }}
        >
          IGCSE
        </h2>

        <span className="gold-rule mt-4" />

        <div
          className="space-y-5 mt-6"
          style={{ color: 'var(--color-ink-70)' }}
        >
          <p>
            Vasant Valley School offers the Cambridge International General
            Certificate of Secondary Education for Grade 9 students.
          </p>

          <h3
            className="heading-3"
            style={{ color: 'var(--color-maroon)' }}
          >
            Why IGCSE?
          </h3>

          <p>
            The curriculum promotes inquiry, analytical thinking,
            communication and problem-solving through active learning.
          </p>

          <h3
            className="heading-3"
            style={{ color: 'var(--color-maroon)' }}
          >
            Why at Vasant Valley?
          </h3>

          <p>
            Our teaching philosophy aligns closely with Cambridge's
            learner-centred approach, encouraging students to explore
            subjects beyond textbooks.
          </p>

          <p className="font-semibold">
            Students choose nine subjects in Grade 9:
          </p>
        </div>

        <KeyValueTable rows={igcseSubjects} />
      </div>

    </div>

  </div>
</section>
  )
}