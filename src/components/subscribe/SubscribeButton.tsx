'use client'

import { useState } from 'react'
import { Button } from '../Button'
import { SubscribeModal } from './SubscribeModal'

const SubscribeButton = () => {

	const [openModal, setOpenModal] = useState<boolean>(false)

	const onCloseModal = () => {
		setOpenModal(false)
	}

	return (
		<div>
			<Button 
				onClick={() => setOpenModal(!openModal)} v
				color="green"
			>Subscribe</Button>



			<SubscribeModal openModal={openModal} onCloseModal={() => {onCloseModal()}} /> 
		</div>
	)
}

export default SubscribeButton