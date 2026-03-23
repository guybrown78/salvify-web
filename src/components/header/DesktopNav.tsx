'use client'

import { NavItem } from '@/utils/nav-types'
import { PopoverGroup } from '@headlessui/react'
import DesktopNavItem from './DesktopNavItem'

const DesktopNav = ({ sections }: { sections: NavItem[] }) => {
	return (
		<PopoverGroup className="hidden lg:flex gap-x-6">
			{sections.map((navItem, i) => (
				<DesktopNavItem key={i} navItem={navItem} />
			))}
		</PopoverGroup>
	)
}

export default DesktopNav
