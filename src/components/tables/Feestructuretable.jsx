export default function FeeStructureTable({ sections }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.title}>
          {/* Section Title */}
          <h3
            className="text-sm font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-maroon)" }}
          >
            {section.title}
          </h3>

          {/* Mobile Hint */}
          <p
            className="md:hidden text-xs mb-2"
            style={{ color: "var(--color-ink-60)" }}
          >
            ← Swipe horizontally to view all columns →
          </p>

          {/* Table Wrapper */}
          <div
            className="overflow-x-auto rounded-xl border shadow-sm"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-white)",
            }}
          >
            <table className="min-w-180 w-full border-collapse">
              <thead>
                <tr
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderBottom: "2px solid var(--color-border)",
                  }}
                >
                  <th
                    className="sticky left-0 z-20 text-left px-5 py-4 font-semibold"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-ink)",
                    }}
                  >
                    Fee Item
                  </th>

                  {section.columns.map((col) => (
                    <th
                      key={col}
                      className="px-5 py-4 text-right whitespace-nowrap text-sm font-semibold"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {section.rows.map(([label, ...values], index) => (
                  <tr
                    key={label}
                    className="transition-colors hover:bg-gray-50"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "var(--color-white)"
                          : "var(--color-surface)",
                    }}
                  >
                    <th
                      scope="row"
                      className="sticky left-0 px-5 py-4 text-left font-medium whitespace-nowrap"
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "var(--color-white)"
                            : "var(--color-surface)",
                        color: "var(--color-ink)",
                      }}
                    >
                      {label}
                    </th>

                    {values.map((value, i) => (
                      <td
                        key={i}
                        className="px-5 py-4 text-right whitespace-nowrap text-sm"
                        style={{ color: "var(--color-ink)" }}
                      >
                        ₹ {Number(value).toLocaleString("en-IN")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}