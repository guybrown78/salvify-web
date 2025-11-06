import BentoCard from '../bento/BentoCard'
import BentoImage from '../bento/BentoImage'
import BentoText from '../bento/BentoText'
import BentoWrapper from '../bento/BentoWrapper'
import { Container } from '../Container'
import { ContentH2, ContentH3 } from '../content/Titles'
import { ContentP, ContentStack } from '../content/Typography'
import { HeroEyebrow } from '../hero'
const IntegrationsCapabilities = () => {
  return (
    <section
      id="integrations-capabilities"
      aria-labelledby="integrations-capabilities"
    >
      <Container className="py-24 sm:py-32">
        <HeroEyebrow title="Flexible connection options" />
        <ContentH2 title="Integration capabilities" />
        <ContentH3
          title="Partner API, automation, CSV, and future FHIR compatibility"
          color="ink"
          weight="normal"
        />

        <ContentStack>
          <ContentP>
            Choose the level of integration that fits your setup. Our
            partner-only API supports secure, role-controlled access while
            webhooks automate updates in real time. CSV and manual sync provide
            simple pathways for legacy or lightweight use. FHIR-ready
            architecture is planned to support NHS digital interoperability.
          </ContentP>
        </ContentStack>

        <BentoWrapper lgCols={6} lgRows={2}>
          <BentoCard lgColSpan={3} roundedLg={['tl']} smallTop>
            {/* 
							Visual idea:
							Central Salvify node with connecting lines to ePRF, audit, and stock systems — minimal network diagram on a surface-muted background. 

							Icon: HiOutlineGlobeAlt (represents connectivity / global data flow)
						*/}
            <BentoImage
              src=""
              alt="Diagram showing Salvify connected to healthcare systems through API links."
              positionClassName=""
            />
            <BentoText
              eyebrow="Integration Core"
              title="Partner API"
              text="Connect Salvify directly to your existing healthcare systems. The partner API exchanges stock, batch, and medicine usage data automatically, supporting reliable medicine management integrations at scale."
            />
          </BentoCard>

          <BentoCard lgColSpan={3} roundedLg={['tr']}>
            {/* 
							Visual idea:
							Padlock over network lines or shield icon beside connected nodes.

							Icon: HiOutlineShieldCheck
						*/}
            <BentoImage
              src=""
              alt="Secure data flow illustration showing locked connection between systems."
              positionClassName=""
            />
            <BentoText
              eyebrow="Governance & Control"
              title="Security and compliance"
              text="All integrations use encrypted transfer, UK-based hosting, and role-controlled access. Designed for secure healthcare data exchange and complete audit traceability."
            />
          </BentoCard>

          <BentoCard lgColSpan={2} roundedLg={['bl']}>
            {/* 
							Visual idea:
							Two screens with looping arrows between them — representing instant data transfer.

							Icon: HiOutlineBolt
						*/}
            <BentoImage
              src=""
              alt="llustration of two linked systems exchanging data instantly through webhooks."
              positionClassName=""
            />
            <BentoText
              eyebrow="Instant Sync"
              title="Real-time automation"
              text="Trigger updates the moment medicines are used or audits are logged. Webhooks keep connected systems synchronised without manual input, creating smoother healthcare workflow integration."
            />
          </BentoCard>
          <BentoCard lgColSpan={2}>
            {/* 
							Visual idea:
							Folder icon with upward and downward arrows — suggesting import/export.

							Icon: HiOutlineArrowUpOnSquare
						*/}
            <BentoImage
              src=""
              alt="Graphic showing CSV import and export between Salvify and another system."
              positionClassName=""
            />
            <BentoText
              eyebrow="Easy Start"
              title="Simple data exchange"
              text="Import or export CSV files to link Salvify with existing compliance or stock systems. Ideal for onboarding or bridging legacy workflows before full API adoption."
            />
          </BentoCard>
          <BentoCard lgColSpan={2} roundedLg={['br']} smallBottom>
            {/* 
							Visual idea:
							Stylised “data layers” graphic — stacked rectangles symbolising interoperable data formats.

							Icon: HiOutlineSquares2X2
						*/}
            <BentoImage
              src=""
              alt="Visual showing layered data blocks symbolising FHIR interoperability."
              positionClassName=""
            />
            <BentoText
              eyebrow="Future Compatibility"
              title="FHIR-ready design"
              text="Our platform is being built to align with NHS interoperability standards. FHIR-ready architecture will enable structured data exchange between medicine management, ePRFs, and EPR systems."
            />
          </BentoCard>
        </BentoWrapper>
      </Container>
    </section>
  )
}

export default IntegrationsCapabilities
