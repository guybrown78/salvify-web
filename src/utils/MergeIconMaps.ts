import type { IconType } from 'react-icons'

export type IconMap = Record<string, IconType>

interface Options {
  /** If two maps contain the same key:
   *  - 'first-wins' keeps the first occurrence (default)
   *  - 'last-wins' overwrites with the last occurrence
   */
  precedence?: 'first-wins' | 'last-wins'
  /** Log duplicate keys in development */
  warnDuplicates?: boolean
}

export function mergeIconMaps(maps: IconMap[], opts: Options = {}): IconMap {
  const { precedence = 'first-wins', warnDuplicates = true } = opts
  const out: IconMap = {}
  const seen = new Set<string>()

  for (let i = 0; i < maps.length; i++) {
    const map = maps[i]
    for (const [key, val] of Object.entries(map)) {
      const exists = key in out
      if (!exists || precedence === 'last-wins') {
        // only warn when we’re about to skip/overwrite
        if (exists && warnDuplicates && process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(`[IconMap] Duplicate key "${key}" (${precedence})`)
        }
        if (!exists || precedence === 'last-wins') out[key] = val
      }
      seen.add(key)
    }
  }

  return out
}