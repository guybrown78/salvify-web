export interface Testimonial {
  _id: string
  author: string
  message: string
  role?: string
  company?: string
  companyUrl?: string
  industry?: { _id: string; title?: string; slug?: string }[]
  publishedAt?: string
}