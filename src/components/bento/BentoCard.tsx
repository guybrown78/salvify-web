import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Corner = 'tl' | 'tr' | 'bl' | 'br'
type Color = 'surface' | 'surface-muted'

type Span = 1 | 2 | 3 | 4 | 5 | 6

const COL_SPAN_MAP: Record<Span, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
}

const ROW_SPAN_MAP: Record<Span, string> = {
  1: 'lg:row-span-1',
  2: 'lg:row-span-2',
  3: 'lg:row-span-3',
  4: 'lg:row-span-4',
  5: 'lg:row-span-5',
  6: 'lg:row-span-6',
}

interface BentoCardProps {
  children: ReactNode
  /** e.g. 4 means lg:col-span-4 */
  lgColSpan?: Span
  /** e.g. 2 means lg:row-span-2 */
  lgRowSpan?: Span
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
  const col = lgColSpan ? COL_SPAN_MAP[lgColSpan] : ''
  const row = lgRowSpan ? ROW_SPAN_MAP[lgRowSpan] : ''
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
