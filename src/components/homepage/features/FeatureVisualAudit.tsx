import {
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineUser,
  HiCheckCircle,
} from 'react-icons/hi2'
import FeatureVisualFrame from './FeatureVisualFrame'

/**
 * Illustrates the Complete Audit Trail as a physical journey: where one
 * medicine has actually been, store to patient, fully traced. Hovering
 * brightens the path and lifts each waypoint in sequence.
 */
const stops = [
  { icon: HiOutlineBuildingStorefront, label: 'Store' },
  { icon: HiOutlineTruck, label: 'Vehicle' },
  { icon: HiOutlineUser, label: 'Patient' },
]

export default function FeatureVisualAudit() {
  return (
    <FeatureVisualFrame>
      <div className="flex h-full flex-col py-6">
        <div className="flex h-6 items-center">
          <span className="text-xs font-semibold text-ink">Adrenaline 1mg/10ml</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <div className="relative flex w-full items-start justify-between px-1">
            <span
              className="absolute top-[13px] right-[13px] left-[13px] h-px border-t border-dashed border-border transition-colors duration-500 ease-out group-hover:border-brand-500/50"
              aria-hidden="true"
            />
            {stops.map((stop, i) => {
              const Icon = stop.icon
              return (
                <div key={stop.label} className="relative flex flex-col items-center gap-2">
                  <span
                    style={{ transitionDelay: `${i * 100}ms` }}
                    className="relative z-10 flex size-[26px] items-center justify-center rounded-full bg-white text-ink shadow-sm ring-1 ring-border transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-medium text-fg/50">{stop.label}</span>
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-success">
            <HiCheckCircle className="size-3.5" aria-hidden="true" />
            Fully traced · 11:47
          </div>
        </div>
      </div>
    </FeatureVisualFrame>
  )
}
