export const FEATURE_ICON_KEYS = [
  'HiOutlineEye',
  'HiOutlineClock',
  'HiOutlineClipboardDocumentCheck',
  'HiOutlineLockClosed',
  'HiOutlineDocumentText',
  'HiOutlineChartBar',
  'HiOutlineUserGroup',
] as const

export type FeatureIconKey = (typeof FEATURE_ICON_KEYS)[number]

export const featureIconOptions = FEATURE_ICON_KEYS.map((k) => ({
  title: k
    .replace(/^HiOutline/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim(),
  value: k,
}))
