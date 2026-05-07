'use client'
import React, { useState } from 'react'
import GenkitClient from './GenkitClient'
import Image from 'next/image'

export default function NewProductForm() {
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')

  async function enhance() {
    setLoading(true)
    try {
      const enhanced = await GenkitClient.enhanceProductDescription(description)
      setDescription(enhanced)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function generateImage() {
    if (!prompt.trim()) return
    setLoading(true)
    try {
      const urls = await GenkitClient.generateImage(prompt)
      setImages(s => [...s, ...urls])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 bg-[#0b0b0c] rounded-xl max-w-3xl mx-auto">
      <h3 className="font-medium">List a New Item</h3>
      <input placeholder="Title" className="w-full mt-3 p-2 rounded bg-[#0a0a0a]" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mt-3 p-3 rounded bg-[#0a0a0a]" rows={6} />
      <div className="mt-3 flex gap-2">
        <button onClick={enhance} className="px-3 py-2 rounded bg-primary">{loading ? '…' : 'Enhance Description'}</button>
        <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Image prompt e.g. 'white sneakers on Lagos street'" className="px-3 py-2 rounded bg-[#0a0a0a]" />
        <button onClick={generateImage} className="px-3 py-2 rounded border">{loading ? '…' : 'Generate Image'}</button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((u, i) => (
          <div key={i} className="relative w-full h-24 rounded overflow-hidden bg-gray-800">
            <Image src={u} alt={`generated-${i}`} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 rounded bg-primary">Publish</button>
      </div>
    </div>
  )
}
