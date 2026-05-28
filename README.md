# Samuel Baer Portfolio

A responsive React portfolio for Samuel Baer, built with Vite and Tailwind CSS. The site is styled as an autumn story journey with a cinematic forest opening, chapter-based sections, project cards, resume details, and contact links.

## Highlights

- Autumn forest hero with warm high-fantasy inspired styling
- "View My Work" portal transition that zooms into the hero image before moving to projects
- Chapter-style flow for About, Skills, Projects, Resume, and Contact
- Responsive navigation for desktop and mobile
- Project showcase with live and GitHub links
- Resume section with PDF download
- GitHub Pages compatible base path through Vite

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Icons

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
public/
  autumn-forest-hero.png
  resume.pdf
  Sam_Profile.PNG
  Weather.webp
  R_photo.webp
```

## Customization

- Hero content and portal transition: `src/components/Hero.jsx`
- Global styling, animations, and story sections: `src/index.css`
- Theme colors: `tailwind.config.js`
- Projects: `src/components/Projects.jsx`
- Resume content and PDF link: `src/components/Resume.jsx`
- Contact and social links: `src/components/Contact.jsx` and `src/components/Header.jsx`

## Deployment

The Vite config uses:

```js
base: '/Portfolio/'
```

This supports deployment to GitHub Pages at:

```text
https://sampbaer-creator.github.io/Portfolio/
```

Deploy with:

```bash
npm run build
npm run deploy
```
