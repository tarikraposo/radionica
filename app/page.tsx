"use client"

import { SmoothScroll } from '@/components/smooth-scroll'
import { Header } from '@/components/header'
import { Scene3D } from '@/components/scene-3d'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <SmoothScroll>
      <main className="relative">
        <Header />
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
