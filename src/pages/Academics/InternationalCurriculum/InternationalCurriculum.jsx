import { Helmet } from 'react-helmet-async'
import CurriculumHero from './CurriculumHero'
import CambridgePathway from './CambridgePathway'
import IGCSESection from './IGCSESection'
import ASALevelsSection from './ASALevelsSection'

export default function InternationalCurriculum() {
  return (
    <>
      <Helmet>
        <title>International Curriculum | Vasant Valley School</title>
        <meta
          name="description"
          content="Vasant Valley School is a registered Cambridge International School offering the Cambridge curriculum for Classes 8–12, from the Foundation Year through IGCSE and AS & A Levels."
        />
      </Helmet>

      <CurriculumHero />
      <CambridgePathway />
      <IGCSESection />
      <ASALevelsSection />
    </>
  )
}