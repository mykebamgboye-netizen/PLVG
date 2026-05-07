import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendPush } from '@/lib/webpush.server'

export async function POST(req: Request) {
  try {
    const sub = await req.json()
    // store in supabase table `push_subscriptions` (id, user_id, endpoint, keys)
    const { error } = await supabase.from('push_subscriptions').insert([ { endpoint: sub.endpoint, keys: sub.keys } ])
    if (error) console.error('supabase insert error', error)
    // Optionally send a test notification
    try { await sendPush(sub, { title: 'Subscribed', body: 'You will receive notifications from PluggedIn.' }) } catch(e) {}
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
