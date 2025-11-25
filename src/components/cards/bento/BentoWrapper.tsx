import React, { ReactNode } from 'react'
import clsx from 'clsx'


interface BentoWrapperProps {
  children: ReactNode
  className?: string
  /** Gap between cards (default: gap-4) */
  gapClassName?: string
  /** Base grid cols (default: 1) */
  baseCols?: number
  /** Large breakpoint columns (default: 6) */
  lgCols?: number
  /** Large breakpoint rows (optional, e.g. 2) */
  lgRows?: number
  /** Top/bottom margin presets (default: mt-10 sm:mt-16) */
  marginClassName?: string
}


const BentoWrapper = ({
  children,
  className,
  gapClassName = 'gap-4',
  baseCols = 1,
  lgCols = 6,
  lgRows,
  marginClassName = 'mt-10 sm:mt-16',
}: BentoWrapperProps) => {
	const gridBase = `grid grid-cols-${baseCols}`
  const gridLgCols = `lg:grid-cols-${lgCols}`
  const gridLgRows = lgRows ? `lg:grid-rows-${lgRows}` : ''
  return (
    <div className={clsx(marginClassName, gridBase, gapClassName, gridLgCols, gridLgRows, className)}>
      {children}
    </div>
  )
}

export default BentoWrapper