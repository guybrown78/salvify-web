
'use client'


import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { TextField } from '@/components/Fields'
import axios, { AxiosResponse } from "axios";
import Airtable, { apiKey, endpointUrl } from "airtable";
import { useState } from "react";

export function Demo() {


	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);


	const formatDate = async () => {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}

	// Handles the submit event on form submit.
  const handleSubmit = async (event) => {

    // Stop the form from submitting and refreshing the page.

    event.preventDefault()

		
		setIsSuccess(false)
		setIsError(false)
		setIsLoading(true);

		var base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);

		base('Demo').create([
			{
				"fields": {
						Name: event.target.name.value,
						Email: event.target.email.value,
						Telephone: event.target.tel.value,
						Company: event.target.company.value,
						Message: event.target.message.value,
				}
			},

		], function(err, records) {
			if (err) {
				console.error(err);
				setIsError(true)
				// setIsLoading(false);

				return;
			}
			records.forEach(function (record) {
				console.log(record.getId());
				setIsSuccess(true);
				setIsLoading(false);
			});
		});
		
  }


  return (
    <section
      id="book-demo"
      aria-labelledby="Book demo"
      className="bg-slate-50 border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-normal tracking-tight text-gray-900"
          >
            Experience the future of medical inventory&nbsp;management
          </h2>
					<div className="mt-2 space-y-7 text-lg  text-dmDark">
				
						<p>
							Curious about how Salvify can enhance your medical inventory management? Our live demo lets you dive right into the practical side of things. Discover firsthand how our platform simplifies assurance, compliance, and patient safety for healthcare. No fluff, just a straightforward look at what our&nbsp;solution&nbsp;can&nbsp;do&nbsp;for&nbsp;you.
						</p>
					</div>
          
					
        </div>

			



				<div className="relative mx-auto flex w-full max-w-2xl flex-col">


					{
						isLoading && 

							<div className='absolute pt-6 pb-4 h-full w-full flex'>
								<div className="-mx-4 mt-4 w-full h-full flex-1 bg-white opacity-40 px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">
									<div className="-mx-4 mt-4 h-full bg-white/40 px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">	
									</div>
								</div>
							</div>

					}
					

					{
						isSuccess && 
					
							<div className='absolute pt-6 pb-4 h-full w-full flex'>
								<div className="-mx-4 mt-4 w-full h-full flex-1 flex items-center justify-center bg-white/60 px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">
									<div className="mx-10  mt-4 bg-white/90 px-4 py-6 shadow-2xl shadow-gray-900/10 sm:flex-none rounded-3xl sm:p-24 flex items-center justify-items-end flex-col space-y-7">
										<h5 className='text-salvify-accent-green text-2xl font-bold'>Success</h5>
										<p className='text-salvify-secondary text-md'>Thank you. We will be in touch to arrange a demo</p>
									</div>
								</div>
							</div>
					}

					



					<div className="relative mt-4 sm:mt-6">
					</div>
					<div className="-mx-4 mt-4 flex-auto bg-white px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">
						
					

					
					<form onSubmit={(e) => handleSubmit(e)}>

							<TextField
								label="Name"
								id="name"
								name="name"
								type="name"
								autoComplete="name"
								required
							/>
							<TextField
								label="Email address"
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
							<TextField
								label="Phone"
								id="tel"
								name="tel"
								type="tel"
								autoComplete="tel"
								required
							/>
							<TextField
								label="Company"
								id="company"
								name="company"
								type="text"
							/>
							<TextField
								label="Message"
								id="message"
								name="message"
								type="text"
								required
							/>
		
						<Button type="submit" color="green" className="mt-8 w-full">

							{
								isLoading && 

								<span className='flex justify-center items-center'>
								
									<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>	
									<span>Requesting demo</span>
								</span>

							}
							{
								!isLoading && 

					
								<span>Request a demo</span>
						

							}

						</Button>
					</form>


					</div>
				</div>


       
			
      </Container>
    </section>
  )
}
