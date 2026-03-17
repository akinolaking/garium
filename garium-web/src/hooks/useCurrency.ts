'use client'
import { useState, useEffect } from 'react'
import type { Currency } from '@/lib/currency'
import { FALLBACK_RATES } from '@/lib/currency'

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [rates, setRates] = useState(FALLBACK_RATES)

  useEffect(() => {
    const saved = localStorage.getItem('garium-currency') as Currency | null
    if (saved && ['USD', 'GBP', 'NGN'].includes(saved)) setCurrency(saved)
  }, [])

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

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c)
    localStorage.setItem('garium-currency', c)
  }

  return { currency, rates, setCurrency: handleSetCurrency }
}
