export type Currency = 'USD' | 'GBP' | 'NGN'

export const CURRENCIES: { code: Currency; symbol: string; label: string; flag: string }[] = [
  { code: 'USD', symbol: '$',  label: 'US Dollar',      flag: 'US' },
  { code: 'GBP', symbol: '£',  label: 'British Pound',  flag: 'GB' },
  { code: 'NGN', symbol: '₦',  label: 'Nigerian Naira', flag: 'NG' },
]

export const FALLBACK_RATES: Record<Currency, number> = {
  USD: 1,
  GBP: 0.79,
  NGN: 1600,
}

export function convertPrice(amountUSD: number, currency: Currency, rates: Record<Currency, number> = FALLBACK_RATES): number {
  return Math.round(amountUSD * rates[currency])
}

export function formatPrice(amount: number, currency: Currency): string {
  const symbols: Record<Currency, string> = { USD: '$', GBP: '£', NGN: '₦' }
  if (currency === 'NGN') {
    return `₦${amount.toLocaleString('en-NG')}`
  }
  return `${symbols[currency]}${amount.toLocaleString('en-US')}`
}
