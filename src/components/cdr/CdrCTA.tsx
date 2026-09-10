import { Container } from '../Container'
import { Button } from '../Button'
import { LogoMark } from '../Logo'

const CdrCTA = () => {
  return (
    <section
      id="cdr-cta"
      aria-label="Talk to Salvify about controlled drug management"
      className="relative overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto inline-flex items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
            <LogoMark className="h-8" palette="teal" accentVar="#FFF" />
          </span>

          <h2 className="mt-6 font-brand text-3xl font-extrabold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl">
            See how Salvify can support controlled drug management across your
            organisation
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-surface/70">
            Book a walkthrough, or talk to us about controlled drugs for
            pre-hospital and mobile care.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact/book-a-demo" color="brand">
              Book a demo
            </Button>
            <Button href="/contact" variant="outline" color="white">
              Talk to us about controlled drugs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CdrCTA
