import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, organisation, country, teamSize, planInterest, message } = body

    if (!name || !organisation || !message) {
      return NextResponse.json(
        { error: 'Required fields missing: name, organisation, message' },
        { status: 400 }
      )
    }

    // Log the submission (replace with email service integration)
    console.log('Contact form submission:', {
      name,
      organisation,
      country,
      teamSize,
      planInterest,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
