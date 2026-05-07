import React from 'react'

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="max-w-md w-full p-6 rounded-2xl bg-black/50 backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-2">PluggedIn</h1>
        <p className="text-neutral-400 mb-6">Connecting Plugs with Plugged — Nigeria's social marketplace.</p>
        <div className="flex gap-3">
          <a className="flex-1 text-center px-4 py-2 rounded bg-gradient-to-br from-primary to-pink-400">Login</a>
          <a className="flex-1 text-center px-4 py-2 rounded border">Sign up</a>
        </div>
      </div>
    </div>
  )
}
