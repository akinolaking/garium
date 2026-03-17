import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Cookie Policy',
  description: 'Garium cookie policy — how we use cookies.',
  path: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <div className="container-garium section-pad-lg pt-32">
      <div className="max-w-[720px]">
        <h1 className="font-semibold text-black mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
          Cookie Policy
        </h1>
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          Garium uses only essential cookies required for the website to function. We do not use advertising,
          tracking, or analytics cookies without your consent.
        </p>
        <p className="text-[#374151] text-base leading-relaxed mb-4">
          <strong>Essential cookies</strong> are used to remember your cookie consent preference and maintain
          basic website functionality. These cannot be disabled.
        </p>
        <p className="text-[#374151] text-base leading-relaxed">
          For any cookie-related enquiries, contact us at{' '}
          <a href="mailto:privacy@garium.com" className="text-[#072c8f] underline">privacy@garium.com</a>
        </p>
      </div>
    </div>
  )
}
