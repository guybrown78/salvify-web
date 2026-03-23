import React from 'react'
import { Container } from '../Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '../hero'
import { Button } from '../Button'
import VisualHolder from '../VisualHolder'

const IntegrationsHero = () => {
	return (
			<Container className="relative">
					<HeroResponsiveWrapper>
						<HeroTypographyWrapper>
							<HeroEyebrow title="Healthcare workflow integration" />
							<HeroH1 title="Integrate Salvify with your existing systems" />
							<HeroH2 subTitle="Connect medicine management with ePRFs, EPRs, and audit workflows" />
							<HeroOverview overviewText="Salvify links medicine management with the tools your clinicians, compliance teams, and IT departments already use. Close the loop between kit, vehicle, and patient record with secure, partner-ready integrations." />
							
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
								Concept: Wide flow diagram showing <strong>ePRF ↔ Salvify ↔ Audit/Reporting</strong>. Include icons for API, Webhooks, and CSV with a small padlock and “UK-hosted” tag. Aqua connector lines on a light surface background.
							</VisualHolder>
						</div>
					</HeroResponsiveWrapper>
				</Container>
	)
}

export default IntegrationsHero