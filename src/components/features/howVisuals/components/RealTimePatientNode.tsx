'use client'
import React, { useEffect, useState } from 'react'
import { animationBus } from '@/lib/animationBus'
import { SimpleHoldingCard } from '@/components/animations/assets/SimpleHoldingCard'
import AnimatedBadge from '@/components/animations/assets/AnimatedBadge'
import { HiOutlineCheck, HiOutlineUser } from 'react-icons/hi2'

export function RealTimePatientNode() {
	const [showCheck, setShowCheck] = useState<boolean>(false)

	useEffect(() => {
			const onArrived = (e: Event) => {
				// setSubtitleState(prev => (prev ?? '') + '+')
				const { detail } = e as CustomEvent<{ leg: string }>
				if(detail.leg === "kitbag→patient"){
					setShowCheck(true)
					setTimeout(() => setShowCheck(false), 1000)
				}
			}
	
			animationBus.addEventListener('transfer:arrived', onArrived)
			return () => animationBus.removeEventListener('transfer:arrived', onArrived)
		}, [])

  return (
    <SimpleHoldingCard
      title="Patient"
      subtitle="Medication administered"
      className="mx-auto"
			leftSlot={
				<HiOutlineUser size={35} className="mr-1 mt-1" />
			}
			rightSlot={
				<AnimatedBadge show={showCheck} variant="circle" size={24} gapLeft={8}>
					<HiOutlineCheck size={15} className="shrink-0" />
				</AnimatedBadge>
			}
    />
  )
}