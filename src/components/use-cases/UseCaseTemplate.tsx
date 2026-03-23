import { UseCase } from '@/types/UseCase'
import React from 'react'
import UseCaseHero from './UseCaseHero'
import UseCaseProblem from './UseCaseProblem'
import UseCaseHow from './UseCaseHow'
import UseCaseBenefits from './UseCaseBenefits'
import UseCaseAudiances from './UseCaseAudiances'
import UseCaseRelated from './UseCaseRelated'
import UseCaseCTA from './UseCaseCTA'


interface Props { data:UseCase }


const UseCaseTemplate = ({ data }: Props) => {
	return (
		<main role="main" className="">
			<UseCaseHero data={data} />
			<UseCaseProblem data={data} />
			<UseCaseHow data={data} />
			<UseCaseBenefits data={data} />
			<UseCaseAudiances data={data} />
			<UseCaseRelated data={data} />
			<UseCaseCTA data={data} />
		</main>
	)
}

export default UseCaseTemplate