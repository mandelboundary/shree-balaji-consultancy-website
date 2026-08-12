# Shree Balaji Consultancy Website

A responsive education consultancy website for admissions, study-abroad planning, scholarships, university discovery, and career counselling.

## Highlights

- Multi-page Next.js App Router website
- Responsive maroon-and-cream visual system
- Interactive Study Abroad destination experience
- Detailed Career Counselling journey
- Full-screen About Us video story
- Admissions pages generated from shared program data
- University filtering and guidance
- Metadata, Open Graph, sitemap, robots, and FAQ structured data
- Static export configuration for deployment

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules and global CSS
- ESLint

## Main Routes

```text
/
/about-us
/admissions
/admissions/[program]
/study-abroad
/universities
/scholarships
/career-counselling
/blog
/contact
```

## Project Structure

```text
src/app/                App Router pages and global styles
src/lib/site-data.ts    Shared services, programs, FAQs, and contact data
public/                 Campus images, flags, and social preview image
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The production build is exported to `dist/`.

## Content Notes

Before production launch, verify phone numbers, addresses, university relationships, fees, admission dates, and accreditation claims with the consultancy.
