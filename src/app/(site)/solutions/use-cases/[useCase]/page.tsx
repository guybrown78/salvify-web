import UseCaseTemplate from '@/components/use-cases/UseCaseTemplate';
import { getUseCase } from '@/sanity/sanity-utils';
import { UseCase } from '@/types/UseCase';
import React from 'react'

type Props = {
	params: { useCase:string }
}
export const revalidate = 60;


export const generateMetadata = async ({ params }:Props) => {
	const slug = params.useCase;
	const useCase:UseCase = await getUseCase(slug);

	if(!useCase) return null;

	return {
		title: `Use Case: ${useCase.title}`,
		description: useCase.menuDescription,
		keywords: useCase.keywords
	};
};



const UseCasePage = async ({ params }:Props) => {

	const slug = params.useCase;
	const useCase:UseCase = await getUseCase(slug);

	if(!useCase) return (<div>no data</div>)

	return (
		<>
			<UseCaseTemplate data={useCase} />
		</>
	)
}

export default UseCasePage