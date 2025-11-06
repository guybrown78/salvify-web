import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'

type Props = {
	data:UseCase
}

const UseCaseAudiances = ({ data }: Props) => {
	const title = data.audiencesTitle || "Healthcare teams who need visibility, compliance and confidence in care";
	const intro = data.audiencesIntro || "Designed for medical organisations that manage medicines, consumables or equipment and need one reliable system to stay compliant, connected and ready.";

	return (
		<section id="audiences" aria-labelledby="audiences-title" className="py-16 lg:py-24 bg-gradient-to-b from-surface-muted to-white">
			<Container>
				<HeroEyebrow title="Who's it for" />
				<ContentH2 title={title} color='ink' weight='normal' />
				<ContentP>{intro}</ContentP>
				<div className='my-6 flex flex-wrap gap-8'>
					{
						data.audiences.map(industry => 
							<div key={industry} className='inline-flex px-4 py-2 md:px-6 md:py-4 bg-surface text-brand-500 font-brand font-extrabold rounded-full border-brand-500 border-2'>{industry}</div>
						
						)
					}
				</div>
			</Container>
		</section>
	)
}

export default UseCaseAudiances