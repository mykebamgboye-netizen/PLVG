'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useChat(chatId: string) {
  const [messages, setMessages] = useState<any[]>([])
  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/messages/${chatId}`)
      const j = await res.json()
      setMessages(j.messages || [])
    }
    load()
    const channel = supabase
      .channel(`chat-${chatId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages', filter: `chatId=eq.${chatId}` }, payload => {
        if (payload.new) setMessages(m => [...m, payload.new])
      })
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [chatId])
  return messages
}
