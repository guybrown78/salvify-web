import clsx from 'clsx'
import FeatureVisualFrame from './FeatureVisualFrame'

/**
 * Illustrates Automated Expiry & Batch Alerts as a timeline: today on the
 * left, each batch plotted at its real distance from expiry. The near one
 * is the point of the card. Hovering rings the urgent marker.
 */
type Point = { label: string; pos: string; warn?: boolean }

const points: Point[] = [
  { label: '12 days', pos: '20%', warn: true },
  { label: '58 days', pos: '56%' },
  { label: '164 days', pos: '92%' },
]

export default function FeatureVisualExpiry() {
  return (
    <FeatureVisualFrame>
      <div className="flex h-full flex-col py-6">
        <div className="flex h-6 items-center justify-between gap-2">
          <span className="text-xs font-semibold text-ink">Batch Alerts</span>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-warning/15 px-2.5 py-1 text-[11px] font-semibold text-warning">
            1 due soon
          </span>
        </div>

        <div className="flex flex-1 items-center">
          <div className="relative h-12 w-full">
            <span className="absolute top-0 left-0 text-[10px] font-semibold tracking-wide text-fg/40 uppercase">
              Today
            </span>
            <span className="absolute top-4 left-0 h-px w-full bg-border" aria-hidden="true" />
            <span
              className="absolute top-4 left-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
              aria-hidden="true"
            />

            {points.map((point, i) => (
              <span
                key={point.label}
                className="absolute top-4 -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.pos }}
              >
                <span
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className={clsx(
                    'relative block size-2.5 rounded-full ring-4 ring-surface-muted transition-transform duration-300 ease-out group-hover:scale-125',
                    point.warn ? 'bg-warning' : 'bg-brand-500/60'
                  )}
                >
                  {point.warn && (
                    <span
                      className="absolute inset-0 rounded-full bg-warning opacity-0 group-hover:animate-ping group-hover:opacity-75"
                      aria-hidden="true"
                    />
                  )}
                </span>
                <span
                  className={clsx(
                    'absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap',
                    point.warn ? 'text-warning' : 'text-fg/40'
                  )}
                >
                  {point.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </FeatureVisualFrame>
  )
}
