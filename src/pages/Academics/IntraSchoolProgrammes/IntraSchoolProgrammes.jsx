import { Helmet } from 'react-helmet-async'
import ProgrammesHero from './ProgrammesHero'
import SocialEmotionalDevelopment from './SocialEmotionalDevelopment'
import ClassroomExperience from './ClassroomExperience'
import OutsideClassroomLearning from './OutsideClassroomLearning'
import SportsProgramme from './SportsProgramme'
import AfterSchoolExtension from './AfterSchoolExtension'

export default function IntraSchoolProgrammes() {
  return (
    <>
      <Helmet>
        <title>Intra-School Programmes | Vasant Valley School</title>
        <meta
          name="description"
          content="Pastoral care, health education, outreach, integrated learning, hobbies, sports, camps and after-school extension programmes at Vasant Valley School."
        />
      </Helmet>

      <ProgrammesHero />
      <SocialEmotionalDevelopment />
      <ClassroomExperience />
      <OutsideClassroomLearning />
      <SportsProgramme />
      <AfterSchoolExtension />
    </>
  )
}