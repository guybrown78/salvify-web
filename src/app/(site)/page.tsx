import HomepageHero from '@/components/homepage/HomepageHero'
import TrustCredibility from '@/components/homepage/TrustCredibility'
import LatestInsights from '@/components/insights/LatestInsights'
import SubscribeSmallWrapper from '@/components/subscribe/SubscribeSmallWrapper'

import OurStorySummary from '@/components/company/about/OurStorySummary'
import HomepageBottomCTA from '@/components/homepage/HomepageBottomCTA'
import HomepageImpacts from '@/components/homepage/HomepageImpacts'
import HomepageMidCTA from '@/components/homepage/HomepageMidCTA'
import IndustrySolutionsOverview from '@/components/industries/IndustrySolutionsOverview'
import PlatformHowItWorks from '@/components/platform/PlatformHowItWorks'
import PlatformIntegrationsEcosystems from '@/components/platform/PlatformIntegrationsEcosystems'
import PlatformMainFeatures from '@/components/platform/PlatformMainFeatures'
import PlatformOverview from '@/components/platform/PlatformOverview'
import OPHomepageHero from '@/components/homepage/OPHomepageHero'
import OPHomepageProblem from '@/components/homepage/OPHomepageProblem'
import OPHomepageFeatures from '@/components/homepage/OPHomepageFeatures'
import OPHomepageIndustries from '@/components/homepage/OPHomepageIndustries'
import HomepageControlledDrugs from '@/components/homepage/HomepageControlledDrugs'
import Script from 'next/script'

export const revalidate = 60

export default function Home() {
  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Salvify',
            url: 'https://www.salvify.co.uk',
            logo: 'https://www.salvify.co.uk/favicon.png',
            description:
              'Salvify is medicine management software for pre-hospital care, helping ambulance services and EMS providers manage stock, controlled drugs and compliance across every vehicle and site.',
            sameAs: ['https://www.linkedin.com/company/salvify'],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              email: 'hello@salvify.co.uk',
              url: 'https://www.salvify.co.uk/contact',
            },
          }),
        }}
      />
      {/* <HomepageHero /> */}
			<OPHomepageHero />
      <TrustCredibility />
			<OPHomepageProblem />
      <PlatformMainFeatures />
      {/* <PlatformOverview /> */}
			<OPHomepageFeatures />
      <HomepageControlledDrugs />
      <HomepageMidCTA />
      {/* <IndustrySolutionsOverview /> */}
      <HomepageImpacts />
			<OPHomepageIndustries />
      <PlatformHowItWorks />
      <OurStorySummary />
      <PlatformIntegrationsEcosystems />
      {/* <LatestInsights /> */}
      {/* <SubscribeSmallWrapper /> */}
	
      <HomepageBottomCTA />
    </>
  )
}
