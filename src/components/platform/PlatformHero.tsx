import React from 'react'
import { Container } from '../Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '../hero'
import { Button } from '../Button'
import VisualHolder from '../VisualHolder'

const PlatformHero = () => {
	return (
		<Container className="relative">
			<HeroResponsiveWrapper>
				<HeroTypographyWrapper>
					<HeroEyebrow title="The Salvify Platform" />
					<HeroH1 title="Medicine Management Software for Safer, Smarter Medical Inventory" />
					<HeroH2 subTitle="Salvify is the complete medicine management platform for healthcare teams. Track, manage, and audit medicines across every site, vehicle, and kit with real-time visibility and automated compliance." />
					<HeroOverview overviewText="Designed for clinicians, compliance leads, and make-ready teams, Salvify brings clarity, control, and confidence to every stage of medical inventory management." />
					
					<HeroCTAButtonWrapper>
						<Button href="/contact/book-a-demo">
							Book a Demo
						</Button>
						<Button href="/contact" variant="outline" color="brand">
							Contact Sales
						</Button>
					</HeroCTAButtonWrapper>
				</HeroTypographyWrapper>

					<div className="relative flex items-center justify-center lg:col-span-6 border">
							<VisualHolder>

							</VisualHolder>
						</div>
	
			</HeroResponsiveWrapper>
		</Container>
	)
}

export default PlatformHero