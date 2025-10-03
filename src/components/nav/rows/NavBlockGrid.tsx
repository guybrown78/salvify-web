'use client'
import { NavItem } from '@/utils/nav-types'
import clsx from 'clsx'
import Link from 'next/link'
import NavIcon from '../NavIcon'
import NavLinkOrText from '../NavLinkOrText'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import NavRow from './NavRow'

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
        {item.children?.map((contentItem) => (

					<NavRow key={contentItem.name} item={contentItem} onClose={onClose} classNames="" showDescription={false} />

        ))}
      </div>
    </div>
  )
}
