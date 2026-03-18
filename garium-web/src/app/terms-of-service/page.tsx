import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Garium terms of service — service terms for Conqolx Technologies Limited clients.',
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-garium">
        <div className="max-w-[720px] mx-auto">
          <p className="eyebrow mb-4 block">Legal</p>
          <h1 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Terms of Service
          </h1>
          <p className="text-[#4B5563] text-sm mb-12">
            Effective date: 17 March 2026. Conqolx Technologies Limited, trading as Garium.
          </p>

          {/* 90-day cancellation notice callout */}
          <div className="rounded-xl border-l-4 border-[#072c8f] bg-[#eef1f9] p-6 mb-10">
            <h3 className="font-semibold text-[#081c52] mb-2">90-day cancellation notice</h3>
            <p className="text-[#374151] text-sm leading-relaxed">
              Either party may cancel the services by providing not less than 90 days written notice. During the notice period, the monthly retainer remains due. On termination, your data is available for export for 14 days and permanently deleted within 30 days thereafter.
            </p>
          </div>

          <div className="space-y-10 text-[#374151] text-base leading-relaxed">

            <section aria-labelledby="acceptance">
              <h2 id="acceptance" className="text-xl font-semibold text-black mb-4">1. Acceptance and applicability</h2>
              <p>By signing a service agreement or paying an invoice from Conqolx Technologies Limited (trading as Garium), you accept these terms. These terms apply to all Garium platform services, including setup, deployment, and ongoing management. Individual service agreements may supplement or vary these terms.</p>
            </section>

            <section aria-labelledby="services">
              <h2 id="services" className="text-xl font-semibold text-black mb-4">2. Services description</h2>
              <p>Garium provides private AI infrastructure services, including initial deployment of AI platform software on dedicated or shared infrastructure, ongoing management, monitoring, updates, and support as specified in the agreed service plan. Specific deliverables, timelines, and specifications are set out in the individual service agreement issued at the time of onboarding.</p>
            </section>

            <section aria-labelledby="fees">
              <h2 id="fees" className="text-xl font-semibold text-black mb-4">3. Fees and payment</h2>
              <p className="mb-3">Services are provided for a one-time setup fee and a recurring monthly retainer. An annual payment option is available at a discounted rate as specified in the relevant plan. All invoices are issued in USD. UK clients are subject to VAT at the prevailing rate. Nigerian clients are subject to applicable local taxes.</p>
              <p className="mb-3">Payments are processed by Stripe. Garium does not store payment card data. Monthly retainers are due on the same calendar date each month. Non-payment may result in suspension of services after 14 days written notice.</p>
              <p>Annual plans are payable in full at the start of the billing period and are non-refundable except as required by applicable law.</p>
            </section>

            <section aria-labelledby="data-privacy">
              <h2 id="data-privacy" className="text-xl font-semibold text-black mb-4">4. Data and privacy</h2>
              <p className="mb-3">All data processed on your Garium platform (&ldquo;Client Data&rdquo;) remains owned by you. Garium acts as a data processor in respect of Client Data and processes it only in accordance with your instructions as set out in the service agreement and our Data Processing Agreement (available on request).</p>
              <p>Garium will not access Client Data except as necessary to deliver the services or as required by law. Client Data is stored on infrastructure allocated to your organisation and is not accessible to other Garium clients.</p>
            </section>

            <section aria-labelledby="cancellation">
              <h2 id="cancellation" className="text-xl font-semibold text-black mb-4">5. Cancellation and termination</h2>
              <p className="mb-3">Either party may cancel services by providing not less than 90 days written notice to the other party. Notice must be sent by email to the contact address specified in the service agreement. During the notice period, all fees continue to be due and payable.</p>
              <p>On the effective date of termination, Garium will make Client Data available for export for 14 days. After that period, all Client Data will be permanently deleted from Garium infrastructure within 30 days. Garium will confirm deletion in writing on request.</p>
            </section>

            <section aria-labelledby="acceptable-use">
              <h2 id="acceptable-use" className="text-xl font-semibold text-black mb-4">6. Acceptable use</h2>
              <p>You may not use Garium services for any unlawful purpose, to process data in violation of applicable data protection law, to generate content that is illegal under applicable law, or to interfere with or disrupt the infrastructure. Garium reserves the right to suspend services immediately where there is evidence of misuse, with notice given as soon as practicable.</p>
            </section>

            <section aria-labelledby="warranties">
              <h2 id="warranties" className="text-xl font-semibold text-black mb-4">7. Warranties and liability</h2>
              <p className="mb-3">Garium warrants that it will deliver the services with reasonable skill and care in accordance with the service agreement. Garium does not warrant that the services will be error-free or uninterrupted, but will use commercially reasonable efforts to maintain uptime.</p>
              <p>To the fullest extent permitted by applicable law, Garium&apos;s total liability for any claim arising out of or in connection with the services shall not exceed the total fees paid by you in the three months preceding the claim.</p>
            </section>

            <section aria-labelledby="governing-law">
              <h2 id="governing-law" className="text-xl font-semibold text-black mb-4">8. Governing law</h2>
              <p>For clients based in the United Kingdom: these terms are governed by the laws of England and Wales, and any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              <p className="mt-3">For clients based in Nigeria: these terms are governed by the laws of the Federal Republic of Nigeria, and any disputes shall be subject to the exclusive jurisdiction of the courts of Lagos State.</p>
            </section>

            <section aria-labelledby="contact-legal">
              <h2 id="contact-legal" className="text-xl font-semibold text-black mb-4">Contact</h2>
              <address className="not-italic">
                <p><strong className="text-black">Garium / Conqolx Technologies Limited</strong></p>
                <p>Bartle House, 9 Oxford Court, Manchester, M2 3WQ, United Kingdom</p>
                <p>VeniaHub 8, The Providence St, Lekki Phase 1, Lagos 100252, Nigeria</p>
                <p className="mt-2"><a href="mailto:hello@garium.co" className="text-[#072c8f] hover:underline">hello@garium.co</a></p>
              </address>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
