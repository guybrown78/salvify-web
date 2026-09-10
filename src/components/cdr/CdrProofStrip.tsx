import { Container } from '../Container'
import { LogoMark } from '../Logo'

const CdrProofStrip = () => {
  return (
    <section aria-label="How the register is built" className="bg-ink">
      <Container className="py-10 sm:py-12">
        <div className="flex items-start gap-5 sm:items-center sm:gap-6">
          <span
            aria-hidden="true"
            className="hidden shrink-0 items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 sm:flex"
          >
            <LogoMark className="h-9" palette="teal" accentVar="#FFF" />
          </span>
          <p className="max-w-4xl border-l-2 border-brand-500 pl-5 text-base leading-relaxed text-surface/85 sm:text-lg">
            Salvify&rsquo;s Controlled Drug Register is built on the same
            medicines, stock, holding, user and traceability architecture already
            used across{' '}
            <span className="font-semibold text-white">
              live pre-hospital operations
            </span>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}

export default CdrProofStrip
