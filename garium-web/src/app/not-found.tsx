import Link from 'next/link'
import { GariumLogo } from '@/components/ui/GariumLogo'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#081c52] to-[#072c8f] flex flex-col">
      <div className="container-garium pt-6">
        <GariumLogo size="md" color="#F5F7FA" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="container-garium text-center">
          <p className="text-[#697ede] text-sm font-medium uppercase tracking-widest mb-6">404</p>
          <h1 className="font-semibold text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}>
            This page does not exist.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-[480px] mx-auto">
            If you were looking for something specific, try the navigation above or return to the home page.
          </p>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              aria-label="Go home"
              className="border-white text-white hover:bg-white hover:text-[#081c52]"
            >
              Go home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
