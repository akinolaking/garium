export type PlanSegment = 'sme' | 'enterprise'
export type BillingCycle = 'monthly' | 'annual'

export interface Plan {
  id: string
  tier: string
  label: string
  segment: PlanSegment
  description: string
  setupUSD: number
  monthlyUSD: number
  annualUSD: number
  gpu: string
  vram: string
  gpuColor: string
  userLimit: string
  features: string[]
  interfaces: string[]
  featured: boolean
  isSME: boolean
  targetSectors: string[]
}
