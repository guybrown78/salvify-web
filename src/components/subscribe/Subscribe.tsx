'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { SubscribeModal } from './SubscribeWrapper'


const Subscribe = () => {
	const [openModal, setOpenModal] = useState<boolean>(false)

	const onCloseModal = () => {
		setOpenModal(false)
	}

  return (
    <div>
			{/* <Button onClick={() => setOpenModal(!openModal)} variant='solid' color="green">Subscribe</Button> */}
			<Button>Subscribe</Button>
			{/* <SubscribeModal openModal={openModal} onCloseModal={() => {onCloseModal()}} /> */}

		</div>
  )
}

export default Subscribe