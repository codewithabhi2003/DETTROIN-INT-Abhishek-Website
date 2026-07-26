import { InstagramIcon } from '@/components/common/BrandIcons'

const posts = [
  {
    caption: 'Global Universities, Endless Possibilities',
    image:
      'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    caption: 'Synapse — 23rd & 24th July 2026',
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    caption: 'Finding "We" in the world of "Me"',
    image:
      'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    caption: 'Bronze at the Under-17 Delhi State Basketball Championship',
    image:
      'https://images.pexels.com/photos/6203525/pexels-photo-6203525.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function InstagramSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-gold-light)' }}>
      <div className="section-container text-center">
        <h2 className="heading-1">Follow Us on Instagram</h2>
        <span className="gold-rule mx-auto" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {posts.map((post) => (
            <a
              key={post.caption}
              href="https://instagram.com/vasantvalleyschool"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-(--radius-img) overflow-hidden block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Hover overlay with caption */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(0deg, rgba(11,15,25,0.75), transparent 60%)' }}
              >
                <span className="text-small text-left" style={{ color: 'var(--color-white)' }}>
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://instagram.com/vasantvalleyschool"
          target="_blank"
          rel="noreferrer"
          className="btn-primary mt-10 inline-flex items-center gap-2"
        >
          <InstagramIcon size={16} /> @vasantvalleyschool
        </a>
      </div>
    </section>
  )
}