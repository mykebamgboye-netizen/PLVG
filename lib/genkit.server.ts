const GENKIT_KEY = process.env.GENKIT_API_KEY
const GENKIT_BASE = process.env.GENKIT_BASE_URL || 'https://api.genkit.example'

async function callGenkit(endpoint: string, payload: any) {
  const res = await fetch(`${GENKIT_BASE}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GENKIT_KEY}`,
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Genkit error')
  return res.json()
}

export default {
  async generateTrends(ctx: any) {
    const json = await callGenkit('flows/generateTrends', ctx)
    return json.trends || json.output || []
  },
  async enhanceProductDescription(text: string) {
    const json = await callGenkit('flows/enhanceProductDescription', { text })
    return json.enhancedText || json.output || text
  },
  async generateImage(prompt: string) {
    const json = await callGenkit('image/generate', { prompt })
    return json.images || json.urls || []
  }
}
