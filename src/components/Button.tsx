import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode, MouseEventHandler } from 'react'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-lg py-2 px-4 text-sm font-brand font-extrabold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-lg py-2 px-4 font-brand font-extrabold text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
		ink:
      'bg-ink text-surface hover:bg-ink/80  hover:text-surface/80 active:bg-ink active:text-white focus-visible:outline-brand-500',
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
		surface:
      'bg-surface text-fg hover:bg-surface-muted  hover:text-fg/80 active:bg-surface active:text-fg focus-visible:outline-brand-500',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
		green: 'bg-brand-500 text-white hover:text-slate-100 hover:bg-brand-500/80 active:bg-brand-500/70 active:text-slate-100 focus-visible:outline-blue-600',
		brand: 'bg-brand-500 text-white hover:text-surface hover:bg-brand-700 active:bg-brand-500/70 active:text-white focus-visible:outline-brand-500',
    white:
      'bg-white text-fg hover:bg-surface active:bg-surface/50 active:text-fg focus-visible:outline-brand-500',
  },
  outline: {
    slate:
      'ring-slate-700 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-slate-600 focus-visible:ring-slate-700',
    white:
      'ring-white text-white hover:ring-slate-200 active:ring-slate-300 active:text-slate-400 focus-visible:outline-white',
		brand:
      'ring-brand-500 text-brand-500 hover:ring-brand-700 hover:text-brand-700 active:ring-brand-700 active:text-brand-700 focus-visible:outline-brand-700',
  },
}

export function Button({
  variant = 'solid',
  color = 'ink',
  className,
  href,
  ...props
}:any) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
		"transition-colors ease-in-out",
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
