import BentoCard from '@/components/cards/bento/BentoCard'
import BentoText from '@/components/cards/bento/BentoText'
import BentoWrapper from '@/components/cards/bento/BentoWrapper'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import SectionCTA from '../content/SectionCTA'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'


const OPHomepageFeatures = () => {
	return (
		 <section
      id="platform-features"
      aria-labelledby="platform-features-title"
      className="py-6 sm:py-12"
    >
      <Container className="">
        <Eyebrow title="Platform Features" />
        <ContentH2 title="Complete control of your medicines, wherever your team works" />
        <ContentP>
					Salvify is purpose-built for the realities of pre-hospital and mobile healthcare. Manage every medicine, bag and holding with complete clarity — from central store to clinical kit to patient.
				</ContentP>
        <BentoWrapper lgCols={6} lgRows={2}>
          <BentoCard
            lgColSpan={2}
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
              eyebrow="Visibility"
              title="Real-Time Stock Visibility"
              text="See the status of every medicine holding across your entire fleet in one dashboard. Know what is stocked, what is low and what needs attention — without picking up the phone."
            />
          </BentoCard>

 					<BentoCard
            lgColSpan={2}
          >
            <BentoText
              eyebrow="Expiry Control"
              title="Automated Expiry & Batch Alerts"
              text="Every medicine is tracked with its batch number and expiry date from the moment it enters your stock. Alerts surface items approaching expiry before they become a problem."
            />
          </BentoCard>

          <BentoCard lgColSpan={2} roundedLg={['tr']}>
            <BentoText
              eyebrow="Traceability"
              title="Complete Audit Trail"
              text="Every stock movement, edit and check is automatically recorded with a time-stamp and user attribution. Access a full history for any medicine or holding in seconds."
            />
          </BentoCard>

          <BentoCard
            lgColSpan={2}
            roundedLg={['bl']}
          >
            {/* <BentoImage src="/img/compliance.png" alt="Compliance dashboard" /> */}
						{/* A CD icon → a witness icon appears beside it → a “dual confirmation” marker locks in. */}
            <BentoText
              eyebrow="Readiness"
              title="MakeReady Shift Checklists"
              text="Guided digital checklists ensure every vehicle, kit and bag is stocked and ready before each shift. Managers can see completion status across all vehicles in real time."
            />
          </BentoCard>

          <BentoCard lgColSpan={2}>
            {/* <BentoImage src="/img/cd.png" alt="Controlled drugs" /> */}
						{/* A dashboard grows from a single tile → more tiles fade in showing expiry, usage, and movement graphs. */}
            <BentoText
              eyebrow="Control"
              title="Role-Based Access Control"
              text="Control who can view, adjust or authorise stock changes. Every action is linked to a named user, supporting accountability across your team."
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

			
      </Container>
    </section>
	)
}

export default OPHomepageFeatures