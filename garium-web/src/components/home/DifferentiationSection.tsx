import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Check, X, Minus } from 'lucide-react'

type CellValue = true | false | 'partial'

interface ComparisonRow {
  feature: string
  garium: { value: CellValue; note: string }
  copilot: { value: CellValue; note: string }
  chatgpt: { value: CellValue; note: string }
  claude: { value: CellValue; note: string }
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Data stays in your environment',
    garium: { value: true, note: 'Guaranteed by architecture' },
    copilot: { value: false, note: 'Microsoft servers' },
    chatgpt: { value: false, note: 'OpenAI servers' },
    claude: { value: false, note: 'Anthropic servers' },
  },
  {
    feature: 'Flat fee regardless of team size',
    garium: { value: true, note: 'One price, unlimited users' },
    copilot: { value: false, note: '$30 per person/month' },
    chatgpt: { value: false, note: '$25 per person/month' },
    claude: { value: false, note: '$25 per person/month' },
  },
  {
    feature: 'Custom knowledge base from your documents',
    garium: { value: true, note: 'Fully configured for you' },
    copilot: { value: 'partial', note: 'Requires SharePoint setup' },
    chatgpt: { value: 'partial', note: 'Basic file upload only' },
    claude: { value: 'partial', note: 'Projects feature only' },
  },
  {
    feature: 'Your data used only for your organisation',
    garium: { value: true, note: 'Your model, your data' },
    copilot: { value: false, note: 'Microsoft trains on usage' },
    chatgpt: { value: false, note: 'OpenAI may use interactions' },
    claude: { value: false, note: 'Anthropic may use interactions' },
  },
  {
    feature: 'Fully managed. No IT team needed.',
    garium: { value: true, note: 'We handle everything' },
    copilot: { value: false, note: 'Requires M365 admin' },
    chatgpt: { value: false, note: 'Self-service only' },
    claude: { value: false, note: 'Self-service only' },
  },
  {
    feature: 'Same cost for 5 users as for 50',
    garium: { value: true, note: 'Scale freely' },
    copilot: { value: false, note: 'Cost grows per person' },
    chatgpt: { value: false, note: 'Cost grows per person' },
    claude: { value: false, note: 'Cost grows per person' },
  },
]

function Cell({ cell }: { cell: { value: CellValue; note: string } }) {
  if (cell.value === true) {
    return (
      <div className="flex flex-col items-center gap-1">
        <Check className="w-5 h-5 text-green-400" aria-label="Yes" />
        <span className="text-white/40 text-xs hidden sm:block text-center leading-tight max-w-[100px]">{cell.note}</span>
      </div>
    )
  }
  if (cell.value === 'partial') {
    return (
      <div className="flex flex-col items-center gap-1">
        <Minus className="w-5 h-5 text-amber-400" aria-label="Partial" />
        <span className="text-white/40 text-xs hidden sm:block text-center leading-tight max-w-[100px]">{cell.note}</span>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <X className="w-5 h-5 text-red-400" aria-label="No" />
      <span className="text-white/40 text-xs hidden sm:block text-center leading-tight max-w-[100px]">{cell.note}</span>
    </div>
  )
}

export function DifferentiationSection() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, #081c52 0%, #040e2e 100%)' }}>
      <div className="container-garium">
        <AnimatedSection>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <p className="eyebrow-light mb-5 block">Why Garium</p>
            <h2 className="font-semibold text-white text-balance mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              Same capability. Half the cost. Zero data risk.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Microsoft Copilot costs $30 per person per month. A team of 50 pays $18,000 per year. Microsoft still has your data. Garium&apos;s Grow plan is $750 per month flat. No per-seat charges. The more people who use it, the better the economics get.
            </p>
          </div>
        </AnimatedSection>

        {/* Annual cost comparison callout */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-[760px] mx-auto">
            <div className="text-center p-4 rounded-xl glass-highlight">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">$9,000</div>
              <div className="text-white/60 text-xs">Garium / year</div>
              <div className="text-green-400 text-xs mt-1">50 users included</div>
            </div>
            <div className="text-center p-4 rounded-xl glass-dark">
              <div className="text-xl sm:text-2xl font-bold text-white/50 mb-1">$18,000</div>
              <div className="text-white/40 text-xs">Copilot / year</div>
              <div className="text-red-400/70 text-xs mt-1">$30 × 50 × 12</div>
            </div>
            <div className="text-center p-4 rounded-xl glass-dark">
              <div className="text-xl sm:text-2xl font-bold text-white/50 mb-1">$15,000</div>
              <div className="text-white/40 text-xs">ChatGPT / year</div>
              <div className="text-red-400/70 text-xs mt-1">$25 × 50 × 12</div>
            </div>
            <div className="text-center p-4 rounded-xl glass-dark">
              <div className="text-xl sm:text-2xl font-bold text-white/50 mb-1">$15,000</div>
              <div className="text-white/40 text-xs">Claude for Business</div>
              <div className="text-red-400/70 text-xs mt-1">$25 × 50 × 12</div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-[900px] mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-white/60 font-medium w-2/5" scope="col"></th>
                  <th className="text-center py-3 px-4 text-white font-semibold" scope="col">Garium</th>
                  <th className="text-center py-3 px-4 text-white/70 font-medium" scope="col">Copilot</th>
                  <th className="text-center py-3 px-4 text-white/70 font-medium" scope="col">ChatGPT</th>
                  <th className="text-center py-3 px-4 text-white/70 font-medium" scope="col">Claude</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                    <td className="py-4 px-4 text-white/90 text-sm">{row.feature}</td>
                    <td className="py-4 px-4"><Cell cell={row.garium} /></td>
                    <td className="py-4 px-4"><Cell cell={row.copilot} /></td>
                    <td className="py-4 px-4"><Cell cell={row.chatgpt} /></td>
                    <td className="py-4 px-4"><Cell cell={row.claude} /></td>
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
