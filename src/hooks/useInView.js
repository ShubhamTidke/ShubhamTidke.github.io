import { useState, useEffect } from 'react'

/**
 * Fires once when the observed element enters the viewport, then disconnects.
 * Destructuring threshold and rootMargin to primitives avoids re-running the
 * effect on every render (an object default would be a new reference each time).
 */
export function useInView(
  ref,
  { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {},
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return inView
}
