'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0A0A0A]/50 backdrop-blur-sm">
      <div className="space-y-2 text-center">
        <div className="text-[#00FF00] font-mono text-lg animate-pulse">
          LOADING NEURAL MANIFESTATION
        </div>
        <div className="text-[#00FF00]/70 font-mono text-sm typing-text">
          Rendering Quantum Consciousness_
        </div>
      </div>
    </div>
  )
})

export function AbstractAISection() {
  const [splineError, setSplineError] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const chars = '01010101PARALLAXCHAIN'
    const drops: number[] = []
    const fontSize = 14
    const columns = canvas.width / fontSize

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00FF00'
      ctx.shadowColor = '#00FF00'
      ctx.shadowBlur = 15
      ctx.font = `${fontSize}px "Courier New", monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.globalAlpha = Math.random() * 0.5 + 0.5
        ctx.fillText(text, x, y)
        ctx.globalAlpha = 1

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => window.removeEventListener('resize', setCanvasSize)
  }, [])

  const handleSplineError = () => {
    setSplineError(true)
  }

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-30"
      />

      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00FF00] matrix-text glitch-text">
                  NEURAL SYNTHESIS
                </h2>
                <div className="h-1 w-24 bg-[#00FF00]/50 rounded-full" />
              </div>
              <div className="space-y-6 font-mono">
                <p className="text-[#00FF00]/80 text-base sm:text-lg typing-text">
                  Post-connection manifestation of artificial consciousness, 
                  where human neural patterns merge with quantum processing matrices.
                </p>
                <div className="space-y-3 text-[#00FF00]/60 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                    <span>Quantum State Coherence: 99.99%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                    <span>Neural Bandwidth: 1.21 TeraSync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                    <span>Consciousness Integration: Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spline Scene */}
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 grid-matrix opacity-20" />
              <div className="absolute inset-0 matrix-gradient rounded-full blur-3xl opacity-20" />
              
              {/* Spline Container */}
              <div className="relative w-full h-full">
                {!splineError ? (
                  <Spline
                    scene="https://prod.spline.design/ZVGv56HFHIZmzaiX/scene.splinecode"
                    className="w-full h-full"
                    onError={handleSplineError}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#00FF00]/5 rounded-lg border border-[#00FF00]/20">
                    <div className="text-[#00FF00] font-mono text-center">
                      <p className="text-base sm:text-lg">3D Scene unavailable</p>
                      <p className="text-xs sm:text-sm opacity-70">Please try again later</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  <div className="absolute inset-0 circuit-pattern opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF00]/5 to-transparent animate-scan" />
                </div>
              </div>

              {/* Neural Connection Points */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00FF00]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite`,
                    opacity: 0.6
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#00FF00] animate-ping" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 