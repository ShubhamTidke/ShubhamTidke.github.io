/** Reusable technology/skill chip used across Experience, Projects, Skills, and Education. */
export function TechPill({ label, className = '' }) {
  return (
    <span
      className={`text-xs px-2.5 py-0.5 rounded-md bg-chrome-100 text-ink-500 border border-chrome-200 ${className}`}
    >
      {label}
    </span>
  )
}
