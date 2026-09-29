# Omnivoxio Marketing Website

Production-ready Next.js + TypeScript + Tailwind website for **Omnivoxio**.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Routes Included

- /
- /services
- /seo-growth
- /ai-websites
- /ai-voice-agents
- /ai-automation
- /custom-ai-agents
- /solutions
- /case-studies
- /about
- /contact
- /faq
- /privacy-policy
- /terms-of-service

## Contact Form Integration

The contact form posts to `POST /api/contact`.

Current behavior: integration-ready placeholder returning HTTP 501.

To enable production submissions:

1. Replace `src/app/api/contact/route.ts` with your provider integration (email/CRM/webhook).
2. Validate and sanitize request body server-side.
3. Add provider credentials in environment variables.
4. Return success/error JSON for frontend status handling.

## Editable Placeholders

Update these before launch:

- Contact email: `hello@omnivoxio.com` (`src/lib/site.ts`)
- WhatsApp and default message (`src/lib/site.ts`)
- Package pricing/placeholders (`src/app/seo-growth/page.tsx`)
- Booking flow URL (`src/lib/site.ts` -> `consultationUrl`)
- Domain metadata (`src/lib/metadata.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`)
- Social links/schema `sameAs` values (`src/app/layout.tsx`)
- Demo case studies with real approved case studies (`src/lib/site.ts`)

## Deployment

Deploy on any Next.js-compatible platform (e.g., Vercel, Netlify, custom Node host).

Recommended pre-deploy checks:

```bash
npm run lint
npm run build
```
