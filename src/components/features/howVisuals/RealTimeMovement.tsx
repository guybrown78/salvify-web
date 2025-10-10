'use client'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion'
import { emit } from '@/lib/animationBus'
import { SimpleHoldingCard } from '@/components/animations/assets/SimpleHoldingCard'
import { RealTimeKitBagHolding } from './components/RealTimeKitBagHolding'
import { RealTimeKitStoreHolding } from './components/RealTimeStoreHolding'
import { RealTimePatientNode } from './components/RealTimePatientNode'

interface Props { ariaTitle?: string }

const RealTimeMovement = ({
  ariaTitle = 'Stock movement: Store → Kit Bag → Patient',
}: Props) => {
  // Scene
  const sceneRef = useRef<HTMLDivElement>(null)

  // Holdings
  const storeHoldingRef = useRef<HTMLDivElement>(null)
  const kitBagHoldingRef = useRef<HTMLDivElement>(null)

  // TRACK A (Store → KitBag) — keep your original structure/offsets
  const trackARef = useRef<HTMLDivElement>(null)        // was middleRef
  const trackALineRef = useRef<HTMLDivElement>(null)    // was connectingLineRef
  const pillARef = useRef<HTMLDivElement>(null)         // was lozengeRef

  // TRACK B (KitBag → Patient)
  const trackBRef = useRef<HTMLDivElement>(null)
  const pillBRef = useRef<HTMLDivElement>(null)

  // Patient node
  const patientNodeRef = useRef<HTMLDivElement>(null)

  // Anim controls
  const pillA = useAnimation()      // Leg A
  const pillB = useAnimation()      // Leg B
  const patient = useAnimation()    // patient in/out

  // State
  const [movingA, setMovingA] = useState(false)
  const [movingB, setMovingB] = useState(false)
  const [lineBVisible, setLineBVisible] = useState(false)

  const [legA, setLegA] = useState<number | null>(null) // travel distance A
  const [legB, setLegB] = useState<number | null>(null) // travel distance B

  const prefersReduced = useReducedMotion()
  const inView = useInView(sceneRef, { amount: 0.4 })

  // Measure both legs (keeps your middleRef maths)
  useEffect(() => {
    const measure = () => {
      // Leg A uses your original middleRef/pill sizing
      if (trackARef.current && pillARef.current) {
        const a = trackARef.current.clientHeight - pillARef.current.clientHeight
        setLegA(Math.max(0, a))
      }
      // Leg B
      if (trackBRef.current && pillBRef.current) {
        const b = trackBRef.current.clientHeight - pillBRef.current.clientHeight
        setLegB(Math.max(0, b))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Sequencer: Leg A → pause → patient in + line → Leg B → patient out → reset
  useEffect(() => {
    if (prefersReduced || !inView || legA == null || legB == null) return
    let cancelled = false

    ;(async function run() {
      while (!cancelled) {
        // ---- Leg A: Store → Kit Bag
        setMovingA(true)
        await pillA.start({ top: legA, transition: { duration: 1.0, ease: 'easeInOut' } })
        await pillA.start({ opacity: 0, transition: { duration: 0.12 } })
        emit('transfer:arrived', { leg: 'store→kitbag' })
        setMovingA(false)
        await wait(1750)
        if (cancelled) return

        // ---- Patient enters, line appears
				
				await patient.start({ x: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } })
				await wait(250)
        setLineBVisible(true)
        await wait(750)
			

        // ---- Leg B: Kit Bag → Patient
        setMovingB(true)
        await pillB.start({ top: legB, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } })
        await pillB.start({ opacity: 0, transition: { duration: 0.12 } })
        emit('transfer:arrived', { leg: 'kitbag→patient' })
        setMovingB(false)
        await wait(1750)
				setLineBVisible(false)
				await wait(1500)

        // ---- Patient exits, line fades
				await patient.start({ x: -40, opacity: 0, transition: { duration: 0.45, ease: 'easeIn' } })

        // ---- Reset & loop pause
        pillA.set({ top: 0, opacity: 1 })
        pillB.set({ top: 0, opacity: 0 })
				patient.set({ x: 80, opacity: 0 })
        await wait(2000)
      }
    })()

    return () => { cancelled = true }
  }, [prefersReduced, inView, legA, legB, pillA, pillB, patient])

  return (
    <section
      ref={sceneRef}
      aria-label={ariaTitle}
      className="relative mx-auto w-full max-w-4xl border border-slate-200 p-6 shadow-sm backdrop-blur-sm"
    >
      <div className="items-between relative flex aspect-[16/9] w-full flex-col justify-center">
        {/* Store Room */}
        <RealTimeKitStoreHolding
          ref={storeHoldingRef}
          title="Store Room"
          subtitle="Central stock"
          className="relative z-20 mx-auto"
        />

        {/* TRACK A: Store → Kit Bag (kept exactly with negative margins) */}
        <div
          ref={trackARef}
          className="relative -mt-5 -mb-5 z-0 flex flex-1 flex-col items-center"
          aria-hidden="true"
        >
          <div
            ref={trackALineRef}
            className={clsx(
              'w-[2px] flex-1 bg-brand-500 transition-opacity',
              movingA ? 'opacity-100 duration-150' : 'opacity-20 duration-75'
            )}
            aria-hidden="true"
          />
          <motion.div
            ref={pillARef}
            className="absolute left-1/2 z-10 block h-5 w-20 -translate-x-1/2 rounded-full bg-brand-500"
            style={{ top: 0 }}
            initial={{ top: 0, opacity: 1 }}
            animate={pillA}
            aria-hidden="true"
          />
        </div>

        {/* Kit Bag */}
        <RealTimeKitBagHolding
          ref={kitBagHoldingRef}
          title="Kit Bag"
          subtitle="Deployed kit"
          className="relative z-20 mx-auto"
        />

       

        {/* TRACK B: Kit Bag → Patient (also overlapped with negative margins) */}
        <div
          ref={trackBRef}
          className="relative -mt-5 -mb-5 z-0 flex flex-1 flex-col items-center"
          aria-hidden="true"
        >
          <div
            className={clsx(
              'w-[2px] flex-1 z-0 bg-brand-500 transition-opacity ease-in',
							lineBVisible ? movingB ? 'opacity-100 duration-150' : 'opacity-20 duration-150' : 'opacity-0 duration-500',
            )}
            aria-hidden="true"
          />
          <motion.div
            ref={pillBRef}
            className="absolute left-1/2 z-10 block h-5 w-20 -translate-x-1/2 rounded-full bg-brand-500"
            style={{ top: 0 }}
            initial={{ top: 0, opacity: 0 }}
            animate={pillB}
            aria-hidden="true"
          />
        </div>

				{/* Patient node (slides in/out) */}
        <motion.div
          ref={patientNodeRef}
          className="relative z-20 mx-auto"
          initial={{ x: 40, opacity: 0 }}
          animate={patient}
        >
          <RealTimePatientNode />
        </motion.div>


      </div>
    </section>
  )
}


export default RealTimeMovement

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}
