import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'
import { ContentH3 } from '../content/Titles'
import { benefitIconMap } from '@/utils/iconMap'
import { HiNoSymbol } from 'react-icons/hi2'
import { ContentP } from '../content/Typography'
import BenefitCard from '../cards/BenefitCard'

type Props = {
	data:UseCase
}

const UseCaseBenefits = ({ data }: Props) => {

	const { benefits, benefitsIntro  } = data;

	if (!benefitsIntro || !benefits) return null;

	return (
		<section id="benefits" aria-labelledby="benefits-title" className='bg-gradient-to-b from-white to-surface-muted'>
			<Container className='py-24 sm:py-32'>
				<ContentH3 title='Benefits' />
				 <ContentP>{benefitsIntro}</ContentP>
				  <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-8">
						{benefits.map((useCaseBenefit) => {
							const benefit = useCaseBenefit.benefit
							const title = useCaseBenefit.useCaseBenefitTitle || benefit.title
              const IconCmp =
                (benefit.icon && benefitIconMap[benefit.icon]) || HiNoSymbol
              return (
                <BenefitCard
                  key={benefit._id}
                  title={title}
                  desc={benefit.statement}
                  icon={<IconCmp className="size-12" aria-hidden="true" />}
									className='lg:col-span-2'
                />
              )
            })}
					</div>
			</Container>
		</section>
	)
}

export default UseCaseBenefits