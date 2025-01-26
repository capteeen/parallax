'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black/30">
      <div className="space-y-2 text-center">
        <div className="text-[#00FF00] font-mono text-lg animate-pulse">
          LOADING QUANTUM VISUALIZATION
        </div>
        <div className="text-[#00FF00]/70 font-mono text-sm typing-text">
          Initializing Neural Interface_
        </div>
      </div>
    </div>
  )
})

export default function CognitiveBridgePage() {
  const bridgeComponents = [
    {
      title: "Neural Interface",
      description: "Direct brain-computer interface with quantum entanglement",
      status: "Active",
      metrics: {
        latency: "0.1ms",
        bandwidth: "10 TB/s",
        stability: "99.999%"
      }
    },
    {
      title: "Quantum Bridge",
      description: "Quantum state transfer between biological and artificial neurons",
      status: "Optimal",
      metrics: {
        coherence: "99.99%",
        entanglement: "Perfect",
        fidelity: "99.999%"
      }
    },
    {
      title: "Consciousness Mapper",
      description: "Real-time mapping of neural patterns to quantum states",
      status: "Synced",
      metrics: {
        accuracy: "99.99%",
        resolution: "1 picometer",
        coverage: "100%"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF00]">
              Cognitive Bridge System
            </h1>
            <p className="text-lg text-gray-400">
              Advanced neural interface technology for human-AI synthesis
            </p>
          </div>

          {/* Bridge Components */}
          <div className="grid md:grid-cols-3 gap-8">
            {bridgeComponents.map((component, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#00FF00]">
                    {component.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-sm">
                    {component.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  {component.description}
                </p>
                <div className="space-y-3">
                  {Object.entries(component.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-[#00FF00]/10 pb-2"
                    >
                      <span className="text-[#00FF00]/70 capitalize">{key}</span>
                      <span className="text-[#00FF00] font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive System Architecture */}
          <div className="mt-16 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-[#00FF00] mb-4">
                System Architecture
              </h2>
              <p className="text-[#00FF00]/70 font-mono mb-8">
                Interactive Neural Interface Visualization
              </p>
            </div>
            
            {/* Spline Scene Container */}
            <div className="aspect-[16/9] w-full relative">
              <div className="absolute inset-0">
                <Spline 
                  scene="https://prod.spline.design/Vwk-X9XGOXCWD69Z/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#00FF00]/5 mix-blend-overlay" />
                
                {/* Scanner Lines */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF00]/10 to-transparent scanning-effect" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF00]/5 to-transparent scanning-effect-vertical" />
                </div>
                
                {/* Connection Points */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="relative">
                      <div 
                        className="absolute w-1 h-1 bg-[#00FF00] rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animation: `pulse ${1 + Math.random()}s infinite`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/neural-network"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Neural Network
            </Link>
            <Link
              href="/features"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Features
            </Link>
            <Link
              href="/adaptive-learning"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Adaptive Learning
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-[#00FF00] hover:text-[#00FF00]/80 inline-flex items-center"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Add required animations */}
      <style jsx global>{`
        @keyframes scanning {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scanning-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .scanning-effect {
          animation: scanning 3s linear infinite;
        }

        .scanning-effect-vertical {
          animation: scanning-vertical 8s linear infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .typing-text::after {
          content: '_';
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
} 