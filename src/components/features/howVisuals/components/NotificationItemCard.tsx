import clsx from 'clsx'
import { easeOut, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import {
	HiOutlineCheck,
	HiOutlineExclamationTriangle,
	HiOutlineInformationCircle,
	HiOutlineXCircle,
} from 'react-icons/hi2'
import { NotifyItem } from './Notifications'

interface Props {
  item: NotifyItem
  isTop: boolean
  index: number
  onItemRemoved: (id: string) => void
}
const NotificationItemCard = ({ item, isTop, index, onItemRemoved }: Props) => {
  const prefersReduced = useReducedMotion()

  const BADGE: Record<
    'success' | 'info' | 'warning' | 'error',
    {
      className: string
      Icon: React.ComponentType<{ className?: string }>
      label: string
    }
  > = {
    success: {
      className: 'bg-emerald-600 text-white',
      Icon: HiOutlineCheck,
      label: 'Success',
    },
    info: {
      className: 'bg-sky-600 text-white',
      Icon: HiOutlineInformationCircle,
      label: 'Information',
    },
    warning: {
      className: 'bg-amber-600 text-white',
      Icon: HiOutlineExclamationTriangle,
      label: 'Warning',
    },
    error: {
      className: 'bg-rose-600 text-white',
      Icon: HiOutlineXCircle,
      label: 'Error',
    },
  }

  useEffect(() => {
    let cancelled = false
    const t = window.setTimeout(() => {
      if (!cancelled) onItemRemoved(item.id)
    }, item.timeoutMs)

    return () => {
      cancelled = true
      window.clearTimeout(t)
    }
  }, [item.id, item.timeoutMs])

  const IconComp = BADGE[item.type]?.Icon

  return (
    <motion.div
      className="absolute inset-0"
      style={{ zIndex: index + 1 }}
      initial={{ opacity: 0, scale: 1, y: -15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.86, y: 15 }}
      transition={{ duration: prefersReduced ? 0 : 0.18, ease: easeOut }}
      role="status"
      aria-live="polite"
      aria-hidden={!isTop}
    >
      <div
        className={clsx('max-w-64 rounded-md bg-surface-muted p-3 shadow-md')}
      >
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold">{item.title}</p>

          {item.type && BADGE[item.type] && (
            <span
              className={clsx(
                'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs capitalize',
                BADGE[item.type].className
              )}
              aria-label={BADGE[item.type].label}
            >
              {IconComp && <IconComp />}
              {item.type}
            </span>
          )}
        </div>
        {item.message && (
          <div
            className="prose prose-slate mt-2 text-xs"
            dangerouslySetInnerHTML={{ __html: item.message }}
          />
        )}
      </div>
    </motion.div>
  )
}

export default NotificationItemCard
