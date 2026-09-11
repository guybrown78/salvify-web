'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { HiOutlineArchiveBox, HiCheckCircle } from 'react-icons/hi2'
import { useInView } from '@/hooks/useInView'

/**
 * Illustrates Real-Time Stock Visibility: a bag's contents reveal one at a
 * time with batch and expiry, then a compliant badge locks in. Loops while
 * in view, pauses on hover, settles on the final frame under reduced-motion.
 */
type Item = { name: string; meta: string }

const items: Item[] = [
  { name: 'Adrenaline 1mg/10ml', meta: 'Batch 5F21 · Exp 03/27' },
  { name: 'Morphine sulfate 10mg', meta: 'Batch 22B441 · Exp 06/27' },
  { name: 'Saline 500ml', meta: 'Batch 9K02 · Exp 11/26' },
]

const SCRIPT: { revealed: number; compliant: boolean; ms: number }[] = [
  { revealed: 0, compliant: false, ms: 900 },
  { revealed: 1, compliant: false, ms: 750 },
  { revealed: 2, compliant: false, ms: 750 },
  { revealed: 3, compliant: false, ms: 750 },
  { revealed: 3, compliant: true, ms: 2200 },
]

export default function FeatureVisualStock() {
  const [step, setStep] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setStep(SCRIPT.length - 1)
    }
  }, [])

  useEffect(() => {
    if (paused || reduced || !inView) return
    let raf = 0
    const t = window.setTimeout(() => {
      // requestAnimationFrame wrap: see CdrJourneyStepper for why a plain
      // setTimeout-driven update can otherwise sit committed-but-unpainted.
      raf = window.requestAnimationFrame(() =>
        setStep((s) => (s + 1) % SCRIPT.length)
      )
    }, SCRIPT[step].ms)
    return () => {
      window.clearTimeout(t)
      window.cancelAnimationFrame(raf)
    }
  }, [step, paused, reduced, inView])

  const { revealed, compliant } = SCRIPT[step]

  return (
    <div
      ref={ref}
      className="border-b border-border/70 bg-surface-muted/40 px-6 pb-5 pt-6 sm:px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink">
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink text-surface">
            <HiOutlineArchiveBox className="size-4" aria-hidden="true" />
          </span>
          Response bag 3
        </span>
        <span
          className={clsx(
            'inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all duration-500',
            compliant
              ? 'translate-y-0 scale-100 bg-success/15 text-success opacity-100'
              : 'translate-y-1 scale-95 opacity-0'
          )}
        >
          <HiCheckCircle className="size-3.5" aria-hidden="true" />
          Compliant
        </span>
      </div>

      <ul className="mt-3 space-y-1.5">
        {items.map((item, i) => (
          <li
            key={item.name}
            className={clsx(
              'flex items-center justify-between gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] shadow-sm transition-all duration-500',
              i < revealed
                ? 'translate-x-0 opacity-100'
                : 'pointer-events-none -translate-x-1 opacity-0'
            )}
          >
            <span className="truncate font-medium text-ink">{item.name}</span>
            <span className="shrink-0 text-fg/50">{item.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
