import React from 'react'
import { Container } from '@/components/Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '@/components/hero'
import { Button } from '@/components/Button'
import VisualHolder from '@/components/VisualHolder'

const TeamHero = () => {
	return (
		<Container className="relative">
			<HeroResponsiveWrapper>
				<HeroTypographyWrapper>
					<HeroEyebrow title="The Salvify Team" />
					<HeroH1 title="People Who Build Confidence in Care" />
					<HeroH2 subTitle="Experienced professionals with one shared goal: making medicine management safer and simpler." />
					<HeroOverview
						overviewText="Salvify is built and run by a small, dedicated team of healthcare and technology professionals. We combine real clinical experience with practical software design to create tools that make a genuine difference in day-to-day care."
					/>


					<HeroCTAButtonWrapper>
						<Button href="/contact/book-a-demo">
							Book a Demo
						</Button>
						<Button href="/about-salvify" variant="outline" color="brand">
							About Salvify
						</Button>
					</HeroCTAButtonWrapper>
				</HeroTypographyWrapper>

				<div className="relative flex items-center justify-center lg:col-span-6 border">
					<VisualHolder>
						A clean studio photo or collage of the Salvify founders with soft brand accents.
					</VisualHolder>
				</div>
			</HeroResponsiveWrapper>
		</Container>
	)
}

export default TeamHero