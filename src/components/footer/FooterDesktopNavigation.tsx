import { NavItem } from '@/utils/nav-types'
import React from 'react'
import FooterNavigationTitle from './FooterNavigationTitle'
import FooterNavigationLink from './FooterNavigationLink'

interface Props {
  sections: NavItem[]
}

const FooterDesktopNavigation = ({ sections }: Props) => {
  return (
    <div className="flex justify-evenly space-x-3 divide-x divide-gray-200">
      {sections.map((section) => {
        const sectionId = `footer-nav-${section.name
          .replace(/\s+/g, '-')
          .toLowerCase()}`

        return (
          <div key={sectionId} className='px-10'>
            <FooterNavigationTitle title={section.name} />
            <div className="mt-2">
              <ul className="space-y-4">
                {(section.children ?? [])
                  // ignore footer rows in the mobile footer accordion
                  .filter((item) => item.variant !== 'footer')
                  .map((item) => {
                    if (item.variant === 'block') {
                      return (
                        <li key={item.name} className="mt-4">
                          <FooterNavigationTitle title={item.name} />

                          <ul className="mb-2 mt-4 space-y-4">
                            {(item.children ?? []).map((blockItem) => (
                              <li key={blockItem.name}>
                                <FooterNavigationLink
                                  title={blockItem.name}
                                  href={blockItem.href}
                                />
                              </li>
                            ))}
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
          </div>
        )
      })}
    </div>
  )
}

export default FooterDesktopNavigation
