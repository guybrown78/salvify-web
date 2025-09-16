'use client'
import { PopoverButton } from '@headlessui/react'
import React from 'react'

import { HiOutlineChevronDown } from 'react-icons/hi2'
import { SectionId } from './DesktopNav'

interface Props {
  label: string
  section: SectionId
  active: SectionId
  open: boolean
  close: () => void
  onHover: (section: SectionId, open: boolean, close: () => void) => void
  onFocusOpen: (section: SectionId, open: boolean) => void
}

const NavPopoverButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, section, active, open, close, onHover, onFocusOpen }, ref) => {
    const isActive = open && active === section

    return (
      <PopoverButton
        ref={ref}
        onMouseEnter={() => onHover(section, open, close)}
        onFocus={() => onFocusOpen(section, open)}
        // onClick={() => {
        // 	console.log("click", isOpen, containerRef.current)
        //   if(isOpen){
        // 		requestClose();
        // 	}
        // }}
        className="inline-flex items-center gap-x-1 text-sm/6 font-semibold focus:outline-none focus:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        // aria-haspopup="menu"
        aria-expanded={isActive}
        aria-controls="global-mega-panel"
      >
        <span>{label}</span>
        <HiOutlineChevronDown
          aria-hidden="true"
          className={`size-5 transition-transform ${
            isActive ? 'rotate-180' : ''
          }`}
        />
      </PopoverButton>
    )
  }
)

NavPopoverButton.displayName = 'NavPopoverButton'
export default NavPopoverButton
