import { Container } from '../Container'
import Eyebrow from '../content/Eyebrow'
import { ContentH2 } from '../content/Titles'
import { ContentP } from '../content/Typography'

import clsx from 'clsx'
import NavIcon from '../nav/NavIcon'

import { NavIconKey } from '@/utils/nav-types'

export interface CardProps {
  eyebrow: string
  label: string
  menuIcon: NavIconKey
  description: string
}

const IndustryCard = ({ eyebrow, label, menuIcon, description }: CardProps) => {
  return (
    <div
      className="relative flex gap-x-6 rounded-lg bg-surface p-4 duration-200"
      aria-label={`${eyebrow}: ${label}`}
    >
      <div className="mt-3 flex flex-col">
        <div className="flex items-center justify-start gap-x-6">
          <div
            className={clsx(
              'flex size-8 flex-none items-center justify-center rounded-lg bg-surface',
              'transition-colors duration-200 ease-in-out',
              'group-hover:bg-white group-focus-visible:bg-white'
            )}
            aria-hidden
          >
            <NavIcon icon={menuIcon} size="lg" />
          </div>

          <div className="flex-col">
            <h5 className="font-brand text-xs font-light uppercase">
              {eyebrow}
            </h5>

            <div className="inline-flex items-center gap-1">
              <span
                className={clsx(
                  'truncate pr-1 font-brand text-lg font-extrabold underline-offset-2',
                  'group-hover:underline group-focus-visible:underline'
                )}
              >
                {label}
              </span>
            </div>
          </div>
        </div>

        <div className="ml-14">{description}</div>
      </div>
    </div>
  )
}

const OPHomepageIndustries = () => {
  return (
    <section
      id="industrial-solutions-overview"
      aria-labelledby="industrial-solutions-overview-title"
      className="py-6 sm:py-12"
    >
      <Container>
        <Eyebrow title="Who We Support" />
        <ContentH2 title="Medicine Management for Every Environment" />
        <ContentP>
          Salvify is built to support the realities of pre-hospital and remote
          medical care. Each industry has its own pressures, workflows and
          compliance needs, so our platform adapts to the environments where
          teams work — from private ambulances to maritime medicine. Choose your
          sector to see how Salvify fits your setup.
        </ContentP>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <IndustryCard
            eyebrow="Ambulance Services"
            label="NHS and Private Ambulance Services"
            menuIcon="LuAmbulance"
            description="Manage medicines across your entire fleet with full visibility, clear accountability and audit-ready records for every vehicle and response bag."
          />

          <IndustryCard
            eyebrow="Event Medical"
            label="Event Medical Providers"
            menuIcon="LuMapPin"
            description="Stay organised across temporary sites and changing deployments. Set up, track and manage medicines from build-up through to stand-down."
          />

          <IndustryCard
            eyebrow="Rapid Response"
            label="Pre-Hospital Care"
            menuIcon="LuActivity"
            description="Ensure clinicians have the right medicines, in the right place, at the right time — with real-time visibility and simple shift preparation."
          />

          <IndustryCard
            eyebrow="Rapid Response"
            label="Medical Repatriation"
            menuIcon="LuPlaneTakeoff"
            description="End-to-end medicine management for patient transport and retrieval"
          />
        </div>
      </Container>
    </section>
  )
}

export default OPHomepageIndustries
