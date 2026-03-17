import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactOptions } from '@/components/contact/ContactOptions'
import { FilloutEmbed } from '@/components/contact/FilloutEmbed'
import { LocationCards } from '@/components/contact/LocationCards'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 30-minute consultation with the Garium team. We will give you a specific, honest answer about whether private AI is right for your organisation.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <section id="consultation-form" className="section-pad bg-white">
        <div className="container-garium">
          <AnimatedSection>
            <div className="max-w-[800px] mx-auto">
              <h2 className="text-2xl font-semibold text-black mb-3 text-center">Book your consultation</h2>
              <p className="text-[#6B7280] text-center mb-8">
                30 minutes. No obligation. You will leave with a clear answer.
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
