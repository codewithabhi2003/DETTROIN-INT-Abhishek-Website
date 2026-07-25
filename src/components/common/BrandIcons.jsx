// lucide-react removed brand/logo icons (Instagram, Facebook, Twitter, etc.)
// a while back — it only ships generic UI icons now. Keep social-brand
// glyphs here instead, styled to match lucide's stroke so they blend in
// wherever they're used (InstagramSection, and later SocialIconRow).

function IconBase({ size = 24, color = 'currentColor', strokeWidth = 2, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </IconBase>
  )
}

export function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.6l.4-4H13V7a1 1 0 0 1 1-1h2z" />
    </IconBase>
  )
}

export function YoutubeIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function LinkedinIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <line x1="7" y1="6.5" x2="7" y2="6.51" />
      <path d="M11 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="11" y1="10" x2="11" y2="17" />
    </IconBase>
  )
}

export function XIcon(props) {
  return (
    <IconBase {...props}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </IconBase>
  )
}
