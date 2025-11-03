import React from 'react'
import { Container } from '../Container'
import { LogoMark } from '../Logo';
import { ContentH2 } from '../titles/Titles'
import { Button } from '../Button';

const PlatformCTA = () => {
	return (
				<section id="platform-cta" aria-labelledby="platform-cta" className="py-16 lg:py-24 bg-gradient-to-b from-white to-surface">
					<Container>
						<div className="rounded-3xl bg-ink text-white p-8 shadow-lg flex items-center">
		
								<div className='hidden md:flex items-center justify-center mr-8'>
									<LogoMark className='h-32' palette='teal' accentVar='#FFF'/>
								</div>
								<div>
									<ContentH2 title="Join medical teams across the UK who trust Salvify to manage medicines safely and compliantly." />
		
									<p className="mt-3 max-w-2xl text-white/80">
										cta body...
									</p>
		
									<div className="mt-6 flex flex-col gap-3 sm:flex-row">
										<Button href="/contact/book-a-demo" color="brand">Book a demo</Button>
										<Button href="/contact" variant="outline" color="brand">Contact sales</Button>
									</div>
		
								</div>
						</div>
						
					</Container>
				</section>
	)
}

export default PlatformCTA