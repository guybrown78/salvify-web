'use client'
import { NavItem } from '@/utils/nav-types'
import clsx from 'clsx'
import Link from 'next/link'
import NavIcon from '../NavIcon'

export default function NavBlockGrid({
  item,
  onClose,
  classNames,
}: {
  item: NavItem
  onClose: () => void
  classNames?: string
}) {
  return (
    <div className={clsx('col-span-2 p-4', classNames)}>
      <span className="text-md truncate font-semibold">{item.name}</span>
      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
        {item.children?.map((c) => (
          <Link
            key={c.name}
            href={c.href || '#'}
            onClick={onClose}
            className="group cursor-pointer"
          >
            <div className="relative flex items-center gap-x-6 rounded-lg p-1 transition-colors hover:bg-gray-50">
              <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-white">
                <NavIcon icon={c.icon} />
              </div>
              <div className="group/link rounded font-semibold focus-visible:ring-2 focus-visible:ring-teal-500">
                <span className="truncate">{c.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
