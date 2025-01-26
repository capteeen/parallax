import { HeroSection } from "@/components/ui/hero-section"
import { FeaturesSection } from "@/components/ui/features-section"
import { TechnologySection } from "@/components/ui/technology-section"
import { AbstractAISection } from "@/components/ui/abstract-ai-section"
import { TechStackSection } from "@/components/ui/tech-stack-section"

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AbstractAISection />
      <FeaturesSection />
      <TechnologySection />
      <TechStackSection />
    </main>
  )
}
