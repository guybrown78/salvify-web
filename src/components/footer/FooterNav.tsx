import React from 'react'
import FooterNavLink from './FooterNavLink'

const FooterNav = () => {
	return (
		<nav className="mt-10 text-sm" aria-label="quick links">
			<div className="-my-1 flex justify-center gap-x-6">
				<FooterNavLink title="Features" anchor="/#features" />
				<FooterNavLink title="About" anchor="/#about" />
				<FooterNavLink title="Benefits" anchor="/#benefits" />
				<FooterNavLink title="Insights" anchor="/insights" />
			</div>
		</nav>
	)
}

export default FooterNav