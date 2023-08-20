
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-salvify-secondary sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">About Salvify</span>
            </span>{' '}
          </h2>
          <p className="mt-4 text-lg text-salvify-secondary">
            Lorum ipsum solar dolar...
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          
        </div>
      </Container>
    </section>
  )
}
