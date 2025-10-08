'use client'
export const animationBus = new EventTarget()
export const emit = (type: string, detail?: any) =>
  animationBus.dispatchEvent(new CustomEvent(type, { detail }))