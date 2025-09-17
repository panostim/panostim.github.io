# Intro

Personal CV site built with Next.js, Magic UI and the v0 UI generator.

## Live Site

Published through GitHub Pages at **https://panostim.github.io/**. Every push to the `main` branch triggers the `Deploy to GitHub Pages` GitHub Actions workflow, which exports the static site and updates the Pages environment automatically.

## Local Development

```bash
pnpm install
pnpm dev
```

The app runs at http://localhost:3000 while developing.

## Production Build

The workflow runs `npm run build`, which performs a static export (`next export`) into `out/`. You can replicate it locally with:

```bash
npm run build
```

Preview the exported output by serving the `out/` directory with any static file server (for example, `npx serve out`).

## Customisation

- Update copy and sections in `app/page.tsx` and the components under `components/`.
- Global styles live in `app/globals.css` and `styles/`.
- Deployment settings and runtime options are defined in `next.config.mjs` and `.github/workflows/deploy.yml`.
