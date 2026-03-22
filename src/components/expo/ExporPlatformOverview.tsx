import { Container } from '@/components/Container'
import React from 'react'
import Eyebrow from '@/components/content/Eyebrow'
import SectionCTA from '@/components/content/SectionCTA'
import { ContentH2 } from '@/components/content/Titles'
import { ContentP } from '@/components/content/Typography'
import { ContentStack } from '@/components/content/Typography'
import {
  HiOutlineDocumentText,
  HiOutlineArrowsRightLeft,
  HiOutlineCubeTransparent,
  HiOutlineDevicePhoneMobile,
  HiOutlineClipboardDocumentList,
  HiOutlineHeart,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import StatCard from '../cards/StatCard'
import PillarCard from '../cards/PillarCard'

export const overviewPillars = [
  {
    eyebrow: 'Visibility',
    title: 'Medicine visibility',
    desc: 'Across vehicles, bags and locations...',
    icon: HiOutlineClipboardDocumentList,
  },

  {
    eyebrow: 'Readiness',
    title: 'Clinical readiness',
    desc: 'Medicines ready when patients need them.',
    icon: HiOutlineHeart,
  },
  {
    eyebrow: 'Governance',
    title: 'Regulatory confidence',
    desc: 'Support safe and compliant medicine management.',
    icon: HiOutlineShieldCheck,
  },
]

const ExporPlatformOverview = () => {
  return (
    <section
      id="salvify-platform-overview"
      aria-labelledby="salvify-platform-overview-title"
      className="bg-surface py-6 sm:py-12"
    >
      <Container>

				<Eyebrow title="Platform overview" />
        <ContentH2 title="Built for real-world medicine management" />
				<ContentP>Clear visibility, better control and support for compliant, day-to-day operations.</ContentP>


        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3 lg:grid-cols-6">
          {overviewPillars.map((pillar) => {
            const IconCmp = pillar.icon
            return (
              <PillarCard
                color="brand"
                key={pillar.title}
                eyebrow={pillar.eyebrow}
                title={pillar.title}
                desc={pillar.desc}
                icon={<IconCmp className="size-8" aria-hidden="true" />}
                className="md:col-span-2"
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ExporPlatformOverview
