import type { PlanSegment } from '@/types/plans'
import { Check, Minus } from 'lucide-react'

const FEATURE_ROWS: { feature: string; spark: boolean | string; grow: boolean | string; build: boolean | string; seed: boolean | string; scale: boolean | string; sovereign: boolean | string }[] = [
  { feature: 'Staff workstation (Guacamole)', spark: true, grow: true, build: true, seed: true, scale: true, sovereign: true },
  { feature: 'Open WebUI interface', spark: true, grow: true, build: true, seed: true, scale: true, sovereign: true },
  { feature: 'LibreChat interface', spark: false, grow: true, build: true, seed: true, scale: true, sovereign: true },
  { feature: 'Document intelligence (RAG)', spark: true, grow: true, build: true, seed: true, scale: true, sovereign: true },
  { feature: 'API access', spark: true, grow: true, build: true, seed: true, scale: true, sovereign: true },
  { feature: 'Number of AI models', spark: '1', grow: '2', build: '3', seed: '3', scale: '5+', sovereign: '5+' },
  { feature: 'OpenClaw agent interface', spark: false, grow: false, build: true, seed: false, scale: true, sovereign: true },
  { feature: 'VSCode AI extension', spark: false, grow: false, build: true, seed: false, scale: true, sovereign: true },
  { feature: 'Dedicated GPU server', spark: false, grow: false, build: false, seed: true, scale: true, sovereign: true },
  { feature: 'Custom model fine-tuning', spark: false, grow: false, build: false, seed: false, scale: false, sovereign: true },
  { feature: 'Grafana client dashboard', spark: false, grow: false, build: false, seed: true, scale: true, sovereign: true },
  { feature: 'Dedicated account manager', spark: false, grow: false, build: false, seed: false, scale: false, sovereign: true },
  { feature: 'Quarterly strategy review', spark: false, grow: false, build: false, seed: false, scale: true, sovereign: true },
  { feature: 'Monthly performance report', spark: false, grow: true, build: true, seed: true, scale: true, sovereign: true },
  { feature: 'Support response time', spark: 'Email', grow: '48hr', build: '24hr', seed: '24hr', scale: 'Priority', sovereign: 'SLA' },
  { feature: 'Max users', spark: '5', grow: '15', build: '30', seed: '25', scale: '100', sovereign: 'Unlimited' },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <div className="flex justify-center"><Check className="w-4 h-4 text-[#072c8f]" aria-label="Included" /></div>
  if (value === false) return <div className="flex justify-center"><Minus className="w-4 h-4 text-[#D1D9E8]" aria-label="Not included" /></div>
  return <span className="block text-center text-sm font-medium text-[#374151]">{value}</span>
}

interface FeatureTableProps {
  segment: PlanSegment
}

export function FeatureTable({ segment }: FeatureTableProps) {
  const isSme = segment === 'sme'
  const headers = isSme
    ? ['Spark', 'Grow', 'Build']
    : ['Seed', 'Scale', 'Sovereign']

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-10">
          <tr style={{ backgroundColor: '#081c52' }}>
            <th className="text-left py-3 px-4 font-medium text-white/80 w-1/2">Feature</th>
            {headers.map(h => (
              <th key={h} className="text-center py-3 px-4 font-semibold text-white">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURE_ROWS.map((row, i) => {
            const cells = isSme
              ? [row.spark, row.grow, row.build]
              : [row.seed, row.scale, row.sovereign]
            return (
              <tr key={i} className={i % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}>
                <td className="py-3 px-4 text-[#374151]">{row.feature}</td>
                {cells.map((v, j) => (
                  <td key={j} className="py-3 px-4"><Cell value={v} /></td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
