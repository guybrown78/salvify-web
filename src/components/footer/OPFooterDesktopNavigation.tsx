import { NavItem } from '@/utils/nav-types'
import React from 'react'
import FooterNavigationTitle from './FooterNavigationTitle'
import FooterNavigationLink from './FooterNavigationLink'
import { Button } from '../Button'

interface Props {
  sections: NavItem[]
}


const OPFooterDesktopNavigation = ({ sections }: Props) => {
	return (


		 <div className="flex justify-evenly space-x-3 divide-x divide-gray-200">
      {sections.map((navItem) => {
        const sectionId = `footer-nav-${navItem.name
          .replace(/\s+/g, '-')
          .toLowerCase()}`

        return (
          <div key={sectionId} className='px-10'>
            <Button href={navItem.href} color="surface">
							<span className='text-sm font-medium'>
								{navItem.name}
							</span>
							
						</Button>
          
          </div>
        )
      })}
    </div>
	)
}

export default OPFooterDesktopNavigation