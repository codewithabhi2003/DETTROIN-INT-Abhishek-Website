import PersonCard from '@/components/cards/PersonCard'

const leaders = [
  {
    name: 'Mr. Ved Vyas',
    imageAlt: 'Black and white portrait of Mr. Ved Vyas',
    body: `Mr. Ved Vyas was the Founder-Principal of Modern School, Vasant Vihar. In the initial years, Mr. Vyas worked very closely with Mr. and Mrs. Purie to establish the vision and philosophy of Vasant Valley School. Mr. Vyas's love for the Arts and Literature is reflected in the core curriculum of the School. He wrote the lyrics of the School Song "Shreshtha Tamaya Karmane", which translates to "Excellence in Deed", the School motto.`,
  },
  {
    name: 'Mr. Arun Kapur',
    imageAlt: 'Portrait of Mr. Arun Kapur',
    body: `Mr. Arun Kapur was appointed the first Headmaster of Vasant Valley School in 1990. Mr. Kapur, along with the initial group of 16 teachers, ensured the implementation of the School's vision. Mr. Kapur continued to head the School for the next 30 years, till his retirement in 2020. Under his leadership, Vasant Valley School grew from strength to strength and gained recognition as one of the foremost coeducational day schools in India.`,
  },
]

export default function LeadershipHistorySection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container max-w-2xl mx-auto space-y-16">
        {leaders.map((leader) => (
          <div key={leader.name} className="text-center">
            <p className="body">{leader.body}</p>
            <div className="mt-8">
              <PersonCard name={leader.name} imageAlt={leader.imageAlt} size="lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}