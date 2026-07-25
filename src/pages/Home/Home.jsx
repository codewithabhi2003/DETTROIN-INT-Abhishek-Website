import { Helmet } from 'react-helmet-async'
import Hero from './Hero'
import AboutPreview from './AboutPreview'
import AnnouncementsPreview from './AnnouncementsPreview'
import NewsPreview from './NewsPreview'
import InstagramSection from './InstagramSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vasant Valley School</title>
        <meta
          name="description"
          content="Vasant Valley School, Vasant Kunj, New Delhi — a self-financing inclusive day school founded in 1990, encouraging ethical values, original thinking and global citizenship."
        />
      </Helmet>

      <Hero />
      <AboutPreview />
      <AnnouncementsPreview />
      <NewsPreview />
      <InstagramSection />
    </>
  )
}