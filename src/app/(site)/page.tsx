import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { About } from '@/components/About'
import { Demo } from '@/components/Demo'
import { Contact } from '@/components/Contact'
import LatestInsights from '@/components/insights/LatestInsights'
import SubscribeWrapper from '@/components/subscribe/SubscribeWrapper'
import SubscribeSmallWrapper from '@/components/subscribe/SubscribeSmallWrapper'


export const revalidate = 60; 


export default function Home() {
  return (
    <>
			<Hero />
			<PrimaryFeatures />
			<SecondaryFeatures />
			<CallToAction />
			<About />
			<Benefits />
			<Demo />
			<Contact />
			<LatestInsights />
			<SubscribeSmallWrapper />
			<Faqs />
    </>
  )
}
