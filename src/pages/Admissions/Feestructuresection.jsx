import FeeStructureTable from '@/components/tables/FeeStructureTable'

const feeSections = [
  {
    title: 'Fee Structure — Current',
    columns: ['FDN (Pre-School) – 5', '6 – 10', '11 – 12'],
    rows: [
      ['Tuition Fee (Quarterly)', '51,228', '58,881', '70,098'],
      ['Annual Charges (Quarterly)', '25,638', '25,638', '25,638'],
      ['Development Fee (Annually)', '30,738', '35,330', '42,060'],
      ['Admission Fee (One Time)', '200', '200', '200'],
      ['Security Deposit (One Time)', '500', '500', '500'],
    ],
  },
  {
    title: 'Earmarked Fees',
    columns: ['FDN – 5', '6 – 10', '11 – 12'],
    rows: [
      ['ERP Charges (Quarterly)', '1,000', '1,000', '1,000'],
      ['Math Programme (Quarterly, Class 2–8)', '810', '810', '810'],
      ['Bus — Vasant Kunj (Quarterly)', '10,494', '10,494', '10,494'],
      ['Bus — Non-Vasant Kunj (Quarterly)', '15,741', '15,741', '15,741'],
      [
        'Bus — Vasant Vihar & Munirka (Quarterly)',
        '12,243',
        '12,243',
        '12,243',
      ],
      ['Identity Card for Parents and Escorts', '50', '50', '50'],
    ],
  },
  {
    title: 'Meals',
    columns: ['FDN – 3', '4 – 12'],
    rows: [['Breakfast & Lunch (Quarterly)', '9,429', '10,320']],
  },
  {
    title: 'Other Charges',
    columns: ['FDN – 5', '6 – 10', '11 – 12'],
    rows: [
      ['Medical Charges (Annually)', '2,000', '2,000', '2,000'],
      ['Group Insurance (Annually)', '500', '500', '500'],
      [
        "Founder's Day, Calendar & Class Photo (Annually)",
        '2,650',
        '2,650',
        '2,650',
      ],
      [
        'After School Extension Camps (Optional)',
        '30,000',
        '30,000',
        '30,000',
      ],
    ],
  },
]

export default function FeeStructureSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="section-container max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="heading-1"
            style={{ color: 'var(--color-maroon)' }}
          >
            Fee Structure
          </h2>

          <span className="gold-rule mx-auto mt-4" />

          <p
            className="body-m mt-6"
            style={{ color: 'var(--color-ink-70)' }}
          >
            The following fee structure is applicable for the current
            academic session. All fees are payable as per the school's
            schedule and may be revised from time to time.
          </p>
        </div>

        {/* Fee Tables */}
        <div className="mt-14 space-y-12">
          <FeeStructureTable sections={feeSections} />
        </div>

        {/* Important Note */}
        <div className="mt-12 rounded-(--radius-img) bg-gold-light p-6 md:p-8">
          <h3
            className="heading-3"
            style={{ color: 'var(--color-maroon)' }}
          >
            Important Information
          </h3>

          <ul
            className="mt-5 space-y-3 body-m"
            style={{ color: 'var(--color-ink-70)' }}
          >
            <li>
              • All amounts are shown in <strong>₹ (INR)</strong>.
            </li>

            <li>
              • The fee structure is subject to revision by the school
              management.
            </li>

            <li>
              • Optional services such as transport and extension camps
              are charged separately.
            </li>

            <li>
              • Parents are advised to refer to the latest fee circular
              issued by the school for updated information.
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}