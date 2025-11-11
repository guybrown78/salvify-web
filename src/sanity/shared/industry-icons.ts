export const INDUSTRY_ICON_KEYS = [
	'LuAmbulance',
  'LuMapPin',
  'LuPlaneLanding',
	'LuPlaneTakeoff',
	'LuActivity',
	'LiaToothSolid',
	'RiToothLine',
	'LuPawPrint',
] as const

export type IndustryIconKey = (typeof INDUSTRY_ICON_KEYS)[number]

export const industryIconOptions = INDUSTRY_ICON_KEYS.map((k) => ({
  title: k
    .replace(/^Lu|Lia|Ri/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim(),
  value: k,
}))