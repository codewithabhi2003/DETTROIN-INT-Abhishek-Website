// sections: [{ title, columns: string[], rows: [label, ...values][] }]
// Each section gets its own column headers, since fee groupings differ
// (e.g. Meals splits FDN–3 / 4–12, everything else splits FDN–5 / 6–10 / 11–12).
export default function FeeStructureTable({ sections }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.title} className="overflow-x-auto">
          <table className="w-full border-collapse">
            <caption
              className="text-left text-small font-semibold uppercase tracking-wide mb-3"
              style={{ color: 'var(--color-maroon)' }}
            >
              {section.title}
            </caption>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th scope="col" className="text-left py-3 pr-4">
                  <span className="sr-only">Fee item</span>
                </th>
                {section.columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="text-right py-3 px-4 text-small font-semibold whitespace-nowrap"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map(([label, ...values], i) => (
                <tr
                  key={label}
                  style={{ backgroundColor: i % 2 === 1 ? 'var(--color-surface)' : 'transparent' }}
                >
                  <th
                    scope="row"
                    className="text-left py-3 pr-4 font-normal text-small"
                    style={{ color: 'var(--color-ink-60)' }}
                  >
                    {label}
                  </th>
                  {values.map((value, vi) => (
                    <td
                      key={vi}
                      className="text-right py-3 px-4 text-small whitespace-nowrap"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      ₹{value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}