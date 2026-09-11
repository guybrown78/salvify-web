'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether the attached element is on screen, so a looping illustration
 * can wait until a visitor actually scrolls to it instead of animating from
 * page load. Keeps observing after the first hit, so playback pauses again if
 * the element scrolls out of view and resumes when it comes back.
 */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3, rootMargin: '0px 0px -15% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
