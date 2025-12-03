import { Container } from '@/components/Container'
import React from 'react'
import Eyebrow from '@/components/content/Eyebrow'
import SectionCTA from '@/components/content/SectionCTA'
import { ContentH2 } from '@/components/content/Titles'
import { ContentP } from '@/components/content/Typography'
import { ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'

const OurStorySummary = () => {
	return (
		<section
      id="salvify-our-story"
      aria-labelledby="salvify-our-story-title"
      className="py-6 sm:py-12"
    >
			<Container>
				<Eyebrow title="Our Story" />
        <ContentH2 title="Built From Real Experience in the Field" />
				<div className='mt-10 grid grid-cols-5 lg:grid-cols-12 gap-8'>
					<ContentStack className='col-span-5'>
						<ContentP>Salvify began with a simple but serious problem: medical teams were working with outdated, unreliable stock processes that put readiness and compliance at risk. After discovering a stockpile of expired medicines offshore, Craig and Guy set out to build a platform that gives healthcare teams the clarity, control and confidence they need on every shift.</ContentP>
						<ContentP>Today, that same mission drives every part of Salvify — helping teams stay prepared, compliant and focused on patient care.</ContentP>
					</ContentStack>
					<div className='col-span-5 lg:col-span-7'>
						<VisualHolder>
							Founders Side-by-Side Photo
						</VisualHolder>
					</div>
					
				</div>
				<SectionCTA 
					intro="Learn more about our mission and the people behind Salvify." 
					links={[
						{ href:"/about-salvify", label:"About Salvify" },
						{ href:"/company/the-salvify-team", label:"Meet the Team" },
					]}
				/>
			</Container>
		</section>
	)
}

export default OurStorySummary