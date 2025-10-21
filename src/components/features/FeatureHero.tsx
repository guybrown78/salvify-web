import React from 'react'
import HeroEyebrow from '../hero/HeroEyebrow'
import HeroH1 from '../hero/HeroH1'
import HeroH2 from '../hero/HeroH2'
import HeroOverview from '../hero/HeroOverview'
import BookDemoButton from '../BookDemoButton'
import { Button } from '../Button'
import { Container } from '../Container'
import ScreenImageContainer from '../screenshots/ScreenImageContainer'
import { Feature } from '@/types/Feature'
import { data } from 'autoprefixer'
import Image from 'next/image'
import { featureHeroMap } from './heroVisuals'; 
type Props = {
	// heroEyebrow:string,
	// heroTitle:string,
	// heroSubTitle?:string,
	// overview?:string,
	data:Feature
}


const FeatureHero = ({ data }: Props) => {
	const { heroEyebrow, heroTitle, heroSubTitle, overview } = data
	return (
		 <Container className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-4 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-0 lg:pb-16 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
    
						<HeroEyebrow title={heroEyebrow} />
            <HeroH1 title={heroTitle} />
						<HeroH2 subTitle={heroSubTitle} />
						<HeroOverview overviewText={overview} />

            <div className="mt-10 flex items-center gap-x-6">
							<Button href="/get-started">Get Started</Button>
							<Button href="../features" variant="outline">Discover all features</Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex items-center justify-center">

				 {data.heroVisual === 'component' && data.heroComponentKey ? (
            (() => {
              const Cmp = featureHeroMap[data.heroComponentKey];
              return Cmp ? (
								<ScreenImageContainer className="w-[min(90vw,728px)]" aspect='responsive'>
									{/* <div className='flex flex-col'>
										<div className='h-12 bg-surface-muted w-56 md:w-96'></div>
										<div className='mt-6 h-8 bg-surface-muted w-48'></div>
									</div> */}
									<Cmp />
								</ScreenImageContainer>
							) : null;
            })()
          ) : data.heroVisual === 'svg' && data.heroSvg?.url ? (
            // Next/Image doesn't optimise SVG; use <img>
            // Ensure alt includes "medicine management" for SEO where appropriate
            <image
              src={data.heroSvg.url}
              alt={data.heroSvg.alt || 'Medical inventory and medicine management hero graphic'}
              className="w-full h-auto rounded-2xl"
            />
          ) : data.heroImage?.url ? (
            <Image
              src={data.heroImage.url}
              alt={data.heroImage.alt || 'Medical inventory and medicine management hero image'}
              width={1200}
              height={800}
              priority
              className="w-full rounded-2xl object-cover"
            />
          ) : null}

				
        </div>
      </div>
    </Container>
	)
}

export default FeatureHero