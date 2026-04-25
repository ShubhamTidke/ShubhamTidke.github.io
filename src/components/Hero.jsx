import { FaArrowDown, FaEnvelope } from 'react-icons/fa'
import { personal } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'Software Engineer',
  'Backend Engineer',
  'Distributed Systems Engineer',
  'ML / AI Engineer',
  'Researcher',
]

export default function Hero() {
  const displayed = useTypewriter(ROLES)

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-14 bg-chrome-50"
    >
      <div className="mb-8 inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-500 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        {personal.location} · Open to opportunities
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-ink-900 mb-4 leading-tight tracking-tight">
        Hi, I&apos;m <span className="text-blue-500">Shubham</span>
      </h1>

      <div className="h-10 mb-6 flex items-center justify-center">
        <p className="text-xl sm:text-2xl text-ink-500 font-mono">
          {displayed}
          <span className="inline-block w-0.5 h-5 bg-blue-500 ml-0.5 animate-pulse align-middle" />
        </p>
      </div>

      <p className="max-w-xl text-ink-500 text-base sm:text-lg leading-relaxed mb-10">
        {personal.tagline}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <button
          onClick={() => scrollTo('#projects')}
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-7 py-2.5 rounded-md transition-colors shadow-sm text-sm"
        >
          See My Work
        </button>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 border border-chrome-300 hover:border-blue-300 hover:bg-blue-50 text-ink-700 hover:text-blue-500 font-medium px-7 py-2.5 rounded-md transition-colors text-sm"
        >
          <FaEnvelope size={13} />
          Get In Touch
        </a>
      </div>

      <button
        onClick={() => scrollTo('#experience')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-chrome-400 hover:text-blue-400 transition-colors animate-bounce hidden sm:block"
        aria-label="Scroll down"
      >
        <FaArrowDown size={18} />
      </button>
    </section>
  )
}
