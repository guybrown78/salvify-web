import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3, ContentH4 } from '../content/Titles'
import RelatedContentItem from '../cards/RelatedContentItem'
import { IndustrySolution } from '@/types/IndustrySolution'
import { ContentP } from '../content/Typography'
import WorkFlowSlider from './WorkFlowSlider'
import IndustryStats from './IndustryStats'

type Props = {
	data: IndustrySolution
}

const IndustryWorkFlowStats = ({ data }: Props) => {

	const { operationalSteps, impactStats } = data

	console.log("here")

	console.log(data.operationalSteps)
  if (!operationalSteps || !operationalSteps.length ) return null

	return (
		<section
      id="industry-workflow-impact"
      aria-labelledby="industry-workflow-impact-title"
      className="py-16 lg:py-24"
    >
			<Container>
				<ContentH3 title='How your workflow becomes clearer with Salvify' />
				<ContentH4 title='A short, operational overview that fits every industry:' color='ink' weight='normal' />
				<ContentP>
					Salvify strengthens daily workflows by making restocking, documentation, and review easier for frontline teams.
				</ContentP>
				<div className='mt-6 mb-10'>
					<WorkFlowSlider operationalSteps={operationalSteps} />
				</div>
				{
					impactStats && impactStats.length && (
						<IndustryStats impactStats={impactStats} />
					)
				}
				
			</Container>
			
		</section>
	)
}

export default IndustryWorkFlowStats