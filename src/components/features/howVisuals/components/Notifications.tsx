'use client'
import { animationBus, NotifyPayload } from '@/lib/animationBus'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import NotificationItemCard from './NotificationItemCard'

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
export type NotifyItem = Required<NotifyPayload> & { id: string }

export default function Notifications({
  position = 'top-right',
  max = 4,
}: {
  position?: Position
  max?: number
}) {
  const [items, setItems] = useState<NotifyItem[]>([])

  const makeItem = (d: NotifyPayload): NotifyItem => ({
    id: d.id ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: d.type ?? 'info',
    title: d.title ?? '',
    message: d.message ?? '',
    meta: d.meta ?? {},
    timeoutMs: d.timeoutMs ?? 3200,
  })

  const addItem = (item: NotifyPayload) => {
    const payload = makeItem(item)
    setItems((prev) => [...prev, payload].slice(-max))
  }

  const dismiss = useCallback((id: string) => {
    setItems((prev) => prev.filter((n) => n.id !== id))
  }, [])

  useEffect(() => {
    const onNotify = (e: Event) =>
      addItem((e as CustomEvent<NotifyPayload>).detail || {})
    animationBus.addEventListener('notify', onNotify as EventListener)
    return () =>
      animationBus.removeEventListener('notify', onNotify as EventListener)
  }, [max])

  const pos = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  }[position]

  return (
    <div className={clsx('fixed z-50', pos)}>
      {/* Relative anchor; all toasts sit exactly over each other */}
      <div className="relative w-64 max-w-[90vw]">
        <AnimatePresence initial={false}>
          {items.map((n, i) => {
            const isTop = i === items.length - 1
            return (
              <NotificationItemCard
                key={n.id}
                item={n}
                isTop={isTop}
                index={i}
                onItemRemoved={dismiss}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
