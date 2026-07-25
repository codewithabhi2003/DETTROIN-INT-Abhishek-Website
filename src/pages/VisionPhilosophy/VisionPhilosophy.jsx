import { Helmet } from 'react-helmet-async'

export default function VisionPhilosophy() {
  return (
    <>
      <Helmet>
        <title>Vision & Philosophy | Vasant Valley School</title>
        <meta
          name="description"
          content="Vasant Valley School's vision: education in its finest form, nurturing mind, body and spirit, and preparing torchbearers of tomorrow in the spirit of global citizenship."
        />
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-2xl mx-auto text-center">
          <h1 className="heading-1" style={{ color: 'var(--color-maroon)' }}>
            Vision & Philosophy
          </h1>
          <span className="gold-rule mx-auto" />

          <p className="body-l mt-8">
            We at Vasant Valley School believe that each child entrusted to
            us will receive education in its finest form. Learning is a
            lifelong process, and all students and teachers are challenged
            to exceed their own expectations. This is a holistic experience
            that synergises the growth of mind, body and spirit. We nurture
            and prepare generations of individuals, the torchbearers of
            tomorrow who believe in the strength of their own convictions
            and take pride in being Indian. They will work together in the
            spirit of Global Citizenship. Our work in school shapes the
            future and no constraints shall daunt us.
          </p>
        </div>
      </section>
    </>
  )
}