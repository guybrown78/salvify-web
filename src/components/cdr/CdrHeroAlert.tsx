import clsx from 'clsx'

type Dot = 'success' | 'brand' | 'accent'
type Ev = { label: string; dot: Dot }

/**
 * "Live activity" chips that float around the hero register card. Pure CSS: each
 * slot holds three chips on one looping animation, so a chip fades in, holds,
 * fades out, and the next chip in that slot takes over. The pause between one
 * chip leaving and the next arriving is a fresh random value (0.5-2s) baked into
 * each chip's animation-delay at render, so the hand-offs never feel scripted.
 * Slots run on their own cycle lengths so they drift and never sync up. Purely
 * illustrative, so the whole thing stays out of the accessibility tree.
 */
type Slot = {
  anchor: string
  chip: string
  startOffset: number
  events: Ev[]
}

const slots: Slot[] = [
  {
    // mid-left, hanging off the edge (clear of the card header)
    anchor: '-left-4 top-32 xl:-left-12',
    chip: 'left-0 top-0',
    startOffset: 0,
    events: [
      { label: 'Second-person witnessed', dot: 'success' },
      { label: 'Witnessed on a second account', dot: 'success' },
      { label: 'Destruction witnessed', dot: 'accent' },
    ],
  },
  {
    // bottom-right corner
    anchor: '-right-4 -bottom-5 xl:-right-12',
    chip: 'right-0 bottom-0',
    startOffset: 1.5,
    events: [
      { label: 'Stock check completed', dot: 'brand' },
      { label: 'Running balance confirmed', dot: 'brand' },
      { label: 'Discrepancy resolved', dot: 'success' },
    ],
  },
  {
    // resting on the card near the top-right
    anchor: '-top-5 right-6 xl:right-4',
    chip: 'right-0 top-0',
    startOffset: 3,
    events: [
      { label: 'Receipt logged to register', dot: 'success' },
      { label: 'Transferred to Ambulance 3', dot: 'brand' },
      { label: 'Pouch signed out to a clinician', dot: 'accent' },
    ],
  },
]

const dotClass: Record<Dot, string> = {
  success: 'bg-success',
  brand: 'bg-brand-500',
  accent: 'bg-accent',
}

// Fraction of each chip's cycle spent on screen. Must match the `cdr-alert`
// keyframe in tailwind.css (chip visible for the first 22.5%).
const VISIBLE_FRAC = 0.225
const MIN_GAP = 0.5
const MAX_GAP = 2

/**
 * Self-looping schedule for one slot. Each chip is on screen for VISIBLE_FRAC of
 * the cycle; the pause after it is a fresh random value between MIN_GAP and
 * MAX_GAP. The gaps set the cycle length, so the loop stays seamless.
 */
function buildSchedule(count: number, startOffset: number) {
  const gaps = Array.from(
    { length: count },
    () => MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP)
  )
  const cycle = gaps.reduce((sum, g) => sum + g, 0) / (1 - VISIBLE_FRAC * count)
  const visibleSec = VISIBLE_FRAC * cycle

  let t = startOffset
  const delays = gaps.map((gap) => {
    const delay = t
    t += visibleSec + gap
    return delay
  })
  return { cycle, delays }
}

export default function CdrHeroAlert() {
  return (
    <>
      {slots.map((slot) => {
        const { cycle, delays } = buildSchedule(
          slot.events.length,
          slot.startOffset
        )
        return (
          <div
            key={slot.anchor}
            aria-hidden="true"
            className={clsx(
              'pointer-events-none absolute z-10 hidden lg:block',
              slot.anchor
            )}
          >
            {slot.events.map((ev, j) => (
              <div
                key={ev.label}
                className={clsx(
                  'cdr-alert absolute flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-border bg-white px-3 py-2 text-xs font-semibold text-ink shadow-xl',
                  slot.chip
                )}
                style={{
                  animationDuration: `${cycle.toFixed(2)}s`,
                  animationDelay: `${delays[j].toFixed(2)}s`,
                }}
              >
                <span
                  className={clsx(
                    'size-2 shrink-0 rounded-full',
                    dotClass[ev.dot]
                  )}
                />
                {ev.label}
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
