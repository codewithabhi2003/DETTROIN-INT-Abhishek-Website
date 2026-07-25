import ProgrammeAccordion from './ProgrammeAccordion'

const items = [
  {
    id: 'environment-programme',
    title: 'Environment Programme',
    body: 'The school works towards developing compassion, sensitivity and a sense of responsibility towards the environment. This is achieved through life skills classes, trips outside school, talks by environmentalists, film shows, nature walks, adventure camps, gardening, vermicomposting, recycling paper, reducing food waste and a graded study of the River Yamuna.',
  },
  {
    id: 'annual-school-camps',
    title: 'Annual School Camps',
    body: 'The one experience that is forever etched in the mind of our students is the Annual School Camp. The children of Class 2 spend a night in school in the company of their friends and teachers. For higher classes, they embark on a short trip to the foothills of the mountains, river valleys and national parks. These Camps enable children to create a special bond with nature and develop new ties with peers and teachers. Safety and security are of prime importance and great care is taken in identifying appropriate camp sites.',
  },
  {
    id: 'science-fair',
    title: 'Science Fair',
    body: 'The Science Fair provides a platform to cultivate a scientific attitude in a festive atmosphere, where groups of students are engaged in conducting experiments, creating models and demonstrating their learning in practical ways. A focus on scientific fundamentals like the spirit of curiosity, enquiry and innovation as well as life skills like collaboration, decision-making and communication are significant outcomes.',
  },
  {
    id: 'talks-seminars',
    title: 'Talks and Seminars',
    body: 'A regular feature at Vasant Valley School is visits by eminent personalities. Interacting with inspirational leaders fosters motivation and awareness among our students. These leaders are individuals who have gained recognition in their field for their creativity, hard work and commitment.',
  },
  {
    id: 'exchange-programmes',
    title: 'Exchange Programmes',
    body: 'The School engages in several exchange programmes with schools such as Grace Church School, New York; Kulosaari Academy, Helsinki and the Government Middle School, Jhanjraula, Haryana. Through these programmes, the students get exposure to different cultures, new environments and ideas, and teaching methodology. It gives the children an opportunity in collaborative and interactive learning.',
  },
  {
    id: 'college-career-counselling',
    title: 'College and Career Counselling',
    body: [
      'The College and Career Counselling team prepares the students of classes 9, 10, 11 and 12 for a smooth transition from school to the University/College of their choice. Individual counselling sessions and standardised assessment and aptitude tests help the students to make appropriate subject choices for classes 11 and 12. Interactions and discussions with senior students and alumni are useful in identifying their interests and affinities.',
      'The college counselling team uses its in-depth knowledge of colleges and universities, both within India and abroad, to help children identify suitable universities and guides them through the application process. We support them in identifying colleges best suited to them, organising letters of recommendation and essays. Visits of representatives from various universities in India and abroad give the children a detailed understanding of programmes and facilities. The school also organizes College and Career fairs on campus, to help students make informed subject and career choices.',
    ],
  },
]

export default function OutsideClassroomLearning() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="section-container">
        <h2 className="heading-1">Outside Classroom Learning</h2>
        <span className="gold-rule" />
        <p className="body-m mt-5 max-w-2xl" style={{ color: 'var(--color-ink)' }}>
          Outside Classroom Learning offers a range of enriching experiences
          and opportunities.
        </p>
        <ProgrammeAccordion items={items} />
      </div>
    </section>
  )
}