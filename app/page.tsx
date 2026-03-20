"use client"

import { Header } from "./components/header"
import { Scene3D } from "./components/scene-3d"
import { AboutSection } from "./components/sections/about-section"
import { ContactSection } from "./components/sections/contact-section"
import { HeroSection } from "./components/sections/hero-section"
import { HowItWorksSection } from "./components/sections/how-it-works-section"
import { SmoothScroll } from "./components/smooth-scroll"



export default function HomePage() {
  return (
    <SmoothScroll>
      <main className="relative">
        <Header />
        
        {/* O Scene3D agora é renderizado ANTES do conteúdo principal para agir como background */}
        <Scene3D />
        
        <div className="relative z-20">
          <HeroSection />
          <AboutSection />
          <HowItWorksSection />
          <ContactSection />
        </div>
      </main>
    </SmoothScroll>
  )
}
