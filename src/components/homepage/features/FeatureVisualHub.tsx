import { ReactNode } from 'react'
import clsx from 'clsx'

/**
 * Shared hub-and-spoke illustration: a single emphasized centre node
 * connected by a soft line to two flanking icons, with a short caption
 * underneath. This is the pattern established by the Interoperability card
 * and reused across the feature grid for a consistent, iconographic feel.
 */
type Props = {
  left: ReactNode
  right: ReactNode
  center: ReactNode
  caption: string
  centerClassName?: string
}

export default function FeatureVisualHub({
  left,
  right,
  center,
  caption,
  centerClassName,
}: Props) {
  return (
    <>
      <div className="relative flex items-center justify-center gap-6">
        <span
          className="absolute top-1/2 left-1/2 h-px w-full max-w-[220px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent transition-colors duration-500 ease-out group-hover:via-brand-500/50"
          aria-hidden="true"
        />

        <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-fg/60 shadow-sm ring-1 ring-border transition-transform duration-300 ease-out group-hover:translate-x-1.5">
          {left}
        </span>

        <span
          className={clsx(
            'relative flex size-12 shrink-0 items-center justify-center rounded-full text-surface shadow-md ring-4 ring-white',
            centerClassName ?? 'bg-ink'
          )}
        >
          <span
            className="absolute inset-0 rounded-full bg-brand-500/30 opacity-0 group-hover:animate-ping group-hover:opacity-100"
            aria-hidden="true"
          />
          <span className="relative">{center}</span>
        </span>

        <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-fg/60 shadow-sm ring-1 ring-border transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
          {right}
        </span>
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-fg/50">{caption}</p>
    </>
  )
}
