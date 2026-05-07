import './globals.css'
import React from 'react'
export const metadata = { title: 'PluggedIn' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-white">
        {children}
      </body>
    </html>
  )
}
