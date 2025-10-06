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

const FeaturePage = async ({ params }:Props) => {

	const slug = params.feature;
	const feature:Feature = await getFeature(slug)

	// console.log("slug", slug)
	// console.log(feature)
	if(!feature) return (<div>no data</div>)

	const Template = templates[feature.template ?? "a"];
  	return (
			<>
				{/* <Link href="/product/features">All Features</Link> */}
				<Template data={feature} />
			</>
			
		);
	
}

export default FeaturePage