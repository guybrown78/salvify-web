import React from 'react'
import { Container } from '../Container'
import FooterBasement from './FooterBasement'
import { Logo } from '@/components/Logo'
import FooterLegalLinks from './FooterLegalLinks'
import FooterNav from './FooterNav'

const Footer = () => {
	return (
		<footer className="mt-5 border-t border-slate-200/50 bg-slate-50">
			<Container>
				<div className="pb-8 pt-24 lg:pt-32">
					<div className="xl:grid xl:grid-cols-3 xl:gap-8">

						<div className="space-y-8">
							<div className="w-32">
								<Logo/>
							</div>
							
            	<p className="text-sm leading-6 text-slate-600">
								The Digital Ointment for your Medical Inventory Pain
							</p>

						</div>

						<FooterNav />
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-0 my-8">
					<FooterLegalLinks />
				</div>
			</Container>

			<FooterBasement />
		</footer>
	)
}

export default Footer