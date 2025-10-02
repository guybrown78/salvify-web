
'use client'

import { NavItem } from '@/utils/nav-types'
import {
	Popover,
	PopoverBackdrop,
	PopoverPanel
} from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import MobileNavItem from './MobileNavItem'

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex items-center justify-center overflow-visible stroke-gray-700">
      <HiOutlineBars3
        className={clsx(
          'absolute size-8 origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />

      <HiOutlineXMark
        className={clsx(
          'absolute size-8 origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </div>
  )
}

function MobileNavContent({
  open,
  close,
  sections,
}: {
  open: boolean
  close: () => void
  sections: NavItem[]
}) {
  const [activeId, setActiveId] = useState<string | null>(null)

   useEffect(() => {
    if (open) {
      setActiveId(null)
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Cleanup when component unmounts
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])


  return (
    <>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
        onClick={() => {
          // also reset just before opening via click
          if (!open) setActiveId(null)
        }}
      >
        <MobileNavIcon open={open} />
      </Popover.Button>

      <AnimatePresence initial={false}>
        {open && (
          <>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.15, ease: easeInOut }}
						>
							<PopoverBackdrop
								static
								className="fixed inset-0 bg-gray-400/50"
								onClick={close}
							/>
						</motion.div>


						<motion.div
							initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 7 }}
              transition={{ duration: 0.2, ease: easeIn }}
							className="absolute inset-x-0 top-full  origin-top"
						>
							<PopoverPanel
								static
								as="div"
								className="absolute inset-x-0 top-full mt-4 flex min-h-96 origin-top flex-col rounded-xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5"
							>
								<nav className="flex flex-col">
									<motion.ul
										layout
										className="mx-2 mb-2 mt-1 divide-y divide-slate-200"
									>
										{sections.map((navItem) => (
											<MobileNavItem
												key={navItem.name}
												navItem={navItem}
												isOpen={activeId === navItem.name}
												onToggle={() =>
													setActiveId((prev) =>
														prev === navItem.name ? null : navItem.name
													)
												}
												onCloseHandler={close} // closes the menu on link tap
											/>
										))}
									</motion.ul>
								</nav>
							</PopoverPanel>

						</motion.div>
          
          </>
        )}
      </AnimatePresence>
    </>
  )
}


export default function MobileNavigation({
  sections,
}: {
  sections: NavItem[]
}) {
  return (
    <Popover as="div">
      {({ open, close }) => (
        <MobileNavContent open={open} close={close} sections={sections} />
      )}
    </Popover>
  )
}
