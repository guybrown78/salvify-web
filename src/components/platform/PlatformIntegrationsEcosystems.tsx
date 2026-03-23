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
} from "react-icons/hi2";
import StatCard from '../cards/StatCard'
import PillarCard from '../cards/PillarCard'


export const integrationPillars = [
  {
    eyebrow: "ePRF Connectivity",
    title: "Connect with Leading ePRF Systems",
    desc: "Integrate medicine usage directly into clinical records through connections with leading electronic patient report form systems.",
    icon: HiOutlineDocumentText,
  },
  {
    eyebrow: "Real-Time Data Sync",
    title: "Consistent Data Across Your Team",
    desc: "Ensure medicine movements and usage are recorded consistently across devices and users, keeping every team aligned.",
    icon: HiOutlineArrowsRightLeft,
  },
  {
    eyebrow: "Flexible API Foundations",
    title: "Built for Future Integrations",
    desc: "Our API-driven architecture is built for scalability, enabling future connections with procurement, inventory and compliance systems.",
    icon: HiOutlineCubeTransparent,
  },
  {
    eyebrow: "Works Everywhere",
    title: "Designed for Every Environment",
    desc: "From vehicles to remote sites, Salvify maintains a consistent data layer supporting clinical, operational and compliance workflows.",
    icon: HiOutlineDevicePhoneMobile,
  },
];


const PlatformIntegrationsEcosystems = () => {
	return (
		<section
      id="salvify-our-story"
      aria-labelledby="salvify-our-story-title"
      className="py-6 sm:py-12 bg-surface"
    >
			<Container>
				<Eyebrow title="Integrations & Ecosystem" />
        <ContentH2 title="Built to Fit Into Your Existing Workflow" />
				<ContentP>Salvify connects with the systems healthcare teams already rely on. Our platform is designed to work alongside your clinical workflows, supporting seamless data flow with leading ePRF systems and preparing for broader integrations as your organisation grows.</ContentP>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-4 lg:grid-cols-8">
					{integrationPillars.map((integrationPillars) => {
						const IconCmp = integrationPillars.icon
						return (
              <PillarCard
							color='brand'
                key={integrationPillars.title}
								eyebrow={integrationPillars.eyebrow}
                title={integrationPillars.title}
                desc={integrationPillars.desc}
                icon={<IconCmp className="size-8" aria-hidden="true" />}
								className='md:col-span-2'
              />
            )
					})}
				</div>

				{/* <SectionCTA 
					intro="Learn more about how Salvify fits into your organisation and the systems you work with today." 
					links={[
						{ href:"/product/integrations", label:"View Integrations" },
						{ href:"/product/features", label:"Explore Features" },
					]}
				/> */}
			</Container>
		</section>
	)
}

export default PlatformIntegrationsEcosystems