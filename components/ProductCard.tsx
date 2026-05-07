'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({ product }: any) {
  return (
    <motion.article layout whileHover={{ scale: 1.02 }} className="p-3 bg-[#0b0b0c] rounded-xl">
      <a href={`/market/${product.id}`}>
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-800">
          <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: 'cover' }} />
        </div>
      </a>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <div className="font-medium">{product.title}</div>
          <div className="text-sm text-neutral-400">{product.seller.name}</div>
        </div>
        <div className="text-pink-400">₦{product.price}</div>
      </div>
    </motion.article>
  )
}
