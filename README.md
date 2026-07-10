# Shree Balaji Consultancy Website

Bold and modern SEO-focused education consultancy website built with Next.js.

## Stack

- Next.js 16 (App Router)
- TypeScript
- ESLint

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

The app uses `output: "standalone"` in `next.config.ts` for easier deployment.

## Deploy (Recommended: Vercel)

1. Push this repository to GitHub.
2. Import it on Vercel.
3. Framework preset: `Next.js`.
4. Build command: `npm run build`.
5. Output setting: automatic (Next.js).
6. Deploy.

## Deploy on VPS (Node)

```bash
npm ci
npm run build
npm run start
```

Run behind Nginx/Caddy and point your domain DNS to the server.

## SEO and Compliance Notes

- Uses metadata and FAQ schema on the homepage.
- Includes crawl assets: `robots.txt` and `sitemap.xml`.
- Uses compliance-safe copy (no unverified guaranteed admission claims).
