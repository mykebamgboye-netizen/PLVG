'use client'
import React from 'react'

export default function LoadingSpinner({ size = 40 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400" />
    </div>
  )
}
