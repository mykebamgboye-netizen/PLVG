export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center">
        <div className="mb-4">Loading PluggedIn...</div>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400 mx-auto" />
      </div>
    </div>
  )
}
