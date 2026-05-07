import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(_: Request, { params }: any) {
  const { chatId } = params
  const { data, error } = await supabase.from('messages').select('*').eq('chatId', chatId).order('createdAt', { ascending: true })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ messages: data })
}

export async function POST(req: Request, { params }: any) {
  const { chatId } = params
  const body = await req.json()
  const { senderId, text } = body
  const { error } = await supabase.from('messages').insert({ chatId, senderId, text })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
