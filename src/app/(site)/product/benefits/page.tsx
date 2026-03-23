import { getBenefits } from '@/sanity/sanity-utils';
import { Benefit } from '@/types/Benefit';
import React from 'react'


export const revalidate = 60;
const ProductBenefitPage = async () => {

	const benefits: Benefit[] = await getBenefits();
	console.log("benefits ....")
	console.log(benefits)


	return (
		<div>ProductBenefitPage</div>
	)
}

export default ProductBenefitPage