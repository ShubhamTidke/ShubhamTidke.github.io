import { useRef } from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { education } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './SectionHeading'
import { TechPill } from './TechPill'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="education" ref={ref} className="py-20 px-4 bg-chrome-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic background" inView={inView} />

        <div
          className={`mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {education.map((edu) => (
            <EducationCard key={edu.school} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ edu }) {
  return (
    <div className="bg-white border border-chrome-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
        <FaGraduationCap size={18} className="text-blue-500" />
      </div>

      <h3 className="text-ink-900 font-semibold text-base leading-snug mb-1">{edu.degree}</h3>
      <p className="text-blue-500 font-medium text-sm mb-3">{edu.school}</p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-400 mb-4">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt size={10} />
          <span>{edu.location}</span>
        </div>
        <span>{edu.period}</span>
        <div className="flex items-center gap-1 text-amber-500 font-semibold">
          <FaStar size={10} />
          <span>GPA {edu.gpa}</span>
        </div>
      </div>

      <p className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-2">Coursework</p>
      <div className="flex flex-wrap gap-1.5">
        {edu.coursework.map((course) => (
          <TechPill key={course} label={course} />
        ))}
      </div>
    </div>
  )
}
