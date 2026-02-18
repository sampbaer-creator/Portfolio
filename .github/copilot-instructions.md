## Samuel's Portfolio - Project Setup Instructions

This is a React + Vite portfolio website built for internship job applications.

### Installation

1. Install dependencies:
```bash
npm.cmd install
```

### Development

To start the development server:
```bash
npm run dev
```

The site will automatically open at `http://localhost:5173`

### Build

To build for production:
```bash
npm run build
```

### Project Structure

- `src/components/` - React components (Header, Hero, About, Skills, Projects, Resume, Contact, Footer)
- `src/App.jsx` - Main application component
- `index.html` - Entry HTML file
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite configuration

### Customization

Update the following with your information:

1. **Header.jsx** - Update LinkedIn and GitHub links
2. **Hero.jsx** - Change the introduction text and button actions
3. **About.jsx** - Add your photo, bio, location, and email
4. **Skills.jsx** - Update with your actual skills
5. **Projects.jsx** - Replace with your actual projects (images, descriptions, links)
6. **Resume.jsx** - Update with your education, experience, and certifications
7. **Contact.jsx** - Update contact information and connect form to EmailJS or Formspree
8. `index.html` - Update the title and description

### Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Icons
