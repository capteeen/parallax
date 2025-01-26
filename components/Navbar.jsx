import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <Link href="/">
          <div className="logo-container">
            <Image
              src="/images/parallax.png"
              alt="Parallax AI Logo"
              width={150}
              height={50}
              priority
            />
          </div>
        </Link>
      </div>
    </nav>
  )
} 