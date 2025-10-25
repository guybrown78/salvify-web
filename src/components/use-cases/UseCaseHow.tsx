import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'

type Props = {
	data:UseCase
}

const UseCaseHow = ({ data }: Props) => {
	return (
		<section id="how-salvify-helps" aria-labelledby="how-title" >
			<Container>
				<div>UseCaseHow</div>
			</Container>
		</section>
	)
}

export default UseCaseHow