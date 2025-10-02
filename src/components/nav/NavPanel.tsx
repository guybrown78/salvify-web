'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Portal, PopoverPanel } from '@headlessui/react'
import React from 'react'
import clsx from 'clsx';

export default function NavPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <PopoverPanel
            static anchor="bottom" as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute left-1/2 z-50 mt-0 flex bg-transparent px-4 pb-5 pt-5"
          >
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 lg:max-w-2xl">
              {children}
            </div>
          </PopoverPanel>
        )}
      </AnimatePresence>
    </Portal>
  )
}
