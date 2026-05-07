import React from 'react'
import PostCard from '../../components/PostCard'

export default function FeedPage() {
  const posts = [
    { id: 'p1', author: { name: 'Ada', avatar: 'https://i.pravatar.cc/40?img=1' }, text: 'Fresh Ankara sneakers — made in Lagos!', image: 'https://picsum.photos/seed/ankara/800/600', timestamp: '2h' },
    { id: 'p2', author: { name: 'Chike', avatar: 'https://i.pravatar.cc/40?img=2' }, text: 'Preloved phones — PM for specs', image: 'https://picsum.photos/seed/phones/800/600', timestamp: '6h' },
  ]
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Feed</h2>
      <div className="space-y-4">
        {posts.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </main>
  )
}
