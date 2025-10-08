import React from 'react'
import HeroEyebrow from '../hero/HeroEyebrow'
import HeroH1 from '../hero/HeroH1'
import HeroH2 from '../hero/HeroH2'
import HeroOverview from '../hero/HeroOverview'
import BookDemoButton from '../BookDemoButton'
import { Button } from '../Button'
import { Container } from '../Container'

type Props = {
	heroEyebrow:string,
	heroTitle:string,
	heroSubTitle?:string,
	overview?:string
}

const FeatureHero = ({ heroEyebrow, heroTitle, heroSubTitle, overview }: Props) => {
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
							{/* <BookDemoButton /> */}
							<Button href="/get-started">Get Started</Button>
							<Button href="../features" variant="outline">Discover all features</Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            className="aspect-3/2 w-full 0 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </Container>
	)
}

export default FeatureHero