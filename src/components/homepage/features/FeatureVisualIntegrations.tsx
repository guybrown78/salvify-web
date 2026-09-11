import { LogoMark } from '@/components/Logo'
import { HiOutlineDocumentText, HiOutlineShoppingCart } from 'react-icons/hi2'
import FeatureVisualFrame from './FeatureVisualFrame'
import FeatureVisualHub from './FeatureVisualHub'

/**
 * Illustrates Interoperability: Salvify sitting in the middle of a
 * connected ecosystem. Resting state is the settled hub-and-spoke picture;
 * hovering brightens the connecting line and draws the satellites in.
 */
export default function FeatureVisualIntegrations() {
  return (
    <FeatureVisualFrame>
      <FeatureVisualHub
        left={<HiOutlineDocumentText className="size-4" aria-hidden="true" />}
        right={<HiOutlineShoppingCart className="size-4" aria-hidden="true" />}
        center={<LogoMark palette="dark" className="size-5" />}
        caption="ePRF · Procurement · Clinical workflow"
      />
    </FeatureVisualFrame>
  )
}
