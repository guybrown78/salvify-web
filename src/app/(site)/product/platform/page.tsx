import { Container } from '@/components/Container'
import { Logo, LogoMark, LogoText } from '@/components/Logo'
import PlatformCoreCapabilities from '@/components/platform/PlatformCoreCapabilities'
import PlatformCTA from '@/components/platform/PlatformCTA'
import PlatformHero from '@/components/platform/PlatformHero'
import PlatformHowItWorks from '@/components/platform/PlatformHowItWorks'
import PlatformInsightsAndData from '@/components/platform/PlatformInsightsAndData'
import PlatformRoles from '@/components/platform/PlatformRoles'
import PlatformSecurityAndCompliance from '@/components/platform/PlatformSecurityAndCompliance'
import PlatformTrustedBy from '@/components/platform/PlatformTrustedBy'
import WhatThePlatformDoes from '@/components/platform/WhatThePlatformDoes'
import React from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'Medicine Management Software & Medical Inventory Platform | Salvify',
  description:
    'Salvify is the all-in-one medicine management software and medical inventory platform for healthcare teams. Gain real-time visibility, expiry control, and audit-ready compliance across every site.',
  // openGraph: {
  //   title: 'Medicine Management Platform | Salvify',
  //   description:
  //     'Salvify connects every part of your medical operation — from store to patient — with real-time visibility, compliance automation, and complete audit control.',
  //   url: 'https://www.salvify.co.uk/product/platform',
  //   siteName: 'Salvify',
  //   images: [
  //     {
  //       url: 'https://www.salvify.co.uk/og-platform.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Salvify Medicine Management Platform',
  //     },
  //   ],
  //   locale: 'en_GB',
  //   type: 'website',
  // },
  alternates: {
    canonical: 'https://www.salvify.co.uk/product/platform',
  },
}



const PlatformPage = () => {
	return (
		<main 
			role="main" 
			className=""
			
		>
			{/* JSON-LD structured data */}
			 <Script
        id="ld-json-platform"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Salvify Medicine Management Platform',
            applicationCategory: 'Healthcare Software',
            operatingSystem: 'Web',
            url: 'https://www.salvify.co.uk/product/platform',
            description:
              'A complete medicine management and medical inventory platform for healthcare teams. Track, manage, and audit medicines with real-time visibility and automated compliance.',
            brand: { '@type': 'Brand', name: 'Salvify' },
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              price: 'Subscription',
              priceCurrency: 'GBP',
            },
          }),
        }}
      />
			<PlatformHero />
			<WhatThePlatformDoes />
			<PlatformRoles />
			<PlatformHowItWorks />
			<PlatformCoreCapabilities />
			<PlatformSecurityAndCompliance />
			<PlatformInsightsAndData />
			<PlatformTrustedBy />
			<PlatformCTA />
		</main>
	)
}

export default PlatformPage