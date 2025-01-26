export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full">
        {/* Hexagonal Grid */}
        <div className="absolute inset-0 grid grid-cols-8 gap-1 transform rotate-12 scale-150">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="relative h-24 bg-purple-500/5 backdrop-blur-sm 
                         hover:bg-purple-500/20 transition-all duration-500
                         clip-hex group cursor-pointer"
              style={{
                animationDelay: `${i * 0.05}s`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            >
              <div className="absolute inset-0.5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-purple-500/20 clip-hex" />
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/50 rounded-full floating-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 