# GARIUM WEBSITE — COMPLETE CLAUDE CODE BUILD PROMPT
# Copy everything below this line and paste as your first message in Claude Code

---

You are building the complete marketing website for **Garium**, a private AI infrastructure company owned by **Conqolx Technologies Company**. This is a production-grade Next.js 15 website. Build the entire project from scratch, file by file, following every instruction in this prompt precisely.

Do not summarise or skip sections. Do not ask clarifying questions — all decisions are made here. Build everything.

---

## 1. PROJECT SETUP

### Commands to run first:

```bash
npx create-next-app@latest garium-web \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-turbopack

cd garium-web

npm install framer-motion
npm install @radix-ui/react-accordion
npm install @radix-ui/react-tabs
npm install @radix-ui/react-dialog
npm install clsx tailwind-merge
npm install next-intl
npm install @vercel/analytics
npm install lucide-react
npm install next/font
```

### Project structure to create:

```
garium-web/
├── public/
│   ├── garium-logo.svg          (SVG provided below)
│   ├── garium-icon.svg          (SVG provided below)
│   ├── favicon.ico
│   └── og-image.png             (1200×630 — generate placeholder)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── page.tsx             (home — /)
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts
│   │       └── consultation/
│   │           └── route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── UseCasePreview.tsx
│   │   │   ├── DifferentiationSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   └── HomeCTA.tsx
│   │   ├── services/
│   │   │   ├── ServicesHero.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ArchitectureDiagram.tsx
│   │   │   └── UseCaseStories.tsx
│   │   ├── pricing/
│   │   │   ├── PricingHero.tsx
│   │   │   ├── PlanToggle.tsx
│   │   │   ├── PlanCard.tsx
│   │   │   ├── FeatureTable.tsx
│   │   │   ├── BookingButton.tsx
│   │   │   ├── AnnualToggle.tsx
│   │   │   └── PricingFAQ.tsx
│   │   ├── about/
│   │   │   ├── AboutHero.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── VisionMission.tsx
│   │   │   ├── BeliefsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── TechPartners.tsx
│   │   ├── contact/
│   │   │   ├── ContactHero.tsx
│   │   │   ├── ContactOptions.tsx
│   │   │   ├── FilloutEmbed.tsx
│   │   │   └── LocationCards.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── GariumLogo.tsx
│   │       ├── CrystalIcon.tsx
│   │       ├── AnimatedSection.tsx
│   │       ├── Accordion.tsx
│   │       ├── CurrencySwitcher.tsx
│   │       └── Chip.tsx
│   ├── lib/
│   │   ├── plans.ts
│   │   ├── services.ts
│   │   ├── faqs.ts
│   │   ├── team.ts
│   │   ├── fillout.ts
│   │   ├── currency.ts
│   │   ├── metadata.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── usePlanToggle.ts
│   │   ├── useCurrency.ts
│   │   ├── useScrolled.ts
│   │   └── useMobileMenu.ts
│   └── types/
│       ├── plans.ts
│       ├── currency.ts
│       └── forms.ts
├── tailwind.config.ts           (exact content provided in Section 3)
├── next.config.ts
├── tsconfig.json
└── .env.local                   (template provided below)
```

---

## 2. ENVIRONMENT VARIABLES

Create `.env.local` with:

```env
# Fillout
NEXT_PUBLIC_FILLOUT_FORM_ID=your_fillout_form_id
NEXT_PUBLIC_FILLOUT_BASE_URL=https://forms.fillout.com/t

# Site
NEXT_PUBLIC_SITE_URL=https://garium.com
NEXT_PUBLIC_SITE_NAME=Garium

# Currency API (Frankfurter — free, no key needed)
NEXT_PUBLIC_CURRENCY_API=https://api.frankfurter.app

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Contact form (optional — for server-side handling)
CONTACT_EMAIL=hello@garium.com
```

---

## 3. TAILWIND CONFIG

