import React from 'react'
import clsx from 'clsx'
import { Button } from '../Button'
import { LogoMark } from '../Logo'
import { ContentH2 } from '../content/Titles'
import { Container } from '../Container'

const ExpoCTA = () => {
	return (

		<section
			id="call-to-action-platform"
			aria-labelledby="call-to-action-platform-title"
			className="overflow-hidden py-6 lg:py-12 bg-gradient-to-tr from-brand-500 to-ink via-100% to-50%"
		>

			<Container>
						<div className="flex items-center rounded-3xl bg-ink p-8 text-white shadow-lg bg-ink/5">
			<div className="mr-8 hidden items-center justify-center md:flex">
				<LogoMark className="h-32" palette="teal" accentVar="#FFF" />
			</div>
			<div>
				<ContentH2 title="Not ready yet?" />

				<p className="mt-3 max-w-2xl text-white/80">Explore the platform in more detail or speak to our team.</p>

				<div className="mt-6 flex flex-col gap-3 sm:flex-row">
					<Button href="/" color="brand">
						View platform
					</Button>
					<Button href="/contact" variant="outline" color="brand">
						Contact sales
					</Button>
				</div>
					</div>
			</div>
			</Container>
		</section>

	)
}

export default ExpoCTA