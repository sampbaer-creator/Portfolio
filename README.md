# Samuel Baer Portfolio

A responsive React portfolio for Samuel Baer, built with Vite and Tailwind CSS. The site is styled as a bright green-and-gold professional story experience with staged panels, cinematic movement, project cards, resume details, and contact links.

## Highlights

- Bright green-and-gold visual theme inspired by classic golf course polish
- One-screen staged layout inspired by product-story pages, with each section presented as a viewport panel
- Resume page content synced with the current PDF resume
- Site-wide forest portal transition for smooth movement between panels
- Animated loading screen with progress counter and rotating build words
- Floating active-state navigation with wheel, touch, keyboard, and button panel navigation
- Chapter-style flow for About, Skills, Projects, Resume, and Contact
- Bento-style project grid, journal notes, visual explorations, and progress stats
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
    Journal.jsx
    Explorations.jsx
    Stats.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
    LoadingScreen.jsx
  App.jsx
  main.jsx
  index.css
public/
  amen-corner-hero.png
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
