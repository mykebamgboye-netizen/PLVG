const GenkitClient = {
  async generateTrends(ctx: any) {
    const res = await fetch('/api/genkit/generateTrends', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(ctx) })
    if (!res.ok) throw new Error('Genkit generateTrends failed')
    const j = await res.json()
    return j.trends || []
  },
  async enhanceProductDescription(text: string) {
    const res = await fetch('/api/genkit/enhanceDescription', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) })
    if (!res.ok) throw new Error('Genkit enhance failed')
    const j = await res.json()
    return j.enhanced || j.enhancedText || j.enhancedText || text
  },
  async generateImage(prompt: string) {
    const res = await fetch('/api/genkit/generateImage', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt }) })
    if (!res.ok) throw new Error('Genkit image failed')
    const j = await res.json()
    return j.images || []
  }
}
export default GenkitClient
