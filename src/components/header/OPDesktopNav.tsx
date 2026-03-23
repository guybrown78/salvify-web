'use client'

import { NavItem } from '@/utils/nav-types'
import { PopoverGroup } from '@headlessui/react'
import DesktopNavItem from './DesktopNavItem'
import Link from 'next/link'
import { Button } from '../Button'


const OPDesktopNav = ({ sections }: { sections: NavItem[] }) => {
	return (
		<div className="hidden lg:flex gap-x-6">
			{sections.map((navItem, i) => (
				<Button key={i} href={navItem.href} color="white">
					{navItem.name}
				</Button>
			))}
		</div>
	)
}

export default OPDesktopNav