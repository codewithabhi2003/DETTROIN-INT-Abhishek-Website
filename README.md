# DETTROIN-INT-Abhishek-Website

> Vasant Valley School — Modern Website Redesign  
> Dettroin Full Stack Developer Internship Program · Round 1 Assignment

---

## Candidate Details

| Field | Details |
|---|---|
| **Full Name** | Abhishek Vishwakarma |
| **Email** | abhishekvishwakarma1149@gmail.com |
| **GitHub Username** | [codewithabhi2003](https://github.com/codewithabhi2003) |
| **LinkedIn** | [abhishek-vishwakarma-47a43828b](https://linkedin.com/in/abhishek-vishwakarma-47a43828b) |
| **Portfolio** | [portfolio-tau-lilac-98.vercel.app](https://portfolio-tau-lilac-98.vercel.app) |
| **Selected Website** | [vasantvalley.org](https://www.vasantvalley.org/) |
| **Live Demo** | https://dettroin-int-abhishek-website-xi.vercel.app/ |

---

## Tech Stack

- **React.js** (v18) — component architecture, hooks, Context API
- **Vite** — build tool & dev server
- **JavaScript (ES6+)** — modern syntax throughout
- **CSS3** — custom properties (design tokens), responsive layout, CSS Grid
- **React Router v6** — SPA routing
- **Lucide React** — icon system
- **GitHub Actions** — CI/CD pipeline
- **Vercel** — deployment

---

## Project Structure

```
src/
├── assets/              # Images, logos, icons
├── components/
│   ├── cards/           # Reusable card components
│   ├── common/          # Shared UI (BrandIcons etc.)
│   ├── forms/           # Modal forms
│   ├── layout/          # Navbar, Footer, MobileNavOverlay
│   ├── navigation/      # Login accordion, role nav
│   └── tables/          # Fee structure table
├── constants/           # Design tokens, contact info, image placeholders
├── context/             # Auth, Chatbot, Nav contexts
├── hooks/               # Custom React hooks
├── layouts/             # PageLayout wrapper
├── pages/
│   ├── Home/            # Hero, AboutPreview, Announcements, News, Instagram
│   ├── About/           # Founders, leadership, alumni, staff
│   ├── Academics/       # Learning experience, programmes, curriculum
│   ├── Admissions/      # Pre-school, Class I–VII, Class XI, fee structure
│   ├── Campus/          # A day in school, infrastructure, SEN
│   ├── News/            # Announcements, news & events
│   ├── Alumni/          # Alumni connect
│   ├── CEE/             # Centre for Educational Excellence
│   ├── GurgaonCampus/   # Gurgaon campus page
│   ├── Careers/         # Careers page
│   ├── Contact/         # Contact page
│   ├── FAQs/            # FAQs page
│   └── Auth/            # Login
├── providers/           # AppProviders wrapper
├── routes/              # AppRouter, route config
└── services/            # API service layer
```

---

## Key Improvements Made

### UI / UX
- **Complete visual overhaul** — replaced the existing light, traditional school aesthetic with a dark, developer-grade design system inspired by Linear, Vercel, and GitHub
- **Consistent design token system** — all colours, spacing, and typography driven by CSS custom properties — no hardcoded values
- **Information hierarchy** — section labels written as code comments (`// latest_activity`), metric labels in `snake_case`, tag badges with monospace font — creates a clear visual language

### Design System
- **Dark palette** — near-black canvas `#08080D` with indigo accent `#6366F1` replacing generic maroon/gold
- **Typography** — `Inter` for UI copy + `JetBrains Mono` for labels, metadata, and tags
- **Card components** — modelled on GitHub repo cards with hover border lift, tag badges, and language rows
- **Terminal feed** — announcements rendered as a `.log` terminal window with macOS traffic-light dots and a live clock

### Components & Interactions
- **Hero** — full-viewport dark hero with SVG grid overlay, radial glow, auto-advancing slides, vertical pill indicators, and a metrics strip
- **Program cards** — grid of repo-style cards with icon, tag badge, description, and language dot row
- **News timeline** — horizontal scroll with snap, per-event image placeholders, and tag-coloured date indicators
- **Instagram section** — dark grid with caption overlay on hover, live status strip
- **Announcements** — card grid + terminal log panel with live timestamp

### Responsiveness
- Mobile-first layout — breakpoints at 640px and 1024px
- `clamp()` for fluid padding and font sizes
- `repeat(auto-fit, minmax(...))` grid for all card sections
- Horizontal scroll with `scroll-snap` on the news timeline for touch devices

### Performance
- Code-split per route via React lazy + Suspense
- No external CSS frameworks — pure CSS custom properties, zero dead weight
- All images use numbered placeholder system ready for `src` replacement

### Accessibility
- `aria-label` on all image placeholders and interactive elements
- `aria-current` on hero slide indicators
- Keyboard focus ring: `outline: 2px solid var(--accent)`
- `prefers-reduced-motion` respected (no bounce/spring animations)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

Deployed on **Vercel** — push to `main` branch triggers automatic deployment via GitHub Actions CI/CD pipeline (`.github/workflows/ci.yml`).

---

## License

This project is submitted as part of the Dettroin Internship Round 1 Assignment.  
Original school content belongs to Vasant Valley School, New Delhi.