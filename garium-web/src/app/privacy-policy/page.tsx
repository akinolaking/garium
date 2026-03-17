import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Garium privacy policy — how we handle your data.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="container-garium section-pad-lg pt-32">
      <div className="max-w-[720px]">
        <h1 className="font-semibold text-black mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
          Privacy Policy
        </h1>
        <p className="text-[#374151] text-lg leading-relaxed mb-6">
          This privacy policy is being finalised. For any data protection enquiries, contact us at{' '}
          <a href="mailto:privacy@garium.com" className="text-[#072c8f] underline">privacy@garium.com</a>
        </p>
        <p className="text-[#374151] text-base leading-relaxed">
          Garium is operated by Conqolx Technologies Company. We are committed to protecting your personal data
          in accordance with the UK GDPR and the Nigerian Data Protection Act 2023.
        </p>
      </div>
    </div>
  )
}
