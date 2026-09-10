import { HiArrowUpRight } from 'react-icons/hi2'
import CdrSection from './CdrSection'

const benefits: string[] = [
  'Stronger CD governance and central oversight',
  'Real-time visibility of stock across locations',
  'A clearer, provable chain of custody',
  'Faster discrepancy investigation',
  'Less paperwork and fewer duplicated records',
  'Greater confidence in running balances',
  'Better visibility of expiry and stock movement',
  'Improved audit and inspection readiness',
  'Clearer witness records',
  'Reduced operational burden on frontline and governance teams',
]

const CdrBenefits = () => {
  return (
    <CdrSection
      id="cdr-benefits"
      eyebrow="Outcomes"
      title="What changes with Salvify"
      lead="Stronger governance, less paperwork, and a clearer picture of every controlled drug in every location."
      tone="light"
      align="center"
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {benefits.map((b) => (
          <li
            key={b}
            className="group flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 shadow-sm transition-colors hover:border-brand-500/40"
          >
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/12 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
              <HiArrowUpRight className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-ink">{b}</span>
          </li>
        ))}
      </ul>
    </CdrSection>
  )
}

export default CdrBenefits
