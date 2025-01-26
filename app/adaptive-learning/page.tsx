import Link from 'next/link'

export default function AdaptiveLearningPage() {
  const learningModules = [
    {
      title: "Pattern Recognition",
      description: "Advanced pattern recognition and behavioral analysis",
      capabilities: [
        "Real-time pattern analysis",
        "Behavioral prediction",
        "Anomaly detection",
        "Trend forecasting"
      ]
    },
    {
      title: "Knowledge Synthesis",
      description: "Dynamic knowledge integration and synthesis",
      capabilities: [
        "Cross-domain learning",
        "Knowledge fusion",
        "Concept mapping",
        "Semantic analysis"
      ]
    },
    {
      title: "Adaptive Response",
      description: "Context-aware response generation and optimization",
      capabilities: [
        "Context adaptation",
        "Response optimization",
        "Feedback integration",
        "Performance tuning"
      ]
    }
  ]

  const learningMetrics = [
    {
      label: "Learning Rate",
      value: "1.21 exaFLOPS",
      change: "+12.5%"
    },
    {
      label: "Pattern Recognition",
      value: "99.99%",
      change: "+0.7%"
    },
    {
      label: "Knowledge Base",
      value: "1.44 PB",
      change: "+8.3%"
    },
    {
      label: "Response Time",
      value: "0.1ms",
      change: "-15%"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF00]">
              Adaptive Learning System
            </h1>
            <p className="text-lg text-gray-400">
              Self-evolving AI with advanced learning capabilities
            </p>
          </div>

          {/* Metrics Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {learningMetrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm"
              >
                <p className="text-[#00FF00]/70 text-sm mb-2">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-[#00FF00]">{metric.value}</p>
                  <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Modules */}
          <div className="space-y-8">
            {learningModules.map((module, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-semibold text-[#00FF00] mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-400">
                      {module.description}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-2 gap-4">
                      {module.capabilities.map((capability, idx) => (
                        <div
                          key={idx}
                          className="p-4 border border-[#00FF00]/10 rounded bg-black/30"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
                            <p className="text-[#00FF00]/80">
                              {capability}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              href="/cognitive-bridge"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Cognitive Bridge
            </Link>
            <Link
              href="/features"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Features
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
    </div>
  )
} 