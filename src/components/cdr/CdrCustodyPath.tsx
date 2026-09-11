'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useInView } from '@/hooks/useInView'

/**
 * Animated chain-of-custody illustration. Steps through the same drug's
 * journey used in CdrRegisterPreview (CDR-014, batch 22B441), pulsing the
 * active location and revealing what Salvify actually captures at that step,
 * so the diagram explains the claim rather than just naming the locations.
 * Loops while in view, pauses on hover, and settles on the final frame under
 * reduced-motion.
 */
type Node = { label: string; ref: string; detail: string }

const nodes: Node[] = [
  {
    label: 'Central store',
    ref: 'CDR-014',
    detail: 'Receipt logged with supplier, batch and expiry. Balance updated.',
  },
  {
    label: 'Station A',
    ref: 'Approved location',
    detail:
      'The system checks the destination is an approved location before the transfer is allowed.',
  },
  {
    label: 'Ambulance 3',
    ref: 'Batch 22B441 · Exp 06/27',
    detail: 'Batch, expiry and quantity travel with the stock, not just the location.',
  },
  {
    label: 'Response bag',
    ref: 'Signed out · 12h',
    detail:
      'Personal custody sign-out records who is accountable for the bag, and until when.',
  },
]

const STEP_MS = 2800

export default function CdrCustodyPath() {
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
      // requestAnimationFrame wrap keeps this timer-driven update from
      // sitting committed-but-unpainted until a click; see CdrJourneyStepper.
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
          Chain of custody
        </p>
        <span className="font-mono text-[11px] text-fg/40">
          Morphine sulfate 10mg/ml
        </span>
      </div>

      <ol className="mt-4">
        {nodes.map((n, i) => {
          const done = i < active
          const isActive = i === active
          return (
            <li key={n.label} className="relative flex gap-3">
              <span className="flex flex-col items-center">
                <span
                  className={clsx(
                    'relative z-10 shrink-0 rounded-full transition-all duration-500',
                    isActive
                      ? 'size-3 bg-brand-500 ring-4 ring-brand-500/20 animate-pulse'
                      : done
                        ? 'size-2.5 bg-brand-500'
                        : 'size-2.5 bg-ink/20'
                  )}
                  aria-hidden="true"
                />
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
                      isActive
                        ? 'bg-brand-500/12 text-brand-700'
                        : 'bg-surface text-fg/55'
                    )}
                  >
                    {n.ref}
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
