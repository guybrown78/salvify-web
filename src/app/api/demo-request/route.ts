import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'
import { demoRequestSchema } from '@/lib/validation/demoRequestSchema'

const formatDate = (): string => {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = demoRequestSchema.safeParse(body)

    if (!result.success) {
      const flattened = result.error.flatten()

      return NextResponse.json(
        {
          error: 'Validation failed',
          fieldErrors: flattened.fieldErrors,
        },
        { status: 400 }
      )
    }

		const { name, email, tel, company, message } = result.data
		const date = formatDate()

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
    }).base(process.env.AIRTABLE_BASE as string)

    await base('Demo').create([
      {
        fields: {
          Name: name,
          Email: email,
          Telephone: tel,
          Company: company,
          Message: message,
					Date: date,
        },
      },
    ])

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Demo request error:', error)

    return NextResponse.json(
      { error: 'Failed to submit demo request' },
      { status: 500 }
    )
  }
}