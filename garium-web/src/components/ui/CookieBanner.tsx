'use client'
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('garium-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('garium-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('garium-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[500] bg-white border-t border-[#D1D9E8] shadow-[0_20px_60px_0_rgba(8,28,82,0.2)] p-4">
      <div className="container-garium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-[#374151] max-w-prose">
          We use only essential cookies to make this site work. We do not use advertising or tracking cookies.{' '}
          <a href="/cookie-policy" className="text-[#072c8f] underline hover:opacity-80">Privacy policy</a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-[#6B7280] hover:text-black transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-[#072c8f] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#062472] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
