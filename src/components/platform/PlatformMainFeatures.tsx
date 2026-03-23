'use client'

import { useEffect, useState } from 'react'
import { Container } from '../Container'
import { ContentH2 } from '../content/Titles'
import Eyebrow from '../content/Eyebrow'
import { ContentP } from '../content/Typography'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import ScreenImageContainer from '../screenshots/ScreenImageContainer'

import desktopScreenshotDashboard from '../../../public/images/screens/desktop-screenshot-dashboard.png'
import mobileScreenshotDashboard from '../../../public/images/screens/mobile-screenshot-dashboard.png'

import desktopScreenshotStock from '../../../public/images/screens/desktop-screenshot-stock.png'
import mobileScreenshotStock from '../../../public/images/screens/mobile-screenshot-stock.png'

import desktopScreenshotItem from '../../../public/images/screens/desktop-screenshot-item.png'
import mobileScreenshotItem from '../../../public/images/screens/mobile-screenshot-item.png'

import desktopScreenshotMovement from '../../../public/images/screens/desktop-screenshot-movement.png'
import mobileScreenshotMovement from '../../../public/images/screens/mobile-screenshot-movement.png'

interface Feature {
	title: string
	titleSmall: string
	description: string
	desktopImage: StaticImageData
	mobileImage: StaticImageData
	imageAlt: string
}

const features: Feature[] = [
	{
		title: 'Operational Dashboard',
		titleSmall: 'Dashboard',
		description:
			'See the status of medicines across your organisation in one place. Real-time alerts and trend data highlight what needs attention.',
		desktopImage: desktopScreenshotDashboard,
		mobileImage: mobileScreenshotDashboard,
		imageAlt: 'Salvify operational dashboard screenshot',
	},
	{
		title: 'Medicine Detail',
		titleSmall: 'Stock',
		description:
			'Drill into any medicine to see batches, expiries, locations and stock activity. Every item is fully traceable with a clear audit history.',
		desktopImage: desktopScreenshotStock,
		mobileImage: mobileScreenshotStock,
		imageAlt: 'Salvify stock check screenshot',
	},
	{
		title: 'Organisation Overview',
		titleSmall: 'Overview',
		description:
			'Understand stock levels, usage and risk across your organisation. Identify gaps, trends and expiry issues across vehicles, bags and locations.',
		desktopImage: desktopScreenshotItem,
		mobileImage: mobileScreenshotItem,
		imageAlt: 'Salvify medicine analysis screenshot',
	},
	{
		title: 'Movement & Traceability',
		titleSmall: 'Traceability',
		description:
			'Track every movement from delivery to patient use. Trace batches through the chain of custody with a complete audit trail.',
		desktopImage: desktopScreenshotMovement,
		mobileImage: mobileScreenshotMovement,
		imageAlt: 'Salvify stock movements screenshot',
	},
]

const PlatformMainFeatures = () => {
	const [tabOrientation, setTabOrientation] = useState('horizontal')

	useEffect(() => {
		const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

		function onMediaQueryChange({ matches }: MediaQueryListEvent | MediaQueryList) {
			setTabOrientation(matches ? 'vertical' : 'horizontal')
		}

		onMediaQueryChange(lgMediaQuery)
		lgMediaQuery.addEventListener('change', onMediaQueryChange)

		return () => {
			lgMediaQuery.removeEventListener('change', onMediaQueryChange)
		}
	}, [])

	return (
		<section
			id="salvify-platform-primary-features"
			aria-labelledby="salvify-platform-primary-features-title"
			className="overflow-hidden bg-brand-500 pt-16 pb-0 lg:py-24"
		>
			<Container>
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-4xl">
					<Eyebrow title="Product in Action" color="surface" />
					<ContentH2
						title="Complete Control of Your Medicines, Wherever You Work"
						color="white"
					/>
					<ContentP className="text-surface">
						Manage every medicine, bag and holding with complete clarity. Salvify gives
						healthcare teams a consistent, reliable view of batches, expiries and stock
						status whether you are on base, on the road or working remotely.
					</ContentP>
				</div>

				<TabGroup
					as="div"
					className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
					vertical={tabOrientation === 'vertical'}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-4">
								<TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
									{features.map((feature, featureIndex) => (
										<div
											key={feature.title}
											className={clsx(
												'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
												selectedIndex === featureIndex
													? 'bg-surface lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/5'
													: 'hover:bg-white/5 lg:hover:bg-brand/5'
											)}
										>
											<h3>
												<Tab
													className={clsx(
														'font-display text-md font-extrabold lg:text-lg ui-not-focus-visible:outline-none transition-colors',
														selectedIndex === featureIndex
															? 'text-brand-500 lg:text-white'
															: 'text-white/80 hover:text-white lg:text-surface-muted'
													)}
												>
													<span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
													{tabOrientation === 'vertical'
														? feature.title
														: feature.titleSmall}
												</Tab>
											</h3>
											<p
												className={clsx(
													'mt-2 hidden text-sm lg:block',
													selectedIndex === featureIndex
														? 'text-white'
														: 'text-surface-muted/80 group-hover:text-white'
												)}
											>
												{feature.description}
											</p>
										</div>
									))}
								</TabList>
							</div>

							<TabPanels className="lg:col-span-8">
								{features.map((feature) => (
									<TabPanel key={feature.title} unmount={false}>
										<div className="relative sm:px-6 lg:hidden">
											<div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
											<p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
												{feature.description}
											</p>
										</div>

										<ScreenImageContainer
											aspect="responsive"
											className="mt-10 w-[45rem] overflow-hidden sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
											ariaTitle={feature.imageAlt}
										>
											<div className="w-full">
												<Image
													src={feature.mobileImage}
													alt={feature.imageAlt}
													className="block h-auto w-full md:hidden"
												/>
												<Image
													src={feature.desktopImage}
													alt={feature.imageAlt}
													className="hidden h-auto w-full md:block"
												/>
											</div>
										</ScreenImageContainer>
									</TabPanel>
								))}
							</TabPanels>
						</>
					)}
				</TabGroup>
			</Container>
		</section>
	)
}

export default PlatformMainFeatures