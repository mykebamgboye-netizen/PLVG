'use client'
import React, { useState } from 'react'
import GenkitClient from './GenkitClient'

export default function TrendsPage() {
  const [loading, setLoading] = useState(false)
  const [trends, setTrends] = useState<any[]>([])

  async function generate() {
    setLoading(true)
    try {
      const res = await GenkitClient.generateTrends({ /* could include userId */ })
      setTrends(res)
    } catch (err) {
      console.error(err)
      setTrends([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-2"><h3 className="font-medium">Trends for You</h3></div>
      <p className="text-sm text-neutral-400">AI-generated suggestions based on your likes and search history.</p>
      <div className="mt-4">
        <button onClick={generate} className="px-4 py-2 rounded bg-primary">{loading ? 'Generating…' : 'Generate Trends'}</button>
      </div>
      <div className="mt-4 grid gap-3">
        {loading && <div className="text-neutral-500">Loading…</div>}
        {trends.map((t, i) => (
          <div key={i} className="p-3 bg-[#0a0a0a] rounded-lg">
            <div className="font-medium">{t.title}</div>
            <div className="text-sm text-neutral-400">{t.reason}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
