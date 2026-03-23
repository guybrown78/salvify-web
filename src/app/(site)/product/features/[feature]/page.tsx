import { getFeature } from '@/sanity/sanity-utils';
import { Feature, FeatureTemplate } from '@/types/Feature';
import TemplateA from "@/components/features/TemplateA";
import TemplateB from "@/components/features/TemplateB";
import React from 'react'
import Link from 'next/link';

type Props = {
	params: { feature:string }
}
// export type FeatureTemplate = 'standard' | 'accent' | 'premium'
const templates = {standard: TemplateA, accent: TemplateB, premium: TemplateA } as const;

export const revalidate = 60;

export const generateMetadata = async ({ params }:Props) => {
	const slug = params.feature;
	const feature:Feature = await getFeature(slug);

	if(!feature) return null;

	return {
		title: `Platform feature: ${feature.title}`,
		description: feature.menuDescription,
		keywords: feature.keywords
	};
};


const FeaturePage = async ({ params }:Props) => {

	const slug = params.feature;
	const feature:Feature = await getFeature(slug)

	if(!feature) return (<div>no data</div>)

	const Template = templates[feature.template ?? "a"];
  	return (
			<>
				<Template data={feature} />
			</>
			
		);
	
}

export default FeaturePage