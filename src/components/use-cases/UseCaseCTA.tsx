import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'

type Props = {
	data:UseCase
}

const UseCaseCTA = ({ data }: Props) => {
	return (
		<section id="cta" aria-labelledby="cta-title">
			<Container>
				<div>UseCaseCTA</div>
			</Container>
		</section>
	)
}

export default UseCaseCTA