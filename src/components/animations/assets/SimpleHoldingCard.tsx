import clsx from 'clsx'
import React from 'react'

export type SimpleHoldingCardProps = {
  title: string
  subtitle?: string
  className?: string
	leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
}

export const SimpleHoldingCard = React.forwardRef<
  HTMLDivElement,
  SimpleHoldingCardProps
>(function SimpleHoldingCard({ title, subtitle, className, leftSlot, rightSlot }, ref) {
  return <div
      ref={ref}
      className={clsx(
        'rounded-lg bg-surface py-2 px-6 shadow-sm ring-1 ring-white/40 flex items-center transition-all ease-in duration-300',
        className || '',
			)}
      role="group"
      aria-label={title}
    >
			{leftSlot}
			<div className="flex items-center gap-3 text-center text-fg">
        <div>
          <h4 className="text-sm font-extrabold">{title}</h4>
          {subtitle && <p className="text-xs">{subtitle}</p>}
        </div>
      </div>
			{rightSlot}
		</div>
})