Replace the generated `tailwind.config.ts` with this exact content:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        garium: {
          black:       '#000000',
          navy:        '#081c52',
          blue:        '#072c8f',
          white:       '#F5F7FA',
          'navy-50':   '#eef1f9',
          'navy-100':  '#d0d8ef',
          'navy-200':  '#a1b1df',
          'navy-300':  '#728acf',
          'navy-400':  '#4363bf',
          'navy-500':  '#1f3fa8',
          'navy-600':  '#081c52',
          'navy-700':  '#061540',
          'navy-800':  '#040e2e',
          'navy-900':  '#02081c',
          'blue-50':   '#edf0fb',
          'blue-100':  '#cdd4f4',
          'blue-200':  '#9ba9e9',
          'blue-300':  '#697ede',
          'blue-400':  '#3753d3',
          'blue-500':  '#072c8f',
          'blue-600':  '#062472',
          'blue-700':  '#041b55',
          'blue-800':  '#031238',
          'blue-900':  '#01091c',
        },
        brand: {
          primary:       '#081c52',
          accent:        '#072c8f',
          surface:       '#F5F7FA',
          'surface-alt': '#EDF0F7',
          text:          '#000000',
          'text-light':  '#F5F7FA',
          muted:         '#6B7280',
          border:        '#D1D9E8',
          'border-dark': '#1e2f5e',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6vw, 5rem)',      { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)',    { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)',      { lineHeight: '1.15', letterSpacing: '-0.02em',  fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-xl':    ['1.25rem',   { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg':    ['1.125rem',  { lineHeight: '1.7', fontWeight: '400' }],
        'body-md':    ['1rem',      { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm':    ['0.875rem',  { lineHeight: '1.6', fontWeight: '400' }],
        'body-xs':    ['0.75rem',   { lineHeight: '1.5', fontWeight: '400' }],
        'label-lg':   ['0.875rem',  { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
        'label-md':   ['0.75rem',   { lineHeight: '1.4', letterSpacing: '0.1em',  fontWeight: '500' }],
        'label-sm':   ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '500' }],
      },
      fontWeight: {
        normal:   '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },
      spacing: {
        'section-sm':           '4rem',
        'section-md':           '6rem',
        'section-lg':           '8rem',
        'section-xl':           '10rem',
        'card-sm':              '1.25rem',
        'card-md':              '1.75rem',
        'card-lg':              '2.5rem',
        'container-padding':    '1.5rem',
        'container-padding-lg': '2rem',
      },
      maxWidth: {
        'container':    '1200px',
        'container-sm': '800px',
        'container-xs': '640px',
        'prose':        '68ch',
      },
      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl':'24px',
        pill: '9999px',
      },
      boxShadow: {
        card:         '0 1px 3px 0 rgba(8,28,82,0.08), 0 1px 2px 0 rgba(8,28,82,0.04)',
        'card-hover': '0 4px 16px 0 rgba(8,28,82,0.12), 0 2px 6px 0 rgba(8,28,82,0.06)',
        modal:        '0 20px 60px 0 rgba(8,28,82,0.2)',
        input:        'inset 0 1px 3px 0 rgba(8,28,82,0.08)',
        'input-focus':'0 0 0 3px rgba(7,44,143,0.15)',
      },
      transitionDuration: {
        fast:   '120ms',
        base:   '200ms',
        slow:   '350ms',
        slower: '500ms',
      },
      transitionTimingFunction: {
        brand:  'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'crystal-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%':      { transform: 'translateY(-6px) rotate(1deg)' },
          '75%':      { transform: 'translateY(4px) rotate(-1deg)' },
        },
        'crystal-pulse': {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%':      { opacity: '0.6', transform: 'scale(0.92)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'crystal-float': 'crystal-float 6s ease-in-out infinite',
        'crystal-pulse': 'crystal-pulse 3s ease-in-out infinite',
        'fade-up':       'fade-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-up-slow':  'fade-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in':       'fade-in 0.4s ease both',
        shimmer:         'shimmer 2s linear infinite',
      },
      backgroundImage: {
        'hero-dark':         'linear-gradient(135deg, #000000 0%, #081c52 50%, #072c8f 100%)',
        'hero-darker':       'linear-gradient(160deg, #000000 0%, #04102e 60%, #081c52 100%)',
        'section-blue':      'linear-gradient(180deg, #F5F7FA 0%, #EDF0F7 100%)',
        'section-dark':      'linear-gradient(180deg, #081c52 0%, #040e2e 100%)',
        'card-blue':         'linear-gradient(135deg, #eef1f9 0%, #d0d8ef 100%)',
        'crystal-subtle':    'radial-gradient(circle at 20% 50%, rgba(7,44,143,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(8,28,82,0.05) 0%, transparent 50%)',
        'btn-primary':       'linear-gradient(135deg, #072c8f 0%, #081c52 100%)',
        'btn-primary-hover': 'linear-gradient(135deg, #0a3ab8 0%, #0c276a 100%)',
      },
      zIndex: {
        behind:   '-1',
        base:     '0',
        raised:   '10',
        dropdown: '100',
        sticky:   '200',
        overlay:  '300',
        modal:    '400',
        toast:    '500',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 4. GLOBAL CSS

Create `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@layer base {
  :root {
    --font-inter: 'Inter', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-inter);
    background-color: #F5F7FA;
    color: #000000;
  }

  /* Selection colour — brand blue */
  ::selection {
    background-color: #072c8f;
    color: #F5F7FA;
  }

  /* Focus visible — brand ring */
  :focus-visible {
    outline: 2px solid #072c8f;
    outline-offset: 2px;
  }

  /* Smooth scrolling anchors */
  [id] {
    scroll-margin-top: 5rem;
  }
}

@layer components {
  /* Container utility */
  .container-garium {
    @apply mx-auto w-full max-w-container px-container-padding lg:px-container-padding-lg;
  }

  /* Section padding */
  .section-pad {
    @apply py-section-md;
  }

  .section-pad-lg {
    @apply py-section-lg;
  }

  /* Eyebrow label — small uppercase text above headlines */
  .eyebrow {
    @apply text-label-md uppercase tracking-widest text-brand-accent font-medium;
  }

  /* Crystal background texture overlay */
  .bg-crystal {
    background-image:
      radial-gradient(circle at 15% 50%, rgba(7,44,143,0.06) 0%, transparent 55%),
      radial-gradient(circle at 85% 20%, rgba(8,28,82,0.04) 0%, transparent 45%),
      radial-gradient(circle at 50% 80%, rgba(7,44,143,0.03) 0%, transparent 40%);
  }

  /* Dark section text overrides */
  .dark-section {
    @apply bg-hero-dark text-brand-text-light;
  }

  .dark-section .eyebrow {
    @apply text-garium-blue-300;
  }
}

@layer utilities {
  /* Text balance for headlines */
  .text-balance {
    text-wrap: balance;
  }

  /* Hide scrollbar but allow scroll */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## 5. ROOT LAYOUT

Create `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Garium — Private AI Infrastructure for Your Organisation',
    template: '%s | Garium',
  },
  description: 'Garium deploys and manages a fully private AI platform on dedicated infrastructure. Your data never leaves your environment. Flat monthly fee. Unlimited users.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://garium.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://garium.com',
    siteName: 'Garium',
    title: 'Garium — Private AI Infrastructure for Your Organisation',
    description: 'Your AI. Your data. No exceptions.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Garium — Private AI Infrastructure' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gariumai',
    creator: '@gariumai',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-brand-surface text-brand-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 6. DATA FILES — lib/

### `src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: 'USD' | 'GBP' | 'NGN'): string {
  const symbols = { USD: '$', GBP: '£', NGN: '₦' }
  const symbol = symbols[currency]
  if (currency === 'NGN') {
    return `${symbol}${(amount * 1600).toLocaleString('en-NG', { maximumFractionDigits: 0 })}`
  }
  if (currency === 'GBP') {
    return `${symbol}${Math.round(amount * 0.79).toLocaleString('en-GB')}`
  }
  return `${symbol}${amount.toLocaleString('en-US')}`
}
```

### `src/lib/fillout.ts`
```typescript
const BASE_URL = process.env.NEXT_PUBLIC_FILLOUT_BASE_URL || 'https://forms.fillout.com/t'
const FORM_ID = process.env.NEXT_PUBLIC_FILLOUT_FORM_ID || ''

export function buildFilloutUrl(params: {
  planId?: string
  planName?: string
  tier?: 'sme' | 'enterprise'
  billing?: 'monthly' | 'annual'
}): string {
  const url = new URL(`${BASE_URL}/${FORM_ID}`)
  if (params.planId) url.searchParams.set('plan', params.planId)
  if (params.planName) url.searchParams.set('planName', params.planName)
  if (params.tier) url.searchParams.set('tier', params.tier)
  if (params.billing) url.searchParams.set('billing', params.billing)
  return url.toString()
}
```

### `src/types/plans.ts`
```typescript
export type PlanSegment = 'sme' | 'enterprise'
export type BillingCycle = 'monthly' | 'annual'

export interface Plan {
  id: string
  tier: string
  label: string
  segment: PlanSegment
  description: string
  setupUSD: number
  monthlyUSD: number
  annualUSD: number        // monthly * 12 * 0.85
  gpu: string
  vram: string
  gpuColor: string
  userLimit: string
  features: string[]
  interfaces: string[]
  featured: boolean
  isSME: boolean
  targetSectors: string[]
}
```

### `src/lib/plans.ts`
```typescript
import type { Plan } from '@/types/plans'

export const SME_PLANS: Plan[] = [
  {
    id: 'spark', tier: 'Spark', label: 'SME 01', segment: 'sme',
    description: 'Private AI essentials for solo founders and small teams. Up and running in days, not weeks.',
    setupUSD: 630, monthlyUSD: 375, annualUSD: 3825,
    gpu: 'Shared L40S', vram: 'Shared node', gpuColor: '#3b6d11',
    userLimit: 'Up to 5 users',
    features: [
      'Private AI chat interface (Open WebUI)',
      'Document intelligence — query your own files',
      'One AI model (Qwen3-30B)',
      'Staff workstation access via Guacamole',
      'Email support',
      'Managed hosting and updates',
    ],
    interfaces: ['Open WebUI', 'Guacamole', 'API'],
    featured: false, isSME: true,
    targetSectors: ['Startups', 'Micro-businesses', 'Freelancers'],
  },
  {
    id: 'grow', tier: 'Grow', label: 'SME 02', segment: 'sme',
    description: 'For growing teams that need AI across multiple roles without per-seat pricing.',
    setupUSD: 1260, monthlyUSD: 750, annualUSD: 7650,
    gpu: 'Shared L40S', vram: 'Shared node', gpuColor: '#3b6d11',
    userLimit: 'Up to 15 users',
    features: [
      'Everything in Spark',
      'Two AI models for different task types',
      'LibreChat interface option',
      'API access for your own apps and tools',
      'Staff workstation access via Guacamole',
      'Slack and email support with 48-hour response',
      'Monthly usage report',
    ],
    interfaces: ['Open WebUI', 'LibreChat', 'Guacamole', 'API'],
    featured: true, isSME: true,
    targetSectors: ['SMEs', 'Growing teams', 'Agencies'],
  },
  {
    id: 'build', tier: 'Build', label: 'SME 03', segment: 'sme',
    description: 'For technical teams and agencies who want AI embedded in their products and workflows.',
    setupUSD: 1890, monthlyUSD: 1125, annualUSD: 11475,
    gpu: 'Shared L40S', vram: 'Shared node', gpuColor: '#3b6d11',
    userLimit: 'Up to 30 users',
    features: [
      'Everything in Grow',
      'Three AI models including a coding-optimised model',
      'VSCode AI extension for developer teams',
      'OpenClaw agent interface for automation',
      'Webhook and API integrations',
      'Priority support with 24-hour response',
    ],
    interfaces: ['Open WebUI', 'LibreChat', 'OpenClaw', 'Guacamole', 'VSCode', 'API'],
    featured: false, isSME: true,
    targetSectors: ['Tech teams', 'Digital agencies', 'PR firms'],
  },
]

export const ENTERPRISE_PLANS: Plan[] = [
  {
    id: 'seed', tier: 'Seed', label: 'Tier 01', segment: 'enterprise',
    description: 'A complete private AI environment for smaller organisations, schools, and institutions.',
    setupUSD: 3150, monthlyUSD: 1500, annualUSD: 15300,
    gpu: 'NVIDIA L40S', vram: '48GB VRAM', gpuColor: '#185fa5',
    userLimit: 'Up to 25 users',
    features: [
      'Dedicated NVIDIA L40S GPU server',
      'Three AI models deployed and configured',
      'Document intelligence and knowledge base',
      'API access for app integrations',
      'Staff workstation access via Guacamole',
      'Monthly performance and usage report',
      'Managed updates and 24-hour monitoring',
    ],
    interfaces: ['Open WebUI', 'LibreChat', 'Guacamole', 'API'],
    featured: false, isSME: false,
    targetSectors: ['Schools', 'NGOs', 'Small enterprises'],
  },
  {
    id: 'scale', tier: 'Scale', label: 'Tier 02', segment: 'enterprise',
    description: 'Full-organisation AI platform for enterprises deploying AI across departments.',
    setupUSD: 6300, monthlyUSD: 3150, annualUSD: 32130,
    gpu: 'NVIDIA H100', vram: '94GB VRAM', gpuColor: '#0f6e56',
    userLimit: 'Up to 100 users',
    features: [
      'Dedicated NVIDIA H100 GPU server',
      'Multiple concurrent model deployments',
      'VSCode AI extension for developer teams',
      'OpenClaw and ZeroClaw agent interfaces',
      'Department-separated knowledge bases',
      'Priority support and quarterly strategy review',
      'Grafana client dashboard included',
    ],
    interfaces: ['Open WebUI', 'LibreChat', 'OpenClaw', 'ZeroClaw', 'Guacamole', 'VSCode', 'API'],
    featured: true, isSME: false,
    targetSectors: ['Enterprises', 'Hospitals', 'Financial services'],
  },
  {
    id: 'sovereign', tier: 'Sovereign', label: 'Tier 03', segment: 'enterprise',
    description: 'Maximum capacity for large organisations requiring compliance, scale, and white-glove management.',
    setupUSD: 12600, monthlyUSD: 5670, annualUSD: 57834,
    gpu: 'NVIDIA H200', vram: '141GB VRAM', gpuColor: '#854f0b',
    userLimit: 'Unlimited users',
    features: [
      'Dedicated NVIDIA H200 GPU server',
      'Capacity for 70B parameter models',
      'Multi-department agent deployments',
      'Custom model fine-tuning on organisation data',
      'Dedicated CPU cluster for web and app workloads',
      'Dedicated Garium account manager',
      'Custom SLA agreement',
    ],
    interfaces: ['Open WebUI', 'LibreChat', 'OpenClaw', 'ZeroClaw', 'Guacamole', 'VSCode', 'API', 'Custom'],
    featured: false, isSME: false,
    targetSectors: ['Large enterprises', 'Government', 'Healthcare systems'],
  },
]

export const ALL_PLANS = [...SME_PLANS, ...ENTERPRISE_PLANS]
```

### `src/lib/faqs.ts`
```typescript
export const PRICING_FAQS = [
  {
    question: 'Why is there a setup fee?',
    answer: 'Setting up your private AI platform is real work. We configure dedicated infrastructure, install and tune your AI models, connect your knowledge base, set up access controls, test everything, and onboard your team. The setup fee covers that work. After that, your monthly fee covers ongoing management.',
  },
  {
    question: 'What happens to my data?',
    answer: 'It stays on your infrastructure. We deploy on dedicated servers allocated to your organisation. Your conversations, documents, and queries are never sent to a shared server or used to train any model. This is the fundamental difference between Garium and every consumer AI tool.',
  },
  {
    question: 'Can I start on an SME plan and move to an enterprise plan?',
    answer: 'Yes. We handle the migration. Your data, knowledge base, and configurations move with you. Upgrades are billed at the new plan rate from the date of migration.',
  },
  {
    question: 'What AI models do you use?',
    answer: 'We deploy proven open-source models including Qwen3-30B and DeepSeek-R1. These are state-of-the-art models used by organisations worldwide. We select and configure the right combination for your use cases during the setup process.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'We offer a 30-minute consultation instead. In that conversation we give you a specific, honest answer about whether Garium is right for your organisation, what plan fits your needs, and what results you can expect. We find that conversation more useful than a trial that gives a generic experience.',
  },
  {
    question: 'What countries do you work with?',
    answer: 'We work with organisations across the United Kingdom, Nigeria, and West Africa. Our infrastructure is hosted in European data centres. If you have specific data residency requirements, tell us during your consultation.',
  },
  {
    question: 'What is the minimum contract length?',
    answer: 'Monthly rolling after the setup fee. No long-term lock-in required. A 90-day notice period applies to cancellation, giving both sides time to manage the transition. We keep clients by doing good work.',
  },
  {
    question: 'How does annual billing work?',
    answer: 'Annual billing gives you a 15% discount on the monthly retainer cost, paid upfront for 12 months. The setup fee is the same regardless of billing cycle. Annual clients also receive a priority onboarding slot.',
  },
]
```

### `src/lib/currency.ts`
```typescript
export type Currency = 'USD' | 'GBP' | 'NGN'

export const CURRENCIES: { code: Currency; symbol: string; label: string; flag: string }[] = [
  { code: 'USD', symbol: '$',  label: 'US Dollar',      flag: 'US' },
  { code: 'GBP', symbol: '£',  label: 'British Pound',  flag: 'GB' },
  { code: 'NGN', symbol: '₦',  label: 'Nigerian Naira', flag: 'NG' },
]

// Static fallback rates (update quarterly — fetch live via Frankfurter API)
export const FALLBACK_RATES: Record<Currency, number> = {
  USD: 1,
  GBP: 0.79,
  NGN: 1600,
}

export function convertPrice(amountUSD: number, currency: Currency, rates: Record<Currency, number> = FALLBACK_RATES): number {
  return Math.round(amountUSD * rates[currency])
}

export function formatPrice(amount: number, currency: Currency): string {
  const symbols: Record<Currency, string> = { USD: '$', GBP: '£', NGN: '₦' }
  if (currency === 'NGN') {
    return `₦${amount.toLocaleString('en-NG')}`
  }
  return `${symbols[currency]}${amount.toLocaleString('en-US')}`
}
```

---

## 7. HOOKS

### `src/hooks/useCurrency.ts`
```typescript
'use client'
import { useState, useEffect } from 'react'
import type { Currency } from '@/lib/currency'
import { FALLBACK_RATES } from '@/lib/currency'

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [rates, setRates] = useState(FALLBACK_RATES)

  useEffect(() => {
    const saved = localStorage.getItem('garium-currency') as Currency | null
    if (saved && ['USD', 'GBP', 'NGN'].includes(saved)) setCurrency(saved)
  }, [])

  useEffect(() => {
    // Fetch live rates from Frankfurter (free, no API key)
    fetch('https://api.frankfurter.app/latest?from=USD&to=GBP,NGN')
      .then(r => r.json())
      .then(data => {
        if (data?.rates) {
          setRates({ USD: 1, GBP: data.rates.GBP ?? FALLBACK_RATES.GBP, NGN: data.rates.NGN ?? FALLBACK_RATES.NGN })
        }
      })
      .catch(() => {}) // Silently fall back to static rates
  }, [])

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c)
    localStorage.setItem('garium-currency', c)
  }

  return { currency, rates, setCurrency: handleSetCurrency }
}
```

### `src/hooks/usePlanToggle.ts`
```typescript
'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import type { PlanSegment } from '@/types/plans'

