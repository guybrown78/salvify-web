'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

type Props = {
  /** e.g. "40%", "100%", "24/7" */
  value: string
  durationMs?: number
}

const PARSE = /^(\d+)(.*)$/

/**
 * Counts the leading number in `value` up from 0 as soon as it scrolls into
 * view, keeping any suffix (%, "/7", ...) static. Values with no leading
 * number (rare, but the type is a free-form string) just render as-is.
 */
export default function CountUpStat({ value, durationMs = 1100 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0 })
  const shouldReduceMotion = useReducedMotion()

  const match = value.match(PARSE)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (target === null || !inView) return
    if (shouldReduceMotion) {
      setDisplay(target)
      return
    }
    const controls = animate(0, target, {
      duration: durationMs / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, durationMs, shouldReduceMotion])

  if (target === null) return <>{value}</>
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
