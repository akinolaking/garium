import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: 'USD' | 'GBP' | 'NGN'): string {
  const symbols = { USD: '$', GBP: '£', NGN: '₦' }
  const symbol = symbols[currency]
  if (currency === 'NGN') {
    return `${symbol}${(amount * 1600).toLocaleString('en-NG', { maximumFractionDigits: 0 })}`
  }
  if (currency === 'GBP') {
    return `${symbol}${Math.round(amount * 0.79).toLocaleString('en-GB')}`
  }
  return `${symbol}${amount.toLocaleString('en-US')}`
}
