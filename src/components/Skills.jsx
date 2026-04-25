import { useRef } from 'react'
import { skills } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './SectionHeading'
import { TechPill } from './TechPill'

const CATEGORY_CHIP_STYLES = {
  'Languages':              'bg-blue-50 text-blue-600 border-blue-100',
  'Web & Backend':          'bg-violet-50 text-violet-600 border-violet-100',
  'Data & Cloud':           'bg-emerald-50 text-emerald-700 border-emerald-100',
  'DevOps & Observability': 'bg-amber-50 text-amber-700 border-amber-100',
  'AI & ML':                'bg-rose-50 text-rose-600 border-rose-100',
}

const DEFAULT_CHIP_STYLE = 'bg-chrome-100 text-ink-600 border-chrome-200'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-chrome-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technologies I work with" inView={inView} />

        <div
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {skills.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ group }) {
  const chipStyle = CATEGORY_CHIP_STYLES[group.category] ?? DEFAULT_CHIP_STYLE
  return (
    <div className="border border-chrome-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200 bg-white">
      <h3 className="text-xs font-semibold text-ink-400 uppercase tracking-widest mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <TechPill key={item} label={item} className={chipStyle} />
        ))}
      </div>
    </div>
  )
}
