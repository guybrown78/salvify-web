
'use client'

import { FaEnvelopeOpenText, FaSpinner, FaCheck } from 'react-icons/fa6'
import { useEffect, useRef, useState} from 'react'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import Airtable from "airtable";
import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { ModalWrapper } from '@/components/modals/ModalWrapper'
import { formDate } from '@/lib/formDate';

type Props = {
	openModal:boolean,
	onCloseModal:() => void
}

export function SubscribeModal({ openModal = false, onCloseModal}:Props){


  const cancelButtonRef = useRef(null)

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	// Handles the submit event on form submit.
  const handleSubmit = async (event:any) => {
		// Stop the form from submitting and refreshing the page.
    event.preventDefault()

		setIsSuccess(false)
		setIsError(false)
		setIsLoading(true);
		
		const date = await formDate()

		const fields = {
			FirstName: event.target.first_name.value,
			Email: event.target.email.value,
			SubscribedDate: date,
			Subscribed:true,
		}

		const airtableToken:string = process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN as string;
		const airtableBase:string = process.env.NEXT_PUBLIC_AIRTABLE_BASE as string;
		const base = new Airtable({apiKey: airtableToken}).base(airtableBase);

		base('subscriptions').create([{
			fields
		}], (err:any, records:any) => {
			if (err) {
				setIsError(true)
				setIsLoading(false);
				return;
			}
			records.forEach(() => {
				setIsSuccess(true);
				setIsLoading(false);
			});
		});

	}

	useEffect(() => {
		if(openModal){
			setIsSuccess(false);
			setIsError(false);
			setIsLoading(false);
		}
	}, [openModal])

	useEffect(() => {
		if(isSuccess){
			// on Success
			setTimeout(() => {
				onCloseModal();
			},750)
		}
	}, [isSuccess, onCloseModal])


	return(
		<ModalWrapper openModal={openModal} onCloseModal={() => {
			!isLoading ? onCloseModal() : null
		}} initialFocusRef={cancelButtonRef}>
			<form
				onSubmit={(e) => handleSubmit(e)}
			>
				<div>
					<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
						<FaEnvelopeOpenText className="h-6 w-6 text-green-600" aria-hidden="true" />
					</div>
					<div className="mt-3 text-center sm:mt-5 text-salvify-secondary">
						<Dialog.Title as="h3" className="text-base font-semibold leading-6 ">
							Subscribe to our Newsletter
						</Dialog.Title>
						<div className="mt-2">
							<p className="text-sm">
							Join the Salvify newsletter and stay informed about the latest trends and best practices in medical inventory. Get <span className='font-semibold'>latest insights</span>, <span className='font-semibold'>exclusive offers</span>, <span className='font-semibold'>early access</span> to updates, and <span className='font-semibold'>connect</span> with a community of healthcare professionals. Elevate your medical inventory – <span className='font-semibold'>subscribe now</span>.
							</p>
						</div>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 text-left">

							<TextField
								className="col-span-full"
								label="Your first name"
								id="first_name"
								name="first_name"
								type="text"
								autoComplete="given-name"
								required
							/>	

							<TextField
								className="col-span-full"
								label="Email address"
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>

						</div>
		
						<div className="mt-4">
							<p className="text-xs text-salvify-secondary">
							Don&apos;t worry, we will never share your details with anyone else. You can read our <Link href="/policies/privacy-policy" onClick={onCloseModal} className='text-salvify-primary font-bold'>Privacy Policy</Link> for all the details. To stop recieving our newsletters, click <span className="italic font-semibold">&quot;Unscubscribe&quot;</span> in any our newsletters
							</p>
						</div>

					</div>
				</div>

				<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">

					<Button
						type="submit"
						color='green'
						width='full'
						rounded='normal'
						className="sm:col-start-2"
						disabled={isLoading || isSuccess}
					>
						{
								!isLoading && !isSuccess &&(
									<span className='flex items-center'>
										Subscribe
									</span>
								)
							}
							{
								isLoading && !isSuccess && (
									<span className='flex items-center'>
										Subscribing<span aria-hidden="true" className="ml-2"><FaSpinner className="w-5 h-5 animate-spin"/></span>
									</span>
								)
							}
							{
								!isLoading && isSuccess && (
									<span className='flex items-center'>
										Subscribed<span aria-hidden="true" className="ml-2"><FaCheck className="w-5 h-5"/></span>
									</span>
								)
							}
					</Button>

					<Button
						type="button"
						variant='outline'
						width='full'
						rounded='normal'
						color='slate'
						onClick={onCloseModal}
						disabled={isLoading}
						className='mt-3 sm:col-start-1 sm:mt-0'
						innerRef={cancelButtonRef}
					>
						Cancel
					</Button>

					<div className={clsx(isError ? 'block' : 'hidden',"col-span-2 mt-4")}>
						<p className='text-center text-slate-700 text-sm '><span className='font-semibold text-red-700'>Oh dear!</span> - Something went wrong when trying to subscribe.<br />Please try again shortly.</p>
					</div>

				</div>
			</form>
		</ModalWrapper>
	)
}