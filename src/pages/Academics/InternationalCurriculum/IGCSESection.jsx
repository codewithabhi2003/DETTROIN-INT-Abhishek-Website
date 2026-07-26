import SubjectTable from './SubjectTable'

const whyIgcse = [
  "World's most popular international qualification for 14 to 16 year olds.",
  'Core of the IGCSE curriculum emphasizes a practical approach to learning based on inquiry.',
  'Cambridge IGCSE develops learner knowledge, understanding and skills in: subject content, applying knowledge and understanding to new as well as familiar situations, intellectual enquiry, flexibility and responsiveness to change, working and communicating in English, influencing outcomes, and cultural awareness.',
  "Provides an ideal foundation for higher-level courses such as the International Baccalaureate Diploma Programme, 'A' Levels and the North American AP (Advanced Placement Test).",
  "Has worldwide recognition and is equivalent to the Certificate of Secondary Education from Indian education boards, General Certificate of Secondary Education, and 'O' Level.",
]

const igcseSubjects = [
  { label: 'Mandatory', value: 'First Language English (0500) and Global Perspectives (0457)' },
  { label: 'Elective 1', value: 'Spanish (0530) / Hindi (0549)' },
  { label: 'Elective 2', value: 'Literature in English (0475) / Chemistry (0620)' },
  { label: 'Elective 3', value: 'History (0470) / Physics (0625)' },
  { label: 'Elective 4', value: 'Mathematics (0580)' },
  { label: 'Elective 5', value: 'Business Studies (0264) / Economics (0455)' },
  { label: 'Elective 6', value: 'Art and Design (0400) / Computer Science (0478) / Information and Communication Technology (0417)' },
  { label: 'Elective 7', value: 'Environmental Management (0680) / Biology (0610) / Geography (0460)' },
]

const igcseGroups = [
  'Group 1 — Languages',
  'Group 2 — Humanities',
  'Group 3 — Sciences',
  'Group 4 — Mathematics',
  'Group 5 — Creative and Vocational',
]

const iceCategories = [
  { label: 'Distinction', value: 'Grade A or better in five subjects and grade C or better in two subjects.' },
  { label: 'Merit', value: 'Grade C or better in five subjects and grade F or better in two subjects.' },
  { label: 'Pass', value: 'Grade G or better in seven subjects.' },
]

export default function IGCSESection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container">
        {/* Responsive banner image */}
        <div className="rounded-(--radius-img) overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90910b6b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Students in a Cambridge IGCSE classroom"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h2 className="heading-1" style={{ color: 'var(--color-ink)' }}>
              Why Cambridge IGCSE?
            </h2>
            <span className="gold-rule" />
            <ul className="mt-5 space-y-3 list-disc pl-5">
              {whyIgcse.map((point) => (
                <li key={point} className="body-m" style={{ color: 'var(--color-ink)' }}>
                  {point}
                </li>
              ))}
            </ul>

            <p className="body-m mt-6" style={{ color: 'var(--color-ink)' }}>
              Students can study a maximum of 9 subjects in Classes 9 and 10
              (2026–2028) as follows:
            </p>
            <div className="mt-5">
              <SubjectTable
                rows={igcseSubjects}
                footnotes={['*Any subject with less than 7–8 takers will not be offered.']}
              />
            </div>
          </div>

          {/* Right column – ICE info card */}
          <div
            className="rounded-(--radius-img) p-6 md:p-8 h-fit"
            style={{ backgroundColor: 'var(--color-white)' }}
          >
            <h3 className="heading-2" style={{ color: 'var(--color-ink)' }}>
              Cambridge ICE
            </h3>
            <span className="gold-rule" />
            <p className="body-m mt-5" style={{ color: 'var(--color-ink)' }}>
              The Cambridge ICE certificate is a group award designed for
              schools that want to offer a broad curriculum. Students enter
              and sit for a minimum of seven subjects selected from the five
              IGCSE curriculum areas:
            </p>
            <ul className="mt-4 space-y-1">
              {igcseGroups.map((group) => (
                <li key={group} className="body-m" style={{ color: 'var(--color-ink)' }}>
                  {group}
                </li>
              ))}
            </ul>
            <p className="body-m mt-4" style={{ color: 'var(--color-ink)' }}>
              Cambridge ICE is awarded to students who pass in at least seven
              Cambridge IGCSE subjects, including two from Group 1 and one
              from each of Groups 2 to 5. The seventh subject may be chosen
              from any of the syllabus groups.
            </p>
            <p className="body-m mt-4" style={{ color: 'var(--color-ink)' }}>
              Students who qualify for the Cambridge ICE award will be placed
              in one of three categories:
            </p>
            <ul className="mt-3 space-y-2">
              {iceCategories.map((cat) => (
                <li key={cat.label} className="body-m" style={{ color: 'var(--color-ink)' }}>
                  <span className="font-medium">{cat.label}</span> — {cat.value}
                </li>
              ))}
            </ul>
            <p className="mt-5">
              <a
                href="https://help.cambridgeinternational.org/hc/en-gb/articles/203477342-Cambridge-International-Certificate-in-Education-ICE-"
                target="_blank"
                rel="noreferrer"
                className="text-small font-medium underline"
                style={{ color: 'var(--color-gold-dark, var(--color-gold))' }}
              >
                Read more about Cambridge ICE
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}