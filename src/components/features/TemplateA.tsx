import { Feature } from '@/types/Feature';
import React from 'react';
import FeatureBenefits from './FeatureBenefits';
import FeatureHero from './FeatureHero';


interface Props { data:Feature }

export default function TemplateA({ data }: Props) {
  // Same props as TemplateB — just different layout/styling
	console.log("template a")
	console.log(data)
  return (
    <main role="main" className="mx-auto max-w-7xl px-4 py-12">
      <FeatureHero 
				heroTitle={data.heroTitle} 
				heroSubTitle={data.heroSubTitle} 
			/>

			<FeatureBenefits featureBenefits={data.benefits} />
      {/* Render hero, summary, content blocks… */}
    </main>
  );
}
