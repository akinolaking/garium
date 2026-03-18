import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'How Garium handles your personal data — Conqolx Technologies Limited.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-garium">
        <div className="max-w-[720px] mx-auto">
          <p className="eyebrow mb-4 block">Legal</p>
          <h1 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <p className="text-[#4B5563] text-sm mb-12">
            Effective date: 17 March 2026. Conqolx Technologies Limited, trading as Garium.
          </p>

          <div className="space-y-10 text-[#374151] text-base leading-relaxed">

            <section aria-labelledby="who-we-are">
              <h2 id="who-we-are" className="text-xl font-semibold text-black mb-4">Who we are</h2>
              <p>Conqolx Technologies Limited, trading as Garium, is the data controller for personal data collected through the Garium website (garium.com) and the Garium private AI platform services. Registered in England and Wales (RC: 14565201) and Nigeria (RC: 1775966).</p>
              <p className="mt-3">Data protection contact: <a href="mailto:privacy@garium.co" className="text-[#072c8f] hover:underline">privacy@garium.co</a></p>
            </section>

            <section aria-labelledby="what-we-collect">
              <h2 id="what-we-collect" className="text-xl font-semibold text-black mb-4">What data we collect</h2>
              <p className="mb-3"><strong className="text-black">Website visitors:</strong> IP address and approximate location, pages visited, browser and device type, collected via self-hosted analytics.</p>
              <p className="mb-3"><strong className="text-black">Consultation enquiries:</strong> Name, email address, organisation name, country, team size, and message content submitted through our contact form.</p>
              <p className="mb-3"><strong className="text-black">Contracted clients:</strong> Billing contact details and payment method (processed by Stripe — Garium does not store card data).</p>
              <p><strong className="text-black">Platform users:</strong> Garium does not collect personal data from your end users as a data controller. All data on your platform is processed by Garium as a data processor under your organisation&apos;s instructions.</p>
            </section>

            <section aria-labelledby="how-we-use">
              <h2 id="how-we-use" className="text-xl font-semibold text-black mb-4">How we use your data</h2>
              <p className="mb-3">We use the data we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>Respond to consultation enquiries (lawful basis: legitimate interests)</li>
                <li>Deliver contracted services (lawful basis: performance of contract)</li>
                <li>Process payments (lawful basis: performance of contract)</li>
                <li>Monitor platform performance and uptime (lawful basis: legitimate interests)</li>
                <li>Send service notifications and updates (lawful basis: performance of contract)</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell your data. We do not use it for advertising. We do not share it with third parties except as required to deliver our services (Stripe for payment processing, Contabo for infrastructure hosting).</p>
            </section>

            <section aria-labelledby="retention">
              <h2 id="retention" className="text-xl font-semibold text-black mb-4">How long we keep your data</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Consultation enquiry data: 2 years from submission</li>
                <li>Client billing data: 7 years (legal obligation)</li>
                <li>Client platform data: deleted within 30 days of contract termination</li>
                <li>Website analytics: 12 months rolling</li>
              </ul>
            </section>

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className="text-xl font-semibold text-black mb-4">Your rights</h2>
              <p>Under UK GDPR and the Nigeria Data Protection Act 2023, you have the right to access, correct, delete, restrict processing of, and port your personal data. You may also object to processing based on legitimate interests.</p>
              <p className="mt-3">To exercise these rights, contact <a href="mailto:privacy@garium.co" className="text-[#072c8f] hover:underline">privacy@garium.co</a>. We will respond within 30 days.</p>
            </section>

            <section aria-labelledby="cookies-section">
              <h2 id="cookies-section" className="text-xl font-semibold text-black mb-4">Cookies</h2>
              <p>We use only essential cookies necessary for the website to function. We do not use advertising or third-party tracking cookies. Our analytics are processed by a self-hosted instance and do not involve data transfer to third-party analytics providers. See our <a href="/cookie-policy" className="text-[#072c8f] hover:underline">Cookie Policy</a> for full details.</p>
            </section>

            <section aria-labelledby="international">
              <h2 id="international" className="text-xl font-semibold text-black mb-4">International transfers</h2>
              <p>Our infrastructure is hosted in European data centres. Where required by applicable law, we implement standard contractual clauses for cross-border data transfers.</p>
            </section>

            <section aria-labelledby="contact-us">
              <h2 id="contact-us" className="text-xl font-semibold text-black mb-4">Contact us</h2>
              <address className="not-italic">
                <p><strong className="text-black">Garium / Conqolx Technologies Limited</strong></p>
                <p>Bartle House, 9 Oxford Court, Manchester, M2 3WQ, United Kingdom</p>
                <p>VeniaHub 8, The Providence St, Lekki Phase 1, Lagos 100252, Nigeria</p>
                <p className="mt-2"><a href="mailto:privacy@garium.co" className="text-[#072c8f] hover:underline">privacy@garium.co</a></p>
              </address>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
