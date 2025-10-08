'use client'
import React, { useState, useEffect } from 'react'
import { animationBus } from '@/lib/animationBus'
import { motion, useAnimation } from 'framer-motion'
import { SimpleHoldingCard, SimpleHoldingCardProps } from '@/components/animations/assets/SimpleHoldingCard'


export const RealTimeKitBagHolding = React.forwardRef<HTMLDivElement, SimpleHoldingCardProps>(
  ({ title, subtitle, className }, ref) => {
    const [subtitleState, setSubtitleState] = useState(subtitle ?? '')
    useEffect(() => {
			const onArrived = (e: Event) => {
				setSubtitleState(prev => (prev ?? '') + '+') // functional update avoids stale closure
				// TODO: trigger other animations here (e.g. Framer controls)
			}

  		animationBus.addEventListener('transfer:arrived', onArrived)
  		return () => animationBus.removeEventListener('transfer:arrived', onArrived)
		}, [])
    return (
      <SimpleHoldingCard ref={ref} title={title} subtitle={subtitleState} className={className} />
    )
  }
)
RealTimeKitBagHolding.displayName = 'RealTimeKitBagHolding'

