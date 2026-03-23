'use client'
import clsx from 'clsx'
import { easeIn, motion, useReducedMotion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

type AnimatedBadgeProps = {
  show?: boolean
  /** circle = fixed square; pill = auto width (measured) */
  variant?: 'circle' | 'pill'
  /** Height in px (also width for circle) */
  size?: number
  /** Background/text classes */
  bgClassName?: string
  /** Extra wrapper classes */
  className?: string
  /** Delay tuning (seconds) */
  delayInBox?: number
  delayOutBox?: number
  delayInContent?: number
  delayInChildren?: number
	gapLeft?: number   // px when shown
  gapRight?: number  // px when shown
  children?: React.ReactNode
}

const T = {
  dur: 0.42,
  ease: easeIn as any,
  scaleIn: [0.1, 1.06, 1],
  scaleOut: 0.1,
}

export default function AnimatedBadge({
  show = false,
  variant = 'circle',
  size = 24,
  bgClassName = 'bg-brand-500 text-white',
  className,
  delayInBox = 0,
  delayOutBox = 0.08,
  delayInContent = 0.18,
  delayInChildren = 0.36,
	gapLeft = 0,
  gapRight = 0,
  children,
}: AnimatedBadgeProps) {
  const prefersReduced = useReducedMotion()
  const duration = prefersReduced ? 0 : T.dur

  const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      // opacity: 1,
      scale: [0.6, 1.3, 0.94, 1],
      opacity: [0, 1, 1, 1],
      transition: {
        times: [0, 0.55, 0.78, 1],
        duration: prefersReduced ? 0 : 0.36,
        ease: easeIn,
        delay: prefersReduced ? 0 : delayInChildren, // after the circle
      },
    },
  }

  // For pill variant, measure content width so we can animate real width.
  const innerRef = useRef<HTMLDivElement>(null)
  const [measured, setMeasured] = useState(0)
  useEffect(() => {
    if (variant !== 'pill') return
    const el = innerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setMeasured(el.scrollWidth))
    setMeasured(el.scrollWidth)
    ro.observe(el)
    return () => ro.disconnect()
  }, [variant, children])

  const targetWidth = variant === 'circle' ? size : measured
  const height = size

  return (
    <motion.div
      className={clsx('flex items-center justify-center', className)}
      initial={false}
      animate={{
        width: show ? targetWidth : 0,
        marginLeft: show ? gapLeft : 0,
        marginRight: show ? gapRight : 0,
      }}
      style={{ height }}
      transition={{
        duration,
        ease: T.ease,
        delay: prefersReduced ? 0 : show ? delayInBox : delayOutBox,
      }}
      data-state={show ? 'shown' : 'hidden'}
      aria-hidden={!show}
    >
      <motion.div
        ref={innerRef}
        className={clsx(
          'relative flex h-full items-center justify-center rounded-full px-2 will-change-transform',
          bgClassName
        )}
        style={{
          // Circle keeps fixed width; pill uses measured width via wrapper
          width: variant === 'circle' ? size : 'auto',
        }}
        initial={false}
        animate={
          show
            ? { scale: T.scaleIn, opacity: 1 }
            : { scale: T.scaleOut, opacity: 0 }
        }
        transition={{
          duration,
          ease: T.ease,
          delay: prefersReduced ? 0 : show ? delayInContent : 0,
        }}
      >
        <motion.span
          className="relative inline-flex items-center justify-center will-change-transform"
          variants={childVariants}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
        >
          {children}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
