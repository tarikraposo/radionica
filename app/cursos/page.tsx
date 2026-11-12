"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Header } from "../components/header"
import { BackgroundAudio } from "../components/background-audio"
import { SmoothScroll } from "../components/smooth-scroll"
import { CourseHeroSection } from "../components/sections/curso/course-hero-section"
import { CourseAboutSection } from "../components/sections/curso/course-about-section"
import { CourseFacilitatorSection } from "../components/sections/curso/course-facilitator-section"
import { CourseLearnSection } from "../components/sections/curso/course-learn-section"
import { CourseForWhoSection } from "../components/sections/curso/course-for-who-section"
import { CourseMaterialsSection } from "../components/sections/curso/course-materials-section"
import { CourseCertificationSection } from "../components/sections/curso/course-certification-section"
import { CourseInfoSection } from "../components/sections/curso/course-info-section"
import { CourseInvestmentSection } from "../components/sections/curso/course-investment-section"

export default function CursosPage() {
  return (
    <SmoothScroll>
      <main className="relative">
        <Header />
        <Link
          href="#investimento"
          className="fixed right-4 top-20 z-40 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground md:right-8 md:px-5"
        >
          Matricule-se agora
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <div className="relative z-20">
          <CourseHeroSection />
          <CourseAboutSection />
          <CourseFacilitatorSection />
          <CourseLearnSection />
          <CourseForWhoSection />
          <CourseMaterialsSection />
          <CourseCertificationSection />
          <CourseInfoSection />
          <CourseInvestmentSection />
        </div>
        <BackgroundAudio />
      </main>
    </SmoothScroll>
  )
}
