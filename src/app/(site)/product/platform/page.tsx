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

const PlatformPage = () => {
	return (
		<main role="main" className="">
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