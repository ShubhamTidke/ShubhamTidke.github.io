import { useRef } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { experience } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './SectionHeading'
import { TechPill } from './TechPill'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-chrome-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="Where I've worked" inView={inView} />

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-chrome-300" />
          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <TimelineItem key={job.company + job.period} job={job} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ job, index, inView }) {
  return (
    <div
      className={`relative pl-12 sm:pl-14 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="absolute left-[13px] sm:left-[17px] top-2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm ring-2 ring-blue-100" />

      <div className="bg-white border border-chrome-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
        <JobHeader job={job} />
        <BulletList bullets={job.bullets} />
        <TechStack stack={job.stack} />
      </div>
    </div>
  )
}

function JobHeader({ job }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
      <div>
        <h3 className="text-ink-900 font-semibold text-base leading-snug">{job.role}</h3>
        <p className="text-blue-500 font-medium text-sm mt-0.5">{job.company}</p>
        <div className="flex items-center gap-1 mt-1 text-ink-400 text-xs">
          <FaMapMarkerAlt size={10} />
          <span>{job.location}</span>
        </div>
      </div>
      <span className="flex-shrink-0 text-xs font-medium text-ink-500 bg-chrome-100 border border-chrome-200 px-3 py-1 rounded-full">
        {job.period}
      </span>
    </div>
  )
}

function BulletList({ bullets }) {
  return (
    <ul className="space-y-2 mb-4">
      {bullets.map((bullet, bulletIdx) => (
        <li key={bulletIdx} className="flex gap-2.5 text-sm text-ink-700 leading-relaxed">
          <span className="text-blue-400 mt-1.5 flex-shrink-0 text-xs">●</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

function TechStack({ stack }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <TechPill key={tech} label={tech} />
      ))}
    </div>
  )
}
