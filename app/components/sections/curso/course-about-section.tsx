"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import crystalArtwork from "../../../assets/images/cristal.png"

export function CourseAboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      id="sobre-curso"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[35%] h-[50%] bg-blue-glow/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          ref={contentRef}
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Esquerda – número e título */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
            >
              01
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
            >
              Sobre o
              <br />
              <span className="text-primary">Curso</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              aria-hidden="true"
              className="relative mt-8 aspect-[4/3] w-full max-w-sm"
            >
              <div className="absolute inset-1/4 rounded-full bg-blue-glow/20 blur-3xl" />
              <Image
                src={crystalArtwork}
                alt=""
                fill
                sizes="(min-width: 1024px) 35vw, 85vw"
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Direita – conteúdo */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              O curso de <strong className="text-foreground font-medium">Operador(a) de Mesa de Estação Radiônica</strong> oferece
              uma formação teórica e prática completa nas áreas de Radiestesia e Radiônica.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              É uma jornada de aprendizado e transformação pessoal, estruturada para capacitar você
              a operar com a Mesa de Estação Radiônica de forma segura, ética e eficaz — seja para
              uso próprio, familiar ou profissional.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              O curso é presencial, com carga horária total de 16 horas, e ao final o aluno recebe
              a certificação pela <strong className="text-foreground font-medium">ABRATH</strong> — Associação Brasileira de Terapeutas Holísticos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <div className="flex flex-wrap gap-4">
                {["16 horas", "Presencial", "Teórico e Prático", "Certificado ABRATH"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
