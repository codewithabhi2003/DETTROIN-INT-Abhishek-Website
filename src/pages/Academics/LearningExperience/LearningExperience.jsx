import { Helmet } from 'react-helmet-async'
import LearningHero from './LearningHero'
import CurriculumSection from './CurriculumSection'
import LearningCycles from './LearningCycles'
import CelebratingIndividuality from './CelebratingIndividuality'
import LifeSkillsAndSupport from './LifeSkillsAndSupport'
import AssessmentReporting from './AssessmentReporting'

export default function LearningExperience() {
  return (
    <>
      <Helmet>
        <title>Learning Experience | Vasant Valley School</title>
        <meta
          name="description"
          content="The learning experience at Vasant Valley School nurtures leadership, self-discipline and the holistic development of every child, through a curriculum that goes beyond the syllabus."
        />
      </Helmet>

      <LearningHero />
      <CurriculumSection />
      <LearningCycles />
      <CelebratingIndividuality />
      <LifeSkillsAndSupport />
      <AssessmentReporting />
    </>
  )
}