export const BENEFIT_ICON_KEYS = [
  'HiOutlineEye',
  'HiOutlineExclamationCircle',
  'HiOutlineChartBar',
  'HiOutlineChartBarSquare',
  'HiOutlineClock',
  'HiOutlineTrash',
  'HiOutlineShieldCheck',
  'HiOutlineShieldExclamation',
  'HiOutlineClipboardDocumentCheck',
  'HiOutlineClipboardDocumentList',
  'HiOutlineBolt',
  'HiOutlineCheckCircle',
  'HiOutlineCheck',
  'HiOutlineLockClosed',
  'HiOutlineKey',
  'HiOutlineUserGroup',
  'HiOutlineDocumentChartBar',
  'HiOutlineDocumentCheck',
  'HiOutlineDocumentText',
  'HiOutlineUserPlus',
  'HiOutlineAdjustmentsHorizontal',
  'HiOutlineFolder',
  'HiOutlineChartPie',
  'HiOutlineArrowDownTray',
] as const;

export type BenefitIconKey = typeof BENEFIT_ICON_KEYS[number];

export const benefitIconOptions = BENEFIT_ICON_KEYS.map((k) => ({
  title: k.replace(/^HiOutline/, '').replace(/([A-Z])/g, ' $1').trim(),
  value: k,
}));
