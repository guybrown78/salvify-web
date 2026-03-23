import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentP, ContentStack } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const IntegrationsBenefits = () => {
	return (
		<section id="integrations-benefits" aria-labelledby="integrations-benefits">
  <Container className="py-24 sm:py-32">
    <HeroEyebrow title="Role-based outcomes" />
    <ContentH2 title="How integrations help your team" />

    <ContentStack>
      <ContentP>
        <strong>Clinicians</strong>: fewer systems to touch during patient care. Medicine usage updates flow from Salvify into your clinical records with minimal friction.
      </ContentP>
      <ContentP>
        <strong>Compliance leads</strong>: near real-time visibility of movements, batch, and expiry data. Export or sync records for audits and digital compliance integration.
      </ContentP>
      <ContentP>
        <strong>IT admins</strong>: partner API with role control, options for SSO, and clear pathways from CSV to webhooks. Future FHIR support aligns with NHS digital interoperability.
      </ContentP>
    </ContentStack>

    <VisualHolder>
      Concept: Three compact cards (Clinician, Compliance, IT). Each shows 2–3 bullets and a small line icon. Optional accent tags: “ePRF integration”, “audit-ready exports”, “SSO option”.
    </VisualHolder>
  </Container>
</section>
	)
}

export default IntegrationsBenefits