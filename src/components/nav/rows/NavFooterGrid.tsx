'use client'
import { NavItem } from '@/utils/nav-types'
import NavFooterCard from './NavFooterCard'

export default function NavFooterGrid({
  item,
  onClose,
}: {
  item: NavItem
  onClose: () => void
}) {
  return (
    <div className="col-span-2 bg-surface">
      <div className="mx-4 mb-4 mt-1 flex-col p-4">
        <span className="text-md truncate font-semibold">{item.name}</span>
        <div className="mt-2 grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
          {item.children?.map((c) => (
            <NavFooterCard
              key={c.name}
              name={c.name}
              href={c.href}
              image={c.image}
              onClick={onClose}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
