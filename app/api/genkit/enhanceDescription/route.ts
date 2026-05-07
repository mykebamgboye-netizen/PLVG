import { NextResponse } from 'next/server'
import GenkitServer from '@/lib/genkit.server'
export async function POST(req: Request) {
  try {
    const { text } = await req.json()
    const enhanced = await GenkitServer.enhanceProductDescription(text)
    return NextResponse.json({ enhanced })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
