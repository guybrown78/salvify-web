
'use client'


import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { TextField } from '@/components/Fields'
import axios, { AxiosResponse } from "axios";
import Airtable, { apiKey, endpointUrl } from "airtable";

export function Demo() {


	// Handles the submit event on form submit.
  const handleSubmit = async (event) => {

		var base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);



    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
		console.log("handling")


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
				return;
			}
			records.forEach(function (record) {
				console.log(record.getId());
			});
		});


    // Get data from the form.
    /*const data = {
			"records":[
				{
					fields: {
						"Assignee": {
							"id": "usryk9eCA5l8JlQlA",
							"email": "guy@digitalopolis.co.uk",
							"name": "Guy Brown"
						},
						Name: event.target.name.value,
						Email: event.target.email.value,
						Telephone: event.target.tel.value,
						Company: event.target.company.value,
						Message: event.target.message.value,
					}
				}
			]
				
		}*/
			
/*
 
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE}/Demo`

 
    // Send the form data to our forms API on Vercel and get a response.
    // const response = await axios(endpoint, options)
		const response = await axios.post(endpoint, JSONdata, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}`
      }
    });

 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
		*/
		
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

					<div className='hidden absolute pt-6 pb-4 h-full w-full flex'>
						<div className="-mx-4 mt-4 w-full h-full flex-1 bg-salvify-primary/60 px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">
							<div className="-mx-4 mt-4 bg-salvify-primary px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">
								<p>Success</p>
							</div>
						</div>
					</div>

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
							Request a demo
						</Button>
					</form>


					</div>
				</div>


       
			
      </Container>
    </section>
  )
}
