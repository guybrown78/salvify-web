import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Corner = 'tl' | 'tr' | 'bl' | 'br'
type Color = 'surface' | 'surface-muted'

interface BentoCardProps {
  children: ReactNode
  /** e.g. 4 means lg:col-span-4 */
  lgColSpan?: number
  /** e.g. 2 means lg:row-span-2 */
  lgRowSpan?: number
  /** Add outer padding “frame” like Tailwind’s examples */
  outerPad?: boolean
  /** Corner rounding at lg (applied to inner card): choose any corners to round to 4xl */
  roundedLg?: Corner[]
  /** Extra classes for outer wrapper (the flex + p-px) */
  outerClassName?: string
  /** Extra classes for the inner card container */
  innerClassName?: string
  /** Background class (default white card) */
  bgClassName?: string
  /** Whether this is top-most on small screens (applies max-lg rounded helpers) */
  smallTop?: boolean
  /** Whether this is bottom-most on small screens (applies max-lg rounded helpers) */
  smallBottom?: boolean
	/** Surface colour style (default: surface-muted) */
  color?: Color
}
const BentoCard = ({
  children,
  lgColSpan,
  lgRowSpan,
  outerPad = true,
  roundedLg = [],
  outerClassName,
  innerClassName,
  bgClassName,
  smallTop,
  smallBottom,
	color = 'surface-muted',
}: BentoCardProps) => {
  //
  const col = lgColSpan ? `lg:col-span-${lgColSpan}` : ''
  const row = lgRowSpan ? `lg:row-span-${lgRowSpan}` : ''
  const outer = clsx('flex', outerPad && 'p-px', col, row, outerClassName)

  const baseRound = 'rounded-lg'
  const cornerMap: Record<Corner, string> = {
    tl: 'lg:rounded-tl-4xl',
    tr: 'lg:rounded-tr-4xl',
    bl: 'lg:rounded-bl-4xl',
    br: 'lg:rounded-br-4xl',
  }
  const lgCorners = roundedLg.map((c) => cornerMap[c])

  const smallEdge = clsx(
    smallTop && 'max-lg:rounded-t-4xl',
    smallBottom && 'max-lg:rounded-b-4xl'
  )

	  // Determine background from color or explicit bgClassName
  const resolvedBg =
    bgClassName ||
    (color === 'surface'
      ? 'bg-surface/50'
      : 'bg-surface-muted/50')


	const resolvedOutline = color === 'surface'
      ? 'outline outline-surface'
      : 'outline outline-surface-muted'

  const inner = clsx(
    'w-full overflow-hidden shadow-sm',
    baseRound,
   	resolvedBg,
		resolvedOutline,
    smallEdge,
    lgCorners,
    innerClassName
  )

  return (
    <div className={outer}>
      <div className={inner}>{children}</div>
    </div>
  )
}

export default BentoCard
