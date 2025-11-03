import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../titles/Titles'
import BentoText from '../bento/BentoText'
import BentoImage from '../bento/BentoImage'
import BentoCard from '../bento/BentoCard'
import BentoWrapper from '../bento/BentoWrapper'

const PlatformRoles = () => {
  return (
    <section id="platform-roles" aria-labelledby="platform-roles" className="">
      <Container className="py-24 sm:py-32">
        <HeroEyebrow title="Role-aware by design" />
        <ContentH2 title="Designed for Every Role" />
        <p>
          Every user sees exactly what they need — nothing more, nothing less.
          Administrators configure holdings, permissions, and compliance rules.
          Clinicians record usage and manage kits with confidence. Managers
          monitor stock, expiry, and audit insights in real time, while Make
          Ready teams rebuild kits with guided precision.
        </p>

        <BentoWrapper lgCols={6} lgRows={2}>
          <BentoCard lgColSpan={4} roundedLg={['tl']} smallTop>
						{/* Visual idea: Settings pane with toggles for Roles, Holdings, Locations; a small “Change logged” badge. */}
            <BentoImage
              src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
              alt="Admin panel showing roles, holdings, and an audit log entry."
              positionClassName="object-left"
            />
            <BentoText
              eyebrow="Admin"
              title="Configure with Confidence"
              text="Set up holdings, locations, roles, and governance rules. Every change is logged for a clean, exportable audit trail."
            />
          </BentoCard>
          <BentoCard lgColSpan={2} roundedLg={['tr']}>
						{/* Visual idea: Phone mock with a simple “Record Dose” screen and a scanned batch number/expiry tag. */}
            <BentoImage
              src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
              alt="Clinician screen to record medicine usage with batch and expiry."
            />

            <BentoText
              eyebrow="Clinician"
              title="Use, Record, Carry On"
              text="Record usage at point-of-care; batch and expiry captured automatically. Witness flows supported where required."
            />
          </BentoCard>
          <BentoCard lgColSpan={2} roundedLg={['bl']}>
						{/* Visual idea: Dashboard card showing “Expiring in 30 days”, “Controlled movements today”, and an “Export audit” button. */}
            <BentoImage
              src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
              alt="Compliance dashboard with expiry alerts and audit export button."
            />
            <BentoText
              eyebrow="Manager / Compliance"
              title="Live Oversight, Zero Guesswork"
              text="See stock, expiry risk, and controlled movements in real time. Export audit evidence in one click."
            />
          </BentoCard>
					{/* Visual idea: Checklist view of a kit with green ticks, a yellow “Shortage” tag, and a “Bag 12 replenished” confirmation. */}
          <BentoCard lgColSpan={4} roundedLg={['br']} smallBottom>
            <BentoImage
              src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
              alt="Make Ready checklist showing item status and replenishment confirmation."
              positionClassName="object-left"
            />
            <BentoText
              eyebrow="Make Ready"
              title="Guided Kit Rebuilds"
              text="Follow step-by-step replenishment. Shortages auto-flagged; replenishment is logged by bag for full accountability."
            />
          </BentoCard>
        </BentoWrapper>
      </Container>
    </section>
  )
}

export default PlatformRoles
