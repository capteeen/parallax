'use client'

import { useEffect, useState } from 'react'

interface ActivityVisualizationProps {
  index: number;
}

export function ActivityVisualization({ index }: ActivityVisualizationProps) {
  const [counters, setCounters] = useState({
    operations: 0,
    dataFlow: 0,
    efficiency: 0
  })

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounters(prev => ({
        operations: (prev.operations + 1237) % 1000000,
        dataFlow: (prev.dataFlow + 892) % 100000,
        efficiency: Math.min(99.99, prev.efficiency + 0.1)
      }))
    }, 50)
    return () => clearInterval(counterInterval)
  }, [])

  return (
    <div className="mt-6 h-48 rounded-lg border border-[#00FF00]/20 bg-black/30 overflow-hidden">
      <div className="w-full h-full relative p-4">
        <div className="absolute inset-0 flex">
          {/* Animated Wave Background */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex-1 relative"
              style={{
                animation: `wave ${2 + i * 0.2}s ease-in-out infinite`,
                opacity: 0.1
              }}
            >
              <div
                className="absolute inset-0 bg-[#00FF00]"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                }}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
          {/* Left Side - Metrics */}
          <div className="space-y-4">
            <div className="bg-black/40 p-3 rounded border border-[#00FF00]/30">
              <div className="text-[#00FF00]/70 text-sm mb-1">Operations/s</div>
              <div className="font-mono text-[#00FF00] text-xl tabular-nums">
                {counters.operations.toLocaleString()}
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded border border-[#00FF00]/30">
              <div className="text-[#00FF00]/70 text-sm mb-1">Data Flow</div>
              <div className="font-mono text-[#00FF00] text-xl tabular-nums">
                {counters.dataFlow.toLocaleString()} TB/s
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded border border-[#00FF00]/30">
              <div className="text-[#00FF00]/70 text-sm mb-1">Efficiency</div>
              <div className="font-mono text-[#00FF00] text-xl tabular-nums">
                {counters.efficiency.toFixed(2)}%
              </div>
            </div>
          </div>

          {/* Right Side - Activity Graph */}
          <div className="relative">
            <div className="absolute inset-0 flex items-end">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#00FF00]/30 mx-px"
                  style={{
                    height: `${Math.random() * 100}%`,
                    animation: `barHeight ${1 + Math.random() * 2}s ease-in-out infinite`
                  }}
                />
              ))}
            </div>
            
            {/* Pulse Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 rounded-full border border-[#00FF00]/30"
                  style={{
                    animation: `pulseRing ${2 + i * 0.5}s linear infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 