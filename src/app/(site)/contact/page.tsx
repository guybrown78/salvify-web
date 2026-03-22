import { Container } from '@/components/Container'
import Eyebrow from '@/components/content/Eyebrow'
import ContactForm from '@/components/forms/ContactForm'
import { ContentH2 } from '@/components/content/Titles'
import { ContentP, ContentStack } from '@/components/content/Typography'
import { HiOutlineCheck } from 'react-icons/hi2'

const ContactPage = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="overflow-hidden py-6 lg:py-12"
    >
      <Container>
        <Eyebrow title="Contact" />
        <ContentH2 title="Get in touch with Salvify" />
        <ContentP>
          Have a question about Salvify, pricing, implementation or partnerships?
          Send us a message and our team will get back to you.
        </ContentP>

        <ContactForm />

        <div className="text-md mt-10 space-y-2 text-ink/70">
          <div className="flex items-center">
            <HiOutlineCheck className="mr-2 size-4 text-brand-500" />
            Goes direct to our team
          </div>
          <div className="flex items-center">
            <HiOutlineCheck className="mr-2 size-4 text-brand-500" />
            No obligation
          </div>
          <div className="flex items-center">
            <HiOutlineCheck className="mr-2 size-4 text-brand-500" />
            We aim to respond promptly
          </div>
        </div>

        <ContentH2 title="How we can help" />
        <ContentStack>
          <ContentP>
            Whether you are exploring Salvify for your organisation, have a question
            about onboarding, or want to discuss a partnership, we’d be happy to hear from you.
          </ContentP>
          <ContentP>
            If your enquiry is product-related, we may suggest a short demo so we can
            show you the parts of the platform most relevant to your service.
          </ContentP>
          <ContentP>
            If your message is about implementation, integration or a wider commercial
            conversation, we’ll make sure it reaches the right person.
          </ContentP>
        </ContentStack>

				<div className="mt-10 rounded-2xl bg-surface p-6 sm:p-8 shadow-lg">
  <h3 className="text-lg font-medium text-ink">Other ways to contact us</h3>

  <div className="mt-4 space-y-4 text-sm text-ink">
    <div>
      <p className="font-medium text-ink">Email</p>
      <a
        href="mailto:info@salvify.co.uk"
        className="text-brand-500 underline"
      >
        info@salvify.co.uk
      </a>
    </div>

    <div>
      <p className="font-medium text-ink">Location</p>
      <p>Based in Teesside, United Kingdom</p>
    </div>
  </div>
</div>
      </Container>
    </section>
  )
}

export default ContactPage