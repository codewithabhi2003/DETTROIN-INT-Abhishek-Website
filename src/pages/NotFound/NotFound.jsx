import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | Vasant Valley School</title>
      </Helmet>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="section-container max-w-lg mx-auto text-center">
          <p className="text-small font-semibold uppercase tracking-wide" style={{ color: 'var(--color-maroon)' }}>
            404
          </p>
          <h1 className="heading-1 mt-2">We couldn't find that page</h1>
          <span className="gold-rule mx-auto" />
          <p className="body mt-6">
            The page you're looking for may have moved or no longer exists.
            Head back to the homepage to keep exploring.
          </p>
          <a href="/" className="btn-primary mt-8">
            Back to homepage
          </a>
        </div>
      </section>
    </>
  )
}