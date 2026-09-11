import { HiCheckCircle, HiOutlineUserGroup, HiOutlineLockClosed } from 'react-icons/hi2'
import FeatureVisualFrame from './FeatureVisualFrame'

/**
 * Illustrates MakeReady Shift Checklists: a bag that's fully ready, controlled
 * drugs dual-signed included. Resting state is the finished, reassuring
 * picture; hovering just lifts each row and the ready badge.
 */
const items = ['Airway kit', 'IV fluids and syringes']

export default function FeatureVisualChecklist() {
  return (
    <FeatureVisualFrame>
      <ul className="space-y-1.5">
        {items.map((label, i) => (
          <li
            key={label}
            style={{ transitionDelay: `${i * 80}ms` }}
            className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
          >
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-success bg-success text-white transition-transform duration-300 ease-out group-hover:scale-110">
              <HiCheckCircle className="size-3.5" aria-hidden="true" />
            </span>
            <span className="font-medium text-ink">{label}</span>
          </li>
        ))}

        <li
          style={{ transitionDelay: '160ms' }}
          className="flex items-center justify-between gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
        >
          <span className="flex items-center gap-2 font-medium text-ink">
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-success bg-success text-white transition-transform duration-300 ease-out group-hover:scale-110">
              <HiCheckCircle className="size-3.5" aria-hidden="true" />
            </span>
            Controlled drugs
          </span>
          <span className="flex items-center gap-1 text-fg/50">
            <HiOutlineUserGroup className="size-3.5" aria-hidden="true" />
            Dual signed
          </span>
        </li>
      </ul>

      <div
        style={{ transitionDelay: '220ms' }}
        className="mt-3 flex items-center justify-center gap-1.5 rounded-md bg-success/15 py-1.5 text-[11px] font-semibold text-success transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
      >
        <HiOutlineLockClosed className="size-3.5" aria-hidden="true" />
        Shift ready
      </div>
    </FeatureVisualFrame>
  )
}