export function usePlanToggle() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initial = (searchParams.get('segment') as PlanSegment) || 'sme'
  const [segment, setSegment] = useState<PlanSegment>(initial)

  const handleSet = (s: PlanSegment) => {
    setSegment(s)
    const params = new URLSearchParams(searchParams.toString())
    params.set('segment', s)
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return { segment, setSegment: handleSet }
}
```

### `src/hooks/useScrolled.ts`
```typescript
'use client'
import { useState, useEffect } from 'react'

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}
```

---

## 8. COMPONENT SPECIFICATIONS

### `src/components/ui/CrystalIcon.tsx`
Animated SVG recreation of the Garium crystal cluster logo mark. Individual crystal fragments animate with Framer Motion staggered floating. The icon consists of 9 irregular polygon shapes arranged in a circular cluster pattern, matching the brand logo exactly. Accept props: `size` (default 48), `color` (default 'currentColor'), `animate` (default true). When animate is true, each fragment has a slightly different float animation delay using Framer Motion.

### `src/components/ui/CurrencySwitcher.tsx`
A compact pill-shaped dropdown showing the active currency (e.g. "$ USD"). On click, shows USD, GBP, NGN options. Stores selection in localStorage. Used in the Navbar (desktop: right side of nav) and on the Pricing page (below the hero). Uses the `useCurrency` hook.

### `src/components/layout/Navbar.tsx`
Sticky top navigation. On scroll past 20px: adds a white background with subtle shadow and border-bottom. Logo left: GariumLogo component (SVG mark + wordmark). Nav links centre (desktop): Services, Pricing, About, Contact. Right side: CurrencySwitcher + "Book a consultation" CTA button in brand accent blue. Mobile: hamburger menu icon (lucide-react Menu icon), MobileMenu drawer slides in from right. The navbar should start transparent over the dark hero section and transition to white on scroll.

### `src/components/home/HeroSection.tsx`
Full-viewport dark hero. Background: `bg-hero-dark` with `bg-crystal` texture overlay. Content centred vertically. Layout:
1. Small eyebrow label: "Private AI Infrastructure" in brand blue
2. Headline (text-display-xl, white, font-semibold): "Your AI. / Your data. / No exceptions." — each phrase on its own line, staggered fade-up animation with Framer Motion
3. Sub-headline (text-body-lg, white/70): "Garium deploys and manages a fully private AI platform for your organisation. Your team uses it for anything. Your data never leaves your environment."
4. Two CTA buttons: Primary "See our plans" (bg-btn-primary, white text) and Secondary "Book a consultation" (transparent, white border, white text)
5. Small trust line below buttons: "Trusted by organisations in Nigeria and the United Kingdom."
6. Animated CrystalIcon (large, 80px) positioned decoratively to the right on desktop
7. Scroll indicator arrow at the bottom

### `src/components/home/ProblemSection.tsx`
Light background section (bg-brand-surface). Eyebrow: "The real cost of shared AI". Large centred headline: "Every time your team uses ChatGPT or Copilot, your organisation's most sensitive information leaves the building." Body paragraph explaining the risk (no bullets — flowing prose). Bold centred transition line: "Private AI is not a future investment. It is a present risk decision." Animate in on scroll.

### `src/components/home/SolutionSection.tsx`
White background. Eyebrow: "What we do". Headline: "A complete AI platform, deployed on dedicated infrastructure, running entirely within your control." Three columns below with icons: "Deployed for you", "Managed by us", "Owned by you" with supporting copy per column. Staggered column reveal animation.

### `src/components/home/HowItWorks.tsx`
Alternating dark/light treatment. Three numbered steps (01, 02, 03) with large step numbers in brand navy. Steps: "We understand your organisation", "We deploy your platform", "Your team starts working differently". Each step has a supporting paragraph. Horizontal connector line between step numbers on desktop.

### `src/components/home/UseCasePreview.tsx`
Grid of 5 use case cards (2-2-1 layout on desktop). Each card: sector icon, sector name, one-line description, a "Read the story" link. Cards use subtle hover state (shadow-card-hover, slight y-translate). Sectors: Schools and Universities, Enterprises and Corporates, Healthcare and Finance, PR and Digital Agencies, Government and NGOs.

### `src/components/home/DifferentiationSection.tsx`
Dark section (bg-section-dark). Headline: "Microsoft Copilot costs $25 per person per month and your data is still Microsoft's problem to protect." Body paragraph with the cost comparison. Comparison table with three columns: Garium, Microsoft Copilot, ChatGPT Team. Rows: Data leaves your environment, Custom knowledge base, Flat fee regardless of users, Fully managed, Tailored to your organisation.

### `src/components/pricing/PlanCard.tsx`
Individual pricing card. Props: plan (Plan type), billing ('monthly' | 'annual'), currency (Currency), featured (boolean). Shows: tier label (small, muted), tier name (large, font-semibold), description, setup fee + monthly/annual price (converted to selected currency), GPU badge, feature list with check icons, interface chips, BookingButton. Featured card: 2px border-brand-accent, "Most popular" badge. SME plans: dashed border to visually distinguish. Annual billing: show monthly equivalent price with "billed annually" note and "Save 15%" badge.

### `src/components/pricing/AnnualToggle.tsx`
Toggle switch between "Monthly" and "Annual (save 15%)". Shows animated pill that slides between options. When annual is selected, all PlanCard prices update to show annual pricing.

### `src/components/pricing/BookingButton.tsx`
CTA button that constructs the Fillout URL using `buildFilloutUrl` from lib/fillout.ts. Opens in a new tab. Props: planId, planName, tier, billing, variant ('primary' | 'outline'). Default label: "Book a consultation".

### `src/components/pricing/PricingFAQ.tsx`
Accordion component using Radix UI accordion. Questions from `lib/faqs.ts`. Clean expand/collapse animation. Each question in Inter semibold 16px. Answers in Inter regular 16px with generous line height.

### `src/components/about/BrandStory.tsx`
Editorial layout section. Large pull quote: "Named after garri. Built on the same principle." Full brand story narrative — the 2025 AI market context, why data sovereignty matters for Africa, the garri naming origin, the UK-Nigeria dual market. No columns — flowing prose with generous line height. One large decorative quotation mark in brand navy.

### `src/components/contact/FilloutEmbed.tsx`
Embeds Fillout form via iframe. Accepts formId and prefill object as props. Handles iframe resize events for auto-height. Fallback: redirect link button if iframe fails to load. The formId comes from NEXT_PUBLIC_FILLOUT_FORM_ID environment variable.

### `src/components/services/ArchitectureDiagram.tsx`
Three-layer diagram showing the platform architecture. Built with SVG or Framer Motion animated divs. Three horizontal layers stacked vertically:
- Layer 1 (green accent): Public interface — LibreChat / Open WebUI. Label: "Accessible via your subdomain"
- Layer 2 (blue accent): Staff workstation — Guacamole / OpenClaw. Label: "Private staff access only"
- Layer 3 (navy): Infrastructure — Ollama / GPU / Docker. Label: "Managed by Garium"
Connecting lines between layers with directional arrows. Each layer expands on hover to show the tools it contains. Animate in layer by layer on scroll.

---

## 9. PAGE CONTENT AND STRUCTURE

### Home page (`src/app/page.tsx`)
Render in order:
1. HeroSection
2. ProblemSection
3. SolutionSection
4. HowItWorks
5. UseCasePreview
6. DifferentiationSection
7. TrustSection (tech partners, infrastructure specs, UK+Nigeria presence)
8. HomeCTA (final conversion section: "The organisations that act first will have the clearest advantage." with Book a consultation CTA)

### Services page (`src/app/services/page.tsx`)
Render in order:
1. ServicesHero — eyebrow "What Garium delivers", headline "Not a subscription. A service."
2. ServiceCard grid — six services: Private AI deployment, Knowledge base and document intelligence, Staff workstation access, Public and internal interfaces, Automation and agent workflows, Ongoing management
3. ArchitectureDiagram — the three-layer explainer
4. UseCaseStories — two deep-dive stories (School and PR Agency) in alternating layout, told narratively

**School story content:**
Eyebrow: "Secondary school, 180 students, 22 teachers"
Headline: "The school wanted AI for learning. Not data risk."
Story: The school needed AI for students and teachers. Consumer tools were off the table — child data protection requirements ruled them out immediately. Teachers needed a tool for lesson planning and content generation. Students needed a research assistant. Both groups needed different access levels to the same infrastructure. Garium deployed a clean, browser-based research interface at the school's subdomain. Students access it without accounts or any software installation. It draws from a private knowledge base of curriculum materials, textbooks, and approved resources. Teachers manage content from a private workstation only they can access. Nine days from contract signing to go-live. Plan: Seed.

**PR agency story content:**
Eyebrow: "PR and digital agency, 5 staff, 8 client campaigns"
Headline: "Five people running eight campaigns. One platform they actually control."
Story: The agency had a problem that is common in creative businesses. Every staff member was using AI tools. No two people were using the same one. Client briefs, campaign strategies, and media contacts were being typed into consumer tools with no regard for confidentiality. When a client asked whether their campaign strategy had ever been processed by OpenAI, the agency had no good answer. Garium built them a single private platform. Each client gets their own knowledge base containing their brand guidelines, past campaigns, tone of voice documents, and media lists. Copywriters generate content directly from those materials. Account managers use an automated research agent that monitors media coverage and qualifies leads overnight. A morning briefing arrives in the team's group chat before 8am. Plan: Build.

### Pricing page (`src/app/pricing/page.tsx`)
Structure:
1. PricingHero — headline "One setup. One monthly fee. No per-seat charges."
2. CurrencySwitcher (prominent, below hero — "View prices in: $ USD | £ GBP | ₦ NGN")
3. AnnualToggle — Monthly / Annual (save 15%)
4. PlanToggle — "For growing businesses" / "For larger organisations"
5. Plan card grid (3 cards per segment, responsive)
6. FeatureTable — full comparison across all plans for the active segment
7. "What is included in every plan" section
8. PricingFAQ accordion
9. Final CTA: "Not sure which plan fits? Book a consultation."

### About page (`src/app/about/page.tsx`)
Structure:
1. AboutHero — "Named after garri. Built on the same principle."
2. BrandStory — the full narrative
3. VisionMission — two-column: Vision and Mission statements
4. BeliefsSection — four belief statements
5. TeamSection — Olumide Gabriel (Lagos, Founder) and Anthony Akinola Muyiwa (Manchester, Technical Lead)
6. TechPartners — "Built on open technology. No lock-in." with technology logos/names: Ollama, Open WebUI, LibreChat, ChromaDB, Grafana, Docker, NVIDIA
7. About CTA

### Contact page (`src/app/contact/page.tsx`)
Structure:
1. ContactHero — "A conversation before a commitment."
2. ContactOptions — three options: Book a consultation, Send a message, WhatsApp (Nigeria)
3. FilloutEmbed — embedded form
4. LocationCards — Manchester (technical delivery, UK market) and Lagos (founder office, Africa market)
5. Closing note: "We do not do hard selling."

---

## 10. NAVIGATION AND FOOTER CONTENT

### Navbar links:
- Logo: GariumLogo (SVG mark + wordmark, links to /)
- Services (/services)
- Pricing (/pricing)
- About (/about)
- Contact (/contact)
- CurrencySwitcher (right side, desktop only)
- "Book a consultation" button (links to /contact)

### Footer columns:
Column 1: Garium logo, tagline "Private AI infrastructure for organisations that believe their data belongs to them.", "Lagos, Nigeria + Manchester, United Kingdom"
Column 2: Platform — Services, Pricing, How it works (anchor on home page)
Column 3: Company — About, Contact, Book a consultation
Column 4: Legal — Privacy policy, Terms of service, Cookie policy
Bottom bar: "Garium 2026. Conqolx Technologies Company. All rights reserved."

---

## 11. API ROUTES

### `src/app/api/contact/route.ts`
POST handler for the contact form. Receives JSON body with: name, organisation, country, teamSize, planInterest, message. Validates required fields. Sends notification email to CONTACT_EMAIL via a simple nodemailer or fetch to an email API. Returns 200 on success, 400 on validation error.

### `src/app/api/consultation/route.ts`
POST webhook handler for Fillout notifications. When a consultation form is submitted, Fillout sends a webhook to this endpoint. Log the submission and optionally send a Telegram notification to the Garium team channel.

---

## 12. DESIGN AND QUALITY STANDARDS

**Typography rules:**
- All headlines: Inter SemiBold (600), appropriate display size class
- All body: Inter Regular (400), text-body-md or text-body-lg
- Eyebrow labels: Inter Medium (500), text-label-md, uppercase, wide tracking, brand accent colour
- No bold mid-sentence. No italic for emphasis. Let word choice do the work.

**Colour rules:**
- Dark sections: bg-hero-dark or bg-section-dark. White text only.
- Light sections: bg-brand-surface or white. Black text only.
- CTAs: bg-btn-primary (gradient) for primary. brand-accent border for secondary outline.
- Never use purple. Never use gradients that include pink or violet.
- The crystal pattern texture (bg-crystal class) can be layered on dark sections for depth.

**Animation rules:**
- Every section scrolls in with AnimatedSection (fade-up, once only)
- Stagger delays for grid items: 0ms, 100ms, 200ms, 300ms
- CrystalIcon in hero: animate-crystal-float
- Hover states on cards: scale(1.01) + shadow-card-hover transition-slow
- No bounce, no spin, no attention-seeking animation
- Framer Motion: use `viewport={{ once: true }}` on all scroll triggers

**Spacing rules:**
- Section vertical padding: py-section-md standard, py-section-lg for hero-adjacent sections
- Container: max-w-container mx-auto px-container-padding
- Card grid gaps: gap-6 (24px) standard, gap-8 (32px) for feature cards

**Mobile responsiveness:**
- All grids: 1 column on mobile, 2 on tablet, 3 on desktop where applicable
- Hero: headline reduces to text-display-md on mobile
- Navbar: hamburger on mobile, full links on md and above
- PlanCards: full width on mobile, stacked vertically

**Accessibility:**
- All images have descriptive alt text
- All interactive elements have focus-visible states
- Colour contrast: all text meets WCAG AA minimum
- CTA buttons have aria-label attributes

---

## 13. NOT-FOUND PAGE

`src/app/not-found.tsx`:
Clean, minimal. Dark hero background. "This page does not exist." in display-md. Body: "If you were looking for something specific, try the navigation above or return to the home page." One CTA: "Go home" linking to /. GariumLogo in top left.

---

## 14. NEXT CONFIG

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'fonts.googleapis.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## 15. BUILD ORDER RECOMMENDATION

Build in this sequence to avoid import errors:
1. Types (`src/types/`)
2. Utils and lib files (`src/lib/`)
3. Hooks (`src/hooks/`)
4. UI primitives (`src/components/ui/`)
5. Layout components (`src/components/layout/`)
6. Page-specific components (home, services, pricing, about, contact)
7. Page files (`src/app/**/page.tsx`)
8. API routes
9. Root layout and globals.css

---

## 16. DEPLOYMENT

The project is designed for Vercel. After building:
```bash
npm run build
vercel --prod
```

Set all environment variables from `.env.local` in the Vercel project settings before deploying.

Custom domain: garium.com. Configure DNS to point to Vercel's nameservers.

---

Begin building now. Start with the project setup commands, then build every file in the order specified in Section 15. Do not stop until every file listed in the folder structure exists and the project runs without errors.
