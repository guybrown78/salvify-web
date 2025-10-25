import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'

type Props = {
	data:UseCase
}

const UseCaseRelated = ({ data }: Props) => {
	return (
		<section id="related" aria-labelledby="related-title">
			<Container>
				<div>UseCaseRelated</div>
			</Container>
		</section>
	)
}

export default UseCaseRelated