import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentP, ContentStack } from '../content/Typography'
import VisualHolder from '../VisualHolder'

const IntegrationsRoadMap = () => {
	return (
		<section id="integrations-roadmap" aria-labelledby="integrations-roadmap">
  <Container className="py-24 sm:py-32">
    <HeroEyebrow title="What’s next" />
    <ContentH2 title="Roadmap for connected medicine management" />
    <ContentH3 title="Practical steps toward deeper interoperability" color='ink' weight='normal' />

    <ContentStack>
      <ContentP>
        <strong>ePRF alignment</strong>: committed to closing the loop in pre-hospital care. We will prioritise standard event payloads for medicine usage and stock updates.
      </ContentP>
      <ContentP>
        <strong>Barcode &amp; GTIN</strong>: improve procurement matching and traceability with GS1-aligned identifiers, supporting smarter ordering and recall handling.
      </ContentP>
      <ContentP>
        <strong>Automated ordering</strong>: sync stock signals to procurement platforms for simple reordering and reduced waste.
      </ContentP>
      <ContentP>
        <strong>FHIR compatibility (coming soon)</strong>: future-ready schema design to support secure healthcare data exchange across NHS-aligned platforms.
      </ContentP>
      <ContentP>
        <strong>AI-assisted sync</strong>: detect data gaps, suggest mappings, and flag anomalies to keep integrations clean and trustworthy.
      </ContentP>
    </ContentStack>

    <VisualHolder>
      Concept: Horizontal timeline with five milestones. Each node has a short label and an icon (stethoscope/doc for ePRF, barcode for GTIN, arrows for ordering, brackets for FHIR, spark for AI).
    </VisualHolder>
  </Container>
</section>
	)
}

export default IntegrationsRoadMap