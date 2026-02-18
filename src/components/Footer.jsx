export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-slate-700 py-8">
      <div className="container text-center text-slate-400 text-sm">
        <p>© {currentYear} Samuel. All rights reserved.</p>
        <p className="mt-2">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  )
}
