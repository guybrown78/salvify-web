import { UseCase } from '@/types/UseCase'
import { Container } from '../Container'
import { HeroCTAButtonWrapper, HeroEyebrow, HeroH1, HeroH2, HeroOverview, HeroResponsiveWrapper, HeroTypographyWrapper } from '../hero'


type Props = {
	data:UseCase
}

const UseCaseHero = ({ data }: Props) => {
	const { heroEyebrow, heroTitle, heroSubTitle, overview } = data;
	return (
		<Container className="relative">
			<HeroResponsiveWrapper>
				<HeroTypographyWrapper>
					<HeroEyebrow title={heroEyebrow} />
					<HeroH1 title={heroTitle} />
					<HeroH2 subTitle={heroSubTitle} />
					<HeroOverview overviewText={overview} />
					
					<HeroCTAButtonWrapper>
						
					</HeroCTAButtonWrapper>
				</HeroTypographyWrapper>
			</HeroResponsiveWrapper>
		</Container>
	)
}

export default UseCaseHero