import { ReactNode } from 'react'

/**
 * Shared illustration frame for the platform feature bento cards. Fixed
 * height keeps every card's eyebrow/title lined up regardless of how much
 * content the illustration holds; the gradient fades the panel into the
 * text below instead of cutting off with a hard edge.
 */
export default function FeatureVisualFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-48 flex-col justify-center overflow-hidden bg-gradient-to-b from-surface-muted to-transparent px-6 sm:px-10">
      {children}
    </div>
  )
}
