import { IndustrySolution } from '@/types/IndustrySolution'
import { Container } from '../Container'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'
import { HiOutlineLightBulb } from 'react-icons/hi2'

type Props = {
  data: IndustrySolution
}

const IndustryHelps = ({ data }: Props) => {
  const { helpTitle, helpIntro, helpBlocks } = data

  if (!helpBlocks || helpBlocks.length === 0) return null

  return (
    <section
      id="how-salvify-helps"
      aria-labelledby="how-salvify-helps-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <ContentH2
          title={helpTitle || 'How Salvify supports your service'}
        />

        <ContentP>
          {helpIntro ||
            'Salvify helps teams manage medicines with confidence, reducing admin, improving accuracy, and keeping every record ready for inspection.'}
        </ContentP>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {helpBlocks.map((block, index) => (
            <article key={index} className="flex gap-3">
              <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full">
                <HiOutlineLightBulb
                  className="h-9 w-9 text-brand-500"
                  aria-hidden="true"
                  focusable="false"
                />
              </span>

              <div className="space-y-1">
                {block.title && (
                  <h3 className="text-base font-semibold text-ink">
                    {block.title}
                  </h3>
                )}

                {block.summary && (
                  <p className="text-sm leading-relaxed text-fg">
                    {block.summary}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default IndustryHelps
