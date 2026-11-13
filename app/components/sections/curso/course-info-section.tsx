"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const infoItems = [
  { icon: "📅", label: "Datas", value: "05 e 06 de dezembro de 2026" },
  { icon: "⏰", label: "Horário", value: "Sábado e domingo, das 09h às 18h" },
  { icon: "📍", label: "Local", value: "Espaço Munay Terapias" },
  { icon: "🗺️", label: "Região", value: "Vicente Pires – DF" },
  { icon: "👥", label: "Modalidade", value: "Presencial · Única turma de 2026" },
  { icon: "⌛", label: "Carga horária", value: "16 horas totais" },
]

export function CourseInfoSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section
      id="informacoes-turma"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[40%] h-[55%] bg-blue-glow/10 rounded-full blur-[130px]" />
        <div className="absolute top-0 left-0 w-[30%] h-[40%] bg-gold-light/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Título */}
        <div ref={titleRef} className="text-center mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            07
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
          >
            Informações
            <br />
            <span className="text-primary">da Turma</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground text-lg mt-6 max-w-md mx-auto"
          >
            Inscrições abertas. Vagas limitadas para a única turma presencial de 2026.
          </motion.p>
        </div>

        {/* Grid de informações */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {infoItems.map((item, index) => (
            <InfoCard key={item.label} item={item} index={index} />
          ))}
        </div>

        {/* Banner de destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Oportunidade especial</p>
          <p className="text-md font-medium text-foreground">
            Pagamento à vista liberado para essa turma. Aproveite a oportunidade de garantir sua vaga com desconto especial!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({
  item,
  index,
}: {
  item: { icon: string; label: string; value: string }
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
    >
      <span className="text-2xl mb-4 block">{item.icon}</span>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{item.label}</p>
      <p className="text-base font-medium text-foreground">{item.value}</p>
    </motion.div>
  )
}
