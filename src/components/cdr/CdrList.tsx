import clsx from 'clsx'
import { HiCheck } from 'react-icons/hi2'

type Item = string | { term: string; detail: string }

type Props = {
  items: Item[]
  columns?: 1 | 2
  variant?: 'light' | 'ink'
  className?: string
}

const textColor = { light: 'text-fg/80', ink: 'text-surface/75' }
const termColor = { light: 'text-ink', ink: 'text-white' }

/** Check-marked list used across the Controlled Drug Register page. */
export default function CdrList({
  items,
  columns = 1,
  variant = 'light',
  className,
}: Props) {
  return (
    <ul
      className={clsx(
        'grid gap-x-10 gap-y-4',
        columns === 2 && 'sm:grid-cols-2',
        className
      )}
    >
      {items.map((item, i) => {
        const term = typeof item === 'string' ? null : item.term
        const detail = typeof item === 'string' ? item : item.detail
        return (
          <li key={i} className="flex gap-3">
            <span
              className={clsx(
                'mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full',
                variant === 'ink'
                  ? 'bg-brand-500/20 text-brand-300'
                  : 'bg-brand-500/12 text-brand-700'
              )}
            >
              <HiCheck className="size-3.5" aria-hidden="true" />
            </span>
            <span className={clsx('leading-relaxed', textColor[variant])}>
              {term && (
                <strong className={clsx('font-semibold', termColor[variant])}>
                  {term}.{' '}
                </strong>
              )}
              {detail}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
