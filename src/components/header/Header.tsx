
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

import BookDemoButton from '../BookDemoButton'

import { buildSections } from '@/utils/nav'
import LogoLink from './LogoLink'
import MobileNavigation from './MobileNav'
import DesktopNav from './DesktopNav'
import { Button } from '../Button'

export const Header = async () => {
	const sections = await buildSections()
	const loginURL = process.env.NEXT_PUBLIC_SIGN_IN_URL;
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <LogoLink />
            {/* <DesktopNav sections={sections}/> */}
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              {/* <NavLink href={loginURL}>Sign in</NavLink> */}
							<Button href={loginURL} color="white" className="">
								<span className='inline font-medium'>Sign&nbsp;in</span>
							</Button>
            </div>
            <BookDemoButton />
            <div className="-mr-1 lg:hidden">
              {/* <MobileNavigation sections={sections}/> */}
            </div>
          </div>
        </nav> 
      </Container>
    </header>
  )
}
