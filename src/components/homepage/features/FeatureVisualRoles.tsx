import { HiOutlineKey } from 'react-icons/hi2'
import FeatureVisualFrame from './FeatureVisualFrame'

/**
 * Illustrates Role-Based Access Control: all three tiers shown at once as a
 * staircase of granted permissions, so the concept reads without needing
 * motion. Hovering just lifts each row in sequence.
 */
type Role = { name: string; perms: string[] }

const roles: Role[] = [
  { name: 'Paramedic', perms: ['View'] },
  { name: 'Team Lead', perms: ['View', 'Adjust'] },
  { name: 'Ops Manager', perms: ['View', 'Adjust', 'Authorise'] },
]

export default function FeatureVisualRoles() {
  return (
    <FeatureVisualFrame>
      <ul className="space-y-1.5">
        {roles.map((role, i) => (
          <li
            key={role.name}
            style={{ transitionDelay: `${i * 70}ms` }}
            className="flex items-center justify-between gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
          >
            <span className="shrink-0 font-medium text-ink">{role.name}</span>
            <span className="flex flex-wrap items-center justify-end gap-1">
              {role.perms.map((perm) => (
                <span
                  key={perm}
                  className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-medium text-brand-700"
                >
                  {perm}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-fg/50">
        <HiOutlineKey className="size-3.5 shrink-0" aria-hidden="true" />
        Every action linked to a named account
      </div>
    </FeatureVisualFrame>
  )
}
