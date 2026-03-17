import { generatePageMetadata } from '@/lib/metadata'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactOptions } from '@/components/contact/ContactOptions'
import { FilloutEmbed } from '@/components/contact/FilloutEmbed'
import { LocationCards } from '@/components/contact/LocationCards'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata = generatePageMetadata({
  title: 'Contact — Book a Consultation',
  description: 'Book a 30-minute consultation with the Garium team. No obligation. We give you a specific recommendation and clear pricing for your organisation.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <section id="consultation-form" className="section-pad bg-white">
        <div className="container-garium">
          <AnimatedSection>
            <div className="max-w-[800px] mx-auto">
              <h2 className="text-2xl font-semibold text-black mb-2 text-center">Book your consultation</h2>
              <p className="text-[#374151] text-center mb-2">
                30 minutes. No obligation. You will leave with a clear answer.
              </p>
              <p className="text-sm text-[#6B7280] text-center mb-8">
                If the form does not load, email us at{' '}
                <a href="mailto:hello@garium.com" className="text-[#072c8f] underline">hello@garium.com</a>
              </p>
              <FilloutEmbed />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <LocationCards />
    </>
  )
}
