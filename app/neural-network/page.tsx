'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ActivityVisualization } from './components/ActivityVisualization'

function NeuralNetworkPage() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null)
  const [pulseEffect, setPulseEffect] = useState(false)

  useEffect(() => {
    // Create pulse effect every 3 seconds
    const interval = setInterval(() => {
      setPulseEffect(true)
      setTimeout(() => setPulseEffect(false), 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const networkLayers = [
    {
      title: "Input Layer",
      description: "Advanced sensory processing and data interpretation layer",
      metrics: {
        nodes: "1024",
        activation: "ReLU",
        dropout: "0.2"
      },
      status: "Active",
      pulseColor: "#00ff00"
    },
    {
      title: "Hidden Layers",
      description: "Deep learning layers with quantum processing capabilities",
      metrics: {
        layers: "16",
        nodesPerLayer: "2048",
        architecture: "Transformer"
      },
      status: "Processing",
      pulseColor: "#00ffff"
    },
    {
      title: "Processing Core",
      description: "Quantum-enhanced neural processing unit",
      metrics: {
        qubits: "128",
        coherence: "99.9%",
        errorRate: "0.001%"
      },
      status: "Optimal",
      pulseColor: "#ff00ff"
    },
    {
      title: "Output Layer",
      description: "High-precision response generation and action planning",
      metrics: {
        nodes: "512",
        activation: "Softmax",
        precision: "99.99%"
      },
      status: "Ready",
      pulseColor: "#ffff00"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 bg-[url('/matrix-bg.png')] opacity-10" />
      
      {/* Neural Connection Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ff00" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00ff00" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ff00" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Animated connection lines will be added here */}
          <path
            d="M0 0 L100 100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="neural-connection"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with Scanning Effect */}
          <div className="mb-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF00]/10 to-transparent scanning-effect" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF00] glitch-text">
              Neural Network Architecture
            </h1>
            <p className="text-lg text-[#00FF00]/70 cyberpunk-font">
              Explore our advanced neural network system
            </p>
          </div>

          {/* Network Layers with Interactive Effects */}
          <div className="space-y-8">
            {networkLayers.map((layer, index) => (
              <div
                key={index}
                className={`
                  p-6 rounded-lg border bg-black/80 backdrop-blur-sm
                  transform transition-all duration-300
                  ${activeLayer === index ? 'scale-105 border-[#00FF00]' : 'border-[#00FF00]/20'}
                  ${pulseEffect ? 'pulse-effect' : ''}
                  hover:border-[#00FF00] cursor-pointer
                `}
                onMouseEnter={() => setActiveLayer(index)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Layer Info */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-3 h-3 rounded-full animate-pulse`}
                        style={{ backgroundColor: layer.pulseColor }}
                      />
                      <h3 className="text-2xl font-semibold text-[#00FF00] cyberpunk-font">
                        {layer.title}
                      </h3>
                    </div>
                    <div className="mt-2 text-[#00FF00]/60 text-sm">
                      Status: {layer.status}
                    </div>
                    <p className="text-gray-400 mt-2">
                      {layer.description}
                    </p>
                  </div>

                  {/* Metrics with Holographic Effect */}
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(layer.metrics).map(([key, value], idx) => (
                        <div
                          key={idx}
                          className={`
                            p-4 rounded bg-black/40 border border-[#00FF00]/20
                            holographic-panel transform transition-all duration-300
                            ${activeLayer === index ? 'border-[#00FF00]/50 scale-105' : ''}
                          `}
                        >
                          <div className="text-[#00FF00]/70 text-sm mb-1 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-[#00FF00] font-mono text-lg">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Visualization */}
                {activeLayer === index && <ActivityVisualization index={index} />}
              </div>
            ))}
          </div>

          {/* Navigation Links with Hover Effects */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: "/cognitive-bridge", label: "Cognitive Bridge" },
              { href: "/features", label: "Features" },
              { href: "/adaptive-learning", label: "Adaptive Learning" }
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="
                  p-4 text-center border border-[#00FF00]/20 rounded
                  hover:border-[#00FF00] hover:bg-[#00FF00]/10
                  transition-all duration-300 text-[#00FF00]
                  relative overflow-hidden group
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF00]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Back to Home with Sci-fi Effect */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="
                inline-flex items-center text-[#00FF00] hover:text-[#00FF00]/80
                relative group
              "
            >
              <div className="absolute inset-0 bg-[#00FF00]/20 rounded-full blur-xl group-hover:bg-[#00FF00]/30 transition-all duration-300" />
              <svg
                className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
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

      {/* Add global styles */}
      <style jsx global>{`
        @keyframes scanning {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .scanning-effect {
          animation: scanning 3s linear infinite;
        }

        .holographic-panel {
          position: relative;
          overflow: hidden;
        }

        .holographic-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(0, 255, 0, 0.1) 45%,
            rgba(0, 255, 0, 0.1) 55%,
            transparent 100%
          );
          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        .holographic-panel:hover::before {
          transform: translateX(100%);
        }

        .neural-connection {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        .glitch-text {
          text-shadow: 
            0 0 5px #00FF00,
            0 0 10px #00FF00,
            0 0 15px #00FF00;
        }

        .cyberpunk-font {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.05em;
        }

        .pulse-effect {
          animation: layerPulse 0.5s ease-out;
        }

        @keyframes layerPulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); }
        }

        @keyframes wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }

        @keyframes barHeight {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }

        @keyframes pulseRing {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }

        .neural-pulse {
          animation: neuralPulse 2s ease-in-out infinite;
        }

        @keyframes neuralPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default NeuralNetworkPage 