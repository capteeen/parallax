'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
}

function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-[#00FF00]/10 hover:bg-[#00FF00]/20 transition-colors"
        >
          <Copy className={`w-4 h-4 ${copied ? 'text-green-500' : 'text-[#00FF00]'}`} />
        </button>
      </div>
      <pre className="p-4 bg-black/30 rounded-lg border border-[#00FF00]/20 font-mono text-sm text-[#00FF00]/80 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState('quick-start')

  const tabs = [
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'core', label: 'Core System' },
    { id: 'neural', label: 'Neural Interface' },
    { id: 'quantum', label: 'Quantum Bridge' },
    { id: 'platform', label: 'Platform Setup' }
  ]

  const requirements = {
    minimum: [
      { label: 'CPU', value: '8 cores, quantum-compatible' },
      { label: 'RAM', value: '32 GB' },
      { label: 'Storage', value: '1 TB NVMe SSD' },
      { label: 'GPU', value: 'CUDA-compatible, 12GB VRAM' },
      { label: 'QPU', value: '1024 qubits' }
    ],
    recommended: [
      { label: 'CPU', value: '16 cores, quantum-compatible' },
      { label: 'RAM', value: '64 GB' },
      { label: 'Storage', value: '2 TB NVMe SSD' },
      { label: 'GPU', value: 'CUDA-compatible, 24GB VRAM' },
      { label: 'QPU', value: '4096 qubits' }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF00] glitch-text">
              Installation Guide
            </h1>
            <p className="text-lg text-[#00FF00]/70 cyberpunk-font">
              Complete setup guide for Parallax Neural Bridge System
            </p>
          </div>

          {/* System Requirements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#00FF00]">System Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Minimum Requirements */}
              <div className="p-6 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Minimum</h3>
                <div className="space-y-3">
                  {requirements.minimum.map((req, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-[#00FF00]/10 pb-2">
                      <span className="text-[#00FF00]/70">{req.label}</span>
                      <span className="text-[#00FF00] font-mono">{req.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Requirements */}
              <div className="p-6 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Recommended</h3>
                <div className="space-y-3">
                  {requirements.recommended.map((req, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-[#00FF00]/10 pb-2">
                      <span className="text-[#00FF00]/70">{req.label}</span>
                      <span className="text-[#00FF00] font-mono">{req.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Installation Tabs */}
          <div className="mb-8 flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 rounded-full border 
                  ${activeTab === tab.id 
                    ? 'border-[#00FF00] bg-[#00FF00]/10 text-[#00FF00]' 
                    : 'border-[#00FF00]/20 text-[#00FF00]/70 hover:border-[#00FF00]/50'}
                  transition-all duration-300
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Start Content */}
          {activeTab === 'quick-start' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">1. Core Installation</h3>
                <CodeBlock
                  code={`# Install Parallax CLI
npm install -g @parallax/cli

# Initialize new project
parallax init my-neural-project
cd my-neural-project

# Install dependencies
npm install`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">2. Neural Interface Setup</h3>
                <CodeBlock
                  code={`# Install Python dependencies
pip install parallax-neural>=2.1.0 quantum-bridge>=1.5.0 neural-interface>=3.0.0

# Verify installation
python -c "import parallax_neural as pn; print(pn.__version__)"`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">3. Environment Configuration</h3>
                <CodeBlock
                  code={`# Configure environment
parallax configure --quantum-core --neural-interface

# Initialize quantum bridge
parallax bridge init --qubits 1024 --coherence 0.9999`}
                />
              </div>
            </div>
          )}

          {/* Core System Content */}
          {activeTab === 'core' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Core Framework Installation</h3>
                <CodeBlock
                  code={`// Install core dependencies
npm install @parallax/core @parallax/neural @parallax/quantum

// Initialize core system
import { ParallaxCore } from '@parallax/core';

const core = new ParallaxCore({
  version: '2.1.0',
  quantum: true,
  neural: true
});

await core.initialize();`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">System Configuration</h3>
                <CodeBlock
                  code={`{
  "system": {
    "mode": "production",
    "quantum": {
      "qubits": 1024,
      "coherence": 0.9999,
      "errorCorrection": true
    },
    "neural": {
      "resolution": "1pm",
      "bandwidth": "10TB/s",
      "latency": "0.1ms"
    }
  }
}`}
                />
              </div>
            </div>
          )}

          {/* Neural Interface Content */}
          {activeTab === 'neural' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Neural Interface Setup</h3>
                <CodeBlock
                  code={`import parallax_neural as pn

# Initialize neural interface
neural_interface = pn.NeuralInterface(
    resolution="1pm",
    sampling_rate="1MHz",
    adaptive_filtering=True
)

# Configure neural patterns
patterns = neural_interface.configure_patterns(
    baseline_time="5min",
    pattern_types=["alpha", "beta", "gamma", "theta"]
)

# Verify setup
status = neural_interface.verify_configuration()
print(f"Neural Interface Status: {status}")`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Neural Bridge Configuration</h3>
                <CodeBlock
                  code={`from parallax_neural.bridge import NeuralBridge

bridge = NeuralBridge(
    bandwidth="10TB/s",
    latency="0.1ms",
    error_correction="quantum"
)

# Initialize bridge
bridge.initialize()
bridge.verify_connection()`}
                />
              </div>
            </div>
          )}

          {/* Quantum Bridge Content */}
          {activeTab === 'quantum' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Quantum Core Setup</h3>
                <CodeBlock
                  code={`import { QuantumCore } from '@parallax/quantum';

const quantum = new QuantumCore({
  qubits: 1024,
  coherence: 0.9999,
  errorCorrection: true
});

// Initialize quantum system
await quantum.initialize();
await quantum.verify_entanglement();`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Bridge Integration</h3>
                <CodeBlock
                  code={`import { Bridge } from '@parallax/bridge';

const bridge = new Bridge({
  quantum,
  neural,
  mode: 'production'
});

// Establish quantum-neural bridge
await bridge.connect();
await bridge.verify();`}
                />
              </div>
            </div>
          )}

          {/* Platform Setup Content */}
          {activeTab === 'platform' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Next.js Integration</h3>
                <CodeBlock
                  code={`# Create Next.js project with Parallax
npx create-next-app@latest --example with-parallax my-neural-app
cd my-neural-app`}
                />
                <div className="mt-4">
                  <CodeBlock
                    code={`import { NeuralComponent } from '@parallax/react';

export default function MyComponent() {
  return (
    <NeuralComponent
      resolution="1pm"
      bandwidth="10TB/s"
      coherence={0.9999}
    >
      {/* Your neural-enhanced component */}
    </NeuralComponent>
  );
}`}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#00FF00]">Node.js Integration</h3>
                <CodeBlock
                  code={`import { ParallaxServer } from '@parallax/server';

const server = new ParallaxServer({
  port: 3000,
  quantum: true,
  neural: true
});

server.initialize().then(() => {
  console.log('Parallax Server Running');
});`}
                />
              </div>
            </div>
          )}

          {/* Documentation Link */}
          <div className="mt-12 text-center">
            <Link
              href="/docs/installation-guide.md"
              className="inline-flex items-center text-[#00FF00] hover:text-[#00FF00]/80 group"
            >
              View Full Documentation
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