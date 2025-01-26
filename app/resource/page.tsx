'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ResourcePage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Technical Docs',
    'Medical Reports',
    'Research',
    'Integration',
    'Safety Protocols'
  ]

  const resources = [
    {
      title: "Neural Bridge Protocol v2.1",
      description: "Complete technical specification for neural bridge implementation including quantum entanglement protocols and synaptic mapping algorithms.",
      link: "/docs/neural-bridge-protocol.md",
      category: "Technical Docs",
      tags: ["Protocol", "Architecture"],
      codeSnippet: `
// Neural Bridge Initialization Protocol
async function initializeNeuralBridge() {
  await quantumEntanglementSetup({
    coherence: 0.9999,
    qubits: 1024,
    synapticMapping: true
  });
  
  return new NeuralBridge({
    bandwidth: "10TB/s",
    latency: "0.1ms",
    errorCorrection: "quantum"
  });
}`
    },
    {
      title: "Medical Safety Report 2024",
      description: "Comprehensive medical analysis of neural interface effects on human cognitive function and long-term safety assessments.",
      link: "/docs/medical-safety-report.md",
      category: "Medical Reports",
      tags: ["Safety", "Clinical Trials"],
      medicalData: {
        trials: 1000,
        success_rate: "99.99%",
        monitoring_period: "24 months",
        key_findings: [
          "No adverse effects on cognitive function",
          "Enhanced neural plasticity",
          "Improved memory retention"
        ]
      }
    },
    {
      title: "Quantum Neural Mapping",
      description: "Research paper on quantum-biological interfaces and consciousness transfer protocols.",
      link: "/docs/quantum-neural-mapping.md",
      category: "Research",
      tags: ["Quantum", "Neural Mapping"],
      abstract: "Novel approach to quantum-biological interface implementation using entangled qubits for direct neural state transfer..."
    },
    {
      title: "Integration Guide",
      description: "Step-by-step guide for integrating neural interfaces with existing cognitive systems.",
      link: "/docs/integration-guide.md",
      category: "Integration",
      tags: ["Setup", "Configuration"],
      steps: [
        "Quantum Core Initialization",
        "Neural Pattern Calibration",
        "Consciousness Stream Setup",
        "Safety Protocol Activation"
      ]
    },
    {
      title: "Emergency Protocols",
      description: "Critical safety procedures and emergency protocols for neural bridge operations.",
      link: "/docs/emergency-protocols.md",
      category: "Safety Protocols",
      tags: ["Safety", "Emergency"],
      protocols: [
        "Quantum Decoherence Prevention",
        "Neural Load Balancing",
        "Emergency Shutdown Sequence"
      ]
    },
    {
      title: "API Documentation",
      description: "Complete API reference for neural bridge integration and control systems.",
      link: "/docs/api-documentation.md",
      category: "Technical Docs",
      tags: ["API", "Integration"],
      endpoints: [
        "/api/neural/connect",
        "/api/quantum/sync",
        "/api/consciousness/transfer"
      ]
    }
  ]

  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF00] glitch-text">
              Technical Resources
            </h1>
            <p className="text-lg text-[#00FF00]/70 cyberpunk-font">
              Comprehensive documentation for neural bridge technology
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full border 
                  ${activeCategory === category 
                    ? 'border-[#00FF00] bg-[#00FF00]/10 text-[#00FF00]' 
                    : 'border-[#00FF00]/20 text-[#00FF00]/70 hover:border-[#00FF00]/50'}
                  transition-all duration-300
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredResources.map((resource, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm hover:border-[#00FF00]/50 transition-all group"
              >
                {/* Resource Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-[#00FF00]/70 mb-2">
                      {resource.category}
                    </div>
                    <h3 className="text-xl font-semibold text-[#00FF00] group-hover:text-[#00FF00]/80">
                      {resource.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {resource.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full border border-[#00FF00]/20 text-[#00FF00]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 mb-4">
                  {resource.description}
                </p>

                {/* Resource Specific Content */}
                {resource.codeSnippet && (
                  <div className="mb-4 p-4 bg-black/30 rounded border border-[#00FF00]/10 font-mono text-sm text-[#00FF00]/80 overflow-x-auto">
                    <pre>{resource.codeSnippet}</pre>
                  </div>
                )}

                {resource.medicalData && (
                  <div className="mb-4 space-y-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-2 bg-black/30 rounded border border-[#00FF00]/10">
                        <div className="text-[#00FF00]/60 text-sm">Trials</div>
                        <div className="text-[#00FF00] font-mono">{resource.medicalData.trials}</div>
                      </div>
                      <div className="p-2 bg-black/30 rounded border border-[#00FF00]/10">
                        <div className="text-[#00FF00]/60 text-sm">Success Rate</div>
                        <div className="text-[#00FF00] font-mono">{resource.medicalData.success_rate}</div>
                      </div>
                    </div>
                    <div className="p-2 bg-black/30 rounded border border-[#00FF00]/10">
                      <div className="text-[#00FF00]/60 text-sm mb-1">Key Findings</div>
                      <ul className="list-disc list-inside text-[#00FF00]/80 text-sm">
                        {resource.medicalData.key_findings.map((finding, i) => (
                          <li key={i}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {resource.abstract && (
                  <div className="mb-4 p-4 bg-black/30 rounded border border-[#00FF00]/10 text-[#00FF00]/80 italic">
                    "{resource.abstract}"
                  </div>
                )}

                {resource.steps && (
                  <div className="mb-4 space-y-2">
                    {resource.steps.map((step, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-2 bg-black/30 rounded border border-[#00FF00]/10"
                      >
                        <div className="w-6 h-6 rounded-full border border-[#00FF00]/30 flex items-center justify-center text-[#00FF00]">
                          {i + 1}
                        </div>
                        <div className="text-[#00FF00]/80">{step}</div>
                      </div>
                    ))}
                  </div>
                )}

                {resource.protocols && (
                  <div className="mb-4 space-y-2">
                    {resource.protocols.map((protocol, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-2 bg-black/30 rounded border border-[#00FF00]/10"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                        <div className="text-[#00FF00]/80">{protocol}</div>
                      </div>
                    ))}
                  </div>
                )}

                {resource.endpoints && (
                  <div className="mb-4 space-y-2">
                    {resource.endpoints.map((endpoint, i) => (
                      <div 
                        key={i}
                        className="p-2 font-mono text-sm bg-black/30 rounded border border-[#00FF00]/10 text-[#00FF00]/80"
                      >
                        {endpoint}
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={resource.link}
                  className="inline-flex items-center text-[#00FF00] hover:text-[#00FF00]/80 group"
                >
                  View Documentation
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-[#00FF00] hover:text-[#00FF00]/80 inline-flex items-center group"
            >
              <svg
                className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
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

      <style jsx global>{`
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
      `}</style>
    </div>
  )
} 