import React from 'react'
import Image from 'next/image'
import { Container } from '../Container'

const TrustCredibility = () => {
	return (
		<section
			id="salvify-trust-and-credibility"
			aria-labelledby="salvify-trust-and-credibility-title"
			className="mt-8 overflow-hidden py-16 lg:py-24"
		>
			<Container>
				<div className="flex items-center justify-center">
					<p className="text-md text-center text-brand-500">
						Trusted by ambulance services and medical providers across the UK
					</p>
				</div>

				<ul className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
					<li className="flex items-center justify-center">
						<Image
							src="/images/client-logos/client-logo-enhanced.png"
							alt="Enhanced Medical logo"
							width={200}
							height={100}
							className="h-auto w-full max-w-[160px] object-contain"
						/>
					</li>

					<li className="flex items-center justify-center">
						<Image
							src="/images/client-logos/client-logo-fsne.png"
							alt="FSNE Medical logo"
							width={200}
							height={100}
							className="h-auto w-full max-w-[160px] object-contain"
						/>
					</li>

					<li className="flex items-center justify-center">
						<Image
							src="/images/client-logos/client-logo-mersey.png"
							alt="Mersey Medical logo"
							width={200}
							height={100}
							className="h-auto w-full max-w-[160px] object-contain"
						/>
					</li>

					<li className="flex items-center justify-center">
						<Image
							src="/images/client-logos/client-logo-spark.png"
							alt="Spark Medical logo"
							width={200}
							height={100}
							className="h-auto w-full max-w-[160px] object-contain"
						/>
					</li>
				</ul>
			</Container>
		</section>
	)
}

export default TrustCredibility