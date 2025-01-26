'use client'

export function CursorEffect() {
  const handleMouseMove = (e: React.MouseEvent) => {
    const cursor = document.getElementById('cursor-glow')
    const x = e.clientX
    const y = e.clientY
    
    if (cursor) {
      cursor.style.transform = `translate(${x - 150}px, ${y - 150}px)`
      
      // Create ripple effect
      const ripple = document.createElement('div')
      ripple.className = 'ripple absolute w-4 h-4 bg-purple-500/20 rounded-full pointer-events-none'
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      document.body.appendChild(ripple)
      
      setTimeout(() => ripple.remove(), 1000)
    }

    // Affect nearby particles
    const particles = document.querySelectorAll('.floating-particle')
    particles.forEach((particle: Element) => {
      const rect = particle.getBoundingClientRect()
      const dx = x - (rect.left + rect.width / 2)
      const dy = y - (rect.top + rect.height / 2)
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 200) {
        const el = particle as HTMLElement
        el.style.transform = `translate(${dx / 8}px, ${dy / 8}px)`
      }
    })
  }

  return (
    <>
      <div 
        id="cursor-glow" 
        className="fixed w-[300px] h-[300px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                   rounded-full blur-3xl pointer-events-none transition-transform duration-100 z-50"
      />
      <div 
        onMouseMove={handleMouseMove}
        className="fixed inset-0 pointer-events-auto z-40"
      />
    </>
  )
} 