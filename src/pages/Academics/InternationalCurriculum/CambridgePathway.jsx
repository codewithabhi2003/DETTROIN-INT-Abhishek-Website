import { ArrowRight } from 'lucide-react'
import SubjectTable from './SubjectTable'

const pathwayStages = [
  { name: 'Cambridge Early Years', ages: 'Ages 3–5' },
  { name: 'Cambridge Primary', ages: 'Ages 5–11' },
  { name: 'Cambridge Lower Secondary', ages: 'Ages 11–14' },
  { name: 'Cambridge Upper Secondary', ages: 'Ages 14–16 · IGCSE' },
  { name: 'Cambridge Advanced', ages: 'Ages 16–19 · AS & A Level' },
]

const learnerAttributes = [
  { label: 'Confident', desc: 'Working with information and ideas — their own and of others.' },
  { label: 'Responsible', desc: 'For themselves, responsive to and respectful of others.' },
  { label: 'Reflective', desc: 'As learners, developing their ability to learn.' },
  { label: 'Innovative', desc: 'And equipped for new and future challenges.' },
  { label: 'Engaged', desc: 'Intellectually and socially, ready to make a difference.' },
]

const foundationSubjects = [
  { label: 'Languages*', value: 'English Language and Literature and Spanish or Hindi Language and Literature' },
  { label: 'Humanities & Social Sciences', value: 'History, Economics, Environment Geography*, Global Perspectives**' },
  { label: 'Sciences', value: 'Biology, Physics, Chemistry, Environmental Management*' },
  { label: 'Mathematics', value: 'Mathematics' },
  { label: 'Creative & Professional', value: 'Art and Design, Applied Computing, Global Perspectives**' },
]

const foundationFootnotes = [
  '*CBSE requires students to have studied three languages up to Class 8 in order to be eligible for the CBSE Class 10 examinations. Some Indian universities may require Hindi to have been studied up to Class 8, so please complete your due diligence before making a choice between Hindi and Spanish.',
  '*Cambridge recognises Environmental Management as both a Science and a subject under Humanities and Social Sciences.',
  '**Global Perspectives qualifies as both a Humanities and Social Sciences subject and a Creative and Professional subject.',
]

export default function CambridgePathway() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        {/* Responsive banner image */}
        <div className="rounded-(--radius-img) overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Students in a Cambridge international curriculum setting"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="body-l" style={{ color: 'var(--color-ink)' }}>
            Class 8 serves as a foundation year, focusing on developing the
            skills and attributes essential for the Cambridge IGCSE
            programme in Classes 9 and 10, which then extend into the
            Cambridge Advanced programme in Class 11 (AS Level) and Class 12
            (A Level).
          </p>
        </div>

        {/* Cambridge Pathway */}
        <div className="mt-12">
          <h2 className="heading-2 text-center">Cambridge Pathway</h2>
          <div className="flex flex-wrap items-stretch justify-center gap-2 mt-8">
            {pathwayStages.map((stage, i) => (
              <div key={stage.name} className="flex items-center gap-2">
                <div
                  className="rounded-(--radius-img) p-4 w-40 text-center"
                  style={{ backgroundColor: 'var(--color-gold-light)' }}
                >
                  <p className="text-small font-medium" style={{ color: 'var(--color-ink)' }}>{stage.name}</p>
                  <p className="text-micro mt-1" style={{ color: 'var(--color-gold-dark, var(--color-gold))' }}>{stage.ages}</p>
                </div>
                {i < pathwayStages.length - 1 && (
                  <ArrowRight size={16} style={{ color: 'var(--color-ink-40)' }} className="shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.cambridgeinternational.org"
              target="_blank"
              rel="noreferrer"
              className="text-small font-medium underline"
              style={{ color: 'var(--color-gold-dark, var(--color-gold))' }}
            >
              cambridgeinternational.org
            </a>
          </p>
        </div>

        {/* Learner Attributes + Foundation subjects */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="heading-2">Cambridge Learner Attributes</h3>
            <span className="gold-rule" />
            <p className="body-m mt-5" style={{ color: 'var(--color-ink)' }}>
              The Cambridge curriculum and assessments are designed with the
              following Cambridge learner attributes in mind:
            </p>

            <ul className="mt-5 space-y-3">
              {learnerAttributes.map((attr) => (
                <li key={attr.label} className="flex gap-3">
                  <span
                    className="shrink-0 rounded-full flex items-center justify-center text-micro font-medium"
                    style={{ width: '1.75rem', height: '1.75rem', backgroundColor: 'var(--color-gold-light)', color: 'var(--color-gold-dark, var(--color-gold))' }}
                  >
                    {attr.label[0]}
                  </span>
                  <p className="body-m" style={{ color: 'var(--color-ink)' }}>
                    <span className="font-medium">{attr.label}</span> — {attr.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-5">
              <a
                href="https://www.cambridgeinternational.org/why-choose-us/parents-and-students/in-class/the-cambridge-learner-attributes/"
                target="_blank"
                rel="noreferrer"
                className="text-small font-medium underline"
                style={{ color: 'var(--color-gold-dark, var(--color-gold))' }}
              >
                Read more about the Cambridge learner attributes
              </a>
            </p>

            <h3 className="heading-2 mt-10">Why Cambridge Foundation Year?</h3>
            <span className="gold-rule" />
            <ul className="mt-5 space-y-2 list-disc pl-5">
              <li className="body-m" style={{ color: 'var(--color-ink)' }}>Head start on building the skills integral to readiness for the IGCSE Programme.</li>
              <li className="body-m" style={{ color: 'var(--color-ink)' }}>Bridges the shift from CBSE curricula to the Cambridge system, reducing adjustment pressure in Class 9.</li>
              <li className="body-m" style={{ color: 'var(--color-ink)' }}>Sample a range of disciplines before making subject choices for IGCSE.</li>
            </ul>
          </div>

          <div>
            <h3 className="heading-2">Cambridge Foundation Year subjects offered</h3>
            <span className="gold-rule" />
            <div className="mt-6">
              <SubjectTable rows={foundationSubjects} footnotes={foundationFootnotes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}