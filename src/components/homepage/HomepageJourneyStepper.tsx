'use client'

import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  HiOutlineInboxArrowDown,
  HiOutlineTruck,
  HiOutlineHeart,
  HiOutlineFingerPrint,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import { useInView } from '@/hooks/useInView'

/**
 * Light-themed sibling of CdrJourneyStepper for the homepage "How It Works"
 * section: all steps stay visible as compact numbered nodes, with the active
 * one expanded into a focus card below. Loops while in view, pauses on
 * hover/focus, settles on the final frame under reduced-motion. Deliberately
 * separate from WorkFlowSlider (shared with the industry pages) so this
 * visual treatment doesn't leak into pages that haven't been redesigned yet.
 */
type Step = { label: string; note: string; icon: React.ReactNode }

const steps: Step[] = [
  {
    label: 'Stock enters your organisation',
    note: 'Medicines are logged with batch number, expiry date and quantity as they arrive, creating a clear starting point for every item in your system.',
    icon: <HiOutlineInboxArrowDown className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Allocated to vehicles and kits',
    note: 'Stock is assigned to vehicles, bags and locations through structured checks, ensuring everything is in place before deployment.',
    icon: <HiOutlineTruck className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Used in patient care',
    note: 'When medicines are used, the record is captured at the point of care, linked to the clinician, time and context of use.',
    icon: <HiOutlineHeart className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Fully traceable at any time',
    note: 'Every movement is connected, giving you a complete history from supplier to patient, searchable in seconds when you need it.',
    icon: <HiOutlineFingerPrint className="size-6" aria-hidden="true" />,
  },
]

const AUTO_DELAY = 4200

export default function HomepageJourneyStepper() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = steps.length
  const { ref, inView } = useInView<HTMLDivElement>()

  const go = useCallback(
    (delta: number) => setCurrent((c) => (c + delta + total) % total),
    [total]
  )

  useEffect(() => {
    if (paused || !inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const id = window.setTimeout(() => {
      // requestAnimationFrame wrap keeps this timer-driven update from
      // sitting committed-but-unpainted until a click; see CdrJourneyStepper.
      raf = window.requestAnimationFrame(() => go(1))
    }, AUTO_DELAY)
    return () => {
      window.clearTimeout(id)
      window.cancelAnimationFrame(raf)
    }
  }, [current, paused, inView, go])

  const active = steps[current]

  return (
    <div
      ref={ref}
      className="mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul className="sr-only">
        {steps.map((s) => (
          <li key={s.label}>
            {s.label}: {s.note}
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous step"
          className="hidden shrink-0 rounded-full border border-border bg-white p-2.5 text-fg/60 transition-colors hover:border-brand-500 hover:text-brand-700 sm:inline-flex"
        >
          <HiOutlineArrowLeft className="size-4" />
        </button>

        <ol className="flex flex-1" aria-hidden="true">
          {steps.map((step, i) => {
            const isActive = i === current
            const isDone = i < current
            return (
              <li
                key={step.label}
                className="relative flex flex-1 flex-col items-center"
              >
                <div className="relative flex h-11 w-full items-center justify-center">
                  {i < total - 1 && (
                    <span
                      className={clsx(
                        'absolute left-1/2 top-1/2 z-0 h-0.5 w-full -translate-y-1/2 rounded-full transition-colors duration-500',
                        i < current ? 'bg-brand-500' : 'bg-border'
                      )}
                    />
                  )}
                  <span className="relative z-10 rounded-full bg-surface/50 p-2">
                    <button
                      type="button"
                      onClick={() => setCurrent(i)}
                      tabIndex={-1}
                      className={clsx(
                        'flex shrink-0 items-center justify-center rounded-full font-brand font-extrabold transition-all duration-500',
                        isActive
                          ? 'size-11 bg-brand-500 text-base text-white ring-[6px] ring-brand-500/20'
                          : isDone
                            ? 'size-8 bg-brand-500/80 text-xs text-white hover:bg-brand-500'
                            : 'size-8 border-2 border-border bg-white text-xs text-fg/40 hover:border-brand-500 hover:text-brand-700'
                      )}
                    >
                      {i + 1}
                    </button>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrent(i)}
                  tabIndex={-1}
                  className={clsx(
                    'mt-3 hidden max-w-[8rem] text-center text-xs font-semibold leading-tight transition-colors duration-500 sm:block',
                    isActive ? 'text-ink' : 'text-fg/45 hover:text-ink'
                  )}
                >
                  {step.label}
                </button>
              </li>
            )
          })}
        </ol>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next step"
          className="hidden shrink-0 rounded-full border border-border bg-white p-2.5 text-fg/60 transition-colors hover:border-brand-500 hover:text-brand-700 sm:inline-flex"
        >
          <HiOutlineArrowRight className="size-4" />
        </button>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm sm:mt-12 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 right-2 select-none font-brand text-[9rem] font-extrabold leading-none text-ink/[0.04] sm:text-[12rem]"
        >
          {String(current + 1).padStart(2, '0')}
        </span>
        <div key={current} className="cdr-rise relative min-h-[8rem] text-left">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white sm:size-14">
              {active.icon}
            </span>
            <div>
              <span className="block font-mono text-xs uppercase tracking-[0.25em] text-brand-700">
                Step {current + 1} of {total}
              </span>
              <h3 className="mt-1 font-brand text-xl font-extrabold text-ink sm:text-2xl">
                {active.label}
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg/70 sm:text-lg">
            {active.note}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous step"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white py-2.5 text-sm font-semibold text-fg/70"
        >
          <HiOutlineArrowLeft className="size-4" /> Prev
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next step"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white py-2.5 text-sm font-semibold text-fg/70"
        >
          Next <HiOutlineArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
