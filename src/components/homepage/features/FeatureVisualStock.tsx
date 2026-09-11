import clsx from 'clsx'
import FeatureVisualFrame from './FeatureVisualFrame'

/**
 * Illustrates Real-Time Stock Visibility as a live level chart spanning the
 * full width: what's stocked, at a glance, across every holding, with the
 * one that needs attention standing out. Hovering nudges each bar up a
 * step, as if the read just refreshed.
 */
type Bar = { label: string; height: string; hoverHeight: string; warn?: boolean }

const bars: Bar[] = [
  { label: 'Holding 1', height: 'h-7', hoverHeight: 'group-hover:h-8' },
  { label: 'Holding 2', height: 'h-11', hoverHeight: 'group-hover:h-12' },
  { label: 'Holding 3', height: 'h-5', hoverHeight: 'group-hover:h-6', warn: true },
  { label: 'Holding 4', height: 'h-14', hoverHeight: 'group-hover:h-[3.75rem]' },
  { label: 'Holding 5', height: 'h-9', hoverHeight: 'group-hover:h-10' },
]

export default function FeatureVisualStock() {
  return (
    <FeatureVisualFrame>
      <div className="flex h-full flex-col py-6">
        <div className="flex h-6 items-center justify-between gap-2">
          <span className="text-xs font-semibold text-ink">Fleet Stock Levels</span>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-semibold text-success">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-success opacity-0 group-hover:animate-ping group-hover:opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-success" />
            </span>
            Live
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2">
          <div className="flex h-16 items-end">
            {bars.map((bar, i) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center">
                <span
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className={clsx(
                    'w-3.5 rounded-t-full transition-all duration-300 ease-out',
                    bar.height,
                    bar.hoverHeight,
                    bar.warn ? 'bg-warning' : 'bg-brand-500/70'
                  )}
                />
              </div>
            ))}
          </div>

          <div className="flex">
            {bars.map((bar) => (
              <div key={bar.label} className="flex flex-1 justify-center">
                <span
                  className={clsx(
                    'text-[9px] leading-none font-medium whitespace-nowrap',
                    bar.warn ? 'text-warning' : 'text-fg/40'
                  )}
                >
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] font-medium text-fg/50">
            1 holding needs attention
          </p>
        </div>
      </div>
    </FeatureVisualFrame>
  )
}
