import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrList from './CdrList'

const points: Array<string | { term: string; detail: string }> = [
  'REST APIs for stock lookup and usage recording, so clinical and ePRF systems do not duplicate data entry',
  'Structured dm+d / SNOMED CT identifiers on medicines, for catalogue mapping and interoperability',
  'Batch and expiry captured at the level of each individual stock instance',
  {
    term: 'FHIR and HL7',
    detail:
      'interoperability can be supported where required through customer integration projects.',
  },
]

const targets = [
  'Pharmacy stock systems',
  'ePRF systems',
  'Identity providers',
  'Reporting and data platforms',
]

const IntegrationAside = () => (
  <div className="w-full max-w-md rounded-2xl border border-border bg-surface/40 p-6 shadow-sm">
    <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-700">
      Potential integrations
    </p>
    <ul className="mt-4 space-y-2.5">
      {targets.map((t) => (
        <li
          key={t}
          className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm"
        >
          <span className="text-brand-700">
            <HiOutlineArrowsRightLeft className="size-5" aria-hidden="true" />
          </span>
          {t}
        </li>
      ))}
    </ul>
  </div>
)

const CdrIntegration = () => {
  return (
    <CdrSection
      id="cdr-integration"
      eyebrow="Connected"
      title="Integration and medicines data"
      lead="Salvify has an API-led integration architecture, so controlled drug management connects to the systems your organisation already relies on rather than standing apart from them."
      tone="light"
      aside={<IntegrationAside />}
    >
      <CdrList items={points} columns={2} />
    </CdrSection>
  )
}

export default CdrIntegration
