import clsx from 'clsx'
import React from 'react'

export type SimpleHoldingCardProps = {
  title: string
  subtitle?: string
  className?: string
}

export const SimpleHoldingCard = React.forwardRef<
  HTMLDivElement,
  SimpleHoldingCardProps
>(function SimpleHoldingCard({ title, subtitle, className }, ref) {
  return <div
      ref={ref}
      className={clsx(
        'rounded-full bg-surface py-2 px-10 shadow-sm ring-1 ring-white/40',
        className || '',
			)}
      role="group"
      aria-label={title}
    >
			<div className="flex items-center gap-3 text-center text-fg">
        <div>
          <h4 className="text-sm font-extrabold">{title}</h4>
          {subtitle && <p className="text-xs">{subtitle}</p>}
        </div>
      </div>
		</div>
})
