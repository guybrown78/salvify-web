import { HiOutlineLockClosed } from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrList from './CdrList'
import CdrCustodyPath from './CdrCustodyPath'

const custodyPoints: string[] = [
  'Source and destination recorded for every movement, with the user who performed it',
  'Batch, expiry and quantity retained as stock moves',
  'Movement and custody history retained against the stock itself',
  'Moving a controlled drug uses the same screen as everyday supplies, but the system checks the destination is an approved location and blocks the move if it is not',
]

const CdrCustody = () => {
  return (
    <CdrSection
      id="cdr-custody"
      eyebrow="Chain of custody"
      title="Know where every controlled drug is"
      lead="Salvify maintains traceability as controlled drugs move between operational holdings: central store to station, station to vehicle, vehicle to bag, bag to clinician, and back again."
      tone="muted"
      aside={<CdrCustodyPath />}
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
