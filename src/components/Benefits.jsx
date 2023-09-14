
import { Container } from '@/components/Container'


export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Benefits"
      className="bg-salvify-secondary py-20 sm:py-32"
    >
      <Container>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Discover the benefits of Salvify</h2>
        <p className="mt-6 text-lg leading-8 text-slate-400">Salvify is more than just a medical inventory management solution, it is a transformative tool that revolutionises how healthcare providers operate. Our platform offers a multitude of advantages that enhance efficiency, compliance, and sustainability in the healthcare industry. Here are the top compelling benefits that make Salvify the go-to choice for healthcare inventory management:</p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base text-slate-400 leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className=''>
          <dt className="font-semibold text-slate-300">Streamlined inventory control</dt>
          <dd className="mt-1 "><span className='italic text-salvify-accent-light'>Maximize efficiency</span> - Salvify simplifies medical inventory management, helping you optimize stock levels, reduce waste, and ensure crucial supplies are always at your fingertips.</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-300">Unparalleled compliance</dt>
          <dd className="mt-1 "><span className='italic text-salvify-accent-light'>Stay regulatory-ready</span> - Our compliance tools and features empower you to effortlessly meet healthcare regulations and standards, minimizing compliance-related stress and risks.</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-300">Cost savings</dt>
          <dd className="mt-1 "><span className='italic text-salvify-accent-light'>Boost financial health</span> - Our intelligent resource allocation and waste reduction capabilities save you money, enabling investments in critical areas of patient care and facility improvement.</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-300">Real-time visibility</dt>
          <dd className="mt-1"><span className='italic text-salvify-accent-light'>Stay informed</span> - Gain instant insights into your medical inventory, from anywhere. Our real-time tracking ensures you are always up-to-date on stock levels and supply chain performance.</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-300">User-friendly interface</dt>
          <dd className="mt-1"><span className='italic text-salvify-accent-light'>Effortless adoption</span> - Salvifys intuitive design makes onboarding and daily use a breeze, with minimal training required for your team to harness its full potential.</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-300">Sustainability champion</dt>
          <dd className="mt-1"><span className='italic text-salvify-accent-light'>Reduce environmental impact</span> - Salvify aids in minimizing medical waste, contributing to a more sustainable healthcare system and a greener planet.</dd>
        </div>
      </dl>

				</div>
      </Container>
    </section>
  )
}
