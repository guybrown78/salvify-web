import {
	HiOutlineClock,
	HiOutlineEye,
	HiOutlineEyeSlash,
	HiOutlineShieldExclamation,
} from 'react-icons/hi2'
import PillarCard from '../cards/PillarCard'
import { Container } from '../Container'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import ScrollReveal from '../motion/ScrollReveal'

const OPHomepageProblem = () => {
  return (
    <section
      id="industry-problems"
      aria-labelledby="industry-problems-title"
      className="py-6 sm:py-12"
    >
      <Container>
        {/* <Eyebrow title="Who We Support" /> */}
        <ContentH2 title="Paper registers and spreadsheets aren't good enough anymore" />
        <ContentP>
          Pre-hospital care is fast-moving, spread across vehicles, kits and locations, and high-pressure. Managing medicines with paper registers and spreadsheets creates gaps in visibility, delays in decision-making and unnecessary risk across your operation.
        </ContentP>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3">
          <ScrollReveal delayMs={0} className="h-full">
            <PillarCard
              className="h-full"
              color="ink"
              eyebrow="Lack of Visibility"
              title="No real-time visibility"
              desc="You have no reliable way to know what stock is on each vehicle, kit or bag right now, until someone checks manually."
              icon={<HiOutlineEyeSlash className="size-8" aria-hidden="true" />}
            />
          </ScrollReveal>

          <ScrollReveal delayMs={120} className="h-full">
            <PillarCard
              className="h-full"
              color="ink"
              eyebrow="Compliance Risk"
              title="Compliance gaps under inspection"
              desc="When processes rely on paper and manual checks, records become inconsistent and difficult to rely on, especially when it matters most."
              icon={
                <HiOutlineShieldExclamation
                  className="size-8"
                  aria-hidden="true"
                />
              }
            />
          </ScrollReveal>

          <ScrollReveal delayMs={240} className="h-full">
            <PillarCard
              className="h-full"
              color="ink"
              eyebrow="Expiry & Waste"
              title="Expired stock slipping through"
              desc="Without automated tracking, medicines expire unnoticed, leading to waste, unnecessary cost and avoidable risk in patient care."
              icon={<HiOutlineClock className="size-8" aria-hidden="true" />}
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}

export default OPHomepageProblem
