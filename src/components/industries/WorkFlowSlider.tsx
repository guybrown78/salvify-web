'use client'
import { IndustryOperationalStep } from '@/types/IndustrySolution'
import clsx from 'clsx'
import React, { useCallback, useState, useEffect } from 'react'
import { Button } from '../Button'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'

type Props = {
  operationalSteps: IndustryOperationalStep[]
}

const TRANSITION_DURATION = 600
const AUTO_DELAY = 3000
const timelineTransitionClass = 'duration-500 ease-in-out'

const WorkFlowSlider = ({ operationalSteps }: Props) => {
  const [current, setCurrent] = useState<number>(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const total = operationalSteps.length

  const onUpdateCurrent = (newCurrent) => {
    if (newCurrent >= operationalSteps.length) {
      setCurrent(0)
      return
    }
    if (newCurrent < 0) {
      setCurrent(operationalSteps.length - 1)
      return
    }
    setCurrent(newCurrent)
  }

  const go = useCallback(
    (delta: number) => {
      if (isTransitioning || !total) return
      setIsTransitioning(true)
      setCurrent((c) => (c + delta + total) % total)
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION)
    },
    [isTransitioning, total]
  )

	const jumpTo = useCallback(
		(index: number) => {
			if (isTransitioning || index === current || !total) return
			setIsTransitioning(true)
			setCurrent(index)
			setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION)
		},
		[isTransitioning, current, total]
	)

	useEffect(() => {
    if (!total || isTransitioning) return
    const id = window.setTimeout(() => go(1), AUTO_DELAY)
    return () => clearTimeout(id)
  }, [current, go])

  return (
    <div className="flow-root">
      <div className="flex space-x-10 lg:space-x-4 lg:mb-20">
        <Button
          aria-label="Previous step"
          onClick={() => go(-1)}
          variant="solid"
          color="surface"
          disabled={isTransitioning}
        >
          <HiOutlineArrowLeft />
        </Button>

        <ul
          role="list"
          className="flex flex-1 flex-col items-start justify-between lg:flex-row "
        >
          {operationalSteps.map((step, stepIndex) => {
            const isActive = stepIndex === current
            return (
              <li
                key={stepIndex}
                className={clsx(
                  'relative flex flex-row items-center justify-center transition-all lg:flex-col',
                  timelineTransitionClass,
                  isActive ? 'flex-1' : 'flex-0'
                )}
              >
                <div
                  className='relative flex h-full lg:w-full items-center justify-center'
                >
                  <div
                    className={clsx(
                      'absolute top-[50%] z-0 hidden h-[2px] bg-brand-500 lg:inline-flex',
                      stepIndex === 0
                        ? 'ml-[50%] w-[50%]'
                        : stepIndex === operationalSteps.length - 1
                        ? 'mr-[50%] w-[50%]'
                        : 'w-full'
                    )}
                  />
                  <div
                    className={clsx(
                      'left-[50%] absolute z-0 inline-flex w-[2px] bg-brand-500 lg:hidden',
                      stepIndex === 0
                        ? 'bottom-0 mt-[50%] h-[50%]'
                        : stepIndex === operationalSteps.length - 1
                        ? 'top-0 mb-[50%] h-[50%]'
                        : 'h-full'
                    )}
                  />
                  <div className="relative z-10 p-4">
                    <button
											onClick={() => jumpTo(stepIndex)}
                      className={clsx(
                        'flex size-12 items-center justify-center rounded-full border-2 border-brand-500',
                        'transition-all',
                        timelineTransitionClass,
                        'font-brand font-extrabold',
                        isActive
                          ? 'scale-100 bg-brand-500 text-white'
                          : 'scale-75 bg-surface text-brand-500'
                      )}
                    >
                      {stepIndex + 1}
                    </button>
                  </div>
                </div>
                <div
                  className={clsx(
                    'relative flex flex-1 items-center justify-center',
                    isActive ? 'min-h-36 lg:min-h-0' : ''
                  )}
                >
                  <div
                    className={clsx(
                      'top-auto lg:absolute left-0 z-20 mx-2 min-w-56 rounded-md bg-brand-500 px-2 py-4 text-surface shadow-md transition-all ease-in-out lg:left-auto lg:top-2 lg:min-w-96',
                      isActive
                        ? 'duration-750 scale-100 opacity-100'
                        : 'scale-0 opacity-0 duration-300'
                    )}
                  >
                    <h5 className="text-pretty text-md font-semibold">
                      {step.stepTitle}
                    </h5>
                    <p className="text-pretty text-sm">{step.stepBody}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <Button
          aria-label="Next step"
          onClick={() => go(1)}
          variant="solid"
          color="surface"
          disabled={isTransitioning}
        >
          <HiOutlineArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default WorkFlowSlider
