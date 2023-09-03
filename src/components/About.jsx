

import { Container } from '@/components/Container'


export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>



      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-salvify-primary">Work better</p>
          <h2 className="font-display text-3xl tracking-tight text-salvify-secondary sm:text-4xl">An insight into Salvify</h2>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
								At Salvify, we are driven by a deep passion for healthcare excellence. Our mission is clear, <span className='font-semibold'>to simplify the intricate world of medical inventory management</span>. We know firsthand the challenges healthcare providers face – the need for rigorous compliance, the quest for cost-efficiency, and the unwavering commitment to patient care.
              </p>
              <p className="mt-8">
								Our journey is marked by innovation, integrity, and an unwavering dedication to improving healthcare. We have crafted a cutting-edge SaaS application that empowers you to meet these challenges with ease.
              </p>
            </div>
            <div>
              <p>
								Salvify stands as a beacon of change in healthcare inventory management. With a user-centric approach, we continually refine our software to adapt to your evolving needs.
              </p>
              <p className="mt-8">
								Join us on this transformative healthcare journey. Discover how Salvify is shaping a future where medical inventory management is simple, compliant, and sustainable. Welcome to a new era in healthcare inventory management. Welcome to Salvify.
              </p>
            </div>
          </div>

        </div>

    </div>


      </Container>
    </section>
  )
}
