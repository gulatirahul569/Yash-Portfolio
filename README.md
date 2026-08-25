# Yash Sharma — Corporate Legal Portfolio

A premium, single-page portfolio built for a corporate legal professional — presenting corporate legal experience, litigation exposure, expertise areas, and education in a clean, law-firm-inspired design with a navy, ivory, and gold palette.

**Live site:** [yash-portfolio-seven-topaz.vercel.app](https://yash-portfolio-seven-topaz.vercel.app)

## Overview

This project turns a resume into a structured, scroll-driven portfolio site rather than a static document. It's built to feel credible and restrained — appropriate for corporate legal teams, law firms, and professional networks — while still being visually distinctive with subtle scroll-reveal animations, hover interactions, and a scales-of-justice motif running through the design.

## Features

- **Hero section** with a professional summary, resume download, and quick navigation into the experience section
- **Corporate experience** section detailing legal work at Adidas India (trademark research, Companies Act compliance, FCGPR/FIRC review, internal legal drafting)
- **Litigation & courtroom exposure timeline** covering High Court and District Court work
- **Areas of expertise** grid — corporate law, legal drafting, regulatory compliance, IP, litigation, and legal research
- **Education** section with degree details and academic scores
- **Professional strengths** grid
- **Achievements** section
- **Contact section** with email, phone, and LinkedIn
- Scroll-triggered fade/reveal animations throughout, built with `IntersectionObserver` — no animation library required
- Sticky navbar with a scroll-progress indicator, shrink-on-scroll effect, and animated underlines
- Fully responsive, mobile-first layout with an animated mobile menu
- Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
.
├── app/
│   ├── layout.js        # Root layout, fonts, metadata
│   ├── page.js           # Homepage — all sections
│   └── globals.css       # Design tokens, animations, utilities
├── components/
│   ├── Navbar.jsx         # Sticky nav with scroll progress
│   ├── SectionHeading.jsx # Reusable numbered section headings
│   └── ExpertiseCard.jsx  # Cards used in the expertise grid
├── public/                # Static assets (portrait, resume PDF, etc.)
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm (or your preferred package manager)

### Installation

```bash
git clone https://github.com/gulatirahul569/Yash-Portfolio.git
cd Yash-Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

## Customization

1. **Portrait** — replace the placeholder image referenced in `app/page.js` (`/YS-portrait2.jpeg`) with a professional headshot in `public/`.
2. **Resume** — add the actual resume PDF as `public/yash-sharma-resume.pdf` so the "Download CV" links work.
3. **Content** — update the `expertise`, `strengths`, and `timeline` arrays and section text in `app/page.js` to reflect current experience.
4. **Metadata** — update the site title/description in `app/layout.js`.
5. **Contact details** — update the email, phone, and LinkedIn links in the contact section of `app/page.js`.
6. **Theme** — colors, spacing, and animation utilities are defined as CSS variables and utility classes in `app/globals.css`.

## Deployment

This project is set up to deploy directly to [Vercel](https://vercel.com/):

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects the Next.js project and deploys — no additional configuration required.

## License

This project is a personal portfolio. Feel free to fork it as a starting point for your own portfolio, but please swap out the personal content (name, resume, contact details, photos) before publishing your own version.