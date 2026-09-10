import {
  HiOutlineDevicePhoneMobile,
  HiOutlineDeviceTablet,
  HiOutlineComputerDesktop,
} from 'react-icons/hi2'
import CdrSection from './CdrSection'
import CdrList from './CdrList'

const points: string[] = [
  'Mobile-first, responsive design for phone, tablet, laptop and desktop',
  'Browser-based, and can be added to a supported device home screen, with no app-store dependency for core access',
  'The same workflows whether your team is on base, on the road or working remotely',
]

const devices: { icon: React.ReactNode; label: string }[] = [
  { icon: <HiOutlineDevicePhoneMobile className="size-5" aria-hidden="true" />, label: 'Phone' },
  { icon: <HiOutlineDeviceTablet className="size-5" aria-hidden="true" />, label: 'Tablet' },
  { icon: <HiOutlineComputerDesktop className="size-5" aria-hidden="true" />, label: 'Laptop / desktop' },
]

const FrontlineAside = () => (
  <div className="w-full max-w-md">
    <div className="flex flex-wrap gap-3">
      {devices.map((d) => (
        <span
          key={d.label}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-surface/80"
        >
          <span className="text-brand-300">{d.icon}</span>
          {d.label}
        </span>
      ))}
    </div>
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-300">
        Roadmap
      </span>
      <p className="mt-3 text-sm leading-relaxed text-surface/70">
        Offline support for key frontline controlled-drug workflows, covering
        receipt, administration, waste, stock checks and witnessing, forms part
        of Salvify&rsquo;s product roadmap, for organisations operating where
        connectivity is intermittent.
      </p>
    </div>
  </div>
)

const CdrFrontline = () => {
  return (
    <CdrSection
      id="cdr-frontline"
      eyebrow="Operational use"
      title="Built for frontline use"
      lead="The people using the register are often mid-shift, in a vehicle or at a scene. The interface is built for fast, simple workflows on whatever device is to hand."
      tone="ink"
      decor
      aside={<FrontlineAside />}
    >
      <CdrList items={points} columns={2} variant="ink" />
    </CdrSection>
  )
}

export default CdrFrontline
