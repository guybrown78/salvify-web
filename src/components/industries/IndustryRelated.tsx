import React from 'react'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'
import RelatedContentItem from '../cards/RelatedContentItem'
import { IndustrySolution } from '@/types/IndustrySolution'

type Props = {
  data: IndustrySolution
}

const IndustryRelated = ({ data }: Props) => {
  const { featureHighlights } = data
  if (!featureHighlights || !featureHighlights.length) return null

  return (
    <section
      id="industry-features"
      aria-labelledby="industry-features-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <HeroEyebrow title="Related features" />
        <ContentH2
          title="Features that matter to your service"
          color="ink"
          weight="normal"
        />
        <div className="grid grid-cols-12 gap-4">
          {featureHighlights.map((relatedContentCard) => (
            <RelatedContentItem
              key={relatedContentCard._id}
              relatedContent={relatedContentCard}
              className="col-span-12 md:col-span-6 xl:col-span-6"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default IndustryRelated
