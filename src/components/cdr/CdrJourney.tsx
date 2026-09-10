import {
  HiOutlineBuildingStorefront,
  HiOutlineBuildingOffice2,
  HiOutlineTruck,
  HiOutlineBriefcase,
  HiOutlineUser,
} from 'react-icons/hi2'
import CdrSection from './CdrSection'

const path = ['Store', 'Station', 'Vehicle', 'Bag / pouch', 'Clinician']

const steps: { icon: React.ReactNode; label: string; note: string }[] = [
  {
    icon: <HiOutlineBuildingStorefront className="size-5" aria-hidden="true" />,
    label: 'Central store',
    note: 'Receipt logged with supplier, batch and expiry. The register balance goes up.',
  },
  {
    icon: <HiOutlineBuildingOffice2 className="size-5" aria-hidden="true" />,
    label: 'Station',
    note: 'An approved controlled-drug location with its own register and running balance.',
  },
  {
    icon: <HiOutlineTruck className="size-5" aria-hidden="true" />,
    label: 'Vehicle',
    note: 'Moving stock uses the same screen as everyday supplies, and transfers are logged in and out.',
  },
  {
    icon: <HiOutlineBriefcase className="size-5" aria-hidden="true" />,
    label: 'Bag / pouch',
    note: 'Personal and pouch custody sign-out records who is accountable, and until when.',
  },
  {
    icon: <HiOutlineUser className="size-5" aria-hidden="true" />,
    label: 'Clinician',
    note: 'Administration is recorded at the point of care and independently witnessed.',
  },
]

const CdrJourney = () => {
  return (
    <CdrSection
      id="cdr-journey"
      eyebrow="The CD journey"
      title="Manage the complete controlled drug journey"
      lead="Each approved location holds its own register for each drug it holds. A station store's morphine register is separate from an ambulance's, which is separate from a response bag's. Every receipt, move, administration, waste and destruction posts to the right register, and the running total updates itself."
      tone="ink"
      align="center"
      decor
    >
      <p className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-brand-300">
        {path.map((w, i) => (
          <span key={w} className="flex items-center gap-3">
            {w}
            {i < path.length - 1 && (
              <span className="text-white/25" aria-hidden="true">
                &rarr;
              </span>
            )}
          </span>
        ))}
      </p>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:items-center lg:text-center"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-brand-500 font-brand text-base font-extrabold text-white ring-[5px] ring-brand-500/15">
              {i + 1}
            </span>
            <span className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-white/5 text-brand-300 ring-1 ring-white/10">
              {s.icon}
            </span>
            <p className="mt-3 font-brand text-base font-extrabold text-white">
              {s.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-surface/60">
              {s.note}
            </p>
          </li>
        ))}
      </ol>
    </CdrSection>
  )
}

export default CdrJourney
