'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  HiOutlineUser,
  HiOutlineUserGroup,
  HiCheckCircle,
  HiOutlineBellAlert,
  HiOutlineClock,
} from 'react-icons/hi2'
import { useInView } from '@/hooks/useInView'

/**
 * Animated witnessing illustration. Loops through two flows:
 *  - "Add a witness": the acting user records an event, a witness is added and
 *    notified, and the witness accepts (or could decline) on their own account.
 *  - "Record together": the witness confirms in the moment by entering their own
 *    six-digit PIN.
 * Both end on "Recorded together". Purely illustrative; pauses on hover and
 * settles on a finished frame under reduced-motion.
 */
type Flow = 'add' | 'together'
type Step = { flow: Flow; stage: string; ms: number }

const SCRIPT: Step[] = [
  { flow: 'add', stage: 'event', ms: 1700 },
  { flow: 'add', stage: 'requested', ms: 2100 },
  { flow: 'add', stage: 'accepted', ms: 1700 },
  { flow: 'add', stage: 'recorded', ms: 2300 },
  { flow: 'together', stage: 'event', ms: 1500 },
  { flow: 'together', stage: 'pin', ms: 2800 },
  { flow: 'together', stage: 'recorded', ms: 2300 },
]

const flowCopy: Record<Flow, string> = {
  add: 'A witness is added and accepts on their own account, in the moment or later.',
  together: 'The witness confirms in the moment with their own six-digit PIN.',
}

