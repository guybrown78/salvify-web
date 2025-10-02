import { NavItem } from '@/utils/nav-types'
import clsx from 'clsx'
import {
	AnimatePresence,
	easeIn,
	motion
} from 'framer-motion'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import NavBlockGrid from '../nav/rows/NavBlockGrid'
import NavFooterGrid from '../nav/rows/NavFooterGrid'
import NavRow from '../nav/rows/NavRow'

interface Props {
  navItem: NavItem
  isOpen: boolean
  onToggle: () => void
  onCloseHandler: () => void
}

const MobileNavItem = ({
  navItem,
  isOpen,
  onToggle,
  onCloseHandler,
}: Props) => {
  const panelId = `mobile-accordion-${navItem.name
    .replace(/\s+/g, '-')
    .toLowerCase()}`

  return (
    <motion.li layout className="p-1">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="group flex w-full items-center justify-between rounded p-3 hover:bg-slate-50"
      >
        <span className="text-lg font-semibold">{navItem.name}</span>
        <HiOutlineChevronDown
          className={clsx(
            'size-5 origin-center transition-transform duration-200 ease-in-out',
            isOpen ? '-scale-y-100' : 'scale-y-100'
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${navItem.name} section`}
            initial={{ height: 0, opacity: 0, y: -14 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -14 }}
            transition={{ duration: 0.2, ease: easeIn }}
            className="relative origin-top overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-x-1 gap-y-6 lg:grid-cols-2">
              {navItem.children?.map((item) => {
                if (item.variant === 'block')
                  return (
                    <NavBlockGrid
                      key={item.name}
                      item={item}
                      onClose={onCloseHandler}
                    />
                  )
                if (item.variant === 'footer')
                  return (
                    <NavFooterGrid
                      key={item.name}
                      item={item}
                      onClose={onCloseHandler}
                    />
                  )
                return (
                  <NavRow
                    key={item.name}
                    item={item}
                    onClose={onCloseHandler}
                    classNames="col-span-2"
                  />
                )
              })}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )

}

export default MobileNavItem
