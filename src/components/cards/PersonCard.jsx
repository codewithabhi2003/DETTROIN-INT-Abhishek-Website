import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

const SIZES = { sm: 96, md: 132, lg: 176 }

export default function PersonCard({ name, role, imageAlt, size = 'md' }) {
  const dimension = SIZES[size] ?? SIZES.md

  return (
    <div className="text-center">
      <div
        className="mx-auto rounded-full overflow-hidden"
        style={{ width: dimension, height: dimension, ...PLACEHOLDER_PATTERN }}
        role="img"
        aria-label={imageAlt || `Photo of ${name}`}
      />
      <p className="body font-semibold mt-4" style={{ color: 'var(--color-ink)' }}>
        {name}
      </p>
      {role && (
        <p className="text-small mt-1" style={{ color: 'var(--color-ink-40)' }}>
          {role}
        </p>
      )}
    </div>
  )
}