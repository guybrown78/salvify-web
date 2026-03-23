import { z } from 'zod'

export const demoRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100, 'Name is too long.'),
  email: z.email('Please enter a valid email address.'),
  tel: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .max(30, 'Phone number is too long.'),
  company: z
    .string()
    .trim()
    .max(100, 'Company name is too long.')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .max(1000, 'Message is too long.')
    .optional()
    .or(z.literal('')),
})