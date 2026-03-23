import { z } from 'zod'

export const contactRequestSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.'),
  tel: z.string().trim().max(30).optional().or(z.literal('')),
  company: z.string().trim().max(100).optional().or(z.literal('')),
  subject: z.string().trim().min(1, 'Please enter a subject.').max(120),
  message: z
    .string()
    .trim()
    .min(1, 'Please enter your message.')
    .max(2000, 'Message is too long.'),
})