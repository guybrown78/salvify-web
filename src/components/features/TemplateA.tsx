import { Feature } from '@/types/Feature';
import React from 'react';
import FeatureBenefits from './FeatureBenefits';
import FeatureHero from './FeatureHero';
import FeatureProblem from './FeatureProblem';
import FeatureHowItWorks from './FeatureHowItWorks';
import FeatureCTA from './FeatureCTA';


interface Props { data:Feature }

export default function TemplateA({ data }: Props) {
  // Same props as TemplateB — just different layout/styling
	console.log("template a")
	console.log(data)
  return (
		// mx-auto max-w-7xl px-4 py-12
    <main role="main" className="">
      <FeatureHero data={data} />
			<FeatureProblem data={data} />
			<FeatureHowItWorks data={data} />
			<FeatureBenefits introText={data.benefitsIntro} featureBenefits={data.benefits} />
      <FeatureCTA data={data} />
    </main>
  );
}
