import React from 'react'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import SectionCTA from '../content/SectionCTA'
import { IndustrySolutionMenuItem } from '@/types/IndustrySolution'
import { getIndustrySolutionsMenu, getUseCasesMenu } from '@/sanity/sanity-utils'
import RelatedContentItem from '../cards/RelatedContentItem'
import { UseCaseMenuItem } from '@/types/UseCase'

type Props = {}

export const revalidate = 60

const IndustrySolutionsOverview = async (props: Props) => {

	const industrySolutions: IndustrySolutionMenuItem[] = await getIndustrySolutionsMenu();
	const useCases: UseCaseMenuItem[] = await getUseCasesMenu();

	if (!industrySolutions) return null;

	return (
		<section
			id="industrial-solutions-overview"
			aria-labelledby="industrial-solutions-overview-title"
			className="py-6 sm:py-12"
		>
			<Container>
				<Eyebrow title="Who We Support" />
        <ContentH2 title="Medicine Management for Every Environment" />
				<ContentP>
					Salvify is built to support the realities of pre-hospital and remote medical care. Each industry has its own pressures, workflows and compliance needs, so our platform adapts to the environments where teams work — from private ambulances to maritime medicine. Choose your sector to see how Salvify fits your setup.
				</ContentP>
					<div className="grid grid-cols-12 gap-4">
						{ industrySolutions.map((industryItem) => (
							<RelatedContentItem 
								key={industryItem._id}
								relatedContent={{
									_type: 'industry',
									_id: industryItem._id,
									title: industryItem.label,
									slug: industryItem.slug,
									label: industryItem.label,
		 							menuIcon: industryItem.menuIcon,
									menuDescription: industryItem.menuDescription,
								}}
								className="col-span-12 md:col-span-6 xl:col-span-6"
							/>
						))}
					</div>
				{
					useCases && useCases.length && (
						<SectionCTA 
							intro="Looking for specific workflows instead?" 
							links={useCases.map(useCase => {
								return {
									href: `${useCase.slug}`,
									label: useCase.label
								}
							}
							)}
						/>
					)
				}
			</Container>
		

		</section>
	
	)
}

export default IndustrySolutionsOverview