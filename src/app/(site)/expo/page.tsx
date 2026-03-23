import { Container } from '@/components/Container'
import { ContentH2 } from '@/components/content/Titles'
import { ContentP } from '@/components/content/Typography'
import ExpoCTA from '@/components/expo/ExpoCTA'
import ExpoHero from '@/components/expo/ExpoHero'
import ExporPlatformOverview from '@/components/expo/ExporPlatformOverview'
import BookADemo from '@/components/forms/BookADemo'
import HomepageImpacts from '@/components/homepage/HomepageImpacts'
import OPHomepageIndustries from '@/components/homepage/OPHomepageIndustries'
import TrustCredibility from '@/components/homepage/TrustCredibility'
import React from 'react'

const ExpoPage = () => {
	return (
		<>
			<ExpoHero />

		
			<TrustCredibility />
			<ExporPlatformOverview />
    <HomepageImpacts />
			<OPHomepageIndustries />

	 <section
      id="book-a-demo"
      aria-labelledby="book-a-demo-title"
      className="overflow-hidden py-6 lg:py-12"
    >
		  <Container>

        <ContentH2 title="Request a demo" />
        <ContentP>
          See how Salvify works in your organisation.
        </ContentP>
        <BookADemo />
				
      </Container>
			   </section>
			<ExpoCTA />
 


		</>
	)
}

export default ExpoPage