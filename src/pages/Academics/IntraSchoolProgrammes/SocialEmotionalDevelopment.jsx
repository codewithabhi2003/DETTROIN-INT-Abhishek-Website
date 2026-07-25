import ProgrammeAccordion from './ProgrammeAccordion'

const items = [
  {
    id: 'pastoral-care',
    title: 'Pastoral Care',
    body: "Throughout their school years the Class Teachers are the anchor for the children. Children from Classes 3 to 12 are also assigned a Pastoral Tutor, who is an advocate for them. These strong bonds create a sense of safety and security which facilitates learning. The tutor guides the child in planning for the year ahead with a focus on all areas of development.",
  },
  {
    id: 'health-education',
    title: 'Health Education',
    body: 'The Health Education curriculum introduces students to all aspects of health - physical, emotional, social and mental. This curriculum builds self-esteem and a positive body image. Appropriate and respectful communication, anger and stress management are part of the curriculum.',
  },
  {
    id: 'outreach-programme',
    title: 'Outreach Programme',
    body: [
      'An important aspect of our learning experience is the Outreach Programme, through which students and faculty work closely with the community. Students are given opportunities to participate in the afterschool teaching programme, where they interact with underprivileged children from a neighboring cluster settlement.',
      'Students also volunteer their time in the morning to manage traffic outside school, a small but significant step towards promoting road safety and a sensitivity towards the community. Students participate in planting and distributing saplings to all school members during the festival of Diwali, sending a strong "green" message to the community. We have an ongoing exchange programme with the Government Middle School in the village of Jhanjhraula, Haryana.',
    ],
  },
  {
    id: 'portfolio-box',
    title: 'The Portfolio Box',
    body: 'Every student from Foundation to Class 12 has a Portfolio Box, which is a collection of pictures, artwork and assignments put together at the end of each academic year by the students, teachers and parents. Each child receives this box full of memories at the time of leaving school.',
  },
]

export default function SocialEmotionalDevelopment() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        <h2 className="heading-1">Social-Emotional Development</h2>
        <span className="gold-rule" />
        <p className="body-m mt-5 max-w-2xl" style={{ color: 'var(--color-ink)' }}>
          Social-Emotional Development is essential for a conducive and
          secure learning environment, to help us nurture emotionally
          healthy individuals.
        </p>
        <ProgrammeAccordion items={items} />
      </div>
    </section>
  )
}