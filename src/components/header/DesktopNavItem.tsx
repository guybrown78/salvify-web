'use client'

import { NavItem } from '@/utils/nav-types'
import {
	Popover,
	PopoverButton
} from '@headlessui/react'
import clsx from 'clsx'
import { useRef, useEffect } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import NavPanel from '../nav/NavPanel'
import NavBlockGrid from '../nav/rows/NavBlockGrid'
import NavFooterGrid from '../nav/rows/NavFooterGrid'
import NavRow from '../nav/rows/NavRow'


interface Props {
  navItem: NavItem
}
const DesktopNavItem = ({ navItem }: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null)

	// Track last input type so we open on keyboard Tab, 
	// not on programmatic focus.
  const lastInput = useRef<'keyboard' | 'pointer' | null>(null)

	useEffect(() => {
    const onKey = () => (lastInput.current = 'keyboard')
    const onPoint = () => (lastInput.current = 'pointer')
    window.addEventListener('keydown', onKey, { passive: true })
    window.addEventListener('mousedown', onPoint, { passive: true })
    window.addEventListener('pointerdown', onPoint, { passive: true })
    window.addEventListener('touchstart', onPoint, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onPoint)
      window.removeEventListener('pointerdown', onPoint)
      window.removeEventListener('touchstart', onPoint)
    }
  }, [])

	 // Suppress the *first* focus-open after returning to the tab/window.
  const suppressNextFocusOpen = useRef(false)
  useEffect(() => {
    const armSuppression = () => {
      suppressNextFocusOpen.current = true
    }
    const onVisibility = () => {
      if (document.visibilityState === 'visible') armSuppression()
    }
    window.addEventListener('focus', armSuppression)               // tab/window refocus
    document.addEventListener('visibilitychange', onVisibility)    // tab shown again
    return () => {
      window.removeEventListener('focus', armSuppression)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

	return (
    <Popover as="div" className="group">
      {({ open, close }) => (
        <div 
					onMouseEnter={() => !open && btnRef.current?.click()} 
					onMouseLeave={() => close()}
				>
          <PopoverButton
            ref={btnRef}
            type="button"
            onFocus={() => {
							// Ignore browser-restored focus
              if (suppressNextFocusOpen.current) {
                suppressNextFocusOpen.current = false
                return
              }
              // Only open when user navigates with keyboard
              if (lastInput.current === 'keyboard' && !open) {
                btnRef.current?.click()
              }
							// !open && btnRef.current?.click()
						}}
            className={clsx(
              'inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 transition-opacity duration-300 ease-in-out focus:outline-none',
              open && 'opacity-40'
            )}
          >
            <span>{navItem.name}</span>
            <HiOutlineChevronDown
              aria-hidden
              className={clsx(
                'size-5 origin-center transition-transform duration-300 ease-in-out motion-safe:will-change-transform',
                open ? '-scale-y-100' : 'scale-y-100'
              )}
            />
          </PopoverButton>

          <NavPanel open={open}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 lg:grid-cols-2">
              {navItem.children?.map((item) => {
                if (item.variant === 'block') return <NavBlockGrid key={item.name} item={item} onClose={close} classNames="m-4" />
                if (item.variant === 'footer') return <NavFooterGrid key={item.name} item={item} onClose={close} />
                return <NavRow key={item.name} item={item} onClose={close} classNames="m-4" showDescription={true} />
              })}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">{/* reserved CTA area */}</div>
          </NavPanel>
        </div>
      )}
    </Popover>
  )

}

export default DesktopNavItem
