"use client"

import { Header } from "./components/header"
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
