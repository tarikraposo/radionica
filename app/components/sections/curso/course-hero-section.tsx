"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaWhatsapp } from "react-icons/fa"

export function CourseHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="curso-apresentacao"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background dark:bg-transparent -z-10" />

      {/* Blurs de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[55%] h-[70%] bg-blue-glow/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[50%] h-[55%] bg-gold-light/15 rounded-full blur-[150px] -translate-x-1/4 translate-y-1/4"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center min-h-screen py-32 text-center">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
            >
              Formação Presencial · Única Turma de 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-balance mb-6"
            >
              Operador(a) de
              <br />
              <span className="text-primary">Mesa de Estação</span>
              <br />
              Radiônica
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-px bg-primary/40 mt-8 mb-8 mx-auto"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Uma jornada de aprendizado e transformação pessoal em Radiestesia e Radiônica.
              Certificação pela ABRATH. 16 horas de formação teórica e prática.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={`https://wa.me/5561992072082?text=${encodeURIComponent("Olá! Gostaria de me inscrever no curso de Operador(a) de Mesa de Estação Radiônica.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <FaWhatsapp size={20} />
                Quero me inscrever
              </a>
              <Link
                href="#sobre-curso"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                Saiba mais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Badges flutuantes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
