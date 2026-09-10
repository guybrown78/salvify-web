import CdrSection from './CdrSection'
import CdrList from './CdrList'

const points: string[] = [
  'UK-hosted infrastructure',
  'Encryption in transit and at rest',
  'Role-based access control and individual authentication',
  'A complete, attributable audit history of register activity',
  'Automated backups and point-in-time recovery',
]

const standards = [
  'DTAC',
  'DSPT',
  'Cyber Essentials',
  'ISO 27001 roadmap',
  'DCB0129 clinical safety',
  'WCAG 2.2 AA',
]

const CdrAssurance = () => {
  return (
    <CdrSection
      id="cdr-assurance"
      eyebrow="Assurance"
      title="Built with healthcare assurance in mind"
      lead="Salvify treats controlled drug data as what it is: a record that has to stand up to inspection."
      tone="ink"
      align="center"
      decor
    >
      <CdrList items={points} columns={2} variant="ink" />

      {/* <div className="mt-10 border-t border-white/10 pt-8">
        <p className="text-sm font-medium text-surface/70">
          Working towards
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {standards.map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-surface/80"
            >
              {s}
            </li>
          ))}
        </ul>
      </div> */}
    </CdrSection>
  )
}

export default CdrAssurance
