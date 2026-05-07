import { NextResponse } from 'next/server'
import GenkitServer from '@/lib/genkit.server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const trends = await GenkitServer.generateTrends(body || {})
    return NextResponse.json({ trends })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
