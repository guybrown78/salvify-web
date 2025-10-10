'use client'
import React, { useEffect, useRef, useState } from 'react'
import { animationBus, NotifyPayload } from '@/lib/animationBus'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export default function Notifications({ position = 'top-right', max = 4 }: { position?: Position; max?: number }) {
  const [items, setItems] = useState<Array<Required<NotifyPayload> & { id: string }>>([])
  const timers = useRef<Record<string, any>>({})
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const onNotify = (e: Event) => {
      const d = (e as CustomEvent<NotifyPayload>).detail || {}
      const id = d.id ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`
      const payload: Required<NotifyPayload> & { id: string } = {
        id,
        kind: d.kind ?? 'info',
        title: d.title ?? '',
        message: d.message ?? '',
        meta: d.meta ?? {},
        timeoutMs: d.timeoutMs ?? 3200,
      }
      // push so newest is rendered last (on top)
      setItems(prev => [...prev, payload].slice(-max))
      timers.current[id] = setTimeout(() => dismiss(id), payload.timeoutMs)
    }
    animationBus.addEventListener('notify', onNotify as EventListener)
    return () => animationBus.removeEventListener('notify', onNotify as EventListener)
  }, [max])

  function dismiss(id: string) {
    clearTimeout(timers.current[id])
    delete timers.current[id]
    setItems(prev => prev.filter(n => n.id !== id))
  }

  const pos = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  }[position]

  return (
    <div className={clsx('pointer-events-none fixed z-50', pos)}>
      {/* Relative anchor; all toasts sit exactly over each other */}
      <div className="relative w-80 max-w-[90vw]">
        <AnimatePresence initial={false}>
          {items.map((n, i) => {
            const isTop = i === items.length - 1
            return (
              <motion.div
                key={n.id}
                className={clsx('absolute inset-0', isTop && 'pointer-events-auto')}
                style={{ zIndex: i + 1 }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.86 }}
                transition={{ duration: prefersReduced ? 0 : 0.18, ease: 'easeOut' }}
                role="status"
                aria-live="polite"
                aria-hidden={!isTop}
              >
                <div
                  className={clsx(
                    'rounded-md border p-3 shadow-sm',
                    n.kind === 'success' && 'border-emerald-200 bg-emerald-50 text-emerald-900',
                    n.kind === 'info' && 'border-sky-200 bg-sky-50 text-sky-900',
                    n.kind === 'warning' && 'border-amber-200 bg-amber-50 text-amber-900',
                    n.kind === 'error' && 'border-rose-200 bg-rose-50 text-rose-900'
                  )}
                >
                  {n.title && <p className="text-sm font-semibold">{n.title}</p>}
                  {n.message && <p className="mt-0.5 text-sm">{n.message}</p>}
                  <button
                    onClick={() => dismiss(n.id)}
                    className="mt-2 text-xs underline opacity-70 hover:opacity-100"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
