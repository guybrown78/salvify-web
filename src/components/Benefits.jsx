
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
        <div className="md:text-center">
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
          
        </div>
      </Container>
    </section>
  )
}
