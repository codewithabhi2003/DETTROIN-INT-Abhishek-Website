import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'

// TODO: swap for services/faqService.js once data/faqs.json exists
const faqs = [
  {
    question: 'Which Examination Board is Vasant Valley School affiliated to?',
    content: [
      {
        type: 'p',
        text: 'Vasant Valley School is affiliated to The Central Board of Secondary Education and is also registered as a Cambridge International School offering the Cambridge IGCSE and Cambridge A Level curriculums.',
      },
    ],
  },
  {
    question: 'What are the various subjects offered by Vasant Valley School under the CBSE?',
    content: [
      {
        type: 'list',
        heading: 'Class 10',
        items: [
          'English', 'Mathematics', 'Science', 'Social Science', 'Indian Music',
          'Home Science', 'Computer Application', 'Hindi', 'Sanskrit',
          'Basics of Accountancy', 'Basics of Business',
        ],
      },
      {
        type: 'list',
        heading: 'Class 12',
        items: [
          'English', 'History', 'Geography', 'Sociology', 'Political Science',
          'Economics', 'Accountancy', 'Business Studies', 'Psychology',
          'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Biotechnology',
          'Home Science', 'Applied Art', 'Painting', 'Sculpture',
          'Indian Classical Music (Vocal)', 'Indian Classical Music (Instrumental)',
          'Computer Science',
        ],
      },
    ],
  },
  {
    question: 'How can I apply for a job in Vasant Valley School?',
    content: [
      {
        type: 'p',
        text: 'You need to upload your updated resume on the Careers page of the School website, or mail it to careers@vasantvalley.edu.in.',
      },
    ],
  },
  {
    question: 'How do I apply for admission for my ward?',
    content: [
      {
        type: 'p',
        text: 'Applications for admission need to be sent to admissions@vasantvalley.org. Admission to each year group depends on a vacancy. A paper copy of the application can also be submitted at the school office. The application needs to be refreshed every three months.',
      },
    ],
  },
  {
    question: 'When can prospective parents visit school?',
    content: [
      {
        type: 'p',
        text: 'Prospective parents can register for an Open Day to take a guided tour of the school. Please visit the Open Day link on the website for more details.',
      },
    ],
  },
  {
    question: 'Does Vasant Valley offer any foreign languages?',
    content: [
      {
        type: 'p',
        text: 'Vasant Valley School does not offer any foreign languages — all students need to study Hindi and Sanskrit till Class 8, and then opt for either one of these two languages for Classes 9 and 10.',
      },
    ],
  },
  {
    question: 'Does Vasant Valley offer hostel facility?',
    content: [{ type: 'p', text: 'We are a day school and do not offer any hostel facility.' }],
  },
  {
    question: 'Is there any other campus of Vasant Valley School?',
    content: [{ type: 'p', text: 'Vasant Valley has a second, upcoming campus in Gurgaon.' }],
  },
  {
    question: 'When does the Admission process for Pre School begin?',
    content: [
      {
        type: 'p',
        text: 'The admissions process for Pre School begins in December. The details are uploaded on our website as per the timeline prescribed by the Department of Education.',
      },
    ],
  },
  {
    question: 'Is Vasant Valley School RTE compliant?',
    content: [
      { type: 'p', text: 'Vasant Valley School is in strict compliance with the Right to Education Act.' },
    ],
  },
  {
    question: 'What is the academic year of the school?',
    content: [
      { type: 'p', text: 'The academic year is from April to March, and divided into four learning cycles.' },
      {
        type: 'list',
        items: [
          'Learning Cycle 1: April to May',
          'Learning Cycle 2: July to September',
          'Learning Cycle 3: October to November',
          'Learning Cycle 4: January to March',
        ],
      },
    ],
  },
  {
    question: 'What are the School Timings?',
    content: [{ type: 'p', text: 'The day starts at 8:00 a.m. and ends at 3:00 p.m.' }],
  },
  {
    question: 'What is the school uniform?',
    content: [
      {
        type: 'p',
        text: "The School uniform is cotton salwar-kameez for girls across all year groups, from Foundation to Class 12. The boys' uniform is cotton trousers and shirt. There is no separate winter uniform — both boys and girls wear a maroon sweater with the School stripes in winter. The uniform is available in the Uniform Shop on the school campus.",
      },
    ],
  },
  {
    question: 'Do children have to carry all books home every day?',
    content: [
      {
        type: 'p',
        text: 'Students keep their books and notebooks in their personal lockers in the classroom. Other than the school diary, there is barely any load in the school bag. Only those books and notebooks required for homework or test revision go home.',
      },
    ],
  },
  {
    question: 'What is the procedure for payment of fees?',
    content: [
      {
        type: 'p',
        text: 'All school dues should be paid by cheque or draft in the name of "VASANT VALLEY SCHOOL". Fees can also be paid online using the Parent school login id.',
      },
    ],
  },
  {
    question: 'What are the various subjects offered by Vasant Valley School under the Cambridge IGCSE curriculum?',
    content: [
      {
        type: 'list',
        items: [
          'First Language English (0500)', 'French (0520)', 'Spanish (0530)', 'Hindi (0549)',
          'Mathematics (0580)', 'International Mathematics (0607)', 'Biology (0610)',
          'Physics (0625)', 'Chemistry (0620)', 'Environmental Management (0680)',
          'Global Perspectives (0457)', 'History (0470)', 'Literature in English (0475)',
          'Economics (0455)', 'Art and Design (0400)', 'Computer Science (0478)',
          'Information and Communication Technology (0417)', 'Business Studies (0450)',
        ],
      },
    ],
  },
]

function AnswerBlock({ content }) {
  return (
    <div className="space-y-4">
      {content.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} className="body">
              {block.text}
            </p>
          )
        }
        return (
          <div key={i}>
            {block.heading && (
              <p
                className="text-small font-semibold uppercase tracking-wide mb-2"
                style={{ color: 'var(--color-ink)' }}
              >
                {block.heading}
              </p>
            )}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
              {block.items.map((item) => (
                <li key={item} className="text-small" style={{ color: 'var(--color-ink-60)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Helmet>
        <title>FAQs | Vasant Valley School</title>
        <meta
          name="description"
          content="Answers to frequently asked questions about admissions, curriculum, fees, timings and campus life at Vasant Valley School."
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            Frequently Asked Questions
          </h1>
          <span className="gold-rule mx-auto" />
        </div>

        <div
          className="section-container max-w-2xl mx-auto mt-10 divide-y"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-trigger-${index}`

            return (
              <div key={faq.question} className="py-5">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="body font-semibold" style={{ color: 'var(--color-ink)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 mt-1"
                    style={{
                      color: 'var(--color-maroon)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                    }}
                  />
                </button>

                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="mt-4">
                  <AnswerBlock content={faq.content} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}