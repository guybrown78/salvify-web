import { getFeatures, getFeaturesMenu } from '@/sanity/sanity-utils'
import feature from '@/sanity/schemas/feature-schema';
import { Feature, FeatureMenuItem } from '@/types/Feature';
import Link from 'next/link';
import React from 'react'

export const revalidate = 60;



const FeaturePage = async () => {

	const features: FeatureMenuItem[] = await getFeaturesMenu();
	console.log("features Menu ....")
	console.log(features)
	return (
		<>
				<div>FeaturePage</div>
		<ul>
			{features.map((feature) => (
				<li key={feature._id}>
					<Link href={`/product/features/${feature.slug}`}>{feature.label}</Link>
				</li>
			))}
		</ul>
		
		</>

	)
}

export default FeaturePage