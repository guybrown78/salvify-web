import { IndustrySolution } from '@/types/IndustrySolution'

import IndustryHero from './IndustryHero'
import IndustryCTA from './IndustryCTA'
import RegulatoryContext from './RegulatoryContext'
import IndustryChallenges from './IndustryChallenges'
import IndustryHelps from './IndustryHelps'
import IndustryBenefits from './IndustryBenefits'
import IndustryRelated from './IndustryRelated'
import IndustryWorkFlowStats from './IndustryWorkFlowStats'

type Props = {
  data: IndustrySolution
}

const IndustryTemplate = ({ data }: Props) => {
  return (
    <main role="main" className="">
      <IndustryHero data={data} />
			<RegulatoryContext data={data} />
			<IndustryChallenges data={data} />
			<IndustryHelps data={data} />
			<IndustryBenefits data={data} />
			<IndustryRelated data={data} />
			<IndustryWorkFlowStats data={data} />
			<IndustryCTA data={data} />
    </main>
  )
}

export default IndustryTemplate
