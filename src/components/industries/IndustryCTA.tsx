import { Container } from '@/components/Container'
import CTA from '@/components/content/CTA'
import { IndustrySolution } from '@/types/IndustrySolution'


type Props = {
	data:IndustrySolution
}



const IndustryCTA = ({ data }: Props) => {
	const title = data.ctaTitle || 'Ready to simplify medicine management for your team?';
	return (
		<section
      id="about-cta"
      aria-labelledby="about-cta"
      className="py-16 lg:py-24"
    >
      <Container>
        <CTA
          title={title}
          text={data.ctaBody}
				/>
      </Container>
    </section>
	)
}

export default IndustryCTA