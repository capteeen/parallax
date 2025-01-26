export function GlowEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-purple-500/20
                       animate-spin-slow"
            style={{
              width: `${500 + i * 100}px`,
              height: `${500 + i * 100}px`,
              animationDuration: `${20 + i * 5}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                       rounded-full blur-3xl animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Scanning Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent 
                    animate-scan" />
    </div>
  )
} 