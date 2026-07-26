import SubjectTable from './SubjectTable'

const skills = [
  'In-depth subject content',
  'Independent thinking',
  'Applying knowledge and understanding to new as well as familiar situations',
  'Handling and evaluating different types of information source',
  'Thinking logically and presenting ordered and coherent arguments',
  'Making judgements, recommendations and decisions',
  'Presenting reasoned explanations, understanding implications and communicating them logically and clearly',
]

const asLevelSubjects = [
  { label: 'Optional (only AS Levels)', value: 'English Language General Paper (8021)*' },
  { label: 'Elective 1 (AS and A Levels)', value: 'Physics (9702) / Business (9609) / History (9489)' },
  { label: 'Elective 2 (AS and A Levels)', value: 'Chemistry (9701) / Psychology (9990) / Computer Science (9618)' },
  { label: 'Elective 3 (AS and A Levels)', value: 'Mathematics (9709) / Sociology (9699) / Geography (9696)' },
  { label: 'Elective 4 (AS and A Levels)', value: 'Economics (9708) / Biology (9700) / Art and Design (9479)' },
]

const asLevelFootnotes = [
  '*While we encourage students to pursue AS Level English Language for its academic value, a student may choose not to opt for the subject. In doing so, it is assumed that the student has independently reviewed relevant university and college entry requirements.',
  '**Any subject with less than 5 takers will not be offered.',
]

const notes = [
  'The Board Examinations will be administered as a part of the March Series examinations for our Cambridge AS and A Level programme. The only exception will be for subjects that are not offered by Cambridge in the March Series. These subjects will be administered in the June Series (such as History, Geography, Computer Science etc.)',
  'English Language General Paper (AS Level) is an optional subject and its board examination will be conducted as a part of March Series in Class 12.',
  'Students can choose to study a total of 3 or 4 subjects, over and above English Language. This should be decided in consultation with the College Counselling Team. Further, students cannot choose two subjects from the same elective group.',
]

export default function ASALevelsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        {/* Responsive banner image – full width, capped height */}
        <div className="rounded-(--radius-img) overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1509062522246-375597bbf1d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Students engaged in a Cambridge AS and A Level lesson"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column – same as before */}
          <div>
            <h2 className="heading-1">Cambridge AS and A Levels</h2>
            <span className="gold-rule" />
            <div className="body-m space-y-4 mt-5" style={{ color: 'var(--color-ink)' }}>
              <p>
                Cambridge International A Level is typically a two-year
                course, and Cambridge International AS Level is typically one
                year. Universities worldwide value and recognise Cambridge
                International AS &amp; A Level qualifications since it develops
                learners' knowledge, understanding and skills in:
              </p>
            </div>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              {skills.map((skill) => (
                <li key={skill} className="body-m" style={{ color: 'var(--color-ink)' }}>{skill}</li>
              ))}
            </ul>

            <h3 className="heading-2 mt-8">Assessment by Cambridge</h3>
            <span className="gold-rule" />
            <div className="body-m space-y-4 mt-5" style={{ color: 'var(--color-ink)' }}>
              <p>
                At Vasant Valley School, assessment options to gain Cambridge
                International AS &amp; A Level qualifications are as follows:
              </p>
              <p>
                <span className="font-medium">Take the Cambridge International AS Level only:</span>{' '}
                the syllabus content is half a Cambridge International A
                Level.
              </p>
              <p>
                <span className="font-medium">Staged Assessment Route:</span> students take the
                Cambridge International AS Level in one examination series*
                and complete the final Cambridge International A Level** in a
                subsequent series. AS Level marks can be carried forward to a
                full A Level twice within a 13 month period.
              </p>
              <p className="text-micro" style={{ color: 'var(--color-ink-40)' }}>
                *The Advanced Subsidiary Level (AS Level) examinations are
                administered at the end of Class 11 (except for English
                Language General Paper). **The Advanced Level (A Level)
                examinations are administered at the end of Class 12 along
                with English Language General Paper AS Level.
              </p>
            </div>
            <p className="mt-5">
              <a
                href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/"
                target="_blank"
                rel="noreferrer"
                className="text-small font-medium underline"
                style={{ color: 'var(--color-gold-dark, var(--color-gold))' }}
              >
                Read more about Cambridge AS &amp; A Levels
              </a>
            </p>
          </div>

          {/* Right column – same as before */}
          <div>
            <h3 className="heading-2">Subjects offered at Vasant Valley School</h3>
            <span className="gold-rule" />
            <div className="mt-6">
              <SubjectTable rows={asLevelSubjects} footnotes={asLevelFootnotes} />
            </div>

            <div className="rounded-(--radius-img) p-6 mt-8" style={{ backgroundColor: 'var(--color-gold-light)' }}>
              <p className="text-small font-medium" style={{ color: 'var(--color-ink)' }}>Please note</p>
              <ul className="mt-3 space-y-3">
                {notes.map((note) => (
                  <li key={note} className="text-small" style={{ color: 'var(--color-ink)' }}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}