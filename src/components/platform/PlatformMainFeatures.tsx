'use client'

import { useEffect, useState } from 'react'
import { Container } from '../Container'
import { ContentH2 } from '../content/Titles'
import Eyebrow from '../content/Eyebrow'
import { ContentP } from '../content/Typography'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import screenshotDashboard from '@/images/screenshots/dashboard.png'
import screenshotStock from '@/images/screenshots/stock.png'
import screenshotItem from '@/images/screenshots/item.png'
import screenshotOrder from '@/images/screenshots/order.png'
import clsx from 'clsx'
import ScreenImageContainer from '../screenshots/ScreenImageContainer'

const features = [
	{
		title: 'Operational Dashboard',
		titleSmall: 'Dashboard',
		description:
			"See the status of every holding and kit in one place. Real-time alerts highlight what needs attention so teams stay compliant and prepared.",
		image: screenshotDashboard,
	},
	{
		title: 'Stock Check',
		titleSmall: 'Stock',
		description:
			"View stock levels across every vehicle, bag or site with simple colour coding that shows what is ready, low or out of date.",
		image: screenshotStock,
	},
	{
		title: 'Detailed Medicine Analysis',
		titleSmall: 'Medicine Analysis',
		description:
			"Drill into any medicine item to see batches, expiries and movements. Every item is fully traceable so nothing is ever unaccounted for.",
		image: screenshotItem,
	},
	{
		title: 'Stock Movements',
		titleSmall: 'Stock Movements',
		description:
			'Track every movement from store to kit to patient care. Salvify keeps a complete, time-stamped record so teams always know where each item has been.',
		image: screenshotOrder,
	},
]



const PlatformMainFeatures = () => {
	let [tabOrientation, setTabOrientation] = useState('horizontal')

	useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
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
      className="overflow-hidden bg-brand-500 pt-16 pb-0  lg:py-24"
    >
			<Container>
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-4xl">
					<Eyebrow title='Product in Action' color='surface' />
					<ContentH2 title='Complete Control of Your Medicines, Wherever You Work' color='white'/>
					<ContentP className='text-surface'>
						Manage every medicine, bag and holding with complete clarity. Salvify gives healthcare teams a consistent, reliable view of batches, expiries and stock status whether you are on base, on the road or working remotely.
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
														<span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none " />
														{tabOrientation === 'vertical' ? feature.title : feature.titleSmall}
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
									<TabPanel key={feature.title} unmount={false} >
										<div className="relative sm:px-6 lg:hidden">
											<div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>

										<ScreenImageContainer
											aspect="responsive"
											className='mt-10 w-[45rem] overflow-hidden sm:w-auto lg:mt-0 lg:w-[67.8125rem]'
										>
											
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