'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('plugged')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password, role }) })
    const j = await res.json()
    setLoading(false)
    if (res.ok) {
      router.push('/feed')
    } else {
      alert(j.error || 'Error')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-bg">
      <form onSubmit={submit} className="max-w-md w-full p-6 rounded-2xl bg-black/50 backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4">Create your account</h2>
        <input required className="w-full p-2 rounded mb-2 bg-[#0a0a0a]" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
        <input required className="w-full p-2 rounded mb-2 bg-[#0a0a0a]" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input required type="password" className="w-full p-2 rounded mb-2 bg-[#0a0a0a]" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <div className="flex gap-2 mb-4">
          <label className={role==='plug' ? 'bg-primary px-3 py-2 rounded' : 'px-3 py-2 rounded border'}><input type="radio" name="role" value="plug" checked={role==='plug'} onChange={() => setRole('plug')} className="mr-2" />Plug</label>
          <label className={role==='plugged' ? 'bg-primary px-3 py-2 rounded' : 'px-3 py-2 rounded border'}><input type="radio" name="role" value="plugged" checked={role==='plugged'} onChange={() => setRole('plugged')} className="mr-2" />Plugged</label>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 rounded bg-primary">{loading ? 'Creating…' : 'Create account'}</button>
        </div>
      </form>
    </main>
  )
}
