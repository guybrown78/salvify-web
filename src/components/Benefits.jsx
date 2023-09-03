
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Benefits"
      className="bg-salvify-secondary py-20 sm:py-32"
    >
      <Container>

			{/* <div class="mx-auto max-w-7xl px-6 sm:mt-40 lg:px-8"> */}
      <div class="mx-auto max-w-5xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Discover the Benefits of Salvify</h2>
        <p class="mt-6 text-lg leading-8 text-slate-400">Salvify is more than just a medical inventory management solution, it is a transformative tool that revolutionises how healthcare providers operate. Our platform offers a multitude of advantages that enhance efficiency, compliance, and sustainability in the healthcare industry. Here are the top compelling benefits that make Salvify the go-to choice for healthcare inventory management:</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base text-slate-400 leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className=''>
          <dt class="font-semibold text-slate-300">Streamlined Inventory Control</dt>
          <dd class="mt-1 "><span className='italic text-salvify-accent-light'>Maximize Efficiency</span> - Salvify simplifies medical inventory management, helping you optimize stock levels, reduce waste, and ensure crucial supplies are always at your fingertips.</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-300">Unparalleled Compliance</dt>
          <dd class="mt-1 "><span className='italic text-salvify-accent-light'>Stay Regulatory-Ready</span> - Our compliance tools and features empower you to effortlessly meet healthcare regulations and standards, minimizing compliance-related stress and risks.</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-300">Cost Savings</dt>
          <dd class="mt-1 "><span className='italic text-salvify-accent-light'>Boost Financial Health</span> - Our intelligent resource allocation and waste reduction capabilities save you money, enabling investments in critical areas of patient care and facility improvement.</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-300">Real-time Visibility</dt>
          <dd class="mt-1"><span className='italic text-salvify-accent-light'>Stay Informed</span> - Gain instant insights into your medical inventory, from anywhere. Our real-time tracking ensures you are always up-to-date on stock levels and supply chain performance.</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-300">User-friendly Interface</dt>
          <dd class="mt-1"><span className='italic text-salvify-accent-light'>Effortless Adoption</span> - Salvifys intuitive design makes onboarding and daily use a breeze, with minimal training required for your team to harness its full potential..</dd>
        </div>
        <div>
          <dt class="font-semibold text-slate-300">Sustainability Champion</dt>
          <dd class="mt-1">Reduce Environmental Impact<span className='italic text-salvify-accent-light'></span> - Salvify aids in minimizing medical waste, contributing to a more sustainable healthcare system and a greener planet.</dd>
        </div>
      </dl>
    {/* </div> */}



        {/* <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">The benefits of Salvify</span>
            </span>{' '}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software will elevate your medical inventory system.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          
        </div> */}
      </Container>
    </section>
  )
}
