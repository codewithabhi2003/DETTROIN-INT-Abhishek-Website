import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Auth'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const VisionPhilosophy = lazy(() => import('@/pages/VisionPhilosophy'))
const LearningExperience = lazy(() => import('@/pages/Academics/LearningExperience'))
const InternationalCurriculum = lazy(() => import('@/pages/Academics/InternationalCurriculum'))
const IntraSchoolProgrammes = lazy(() => import('@/pages/Academics/IntraSchoolProgrammes'))
const InterSchoolProgrammes = lazy(() => import('@/pages/Academics/InterSchoolProgrammes'))
const AlumniConnect = lazy(() => import('@/pages/Alumni/AlumniConnect'))
const Cee = lazy(() => import('@/pages/CEE'))
const GurgaonCampus = lazy(() => import('@/pages/GurgaonCampus'))
const Admissions = lazy(() => import('@/pages/Admissions'))
const Careers = lazy(() => import('@/pages/Careers'))
const Announcements = lazy(() => import("@/pages/News/Announcements"))
const NewsEvents = lazy(() => import('@/pages/News/NewsEvents'))
const SpecialEducationNeeds = lazy(() => import('@/pages/Campus/SpecialEducationNeeds'))
const ADayInSchool = lazy(() => import("@/pages/Campus/ADayInSchool"));
const FAQs = lazy(() => import('@/pages/FAQs'))
const Infrastructure = lazy(() => import('@/pages/Campus/Infrastructure'))

/**
 * Path → lazy component map. NotFound is handled separately in
 * AppRouter.jsx (it's the one page that is NOT lazy-loaded).
 *
 * Append a route here each time a new page from the folder guide is
 * built — e.g. once pages/Admissions exists:
 *   const Admissions = lazy(() => import('@/pages/Admissions'))
 *   { path: '/admissions', element: Admissions }
 */
export const routes = [
  { path: '/', element: Home },
  { path: '/login', element: Login },
  { path: '/about', element: About },
  { path: '/contact', element: Contact },
  { path: '/vision-philosophy', element: VisionPhilosophy },
  { path: '/academics/learning-experience', element: LearningExperience },
  { path: '/academics/international-curriculum', element: InternationalCurriculum },
  { path: '/academics/intra-school-programmes', element: IntraSchoolProgrammes },
  { path: '/academics/inter-school-programmes', element: InterSchoolProgrammes },
  { path: '/alumni/connect', element: AlumniConnect },
  { path: '/cee', element: Cee },
  { path: '/gurgaon-campus', element: GurgaonCampus },
  { path: '/admissions', element: Admissions },
  { path: '/careers', element: Careers },
  { path: '/news/announcements', element: Announcements },
  { path: '/news/news-events', element: NewsEvents },
  { path: '/campus/special-education-needs', element: SpecialEducationNeeds },
  { path: '/campus/a-day-in-school', element: ADayInSchool }, 
  { path: '/faqs', element: FAQs },
  { path: '/campus/infrastructure', element: Infrastructure },
]