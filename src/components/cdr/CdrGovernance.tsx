import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineEye,
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrList from './CdrList'
import CdrCard from './CdrCard'

const checkPoints: string[] = [
  'Mismatches create a discrepancy record that has to be investigated and resolved before it can be closed',
  'Balances cannot be quietly adjusted to make the numbers match',
  'Investigation status is tracked, and resolution stays auditable',
  'Governance teams can see unresolved discrepancies across every location',
  'Expired and expiring controlled drug stock is surfaced on a dashboard, not discovered by chance',
]

const states = ['Open', 'Under investigation', 'Resolved']

const roles: {
  eyebrow: string
  title: string
  desc: string
  icon: React.ReactNode
  accent: 'brand' | 'ink' | 'accent' | 'success'
}[] = [
  {
    eyebrow: 'Frontline',
    title: 'Frontline users',
    desc: 'See relevant CD stock and register activity, complete required transactions, and perform stock checks.',
    icon: <HiOutlineClipboardDocumentCheck className="size-6" aria-hidden="true" />,
    accent: 'brand',
  },
  {
    eyebrow: 'Local',
    title: 'Local managers',
    desc: 'View activity, identify discrepancies, and see overdue or exception items for their area.',
    icon: <HiOutlineEye className="size-6" aria-hidden="true" />,
    accent: 'ink',
  },
  {
    eyebrow: 'Governance',
    title: 'Medicines governance teams',
    desc: 'Organisation-wide oversight, with the ability to drill into any location or register and review activity, discrepancies, expiry and movement history.',
    icon: <HiOutlineUserGroup className="size-6" aria-hidden="true" />,
    accent: 'success',
  },
  {
    eyebrow: 'Accountable Officer',
    title: 'Controlled Drug Accountable Officer',
    desc: 'Central oversight of discrepancies, expiry, stock position and audit history across every location.',
    icon: <HiOutlineShieldCheck className="size-6" aria-hidden="true" />,
    accent: 'accent',
  },
]

const DiscrepancyCard = () => (
  <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm">
    <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-700">
      Discrepancy lifecycle
    </p>
    <ol className="mt-5 space-y-3">
      {states.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span className="inline-flex size-6 items-center justify-center rounded-full bg-ink text-xs font-bold text-surface">
            {i + 1}
          </span>
          <span className="text-sm font-medium text-ink">{s}</span>
        </li>
      ))}
    </ol>
    <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-fg/55">
      Investigation notes are append-only. A resolution is either explained or
      adjusted, and it stays on the record either way.
    </p>
  </div>
)

const CdrGovernance = () => {
  return (
    <CdrSection
      id="cdr-governance"
      eyebrow="Checks and oversight"
      title="Stock checks, discrepancies and governance"
      lead="Physical stock can be checked against the recorded balance at any time. When they don't match, Salvify won't let anyone quietly adjust the number. It opens a formal investigation that has to be written up and resolved."
      tone="muted"
      aside={<DiscrepancyCard />}
    >
      <div className="max-w-3xl">
        <CdrList items={checkPoints} columns={2} />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fg/60">
          Configurable reminders and exception alerts can support scheduled stock
          checks and discrepancy follow-up as part of Salvify&rsquo;s roadmap;
          today, outstanding items are surfaced whenever someone opens the
          dashboard.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="font-brand text-xl font-extrabold tracking-tight text-ink">
          Oversight for every level of responsibility
        </h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <CdrCard
              key={r.title}
              icon={r.icon}
              title={r.title}
              accent={r.accent}
            >
              {r.desc}
            </CdrCard>
          ))}
        </div>
      </div>
    </CdrSection>
  )
}

export default CdrGovernance
