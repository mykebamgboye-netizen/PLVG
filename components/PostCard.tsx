'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PostCard({ post }: any) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-[#0b0b0c] rounded-xl shadow-sm">
      <div className="flex gap-3">
        <div className="w-10 h-10 relative rounded-full overflow-hidden"><Image src={post.author.avatar} alt={post.author.name} fill style={{ objectFit: 'cover' }} /></div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-xs text-neutral-500">{post.timestamp}</div>
            </div>
          </div>
          <p className="mt-2">{post.text}</p>
          {post.image && <div className="mt-3 rounded-lg w-full h-48 relative overflow-hidden"><Image src={post.image} alt="post" fill style={{ objectFit: 'cover' }} /></div>}
          <div className="mt-2 flex gap-4 text-sm text-neutral-300">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
