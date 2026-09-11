'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  HiCheckCircle,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineLockClosed,
} from 'react-icons/hi2'
import { useInView } from '@/hooks/useInView'

/**
 * Illustrates MakeReady Shift Checklists: two ordinary items tick off, then
 * the controlled-drug line waits for a witness before it locks in, echoing
 * the dual-confirmation pattern used on the Controlled Drug Register page.
 * Loops while in view, pauses on hover, settles on the final frame under
 * reduced-motion.
 */
type Stage = 'idle' | 'item1' | 'item2' | 'witness' | 'locked'

const order: Stage[] = ['idle', 'item1', 'item2', 'witness', 'locked']

const SCRIPT: { stage: Stage; ms: number }[] = [
  { stage: 'idle', ms: 700 },
  { stage: 'item1', ms: 900 },
  { stage: 'item2', ms: 900 },
  { stage: 'witness', ms: 1300 },
  { stage: 'locked', ms: 2200 },
]

export default function FeatureVisualChecklist() {
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
      raf = window.requestAnimationFrame(() =>
        setStep((s) => (s + 1) % SCRIPT.length)
      )
    }, SCRIPT[step].ms)
    return () => {
      window.clearTimeout(t)
      window.cancelAnimationFrame(raf)
    }
  }, [step, paused, reduced, inView])

  const stage = SCRIPT[step].stage
  const idx = order.indexOf(stage)
  const item1Done = idx >= order.indexOf('item1')
  const item2Done = idx >= order.indexOf('item2')
  const witnessJoined = idx >= order.indexOf('witness')
  const locked = stage === 'locked'

  return (
    <div
      ref={ref}
      className="border-b border-border/70 bg-surface-muted/40 px-6 pb-5 pt-6 sm:px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul className="space-y-1.5">
        <ChecklistRow label="Airway kit" done={item1Done} />
        <ChecklistRow label="IV fluids and syringes" done={item2Done} />
        <li className="flex items-center justify-between gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] shadow-sm">
          <span className="flex items-center gap-2 font-medium text-ink">
            <span
              className={clsx(
                'flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-500',
                locked ? 'border-success bg-success text-white' : 'border-border'
              )}
            >
              {locked && <HiCheckCircle className="size-3.5" aria-hidden="true" />}
            </span>
            Controlled drugs
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-500/15 text-brand-700">
              <HiOutlineUser className="size-3" aria-hidden="true" />
            </span>
            <span
              className={clsx(
                'inline-flex size-5 items-center justify-center rounded-full transition-all duration-500',
                witnessJoined
                  ? 'scale-100 bg-ink text-surface opacity-100'
                  : 'scale-50 opacity-0'
              )}
            >
              <HiOutlineUserGroup className="size-3" aria-hidden="true" />
            </span>
          </span>
        </li>
      </ul>

      <div
        className={clsx(
          'mt-3 flex items-center justify-center gap-1.5 rounded-md py-1.5 text-[11px] font-semibold transition-all duration-500',
          locked
            ? 'translate-y-0 bg-success/15 text-success opacity-100'
            : 'translate-y-1 opacity-0'
        )}
      >
        <HiOutlineLockClosed className="size-3.5" aria-hidden="true" />
        Shift ready · dual signed
      </div>
    </div>
  )
}

function ChecklistRow({ label, done }: { label: string; done: boolean }) {
  return (
    <li className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] shadow-sm">
      <span
        className={clsx(
          'flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-500',
          done ? 'border-success bg-success text-white' : 'border-border'
        )}
      >
        {done && <HiCheckCircle className="size-3.5" aria-hidden="true" />}
      </span>
      <span className="font-medium text-ink">{label}</span>
    </li>
  )
}
