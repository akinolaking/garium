import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Garium terms of service.',
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <div className="container-garium section-pad-lg pt-32">
      <div className="max-w-[720px]">
        <h1 className="font-semibold text-black mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
          Terms of Service
        </h1>
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          Our terms of service are being finalised. For any contractual enquiries, contact us at{' '}
          <a href="mailto:hello@garium.com" className="text-[#072c8f] underline">hello@garium.com</a>
        </p>
        <p className="text-[#374151] text-base leading-relaxed">
          Garium services are provided by Conqolx Technologies Company. All client engagements are governed
          by individual service agreements issued at the time of onboarding.
        </p>
      </div>
    </div>
  )
}
