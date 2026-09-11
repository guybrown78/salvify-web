'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useInView } from '@/hooks/useInView'

/**
 * Animated stock-check illustration. A simplified diagram of the real flow
 * (check each batch in turn, adjust if the count is different, then see the
 * effect on the register), in the same visual language as CdrCustodyPath.
 * This is intentionally NOT a recreation of the product UI: no buttons, no
 * counters, no modal chrome, just the site's own timeline/tag idiom used to
 * explain what happens. Loops while in view, pauses on hover, and settles on
 * the final frame under reduced-motion.
 */
type Status = 'ok' | 'flag' | 'brand'

type Node = { label: string; tag: string; status: Status; detail: string }

const nodes: Node[] = [
  {
    label: 'Batch 22B441 checked',
    tag: 'Confirmed',
    status: 'ok',
    detail: 'Counted on the spot. It matches the expected balance.',
  },
  {
    label: 'Batch M2601 checked',
    tag: '12 vs 10',
    status: 'flag',
    detail: 'Counted 12 against an expected 10. Recorded, not overwritten.',
  },
  {
    label: 'Discrepancy opened',
    tag: 'Flagged',
    status: 'flag',
    detail:
      'Logged for the CD team to review. Nothing more is needed from the person checking.',
  },
  {
    label: 'Register updated',
    tag: 'Recorded',
    status: 'brand',
    detail: "The stock check and any discrepancies join the register's history.",
  },
]

const dotColor: Record<Status, string> = {
  ok: 'bg-success',
  flag: 'bg-warning',
  brand: 'bg-brand-500',
}
const ringColor: Record<Status, string> = {
  ok: 'ring-success/20',
  flag: 'ring-warning/20',
  brand: 'ring-brand-500/20',
}
const tagColor: Record<Status, string> = {
  ok: 'bg-success/12 text-success',
  flag: 'bg-warning/12 text-warning',
  brand: 'bg-brand-500/12 text-brand-700',
}

const STEP_MS = 2800

export default function CdrStockCheckPath() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setActive(nodes.length - 1)
    }
  }, [])

  useEffect(() => {
    if (paused || reduced || !inView) return
    let raf = 0
    const t = window.setTimeout(() => {
      // requestAnimationFrame wrap: see CdrCustodyPath / CdrJourneyStepper.
      raf = window.requestAnimationFrame(() =>
        setActive((a) => (a + 1) % nodes.length)
      )
    }, STEP_MS)
    return () => {
      window.clearTimeout(t)
      window.cancelAnimationFrame(raf)
    }
  }, [active, paused, reduced, inView])

  return (
    <div
      ref={ref}
      className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-700">
          Stock check
        </p>
        <span className="font-mono text-[11px] text-fg/40">
          Morphine sulfate 10mg/ml
        </span>
      </div>

      <ol className="mt-4">
        {nodes.map((n, i) => {
          const done = i < active
          const isActive = i === active
          const reached = done || isActive
          return (
            <li key={n.label} className="relative flex gap-3">
              <span className="flex flex-col items-center">
                <span className="flex h-5 items-center">
                  <span
                    className={clsx(
                      'relative z-10 shrink-0 rounded-full transition-all duration-500',
                      reached ? dotColor[n.status] : 'bg-ink/20',
                      isActive
                        ? clsx('size-3 ring-4', ringColor[n.status])
                        : 'size-2.5'
                    )}
                    aria-hidden="true"
                  />
                </span>
                {i < nodes.length - 1 && (
                  <span
                    className={clsx(
                      'mt-1 w-px flex-1 transition-colors duration-500',
                      done ? 'bg-brand-500' : 'bg-border'
                    )}
                    aria-hidden="true"
                  />
                )}
              </span>

              <span className="min-w-0 flex-1 pb-4">
                <span className="flex items-center justify-between gap-2">
                  <span
                    className={clsx(
                      'text-sm font-medium transition-colors duration-500',
                      isActive ? 'text-ink' : done ? 'text-ink/80' : 'text-fg/40'
                    )}
                  >
                    {n.label}
                  </span>
                  <span
                    className={clsx(
                      'shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium transition-colors duration-500',
                      reached ? tagColor[n.status] : 'bg-surface text-fg/55'
                    )}
                  >
                    {n.tag}
                  </span>
                </span>
                <span
                  className={clsx(
                    'grid text-xs leading-relaxed text-fg/60 transition-all duration-500',
                    isActive
                      ? 'mt-1.5 grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <span className="overflow-hidden">{n.detail}</span>
                </span>
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
