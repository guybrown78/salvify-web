import CraigRabbetts from '@/components/company/team/CraigRabbetts'
import Culture from '@/components/company/team/Culture'
import GuyBrown from '@/components/company/team/GuyBrown'
import TeamCTA from '@/components/company/team/TeamCTA'
import TeamFounders from '@/components/company/team/TeamFounders'
import TeamHero from '@/components/company/team/TeamHero'
import React from 'react'

const TheSalvifyTeamPage = () => {
	return (
		<main role="main">
			<TeamHero />
			<TeamFounders />
			<CraigRabbetts />
			<GuyBrown />
			<Culture />
			<TeamCTA />
		</main>
	)
}

export default TheSalvifyTeamPage