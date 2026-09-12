import { Button } from '../Button'
import { Container } from '../Container'
import HeroAlertQueue from './HeroAlertQueue'
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

/** The faint teal grid + edge fades behind the hero illustration, shared by the desktop and mobile layouts. */
function HeroGridBackground() {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(169,245,239,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(169,245,239,1)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* top fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent"
      />

      {/* bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"
      />

      {/* left fade */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"
      />

      {/* right fade */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"
      />
    </div>
  )
}

const OPHomepageHero = () => {
  return (
    <Container className="relative">
      <HeroResponsiveWrapper>
        <HeroTypographyWrapper>
          <div className="relative z-10">
            <HeroEyebrow title="Built for Pre-Hospital Care" />
            <HeroH1 title="Medicine Management Software for Ambulance Services" />
            {/* <HeroH2 subTitle="Clarity, Compliance and Control in One Place" /> */}
            <HeroOverview overviewText="Keep track of every medicine across your vehicles, kits and sites. Stay compliant, reduce risk and know exactly what is available at any moment." />

            <HeroCTAButtonWrapper>
              <Button href="/contact/book-a-demo">Book a Demo</Button>
              <Button href="/#platform-features" variant="outline" color="brand">
                See platform features
              </Button>
            </HeroCTAButtonWrapper>
          </div>
        </HeroTypographyWrapper>

        {/* Mobile / tablet hero visual: image + grid, tucked right under the CTAs (behind
            them in stacking order, since it overlaps them to close the gap), alerts centred over it */}
        <div className="relative z-0 -mt-24 min-h-80 sm:-mt-36 sm:min-h-96 lg:hidden">
          <HeroGridBackground />

          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute right-[-0.5rem] bottom-0 h-[85%] w-[62%] sm:w-[54%]">
              <Image
                src="/images/heros/salvify-default-hero.png"
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 62vw, 54vw"
              />
            </div>
          </div>

          <div className="absolute top-1/2 left-0 z-10 max-w-[60%] -translate-y-1/2 sm:max-w-[55%]">
            <HeroAlertQueue align="start" />
          </div>
        </div>

        <div className="relative hidden min-h-96 items-center justify-center lg:col-span-6 lg:flex xl:col-span-7">
          <div className="absolute h-full w-full">
            <HeroGridBackground />

            <div className="pointer-events-none absolute inset-0 z-0">
              <div
                className="
									absolute left-1/2 h-[72%]
									w-[88%] -translate-x-1/2

									sm:h-[78%] sm:w-[78%]

									md:left-auto md:right-[-1rem] md:bottom-0 md:h-[80%]
									md:w-[70%] md:translate-x-0

									lg:right-[-1.5rem] lg:h-[88%] lg:w-[78%]
								"	
              >
                <Image
                  src="/images/heros/salvify-default-hero.png"
                  alt=""
                  fill
                  priority
                  className="md:object-bottom-right object-contain object-center"
                  sizes="(max-width: 640px) 88vw, (max-width: 768px) 78vw, (max-width: 1024px) 60vw, 40vw"
                />
              </div>
            </div>

            <div className="z-10 relative my-auto ml-0 xl:ml-28 top-64 max-w-52 xl:top-32">
              <HeroAlertQueue />
            </div>
          </div>
        </div>
      </HeroResponsiveWrapper>
    </Container>
  )
}

export default OPHomepageHero
