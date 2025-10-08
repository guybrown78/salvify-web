'use client'
import { SimpleHoldingCard } from '@/components/animations/assets/SimpleHoldingCard'
import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion'
import clsx from 'clsx'
import { emit } from '@/lib/animationBus'
import { RealTimeKitBagHolding } from './components/RealTimeKitBagHolding'

interface Props {
  ariaTitle?: string
}

const RealTimeMovement = ({
  ariaTitle = 'Stock movement from Store Room to Kit Bag',
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const lozengeRef = useRef<HTMLDivElement>(null)
  const connectingLineRef = useRef<HTMLDivElement>(null)
  const middleRef = useRef<HTMLDivElement>(null)

  const prefersReduced = useReducedMotion()
  const [maxY, setMaxY] = useState<number | null>(null)
	const [moving, setMoving] = useState(false)

	const inView = useInView(containerRef, { amount: 0.4 })

  const controls = useAnimation()

  // Measure once (and on resize) so we can animate 'top' numerically.
  useEffect(() => {
    const measure = () => {
      const m = middleRef.current
      const l = lozengeRef.current
      if (!m || !l) return
      const val = m.clientHeight - l.clientHeight
      setMaxY(Math.max(0, val))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    // if (prefersReduced || maxY == null) return
		if (prefersReduced || maxY == null || !inView) return
    let cancelled = false
    ;(async function run() {
      while (!cancelled) {
				setMoving(true)
        await controls.start({
          top: maxY,
          transition: { duration: 1, ease: 'easeInOut' },
        })
				await controls.start({ opacity: 0, transition: { duration: 0.1 } })
				emit('transfer:arrived', { to: 'kit-bag' })
				setMoving(false)
        await wait(1000) // hold at bottom
       	if (cancelled) return
				controls.set({ top: 0, opacity: 1 }) // instant jump to top
        // optional: await wait(300) // small breathe at top
      }
    })()
    return () => {
      cancelled = true
    }
  }, [controls, maxY, inView, prefersReduced])

  return (
    <section
      ref={containerRef}
      aria-label={ariaTitle}
      className="relative mx-auto w-full max-w-4xl border border-slate-200 p-6 shadow-sm backdrop-blur-sm"
    >
      {/* Scene box with fixed aspect so it scales nicely */}
      <div className="items-between relative flex aspect-[16/9] w-full flex-col justify-center">
        {/* Top: Store Room */}
        <SimpleHoldingCard
          ref={topRef}
          title="Store Room"
          subtitle="Central stock"
          className="relative z-10 mx-auto"
        />

        <div
          ref={middleRef}
          className="relative -mt-5 -mb-5 z-0 flex flex-1 flex-col items-center border border-red-100"
          aria-hidden="true"
        >
          <div
            ref={connectingLineRef}
            className={clsx("w-[2px] flex-1 bg-brand-500 transition-opacity", moving ? 'opacity-100 duration-150' : 'opacity-20 duration-75')}
            aria-hidden="true"
          />

          <motion.div
            ref={lozengeRef}
            className="absolute left-1/2 block h-5 w-20 -translate-x-1/2 rounded-full bg-brand-500"
            style={{ top: 0 }}
						initial={{ top: 0, opacity: 1 }}
            animate={controls}
            aria-hidden="true"
          />
        </div>

        {/* Bottom: Kit Bag */}
        <RealTimeKitBagHolding
          ref={bottomRef}
          title="Kit Bag"
          subtitle="Deployed kit"
          className="relative z-10 mx-auto"
        />
      </div>
    </section>
  )
}

export default RealTimeMovement

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}
