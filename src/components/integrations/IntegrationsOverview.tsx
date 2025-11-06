import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentP, ContentStack } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const IntegrationsOverview = () => {
	return (
		<section id="integrations-overview" aria-labelledby="integrations-overview">
  <Container className="py-24 sm:py-32">
    <HeroEyebrow title="Interoperability made practical" />
    <ContentH2 title="Why integrations matter" />
    <ContentH3 title="Keep clinicians focused while data flows in the background" color='ink' weight='normal' />

    <ContentStack>
      <ContentP>
        Salvify enables healthcare system interoperability so stock movements, batch details, and usage events can sync with your clinical and governance tools. Reduce double entry, align medicine management with ePRF workflows, and export data for compliance audits when needed.
      </ContentP>
      <ContentP>
        Start fast with CSV and manual sync, then step up to webhooks and partner APIs as your needs grow. Future roadmap includes FHIR compatibility for structured healthcare data exchange.
      </ContentP>
    </ContentStack>

    <VisualHolder>
      Concept: 3-column “before → after” comparison cards. Left: “Manual updates, siloed data”. Middle: “Bridge with CSV”. Right: “Connected medicine management” listing API, webhooks, FHIR-ready (coming soon).
    </VisualHolder>
  </Container>
</section>
	)
}

export default IntegrationsOverview