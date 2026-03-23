import { NavItem } from '@/utils/nav-types'
import React from 'react'
import FooterNavigationTitle from './FooterNavigationTitle'
import FooterNavigationLink from './FooterNavigationLink'
import { Button } from '../Button'

interface Props {
  sections: NavItem[]
}


const OPFooterMovileNavigation = ({ sections }: Props) => {
	return (
			 <div className="flex flex-col space-y-3 divide-y divide-gray-200">
					{sections.map((navItem) => {
						const sectionId = `footer-nav-${navItem.name
							.replace(/\s+/g, '-')
							.toLowerCase()}`
		
						return (
							<div key={sectionId} >
								<Button href={navItem.href} color="surface" className="w-full mt-4">
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

export default OPFooterMovileNavigation