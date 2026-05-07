'use client'
import React from 'react'

export default function GlobalError({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-white p-6">
      <div className="max-w-xl text-center p-6 bg-[#0b0b0c] rounded-xl">
        <h2 className="text-2xl font-poppins mb-2">Something went wrong</h2>
        <p className="text-neutral-400 mb-4">{error?.message || 'An unexpected error occurred.'}</p>
        <div className="flex gap-2 justify-center">
          <button onClick={() => reset()} className="px-4 py-2 rounded bg-primary">Try again</button>
        </div>
      </div>
    </div>
  )
}
