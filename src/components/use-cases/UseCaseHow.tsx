import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'
import { PortableText } from '@portabletext/react'
import { ContentH3 } from '../titles/Titles'
import Image from 'next/image';
import { useCaseHowMap } from './howVisuals'
type Props = {
  data: UseCase
}

const UseCaseHow = ({ data }: Props) => {
  if (!data.howItWorks) return null

  return (
    <section
      id="how-salvify-helps"
      aria-labelledby="how-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 bg-white lg:grid-cols-2 lg:items-center">
          <div className="flex-col">
            <ContentH3 title="How it works" />
            <div className="prose prose-slate">
              <PortableText value={data.howItWorks} />
            </div>
          </div>

					{data.howVisual === 'component' && data.howComponentKey ? (
							(() => {
								const Cmp = useCaseHowMap[data.howComponentKey];
								return Cmp ? <Cmp /> : null;
							})()
						) : data.howImage?.url ? (
							<Image
								src={data.howImage.url}
								alt={data.howImage.alt || 'How it works'}
								width={1200}
								height={900}
								className="w-full aspect-auto rounded-2xl object-cover"
							/>
						) : null}
        </div>
      </Container>
    </section>
  )
}

export default UseCaseHow
