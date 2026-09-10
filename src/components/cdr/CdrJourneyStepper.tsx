'use client'

import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  HiOutlineBuildingStorefront,
  HiOutlineBuildingOffice2,
  HiOutlineTruck,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from 'react-icons/hi2'

type Step = { label: string; note: string; icon: React.ReactNode }

const steps: Step[] = [
  {
    label: 'Central store',
    note: 'Receipt logged with supplier, batch and expiry. The register balance goes up.',
    icon: <HiOutlineBuildingStorefront className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Station',
    note: 'An approved controlled-drug location with its own register and running balance.',
    icon: <HiOutlineBuildingOffice2 className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Vehicle',
    note: 'Moving stock uses the same screen as everyday supplies, and transfers are logged in and out.',
    icon: <HiOutlineTruck className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Bag / pouch',
    note: 'Personal and pouch custody sign-out records who is accountable, and until when.',
    icon: <HiOutlineBriefcase className="size-6" aria-hidden="true" />,
  },
  {
    label: 'Clinician',
    note: 'Administration is recorded at the point of care and independently witnessed.',
    icon: <HiOutlineUser className="size-6" aria-hidden="true" />,
  },
]

const AUTO_DELAY = 4500

export default function CdrJourneyStepper() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = steps.length

  const go = useCallback(
    (delta: number) => setCurrent((c) => (c + delta + total) % total),
    [total]
  )

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => go(1), AUTO_DELAY)
    return () => window.clearTimeout(id)
  }, [current, paused, go])

  const active = steps[current]

  return (
    <div
      className="mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Full journey, always in the DOM for search and screen readers. */}
      <ul className="sr-only">
        {steps.map((s) => (
          <li key={s.label}>
            {s.label}: {s.note}
          </li>
        ))}
      </ul>

      {/* Timeline */}
      <div className="flex items-start gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous step"
          className="hidden shrink-0 rounded-full border border-white/15 bg-white/5 p-2.5 text-surface/70 transition-colors hover:border-brand-300 hover:text-white sm:inline-flex"
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
                        'absolute left-1/2 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full transition-colors duration-500',
                        i < current ? 'bg-brand-500' : 'bg-white/15'
                      )}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setCurrent(i)}
                    tabIndex={-1}
                    className={clsx(
                      'relative z-10 flex shrink-0 items-center justify-center rounded-full font-brand font-extrabold transition-all duration-500',
                      isActive
                        ? 'size-11 bg-brand-500 text-base text-white ring-[6px] ring-brand-500/20'
                        : isDone
                          ? 'size-8 bg-brand-500/80 text-xs text-white hover:bg-brand-500'
                          : 'size-8 border-2 border-white/25 text-xs text-surface/50 hover:border-brand-300 hover:text-white'
                    )}
                  >
                    {i + 1}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrent(i)}
                  tabIndex={-1}
                  className={clsx(
                    'mt-3 hidden max-w-[8rem] text-center text-xs font-semibold leading-tight transition-colors duration-500 sm:block',
                    isActive ? 'text-white' : 'text-surface/60 hover:text-white'
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
          className="hidden shrink-0 rounded-full border border-white/15 bg-white/5 p-2.5 text-surface/70 transition-colors hover:border-brand-300 hover:text-white sm:inline-flex"
        >
          <HiOutlineArrowRight className="size-4" />
        </button>
      </div>

      {/* Focus card */}
      <div className="relative mt-10 overflow-hidden rounded-2xl border border-brand-500/25 bg-white/[0.06] p-6 shadow-xl shadow-black/20 sm:mt-12 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/15 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 right-2 select-none font-brand text-[9rem] font-extrabold leading-none text-white/[0.04] sm:text-[12rem]"
        >
          {String(current + 1).padStart(2, '0')}
        </span>
        <div key={current} className="cdr-rise relative min-h-[8rem] text-left">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white sm:size-14">
              {active.icon}
            </span>
            <div>
              <span className="block font-mono text-xs uppercase tracking-[0.25em] text-brand-300">
                Step {current + 1} of {total}
              </span>
              <h3 className="mt-1 font-brand text-xl font-extrabold text-white sm:text-2xl">
                {active.label}
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-surface/75 sm:text-lg">
            {active.note}
          </p>
        </div>
      </div>

      {/* Mobile controls */}
      <div className="mt-5 flex gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous step"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2.5 text-sm font-semibold text-surface/80"
        >
          <HiOutlineArrowLeft className="size-4" /> Prev
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next step"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2.5 text-sm font-semibold text-surface/80"
        >
          Next <HiOutlineArrowRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
