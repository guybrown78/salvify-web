import React from 'react'

type Props = {
	heroTitle:string,
	heroSubTitle:string,
}

const FeatureHero = ({ heroTitle, heroSubTitle }: Props) => {
	return (
		 <div className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
    
            <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty sm:mt-10 sm:text-7xl ">
              { heroTitle }
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty  sm:text-xl/8">
              { heroSubTitle }
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Get started
              </a> */}
              {/* <a href="#" className="text-sm/6 font-semibold ">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            className="aspect-3/2 w-full 0 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
	)
}

export default FeatureHero