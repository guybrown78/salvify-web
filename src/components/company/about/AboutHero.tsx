import React from 'react'
import { Container } from '@/components/Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '@/components/hero'
import { Button } from '@/components/Button'
import VisualHolder from '@/components/VisualHolder'

const AboutHero = () => {
	return (
		<Container className="relative">
			<HeroResponsiveWrapper>
				<HeroTypographyWrapper>
					<HeroEyebrow title="About Salvify" />
					<HeroH1 title="Confidence in Care, Powered by Digital Precision." />
					<HeroH2 subTitle="Transforming medicine management for healthcare teams across every environment." />
					<HeroOverview
						overviewText="Salvify is a UK-based healthcare technology company improving how medical teams manage medicines, stock, and compliance. We combine frontline insight with smart, scalable software built to keep every healthcare operation safe, compliant, and ready."
					/>

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
						A split visual showing the Salvify dashboard on desktop and mobile, highlighting compliance alerts and real-time stock visibility.
					</VisualHolder>
				</div>
			</HeroResponsiveWrapper>
		</Container>
	)
}

export default AboutHero