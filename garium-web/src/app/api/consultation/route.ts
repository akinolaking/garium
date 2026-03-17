import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Log Fillout webhook submission
    console.log('Consultation form submission received:', {
      ...body,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ received: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
