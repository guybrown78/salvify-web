import React from 'react'
import { Container } from '../Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '../hero'
import { Button } from '../Button'

const PlatformHero = () => {
	return (
		<Container className="relative">
			<HeroResponsiveWrapper>
				<HeroTypographyWrapper>
					<HeroEyebrow title="The Salvify Platform" />
					<HeroH1 title="The Medicine Management Platform Built for Every Role" />
					<HeroH2 subTitle="From clinicians to compliance leads, Salvify keeps every part of your operation connected, compliant, and in control." />
					{/* <HeroOverview overviewText="Real-time visibility, automated compliance, and smart workflows that make medicine management effortless and auditable." /> */}
					
					<HeroCTAButtonWrapper>
						<Button href="/contact/book-a-demo">
							Book a Demo
						</Button>
						<Button href="/contact" variant="outline" color="brand">
							Contact Sales
						</Button>
					</HeroCTAButtonWrapper>
				</HeroTypographyWrapper>
			</HeroResponsiveWrapper>
		</Container>
	)
}

export default PlatformHero