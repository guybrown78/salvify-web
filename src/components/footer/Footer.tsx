import { Logo } from '@/components/Logo'
import { buildSections } from '@/utils/nav'
import { Container } from '../Container'
import FooterBasement from './FooterBasement'
import FooterDesktopNavigation from './FooterDesktopNavigation'
import FooterLegalLinks from './FooterLegalLinks'
import FooterMobileNavigation from './FooterMobileNavigation'
import LogoLink from '../header/LogoLink'

export const Footer = async () => {
  const sections = await buildSections()
  const loginURL = process.env.NEXT_PUBLIC_SIGN_IN_URL

  return (
    <footer className="border-t border-slate-200/50 bg-slate-50">
      <Container>
        <div className="pb-8 pt-24 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-1">
              <div className="w-32">
                <LogoLink size='sm' />
              </div>

              <p className="text-sm leading-6 text-slate-600">
                Confidence in Care
              </p>
            </div>

            {/* <FooterNav /> */}
          </div>
        </div>
        <div className="text-xs">
          <div className="hidden lg:block">
            <FooterDesktopNavigation sections={sections} />
          </div>
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
