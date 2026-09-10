import clsx from 'clsx'
import { HiOutlineLockClosed } from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrList from './CdrList'

const custodyPoints: string[] = [
  'Source and destination recorded for every movement, with the user who performed it',
  'Batch, expiry and quantity retained as stock moves',
  'Movement and custody history retained against the stock itself',
  'Moving a controlled drug uses the same screen as everyday supplies, but the system checks the destination is an approved location and blocks the move if it is not',
]

const nodes: { label: string; tag: string | null }[] = [
  { label: 'Central store', tag: 'CDR-014' },
  { label: 'Station A', tag: null },
  { label: 'Ambulance 3', tag: 'Batch 22B441 · Exp 06/27' },
  { label: 'Response bag', tag: 'Signed out · 12h' },
]

const CustodyPath = () => (
  <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm">
    <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-700">
      Chain of custody
    </p>
    <ol className="relative mt-4 space-y-1 before:absolute before:left-[5px] before:top-3 before:bottom-3 before:w-px before:bg-border before:content-['']">
      {nodes.map((n, i) => (
        <li key={n.label} className="relative flex items-center gap-3 py-2.5">
          <span
            className={clsx(
              'relative z-10 size-2.5 rounded-full',
              i === nodes.length - 1
                ? 'bg-brand-500 ring-4 ring-brand-500/15'
                : 'bg-ink/25'
            )}
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-ink">{n.label}</span>
          {n.tag && (
            <span className="ml-auto rounded-full bg-surface px-2 py-0.5 text-[11px] font-medium text-fg/60">
              {n.tag}
            </span>
          )}
        </li>
      ))}
    </ol>
  </div>
)

const CdrCustody = () => {
  return (
    <CdrSection
      id="cdr-custody"
      eyebrow="Chain of custody"
      title="Know where every controlled drug is"
      lead="Salvify maintains traceability as controlled drugs move between operational holdings: central store to station, station to vehicle, vehicle to bag, bag to clinician, and back again."
      tone="muted"
      aside={<CustodyPath />}
    >
      <div className="max-w-3xl">
        <CdrList items={custodyPoints} columns={2} />
        <p className="mt-6 max-w-2xl border-l-2 border-brand-500 pl-4 font-medium text-ink">
          Salvify retains stock lineage as medicines are moved, split,
          transferred or removed, supporting a clear chain of custody.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm sm:flex-row sm:items-start sm:gap-6 sm:p-9">
        <span
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-surface"
          aria-hidden="true"
        >
          <HiOutlineLockClosed className="size-6" />
        </span>
        <div>
          <h3 className="font-brand text-xl font-extrabold tracking-tight text-ink">
            Sealed pouch and seal workflows
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg/70">
            Salvify&rsquo;s holding and CDR architecture supports configurable
            sealed-pouch and seal-tracking workflows for organisations that
            distribute controlled drugs in grouped custody units: uniquely
            identified pouches, seal identifiers, sealed transfer between
            locations, opening at the destination, and receipting individual
            medicines into the destination register.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg/70">
            Personal and pouch custody sign-out records who is personally
            accountable for a pouch of controlled drugs, and until when.
          </p>
        </div>
      </div>
    </CdrSection>
  )
}

export default CdrCustody
