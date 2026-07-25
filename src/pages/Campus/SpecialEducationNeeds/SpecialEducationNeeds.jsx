import { Helmet } from 'react-helmet-async'
import {
  Users,
  Activity,
  HeartPulse,
  MessageCircle,
  Brain,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react'

const supportTeam = [
  { id: 'special-ed', icon: BookOpen, label: 'Special Education Teachers' },
  { id: 'ot', icon: Activity, label: 'Occupational Therapists' },
  { id: 'physio', icon: HeartPulse, label: 'Physiotherapists' },
  { id: 'language', icon: MessageCircle, label: 'Language Therapists' },
  { id: 'psych', icon: Brain, label: 'Psychologists' },
  { id: 'dyslexia', icon: Users, label: 'Dyslexia Therapist' },
]

const approach = [
  {
    id: 'inclusive-model',
    title: 'Inclusive Model',
    body: 'The inclusive model of special education is followed and children with additional needs are supported within the general education classroom. Occupational Therapy, Physiotherapy and Language Therapy are provided within school hours.',
  },
  {
    id: 'iep',
    title: 'Individualised Education Plans',
    body: 'Each child has an Individual Education Plan (IEP) and all intervention is specific and individualised. The focus is on building skills based on the strengths and affinities of each child.',
  },
  {
    id: 'early-intervention',
    title: 'Early Intervention Programme',
    body: 'The Early Intervention Programme is an outside classroom programme for younger children who are not yet ready for an in-class experience.',
  },
  {
    id: 'family-partnership',
    title: 'Working With Families',
    body: 'Our team works closely with parents and classroom teachers alongside each child, so that progress made in therapy carries through into the classroom and at home.',
  },
]

export default function SpecialEducationNeeds() {
  return (
    <>
      <Helmet>
        <title>Special Education Needs | Vasant Valley School</title>
        <meta
          name="description"
          content="Vasant Valley School's multi-disciplinary Special Education Needs Section, offering inclusive, individualised support for children with additional needs."
        />
      </Helmet>

      {/* Intro */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <span className="badge badge-gold w-fit mx-auto mb-4">Campus</span>
          <h1 className="heading-1">Special Education Needs</h1>
          <span className="gold-rule mx-auto" />
          <p
            className="body-l mt-5"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            Vasant Valley School has a multi-disciplinary Special Education Needs
            Section, consisting of Special Education teachers, Occupational Therapists,
            Physiotherapists, Language Therapists, Psychologists and a Dyslexia
            Therapist.
          </p>
        </div>
      </section>

      {/* Support team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            Our Support Team
          </h2>
          <span className="gold-rule mt-2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {supportTeam.map((member) => {
              const Icon = member.icon
              return (
                <div
                  key={member.id}
                  className="rounded-(--radius-img) p-6"
                  style={{ backgroundColor: 'var(--color-white)' }}
                >
                  <Icon size={26} color="var(--color-gold)" aria-hidden="true" />
                  <p className="heading-3 mt-3" style={{ color: 'var(--color-ink)' }}>
                    {member.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            Our Approach
          </h2>
          <span className="gold-rule mt-2" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-8">
            {approach.map((item) => (
              <div key={item.id}>
                <h3 className="heading-3" style={{ color: 'var(--color-ink)' }}>
                  {item.title}
                </h3>
                <p
                  className="body-m mt-3"
                  style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities + photo gallery */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="heading-1" style={{ color: 'var(--color-gold)' }}>
            Our Facilities
          </h2>
          <span className="gold-rule mx-auto mt-2" />
          <p
            className="body-m mt-4"
            style={{ color: 'var(--color-ink-70, rgba(11,15,25,0.7))' }}
          >
            The school has a fully equipped Occupational Therapy room, with
            state-of-the-art facilities for Occupational Therapy, Physiotherapy and
            Sensory Integration.
          </p>
          <a
            href="https://static.vasantvalley.org/wp-content/uploads/2021/05/specialeducation-image1.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-flex items-center gap-2 w-fit"
          >
            <ImageIcon size={16} aria-hidden="true" />
            Photo Gallery
          </a>
        </div>
      </section>
    </>
  )
}