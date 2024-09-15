import React from 'react'
import { Container } from '@/components/Container'
import { FaRegCircleCheck } from "react-icons/fa6";
import SubscribeButton from './SubscribeButton';
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import subscribeImage from '@/images/subscribe/moreHappyMedics.jpg'
import Link from 'next/link';
import { Button } from '../Button';
const benefits = [
  'Latest healthcare insights',
  'Exclusive offers',
  'Join the Salvify community',
  'Unsubscribe at any time',
]


const SubscribeSmallWrapper = () => {
	return (
		<div className="bg-salvify-secondary py-6 sm:py-8">
			<Container>

          <div className="mx-auto max-w-2xl bg-salvify-primary/5 px-6 py-6 ring-1 ring-salvify-primary/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none ">
						<h2 className='text-base font-semibold leading-7 text-salvify-primary mb-4'>Want more expert insights?</h2>
						<div className="flex flex-col gap-16 lg:flex-row lg:items-center ">
							<div className="flex-1">
								<h3 className="text-1xl font-bold tracking-tight text-white sm:text-2xl">Explore our insights archive</h3>
								<p className="mt-6 text-base leading-8 text-gray-300">
									Discover a wealth of knowledge in our complete article archive. From best practices to industry innovations, dive into expert insights that can help you stay ahead in healthcare inventory management and compliance.
								</p>
								<div className="mt-6 flex">
									<Link href="/insights">
										<Button variant="outline" color="white">
											Explore the Archive <FaArrowRight className='ml-2'/>
										</Button>
									</Link>
								</div>
							</div>
							<div className="flex-1">
								<h3 className="text-1xl font-bold tracking-tight text-white sm:text-2xl">Join our mailing list</h3>
									<p className="mt-6 text-base leading-8 text-gray-300">
										Stay informed about the latest trends and best practices in healthcare. Subscribe to our newsletter for expert insights, updates, and exclusive resources tailored for medical professionals.
									</p>
									<div className="mt-6 flex">
										<SubscribeButton />
									</div>
							</div>
						</div>
         
          </div>

			</Container>
		</div>
	)
}

export default SubscribeSmallWrapper