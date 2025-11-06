import IntegrationsBenefits from '@/components/integrations/IntegrationsBenefits'
import IntegrationsCapabilities from '@/components/integrations/IntegrationsCapabilities'
import IntegrationsCTA from '@/components/integrations/IntegrationsCTA'
import IntegrationsHero from '@/components/integrations/IntegrationsHero'
import IntegrationsOverview from '@/components/integrations/IntegrationsOverview'
import IntegrationsRoadMap from '@/components/integrations/IntegrationsRoadMap'
import Script from 'next/script'

export const metadata = {
  title: 'Integrations | Salvify — Medicine Management Integrations & ePRF Integration',
  description:
    'Connect Salvify with your existing healthcare systems. Partner API, webhooks, CSV, and future FHIR compatibility. Designed for medicine management integrations and ePRF integration.',
  alternates: {
    canonical: 'https://www.salvify.co.uk/product/integrations',
  },
}
const IntegrationsPage = () => {
	return (
		<main role="main" >
			<IntegrationsHero />
			<IntegrationsOverview />
			<IntegrationsCapabilities />
			<IntegrationsBenefits />
			<IntegrationsRoadMap />
			<IntegrationsCTA />
		</main>
	)
}

export default IntegrationsPage