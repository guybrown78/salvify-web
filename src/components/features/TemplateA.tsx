import { Feature } from '@/types/Feature';
import React from 'react';
import FeatureBenefits from './FeatureBenefits';
import FeatureHero from './FeatureHero';
import FeatureProblem from './FeatureProblem';
import FeatureHowItWorks from './FeatureHowItWorks';


interface Props { data:Feature }

export default function TemplateA({ data }: Props) {
  // Same props as TemplateB — just different layout/styling
	console.log("template a")
	console.log(data)
  return (
		// mx-auto max-w-7xl px-4 py-12
    <main role="main" className="">
      <FeatureHero 
				heroEyebrow={data.heroEyebrow}
				heroTitle={data.heroTitle} 
				heroSubTitle={data.heroSubTitle} 
				overview={data.overview}
			/>
			<FeatureProblem data={data} />
			<FeatureHowItWorks data={data} />
			<FeatureBenefits introText={data.benefitsIntro} featureBenefits={data.benefits} />
      {/* Render hero, summary, content blocks… */}
    </main>
  );
}
