import PersonCard from '@/components/cards/PersonCard'

export default function FoundersSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="section-container max-w-3xl mx-auto text-center">
        <p className="body-l">
          Mr. and Mrs. Purie envisioned a learning experience in which the
          Arts and Sports are as important as academic learning, and wanted
          to create a paradigm where being a good citizen was more important
          than being a good student. Vasant Valley School aims to nurture
          independent minds, and create a space where students are
          encouraged to actualise their innate and unique potential.
        </p>
        <p className="body mt-6">
          Mrs. Rekha Purie is the Chairperson of Vasant Valley School.
        </p>

        <div className="flex justify-center gap-16 mt-10">
          <PersonCard name="Ms. Rekha Purie" imageAlt="Portrait of Ms. Rekha Purie" size="lg" />
          <PersonCard name="Mr. Aroon Purie" imageAlt="Portrait of Mr. Aroon Purie" size="lg" />
        </div>
      </div>
    </section>
  )
}