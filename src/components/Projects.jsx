import { useRef } from 'react'
import { FaExternalLinkAlt, FaTrophy } from 'react-icons/fa'
import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './SectionHeading'
import { TechPill } from './TechPill'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-chrome-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Things I've built" inView={inView} />

        <div
          className={`mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const isHackathon = Boolean(project.hackathon)
  const borderClass = isHackathon
    ? 'border-amber-200 hover:border-amber-300'
    : 'border-chrome-200 hover:border-blue-200'

  return (
    <div
      className={`flex flex-col bg-white border rounded-xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${borderClass}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {isHackathon && <HackathonBadge hackathon={project.hackathon} />}

      <div className="mb-1.5">
        <h3 className="text-ink-900 font-semibold text-base leading-snug">{project.title}</h3>
        <p className="text-blue-500 text-sm font-medium mt-0.5">{project.subtitle}</p>
      </div>

      <p className="text-ink-500 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <TechPill key={tech} label={tech} />
        ))}
      </div>

      {project.link && <DemoLink href={project.link} />}
    </div>
  )
}

function HackathonBadge({ hackathon }) {
  return (
    <div className="flex items-center gap-1.5 mb-3">
      <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
        <FaTrophy size={10} />
        {hackathon.label} · {hackathon.award}
      </span>
    </div>
  )
}

function DemoLink({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-auto inline-flex items-center justify-center gap-2 w-full border border-amber-300 hover:bg-amber-50 text-amber-700 hover:text-amber-800 text-sm font-semibold py-2 rounded-lg transition-colors"
    >
      <FaExternalLinkAlt size={12} />
      View Demo
    </a>
  )
}
