import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'

type Props = {
	data:UseCase
}

const UseCaseAudiances = ({ data }: Props) => {
	return (
		<section id="audiences" aria-labelledby="audiences-title">
			<Container>
				<div>UseCaseAudiances</div>
			</Container>
		</section>
	)
}

export default UseCaseAudiances