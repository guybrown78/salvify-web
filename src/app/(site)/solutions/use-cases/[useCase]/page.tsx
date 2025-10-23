import HeroH1 from '@/components/hero/HeroH1';
import { getUseCase } from '@/sanity/sanity-utils';
import { UseCase } from '@/types/UseCase';
import React from 'react'

type Props = {
	params: { useCase:string }
}
export const revalidate = 60;

const UseCasePage = async ({ params }:Props) => {

	const slug = params.useCase;
	const useCase:UseCase = await getUseCase(slug);

	if(!useCase) return (<div>no data</div>)

	return (
		<div>
			UseCasePage 
			<HeroH1 title={useCase.heroTitle} />
		</div>
	)
}

export default UseCasePage