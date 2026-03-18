'use client'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const LAYERS = [
  {
    label: 'AI Chat Interface',
    sublabel: 'Accessible at your subdomain',
    description: 'What your team and users see',
    tools: ['Chat with your AI', 'Search your documents', 'Ask anything'],
    bg: '#f0fdf4',
    border: '#bbf7d0',
    labelColor: '#166534',
    toolBg: '#dcfce7',
    toolColor: '#166534',
    delay: 0.1,
  },
  {
    label: 'Centralised AI Workspace',
    sublabel: 'Private staff login only',
    description: 'What your internal team accesses',
    tools: ['AI writing tools', 'Automation suite', 'Developer tools'],
    bg: '#eff6ff',
    border: '#bfdbfe',
    labelColor: '#1e40af',
    toolBg: '#dbeafe',
    toolColor: '#1e40af',
    delay: 0.25,
  },
  {
    label: 'Your Private AI Engine',
    sublabel: 'Managed by Garium',
    description: 'What Garium manages on your behalf',
    tools: ['AI model processing', 'Knowledge storage', 'Security and uptime'],
    bg: '#eef1f9',
    border: '#d0d8ef',
    labelColor: '#081c52',
    toolBg: '#d0d8ef',
    toolColor: '#081c52',
    delay: 0.4,
  },
]

export function ArchitectureDiagram() {
  return (
    <section className="section-pad bg-white">
      <div className="container-garium">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="eyebrow mb-5 block">How the platform is structured</p>
            <h2 className="text-black text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
              Three layers. One coherent platform.
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-[600px] mx-auto space-y-2">
          {LAYERS.map((layer, i) => (
            <div key={layer.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: layer.delay }}
                className="rounded-xl border-2 p-6"
                style={{ backgroundColor: layer.bg, borderColor: layer.border }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: layer.labelColor }}>
                      {layer.sublabel}
                    </p>
                    <h3 className="text-base font-semibold mb-1" style={{ color: layer.labelColor }}>{layer.label}</h3>
                    <p className="text-sm mb-3" style={{ color: layer.labelColor, opacity: 0.7 }}>{layer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.tools.map(tool => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{ backgroundColor: layer.toolBg, color: layer.toolColor }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {i < LAYERS.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 2v10M8 12l-3-3M8 12l3-3" stroke="#9ba9e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}

          <p className="text-xs text-center text-[#6B7280] pt-2">
            All layers run on your dedicated infrastructure. Nothing shared.
          </p>
        </div>
      </div>
    </section>
  )
}
