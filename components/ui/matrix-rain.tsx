export function MatrixRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="matrix-rain absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 2}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span
                key={j}
                className="text-green-400 font-mono text-sm"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random()
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
} 