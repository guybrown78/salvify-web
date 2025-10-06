import { FEATURE_ICON_KEYS, FeatureIconKey } from '@/sanity/shared/feature-icons'
import type { IconType } from 'react-icons'

// Base icons (no feature-specific ones here)
export const BASE_NAV_ICON_KEYS = [
  'HiOutlineBuildingOffice2',
  'HiOutlineChartBar',
  'HiOutlineChatBubbleLeftRight',
  'HiOutlineClipboardDocumentCheck',
  'HiOutlineClock',
  'HiOutlineCube',
  'HiOutlineDocumentCheck',
  'HiOutlineDocumentText',
  'HiOutlineHashtag',
  'HiOutlineInformationCircle',
  'HiOutlineKey',
  'HiOutlineLightBulb',
  'HiOutlineNewspaper',
  'HiOutlinePuzzlePiece',
  'HiOutlineSquares2X2',
  'HiOutlineUserGroup',
	'HiOutlineQuestionMarkCircle'
] as const

export type BaseNavIconKey = (typeof BASE_NAV_ICON_KEYS)[number]

// Merge base + feature icons into one master list
export const NAV_ICON_KEYS = [
  ...BASE_NAV_ICON_KEYS,
  ...FEATURE_ICON_KEYS,
] as const

// Type union = Base | Feature
export type NavIconKey = BaseNavIconKey | FeatureIconKey

// Optional: runtime validated array
export const NAV_ICON_KEYS_VALIDATED = [
  ...BASE_NAV_ICON_KEYS,
  ...FEATURE_ICON_KEYS,
] as const satisfies readonly NavIconKey[]

// Nav item model
export type NavItem = {
  name: string
  description?: string
  href?: string
  icon?: NavIconKey
  image?: string
  children?: NavItem[]
  variant?: 'link' | 'block' | 'footer'
}
