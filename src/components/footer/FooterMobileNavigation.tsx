'use client'
import { NavItem } from '@/utils/nav-types'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import FooterNavigationLink from './FooterNavigationLink'
import FooterNavigationTitle from './FooterNavigationTitle'

interface Props {
  sections: NavItem[]
}
const FooterMobileNavigation = ({ sections }: Props) => {
  return (
    <div className="divide-y divide-gray-200">
      {sections.map((section) => {
        const panelId = `footer-accordion-${section.name
          .replace(/\s+/g, '-')
          .toLowerCase()}`
        return (
          <Disclosure key={panelId} as="div" className="py-2">
            {({ open }) => (
              <>
                <DisclosureButton
                  type="button"
                  aria-controls={panelId}
                  aria-expanded={open}
                  className="group flex w-full items-center justify-between py-2 text-left"
                  aria-label={`${open ? 'Collapse' : 'Expand'} ${section.name}`}
                >
                  <FooterNavigationTitle title={section.name} />
                  <HiOutlineChevronDown
                    className={clsx(
                      'size-5 shrink-0 transition-transform duration-200 ease-in-out',
                      open && '-scale-y-100'
                    )}
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <AnimatePresence initial={false}>
                  {open && (
                    <DisclosurePanel static id={panelId}>
                      <motion.div
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: easeInOut }}
                        className="overflow-hidden"
                      >
                        {/* put spacing inside the animated box */}
                        <div className="mt-2">
                          <ul className="space-y-4">
                            {(section.children ?? [])
                              // ignore footer rows in the mobile footer accordion
                              .filter((item) => item.variant !== 'footer')
                              .map((item) => {
                                if (item.variant === 'block') {
                                  return (
                                    <li key={item.name} className="mt-4">
                                      <FooterNavigationTitle
                                        title={item.name}
                                      />
                                      <ul className="mb-2 ml-2 mt-4 space-y-4">
                                        {(item.children ?? []).map(
                                          (blockItem) => (
                                            <li key={blockItem.name}>
                                              <FooterNavigationLink
                                                title={blockItem.name}
                                                href={blockItem.href}
                                              />
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </li>
                                  )
                                }
                                return (
                                  <li key={item.name}>
                                    <FooterNavigationLink
                                      title={item.name}
                                      href={item.href}
                                    />
                                  </li>
                                )
                              })}
                          </ul>
                        </div>
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
}

export default FooterMobileNavigation
