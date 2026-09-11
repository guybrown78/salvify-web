'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Stagger this item's entrance behind others in the same group. */
  delayMs?: number
}

/**
 * Fades and rises an element into place as soon as it reaches the viewport.
 * Plays once (viewport.once), so scrolling back past it doesn't replay it.
 */
export default function ScrollReveal({ children, className, delayMs = 0 }: Props) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: delayMs / 1000 }}
    >
      {children}
    </motion.div>
  )
}
