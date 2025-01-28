'use client'

import { useState } from 'react'
import { Brain, Cpu, Network } from 'lucide-react'

export function NeuralinkBridgeSection() {
  const [activeStage, setActiveStage] = useState<number | null>(null)

  const stages = [
    {
      title: "Neuralink Interface",
      description: "Direct neural interface through Neuralink&apos;s N1 chip, capturing brain signals at 1ms precision",
      icon: Brain,
      metrics: {
        "Signal Resolution": "1ms",
        "Neural Channels": "1,024",
        "Bandwidth": "1 Gbps",
      }
    },
    {
      title: "Parallax Bridge",
      description: "Quantum-enhanced neural signal processing and pattern matching for seamless brain-AI communication",
      icon: Network,
      metrics: {
        "Processing Speed": "1 PHz",
        "Quantum Coherence": "99.99%",
        "Pattern Match Rate": "99.999%"
      }
    },
    {
      title: "AI Integration",
      description: "Advanced AI systems interfacing directly with human thought patterns through quantum neural mapping",
      icon: Cpu,
      metrics: {
        "Response Time": "0.1ms",
        "Accuracy": "99.999%",
        "Learning Rate": "1.21 TFLOPS"
      }
    }
  ]

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF00]/10 via-transparent to-transparent" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00FF00] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${1 + Math.random() * 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#00FF00] mb-4 glitch-text">
            Neuralink Integration
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto cyberpunk-font">
            Bridging human consciousness with artificial intelligence through Neuralink&apos;s advanced neural interface
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-lg border backdrop-blur-sm transition-all duration-300
                ${activeStage === index 
                  ? 'border-[#00FF00] bg-[#00FF00]/5' 
                  : 'border-[#00FF00]/20 bg-black/30'}
              `}
              onMouseEnter={() => setActiveStage(index)}
              onMouseLeave={() => setActiveStage(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  p-3 rounded-lg bg-[#00FF00]/10
                  ${activeStage === index ? 'text-[#00FF00]' : 'text-[#00FF00]/70'}
                `}>
                  <stage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#00FF00]">
                  {stage.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6">
                {stage.description}
              </p>

              <div className="space-y-3">
                {Object.entries(stage.metrics).map(([key, value], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-[#00FF00]/10 pb-2"
                  >
                    <span className="text-[#00FF00]/70">{key}</span>
                    <span className="text-[#00FF00] font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="mt-16 p-6 rounded-lg border border-[#00FF00]/20 bg-black/30 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-[#00FF00] mb-4">
            Integration Process
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#00FF00]/70 mb-2">Signal Processing</h4>
              <p className="text-gray-400">
                Neuralink&apos;s N1 chip captures neural signals at microsecond precision. These signals are processed through 
                Parallax&apos;s quantum neural network, which maps brain patterns to quantum states for direct AI interaction.
              </p>
            </div>
            <div>
              <h4 className="text-[#00FF00]/70 mb-2">Quantum Bridge</h4>
              <p className="text-gray-400">
                The quantum bridge maintains coherent states between neural signals and AI systems, enabling 
                bidirectional thought-to-computation communication with near-zero latency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
} 