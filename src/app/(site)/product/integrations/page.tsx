import IntegrationsBenefits from '@/components/integrations/IntegrationsBenefits'
import IntegrationsCapabilities from '@/components/integrations/IntegrationsCapabilities'
import IntegrationsCTA from '@/components/integrations/IntegrationsCTA'
import IntegrationsHero from '@/components/integrations/IntegrationsHero'
import IntegrationsOverview from '@/components/integrations/IntegrationsOverview'
import IntegrationsRoadMap from '@/components/integrations/IntegrationsRoadMap'
import Script from 'next/script'

export const metadata = {
  title:
    'Integrations | Salvify — Medicine Management Integrations & ePRF Integration',
  description:
    'Connect Salvify with your existing healthcare systems. Partner API, webhooks, CSV, and future FHIR compatibility. Designed for medicine management integrations and ePRF integration.',
  alternates: {
    canonical: 'https://www.salvify.co.uk/product/integrations',
  },
}
const IntegrationsPage = () => {
  return (
    <main role="main">
      <Script
        id="structured-data-integrations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Salvify Medicine Management Platform',
            description:
              'A medicine management and compliance platform designed for healthcare providers. Integrates with ePRF and EPR systems through partner APIs, webhooks, and future FHIR compatibility.',
            brand: {
              '@type': 'Brand',
              name: 'Salvify',
            },
            url: 'https://www.salvify.co.uk/product/integrations',
            category: 'Healthcare Software',
            operatingSystem: 'Web-based',
            offers: {
              '@type': 'Offer',
              price: 'Contact for pricing',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
              url: 'https://www.salvify.co.uk/book-a-demo',
            },
            keywords: [
              'medicine management integrations',
              'ePRF integration',
              'healthcare system interoperability',
              'medical inventory API',
              'secure healthcare data exchange',
            ],
            potentialAction: {
              '@type': 'Action',
              name: 'Book a discovery call',
              target: 'https://www.salvify.co.uk/book-a-demo',
            },
          }),
        }}
      />
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
