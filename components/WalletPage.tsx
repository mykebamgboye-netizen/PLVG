'use client'
import React, { useState } from 'react'

export default function WalletPage() {
  const [show, setShow] = useState(false)
  const [cards, setCards] = useState<any[]>([])
  const [number, setNumber] = useState('')

  function addCard() {
    if (!number) return
    setCards(c => [...c, { id: Date.now(), number: '**** **** **** ' + number.slice(-4) }])
    setNumber(''); setShow(false)
  }

  return (
    <div className="p-4 bg-[#0b0b0c] rounded-xl max-w-3xl mx-auto">
      <h3 className="font-medium">Wallet</h3>
      <div className="mt-4 space-y-3">
        {cards.length===0 && <div className="text-neutral-400">No saved cards.</div>}
        {cards.map(c => <div key={c.id} className="p-2 bg-[#0a0a0a] rounded">{c.number}</div>)}
      </div>
      <div className="mt-4 flex justify-end"><button onClick={()=>setShow(true)} className="px-3 py-2 rounded bg-primary">Add Card</button></div>
      {show && (
        <div className="mt-3 p-3 bg-[#0a0a0a] rounded">
          <input placeholder="Card last 4 digits" value={number} onChange={e=>setNumber(e.target.value)} className="p-2 rounded w-full bg-transparent" />
          <div className="mt-3 flex justify-end"><button onClick={addCard} className="px-3 py-2 rounded bg-primary">Add</button></div>
        </div>
      )}
    </div>
  )
}
