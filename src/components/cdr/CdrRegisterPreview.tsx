import clsx from 'clsx'

type Kind = 'in' | 'out' | 'check'

const entries: { label: string; meta: string; qty: string; kind: Kind }[] = [
  { label: 'Receipt', meta: 'Batch 22B441 · Central store', qty: '+10', kind: 'in' },
  { label: 'Transfer out', meta: 'Ambulance 3 · witnessed', qty: '−4', kind: 'out' },
  { label: 'Administration', meta: 'PRF 48213 · acting + witness', qty: '−2', kind: 'out' },
  { label: 'Waste', meta: 'Damaged ampoule · reason logged', qty: '−1', kind: 'out' },
  { label: 'Stock check', meta: 'Balance confirmed', qty: '=', kind: 'check' },
]

const dot: Record<Kind, string> = {
  in: 'bg-success',
  out: 'bg-danger',
  check: 'bg-brand-500',
}

const qtyColor: Record<Kind, string> = {
  in: 'text-success',
  out: 'text-danger',
  check: 'text-fg/40',
}

type Props = { className?: string }

/**
 * Illustrative controlled-drug register card. Static, styled with Tailwind
 * tokens, not a data component. Reused on the homepage and the CDR page.
 */
export default function CdrRegisterPreview({ className }: Props) {
  return (
    <div
      className={clsx(
        'w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-xl ring-1 ring-black/5',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-700">
            CDR-014
          </p>
          <p className="mt-1.5 font-brand text-base font-extrabold text-ink">
            Morphine sulfate 10mg/ml
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-fg/70">
            <span className="size-1.5 rounded-full bg-accent" />
            Schedule 2 · Ambulance 3
          </span>
        </div>
        <div className="shrink-0 rounded-xl bg-brand-500/10 px-3 py-2 text-right">
          <p className="text-[11px] font-medium uppercase tracking-wide text-brand-700">
            Balance
          </p>
          <p className="font-brand text-2xl font-extrabold leading-none text-brand-700">
            3
          </p>
        </div>
      </div>

      <ul className="mt-5 space-y-1">
        {entries.map((e) => (
          <li
            key={e.label}
            className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-surface/60"
          >
            <span className={clsx('size-2 shrink-0 rounded-full', dot[e.kind])} />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-ink">
                {e.label}
              </span>
              <span className="block truncate text-xs text-fg/55">{e.meta}</span>
            </span>
            <span
              className={clsx(
                'font-mono text-sm font-semibold tabular-nums',
                qtyColor[e.kind]
              )}
            >
              {e.qty}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-fg/55">
        Append-only. Corrections are added as linked addenda, so the original
        entry always stays visible.
      </p>
    </div>
  )
}
