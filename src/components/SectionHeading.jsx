export function SectionHeading({ title, subtitle, inView }) {
  return (
    <div
      className={`transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <p className="text-blue-500 text-sm font-medium tracking-wide mb-1">{subtitle}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">{title}</h2>
      <div className="mt-3 h-0.5 w-12 bg-blue-500 rounded-full" />
    </div>
  )
}
