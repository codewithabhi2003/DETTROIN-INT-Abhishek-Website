const sizeClasses = {
  sm: 'w-20 h-20 sm:w-24 sm:h-24',
  md: 'w-24 h-24 sm:w-32 sm:h-32',
  lg: 'w-32 h-32 sm:w-44 sm:h-44',
}

export default function PersonCard({ name, role, image, imageAlt, size = 'md' }) {
  const dimensionClass = image ? sizeClasses[size] ?? sizeClasses.md : ''

  return (
    <div className="text-center">
      {image && (
        <div className={`mx-auto rounded-full overflow-hidden ${dimensionClass}`}>
          <img
            src={image}
            alt={imageAlt || `Photo of ${name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
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