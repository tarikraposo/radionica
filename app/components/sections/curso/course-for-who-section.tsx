"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import lionessArtwork from "../../../assets/images/liona-2.png"

const profiles = [
  {
    title: "Futuros terapeutas",
    description: "Pessoas que desejam atuar profissionalmente como terapeutas utilizando a ferramenta da Mesa de Estação Radiônica.",
  },
  {
    title: "Iniciantes completos",
    description: "Pessoas sem experiência prévia em Radiestesia ou Radiônica são bem-vindas — o curso parte do zero.",
  },
  {
    title: "Autoconhecimento",
    description: "Interessados em autotransformação, autoconhecimento e desenvolvimento espiritual pessoal.",
  },
  {
    title: "Ajudar pessoas e grupos",
    description: "Pessoas que desejam ampliar sua capacidade de ajudar outras pessoas, famílias e grupos.",
  },
  {
    title: "Agentes planetários",
    description: "Interessados em atuar como agentes planetários, participando de ativações coletivas e de grande escala.",
  },
  {
    title: "Curiosos e aplicação pessoal",
    description: "Pessoas curiosas sobre Radiestesia e Radiônica para uso pessoal, familiar e no cotidiano.",
  },
]

export function CourseForWhoSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section
      id="para-quem"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[40%] h-[50%] bg-blue-glow/10 rounded-full blur-[130px] -translate-x-1/4" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Título */}
        <div ref={titleRef} className="relative text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 0.65, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-56 w-56 lg:block"
          >
            <Image
              src={lionessArtwork}
              alt=""
              fill
              sizes="224px"
              className="object-contain"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            04
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
          >
            Para quem
            <br />
            <span className="text-primary">é o curso?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto"
          >
            O curso é acolhedor e aberto — seja você iniciante ou já caminhante das práticas energéticas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.title} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfileCard({
  profile,
  index,
}: {
  profile: { title: string; description: string }
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-5 p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-base font-medium text-foreground mb-2">{profile.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>
      </div>
    </motion.div>
  )
}
