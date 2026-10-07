# Samuel Baer portfolio

React + Vite professional portfolio, grounded in the resume supplied in October 2026.

Neutral white background, charcoal text, and restrained blue links. IBM Plex Sans for headings and body, IBM Plex Mono for metadata; fonts are bundled locally. Color tokens live in `src/index.css`.

Desktop uses a sticky identity column and a scrolling work column, drawing on the content hierarchy of Brittany Chiang's portfolio (https://britchiang.com/) with original implementation. Mobile uses one column. Keep the flow simple: profile, about and education, experience, projects, skills, contact. Use divided rows, clear section names, factual copy, readable spacing, and minimal motion. Reuse the existing section components.

All resume content and contact URLs live in `src/data/profile.js`. Resume downloads must respect Vite's deployment base. Avoid invented project links or claims.

Provide mobile navigation, visible keyboard focus, a skip link, semantic headings, and reduced-motion support.
