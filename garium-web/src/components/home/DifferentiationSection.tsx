import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Check, X } from 'lucide-react'

const ROWS = [
  { label: 'Data leaves your environment', garium: false, copilot: true, chatgpt: true },
  { label: 'Custom knowledge base', garium: true, copilot: false, chatgpt: false },
  { label: 'Flat fee regardless of users', garium: true, copilot: false, chatgpt: false },
  { label: 'Fully managed infrastructure', garium: true, copilot: false, chatgpt: false },
  { label: 'Tailored to your organisation', garium: true, copilot: false, chatgpt: false },
]

function Cell({ value, invert = false }: { value: boolean; invert?: boolean }) {
  const positive = invert ? !value : value
  return positive ? (
    <div className="flex justify-center"><Check className="w-5 h-5 text-green-400" aria-label="Yes" /></div>
  ) : (
    <div className="flex justify-center"><X className="w-5 h-5 text-red-400" aria-label="No" /></div>
  )
}

export function DifferentiationSection() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #081c52 0%, #040e2e 100%)' }}>
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[680px] mx-auto text-center mb-10">
            <p className="eyebrow-light mb-5 block">Why Garium</p>
            <h2 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Microsoft Copilot costs $30 per person per month and your data is still Microsoft&apos;s problem to protect.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              A team of 50 people on Copilot costs $18,000 per year. Garium&apos;s Grow plan is $750 per month for the whole team — with full privacy, a custom knowledge base, and no per-seat charges. The more people use it, the better the economics get.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-[700px] mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-white/70 font-medium w-1/2"></th>
                  <th className="text-center py-3 px-4 text-white font-semibold">Garium</th>
                  <th className="text-center py-3 px-4 text-white/80 font-medium">Copilot</th>
                  <th className="text-center py-3 px-4 text-white/80 font-medium">ChatGPT Team</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-3.5 px-4 text-white/90 text-sm">{row.label}</td>
                    <td className="py-3.5 px-4"><Cell value={row.garium} invert={row.label.includes('leaves')} /></td>
                    <td className="py-3.5 px-4"><Cell value={row.copilot} invert={!row.label.includes('leaves')} /></td>
                    <td className="py-3.5 px-4"><Cell value={row.chatgpt} invert={!row.label.includes('leaves')} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
