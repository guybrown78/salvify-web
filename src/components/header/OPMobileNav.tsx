'use client'

import { NavItem } from '@/utils/nav-types'
import { Popover, PopoverBackdrop, PopoverPanel } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { Button } from '../Button'
import LogoLink from './LogoLink'

interface Props {
  navItem: NavItem
  isOpen: boolean
  onToggle: () => void
  onCloseHandler: () => void
}

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

  const loginURL = process.env.NEXT_PUBLIC_SIGN_IN_URL

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
        className="relative z-50 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
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
              className="fixed inset-x-0 bottom-0 top-0 origin-top"
            >
              <PopoverPanel
                static
                as="div"
                className="
									[@supports(-webkit-touch-callout:none)]:[WebkitOverflowScrolling:touch] fixed inset-x-0 bottom-0 top-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-white px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-4 shadow-xl ring-1 ring-slate-900/5
								"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="h-20 py-6">
                    <LogoLink onClose={close} size="sm" />
                  </div>
                  <nav className="flex flex-1 flex-col space-y-4 overflow-y-auto overflow-x-hidden">
                    {sections.map((navItem, i) => (
                      <Button
                        key={i}
                        href={navItem.href}
                        onClick={close}
                        color="white"
                      >
                        <span className="text-xl font-medium">
                          {navItem.name}
                        </span>
                      </Button>
                    ))}
                  </nav>
                  <div className="min-h-20 py-4">
                    <Button
                      href={loginURL}
                      onClick={close}
                      color="surface"
                      className="mb-2 w-full p-2 text-center text-xl font-normal"
                    >
                      <span className="inline font-medium">Sign&nbsp;in</span>
                    </Button>

                    <Button
                      href="/contact/book-a-demo"
                      onClick={close}
                      color="brand"
                      className="w-full p-2 text-center text-xl"
                    >
                      Book a Demo
                    </Button>
                  </div>
                </div>
              </PopoverPanel>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default function OPMobileNavigation({
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
