import ProgrammeAccordion from './ProgrammeAccordion'

const items = [
  {
    id: 'pastoral-care',
    title: 'Pastoral Care',
    body: "Throughout their school years, the Class Teachers are the anchor for every child. Students from Classes 3 to 12 are also assigned a Pastoral Tutor who acts as their mentor and advocate. These strong relationships create a sense of safety and belonging while helping students plan for their academic, personal and social development.",
  },
  {
    id: 'health-education',
    title: 'Health Education',
    body: 'The Health Education curriculum introduces students to every aspect of well-being—physical, emotional, social and mental. It encourages positive self-esteem, healthy relationships, respectful communication and effective stress and anger management.',
  },
  {
    id: 'outreach-programme',
    title: 'Outreach Programme',
    body: [
      'An important part of the learning experience is the Outreach Programme, where students and teachers work closely with the community. Students participate in after-school teaching initiatives for children from neighbouring communities, developing empathy and social responsibility.',
      'Students also volunteer to manage traffic outside the school, promote environmental awareness by distributing saplings during Diwali and participate in exchange programmes with Government Middle School, Jhanjhraula, Haryana. These initiatives encourage leadership, civic responsibility and meaningful community engagement.',
    ],
  },
  {
    id: 'portfolio-box',
    title: 'The Portfolio Box',
    body: 'Every student from Foundation to Class 12 maintains a Portfolio Box containing artwork, photographs, assignments and memories collected throughout the academic year. It becomes a treasured keepsake presented to students when they graduate from the school.',
  },
]

export default function SocialEmotionalDevelopment() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Social-Emotional Development
          </h2>

          <span className="gold-rule mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            Social-emotional learning is at the heart of a safe, inclusive and
            supportive school environment. Students are encouraged to develop
            empathy, resilience, confidence and strong interpersonal skills that
            prepare them for lifelong personal and social success.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 md:mt-12">
          <ProgrammeAccordion items={items} />
        </div>
      </div>
    </section>
  )
}