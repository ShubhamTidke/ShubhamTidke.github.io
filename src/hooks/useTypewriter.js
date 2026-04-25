import { useState, useEffect } from 'react'

/**
 * Cycles through `words`, typing each one character-by-character then erasing it.
 * Returns the string currently being displayed.
 */
export function useTypewriter(words, { typeSpeed = 60, eraseSpeed = 35, pauseMs = 2200 } = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const current = words[wordIndex]

    if (isTyping) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsTyping(false), pauseMs)
      return () => clearTimeout(t)
    }

    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), eraseSpeed)
      return () => clearTimeout(t)
    }

    setWordIndex((i) => (i + 1) % words.length)
    setIsTyping(true)
  }, [displayed, isTyping, wordIndex, words, typeSpeed, eraseSpeed, pauseMs])

  return displayed
}
