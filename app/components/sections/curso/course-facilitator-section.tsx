"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import facilitatorArtwork from "../../../assets/images/facilitadora.png"

const references = [
  "Amit Goswami",
  "Nilton Schultz",
  "Neiva Santos",
  "Neide Santos",
  "Leandro Kavlac",
]

export function CourseFacilitatorSection() {
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
      id="facilitadora"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gold-light/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          ref={contentRef}
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Esquerda – número e título */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
            >
              02
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
            >
              A
              <br />
              <span className="text-primary">Facilitadora</span>
            </motion.h2>

            {/* Referências */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Referências e professores
              </p>
              <div className="flex flex-wrap gap-2">
                {references.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                    className="px-3 py-1.5 text-xs text-muted-foreground border border-border/60 rounded-full"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Direita – bio */}
          {/* <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              <strong className="text-foreground font-medium">Euda Raposo</strong> é a facilitadora
              do curso, com uma trajetória rica e multidisciplinar de formação acadêmica e terapêutica.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Com experiência em <strong className="text-foreground/80">História Cultural</strong> e{" "}
              <strong className="text-foreground/80">Arteterapia Junguiana</strong>, Euda aprofundou
              seus estudos em Xamanismo, Medicina Tradicional Chinesa e Ativismo Quântico, construindo
              uma visão holística e integrativa da cura.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Sua trajetória com a Mesa de Estação Radiônica (MER) culminou em 2023, quando se formou
              como <strong className="text-foreground/80">Facilitadora de MER</strong>, tornando-se
              apta a compartilhar esse conhecimento transformador com novos operadores.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Sua formação em Radiestesia e Radiônica, somada à sua experiência prática, garantem um
              ensino profundo, humano e comprometido com o desenvolvimento genuíno de cada aluno.
            </motion.p>
          </div> */}
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10 mt-16 overflow-hidden rounded-2xl border border-primary/20 bg-card/40 p-2 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm md:mt-20 md:p-3"
        >
          <Image
            src={facilitatorArtwork}
            alt="Papiro com a mini biografia de Euda Raposo, sua trajetória em História Cultural, Arteterapia, Radiestesia e Radiônica."
            sizes="(min-width: 1280px) 1152px, calc(100vw - 3rem)"
            className="h-auto w-full rounded-xl"
          />
        </motion.figure>
      </div>
    </section>
  )
}
