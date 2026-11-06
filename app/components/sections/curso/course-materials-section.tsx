"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const required = [
  { label: "Um pêndulo", detail: "De qualquer tipo ou tamanho." },
  { label: "Blocos ou folhas", detail: "Para anotações durante o curso." },
  { label: "Mesa de Estação Radiônica", detail: "Orientação para aquisição diretamente com a facilitadora." },
]

const included = [
  { label: "Apostila completa do curso", detail: "Material exclusivo entregue no dia da formação." },
]

export function CourseMaterialsSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section
      id="materiais"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[35%] h-[50%] bg-gold-light/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Título */}
        <div ref={titleRef} className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-8xl md:text-9xl font-serif font-light text-muted/30"
          >
            05
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mt-4 text-balance"
          >
            Materiais
            <br />
            <span className="text-primary">necessários</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Materiais necessários */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-medium mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-muted-foreground/40" />
              O que trazer
            </h3>
            <ul className="space-y-6">
              {required.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 pb-6 border-b border-border/40 last:border-0 last:pb-0"
                >
                  <span className="text-primary mt-1 flex-shrink-0">◆</span>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Materiais inclusos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-primary/40" />
              <span className="text-primary">Incluso no curso</span>
            </h3>
            <ul className="space-y-6">
              {included.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 pb-6 border-b border-border/40 last:border-0 last:pb-0"
                >
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
