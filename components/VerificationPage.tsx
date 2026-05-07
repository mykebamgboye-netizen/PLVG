'use client'
import React, { useState } from 'react'

export default function VerificationPage() {
  const [status, setStatus] = useState<'unverified'|'pending'|'verified'>('unverified')
  const [fileName, setFileName] = useState('')

  async function submit() {
    // In production, upload file to storage and call verification service
    setStatus('pending')
    setTimeout(()=>setStatus('verified'), 3000) // mock
  }

  return (
    <div className="p-4 bg-[#0b0b0c] rounded-xl max-w-3xl mx-auto">
      <h3 className="font-medium">Verification</h3>
      {status === 'unverified' && (
        <div className="mt-3">
          <p className="text-neutral-400">Submit your ID to get verified.</p>
          <input type="file" onChange={(e:any)=>setFileName(e.target.files?.[0]?.name || '')} className="mt-2" />
          <div className="mt-3 flex gap-2 justify-end"><button onClick={submit} className="px-3 py-2 rounded bg-primary">Submit</button></div>
        </div>
      )}
      {status === 'pending' && <div className="text-yellow-400 mt-3">Pending review…</div>}
      {status === 'verified' && <div className="text-green-400 mt-3">Verified ✔</div>}
    </div>
  )
}
