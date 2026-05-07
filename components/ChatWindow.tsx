'use client'
import React, { useState } from 'react'
import { useChat } from '@/lib/hooks/useChat'

export default function ChatWindow({ chatId, userId }: { chatId: string, userId: string }) {
  const messages = useChat(chatId)
  const [text, setText] = useState('')

  async function send() {
    if (!text.trim()) return
    await fetch(`/api/messages/${chatId}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ senderId: userId, text }) })
    setText('')
  }

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] rounded-xl overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map(m => (
          <div key={m.id} className={`p-2 rounded-lg ${m.senderId===userId?'bg-primary text-white self-end':'bg-gray-800 text-gray-100 self-start'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="p-3 flex gap-2 border-t border-gray-800">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." className="flex-1 rounded px-3 py-2 bg-gray-900"/>
        <button onClick={send} className="bg-primary px-4 py-2 rounded">Send</button>
      </div>
    </div>
  )
}
