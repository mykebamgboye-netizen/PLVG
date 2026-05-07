'use client'
import React from 'react'
export default function ChatList({ chats, onSelect }: { chats: any[], onSelect: (c:any)=>void }) {
  return (
    <aside className="w-64 bg-black/40 p-3 rounded-xl">
      <h3 className="text-lg font-semibold mb-3">Chats</h3>
      <ul className="space-y-2">
        {chats.map(c => (
          <li key={c.id} className="p-2 rounded hover:bg-gray-800 cursor-pointer" onClick={()=>onSelect(c)}>
            <div className="font-medium">{c.name}</div>
            <div className="text-xs text-gray-400">{c.lastMessage}</div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
