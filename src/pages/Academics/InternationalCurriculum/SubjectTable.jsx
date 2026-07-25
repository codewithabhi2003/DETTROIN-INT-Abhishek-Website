export default function SubjectTable({ rows, footnotes }) {
  return (
    <div>
      <div className="overflow-x-auto rounded-(--radius-img)" style={{ border: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))' }}>
        <table className="w-full text-small" style={{ borderCollapse: 'collapse' }}>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} style={{ backgroundColor: i % 2 ? 'var(--color-gold-light)' : 'var(--color-white)' }}>
                <td
                  className="px-3 py-2 font-medium align-top whitespace-nowrap"
                  style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))', color: 'var(--color-gold-dark, var(--color-gold))', width: '1%' }}
                >
                  {row.label}
                </td>
                <td
                  className="px-3 py-2"
                  style={{ borderTop: '1px solid var(--color-ink-10, rgba(11,15,25,0.1))', color: 'var(--color-ink)' }}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnotes?.length > 0 && (
        <ul className="mt-3 space-y-1">
          {footnotes.map((note) => (
            <li key={note} className="text-micro" style={{ color: 'var(--color-ink-40)' }}>
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}