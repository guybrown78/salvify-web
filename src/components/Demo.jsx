
'use client'


import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { TextField } from '@/components/Fields'

export function Demo() {


	// Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
 
    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
			tel: event.target.tel.value,
			company: event.target.company.value,
			message: event.target.message.value,
		}
 
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = 'https://hooks.airtable.com/workflows/v1/genericWebhook/app5678pdt4E5GjWE/wflUTu0jFsVotPM6q/wtrkoDsymsUpjJJ4l'
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
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

			



				<div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">

					<div className="relative mt-4 sm:mt-6">
					</div>
					<div className="-mx-4 mt-4 flex-auto bg-white px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none rounded-3xl sm:p-24">
						

					<form onSubmit={handleSubmit}>

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
