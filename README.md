# Shree Balaji Consultancy Website

A production-minded, SEO-focused website for Shree Balaji Consultancy, an education consultancy helping students and parents with admissions, study abroad planning, scholarships, and career counselling.

This is not a generic landing page. The project is built as a structured multi-page web presence for a real consultancy workflow: explain services clearly, rank for high-intent education searches, capture inquiries, and prepare the site for a future Salesforce Agentforce assistant.

## Recruiter Summary

This project demonstrates the ability to build a business-facing web product that combines frontend engineering, product thinking, SEO strategy, content architecture, and CRM/automation planning.

Key signals:

- Built with Next.js 16 App Router, React 19, and TypeScript.
- Uses a reusable content model so services, countries, FAQs, phone numbers, footer links, and admission programs can be updated from shared data.
- Includes multiple SEO-targeted routes instead of a single static homepage.
- Uses compliance-aware admissions copy that avoids guaranteed-admission claims or implied university affiliation.
- Includes sitemap, robots, metadata, FAQ schema, and scalable blog/topic structure.
- Prepared for a Salesforce Agentforce assistant that can qualify leads and reduce repetitive counselling calls.

## What I Built

- Homepage for Shree Balaji Consultancy with services, trust signals, counselling types, study abroad highlights, FAQs, and contact actions.
- About Us page with a video hero to make the consultancy feel more credible and human.
- Admissions hub with reusable program cards for Direct Admission, Engineering, MBA, Medical, Nursing, Pharmacy, and Law.
- Dynamic admission detail pages generated from shared program data.
- Study Abroad page with large country flag cards for USA, UK, Canada, Australia, and Germany.
- Universities page with a filter-style admission guidance experience and hover-focused university cards.
- Scholarship, Career Counselling, Blog, and Contact pages to support the full student journey.
- Shared header, footer, brand styling, contact details, and reusable site data.

## Why The Product Matters

Education consultancy websites usually lose leads because students ask the same questions repeatedly: eligibility, fees, country choice, scholarship options, visa support, callbacks, and document requirements.

This website is designed to answer common questions upfront, guide visitors into the right section, and create clear inquiry paths. The next step is connecting the Balaji Agent so routine questions can be answered instantly while serious leads are passed to the counselling team.

## Technical Highlights

- **Framework:** Next.js 16 using the App Router.
- **Language:** TypeScript for safer route and content handling.
- **UI:** Responsive custom CSS with a consistent maroon/cardinal brand system.
- **Content Model:** Centralized data in `src/lib/site-data.ts` for phone numbers, services, countries, FAQs, blog topics, and admission programs.
- **Dynamic Routing:** Program-specific admission pages are generated from shared data through `/admissions/[program]`.
- **SEO Infrastructure:** Metadata, `sitemap.ts`, `robots.ts`, and FAQ JSON-LD on the homepage.
- **Static Assets:** Local logo, campus image, and About Us video stored in `public/`.

## SEO And Digital Marketing Direction

The site is structured around high-intent search behavior, not vague branding copy. Pages are mapped to the kinds of searches students and parents actually make:

- Direct admission guidance
- Engineering admissions
- MBA admissions
- Medical admissions
- Nursing admissions
- Study abroad consultancy
- Study in Canada, UK, USA, Australia, and Germany
- Scholarship and education loan guidance
- Career counselling
- Local consultancy searches in Jamshedpur and nearby regions

The blog route is intentionally kept as a topic hub for future SEO articles. It should be implemented as website content, not as a Notion-backed blog, so the site keeps ownership of crawlable pages, metadata, internal links, and structured content.

## Salesforce Agentforce Plan

The Balaji Agent has not been embedded in the website yet. The intended integration is:

1. Add a floating website chat entry point using Salesforce Embedded Messaging or the approved Salesforce web embed.
2. Pass page context into the agent, such as `study-abroad`, `admissions`, `universities`, or `scholarships`.
3. Let the agent answer common questions, collect student details, and identify the user's intent.
4. Create or update Salesforce leads with fields such as name, phone number, course interest, country preference, budget, qualification level, and callback request.
5. Route qualified leads to the counselling team instead of making staff manually handle every first-touch question.

Expected time savings:

- Reduces repeated phone calls for basic questions.
- Collects lead details before a counsellor speaks to the student.
- Helps students outside office hours.
- Gives the sales team cleaner context before callback.
- Turns website traffic into structured CRM data instead of scattered messages.

The detailed pitch/design document is available at:

```text
docs/balaji-agent-website-seo-marketing-design-doc.md
```

## Project Structure

```text
src/app/
  layout.tsx              Shared shell, navigation, footer, metadata
  globals.css             Site-wide styling and responsive UI rules
  page.tsx                Homepage
  about-us/page.tsx       About page with video hero
  admissions/page.tsx     Admissions overview
  admissions/[program]/   Dynamic program-specific pages
  study-abroad/page.tsx   Country-focused study abroad page
  universities/page.tsx   University guidance and hover cards
  scholarships/page.tsx   Scholarship guidance
  career-counselling/     Career counselling page
  blog/page.tsx           SEO topic hub
  contact/page.tsx        Contact and location page
  sitemap.ts              Crawlable sitemap
  robots.ts               Robots configuration

src/lib/site-data.ts      Shared business, service, FAQ, country, and program data
public/                   Logo, images, and local video assets
docs/                     Balaji Agent and marketing design documentation
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- ESLint
- CSS Modules/global CSS through the App Router structure
- Salesforce Agentforce planned for lead qualification and website chat

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If port `3000` is already in use, Next.js may run on another local port such as `3001`.

## Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs lint checks.

## Compliance Notes

- The website presents Shree Balaji Consultancy as an admissions guidance and counselling service.
- Copy avoids promising guaranteed admission.
- University relationships should only be published when authorized.
- Final phone numbers, addresses, partner institutions, and official claims should be verified before production launch.

## Related Repositories

- Website: [mandelboundary/shree-balaji-consultancy-website](https://github.com/mandelboundary/shree-balaji-consultancy-website)
- Agentforce project: [mandelboundary/shree-balaji-agentforce](https://github.com/mandelboundary/shree-balaji-agentforce)

## Recruiter Takeaway

This project shows how I approach a real business website: clarify the customer journey, structure content for SEO, build reusable frontend systems, keep claims compliant, and plan CRM automation so the website can become a lead-generation engine instead of a static brochure.
