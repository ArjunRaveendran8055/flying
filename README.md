# Flywings International Website

A modern, responsive website for Flywings International built with Next.js 16, Tailwind CSS, and GSAP animations.

## Features

- **Modern Design**: Inspired by Antigravity with clean, contemporary aesthetics
- **GSAP Animations**: Smooth scroll-triggered animations similar to GSAP's homepage
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: Reduced motion support and semantic HTML

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform) with ScrollTrigger
- **TypeScript**: For type safety
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
aviation/
├── app/                    # Next.js app router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── courses/            # Courses listing
│   ├── admission/          # Admission process
│   ├── placement/          # Placement information
│   ├── news/               # News articles
│   ├── gallery/            # Image gallery
│   ├── blog/               # Blog posts
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/          # Homepage sections
│   └── ui/                # Reusable UI components
├── lib/
│   ├── gsap.ts            # GSAP utilities and hooks
│   └── constants.ts       # Data constants
└── public/                # Static assets
```

## Key Sections

- **Hero**: Animated hero section with text reveal and parallax effects
- **About**: Why choose us section with feature cards
- **Courses**: Grid of on-campus and online courses
- **Testimonials**: Carousel of student testimonials
- **Campuses**: Information about both campuses
- **News**: Latest news and announcements
- **Contact**: Contact form and information

## Animation Features

- Scroll-triggered fade-in animations
- Staggered card animations
- Text reveal effects
- Parallax backgrounds
- Smooth hover transitions
- Reduced motion support for accessibility

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Animations

GSAP utilities are available in `lib/gsap.ts`. Use the `useGSAP` hook and animation presets for consistent animations.

## License

This project is proprietary and confidential.

# flying
