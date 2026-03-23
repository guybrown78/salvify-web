import { IndustrySolution } from '@/types/IndustrySolution'
import React from 'react'

import { Container } from '../Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '../hero'
import { Button } from '../Button'

type Props = {
	data:IndustrySolution
}
const IndustryHero = ({ data }: Props) => {
	const { heroEyebrow, heroTitle, heroSubTitle, overview } = data;
		return (
			<Container className="relative">
				<HeroResponsiveWrapper>
					<HeroTypographyWrapper>
						<HeroEyebrow title={heroEyebrow} />
						<HeroH1 title={heroTitle} />
						<HeroH2 subTitle={heroSubTitle} />
						<HeroOverview overviewText={overview} />
						
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
					
						</div>
				</HeroResponsiveWrapper>
			</Container>
		)
}

export default IndustryHero