import { Feature } from '@/types/Feature'
import Image from 'next/image'
import { Button } from '../Button'
import { Container } from '../Container'
import {
  HeroCTAButtonWrapper,
  HeroEyebrow,
  HeroH1,
  HeroH2,
  HeroOverview,
  HeroResponsiveWrapper,
  HeroTypographyWrapper,
} from '@/components/hero'
import ScreenImageContainer from '../screenshots/ScreenImageContainer'
import { featureHeroMap } from './heroVisuals'
type Props = {
  data: Feature
}

const FeatureHero = ({ data }: Props) => {
  const { heroEyebrow, heroTitle, heroSubTitle, overview } = data
  return (
    <Container className="relative">
      <HeroResponsiveWrapper>
        <HeroTypographyWrapper>
          <HeroEyebrow title={heroEyebrow} />
          <HeroH1 title={heroTitle} />
          <HeroH2 subTitle={heroSubTitle} />
          <HeroOverview overviewText={overview} />

          <HeroCTAButtonWrapper>
            <Button href="/get-started">Get Started</Button>
            <Button href="../features" variant="outline">
              Discover all features
            </Button>
          </HeroCTAButtonWrapper>
        </HeroTypographyWrapper>

        <div className="relative flex items-center justify-center lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          {data.heroVisual === 'component' && data.heroComponentKey ? (
            (() => {
              const Cmp = featureHeroMap[data.heroComponentKey]
              return Cmp ? (
                <ScreenImageContainer
                  className="w-[min(90vw,728px)]"
                  aspect="responsive"
                >
                  <Cmp />
                </ScreenImageContainer>
              ) : null
            })()
          ) : data.heroVisual === 'svg' && data.heroSvg?.url ? (
            // Next/Image doesn't optimise SVG; use <img>
            // Ensure alt includes "medicine management" for SEO where appropriate
            <img
              src={data.heroSvg.url}
              alt={
                data.heroSvg.alt ||
                'Medical inventory and medicine management hero graphic'
              }
              className="h-auto w-full rounded-2xl"
            />
          ) : data.heroImage?.url ? (
            <Image
              src={data.heroImage.url}
              alt={
                data.heroImage.alt ||
                'Medical inventory and medicine management hero image'
              }
              width={1200}
              height={800}
              priority
              className="w-full rounded-2xl object-cover"
            />
          ) : null}
        </div>
      </HeroResponsiveWrapper>
    </Container>
  )
}

export default FeatureHero
