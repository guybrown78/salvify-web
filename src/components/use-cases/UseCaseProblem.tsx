import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'

type Props = {
	data:UseCase
}

const UseCaseProblem = ({ data }: Props) => {
	return (
		<section id="why-this-matters" aria-labelledby="problem-title">
			<Container>
				<div>UseCaseProblem</div>
			</Container>
		</section>
	)
}

export default UseCaseProblem