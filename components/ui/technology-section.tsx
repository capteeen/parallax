import { Card } from "./card"

export function TechnologySection() {
  const technologies = [
    {
      title: "Blockchain Infrastructure",
      items: [
        "Layer 1 blockchain with perspective-based consensus",
        "Quantum-resistant security protocols",
        "Scalable microservices architecture"
      ]
    },
    {
      title: "AI Integration",
      items: [
        "Federated machine learning nodes",
        "Dynamic computational resource allocation",
        "Transparent model training mechanisms"
      ]
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{tech.title}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="text-purple-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 