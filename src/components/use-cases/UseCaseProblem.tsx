import { UseCase } from '@/types/UseCase'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import { Container } from '../Container'
import { HeroEyebrow } from '../hero'
import { ContentH2 } from '../content/Titles'

type Props = {
  data: UseCase
}

const UseCaseProblem = ({ data }: Props) => {
  const eyebrow = data.problemEyebrow || 'Why this matters'
  const hasIntro = !!data.problemIntro?.trim()
  const points = (data.problemPoints || []).filter(Boolean)

  // Nothing to render? Bail early.
  if (!hasIntro && points.length === 0) return null

  return (
    <section
      id="why-this-matters"
      aria-labelledby="problem-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <HeroEyebrow title={eyebrow} />
        {data.problemTitle && (
					<ContentH2 title={data.problemTitle} color='ink' weight='normal' />
					// id="problem-title"
        )}

        {/* Intro */}
        {hasIntro && (
          <div className="lg:col-span-5 xl:col-span-6">
            <p className="max-w-prose text-base leading-relaxed text-fg">
              {data.problemIntro}
            </p>
          </div>
        )}

        {/* Points */}
        {points.length > 0 && (
          <div className="lg:col-span-7 xl:col-span-6">
            <ul role="list" className="space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex items-center gap-3">
                    <span className="inline-flex size-8 flex-none items-center justify-center rounded-full">
                      <HiOutlineExclamationCircle
                        className="size-8 text-accent"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </span>
                    <span className="text-base text-fg">{p}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  )
}

export default UseCaseProblem
