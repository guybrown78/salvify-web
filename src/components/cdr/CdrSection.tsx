import clsx from 'clsx'
import { ReactNode } from 'react'
import { Container } from '../Container'

export type CdrTone = 'light' | 'muted' | 'ink'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: string
  tone?: CdrTone
  /** Soft brand glow behind the section content. */
  decor?: boolean
  /** Centre the header block (best for full-width card grids). */
  align?: 'left' | 'center'
  /** Visual rendered beside the header on large screens. */
  aside?: ReactNode
  className?: string
  children?: ReactNode
}

const toneStyles: Record<
  CdrTone,
  { section: string; eyebrow: string; heading: string; lead: string }
> = {
  light: {
    section: 'bg-white',
    eyebrow: 'border-border bg-surface/60 text-ink',
    heading: 'text-ink',
    lead: 'text-fg/70',
  },
  muted: {
    section: 'bg-surface/50',
    eyebrow: 'border-border bg-white text-ink',
    heading: 'text-ink',
    lead: 'text-fg/70',
  },
  ink: {
    section: 'bg-ink',
    eyebrow: 'border-white/15 bg-white/5 text-surface/80',
    heading: 'text-white',
    lead: 'text-surface/70',
  },
}

/**
 * Section shell for the Controlled Drug Register page: pill eyebrow, a large
 * display heading, an optional lead paragraph, and a tone-aware background.
 */
export default function CdrSection({
  id,
  eyebrow,
  title,
  lead,
  tone = 'light',
  decor = false,
  align = 'left',
  aside,
  className,
  children,
}: Props) {
  const s = toneStyles[tone]
  const centered = align === 'center' && !aside

  const header = (
    <div className={clsx(centered && 'mx-auto max-w-2xl text-center')}>
      <span
        className={clsx(
          'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide',
          s.eyebrow
        )}
      >
        <span className="size-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </span>

      <h2
        className={clsx(
          'mt-5 font-brand text-3xl font-extrabold tracking-tight text-pretty sm:text-4xl lg:text-5xl',
          !aside && !centered && 'max-w-3xl',
          centered && 'mx-auto max-w-3xl',
          s.heading
        )}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={clsx(
            'mt-5 text-lg leading-relaxed',
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl',
            s.lead
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )

  return (
    <section
      id={id}
      aria-label={typeof title === 'string' ? title : eyebrow}
      className={clsx('relative overflow-hidden', s.section, className)}
    >
      {decor && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-500/10 blur-3xl"
        />
      )}

      <Container className="relative py-20 sm:py-28">
        {aside ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {header}
            <div className="lg:justify-self-end">{aside}</div>
          </div>
        ) : (
          header
        )}

        {children && <div className="mt-12 sm:mt-16">{children}</div>}
      </Container>
    </section>
  )
}
