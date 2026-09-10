import { HiOutlineUser, HiOutlineUserGroup, HiCheckCircle } from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrList from './CdrList'

const points: string[] = [
  'Independent second-person witnessing across controlled drug events',
  'Witness permission is separate from permission to administer, so a witness does not need to be authorised to give the drug',
  'Every user has an individual, authenticated account; shared logins are not used',
  'The acting user and the witness are both recorded, with date and time',
  'Witnessed activity is retained in the audit record',
  'Which events require a witness is configurable, so routine, low-risk activity stays quick to record',
]

const CdrWitnessing = () => {
  return (
    <CdrSection
      id="cdr-witnessing"
      eyebrow="Witnessing"
      title="Independent witnessing, without unnecessary complexity"
      lead="Controlled drug events can be independently witnessed. A second eligible person signs in with their own account and confirms what they saw, the same two-person principle a paper register requires."
      tone="light"
      align="center"
    >
      <div className="mb-12 flex flex-col items-stretch gap-4 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
          <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-500/12 text-brand-700">
            <HiOutlineUser className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-ink">
              Acting user
            </span>
            <span className="block text-xs text-fg/60">
              Records the event · own account
            </span>
          </span>
        </div>

        <span
          className="mx-auto font-mono text-sm text-fg/40 sm:mx-0"
          aria-hidden="true"
        >
          +
        </span>

        <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
          <span className="inline-flex size-10 items-center justify-center rounded-lg bg-ink text-surface">
            <HiOutlineUserGroup className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-ink">Witness</span>
            <span className="block text-xs text-fg/60">
              Separate permission · own account
            </span>
          </span>
        </div>

        <span className="flex items-center gap-2 rounded-xl bg-success/10 px-4 py-3 text-sm font-semibold text-success">
          <HiCheckCircle className="size-5" aria-hidden="true" />
          Recorded together
        </span>
      </div>

      <CdrList items={points} columns={2} />
    </CdrSection>
  )
}

export default CdrWitnessing
