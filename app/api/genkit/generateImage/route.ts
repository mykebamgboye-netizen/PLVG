import { NextResponse } from 'next/server'
import GenkitServer from '@/lib/genkit.server'
export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()
    const images = await GenkitServer.generateImage(prompt)
    return NextResponse.json({ images })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
