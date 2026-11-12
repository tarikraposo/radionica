"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
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
  const prefersReducedMotion = useReducedMotion()

  return (
    <SmoothScroll>
      <main className="relative">
        <Header />
        <motion.aside
          aria-label="Matrículas abertas"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, -3, 3, -3, 3, 0] }
          }
          transition={{
            duration: 0.45,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
          className="fixed right-4 top-24 z-40 w-56 rounded-2xl border border-primary/50 bg-card p-3 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.35)] ring-1 ring-primary/15 md:right-8 md:top-24 md:w-60"
        >
          <p className="mb-2 flex items-center gap-2 px-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" aria-hidden="true" />
            Matrículas abertas
          </p>
          <Link
            href="#investimento"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Matricule-se agora
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </motion.aside>

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
