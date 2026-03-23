'use client'
export const animationBus = new EventTarget()


export type NotifyKind = 'success' | 'info' | 'warning' | 'error'
export type NotifyPayload = {
  id?: string
  type?: NotifyKind
  title?: string
  message?: string
  meta?: Record<string, any>
  timeoutMs?: number
}


export const emit = (type: string, detail?: any) =>
  animationBus.dispatchEvent(new CustomEvent(type, { detail }))


export const notify = (p: NotifyPayload) => emit('notify', p)
