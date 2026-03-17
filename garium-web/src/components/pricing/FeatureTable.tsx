import { SME_PLANS, ENTERPRISE_PLANS } from '@/lib/plans'
import type { PlanSegment } from '@/types/plans'
import { Check, Minus } from 'lucide-react'

const SME_FEATURES = [
  { label: 'Private AI chat interface', spark: true, grow: true, build: true },
  { label: 'Document intelligence', spark: true, grow: true, build: true },
  { label: 'AI models', spark: '1', grow: '2', build: '3' },
  { label: 'LibreChat interface', spark: false, grow: true, build: true },
  { label: 'API access', spark: true, grow: true, build: true },
  { label: 'VSCode AI extension', spark: false, grow: false, build: true },
  { label: 'OpenClaw agent interface', spark: false, grow: false, build: true },
  { label: 'Guacamole workstation', spark: true, grow: true, build: true },
  { label: 'Monthly usage report', spark: false, grow: true, build: true },
  { label: 'Support', spark: 'Email', grow: 'Slack + email 48h', build: 'Priority 24h' },
]

const ENT_FEATURES = [
  { label: 'Dedicated GPU server', seed: true, scale: true, sovereign: true },
  { label: 'GPU tier', seed: 'L40S', scale: 'H100', sovereign: 'H200' },
  { label: 'VRAM', seed: '48GB', scale: '94GB', sovereign: '141GB' },
  { label: 'Document intelligence', seed: true, scale: true, sovereign: true },
  { label: 'API access', seed: true, scale: true, sovereign: true },
  { label: 'OpenClaw + ZeroClaw agents', seed: false, scale: true, sovereign: true },
  { label: 'VSCode AI extension', seed: false, scale: true, sovereign: true },
  { label: 'Grafana dashboard', seed: false, scale: true, sovereign: true },
  { label: 'Fine-tuning on org data', seed: false, scale: false, sovereign: true },
  { label: 'Dedicated account manager', seed: false, scale: false, sovereign: true },
  { label: 'Custom SLA', seed: false, scale: false, sovereign: true },
  { label: 'Monitoring', seed: '24h', scale: '24h', sovereign: '24h' },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-[#072c8f] mx-auto" />
  if (value === false) return <Minus className="w-4 h-4 text-[#D1D9E8] mx-auto" />
  return <span className="text-sm text-[#374151] text-center block">{value}</span>
}

interface FeatureTableProps {
  segment: PlanSegment
}

export function FeatureTable({ segment }: FeatureTableProps) {
  if (segment === 'sme') {
    const plans = SME_PLANS
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#D1D9E8]">
              <th className="text-left py-3 px-4 font-medium text-[#6B7280] w-1/2">Feature</th>
              {plans.map(p => (
                <th key={p.id} className="text-center py-3 px-4 font-semibold text-[#081c52]">{p.tier}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SME_FEATURES.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}>
                <td className="py-3 px-4 text-[#374151]">{row.label}</td>
                <td className="py-3 px-4"><Cell value={row.spark} /></td>
                <td className="py-3 px-4"><Cell value={row.grow} /></td>
                <td className="py-3 px-4"><Cell value={row.build} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const plans = ENTERPRISE_PLANS
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#D1D9E8]">
            <th className="text-left py-3 px-4 font-medium text-[#6B7280] w-1/2">Feature</th>
            {plans.map(p => (
              <th key={p.id} className="text-center py-3 px-4 font-semibold text-[#081c52]">{p.tier}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ENT_FEATURES.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}>
              <td className="py-3 px-4 text-[#374151]">{row.label}</td>
              <td className="py-3 px-4"><Cell value={row.seed} /></td>
              <td className="py-3 px-4"><Cell value={row.scale} /></td>
              <td className="py-3 px-4"><Cell value={row.sovereign} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
