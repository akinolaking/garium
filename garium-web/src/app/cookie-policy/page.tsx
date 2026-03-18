import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Cookie Policy',
  description: 'How Garium uses cookies — only what is essential, nothing more.',
  path: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-garium">
        <div className="max-w-[720px] mx-auto">
          <p className="eyebrow mb-4 block">Legal</p>
          <h1 className="font-semibold text-black mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            Cookie Policy
          </h1>
          <p className="text-[#4B5563] text-sm mb-12">
            Effective date: 17 March 2026. Conqolx Technologies Limited, trading as Garium.
          </p>

          <div className="space-y-10 text-[#374151] text-base leading-relaxed">

            <section aria-labelledby="what-are-cookies">
              <h2 id="what-are-cookies" className="text-xl font-semibold text-black mb-4">What are cookies</h2>
              <p>Cookies are small text files stored on your device by your web browser when you visit a website. They allow websites to recognise your device on return visits and to store certain preferences or states.</p>
            </section>

            <section aria-labelledby="what-we-use">
              <h2 id="what-we-use" className="text-xl font-semibold text-black mb-4">What cookies we use</h2>
              <p className="mb-4">Garium uses only essential cookies. We do not use advertising cookies, third-party tracking cookies, or social media cookies of any kind.</p>

              <div className="rounded-xl border border-[#D1D9E8] overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F5F7FA] border-b border-[#D1D9E8]">
                      <th className="text-left px-4 py-3 font-semibold text-black" scope="col">Cookie name</th>
                      <th className="text-left px-4 py-3 font-semibold text-black" scope="col">Purpose</th>
                      <th className="text-left px-4 py-3 font-semibold text-black" scope="col">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D1D9E8]">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-[#374151]">garium-cookie-consent</td>
                      <td className="px-4 py-3 text-[#374151]">Remembers your cookie consent preference</td>
                      <td className="px-4 py-3 text-[#374151]">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-[#374151]">garium-currency</td>
                      <td className="px-4 py-3 text-[#374151]">Remembers your preferred display currency</td>
                      <td className="px-4 py-3 text-[#374151]">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="no-tracking">
              <h2 id="no-tracking" className="text-xl font-semibold text-black mb-4">What we do not use</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Google Analytics or any Google product</li>
                <li>Facebook Pixel or any Meta product</li>
                <li>LinkedIn Insight Tag</li>
                <li>Any advertising or retargeting cookies</li>
                <li>Any third-party analytics that transfers data outside our infrastructure</li>
              </ul>
              <p className="mt-4">Our website performance is monitored using a self-hosted analytics tool. This does not place cookies on your device and does not transfer data to third parties.</p>
            </section>

            <section aria-labelledby="managing-cookies">
              <h2 id="managing-cookies" className="text-xl font-semibold text-black mb-4">Managing cookies in your browser</h2>
              <p className="mb-3">You can manage or delete cookies at any time through your browser settings. Disabling essential cookies may affect the functionality of the website. Instructions for common browsers:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-black">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong className="text-black">Firefox:</strong> Settings → Privacy and Security → Cookies and Site Data</li>
                <li><strong className="text-black">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong className="text-black">Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </section>

            <section aria-labelledby="contact-cookies">
              <h2 id="contact-cookies" className="text-xl font-semibold text-black mb-4">Questions</h2>
              <p>For any questions about how we use cookies, contact <a href="mailto:privacy@garium.co" className="text-[#072c8f] hover:underline">privacy@garium.co</a>.</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
