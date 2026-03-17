'use client'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

const LAYERS = [
  {
    label: 'Accessible via your subdomain',
    title: 'Public interface',
    tools: ['LibreChat', 'Open WebUI'],
    color: '#166534',
    bg: 'bg-green-50',
    border: 'border-green-200',
    textColor: 'text-green-800',
    delay: 0.1,
  },
  {
    label: 'Private staff access only',
    title: 'Staff workstation',
    tools: ['Guacamole', 'OpenClaw'],
    color: '#1e40af',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-800',
    delay: 0.25,
  },
  {
    label: 'Managed by Garium',
    title: 'Infrastructure',
    tools: ['Ollama', 'NVIDIA GPU', 'Docker'],
    color: '#1e2f5e',
    bg: 'bg-[#eef1f9]',
    border: 'border-[#d0d8ef]',
    textColor: 'text-[#081c52]',
    delay: 0.4,
  },
]

export function ArchitectureDiagram() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <SectionLabel className="mb-5 block">How the platform is structured</SectionLabel>
            <h2 className="font-semibold text-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Three layers. One coherent platform.
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-[640px] mx-auto space-y-2">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: layer.delay }}
              className={`rounded-xl border-2 ${layer.border} ${layer.bg} p-6 group cursor-default`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: layer.color }}>
                    {layer.label}
                  </p>
                  <h3 className={`text-lg font-semibold ${layer.textColor} mb-3`}>{layer.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {layer.tools.map(tool => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-white border"
                        style={{ borderColor: layer.color + '40', color: layer.color }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center pt-2">
            <div className="text-xs text-[#6B7280] flex items-center gap-2">
              <span className="w-4 h-px bg-[#D1D9E8] inline-block" />
              All layers run on your dedicated infrastructure
              <span className="w-4 h-px bg-[#D1D9E8] inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
