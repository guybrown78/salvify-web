import React from 'react'

import CdrHero from '@/components/cdr/CdrHero'
import CdrProofStrip from '@/components/cdr/CdrProofStrip'
import CdrProblem from '@/components/cdr/CdrProblem'
import CdrJourney from '@/components/cdr/CdrJourney'
import CdrRegister from '@/components/cdr/CdrRegister'
import CdrCustody from '@/components/cdr/CdrCustody'
import CdrWitnessing from '@/components/cdr/CdrWitnessing'
import CdrGovernance from '@/components/cdr/CdrGovernance'
import CdrFrontline from '@/components/cdr/CdrFrontline'
import CdrIntegration from '@/components/cdr/CdrIntegration'
import CdrAssurance from '@/components/cdr/CdrAssurance'
import CdrAudience from '@/components/cdr/CdrAudience'
import CdrBenefits from '@/components/cdr/CdrBenefits'
import CdrCTA from '@/components/cdr/CdrCTA'

const CANONICAL = 'https://www.salvify.co.uk/controlled-drug-register'

const DESCRIPTION =
  "Salvify's Controlled Drug Register brings controlled drug stock, custody, witnessing, stock checks, discrepancies and audit into one medicines management platform, built for ambulance services, event medical, repatriation and remote care."

export const metadata = {
  title: 'Controlled Drug Register for Pre-Hospital Care | Salvify',
  description: DESCRIPTION,
  keywords: [
    'controlled drug register',
    'controlled drugs register for pre-hospital care',
    'controlled drug management',
    'controlled drug register software',
    'CD register software',
    'controlled drugs pre-hospital care',
    'EMS controlled drugs',
    'ambulance controlled drug register',
    'controlled drug management for ambulance services',
    'medicine management for pre-hospital care',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    siteName: 'Salvify',
    title: 'Controlled Drug Register for Pre-Hospital Care | Salvify',
    description: DESCRIPTION,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Controlled Drug Register for Pre-Hospital Care | Salvify',
    description: DESCRIPTION,
  },
}

export const revalidate = 60

const ControlledDrugRegisterPage = () => {
  return (
    <main role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Salvify Controlled Drug Register',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            url: CANONICAL,
            description: DESCRIPTION,
            brand: { '@type': 'Brand', name: 'Salvify' },
            isPartOf: {
              '@type': 'SoftwareApplication',
              name: 'Salvify Medicine Management',
              url: 'https://www.salvify.co.uk/product/platform',
            },
            audience: {
              '@type': 'Audience',
              audienceType:
                'Ambulance services, event medical providers, repatriation, offshore and remote medical teams',
            },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              price: 'Subscription',
              priceCurrency: 'GBP',
            },
          }),
        }}
      />

      <CdrHero />
      <CdrProofStrip />
      <CdrProblem />
      <CdrJourney />
      <CdrRegister />
      <CdrCustody />
      <CdrWitnessing />
      <CdrGovernance />
      <CdrFrontline />
      <CdrIntegration />
      <CdrAssurance />
      <CdrAudience />
      <CdrBenefits />
      <CdrCTA />
    </main>
  )
}

export default ControlledDrugRegisterPage
