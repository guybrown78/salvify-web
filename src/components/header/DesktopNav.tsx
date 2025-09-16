'use client'

import { Popover, PopoverGroup, PopoverPanel } from '@headlessui/react'
import React, { useEffect, useRef, useState } from 'react'
import {
  HiOutlineArrowsUpDown,
  HiOutlineChartPie,
  HiOutlineCursorArrowRays,
  HiOutlineDocumentChartBar,
  HiOutlineFingerPrint,
  HiOutlineSquaresPlus,
} from 'react-icons/hi2'
import NavPopoverButton from './NavPopoverButton'

const sections = {
  product: [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: HiOutlineChartPie,
    },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools and find out expectations',
      href: '#',
      icon: HiOutlineSquaresPlus,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers with our engagement tool',
      href: '#',
      icon: HiOutlineCursorArrowRays,
    },
  ],
  solutions: [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: HiOutlineChartPie,
    },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools and find out expectations',
      href: '#',
      icon: HiOutlineSquaresPlus,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers with our engagement tool',
      href: '#',
      icon: HiOutlineCursorArrowRays,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: HiOutlineArrowsUpDown,
    },
    {
      name: 'Security',
      description: "Your customers' data will be safe and secure",
      href: '#',
      icon: HiOutlineFingerPrint,
    },
    {
      name: 'Reports',
      description: 'Edit, manage and create newly informed decisions',
      href: '#',
      icon: HiOutlineDocumentChartBar,
    },
  ],
}

export const SECTION_IDS = ['product', 'solutions'] as const
export type SectionId = (typeof SECTION_IDS)[number]

const DesktopNav = () => {
  const [active, setActive] = useState<'product' | 'solutions'>('product')
  const [anchorX, setAnchorX] = useState(0)

  const productBtnRef = useRef<HTMLButtonElement>(null)
  const solutionsBtnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const itemRefs = useRef<HTMLAnchorElement[]>([])

  const setItemRef = (el: HTMLAnchorElement | null, i: number) => {
    if (el) itemRefs.current[i] = el
  }
  const focusItem = (i: number) => itemRefs.current[i]?.focus()

  const setFromRef = (ref: React.RefObject<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    setAnchorX(el.offsetLeft + el.offsetWidth / 2)
  }

  // Timer management for hover delays
  const closeTimer = useRef<number | null>(null)
  const openTimer = useRef<number | null>(null)

  const cancelTimers = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    if (openTimer.current) {
      window.clearTimeout(openTimer.current)
      openTimer.current = null
    }
  }

  const requestOpen = (section: 'product' | 'solutions') => {
    cancelTimers()
    openTimer.current = window.setTimeout(() => {
      // setActive(section)
      // setFromRef(section === 'product' ? productBtnRef : solutionsBtnRef)
      //setIsOpen(true)
      const ref = section === 'product' ? productBtnRef : solutionsBtnRef
      ref.current?.click()
    }, 100) // Small delay for smooth UX
  }

  const requestClose = (close: () => void) => {
    cancelTimers()
    closeTimer.current = window.setTimeout(() => {
      close()
    }, 150)
  }

  useEffect(() => {
    setFromRef(productBtnRef)
  }, [])

  const handleButtonMouseEnter = (
    section: 'product' | 'solutions',
    open: boolean,
    close: () => void
  ) => {
    console.log(
      'Mouse enter:',
      section,
      'currently active:',
      active,
      'open:',
      open
    )

    // Set active state immediately when hovering
    setActive(section)
    setFromRef(section === 'product' ? productBtnRef : solutionsBtnRef)

    if (!open) {
      requestOpen(section)
    } else {
      cancelTimers()
    }
  }

  const handleButtonFocus = (
    section: 'product' | 'solutions',
    open: boolean
  ) => {
    cancelTimers()
    setActive(section)
    setFromRef(section === 'product' ? productBtnRef : solutionsBtnRef)

    if (!open) {
      // Focus first item in panel after it opens
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          focusItem(0)
        })
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, close: () => void) => {
    console.log(e.key)
    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        close()
        // Return focus to the active button
        ;(active === 'product'
          ? productBtnRef
          : solutionsBtnRef
        ).current?.focus()
        break

      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault()
        const list = itemRefs.current
        const current = list.findIndex((el) => el === document.activeElement)
        const last = list.length - 1

        let next: number
        if (e.key === 'ArrowDown') {
          next = current < 0 ? 0 : current === last ? 0 : current + 1
        } else {
          next = current < 0 ? last : current === 0 ? last : current - 1
        }
        focusItem(next)
        break

      case 'ArrowLeft':
        e.preventDefault()
        if (active === 'solutions') {
          setActive('product')
          setFromRef(productBtnRef)
          requestAnimationFrame(() => focusItem(0))
        }
        break

      case 'ArrowRight':
        e.preventDefault()
        if (active === 'product') {
          setActive('solutions')
          setFromRef(solutionsBtnRef)
          requestAnimationFrame(() => focusItem(0))
        }
        break

      case 'Tab':
        // Allow natural tab behavior to close the panel
        if (!e.shiftKey) {
          // Tabbing forward out of the panel
          close()
        }
        break
    }
  }

  return (
    <PopoverGroup className="hidden gap-x-6 md:flex">
      <Popover className="relative flex gap-x-6">
        {({ open, close }) => (
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={cancelTimers}
            onMouseLeave={(e) => {
              // Only close if we're leaving the entire container
              if (!containerRef.current?.contains(e.relatedTarget as Node)) {
                requestClose(close)
              }
            }}
          >
            <div className="flex gap-x-6">
              <NavPopoverButton
                ref={productBtnRef}
                label="Product"
                section="product"
                active={active}
                open={open}
								close={close}
                onHover={(section, isOpen) =>
                  handleButtonMouseEnter(section, isOpen, close)
                }
                onFocusOpen={(section, isOpen) =>
                  handleButtonFocus(section, isOpen)
                }
              />

              <NavPopoverButton
                ref={solutionsBtnRef}
                label="Solutions"
                section="solutions"
                active={active}
                open={open}
								close={close}
                onHover={(section, isOpen) =>
                  handleButtonMouseEnter(section, isOpen, close)
                }
                onFocusOpen={(section, isOpen) =>
                  handleButtonFocus(section, isOpen)
                }
              />
            </div>

            {open && (
              <PopoverPanel
                key={active}
                ref={panelRef}
                static
                id="global-mega-panel"
                role="menu"
                transition
                className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in absolute left-1/2 top-full z-10 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 pt-5 transition"
                style={{ left: anchorX, transform: 'translateX(-50%)' }}
                onKeyDown={(e) => handleKeyDown(e, close)}
              >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 lg:max-w-3xl dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {(() => {
                      itemRefs.current = []
                      return null
                    })()}
                    {sections[active].map((item, i) => {
                      if (i === 0)
                        console.log(
                          'Rendering section:',
                          active,
                          'with',
                          sections[active].length,
                          'items'
                        )
                      return (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
                        >
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                            <item.icon
                              aria-hidden
                              className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                            />
                          </div>
                          <div>
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              href={item.href}
                              ref={(el) => setItemRef(el, i)}
                              className="font-semibold text-gray-900 focus:outline-none focus:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white"
                              onClick={close}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  close()
                                }
                              }}
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </PopoverPanel>
            )}
          </div>
        )}
      </Popover>
    </PopoverGroup>
  )
}

export default DesktopNav
