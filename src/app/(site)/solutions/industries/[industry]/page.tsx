import IndustryTemplate from '@/components/industries/IndustryTemplate'
import { getIndustrySolution } from '@/sanity/sanity-utils'
import { IndustrySolution } from '@/types/IndustrySolution'
import React from 'react'

type Props = {
  params: { industry: string }
}
export const revalidate = 60

const IndustryPage = async ({ params }: Props) => {
  const slug = params.industry
  const industry: IndustrySolution = await getIndustrySolution(slug)

  if (!industry) return <div>no data</div>
  return <IndustryTemplate data={industry} />
}

export default IndustryPage
