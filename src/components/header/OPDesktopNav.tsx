'use client'

import { NavItem } from '@/utils/nav-types'
import { Button } from '../Button'

const OPDesktopNav = ({ sections }: { sections: NavItem[] }) => {
  return (
    <div className="hidden gap-x-6 lg:flex">
      {sections.map((navItem, i) => (
        <Button key={i} href={navItem.href} color="white">
          {navItem.name}
        </Button>
      ))}
    </div>
  )
}

export default OPDesktopNav
