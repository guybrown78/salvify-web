'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { HiOutlineKey } from 'react-icons/hi2'
import { useInView } from '@/hooks/useInView'

/**
 * Illustrates Role-Based Access Control: cycles through three roles, showing
 * which permissions each one is granted and that every action stays linked
 * to a named account. Loops while in view, pauses on hover, settles on the
 * final frame under reduced-motion.
 */
type Role = { name: string; perms: string[] }

const roles: Role[] = [
  { name: 'Paramedic', perms: ['View'] },
  { name: 'Team Lead', perms: ['View', 'Adjust'] },
  { name: 'Ops Manager', perms: ['View', 'Adjust', 'Authorise'] },
]

const permissions = ['View', 'Adjust', 'Authorise']
const STEP_MS = 2200

export default function FeatureVisualRoles() {
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setActive(roles.length - 1)
    }
  }, [])

  useEffect(() => {
    if (paused || reduced || !inView) return
    let raf = 0
    const t = window.setTimeout(() => {
      raf = window.requestAnimationFrame(() =>
        setActive((a) => (a + 1) % roles.length)
      )
    }, STEP_MS)
    return () => {
      window.clearTimeout(t)
      window.cancelAnimationFrame(raf)
    }
  }, [active, paused, reduced, inView])

  const role = roles[active]

  return (
    <div
      ref={ref}
      className="border-b border-border/70 bg-surface-muted/40 px-6 pb-5 pt-6 sm:px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        {roles.map((r, i) => (
          <button
            key={r.name}
            type="button"
            tabIndex={-1}
            onClick={() => setActive(i)}
            className={clsx(
              'rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-500',
              i === active ? 'bg-ink text-surface' : 'bg-white text-fg/50'
            )}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div
        key={active}
        className="cdr-rise mt-3 flex flex-wrap items-center gap-1.5"
      >
        {permissions.map((perm) => {
          const granted = role.perms.includes(perm)
          return (
            <span
              key={perm}
              className={clsx(
                'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors duration-500',
                granted
                  ? 'bg-brand-500/15 text-brand-700'
                  : 'bg-white text-fg/30 line-through decoration-fg/25'
              )}
            >
              {perm}
            </span>
          )
        })}
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-fg/50">
        <HiOutlineKey className="size-3.5 shrink-0" aria-hidden="true" />
        Every action linked to {role.name.toLowerCase()}&rsquo;s account
      </div>
    </div>
  )
}
