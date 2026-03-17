'use client'
import { useState, useEffect } from 'react'
import type { Currency } from '@/lib/currency'
import { FALLBACK_RATES } from '@/lib/currency'

const STORAGE_KEY = 'garium-currency'
const EVENT_KEY = 'garium-currency-change'

export function useCurrency() {
  const [currency, setCurrencyState] = useState<Currency>('USD')
  const [rates, setRates] = useState(FALLBACK_RATES)

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Currency | null
    if (saved && ['USD', 'GBP', 'NGN'].includes(saved)) setCurrencyState(saved)
  }, [])

  // Sync across multiple useCurrency instances on the same page
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Currency>).detail
      if (detail) setCurrencyState(detail)
    }
    window.addEventListener(EVENT_KEY, handler)
    return () => window.removeEventListener(EVENT_KEY, handler)
  }, [])

  // Fetch live exchange rates
  useEffect(() => {
    fetch('https://api.frankfurter.app/latest?from=USD&to=GBP,NGN')
      .then(r => r.json())
      .then(data => {
        if (data?.rates) {
          setRates({ USD: 1, GBP: data.rates.GBP ?? FALLBACK_RATES.GBP, NGN: data.rates.NGN ?? FALLBACK_RATES.NGN })
        }
      })
      .catch(() => {})
  }, [])

  const setCurrency = (c: Currency) => {
    setCurrencyState(c)
    localStorage.setItem(STORAGE_KEY, c)
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: c }))
  }

  return { currency, rates, setCurrency }
}
