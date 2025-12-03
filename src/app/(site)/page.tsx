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

export const revalidate = 60

export default function Home() {
  return (
    <>
      <HomepageHero />
      <TrustCredibility />
      <PlatformMainFeatures />
      <PlatformOverview />
      <HomepageMidCTA />
      <IndustrySolutionsOverview />
      <HomepageImpacts />
      <PlatformHowItWorks />
      <OurStorySummary />
      <PlatformIntegrationsEcosystems />
      <LatestInsights />
      <SubscribeSmallWrapper />
      <HomepageBottomCTA />
    </>
  )
}
