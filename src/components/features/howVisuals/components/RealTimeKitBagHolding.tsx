'use client'
import AnimatedBadge from '@/components/animations/assets/AnimatedBadge'
import {
	SimpleHoldingCard,
	SimpleHoldingCardProps,
} from '@/components/animations/assets/SimpleHoldingCard'
import { animationBus } from '@/lib/animationBus'
import React, { useEffect, useState } from 'react'
import { HiOutlineCheck } from 'react-icons/hi2'

export const RealTimeKitBagHolding = React.forwardRef<
  HTMLDivElement,
  SimpleHoldingCardProps
>(({ title, subtitle, className }, ref) => {
  // const [subtitleState, setSubtitleState] = useState(subtitle ?? '')
  const [showCheck, setShowCheck] = useState<boolean>(false)

  useEffect(() => {
    const onArrived = (e: Event) => {
			const { detail } = e as CustomEvent<{ leg: string }>
      // setSubtitleState(prev => (prev ?? '') + '+')
			if(detail.leg === "store→kitbag"){
				setShowCheck(true)
      	setTimeout(() => setShowCheck(false), 3200)
			}
      
      // TODO: trigger other animations here (e.g. Framer controls)
    }

    animationBus.addEventListener('transfer:arrived', onArrived)
    return () => animationBus.removeEventListener('transfer:arrived', onArrived)
  }, [])
  return (
    <SimpleHoldingCard
      ref={ref}
      title={title}
      subtitle={subtitle}
      className={className}
      leftSlot={
        <AnimatedBadge show={showCheck} variant="circle" size={24} gapRight={8}>
          <HiOutlineCheck size={15} className="shrink-0" />
        </AnimatedBadge>
      }
      // rightSlot={
      //   <AnimatedBadge
      //     show={showCheck}
      //     variant="pill"
      //     size={24}
      //     bgClassName="bg-emerald-600 text-white"
      //   >
      //     <span className="flex-inline min-w-10 truncate text-[11px] font-semibold leading-none">
      //       +1 item
      //     </span>
      //   </AnimatedBadge>
      // }
    />
  )
})
RealTimeKitBagHolding.displayName = 'RealTimeKitBagHolding'
