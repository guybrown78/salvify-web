import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentStack, ContentP } from '../content/Typography'
import VisualHolder from '../VisualHolder'
import WorkFlowSlider from '../industries/WorkFlowSlider'
import { IndustryOperationalStep } from '@/types/IndustrySolution'



const steps:IndustryOperationalStep[] = [
	{
		stepTitle: "Stock enters your organisation",
  	stepBody: "Medicines are logged with batch number, expiry date and quantity as they arrive — creating a clear starting point for every item in your system.",
	},
	{
		stepTitle: "Allocated to vehicles and kits",
  	stepBody: "Stock is assigned to vehicles, bags and locations through structured checks, ensuring everything is in place before deployment.",
	},
	{
		stepTitle: "Used in patient care",
  	stepBody: "When medicines are used, the record is captured at the point of care — linked to the clinician, time and context of use.",
	},
	{
		stepTitle: "Fully traceable at any time",
  	stepBody: "Every movement is connected, giving you a complete history from supplier to patient — searchable in seconds when you need it.",
	},
]
const PlatformHowItWorks = () => {
	return (
		<section id="platform-how-it-works" aria-labelledby="platform-how-it-works" className="">
			<Container className="py-24 sm:py-32">
				<ContentH2 title="How It Works" />
				<ContentH3 title="From store to patient — fully traced" />
				<ContentP>
					Salvify connects every stage of medicines management — from stock entering your organisation through to clinical use. Each step is recorded, visible and accountable.
				</ContentP>
				{/* <VisualHolder>Simple SVG diagram showing “Central Store → Clinical Kit → Patient”, with small tags for Batch + Expiry and Usage + Witness under each step.</VisualHolder> */}

				<div className='mt-6 mb-10'>
					<WorkFlowSlider operationalSteps={steps} />
				</div>


			</Container>
		</section>
	)
}

export default PlatformHowItWorks