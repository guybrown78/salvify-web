import React from 'react'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import BentoText from '@/components/cards/bento/BentoText'
import BentoImage from '@/components/cards/bento/BentoImage'
import BentoCard from '@/components/cards/bento/BentoCard'
import BentoWrapper from '@/components/cards/bento/BentoWrapper'
import { ContentP } from '../content/Typography'
import { Button } from '../Button'

const PlatformOverview = () => {
  return (
    <section
      id="platform-overview"
      aria-labelledby="platform-overview-title"
      className=""
    >
      <Container className="py-24 sm:py-32">
        <Eyebrow title="Platform Overview" />
        <ContentH2 title="The Complete Platform for Safe, Seamless Medicine Management" />
        {/* <ContentP></ContentP> */}
        <BentoWrapper lgCols={6} lgRows={2}>
          <BentoCard
            lgColSpan={3}
            roundedLg={['tl']}
            smallTop

          >
            {/* <BentoImage
              src="/img/admin.png"
              alt="Admin configuration"
              positionClassName="object-left"
            /> */}
						{/* A kit/bag icon expands → items appear with batch + expiry labels → a green tick appears when compliant. */}
            <BentoText
              eyebrow="Core Functionality"
              title="Medicine Management"
              text="Track every medicine across every holding with complete batch, expiry and quantity clarity. Colour-coded statuses help teams stay prepared and prevent waste."
            />
          </BentoCard>

          <BentoCard lgColSpan={3} roundedLg={['tr']}>
            {/* <BentoImage src="/img/clinician.png" alt="Clinician workflow" /> */}
						{/* A compliance alert gently fades in → slides into an “Audit-Ready” badge → a checklist auto-ticks itself. */}
            <BentoText
              eyebrow="Stay Audit-Ready"
              title="Compliance Automation"
              text="Automated alerts, audit trails and documentation keep you aligned with CQC, MHRA and internal governance requirements without the admin burden."
            />
          </BentoCard>

          <BentoCard
            lgColSpan={2}
            roundedLg={['bl']}
          >
            {/* <BentoImage src="/img/compliance.png" alt="Compliance dashboard" /> */}
						{/* A CD icon → a witness icon appears beside it → a “dual confirmation” marker locks in. */}
            <BentoText
              eyebrow="In Development"
              title="Controlled Drugs"
              text="A dedicated controlled drug module is in development, including witnessed entries, restricted movements and a full digital register. Designed to support safe and compliant CD governance."
            />
          </BentoCard>

          <BentoCard lgColSpan={2}>
            {/* <BentoImage src="/img/cd.png" alt="Controlled drugs" /> */}
						{/* A dashboard grows from a single tile → more tiles fade in showing expiry, usage, and movement graphs. */}
            <BentoText
              eyebrow="Real-Time Intelligence"
              title="Reporting & Insights"
              text="Instant visibility into stock levels, expiry risk, movements and operational trends. Generate audit evidence and service reports in seconds."
            />
          </BentoCard>

          <BentoCard
            lgColSpan={2}
            roundedLg={['br']}
            smallBottom
      
          >
            {/* <BentoImage
              src="/img/make-ready.png"
              alt="Make Ready kits"
              positionClassName="object-left"
            /> */}
            <BentoText
              eyebrow="Works With Your Workflow"
              title="Interoperability"
              text="Salvify integrates with ePRF systems, procurement tools and existing clinical workflows to create a connected, reliable operational ecosystem."
            />
          </BentoCard>
        </BentoWrapper>
				<div className="flex flex-col items-end py-6 sm:py-12">

					<p className="text-xs">Discover the full platform that helps teams stay compliant, organised and ready for every shift.</p>
					<div className="flex space-x-4 mt-2">
						<Button href="/product/features">
							Explore Features
						</Button>
						<Button href="/product/platform" color="surface">
							Medicine Management Platform
						</Button>
					</div>
				
				</div>
      </Container>
    </section>
  )
}

export default PlatformOverview
