"use client"

import { Header } from "../components/header"
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
      </main>
    </SmoothScroll>
  )
}
