import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      title: "Quantum Processing",
      description: "Advanced quantum computing algorithms for unprecedented processing power",
      icon: "⚡"
    },
    {
      title: "Neural Integration",
      description: "Seamless integration between human neural patterns and AI systems",
      icon: "🧠"
    },
    {
      title: "Adaptive Learning",
      description: "Self-evolving algorithms that adapt to user patterns and needs",
      icon: "🔄"
    },
    {
      title: "Cognitive Bridge",
      description: "Direct neural interface for enhanced human-AI collaboration",
      icon: "🌐"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00FF00]">
              Core Features
            </h1>
            <p className="text-lg text-gray-400">
              Discover the revolutionary capabilities of Parallax
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-[#00FF00]/20 bg-black/50 backdrop-blur-sm hover:border-[#00FF00]/50 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-[#00FF00]">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
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
              href="/adaptive-learning"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Adaptive Learning
            </Link>
            <Link
              href="/resource"
              className="p-4 text-center border border-[#00FF00]/20 rounded hover:border-[#00FF00]/50 text-[#00FF00]"
            >
              Resources
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