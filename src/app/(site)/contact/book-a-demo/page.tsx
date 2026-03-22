import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import BookADemo from '@/components/forms/BookADemo'

import { ContentH2 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import { HiOutlineCheck } from 'react-icons/hi2'

const BookADemoPage = () => {
  return (
    <section
      id="book-a-demo"
      aria-labelledby="book-a-demo-title"
      className="overflow-hidden py-6 lg:py-12"
    >
      <Container>
        <Eyebrow title="Book a demo" />
        <ContentH2 title="See Salvify in action" />
        <ContentP>
          Book a short demo to see how Salvify helps ambulance services and
          pre-hospital teams manage medicines with clarity, control and
          confidence.
        </ContentP>
        <BookADemo />

        <div className="text-md mt-10 space-y-2 text-ink/70">
          <div className="flex items-center">
            <HiOutlineCheck className="mr-2 size-4 text-brand-500" />
            Takes around 20 minutes
          </div>
          <div className="flex items-center">
            <HiOutlineCheck className="mr-2 size-4 text-brand-500" />
            No commitment required
          </div>
          <div className="flex items-center">
            <HiOutlineCheck className="mr-2 size-4 text-brand-500" />
            Tailored to your service
          </div>
        </div>

        <ContentH2 title="What happens next?" />
        <ContentStack>
          <ContentP>
            Once you request a demo, we’ll arrange a short call to understand
            your service, how you currently manage medicines and what you need
            from a system like Salvify.
          </ContentP>
          <ContentP>
            We’ll then walk you through the platform, focusing on how it fits
            your workflows, supports compliance and improves visibility across
            your organisation.
          </ContentP>
          <ContentP>
            No pressure, no hard sell — just a clear look at whether Salvify is
            right for you.
          </ContentP>
        </ContentStack>
      </Container>
    </section>
  )
}

export default BookADemoPage
