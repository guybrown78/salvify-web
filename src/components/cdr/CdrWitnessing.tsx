import CdrSection from './CdrSection'
import CdrList from './CdrList'
import CdrWitnessFlow from './CdrWitnessFlow'

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
      <div className="mb-12">
        <CdrWitnessFlow />
      </div>

      <CdrList items={points} columns={2} />
    </CdrSection>
  )
}

export default CdrWitnessing
