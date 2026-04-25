import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personal } from '../data/portfolio'

const iconLinks = [
  { icon: FaGithub, href: personal.github, label: 'GitHub', external: true },
  { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn', external: true },
  { icon: FaEnvelope, href: `mailto:${personal.email}`, label: 'Email', external: false },
]

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-chrome-50 border-t border-chrome-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-4">
          {iconLinks.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-chrome-300 text-ink-400 hover:text-blue-500 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-500 border border-blue-300 hover:bg-blue-500 hover:text-white px-5 py-1.5 rounded-full transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
