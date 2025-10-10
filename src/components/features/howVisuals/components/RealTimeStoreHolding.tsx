'use client'
import React, { useState, useEffect } from 'react'
import { animationBus } from '@/lib/animationBus'
import { motion, useAnimation } from 'framer-motion'
import { SimpleHoldingCard, SimpleHoldingCardProps } from '@/components/animations/assets/SimpleHoldingCard'
import CircleCheck from '@/components/animations/assets/CircleCheck'


export const RealTimeKitStoreHolding = React.forwardRef<HTMLDivElement, SimpleHoldingCardProps>(
  ({ title, subtitle, className }, ref) => {

    useEffect(() => {

		}, [])
    return (
      <SimpleHoldingCard 
				ref={ref} 
				title={title} 
				subtitle={subtitle} 
				className={className} 
			/>
    )
  }
)
RealTimeKitStoreHolding.displayName = 'RealTimeKitStoreHolding'
