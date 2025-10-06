import { Logo } from '@/components/Logo'
import { buildSections } from '@/utils/nav'
import { Container } from '../Container'
import FooterBasement from './FooterBasement'
import FooterDesktopNavigation from './FooterDesktopNavigation'
import FooterLegalLinks from './FooterLegalLinks'
import FooterMobileNavigation from './FooterMobileNavigation'
import LogoLink from '../header/LogoLink'
import BookDemoButton from '../BookDemoButton'

export const Footer = async () => {
  const sections = await buildSections()
  const loginURL = process.env.NEXT_PUBLIC_SIGN_IN_URL

  return (
    <footer className="border-t border-slate-200/50 bg-surface">
      <Container>
        <div className="pb-8 pt-24 lg:pt-32">
          <div className="flex gap-8">
            <div className="flex flex-grow lg:flex-grow-0 flex-row lg:flex-col justify-between">

              <div className="flex-col gap-y-1">
                <LogoLink size='sm' />
								<p className="text-sm leading-6 text-slate-600">
									Confidence in Care
								</p>
              </div>
              

						<div className="mt-0 lg:mt-8">
							<BookDemoButton />
						</div>
							
            </div>

            {/* <FooterNav /> */}
						<div className="flex-1 hidden lg:block text-xs">
            	<FooterDesktopNavigation sections={sections} />
          	</div>
          </div>
        </div>
        <div className="text-xs">
          {/* <div className="hidden lg:block">
            <FooterDesktopNavigation sections={sections} />
          </div> */}
          <div className="lg:hidden">
            <FooterMobileNavigation sections={sections} />
          </div>
        </div>
        <div className="mx-0 my-8">
          <FooterLegalLinks />
        </div>
      </Container>

      <FooterBasement />
    </footer>
  )
}
