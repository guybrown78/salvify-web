import { NextResponse } from 'next/server'
import Airtable from 'airtable'
import { contactRequestSchema } from '@/lib/validation/contactRequestSchema'

const formatDate = (): string => {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const result = contactRequestSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          fieldErrors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, email, tel, company, subject, message } = result.data

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
    }).base(process.env.AIRTABLE_BASE as string)

    await base('Contact').create([
      {
        fields: {
          Name: name,
          Email: email,
          Telephone: tel || '',
          Company: company || '',
          Subject: subject,
          Message: message,
          Source: 'Contact Page',
          Date: formatDate(),
        },
      },
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact request error:', error)

    return NextResponse.json(
      { error: 'Failed to submit contact request' },
      { status: 500 }
    )
  }
}