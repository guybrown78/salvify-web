import clsx from 'clsx'

type Dot = 'success' | 'brand' | 'accent'
type Ev = { label: string; dot: Dot }

/**
 * "Live activity" chips that float around the hero register card. Pure CSS: each
 * slot sits at a corner and holds three chips on one staggered animation, so a
 * chip fades in, holds, fades out, and the next chip in that slot takes over.
 * Slots run on different cycle lengths so they never sync up. Purely
 * illustrative, so the whole thing stays out of the accessibility tree.
 */
type Slot = {
  anchor: string
  chip: string
  cycle: number
  offset: number
  events: Ev[]
}

const slots: Slot[] = [
  {
    // top-left, hanging off the edge
    anchor: '-left-4 top-8 xl:-left-12',
    chip: 'left-0 top-0',
    cycle: 10.4,
    offset: 1.8,
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
    cycle: 11.6,
    offset: 3.4,
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
    cycle: 9.8,
    offset: 4.6,
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

export default function CdrHeroAlert() {
  return (
    <>
      {slots.map((slot) => (
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
                animationDuration: `${slot.cycle}s`,
                animationDelay: `${(slot.offset + (j * slot.cycle) / slot.events.length).toFixed(2)}s`,
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
      ))}
    </>
  )
}
