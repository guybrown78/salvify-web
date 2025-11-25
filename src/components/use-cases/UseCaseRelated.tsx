import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import RelatedContentItem from '../cards/RelatedContentItem'

type Props = {
	data:UseCase
}

const UseCaseRelated = ({ data }: Props) => {
	
	if (!data.relatedContent || !data.relatedContent.length) return null

	return (
		<section id="related" aria-labelledby="related-title" className="py-16 lg:py-24">
			<Container>
				<HeroEyebrow title="Related content" />
				<ContentH2 title='Explore more ways Salvify simplifies medical inventory' color='ink' weight='normal' />
				<div className='grid grid-cols-12 gap-4'>
					{data.relatedContent.map(relatedContentCard => (
	
						<RelatedContentItem 
							key={relatedContentCard._id} 
							relatedContent={relatedContentCard}
							className='col-span-12 md:col-span-6 xl:col-span-6'
						/>
				
					))}
				</div>
			</Container>
		</section>
	)
}

export default UseCaseRelated