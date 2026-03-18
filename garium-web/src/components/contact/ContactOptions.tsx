import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Calendar, Mail, MessageCircle } from 'lucide-react'

const OPTIONS = [
  {
    icon: Calendar,
    title: 'Book a consultation',
    description: 'A 30-minute call to understand your organisation and determine whether Garium is the right fit.',
    cta: 'Schedule a call',
    href: '#consultation-form',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Send an email',
    description: 'Reach us directly with questions, proposals, or partnership enquiries.',
    cta: 'hello@garium.co',
    href: 'mailto:hello@garium.co',
    primary: false,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp (Nigeria)',
    description: 'For clients and prospects in Nigeria and West Africa, reach us on WhatsApp.',
    cta: '+234 000 000 0000',
    href: 'https://wa.me/2340000000000',
    primary: false,
  },
]

export function ContactOptions() {
  return (
    <section className="section-pad bg-[#F5F7FA]">
      <div className="container-garium">
        <div className="grid md:grid-cols-3 gap-6">
          {OPTIONS.map((opt, i) => {
            const Icon = opt.icon
            return (
              <AnimatedSection key={opt.title} delay={i * 0.1}>
                <a
                  href={opt.href}
                  className="flex flex-col gap-4 p-6 rounded-xl border border-[#D1D9E8] bg-white hover:shadow-[0_4px_16px_0_rgba(8,28,82,0.12)] hover:-translate-y-0.5 transition-all duration-350 block"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${opt.primary ? 'bg-gradient-to-br from-[#072c8f] to-[#081c52]' : 'bg-[#eef1f9]'}`}>
                    <Icon className={`w-5 h-5 ${opt.primary ? 'text-white' : 'text-[#072c8f]'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">{opt.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{opt.description}</p>
                    <span className="text-sm font-medium text-[#072c8f]">{opt.cta}</span>
                  </div>
                </a>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
