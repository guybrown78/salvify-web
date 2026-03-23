import CraigRabbetts from '@/components/company/team/CraigRabbetts'
import Culture from '@/components/company/team/Culture'
import FounderVideo from '@/components/company/team/FounderVideo'
import GuyBrown from '@/components/company/team/GuyBrown'
import TeamCTA from '@/components/company/team/TeamCTA'
import TeamFounders from '@/components/company/team/TeamFounders'
import TeamHero from '@/components/company/team/TeamHero'
import Script from 'next/script'
import React from 'react'

export const metadata = {
  title: 'The Salvify Team | People Behind Confidence in Care',
  description:
    'Meet the Salvify team — healthcare and technology professionals dedicated to making medicine management safer, simpler, and compliant. Learn more about founders Craig Rabbetts and Guy Brown.',
  keywords:
    'Salvify team, Salvify founders, Craig Rabbetts, Guy Brown, medicine management software team, healthcare technology UK, medical compliance software, about Salvify, medical software company UK',
  // openGraph: {
  //   title: 'The Salvify Team | People Behind Confidence in Care',
  //   description:
  //     'Meet the people behind Salvify. Experienced professionals in healthcare and software design working to simplify medicine management and compliance for every healthcare setting.',
  //   url: 'https://www.salvify.co.uk/company/the-salvify-team',
  //   siteName: 'Salvify',
  //   locale: 'en_GB',
  //   type: 'website',
  //   images: [
  //     {
  //       url: 'https://www.salvify.co.uk/og/the-salvify-team.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'The Salvify Team',
  //     },
  //   ],
  // },
	alternates: { canonical: 'https://www.salvify.co.uk/company/the-salvify-team' },
}

const TheSalvifyTeamPage = () => {
  return (
    <main role="main">
      <Script
       	id="structured-data-team"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Salvify',
            url: 'https://www.salvify.co.uk',
            logo: 'https://www.salvify.co.uk/logo.svg',
            description:
              'Salvify is a UK healthcare technology company specialising in medicine management and compliance software for medical teams.',
            sameAs: [
              'https://www.linkedin.com/company/salvify',
              'https://twitter.com/salvify',
            ],
            member: [
              {
                '@type': 'Person',
                name: 'Craig Rabbetts',
                jobTitle: 'Co-Founder & Medical Director',
                description:
                  'Registered medical professional with experience in offshore and remote medicine. Leads Salvify’s clinical and compliance strategy.',
                image:
                  'https://www.salvify.co.uk/images/team/craig-rabbetts.jpg',
              },
              {
                '@type': 'Person',
                name: 'Guy Brown',
                jobTitle: 'Co-Founder & Technical Director',
                description:
                  'Software engineer with over 20 years of experience in compliance-focused system design. Leads product architecture and development at Salvify.',
                image: 'https://www.salvify.co.uk/images/team/guy-brown.jpg',
              },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              email: 'info@salvify.co.uk',
              url: 'https://www.salvify.co.uk/contact',
            },
          }),
        }}
      />
      <TeamHero />
      <TeamFounders />
			<FounderVideo />
      <CraigRabbetts />
      <GuyBrown />
      <Culture />
      <TeamCTA />
    </main>
  )
}

export default TheSalvifyTeamPage
