# Adaa Consulting Website

A modern, bilingual (English/Arabic) website for Adaa Consulting built with Next.js 14 and Decap CMS.

## Features

- **Next.js 14 with App Router** - Modern React framework with server components
- **Bilingual Support** - Full English and Arabic translations with RTL support
- **Decap CMS** - Content management system for blog, publications, team, projects, and jobs
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **7 Main Pages**:
  - Home
  - About Us
  - What We Do (Services)
  - Our Work (Projects)
  - Knowledge (Publications & Blog)
  - Contact
  - Work With Us (Careers)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

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

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── work/
│   │   ├── knowledge/
│   │   ├── contact/
│   │   ├── careers/
│   │   ├── layout.js
│   │   └── page.js
│   ├── globals.css
│   └── layout.js
├── components/
│   ├── layout/            # Navigation, Footer
│   ├── ui/                # LanguageSwitcher, etc.
│   └── shared/            # Logo components
├── messages/              # i18n translations
│   ├── en.json
│   └── ar.json
├── public/
│   ├── admin/             # Decap CMS admin panel
│   │   ├── config.yml
│   │   └── index.html
│   └── content/           # CMS-managed content
│       ├── blog/
│       ├── publications/
│       ├── team/
│       ├── projects/
│       └── jobs/
└── middleware.js          # i18n routing middleware
```

## CMS Access

Access the CMS admin panel at `/admin` to manage:
- Blog posts
- Publications (PDFs, reports)
- Team members
- Projects portfolio
- Job openings

## Supported Languages

- English (en) - `/en/*`
- Arabic (ar) - `/ar/*`

The language switcher allows users to toggle between languages while maintaining their current page context.

## Build & Deploy

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization
- **Decap CMS** - Headless CMS
- **Lucide React** - Icon library

## Development

- The website is fully responsive and works on all device sizes
- RTL (Right-to-Left) support is automatically applied for Arabic
- All content can be managed through the CMS without code changes
- Contact form submissions are handled client-side (integrate with email service as needed)

## License

© 2026 Adaa Consulting. All rights reserved.
