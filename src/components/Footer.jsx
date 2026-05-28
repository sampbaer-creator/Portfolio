export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-accent/20 py-8">
      <div className="container text-center text-parchment/55 text-sm">
        <p>&copy; {currentYear} Samuel. All rights reserved.</p>
        <p className="mt-2">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  )
}
