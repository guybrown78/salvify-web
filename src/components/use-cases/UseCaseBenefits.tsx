import { UseCase } from '@/types/UseCase'
import React from 'react'
import { Container } from '../Container'

type Props = {
	data:UseCase
}

const UseCaseBenefits = ({ data }: Props) => {
	return (
		<section id="benefits" aria-labelledby="benefits-title">
			<Container>
				<div>UseCaseBenefits</div>
			</Container>
		</section>
	)
}

export default UseCaseBenefits