import { Benefit } from '@/types/Benefit'
import FeatureBenefitCard from './FeatureBenefitCard'
import { benefitIconMap } from '@/utils/iconMap'
import { HiNoSymbol } from 'react-icons/hi2'
import { FeatureBenefitItem } from '@/types/Feature'
import { Container } from '../Container'
import ContentH3 from '../ titles/ContentH3'

type Props = {
  introText: string
  featureBenefits: FeatureBenefitItem[]
}

const FeatureBenefits = ({ introText, featureBenefits }: Props) => {
  return (
    <div className="bg-gradient-to-b from-white to-surface-muted">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-base/7 font-semibold">Benefits</h2> */}
					<ContentH3 title='Benefits' />
          <p>{introText}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
            {featureBenefits.map((featureBenefit) => {
              const benefit = featureBenefit.benefit
              console.log('>>>>>>', benefit.title, benefit.statement)

              console.log(benefit)
              console.log(benefit._id)
              const IconCmp =
                (benefit.icon && benefitIconMap[benefit.icon]) || HiNoSymbol
              return (
                <FeatureBenefitCard
                  key={benefit._id}
                  title={benefit.title}
                  desc={benefit.statement}
                  icon={<IconCmp className="size-12" aria-hidden="true" />}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FeatureBenefits
