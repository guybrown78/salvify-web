import { IndustrySolution } from '@/types/IndustrySolution'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import { benefitIconMap } from '@/utils/iconMap'
import { HiNoSymbol } from 'react-icons/hi2'
import BenefitCard from '../cards/BenefitCard'

type Props = {
  data: IndustrySolution
}

const IndustryBenefits = ({ data }: Props) => {
  const { benefitsIntro, industryBenefits } = data

  if (!industryBenefits || industryBenefits.length === 0) return null

  return (
    <section
      id="industry-benefits"
      aria-labelledby="industry-benefits-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <Eyebrow title="Benefits" />
        <ContentH2
          title="Key benefits for your service"
        />

        <ContentP>
          {benefitsIntro ||
            'These are some of the practical advantages Salvify brings to your team, helping you manage medicines safely, reduce risk, and maintain clear compliance across every holding.'}
        </ContentP>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2 xl:grid-cols-5">
					{industryBenefits.map((industryBenefits) => {
              const benefit = industryBenefits.benefit

              const IconCmp =
                (benefit.icon && benefitIconMap[benefit.icon]) || HiNoSymbol
              return (
            		<BenefitCard
                  key={benefit._id}
                  title={benefit.title}
                  desc={benefit.statement}
                  icon={<IconCmp className="size-12" aria-hidden="true" />}
                />
              )
            })}
				</div>
      </Container>
    </section>
  )
}

export default IndustryBenefits
