# Samuel Baer Portfolio

A responsive portfolio built with React and Vite. Content follows Samuel's October 2026 resume, with experience in business intelligence, financial analysis, and application development.

## Development

```sh
npm ci
npm run dev
```

Production checks:

```sh
npm run lint
npm run build
```

## Updating content

- Resume, contact links, experience, projects, and skills: `src/data/profile.js`
- Downloadable resume: `public/resume.pdf`
- Typography, colors, and responsive layout: `src/index.css`
- Design decisions: `.21st/DESIGN.md`

IBM Plex Sans and IBM Plex Mono are bundled locally. The desktop layout uses a sticky profile column and compact work entries, drawing on the content hierarchy of [Brittany Chiang's portfolio](https://britchiang.com/) with an original light theme and implementation.

## Deployment

The Vite base path is `/Portfolio/`. GitHub Actions builds changes pushed to `main` and publishes the output to `gh-pages`.

Live site: https://sampbaer-creator.github.io/Portfolio/
