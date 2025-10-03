'use client'
import { NavItem } from '@/utils/nav-types'
import clsx from 'clsx'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import NavIcon from '../NavIcon'
import NavLinkOrText from '../NavLinkOrText'


interface Props {
  item: NavItem
  onClose: () => void
  classNames?: string
	showDescription?: boolean
}


export default function NavRow({
  item,
  onClose,
  classNames,
	showDescription = false
}: Props) {
  return (
    <div
      className={clsx(
        'group relative flex gap-x-6 rounded-lg px-4 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-50',
        classNames
      )}
    >
      <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors duration-200 ease-in-out group-hover:bg-white">
        <NavIcon icon={item.icon} />
      </div>
      <div className="mt-3 flex flex-col items-start justify-start">
        <NavLinkOrText href={item.href} onClick={onClose}>
          <span className="inline-flex items-center gap-1">
            <span className="truncate pr-1 group-hover/link:underline">{item.name}</span>
            {showDescription && item.description && (
              <HiOutlineArrowRight
                aria-hidden
                className="size-4 -translate-x-1 text-teal-500 opacity-0 transition-all duration-200 ease-in-out
                           group-hover/link:translate-x-0 group-hover/link:opacity-100
                           group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100"
              />
            )}
          </span>
          <span className="absolute inset-0" />
        </NavLinkOrText>

        {showDescription && item.description && (
          <p className="inline-flex mt-1 text-gray-600">{item.description}</p>
        )}
      </div>
    </div>
  )
}
