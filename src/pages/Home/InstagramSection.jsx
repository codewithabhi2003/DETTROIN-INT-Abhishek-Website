import { InstagramIcon } from '@/components/common/BrandIcons'
import { PLACEHOLDER_PATTERN } from '@/constants/imagePlaceholder'

// TODO: swap divs for the real LightWidget/Instagram embed (components/gallery/InstagramEmbed.jsx)
const posts = [
  'Global Universities, Endless Possibilities',
  'Synapse — 23rd & 24th July 2026',
  'Finding \u2018We\u2019 in the world of \u2018Me\u2019',
  'Bronze at the Under-17 Delhi State Basketball Championship',
]

export default function InstagramSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container text-center">
        <h2 className="heading-1">Follow Us on Instagram</h2>
        <span className="gold-rule mx-auto" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {posts.map((caption) => (
            <a
              key={caption}
              href="https://instagram.com/vasantvalleyschool"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-(--radius-img) overflow-hidden block"
              style={PLACEHOLDER_PATTERN}
            >
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(0deg, rgba(11,15,25,0.75), transparent 60%)' }}
              >
                <span className="text-small text-left" style={{ color: 'var(--color-white)' }}>
                  {caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://instagram.com/vasantvalleyschool"
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-10"
        >
          <InstagramIcon size={16} /> @vasantvalleyschool
        </a>
      </div>
    </section>
  )
}