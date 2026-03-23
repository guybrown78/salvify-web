import React from 'react'

import { Container } from '../Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '../hero'
import { Button } from '../Button'

const HomepageHero = () => {
	return (
		<Container className="relative">
				<HeroResponsiveWrapper>
					<HeroTypographyWrapper>
						<HeroEyebrow title="Built for Healthcare Teams" />
						<HeroH1 title="The Smarter Way to Manage Medicines" />
						<HeroH2 subTitle="Clarity, Compliance and Control in One Place" />
						<HeroOverview overviewText="A reliable platform for medicine management that gives your team real-time visibility of batches, expiries and stock status across every vehicle, bag and site." />
						
						<HeroCTAButtonWrapper>
							<Button href="/contact/book-a-demo">
								Book a Demo
							</Button>
							<Button href="/product/platform" variant="outline" color="brand">
								Explore the Platform
							</Button>
						</HeroCTAButtonWrapper>
					</HeroTypographyWrapper>
						<div className="relative flex items-center justify-center lg:col-span-6 border">
					
						</div>
				</HeroResponsiveWrapper>
			</Container>
	)
}

export default HomepageHero