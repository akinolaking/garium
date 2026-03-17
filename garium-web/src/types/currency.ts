export type Currency = 'USD' | 'GBP' | 'NGN'

export interface CurrencyOption {
  code: Currency
  symbol: string
  label: string
  flag: string
}
