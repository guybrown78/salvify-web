import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.salvify.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  // The live site is currently a single page. Add the version 2 routes here
  // (product/*, solutions/*, insights/*, company/*, resources/*) as they go live.
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