export default function CdrWitnessFlow() {
  const [step, setStep] = useState(0)
  const [pin, setPin] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>()

  const { flow, stage } = SCRIPT[step]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setStep(6)
      setPin(6)
    }
  }, [])

  useEffect(() => {
    if (paused || reduced || !inView) return
    let raf = 0
    const t = window.setTimeout(() => {
      // requestAnimationFrame wrap: see CdrJourneyStepper for why. Without
      // it, this setTimeout-driven update can end up committed but unpainted
      // until the visitor clicks somewhere on the page.
      raf = window.requestAnimationFrame(() =>
        setStep((s) => (s + 1) % SCRIPT.length)
      )
    }, SCRIPT[step].ms)
    return () => {
      window.clearTimeout(t)
      window.cancelAnimationFrame(raf)
    }
  }, [step, paused, reduced, inView])

  useEffect(() => {
    if (stage !== 'pin') {
      setPin(flow === 'together' && stage === 'recorded' ? 6 : 0)
      return
    }
    if (reduced) {
      setPin(6)
      return
    }
    if (!inView) return
    let n = 0
    setPin(0)
    const id = window.setInterval(() => {
      n += 1
      window.requestAnimationFrame(() => setPin(n))
      if (n >= 6) window.clearInterval(id)
    }, 330)
    return () => window.clearInterval(id)
  }, [stage, flow, reduced, inView])

  const actingActive = stage === 'event'
  const witnessActive =
    stage === 'requested' || stage === 'accepted' || stage === 'pin'
  const done = stage === 'recorded'
  const pending = flow === 'add' && stage === 'requested'

  const cardActive = 'border-brand-500/40 ring-4 ring-brand-500/10'
  const cardDone = 'border-success/40 ring-4 ring-success/10'

  return (
    <div
      ref={ref}
      className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface/40 p-5 sm:p-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wide">
        {(['add', 'together'] as Flow[]).map((f) => (
          <span
            key={f}
            className={clsx(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors duration-500',
              flow === f ? 'bg-ink text-white' : 'text-fg/40'
            )}
          >
            <span
              className={clsx(
                'size-1.5 rounded-full transition-colors duration-500',
                flow === f ? 'bg-brand-300' : 'bg-fg/20'
              )}
            />
            {f === 'add' ? 'Add a witness' : 'Record together'}
          </span>
        ))}
      </div>

      <p
        key={flow}
        className="cdr-rise mx-auto mt-4 flex min-h-[2.5rem] max-w-md items-center justify-center text-center text-sm text-fg/60"
      >
        {flowCopy[flow]}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
        <div
          className={clsx(
            'flex flex-1 flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-500 sm:min-h-[8.5rem]',
            actingActive ? cardActive : done ? cardDone : 'border-border'
          )}
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-500/12 text-brand-700">
              <HiOutlineUser className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">
                Acting user
              </span>
              <span className="block text-xs text-fg/55">Records the event</span>
            </span>
          </div>
          <div className="rounded-lg bg-surface/60 px-3 py-2.5 text-xs">
            <span className="block text-fg/70">Morphine sulfate 10mg/ml</span>
            <span
              className={clsx(
                'mt-1.5 flex items-center gap-1 font-semibold transition-opacity duration-500',
                pending
                  ? 'text-warning opacity-100'
                  : done
                    ? 'text-success opacity-100'
                    : 'opacity-0'
              )}
            >
              {pending ? (
                <>
                  <HiOutlineClock
                    className="size-4 shrink-0 animate-pulse"
                    aria-hidden="true"
                  />
                  Pending until the witness accepts
                </>
              ) : (
                <>
                  <HiCheckCircle className="size-4 shrink-0" aria-hidden="true" />
                  Signed
                </>
              )}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center py-1 sm:w-16 sm:flex-col">
          {/* mobile: vertical connector */}
          <div
            className={clsx(
              'relative h-8 w-0.5 rounded-full transition-colors duration-500 sm:hidden',
              done ? 'bg-success' : 'bg-border'
            )}
          >
            {(stage === 'requested' || stage === 'pin') && !reduced && (
              <span
                key={`${stage}-y`}
                className="cdr-travel-y absolute left-1/2 top-0 size-2.5 -translate-x-1/2 rounded-full bg-brand-500 ring-4 ring-brand-500/20"
              />
            )}
          </div>

          {/* desktop: horizontal connector */}
          <div
            className={clsx(
              'relative hidden h-0.5 w-full rounded-full transition-colors duration-500 sm:block',
              done ? 'bg-success' : 'bg-border'
            )}
          >
            {(stage === 'requested' || stage === 'pin') && !reduced && (
              <span
                key={`${stage}-x`}
                className="cdr-travel-x absolute -top-[4px] left-0 size-2.5 rounded-full bg-brand-500 ring-4 ring-brand-500/20"
              />
            )}
          </div>
        </div>

        <div
          className={clsx(
            'flex flex-1 flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-500 sm:min-h-[8.5rem]',
            witnessActive ? cardActive : done ? cardDone : 'border-border'
          )}
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-ink text-surface">
              <HiOutlineUserGroup className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">
                Witness
              </span>
              <span className="block text-xs text-fg/55">
                {flow === 'together'
                  ? 'Present · enters own PIN'
                  : 'Separate permission · own account'}
              </span>
            </span>
          </div>

          <div className="min-h-[4.25rem]">
            <WitnessBody flow={flow} stage={stage} pin={pin} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex min-h-[2.75rem] justify-center">
        <span
          className={clsx(
            'inline-flex items-center gap-2 rounded-full bg-success/12 px-4 py-2 text-sm font-semibold text-success shadow-sm transition-all duration-500',
            done
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none translate-y-1 scale-95 opacity-0'
          )}
        >
          <HiCheckCircle className="size-5" aria-hidden="true" />
          Recorded together
        </span>
      </div>
    </div>
  )
}

function WitnessBody({
  flow,
  stage,
  pin,
}: {
  flow: Flow
  stage: string
  pin: number
}) {
  if (flow === 'together') {
    return (
      <div className="rounded-lg bg-surface/60 px-3 py-2.5">
        <span className="mb-2 block text-[11px] font-medium uppercase tracking-wide text-fg/50">
          {pin >= 6 ? 'PIN confirmed' : 'Witness enters PIN'}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className={clsx(
                'h-7 flex-1 rounded-md border transition-all duration-300',
                i < pin
                  ? 'scale-100 border-ink bg-ink'
                  : 'scale-95 border-border bg-white'
              )}
            />
          ))}
        </div>
      </div>
    )
  }

  if (stage === 'event') {
    return (
      <div className="rounded-lg border border-dashed border-border px-3 py-2.5 text-xs font-medium text-fg/45">
        + Add a witness
      </div>
    )
  }

  if (stage === 'requested') {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-warning/10 px-3 py-2.5 text-xs font-semibold text-warning">
        <HiOutlineBellAlert
          className="size-4 shrink-0 animate-pulse"
          aria-hidden="true"
        />
        Witness requested · accept or decline
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 rounded-lg bg-success/10 px-3 py-2.5 text-xs font-semibold text-success">
      <HiCheckCircle className="size-4 shrink-0" aria-hidden="true" />
      Witness accepted
    </div>
  )
}
