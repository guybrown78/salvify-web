import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.salvify.co.uk'

// The live site is currently a one-pager plus a small number of standalone
// pages. Add the version 2 routes here (product/*, solutions/*, insights/*,
// company/*, resources/*) as they go live.
const paths: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/controlled-drug-register', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority,
  }))
}
