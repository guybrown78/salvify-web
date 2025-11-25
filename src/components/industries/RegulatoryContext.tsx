import { IndustrySolution } from '@/types/IndustrySolution'
import React from 'react'
import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP, ContentStack } from '../content/Typography'
import { HiOutlineShieldCheck } from 'react-icons/hi2'


type Props = {
	data:IndustrySolution
}
const RegulatoryContext = ({ data }: Props) => {
	const { regulatoryContext } = data;

	if (!regulatoryContext || regulatoryContext.length === 0) return null


	return (
		<section
      id="regulatory-frameworks"
      aria-labelledby="regulatory-frameworks-title"
      className="py-16 lg:py-24"
    >
      <Container>
        <Eyebrow title="Regulation and governance" />
        <ContentH2 
					title="Built for healthcare compliance" 
					color='ink' 
					weight='normal' 
				/>

				<ContentStack>
					<ContentP>Salvify supports the frameworks and governance standards that matter to your service, helping you maintain clear, accurate records across every medicine movement.</ContentP>
				</ContentStack>

        {/* regulatoryContext */}
        {regulatoryContext.length > 0 && (
          <div className="lg:col-span-7 xl:col-span-6">
            <ul role="list" className="space-y-3">
              {regulatoryContext.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex items-center gap-3">
                    <span className="inline-flex size-8 flex-none items-center justify-center rounded-full">
                      <HiOutlineShieldCheck
                        className="size-8 text-success"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </span>
                    <span className="text-base text-fg">{item}</span>
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

export default RegulatoryContext