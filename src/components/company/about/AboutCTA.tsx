import { Container } from '@/components/Container'
import CTA from '@/components/content/CTA'

const AboutCTA = () => {
  return (
    <section
      id="about-cta"
      aria-labelledby="about-cta"
      className="py-16 lg:py-24"
    >
      <Container>
        <CTA
          title="Let’s Simplify Medicine Management Together"
          text="Whether you manage a single ambulance or a multi-site healthcare operation, Salvify gives your team clarity, compliance, and complete control. Book a demo or speak with our team to explore how we can help streamline your medicine management."
        />
      </Container>
    </section>
  )
}

export default AboutCTA
