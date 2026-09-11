import clsx from 'clsx'
import { ReactNode } from 'react'

type Accent = 'brand' | 'ink' | 'danger' | 'accent' | 'success'
type Variant = 'light' | 'ink'

type Props = {
  icon?: ReactNode
  title: string
  children: ReactNode
  accent?: Accent
  variant?: Variant
  className?: string
}

const iconTile: Record<Accent, string> = {
  brand: 'bg-brand-500/20 text-brand-700',
  ink: 'bg-ink text-surface',
  danger: 'bg-danger/20 text-danger',
  accent: 'bg-accent/20 text-ink',
  success: 'bg-success/15 text-success',
}

const variantStyles: Record<
  Variant,
  { card: string; title: string; body: string }
> = {
  light: {
    card: 'border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl',
    title: 'text-ink',
    body: 'text-fg/70',
  },
  ink: {
    card: 'border-white/10 bg-white/[0.04]',
    title: 'text-white',
    body: 'text-surface/70',
  },
}

/** Icon-tile card used across the Controlled Drug Register page. */
export default function CdrCard({
  icon,
  title,
  children,
  accent = 'brand',
  variant = 'light',
  className,
}: Props) {
  const v = variantStyles[variant]
  return (
    <div
      className={clsx(
        'flex h-full flex-col rounded-2xl border p-6 sm:p-7',
        v.card,
        className
      )}
    >
      {icon && (
        <span
          className={clsx(
            'mb-5 inline-flex size-11 items-center justify-center rounded-xl',
            iconTile[accent]
          )}
        >
          {icon}
        </span>
      )}
      <h3
        className={clsx(
          'font-brand text-lg font-extrabold tracking-tight',
          v.title
        )}
      >
        {title}
      </h3>
      <p className={clsx('mt-2 text-sm leading-relaxed', v.body)}>{children}</p>
    </div>
  )
}
