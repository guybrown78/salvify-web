import clsx from 'clsx'
import CdrSection from './CdrSection'
import CdrList from './CdrList'
import CdrRegisterPreview from './CdrRegisterPreview'

const registerPoints: string[] = [
  'Register-based CD management with automatic running balances',
  'An append-only ledger, so submitted entries are not overwritten',
  'Corrections handled through linked amendments and addenda, with the original always visible',
  'Every entry attributed to an individual user, with date and time',
  'Register-level controls and a full activity history',
]

type Kind = 'in' | 'out' | 'neutral'
const transactions: { label: string; kind: Kind }[] = [
  { label: 'Receipt', kind: 'in' },
  { label: 'Issue', kind: 'out' },
  { label: 'Transfer in', kind: 'in' },
  { label: 'Transfer out', kind: 'out' },
  { label: 'Administration', kind: 'out' },
  { label: 'Waste', kind: 'out' },
  { label: 'Destruction', kind: 'out' },
  { label: 'Stock check', kind: 'neutral' },
  { label: 'Discrepancy adjustment', kind: 'neutral' },
  { label: 'Correction / addendum', kind: 'neutral' },
]

const dot: Record<Kind, string> = {
  in: 'bg-success',
  out: 'bg-danger',
  neutral: 'bg-brand-500',
}

const CdrRegister = () => {
  return (
    <CdrSection
      id="cdr-register"
      eyebrow="The register"
      title="A controlled drug register that moves with your operation"
      lead="Each register is a real, countable thing with its own running balance. Nothing is erased or edited. If someone makes a mistake, they add a correction, and both the mistake and the correction stay visible, exactly like crossing something out in a paper book rather than using an eraser."
      tone="light"
      aside={<CdrRegisterPreview />}
    >
      <CdrList items={registerPoints} columns={2} />

      <div className="mt-14 rounded-2xl border border-border bg-surface/40 p-7 sm:p-9">
        <h3 className="font-brand text-xl font-extrabold tracking-tight text-ink">
          Every CD transaction, categorised
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg/70">
          Stock reductions are categorised by reason, whether administration,
          damage, expiry, transfer, waste or destruction, so every movement is
          traceable and reportable, not just recorded.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {transactions.map((t) => (
            <li
              key={t.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm"
            >
              <span
                className={clsx('size-1.5 rounded-full', dot[t.kind])}
                aria-hidden="true"
              />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </CdrSection>
  )
}

export default CdrRegister
