import { Container } from '@/components/Container'
import React from 'react'
import Eyebrow from '@/components/content/Eyebrow'
import SectionCTA from '@/components/content/SectionCTA'
import { ContentH2 } from '@/components/content/Titles'
import { ContentP } from '@/components/content/Typography'
import { ContentStack } from '@/components/content/Typography'
import VisualHolder from '@/components/VisualHolder'
import Image from 'next/image'

const OurStorySummary = () => {
  return (
    <section
      id="salvify-our-story"
      aria-labelledby="salvify-our-story-title"
      className="py-6 sm:py-12"
    >
      <Container>
        <Eyebrow title="Our Story" />
        <ContentH2 title="Built From Real Experience in the Field" />

        <div className="mt-10 text-base leading-8 ">
          {/* FIRST TWO PARAGRAPHS */}

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            {/* LEFT: remaining paragraphs */}
            <div>
              <p className="mb-3">
                Salvify started with a simple but serious problem.
              </p>

              <p className="mb-3">
                Co-founder Craig Rabbetts, an experienced offshore medic,
                discovered a stockpile of expired medicines during a routine
                check. There was no clear record, no alert and no reliable way
                to understand how it had happened, just risk that had gone
                unnoticed.
              </p>

              <p className="mb-3">
                That moment exposed a wider issue. Medicines were being managed
                with systems that could not keep up with the reality of
                pre-hospital care.
              </p>

              <p className="mb-3">Salvify was built to change that.</p>

              <p>
                Today, ambulance services, event medical providers and
                pre-hospital teams across the UK use Salvify to stay organised,
                reduce waste and maintain confidence in their medicines
                management.
              </p>
            </div>

            {/* RIGHT: image */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-xl bg-surface-muted">
                <Image
                  src="/images/guy-brown-craig-rabbetts-salvify-founders.jpg"
                  alt="Guy Brown and Craig Rabbetts, founders of Salvify"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />

								<div className="m-2 text-sm text-slate-600">
									Guy Brown, Technical Founder, and Craig Rabbetts, Clinical Founder
								</div>
              </div>
            </div>
          </div>
        </div>
        {/* <SectionCTA 
					intro="Learn more about our mission and the people behind Salvify." 
					links={[
						{ href:"/about-salvify", label:"About Salvify" },
						{ href:"/company/the-salvify-team", label:"Meet the Team" },
					]}
				/> */}
      </Container>
    </section>
  )
}

export default OurStorySummary
