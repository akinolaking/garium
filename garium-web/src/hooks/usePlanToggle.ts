'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import type { PlanSegment } from '@/types/plans'

export function usePlanToggle() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initial = (searchParams.get('segment') as PlanSegment) || 'sme'
  const [segment, setSegment] = useState<PlanSegment>(initial)

  useEffect(() => {
    const s = searchParams.get('segment') as PlanSegment | null
    if (s && (s === 'sme' || s === 'enterprise')) setSegment(s)
  }, [searchParams])

  const handleSet = (s: PlanSegment) => {
    setSegment(s)
    const params = new URLSearchParams(searchParams.toString())
    params.set('segment', s)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return { segment, setSegment: handleSet }
}
