
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="bg-salvify-secondary py-10 sm:py-22"
    >
      <Container>
        <div className="md:text-center">
         <h3 className="font-display text-xl tracking-tight text-white">
            Contact Us
          </h3>
          <p className="mt-4 text-lg text-slate-400">
            Alternatively, you can contact Salvify using <a href='mailto:info@salvify.co.uk' className='text-salvify-accent-light'>info@salvify.co.uk</a>
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          
        </div>
      </Container>
    </section>
  )
}
