const BASE_URL = process.env.NEXT_PUBLIC_FILLOUT_BASE_URL || 'https://forms.fillout.com/t'
const FORM_ID = process.env.NEXT_PUBLIC_FILLOUT_FORM_ID || ''

export function buildFilloutUrl(params: {
  planId?: string
  planName?: string
  tier?: 'sme' | 'enterprise'
  billing?: 'monthly' | 'annual'
}): string {
  const url = new URL(`${BASE_URL}/${FORM_ID}`)
  if (params.planId) url.searchParams.set('plan', params.planId)
  if (params.planName) url.searchParams.set('planName', params.planName)
  if (params.tier) url.searchParams.set('tier', params.tier)
  if (params.billing) url.searchParams.set('billing', params.billing)
  return url.toString()
}
