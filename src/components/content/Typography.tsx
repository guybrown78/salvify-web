
import clsx from 'clsx'
import React, { ReactNode } from 'react'

type CopyColor = 'auto' | 'ink' | 'muted' | 'brand'
type CopySize = 'sm' | 'base' | 'lg'
type Gap = 'sm' | 'md' | 'lg'

const copyColor = {
	auto: 'text-fg',
  ink: 'text-ink',
  muted: 'text-surface-muted',
  brand: 'text-brand-500',
} satisfies Record<CopyColor, string>

const copySize = {
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed sm:text-xl',
} satisfies Record<CopySize, string>

interface ContentPProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  color?: CopyColor
  size?: CopySize
}

export const ContentP = ({
  children,
  color = 'auto',
  size = 'base',
  className,
  ...props
}: ContentPProps) => (
  <p
    className={clsx('mt-3 text-pretty last:mb-4', copyColor[color], copySize[size], className)}
    {...props}
  >
    {children}
  </p>
)

interface ContentStackProps {
  children: ReactNode
  gap?: Gap
  className?: string
}

/** Vertical rhythm for mixed copy blocks (p, lists, etc.) */
export const ContentStack = ({ children, gap = 'md', className }: ContentStackProps) => {
  const gaps = {
    sm: 'space-y-2 sm:space-y-3',
    md: 'space-y-3 sm:space-y-4',
    lg: 'space-y-4 sm:space-y-6',
  } as const
  return <div className={clsx(gaps[gap], className)}>{children}</div>
}
