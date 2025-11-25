import { IndustrySolution } from '@/types/IndustrySolution'
import React from 'react'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP, ContentStack } from '../content/Typography'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'


type Props = {
	data:IndustrySolution
}

const IndustryChallenges = ({ data }: Props) => {

	const { challengesTitle, challenges } = data

  if (!challenges || challenges.length === 0) return null

	return (
    <section
      id="industry-challenges"
      aria-labelledby="industry-challenges-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <Eyebrow title="Operational challenges" />

        <ContentH2
          title={challengesTitle || 'Key challenges in this industry'}
        />

        <ContentStack>
          <ContentP>
            Services like yours face recurring pressure on medicine control,
            record keeping, and governance. These are some of the common
            challenges we hear from teams.
          </ContentP>
        </ContentStack>

        <div className="mt-8">
          <ul role="list" className="space-y-4">
            {challenges.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-warning">
                  <HiOutlineExclamationCircle
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                    focusable="false"
                  />
                </span>
                <div className="space-y-1">
                  {item.title && (
                    <p className="text-base font-semibold">
                      {item.title}
                    </p>
                  )}
                  {item.summary && (
                    <p className="text-sm">
                      {item.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default IndustryChallenges