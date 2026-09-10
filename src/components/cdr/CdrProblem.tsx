import {
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineCalculator,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineDocumentDuplicate,
  HiOutlineArchiveBoxXMark,
} from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrCard from './CdrCard'

const problems: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <HiOutlineDocumentMagnifyingGlass className="size-6" aria-hidden="true" />,
    title: "Records that don't hold up",
    body: 'Incomplete or inconsistent entries, and a chain of custody that is hard to prove after the fact.',
  },
  {
    icon: <HiOutlineCalculator className="size-6" aria-hidden="true" />,
    title: 'Balances kept by hand',
    body: 'Running totals maintained manually, with reconciliation done retrospectively rather than as you go.',
  },
  {
    icon: <HiOutlineMapPin className="size-6" aria-hidden="true" />,
    title: 'No view across locations',
    body: 'Limited visibility of controlled drug stock across stores, stations, vehicles and bags.',
  },
  {
    icon: <HiOutlineClock className="size-6" aria-hidden="true" />,
    title: 'Slow when it matters',
    body: 'Discrepancies take time to investigate, and tracing a movement means digging through paper.',
  },
  {
    icon: <HiOutlineDocumentDuplicate className="size-6" aria-hidden="true" />,
    title: 'Duplicated effort',
    body: 'The same information written down more than once, with witness and sign-off adding friction.',
  },
  {
    icon: <HiOutlineArchiveBoxXMark className="size-6" aria-hidden="true" />,
    title: 'Waste that goes unseen',
    body: 'Expired or damaged stock discovered late, on a shift or during an inspection.',
  },
]

const CdrProblem = () => {
  return (
    <CdrSection
      id="cdr-problem"
      eyebrow="Why this matters"
      title="Paper registers weren't built for mobile care"
      lead="Controlled drugs move constantly in pre-hospital care, between stores, stations, vehicles, bags and clinicians, before they are administered or returned. A paper logbook works in a fixed pharmacy. It works badly when the cupboard is a moving vehicle or a bag that gets swapped between crews."
      tone="light"
      align="center"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p) => (
          <CdrCard
            key={p.title}
            icon={p.icon}
            title={p.title}
            accent="danger"
          >
            {p.body}
          </CdrCard>
        ))}
      </div>
    </CdrSection>
  )
}

export default CdrProblem
