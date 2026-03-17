import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Check, X } from 'lucide-react'

const ROWS = [
  { label: 'Data leaves your environment', garium: false, copilot: true, chatgpt: true },
  { label: 'Custom knowledge base', garium: true, copilot: false, chatgpt: false },
  { label: 'Flat fee regardless of users', garium: true, copilot: false, chatgpt: false },
  { label: 'Fully managed infrastructure', garium: true, copilot: false, chatgpt: false },
  { label: 'Tailored to your organisation', garium: true, copilot: false, chatgpt: false },
]

function Cell({ value, invert = false }: { value: boolean; invert?: boolean }) {
  const show = invert ? !value : value
  return show ? (
    <div className="flex justify-center"><Check className="w-5 h-5 text-green-400" /></div>
  ) : (
    <div className="flex justify-center"><X className="w-5 h-5 text-red-400/70" /></div>
  )
}

export function DifferentiationSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-[#081c52] to-[#040e2e]">
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[680px] mx-auto text-center mb-6">
            <SectionLabel light className="mb-5 block">Why Garium</SectionLabel>
            <h2 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Microsoft Copilot costs $30 per person per month and your data is still Microsoft&apos;s problem to protect.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              A team of 50 people on Copilot costs $18,000 per year. Garium&apos;s Grow plan is $750 per month for the whole team — with full privacy, a custom knowledge base, and no per-seat charges. The more people use it, the better the economics get.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-[700px] mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-[#a1b1df] font-medium w-1/2"></th>
                  <th className="text-center py-3 px-4 text-white font-semibold">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-[#697ede] font-normal uppercase tracking-widest">Garium</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-4 text-[#a1b1df] font-normal">Copilot</th>
                  <th className="text-center py-3 px-4 text-[#a1b1df] font-normal">ChatGPT Team</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-3.5 px-4 text-[#d0d8ef] text-sm">{row.label}</td>
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
