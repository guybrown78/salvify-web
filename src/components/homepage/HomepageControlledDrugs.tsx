import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import { Button } from '../Button'
import CdrList from '../cdr/CdrList'
import CdrRegisterPreview from '../cdr/CdrRegisterPreview'

const points: string[] = [
  'Register-based control with automatic running balances and an append-only history',
  'Independent second-person witnessing on individually authenticated accounts',
  'Stock checks, discrepancy investigation and organisation-wide oversight',
]

const HomepageControlledDrugs = () => {
  return (
    <section
      id="controlled-drugs"
      aria-label="Controlled drug management"
      className="bg-surface/50 py-16 sm:py-24"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12">
          <div className="lg:col-span-6">
            <Eyebrow title="Controlled Drugs" />
            <ContentH2 title="Controlled drug management for pre-hospital care" />
            <ContentP>
              Controlled drugs are the most tightly regulated medicines a
              pre-hospital service handles, and they rarely sit still. Salvify
              manages them in the same platform as the rest of your medicines,
              with the register, witnessing, stock checks and audit that
              controlled drugs require, built around the way they move between
              stores, stations, vehicles, bags and clinicians.
            </ContentP>

            <CdrList items={points} className="mt-6" />

            <div className="mt-8">
              <Button href="/controlled-drug-register">
                Explore the Controlled Drug Register
              </Button>
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:col-span-6 lg:mt-0">
            <CdrRegisterPreview />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomepageControlledDrugs
