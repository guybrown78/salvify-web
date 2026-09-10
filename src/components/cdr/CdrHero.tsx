import { HiOutlineShieldCheck } from 'react-icons/hi2'
import { Container } from '../Container'
import { Button } from '../Button'
import CdrRegisterPreview from './CdrRegisterPreview'
import CdrHeroAlert from './CdrHeroAlert'

const chips = [
  'Append-only ledger',
  'Independent witnessing',
  'Full chain of custody',
  'Inspection-ready exports',
]

const CdrHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(23,33,68,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute -top-40 right-[-8%] h-[34rem] w-[34rem] rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -bottom-56 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink backdrop-blur">
              <HiOutlineShieldCheck
                className="size-4 text-brand-500"
                aria-hidden="true"
              />
              Controlled Drug Register
            </span>

            <h1 className="mt-6 font-brand text-4xl font-extrabold leading-[1.08] tracking-tight text-pretty text-ink sm:text-5xl lg:text-6xl">
              Controlled drug management,{' '}
              <span className="text-brand-500">
                built for pre-hospital care
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/75 sm:text-xl">
              A controlled drug register that moves with your operation, across
              stores, stations, vehicles, bags and pouches.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg/60">
              Salvify brings controlled drug stock, custody, transactions,
              witnessing, stock checks, discrepancies and audit into the same
              medicines management platform your teams already use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/book-a-demo" color="brand">
                Book a demo
              </Button>
              <Button href="/contact" variant="outline" color="brand">
                Talk to us about controlled drugs
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg/60">
              {chips.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:col-span-6">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
            />
            <div className="cdr-float-slow relative">
              <CdrRegisterPreview />
              <CdrHeroAlert />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CdrHero
