'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { HiOutlineCheck } from 'react-icons/hi2'
import StatementCard from '../cards/StatementCard'

/**
 * The rotating pool of hero alerts. The first three are shown on load; the
 * rest cycle through afterwards, looping back to the start once exhausted.
 */
const ALERTS = [
  'Real-time stock',
  'Every medicine fully traceable',
  'Ready for every shift',
  'Batch and expiry tracked automatically',
  'Controlled drugs, always compliant',
  'Access built around your role',
  'Nothing expires unnoticed',
  'Every action, fully attributed',
  'One dashboard, every vehicle',
  'Works with your existing systems',
  'Audit-ready in seconds',
  'No more paper registers',
]

const ENTRANCE_STAGGER_MS = 650
const HOLD_MS = 1800
const GAP_MS = 500
const TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }

type Slot = { key: number; idx: number; exiting: boolean }

/**
 * Three alert pills are visible at (almost) all times. On load they fade in
 * one at a time. Afterwards each cycle runs in distinct beats rather than
 * all at once: the top pill fades out on its own; once that's fully
 * settled, the other two promote up a slot; only after a further pause
 * does the next alert fade into the vacated bottom slot. Loops continuously
 * through ALERTS. Settles on the original three, static, when the visitor
 * prefers reduced motion.
 *
 * Exit removal is tracked explicitly (each pill unmounts itself from
 * onAnimationComplete once its own fade-out settles) rather than left to
 * AnimatePresence, which was observed to leave exited pills mounted
 * (invisible but never unmounted) in this setup. A retiring pill stays in
 * normal flow while it fades, in place, so its neighbours don't promote
 * until it's actually removed from the list.
 */
export default function HeroAlertQueue() {
  const shouldReduceMotion = useReducedMotion()
  const [slots, setSlots] = useState<Slot[]>([])
  const nextIndexRef = useRef(3)
  const nextKeyRef = useRef(0)
  const mountedRef = useRef(true)
  const holdTimerRef = useRef<number>()
  const gapTimerRef = useRef<number>()

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      window.clearTimeout(holdTimerRef.current)
      window.clearTimeout(gapTimerRef.current)
    }
  }, [])

  const scheduleRetirement = () => {
    holdTimerRef.current = window.setTimeout(() => {
      if (!mountedRef.current) return
      setSlots((current) => {
        const retiring = current.find((s) => !s.exiting)
        return current.map((s) =>
          retiring && s.key === retiring.key ? { ...s, exiting: true } : s
        )
      })
    }, HOLD_MS)
  }

  useEffect(() => {
    if (shouldReduceMotion) {
      setSlots([0, 1, 2].map((idx) => ({ key: nextKeyRef.current++, idx, exiting: false })))
      return
    }

    const addSlot = (idx: number) =>
      setSlots((s) => [...s, { key: nextKeyRef.current++, idx, exiting: false }])

    const timers = [
      window.setTimeout(() => addSlot(0), 0),
      window.setTimeout(() => addSlot(1), ENTRANCE_STAGGER_MS),
      window.setTimeout(() => {
        addSlot(2)
        scheduleRetirement()
      }, ENTRANCE_STAGGER_MS * 2),
    ]
    return () => timers.forEach(window.clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion])

  const handleExitComplete = (key: number) => {
    setSlots((current) => current.filter((s) => s.key !== key))

    gapTimerRef.current = window.setTimeout(() => {
      if (!mountedRef.current) return
      const next = nextIndexRef.current % ALERTS.length
      nextIndexRef.current += 1
      setSlots((current) => [...current, { key: nextKeyRef.current++, idx: next, exiting: false }])
      scheduleRetirement()
    }, GAP_MS)
  }

  const activeSlots = slots.filter((s) => !s.exiting)

  return (
    <div className="relative flex flex-col items-end space-y-2 xl:space-y-4">
      {slots.map((slot) => {
        // The exiting pill stays in normal flow (not yet removed from the
        // array) so it doesn't push its neighbours up while it's still
        // fading in place; only once it's actually removed do the survivors
        // promote. Position among survivors decides the cascade delay.
        const activeIndex = activeSlots.findIndex((s) => s.key === slot.key)
        const pillDelay = activeIndex === 1 ? 0.1 : 0
        return (
          <motion.div
            key={slot.key}
            layout
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={slot.exiting ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
            transition={{ ...TRANSITION, delay: pillDelay }}
            onAnimationComplete={() => {
              if (slot.exiting) handleExitComplete(slot.key)
            }}
          >
            <StatementCard
              color="brand-300"
              title={ALERTS[slot.idx]}
              icon={<HiOutlineCheck />}
              animateIcon={!shouldReduceMotion}
              iconDelay={pillDelay + TRANSITION.duration}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
