import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

const iconLinks = [
  { icon: FaGithub, href: personal.github, label: 'GitHub', external: true },
  { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn', external: true },
  { icon: FaEnvelope, href: `mailto:${personal.email}`, label: 'Email', external: false },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-chrome-50 transition-shadow duration-200 ${scrolled ? 'shadow-sm border-b border-chrome-200' : 'border-b border-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-ink-900 font-semibold text-base tracking-tight hover:text-blue-500 transition-colors"
        >
          Shubham Vijay Tidke
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-ink-500 hover:text-blue-500 hover:bg-blue-50 text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop: icon links + Resume button */}
        <div className="hidden md:flex items-center gap-2">
          {iconLinks.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="text-ink-400 hover:text-blue-500 hover:bg-blue-50 transition-colors p-2 rounded-md"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-sm font-semibold text-blue-500 border border-blue-300 hover:bg-blue-500 hover:text-white px-4 py-1.5 rounded-md transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink-500 hover:text-blue-500 hover:bg-blue-50 transition-colors p-2 rounded-md"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-chrome-50 border-t border-chrome-200 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-ink-700 hover:text-blue-500 hover:bg-blue-50 text-sm font-medium px-3 py-2 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 mt-1 border-t border-chrome-200">
            {iconLinks.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="text-ink-400 hover:text-blue-500 transition-colors p-1.5"
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="ml-auto text-sm font-semibold text-blue-500 border border-blue-300 hover:bg-blue-500 hover:text-white px-4 py-1.5 rounded-md transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
