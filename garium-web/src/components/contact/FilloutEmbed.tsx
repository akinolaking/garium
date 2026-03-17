'use client'
import { useState, useEffect, useRef } from 'react'

interface FilloutEmbedProps {
  formId?: string
  prefill?: Record<string, string>
}

export function FilloutEmbed({ formId, prefill }: FilloutEmbedProps) {
  const resolvedFormId = formId || process.env.NEXT_PUBLIC_FILLOUT_FORM_ID || ''
  const baseUrl = process.env.NEXT_PUBLIC_FILLOUT_BASE_URL || 'https://forms.fillout.com/t'
  const [failed, setFailed] = useState(false)
  const [height, setHeight] = useState(600)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const params = new URLSearchParams(prefill || {})
  const src = `${baseUrl}/${resolvedFormId}${params.toString() ? `?${params.toString()}` : ''}`

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'fillout:resize' && typeof e.data.height === 'number') {
        setHeight(e.data.height)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  if (!resolvedFormId) {
    return (
      <div className="flex items-center justify-center p-12 bg-[#F5F7FA] rounded-xl border border-[#D1D9E8]">
        <p className="text-[#6B7280] text-sm">Form not configured. Set NEXT_PUBLIC_FILLOUT_FORM_ID in your environment.</p>
      </div>
    )
  }

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-12 bg-[#F5F7FA] rounded-xl border border-[#D1D9E8]">
        <p className="text-[#374151]">Unable to load the form. Open it directly:</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gradient-to-br from-[#072c8f] to-[#081c52] text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Open consultation form
        </a>
      </div>
    )
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      title="Book a consultation"
      onError={() => setFailed(true)}
      className="rounded-xl border border-[#D1D9E8]"
      style={{ minHeight: 400 }}
    />
  )
}
