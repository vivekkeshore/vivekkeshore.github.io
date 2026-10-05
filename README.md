# vivekkeshore.github.io

Personal portfolio of Vivek Keshore, built with [Astro](https://astro.build) and deployed to
https://vivekkeshore.github.io/ by GitHub Actions.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

Requires Node 22.12 or newer.

## Editing content

All content - projects, experience, skills, stats and links - lives in `src/data/site.ts`.

- **Add a project:** drop a screenshot in `src/assets/portfolio/`, import it at the top of `site.ts`, and add an
  entry to `projects`. `featured: true` puts it in the stacking "Selected work" cards; otherwise it goes in the
  "More work" grid (`wide: true` spans two columns).
- **Add a role:** add an entry to `experience` (newest first).

## Structure

```
src/
  data/site.ts        content
  layouts/            page shell: head, ambient background, nav, menu
  components/         one component per section, plus Drawer/ProjectDrawer
  styles/global.css   design system and all styles
  scripts/site.js     interactions: reveals, stacking cards, typewriter, drawers
  assets/             images, optimised at build time
public/               files served as-is (favicon, social preview)
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repository's **Settings → Pages**, set
**Source** to **GitHub Actions** (one-time).
