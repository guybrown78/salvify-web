import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { HeroLegacy } from '@/components/hero/HeroLegacy'
import { Benefits } from '@/components/Benefits'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { About } from '@/components/About'
// import { Demo } from '@/components/Demo'
// import { Contact } from '@/components/Contact'
import LatestInsights from '@/components/insights/LatestInsights'
import SubscribeWrapper from '@/components/subscribe/SubscribeWrapper'
import SubscribeSmallWrapper from '@/components/subscribe/SubscribeSmallWrapper'
import HomepageHero from '@/components/homepage/HomepageHero'
import TrustCredibility from '@/components/homepage/TrustCredibility'

import PlatformOverview from '@/components/platform/PlatformOverview'
import IndustrySolutionsOverview from '@/components/industries/IndustrySolutionsOverview'
import HomepageImpacts from '@/components/homepage/HomepageImpacts'
import OurStorySummary from '@/components/company/about/OurStorySummary'
import PlatformHowItWorks from '@/components/platform/PlatformHowItWorks'
import PlatformIntegrationsEcosystems from '@/components/platform/PlatformIntegrationsEcosystems'
import HomepageMidCTA from '@/components/homepage/HomepageMidCTA'
import HomepageBottomCTA from '@/components/homepage/HomepageBottomCTA'
import PlatformMainFeatures from '@/components/platform/PlatformMainFeatures'


export const revalidate = 60; 


export default function Home() {
  return (
    <>
			{/* <HeroLegacy /> */}
			<HomepageHero />
			<TrustCredibility />
			{/* <PrimaryFeatures /> */}
			<PlatformMainFeatures />
			{/* <SecondaryFeatures /> */}
			<PlatformOverview />
			<HomepageMidCTA />
			<IndustrySolutionsOverview />
			{/* <About /> */}
			<HomepageImpacts />
			{/* <Benefits /> */}
			<PlatformHowItWorks />
			<OurStorySummary />
			<PlatformIntegrationsEcosystems />
			<LatestInsights />
			<SubscribeSmallWrapper />
			<HomepageBottomCTA />
    </>
  )
}
