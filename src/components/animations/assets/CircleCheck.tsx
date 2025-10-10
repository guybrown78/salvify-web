'use client'
import clsx from 'clsx'
import { easeIn, motion, useReducedMotion } from 'framer-motion'
import { HiOutlineCheck } from 'react-icons/hi2'

const T = {
  dur: 0.42,
  ease: easeIn,
  scaleIn: [0.1, 1.06, 1],
  scaleOut: 0.1,
  delayInCircle: 0.18, // box first, then circle
  delayOutBox: 0.08, // circle out first, then box
  iconDelay: 0.36, // tick pops after circle
}

export type Props = {
  show?: boolean
  size?: number
  className?: string
}
const CircleCheck = ({ show = false, size = 24, className }: Props) => {
  const prefersReduced = useReducedMotion()
  const duration = prefersReduced ? 0 : T.dur
  return (
    <motion.div
      className={clsx('inline-flex', className)}
      initial={false}
      animate={{
        width: show ? size : 0,
      }}
      style={{ height: size }}
      transition={{
        duration,
        ease: T.ease,
        delay: prefersReduced ? 0 : show ? 0 : T.delayOutBox,
      }}
      data-state={show ? 'shown' : 'hidden'}
    >
      <motion.div
        className="flex h-full w-[inherit] items-center justify-center rounded-full bg-brand-500 text-white will-change-transform"
        initial={false}
        animate={
          show
            ? { scale: T.scaleIn, opacity: 1 }
            : { scale: T.scaleOut, opacity: 0 }
        }
        transition={{
          duration,
          ease: T.ease,
          delay: prefersReduced ? 0 : show ? T.delayInCircle : 0,
        }}
      >
        <motion.span
          className="absolute inline-block will-change-transform"
          initial={false}
          animate={
            show
              ? { scale: [0.6, 1.3, 0.94, 1], opacity: 1 }
              : { scale: 0.8, opacity: 0 }
          }
          transition={{
            times: [0, 0.55, 0.78, 1],
            duration: prefersReduced ? 0 : 0.36,
            ease: [0.2, 0.7, 0.2, 1],
            delay: prefersReduced ? 0 : T.delayInCircle + 0.06, // after circle
          }}
        >
          <HiOutlineCheck className="size-4" />
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default CircleCheck
