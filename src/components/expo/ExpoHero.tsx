import { HiOutlineCheck, HiOutlineCheckCircle } from 'react-icons/hi2'
import { Button } from '../Button'
import StatementCard from '../cards/StatementCard'
import { Container } from '../Container'
import {
  HeroCTAButtonWrapper,
  HeroEyebrow,
  HeroH1,
  HeroH2,
  HeroOverview,
  HeroResponsiveWrapper,
  HeroTypographyWrapper,
} from '../hero'
import Image from 'next/image'

const ExpoHero = () => {
	return (
		<Container className="relative">
      <HeroResponsiveWrapper>
        <HeroTypographyWrapper>
          <HeroEyebrow title="Salvify" />
          <HeroH1 title="Modern Medicine Management" />
          {/* <HeroH2 subTitle="Clarity, Compliance and Control in One Place" /> */}
          <HeroOverview overviewText="Real-time visibility and governance for medicines across vehicles, bags and locations." />

          <HeroCTAButtonWrapper>
            <Button href="/expo/#book-a-demo">Book a Demo</Button>
            {/* <Button href="/#" variant="outline" color="brand">
             Download brochure
            </Button> */}
          </HeroCTAButtonWrapper>
        </HeroTypographyWrapper>
        <div className="relative hidden min-h-96 items-center justify-center lg:col-span-6 lg:flex xl:col-span-7">
       
        </div>
      </HeroResponsiveWrapper>
    </Container>
	)
}

export default ExpoHero