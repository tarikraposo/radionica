"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const learnings = [
  {
    icon: "✦",
    title: "Ativações pessoais e para outros",
    description: "Aprenda a ativar mesas para si mesmo e para outras pessoas, trabalhando com diferentes situações e necessidades.",
  },
  {
    icon: "✦",
    title: "Ativações para ambientes",
    description: "Realize ativações energéticas para casas, residências, cidades, bairros, hospitais e empresas.",
  },
  {
    icon: "✦",
    title: "Processos jurídicos",
    description: "Aplique ativações radiônicas voltadas ao suporte e à harmonização de processos jurídicos.",
  },
  {
    icon: "✦",
    title: "Saúde e comportamento animal",
    description: "Realize ativações relacionadas à saúde e ao comportamento dos animais.",
  },
  {
    icon: "✦",
    title: "Mesas Planetárias",
    description: "Participe de ativações de Mesas Planetárias junto a grupos de operadores, atuando como agente planetário.",
  },
]

export function CourseLearnSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section
      ref={sectionRef}
      id="o-que-aprender"
      className="relative py-32 overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 right-0 w-[40%] h-[60%] bg-blue-glow/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[35%] h-[45%] bg-gold-light/8 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Título */}
        <div ref={titleRef} className="mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            03
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
          >
            O que você aprenderá
            <br />
            <span className="text-primary">e poderá realizar</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground text-lg mt-6 max-w-xl"
          >
            Ao concluir a formação, você estará apto(a) a realizar ativações em múltiplos contextos,
            expandindo sua atuação como operador(a) de MER.
          </motion.p>
        </div>

        {/* Grid de aprendizados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {learnings.map((item, index) => (
            <LearnCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LearnCard({
  item,
  index,
}: {
  item: { icon: string; title: string; description: string }
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
      className="relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <span className="text-primary text-xl mb-4 block">{item.icon}</span>
      <h3 className="text-lg font-medium mb-3 text-foreground">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
    </motion.div>
  )
}
