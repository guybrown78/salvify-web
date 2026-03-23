export const USE_CASE_ICON_KEYS = [
  'HiOutlineClipboardDocumentList',
  'HiOutlineBeaker',
  'HiOutlineCube',
  'HiOutlineClock',
  'HiOutlineBuildingOffice2',
] as const

export type UseCaseIconKey = (typeof USE_CASE_ICON_KEYS)[number]

export const useCaseIconOptions = USE_CASE_ICON_KEYS.map((k) => ({
  title: k
    .replace(/^HiOutline/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim(),
  value: k,
}))