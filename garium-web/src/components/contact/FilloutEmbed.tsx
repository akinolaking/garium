'use client'

interface FilloutEmbedProps {
  prefill?: Record<string, string>
}

export function FilloutEmbed({ prefill }: FilloutEmbedProps) {
  const params = new URLSearchParams(prefill || {})
  const src = `https://forms.fillout.com/t/7GP3eGaGjjus${params.toString() ? `?${params.toString()}` : ''}`

  return (
    <div className="w-full rounded-lg overflow-hidden border border-[#D1D9E8]">
      <div
        style={{ width: '100%', height: '500px' }}
        data-fillout-id="7GP3eGaGjjus"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      />
      <script src="https://server.fillout.com/embed/v1/" async />
      <noscript>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#072c8f] to-[#081c52] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Open booking form
        </a>
      </noscript>
    </div>
  )
}
